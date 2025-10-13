declare module "com.direwolf20.justdirethings.common.blocks.resources.RawBlazegoldOre" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseRawOre, $BaseRawOre$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseRawOre"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RawBlazegoldOre extends $BaseRawOre {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawBlazegoldOre$$Type = ($RawBlazegoldOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawBlazegoldOre_ = $RawBlazegoldOre$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.EclipseAlloyHoe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$BaseHoe, $BaseHoe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseHoe"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $EclipseAlloyHoe extends $BaseHoe implements $PoweredTool {
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

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyHoe$$Type = ($EclipseAlloyHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyHoe_ = $EclipseAlloyHoe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.Ability$UseOnAbilityAction" {
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $Ability$UseOnAbilityAction {

 "execute"(arg0: $UseOnContext$$Type): boolean

(arg0: $UseOnContext): boolean
}

export namespace $Ability$UseOnAbilityAction {
const probejs$$marker: never
}
export class $Ability$UseOnAbilityAction$$Static implements $Ability$UseOnAbilityAction {


 "execute"(arg0: $UseOnContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ability$UseOnAbilityAction$$Type = ((arg0: $UseOnContext) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ability$UseOnAbilityAction_ = $Ability$UseOnAbilityAction$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.BlazegoldLeggings" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseLeggings, $BaseLeggings$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseLeggings"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $BlazegoldLeggings extends $BaseLeggings {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldLeggings$$Type = ($BlazegoldLeggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldLeggings_ = $BlazegoldLeggings$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.polymorphicfluid.PolymorphicFluidBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PolymorphicFluidBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicFluidBlock$$Type = ($PolymorphicFluidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicFluidBlock_ = $PolymorphicFluidBlock$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.items.TemplateItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $TemplateItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateItem$$Type = ($TemplateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateItem_ = $TemplateItem$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.CelestigemSword" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BaseSword, $BaseSword$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseSword"

export class $CelestigemSword extends $BaseSword implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemSword$$Type = ($CelestigemSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemSword_ = $CelestigemSword$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.polymorphicfluid.PolymorphicFluid$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$PolymorphicFluid, $PolymorphicFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.polymorphicfluid.PolymorphicFluid"

export class $PolymorphicFluid$Flowing extends $PolymorphicFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicFluid$Flowing$$Type = ($PolymorphicFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicFluid$Flowing_ = $PolymorphicFluid$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.PocketGenerator" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PoweredItem, $PoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ToggleableItem, $ToggleableItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableItem"
import {$EnergyStorageItemStackNoReceive, $EnergyStorageItemStackNoReceive$$Type} from "com.direwolf20.justdirethings.common.capabilities.EnergyStorageItemStackNoReceive"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PocketGenerator extends $Item implements $PoweredItem, $ToggleableItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "tryBurn"(arg0: $EnergyStorageItemStackNoReceive$$Type, arg1: $ItemStack$$Type): void
public "getFEPerTick"(): integer
public "getMaxEnergy"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "setFuelMultiplier"(arg0: $ItemStack$$Type, arg1: integer): void
public "getFuelMultiplier"(arg0: $ItemStack$$Type): integer
public "getBurnSpeedMultiplier"(arg0: $ItemStack$$Type): integer
public "getFePerFuelTick"(): integer
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "fEPerTick"(): integer
get "maxEnergy"(): integer
get "fePerFuelTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketGenerator$$Type = ($PocketGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketGenerator_ = $PocketGenerator$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.GooSpreadRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GooSpreadRecipe, $GooSpreadRecipe$$Type} from "com.direwolf20.justdirethings.datagen.recipes.GooSpreadRecipe"

export class $GooSpreadRecipe$Serializer implements $RecipeSerializer<($GooSpreadRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GooSpreadRecipe)>

constructor()

public "codec"(): $MapCodec<($GooSpreadRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($GooSpreadRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $GooSpreadRecipe
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $GooSpreadRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooSpreadRecipe$Serializer$$Type = ($GooSpreadRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooSpreadRecipe$Serializer_ = $GooSpreadRecipe$Serializer$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt2fuel.RefinedT2Fuel" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$RefinedFuel, $RefinedFuel$$Type} from "com.direwolf20.justdirethings.common.fluids.basefluids.RefinedFuel"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $RefinedT2Fuel extends $BaseFlowingFluid implements $RefinedFuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public "fePerMb"(): integer
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT2Fuel$$Type = ($RefinedT2Fuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT2Fuel_ = $RefinedT2Fuel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.GeneratorT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GeneratorT1 extends $BaseMachineBlock {
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "direRotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorT1$$Type = ($GeneratorT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratorT1_ = $GeneratorT1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.BlockSwapperT2" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockSwapperT2 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSwapperT2$$Type = ($BlockSwapperT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSwapperT2_ = $BlockSwapperT2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.BlockSwapperT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockSwapperT1 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSwapperT1$$Type = ($BlockSwapperT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSwapperT1_ = $BlockSwapperT1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt3fuel.UnrefinedT3FuelType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnrefinedT3FuelType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT3FuelType$$Type = ($UnrefinedT3FuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT3FuelType_ = $UnrefinedT3FuelType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.Coal_T1" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $Coal_T1 extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getBurnSpeedMultiplier"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "burnSpeedMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Coal_T1$$Type = ($Coal_T1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Coal_T1_ = $Coal_T1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.Coal_T2" {
import {$Coal_T1, $Coal_T1$$Type} from "com.direwolf20.justdirethings.common.items.resources.Coal_T1"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $Coal_T2 extends $Coal_T1 {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getBurnSpeedMultiplier"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "burnSpeedMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Coal_T2$$Type = ($Coal_T2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Coal_T2_ = $Coal_T2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.Coal_T3" {
import {$Coal_T1, $Coal_T1$$Type} from "com.direwolf20.justdirethings.common.items.resources.Coal_T1"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $Coal_T3 extends $Coal_T1 {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getBurnSpeedMultiplier"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "burnSpeedMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Coal_T3$$Type = ($Coal_T3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Coal_T3_ = $Coal_T3$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.Coal_T4" {
import {$Coal_T1, $Coal_T1$$Type} from "com.direwolf20.justdirethings.common.items.resources.Coal_T1"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $Coal_T4 extends $Coal_T1 {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getBurnSpeedMultiplier"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "burnSpeedMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Coal_T4$$Type = ($Coal_T4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Coal_T4_ = $Coal_T4$$Type;
}}
declare module "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $NBTHelpers$BoundInventory extends $Record {
static readonly "CODEC": $Codec<($NBTHelpers$BoundInventory)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($NBTHelpers$BoundInventory)>

constructor(globalPos: $GlobalPos$$Type, direction: $Direction$$Type)

public "direction"(): $Direction
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "toNBT"(arg0: $NBTHelpers$BoundInventory$$Type): $CompoundTag
public "globalPos"(): $GlobalPos
public static "fromNBT"(arg0: $CompoundTag$$Type): $NBTHelpers$BoundInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTHelpers$BoundInventory$$Type = ({"globalPos"?: $GlobalPos$$Type, "direction"?: $Direction$$Type}) | ([globalPos?: $GlobalPos$$Type, direction?: $Direction$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTHelpers$BoundInventory_ = $NBTHelpers$BoundInventory$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.portalfluid.PortalFluid$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$PortalFluid, $PortalFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.portalfluid.PortalFluid"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $PortalFluid$Flowing extends $PortalFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalFluid$Flowing$$Type = ($PortalFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalFluid$Flowing_ = $PortalFluid$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.PaxelRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PaxelRecipe, $PaxelRecipe$$Type} from "com.direwolf20.justdirethings.datagen.recipes.PaxelRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PaxelRecipe$Serializer implements $RecipeSerializer<($PaxelRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PaxelRecipe)>

constructor()

public "codec"(): $MapCodec<($PaxelRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PaxelRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaxelRecipe$Serializer$$Type = ($PaxelRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaxelRecipe$Serializer_ = $PaxelRecipe$Serializer$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.basefluids.RefinedFuel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RefinedFuel {

 "fePerMb"(): integer

(): integer
}

export namespace $RefinedFuel {
const probejs$$marker: never
}
export class $RefinedFuel$$Static implements $RefinedFuel {


 "fePerMb"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedFuel$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedFuel_ = $RefinedFuel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.EclipseAlloyLeggings" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$BaseLeggings, $BaseLeggings$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseLeggings"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $EclipseAlloyLeggings extends $BaseLeggings implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyLeggings$$Type = ($EclipseAlloyLeggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyLeggings_ = $EclipseAlloyLeggings$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.FerricoreBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FerricoreBlock extends $Block {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreBlock$$Type = ($FerricoreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreBlock_ = $FerricoreBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.paradoxparticle.ParadoxParticleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $ParadoxParticleData implements $ParticleOptions {
static readonly "MAP_CODEC": $MapCodec<($ParadoxParticleData)>
readonly "targetZ": double
readonly "targetY": double
readonly "targetX": double
readonly "ticksPerBlock": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ParadoxParticleData)>
readonly "paradox_uuid": $UUID

constructor(arg0: $ItemStack$$Type, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: $UUID$$Type)

public "getType"(): $ParticleType<($ParadoxParticleData)>
public "getItemStack"(): $ItemStack
public "getTargetX"(): double
public "getTargetY"(): double
public "getTargetZ"(): double
public "getTicksPerBlock"(): integer
public "getParadox_uuid"(): $UUID
get "type"(): $ParticleType<($ParadoxParticleData)>
get "itemStack"(): $ItemStack
get "targetX"(): double
get "targetY"(): double
get "targetZ"(): double
get "ticksPerBlock"(): integer
get "paradox_uuid"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParadoxParticleData$$Type = ($ParadoxParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParadoxParticleData_ = $ParadoxParticleData$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.abilityupgrades.UpgradeTemplate" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $UpgradeTemplate extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeTemplate$$Type = ($UpgradeTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeTemplate_ = $UpgradeTemplate$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $GadgetTarget extends $Enum<($GadgetTarget)> {
static readonly "DESTRUCTION": $GadgetTarget
static readonly "COPYPASTE": $GadgetTarget
static readonly "BUILDING": $GadgetTarget
static readonly "EXCHANGING": $GadgetTarget
static readonly "CUTPASTE": $GadgetTarget


public static "values"(): ($GadgetTarget)[]
public static "valueOf"(arg0: StringJS): $GadgetTarget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetTarget$$Type = (("building") | ("exchanging") | ("destruction") | ("copypaste") | ("cutpaste"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GadgetTarget_ = $GadgetTarget$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.ParadoxMachine" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ParadoxMachine extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParadoxMachine$$Type = ($ParadoxMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParadoxMachine_ = $ParadoxMachine$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.glitterparticle.GlitterParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$GlitterParticleData, $GlitterParticleData$$Type} from "com.direwolf20.justdirethings.client.particles.glitterparticle.GlitterParticleData"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $GlitterParticleType extends $ParticleType<($GlitterParticleData)> {

constructor(arg0: boolean)

public "getType"(): $GlitterParticleType
public "codec"(): $MapCodec<($GlitterParticleData)>
public "streamCodec"(): $StreamCodec<($FriendlyByteBuf), ($GlitterParticleData)>
get "type"(): $GlitterParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlitterParticleType$$Type = ($GlitterParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlitterParticleType_ = $GlitterParticleType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.FluidCanister" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$FluidCanister$FillMode, $FluidCanister$FillMode$$Type} from "com.direwolf20.justdirethings.common.items.FluidCanister$FillMode"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidContainingItem, $FluidContainingItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.FluidContainingItem"
import {$SimpleFluidContent, $SimpleFluidContent$$Type} from "net.neoforged.neoforge.fluids.SimpleFluidContent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $FluidCanister extends $Item implements $FluidContainingItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getFluid"(arg0: $ItemStack$$Type): $Fluid
public "placeFluid"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
public static "nextFillMode"(arg0: $ItemStack$$Type): void
public static "getFillMode"(arg0: $ItemStack$$Type): $FluidCanister$FillMode
public static "getFluidColor"(arg0: $ItemStack$$Type): integer
public static "getFluidData"(arg0: $ItemStack$$Type): $SimpleFluidContent
public "pickupFluid"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
public "getMaxMB"(): integer
public static "getFullness"(arg0: $ItemStack$$Type): integer
public "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "consumeFluid"(arg0: $ItemStack$$Type, arg1: integer): void
public static "hasEnoughFluid"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "getAvailableFluid"(arg0: $ItemStack$$Type): integer
public "isFluidBarVisible"(arg0: $ItemStack$$Type): boolean
public "getFluidBarWidth"(arg0: $ItemStack$$Type): integer
public "getFluidBarColor"(arg0: $ItemStack$$Type): integer
public static "getLiquidBlockAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $LiquidBlock
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxMB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCanister$$Type = ($FluidCanister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidCanister_ = $FluidCanister$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.RawFerricore" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $RawFerricore extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawFerricore$$Type = ($RawFerricore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawFerricore_ = $RawFerricore$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt4fuel.RefinedT4Fuel$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RefinedT4Fuel, $RefinedT4Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.refinedt4fuel.RefinedT4Fuel"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $RefinedT4Fuel$Source extends $RefinedT4Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT4Fuel$Source$$Type = ($RefinedT4Fuel$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT4Fuel$Source_ = $RefinedT4Fuel$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.portalfluid.PortalFluidBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PortalFluidBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalFluidBlock$$Type = ($PortalFluidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalFluidBlock_ = $PortalFluidBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.FerricoreHelmet" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BaseHelmet, $BaseHelmet$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseHelmet"

export class $FerricoreHelmet extends $BaseHelmet {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreHelmet$$Type = ($FerricoreHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreHelmet_ = $FerricoreHelmet$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt3fuel.UnrefinedT3FuelBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UnrefinedT3FuelBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT3FuelBlock$$Type = ($UnrefinedT3FuelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT3FuelBlock_ = $UnrefinedT3FuelBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.abilityupgrades.UpgradeBlank" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $UpgradeBlank extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeBlank$$Type = ($UpgradeBlank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeBlank_ = $UpgradeBlank$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.FerricoreShovel" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BaseShovel, $BaseShovel$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseShovel"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FerricoreShovel extends $BaseShovel {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreShovel$$Type = ($FerricoreShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreShovel_ = $FerricoreShovel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.BlockPlacerT2" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockPlacerT2 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerT2$$Type = ($BlockPlacerT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlacerT2_ = $BlockPlacerT2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.BlockPlacerT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockPlacerT1 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerT1$$Type = ($BlockPlacerT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlacerT1_ = $BlockPlacerT1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.CoalBlock_T2" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CoalBlock_T1, $CoalBlock_T1$$Type} from "com.direwolf20.justdirethings.common.blocks.resources.CoalBlock_T1"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CoalBlock_T2 extends $CoalBlock_T1 {
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

public "getBurnSpeedMultiplier"(): integer
public "asHolder"(): $Holder<(any)>
get "burnSpeedMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoalBlock_T2$$Type = ($CoalBlock_T2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoalBlock_T2_ = $CoalBlock_T2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.CoalBlock_T3" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CoalBlock_T1, $CoalBlock_T1$$Type} from "com.direwolf20.justdirethings.common.blocks.resources.CoalBlock_T1"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CoalBlock_T3 extends $CoalBlock_T1 {
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

public "getBurnSpeedMultiplier"(): integer
public "asHolder"(): $Holder<(any)>
get "burnSpeedMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoalBlock_T3$$Type = ($CoalBlock_T3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoalBlock_T3_ = $CoalBlock_T3$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.CoalBlock_T1" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CoalBlock_T1 extends $Block {
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

public "getBurnSpeedMultiplier"(): integer
public "asHolder"(): $Holder<(any)>
get "burnSpeedMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoalBlock_T1$$Type = ($CoalBlock_T1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoalBlock_T1_ = $CoalBlock_T1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.CoalBlock_T4" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CoalBlock_T1, $CoalBlock_T1$$Type} from "com.direwolf20.justdirethings.common.blocks.resources.CoalBlock_T1"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CoalBlock_T4 extends $CoalBlock_T1 {
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

public "getBurnSpeedMultiplier"(): integer
public "asHolder"(): $Holder<(any)>
get "burnSpeedMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoalBlock_T4$$Type = ($CoalBlock_T4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoalBlock_T4_ = $CoalBlock_T4$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.EclipseAlloyBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EclipseAlloyBlock extends $Block {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyBlock$$Type = ($EclipseAlloyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyBlock_ = $EclipseAlloyBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.CelestigemBoots" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseBoots, $BaseBoots$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseBoots"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $CelestigemBoots extends $BaseBoots implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemBoots$$Type = ($CelestigemBoots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemBoots_ = $CelestigemBoots$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.CelestigemHoe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$BaseHoe, $BaseHoe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseHoe"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $CelestigemHoe extends $BaseHoe implements $PoweredTool {
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

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemHoe$$Type = ($CelestigemHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemHoe_ = $CelestigemHoe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.BlazegoldBoots" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseBoots, $BaseBoots$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseBoots"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $BlazegoldBoots extends $BaseBoots {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldBoots$$Type = ($BlazegoldBoots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldBoots_ = $BlazegoldBoots$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.FerricoreBoots" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseBoots, $BaseBoots$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseBoots"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $FerricoreBoots extends $BaseBoots {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreBoots$$Type = ($FerricoreBoots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreBoots_ = $FerricoreBoots$$Type;
}}
declare module "com.direwolf20.justdirethings.common.capabilities.EnergyStorageItemStackNoReceive" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnergyStorageItemstack, $EnergyStorageItemstack$$Type} from "com.direwolf20.justdirethings.common.capabilities.EnergyStorageItemstack"

export class $EnergyStorageItemStackNoReceive extends $EnergyStorageItemstack {

constructor(arg0: integer, arg1: $ItemStack$$Type)

public "canReceive"(): boolean
public "forceReceiveEnergy"(arg0: integer, arg1: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyStorageItemStackNoReceive$$Type = ($EnergyStorageItemStackNoReceive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyStorageItemStackNoReceive_ = $EnergyStorageItemStackNoReceive$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.basetools.BasePickaxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$PickaxeItem, $PickaxeItem$$Type} from "net.minecraft.world.item.PickaxeItem"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BasePickaxe extends $PickaxeItem implements $ToggleableTool, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePickaxe$$Type = ($BasePickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePickaxe_ = $BasePickaxe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ToolRecords$AbilityBinding extends $Record {
static readonly "CODEC": $Codec<($ToolRecords$AbilityBinding)>
static readonly "LIST_CODEC": $Codec<($List<($ToolRecords$AbilityBinding)>)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ToolRecords$AbilityBinding)>

constructor(abilityName: StringJS, key: integer, isMouse: boolean, requireEquipped: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): integer
public "abilityName"(): StringJS
public "isMouse"(): boolean
public "requireEquipped"(): boolean
get "mouse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolRecords$AbilityBinding$$Type = ({"isMouse"?: boolean, "requireEquipped"?: boolean, "abilityName"?: StringJS, "key"?: integer}) | ([isMouse?: boolean, requireEquipped?: boolean, abilityName?: StringJS, key?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolRecords$AbilityBinding_ = $ToolRecords$AbilityBinding$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.timefluid.TimeFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $TimeFluid extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeFluid$$Type = ($TimeFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeFluid_ = $TimeFluid$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unstableportalfluid.UnstablePortalFluid$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$UnstablePortalFluid, $UnstablePortalFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.unstableportalfluid.UnstablePortalFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnstablePortalFluid$Source extends $UnstablePortalFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnstablePortalFluid$Source$$Type = ($UnstablePortalFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnstablePortalFluid$Source_ = $UnstablePortalFluid$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.EclipseAlloyPaxel" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$BasePaxel, $BasePaxel$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BasePaxel"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $EclipseAlloyPaxel extends $BasePaxel implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyPaxel$$Type = ($EclipseAlloyPaxel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyPaxel_ = $EclipseAlloyPaxel$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetDestruction" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$BaseGadget, $BaseGadget$$Type} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$GadgetTarget, $GadgetTarget$$Type} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $GadgetDestruction extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "undo"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
public "gadgetTarget"(): $GadgetTarget
public "getEnergyCost"(): integer
public "getEnergyMax"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetDestruction$$Type = ($GadgetDestruction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GadgetDestruction_ = $GadgetDestruction$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.FluidPlacerT2" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPlacerT2 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlacerT2$$Type = ($FluidPlacerT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlacerT2_ = $FluidPlacerT2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.FluidPlacerT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPlacerT1 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlacerT1$$Type = ($FluidPlacerT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlacerT1_ = $FluidPlacerT1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
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
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $BaseMachineBlock extends $Block implements $EntityBlock {
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public static "never"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "direRotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "direRotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseMachineBlock$$Type = ($BaseMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseMachineBlock_ = $BaseMachineBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.FerricoreWrench" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $FerricoreWrench extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "removeBoundTo"(arg0: $ItemStack$$Type): void
public static "getBoundTo"(arg0: $ItemStack$$Type): $GlobalPos
public static "setBoundTo"(arg0: $ItemStack$$Type, arg1: $GlobalPos$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreWrench$$Type = ($FerricoreWrench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreWrench_ = $FerricoreWrench$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.FerricoreHoe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseHoe, $BaseHoe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseHoe"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $FerricoreHoe extends $BaseHoe {
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

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreHoe$$Type = ($FerricoreHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreHoe_ = $FerricoreHoe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.TimeCrystalBuddingBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BuddingAmethystBlock, $BuddingAmethystBlock$$Type} from "net.minecraft.world.level.block.BuddingAmethystBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TimeCrystalBuddingBlock extends $BuddingAmethystBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BuddingAmethystBlock)>
static readonly "GROWTH_CHANCE": integer
static readonly "STAGE": $IntegerProperty
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

public "advance"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: integer): void
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canAdvanceTo"(arg0: $Level$$Type, arg1: $BlockState$$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canAdvanceToCustom"(arg0: $Level$$Type, arg1: $BlockState$$Type): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeCrystalBuddingBlock$$Type = ($TimeCrystalBuddingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeCrystalBuddingBlock_ = $TimeCrystalBuddingBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.ExperienceHolder" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ExperienceHolder extends $BaseMachineBlock {
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

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceHolder$$Type = ($ExperienceHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceHolder_ = $ExperienceHolder$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.blocks.RenderBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RenderBlock extends $Block implements $EntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBlock$$Type = ($RenderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBlock_ = $RenderBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.CelestigemHelmet" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BaseHelmet, $BaseHelmet$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseHelmet"

export class $CelestigemHelmet extends $BaseHelmet implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemHelmet$$Type = ($CelestigemHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemHelmet_ = $CelestigemHelmet$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.CreatureCatcher" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $CreatureCatcher extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "hasEntity"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreatureCatcher$$Type = ($CreatureCatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreatureCatcher_ = $CreatureCatcher$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.GooSpreadRecipeTag$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$GooSpreadRecipeTag, $GooSpreadRecipeTag$$Type} from "com.direwolf20.justdirethings.datagen.recipes.GooSpreadRecipeTag"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $GooSpreadRecipeTag$Serializer implements $RecipeSerializer<($GooSpreadRecipeTag)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GooSpreadRecipeTag)>

constructor()

public "codec"(): $MapCodec<($GooSpreadRecipeTag)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($GooSpreadRecipeTag)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $GooSpreadRecipeTag
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $GooSpreadRecipeTag$$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooSpreadRecipeTag$Serializer$$Type = ($GooSpreadRecipeTag$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooSpreadRecipeTag$Serializer_ = $GooSpreadRecipeTag$Serializer$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt4fuel.UnrefinedT4FuelBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UnrefinedT4FuelBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT4FuelBlock$$Type = ($UnrefinedT4FuelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT4FuelBlock_ = $UnrefinedT4FuelBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.basetools.BaseHoe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HoeItem, $HoeItem$$Type} from "net.minecraft.world.item.HoeItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseHoe extends $HoeItem implements $ToggleableTool, $LeftClickableTool {
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

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseHoe$$Type = ($BaseHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseHoe_ = $BaseHoe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.SensorT2" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SensorT2 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SensorT2$$Type = ($SensorT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SensorT2_ = $SensorT2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt2fuel.RefinedT2FuelType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $RefinedT2FuelType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT2FuelType$$Type = ($RefinedT2FuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT2FuelType_ = $RefinedT2FuelType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.SensorT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SensorT1 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SensorT1$$Type = ($SensorT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SensorT1_ = $SensorT1$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.AbilityRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$AbilityRecipe, $AbilityRecipe$$Type} from "com.direwolf20.justdirethings.datagen.recipes.AbilityRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AbilityRecipe$Serializer implements $RecipeSerializer<($AbilityRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbilityRecipe)>

constructor()

public "codec"(): $MapCodec<($AbilityRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AbilityRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityRecipe$Serializer$$Type = ($AbilityRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityRecipe$Serializer_ = $AbilityRecipe$Serializer$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt4fuel.RefinedT4Fuel$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RefinedT4Fuel, $RefinedT4Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.refinedt4fuel.RefinedT4Fuel"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $RefinedT4Fuel$Flowing extends $RefinedT4Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT4Fuel$Flowing$$Type = ($RefinedT4Fuel$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT4Fuel$Flowing_ = $RefinedT4Fuel$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.CharcoalBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CharcoalBlock extends $Block {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharcoalBlock$$Type = ($CharcoalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharcoalBlock_ = $CharcoalBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.TimeCrystalBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$AmethystBlock, $AmethystBlock$$Type} from "net.minecraft.world.level.block.AmethystBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TimeCrystalBlock extends $AmethystBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AmethystBlock)>
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeCrystalBlock$$Type = ($TimeCrystalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeCrystalBlock_ = $TimeCrystalBlock$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.items.BaseGadget" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemActionContext, $ItemActionContext$$Type} from "com.direwolf20.buildinggadgets2.util.context.ItemActionContext"
import {$GadgetTarget, $GadgetTarget$$Type} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $BaseGadget extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "undo"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "rotateModes"(arg0: $ItemStack$$Type): $ResourceLocation
public "gadgetTarget"(): $GadgetTarget
public static "getHitPos"(arg0: $ItemActionContext$$Type): $BlockPos
public static "getGadget"(arg0: $Player$$Type): $ItemStack
public "getEnergyCost"(): integer
public "getEnergyMax"(): integer
public "canUndo"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "bindToInventory"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseGadget$$Type = ($BaseGadget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseGadget_ = $BaseGadget$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.EclipseAlloyAxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$BaseAxe, $BaseAxe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseAxe"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $EclipseAlloyAxe extends $BaseAxe implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "getStrippables"(): $Map<($Block), ($Block)>
public static "setStrippables"(strippedBlocks: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyAxe$$Type = ($EclipseAlloyAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyAxe_ = $EclipseAlloyAxe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt2fuel.UnrefinedT2Fuel" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $UnrefinedT2Fuel extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT2Fuel$$Type = ($UnrefinedT2Fuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT2Fuel_ = $UnrefinedT2Fuel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blockentities.basebe.GooBlockBE_Base" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GooBlockBE_Base extends $BlockEntity {
readonly "durationCache": $Map<($BlockState), (integer)>
readonly "sidedDurations": $Map<($Direction), (integer)>
readonly "sidedCounters": $Map<($Direction), (integer)>
readonly "outputCache": $Map<($BlockState), ($BlockState)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tickClient"(): void
public "tickServer"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "spawnParticles"(arg0: $Direction$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "counterReducer"(): integer
public "tickCounters"(): void
public "checkSides"(): void
public "findOutput"(arg0: $BlockState$$Type): $BlockState
public "findDuration"(arg0: $BlockState$$Type): integer
public "populateCaches"(arg0: $BlockState$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getTier"(): integer
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "markDirtyClient"(): void
public "updateSideCounter"(arg0: $Direction$$Type, arg1: integer): boolean
public "setBlockToTarget"(arg0: $BlockState$$Type, arg1: $Direction$$Type): void
public "getCraftingDuration"(arg0: $Direction$$Type): integer
public "getRemainingTimeFor"(arg0: $Direction$$Type): integer
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "tier"(): integer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooBlockBE_Base$$Type = ($GooBlockBE_Base);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooBlockBE_Base_ = $GooBlockBE_Base$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.BlazegoldSword" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseSword, $BaseSword$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseSword"

export class $BlazegoldSword extends $BaseSword {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldSword$$Type = ($BlazegoldSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldSword_ = $BlazegoldSword$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.CelestigemPickaxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BasePickaxe, $BasePickaxe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BasePickaxe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $CelestigemPickaxe extends $BasePickaxe implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemPickaxe$$Type = ($CelestigemPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemPickaxe_ = $CelestigemPickaxe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.EclipseAlloyBow" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BaseBow, $BaseBow$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseBow"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $EclipseAlloyBow extends $BaseBow implements $PoweredTool {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "MAX_DRAW_DURATION": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "DEFAULT_RANGE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxDraw"(): float
public "getMaxEnergy"(): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxDraw"(): float
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyBow$$Type = ($EclipseAlloyBow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyBow_ = $EclipseAlloyBow$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt2fuel.UnrefinedT2Fuel$Flowing" {
import {$UnrefinedT2Fuel, $UnrefinedT2Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.unrefinedt2fuel.UnrefinedT2Fuel"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnrefinedT2Fuel$Flowing extends $UnrefinedT2Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT2Fuel$Flowing$$Type = ($UnrefinedT2Fuel$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT2Fuel$Flowing_ = $UnrefinedT2Fuel$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.MachineSettingsCopier" {
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
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $MachineSettingsCopier extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "setSettings"(arg0: $ItemStack$$Type, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "getCopyArea"(arg0: $ItemStack$$Type): boolean
public static "getCopyOffset"(arg0: $ItemStack$$Type): boolean
public static "getCopyFilter"(arg0: $ItemStack$$Type): boolean
public "loadSettings"(arg0: $Level$$Type, arg1: $BlockEntity$$Type, arg2: $ItemStack$$Type): void
public "saveSettings"(arg0: $Level$$Type, arg1: $BlockEntity$$Type, arg2: $ItemStack$$Type): void
public static "getCopyRedstone"(arg0: $ItemStack$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineSettingsCopier$$Type = ($MachineSettingsCopier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineSettingsCopier_ = $MachineSettingsCopier$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt3fuel.RefinedT3FuelType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $RefinedT3FuelType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT3FuelType$$Type = ($RefinedT3FuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT3FuelType_ = $RefinedT3FuelType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseRawOre" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseRawOre extends $Block {
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
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseRawOre$$Type = ($BaseRawOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseRawOre_ = $BaseRawOre$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.PolymorphicWand" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BaseToggleableTool, $BaseToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.BaseToggleableTool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$FluidContainingItem, $FluidContainingItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.FluidContainingItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $PolymorphicWand extends $BaseToggleableTool implements $LeftClickableTool, $FluidContainingItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getMaxMB"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "pickupFluid"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
public static "consumeFluid"(arg0: $ItemStack$$Type, arg1: integer): void
public static "hasEnoughFluid"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "getAvailableFluid"(arg0: $ItemStack$$Type): integer
public "isFluidBarVisible"(arg0: $ItemStack$$Type): boolean
public "getFluidBarWidth"(arg0: $ItemStack$$Type): integer
public "getFluidBarColor"(arg0: $ItemStack$$Type): integer
public static "getLiquidBlockAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $LiquidBlock
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxMB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicWand$$Type = ($PolymorphicWand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicWand_ = $PolymorphicWand$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.InventoryHolder" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InventoryHolder extends $BaseMachineBlock {
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "direRotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryHolder$$Type = ($InventoryHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryHolder_ = $InventoryHolder$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.TotemOfDeathRecall" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NBTHelpers$GlobalVec3, $NBTHelpers$GlobalVec3$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$GlobalVec3"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $TotemOfDeathRecall extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public static "getBoundTo"(arg0: $ItemStack$$Type): $NBTHelpers$GlobalVec3
public static "setBoundTo"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$GlobalVec3$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemOfDeathRecall$$Type = ($TotemOfDeathRecall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemOfDeathRecall_ = $TotemOfDeathRecall$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt4fuel.RefinedT4FuelBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RefinedT4FuelBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT4FuelBlock$$Type = ($RefinedT4FuelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT4FuelBlock_ = $RefinedT4FuelBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"

export interface $LeftClickableTool {

}

export namespace $LeftClickableTool {
function getBindingMode(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
function setBindingMode(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
function getLeftClickList(arg0: $ItemStack$$Type): $Set<($Ability)>
function setLeftClickList(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
function getCustomBindingList(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
function setCustomBindingList(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
function addToLeftClickList(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
function getAbilityBinding(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
function addToCustomBindingList(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
function getLeftClickableItem(arg0: $Player$$Type): $ItemStack
function removeFromCustomBindingList(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
function removeFromLeftClickList(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
function getCustomBindingListFor(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
const probejs$$marker: never
}
export class $LeftClickableTool$$Static implements $LeftClickableTool {


static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeftClickableTool$$Type = ($LeftClickableTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeftClickableTool_ = $LeftClickableTool$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemFlowParticleData, $ItemFlowParticleData$$Type} from "com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleData"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ItemFlowParticleType extends $ParticleType<($ItemFlowParticleData)> {

constructor(arg0: boolean)

public "getType"(): $ItemFlowParticleType
public "codec"(): $MapCodec<($ItemFlowParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemFlowParticleData)>
get "type"(): $ItemFlowParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFlowParticleType$$Type = ($ItemFlowParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFlowParticleType_ = $ItemFlowParticleType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.TimeCrystalCluster" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$AmethystClusterBlock, $AmethystClusterBlock$$Type} from "net.minecraft.world.level.block.AmethystClusterBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TimeCrystalCluster extends $AmethystClusterBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AmethystClusterBlock)>
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

constructor(arg0: float, arg1: float, arg2: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeCrystalCluster$$Type = ($TimeCrystalCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeCrystalCluster_ = $TimeCrystalCluster$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Base" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GooBlock_Base extends $Block implements $EntityBlock {
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
static readonly "ALIVE": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooBlock_Base$$Type = ($GooBlock_Base);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooBlock_Base_ = $GooBlock_Base$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.BlazegoldPickaxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BasePickaxe, $BasePickaxe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BasePickaxe"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlazegoldPickaxe extends $BasePickaxe {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldPickaxe$$Type = ($BlazegoldPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldPickaxe_ = $BlazegoldPickaxe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.TimeWand" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PoweredItem, $PoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BasePoweredItem, $BasePoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.BasePoweredItem"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidContainingItem, $FluidContainingItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.FluidContainingItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $TimeWand extends $BasePoweredItem implements $PoweredItem, $FluidContainingItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "pickupFluid"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
public "spawnEntity"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type): boolean
public static "getFEPerRate"(): integer
public static "getMBPerRate"(): float
public "hasResources"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer): boolean
public "getMaxEnergy"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "calculateFluidCost"(arg0: $Player$$Type, arg1: integer): integer
public static "calculateFECost"(arg0: $Player$$Type, arg1: integer): integer
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "consumeFluid"(arg0: $ItemStack$$Type, arg1: integer): void
public static "hasEnoughFluid"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxMB"(): integer
public static "getAvailableFluid"(arg0: $ItemStack$$Type): integer
public "isFluidBarVisible"(arg0: $ItemStack$$Type): boolean
public "getFluidBarWidth"(arg0: $ItemStack$$Type): integer
public "getFluidBarColor"(arg0: $ItemStack$$Type): integer
public static "getLiquidBlockAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $LiquidBlock
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "maxMB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeWand$$Type = ($TimeWand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeWand_ = $TimeWand$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.CelestigemChestplate" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$BaseChestplate, $BaseChestplate$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseChestplate"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $CelestigemChestplate extends $BaseChestplate implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public static "isFlyEnabled"(arg0: $ItemStack$$Type): boolean
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemChestplate$$Type = ($CelestigemChestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemChestplate_ = $CelestigemChestplate$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Tier4" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$GooBlock_Base, $GooBlock_Base$$Type} from "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Base"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
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

export class $GooBlock_Tier4 extends $GooBlock_Base implements $EntityBlock {
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
static readonly "ALIVE": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooBlock_Tier4$$Type = ($GooBlock_Tier4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooBlock_Tier4_ = $GooBlock_Tier4$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Tier3" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$GooBlock_Base, $GooBlock_Base$$Type} from "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Base"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
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

export class $GooBlock_Tier3 extends $GooBlock_Base implements $EntityBlock {
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
static readonly "ALIVE": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooBlock_Tier3$$Type = ($GooBlock_Tier3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooBlock_Tier3_ = $GooBlock_Tier3$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Tier2" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$GooBlock_Base, $GooBlock_Base$$Type} from "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Base"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
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

export class $GooBlock_Tier2 extends $GooBlock_Base implements $EntityBlock {
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
static readonly "ALIVE": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooBlock_Tier2$$Type = ($GooBlock_Tier2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooBlock_Tier2_ = $GooBlock_Tier2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Tier1" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$GooBlock_Base, $GooBlock_Base$$Type} from "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Base"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
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

export class $GooBlock_Tier1 extends $GooBlock_Base implements $EntityBlock {
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
static readonly "ALIVE": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooBlock_Tier1$$Type = ($GooBlock_Tier1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooBlock_Tier1_ = $GooBlock_Tier1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.BlazegoldAxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$BaseAxe, $BaseAxe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseAxe"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlazegoldAxe extends $BaseAxe {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "getStrippables"(): $Map<($Block), ($Block)>
public static "setStrippables"(strippedBlocks: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldAxe$$Type = ($BlazegoldAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldAxe_ = $BlazegoldAxe$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.glitterparticle.GlitterParticleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Function11, $Function11$$Type} from "com.mojang.datafixers.util.Function11"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $GlitterParticleData implements $ParticleOptions {
readonly "a": float
readonly "b": float
readonly "targetZ": double
readonly "g": float
readonly "targetY": double
readonly "targetX": double
readonly "depthTest": boolean
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($GlitterParticleData)>
readonly "maxAgeMul": float
readonly "r": float
readonly "size": float
static readonly "MAP_CODEC": $MapCodec<($GlitterParticleData)>
readonly "partType": StringJS


public "getA"(): float
public "getB"(): float
public "getSize"(): float
public "getType"(): $ParticleType<($GlitterParticleData)>
public "getG"(): float
public "getR"(): float
public static "composite"<B, C, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $StreamCodec$$Type<(B), (T1)>, arg1: $Function$$Type<(C), (T1)>, arg2: $StreamCodec$$Type<(B), (T2)>, arg3: $Function$$Type<(C), (T2)>, arg4: $StreamCodec$$Type<(B), (T3)>, arg5: $Function$$Type<(C), (T3)>, arg6: $StreamCodec$$Type<(B), (T4)>, arg7: $Function$$Type<(C), (T4)>, arg8: $StreamCodec$$Type<(B), (T5)>, arg9: $Function$$Type<(C), (T5)>, arg10: $StreamCodec$$Type<(B), (T6)>, arg11: $Function$$Type<(C), (T6)>, arg12: $StreamCodec$$Type<(B), (T7)>, arg13: $Function$$Type<(C), (T7)>, arg14: $StreamCodec$$Type<(B), (T8)>, arg15: $Function$$Type<(C), (T8)>, arg16: $StreamCodec$$Type<(B), (T9)>, arg17: $Function$$Type<(C), (T9)>, arg18: $StreamCodec$$Type<(B), (T10)>, arg19: $Function$$Type<(C), (T10)>, arg20: $StreamCodec$$Type<(B), (T11)>, arg21: $Function$$Type<(C), (T11)>, arg22: $Function11$$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (C)>): $StreamCodec<(B), (C)>
public static "playerparticle"(arg0: StringJS, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float): $GlitterParticleData
public static "playerparticle"(arg0: StringJS, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: boolean): $GlitterParticleData
public static "playerparticle"(arg0: StringJS, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: float, arg7: float): $GlitterParticleData
public static "playerparticle"(arg0: StringJS, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: float, arg7: float, arg8: boolean): $GlitterParticleData
public "getPartType"(): StringJS
public "getTargetX"(): double
public "getTargetY"(): double
public "getTargetZ"(): double
public "getMaxAgeMul"(): float
public "isDepthTest"(): boolean
get "a"(): float
get "b"(): float
get "size"(): float
get "type"(): $ParticleType<($GlitterParticleData)>
get "g"(): float
get "r"(): float
get "partType"(): StringJS
get "targetX"(): double
get "targetY"(): double
get "targetZ"(): double
get "maxAgeMul"(): float
get "depthTest"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlitterParticleData$$Type = ($GlitterParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlitterParticleData_ = $GlitterParticleData$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.CelestigemAxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$BaseAxe, $BaseAxe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseAxe"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $CelestigemAxe extends $BaseAxe implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "getStrippables"(): $Map<($Block), ($Block)>
public static "setStrippables"(strippedBlocks: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemAxe$$Type = ($CelestigemAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemAxe_ = $CelestigemAxe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.gooblocks.GooPatternBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GooPatternBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "GOOSTAGE": $IntegerProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooPatternBlock$$Type = ($GooPatternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooPatternBlock_ = $GooPatternBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.CelestigemLeggings" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$BaseLeggings, $BaseLeggings$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseLeggings"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $CelestigemLeggings extends $BaseLeggings implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemLeggings$$Type = ($CelestigemLeggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemLeggings_ = $CelestigemLeggings$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.ItemCollector" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemCollector extends $BaseMachineBlock {
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

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCollector$$Type = ($ItemCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCollector_ = $ItemCollector$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.xpfluid.XPFluid$Flowing" {
import {$XPFluid, $XPFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.xpfluid.XPFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $XPFluid$Flowing extends $XPFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XPFluid$Flowing$$Type = ($XPFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XPFluid$Flowing_ = $XPFluid$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.timefluid.TimeFluid$Flowing" {
import {$TimeFluid, $TimeFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.timefluid.TimeFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $TimeFluid$Flowing extends $TimeFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeFluid$Flowing$$Type = ($TimeFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeFluid$Flowing_ = $TimeFluid$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.util.NBTHelpers$PortalDestination" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$NBTHelpers$GlobalVec3, $NBTHelpers$GlobalVec3$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$GlobalVec3"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $NBTHelpers$PortalDestination extends $Record {
static readonly "CODEC": $Codec<($NBTHelpers$PortalDestination)>
static readonly "EMPTY": $NBTHelpers$PortalDestination
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($NBTHelpers$PortalDestination)>

constructor(globalVec3: $NBTHelpers$GlobalVec3$$Type, direction: $Direction$$Type, name: StringJS)

public "direction"(): $Direction
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "toNBT"(arg0: $NBTHelpers$PortalDestination$$Type): $CompoundTag
public "globalVec3"(): $NBTHelpers$GlobalVec3
public static "fromNBT"(arg0: $CompoundTag$$Type): $NBTHelpers$PortalDestination
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTHelpers$PortalDestination$$Type = ({"name"?: StringJS, "globalVec3"?: $NBTHelpers$GlobalVec3$$Type, "direction"?: $Direction$$Type}) | ([name?: StringJS, globalVec3?: $NBTHelpers$GlobalVec3$$Type, direction?: $Direction$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTHelpers$PortalDestination_ = $NBTHelpers$PortalDestination$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.Ability$SettingType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Ability$SettingType extends $Enum<($Ability$SettingType)> {
static readonly "SLIDER": $Ability$SettingType
static readonly "TOGGLE": $Ability$SettingType
static readonly "CYCLE": $Ability$SettingType


public static "values"(): ($Ability$SettingType)[]
public static "valueOf"(arg0: StringJS): $Ability$SettingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ability$SettingType$$Type = (("toggle") | ("slider") | ("cycle"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ability$SettingType_ = $Ability$SettingType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.FerricoreLeggings" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseLeggings, $BaseLeggings$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseLeggings"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $FerricoreLeggings extends $BaseLeggings {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreLeggings$$Type = ($FerricoreLeggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreLeggings_ = $FerricoreLeggings$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.PolymorphicCatalyst" {
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
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $PolymorphicCatalyst extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicCatalyst$$Type = ($PolymorphicCatalyst);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicCatalyst_ = $PolymorphicCatalyst$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.itemparticle.ItemFlowParticleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $ItemFlowParticleData implements $ParticleOptions {
static readonly "MAP_CODEC": $MapCodec<($ItemFlowParticleData)>
readonly "targetZ": double
readonly "targetY": double
readonly "targetX": double
readonly "ticksPerBlock": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemFlowParticleData)>

constructor(arg0: $ItemStack$$Type, arg1: double, arg2: double, arg3: double, arg4: integer)

public "getType"(): $ParticleType<($ItemFlowParticleData)>
public "getItemStack"(): $ItemStack
public "getTargetX"(): double
public "getTargetY"(): double
public "getTargetZ"(): double
public "getTicksPerBlock"(): integer
get "type"(): $ParticleType<($ItemFlowParticleData)>
get "itemStack"(): $ItemStack
get "targetX"(): double
get "targetY"(): double
get "targetZ"(): double
get "ticksPerBlock"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFlowParticleData$$Type = ($ItemFlowParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFlowParticleData_ = $ItemFlowParticleData$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt2fuel.RefinedT2FuelBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RefinedT2FuelBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT2FuelBlock$$Type = ($RefinedT2FuelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT2FuelBlock_ = $RefinedT2FuelBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.polymorphicfluid.PolymorphicFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $PolymorphicFluid extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicFluid$$Type = ($PolymorphicFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicFluid_ = $PolymorphicFluid$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.GooSpreadRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$GooBlockBE_Base, $GooBlockBE_Base$$Type} from "com.direwolf20.justdirethings.common.blockentities.basebe.GooBlockBE_Base"

export class $GooSpreadRecipe implements $CraftingRecipe {

constructor(arg0: $ResourceLocation$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: integer, arg4: integer)

public "category"(): $CraftingBookCategory
public "getInput"(): $BlockState
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $GooBlockBE_Base$$Type, arg1: $BlockState$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getOutput"(): $BlockState
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getTierRequirement"(): integer
public "getCraftingDuration"(): integer
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "input"(): $BlockState
get "type"(): $RecipeType<(any)>
get "output"(): $BlockState
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "tierRequirement"(): integer
get "craftingDuration"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooSpreadRecipe$$Type = ($GooSpreadRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooSpreadRecipe_ = $GooSpreadRecipe$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.client.particles.fluidparticle.FluidFlowParticleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $FluidFlowParticleData implements $ParticleOptions {
readonly "shrinking": boolean
static readonly "MAP_CODEC": $MapCodec<($FluidFlowParticleData)>
readonly "doGravity": boolean
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidFlowParticleData)>

constructor(arg0: $FluidStack$$Type, arg1: boolean, arg2: boolean)

public "getType"(): $ParticleType<($FluidFlowParticleData)>
public "isDoGravity"(): boolean
public "isShrinking"(): boolean
public "getFluidStack"(): $FluidStack
get "type"(): $ParticleType<($FluidFlowParticleData)>
get "doGravity"(): boolean
get "shrinking"(): boolean
get "fluidStack"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFlowParticleData$$Type = ($FluidFlowParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFlowParticleData_ = $FluidFlowParticleData$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.RawCoal_T4" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseRawOre, $BaseRawOre$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseRawOre"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RawCoal_T4 extends $BaseRawOre {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawCoal_T4$$Type = ($RawCoal_T4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawCoal_T4_ = $RawCoal_T4$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.RawCoal_T3" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseRawOre, $BaseRawOre$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseRawOre"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RawCoal_T3 extends $BaseRawOre {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawCoal_T3$$Type = ($RawCoal_T3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawCoal_T3_ = $RawCoal_T3$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.RawCoal_T2" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseRawOre, $BaseRawOre$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseRawOre"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RawCoal_T2 extends $BaseRawOre {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawCoal_T2$$Type = ($RawCoal_T2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawCoal_T2_ = $RawCoal_T2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.RawCoal_T1" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseRawOre, $BaseRawOre$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseRawOre"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RawCoal_T1 extends $BaseRawOre {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawCoal_T1$$Type = ($RawCoal_T1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawCoal_T1_ = $RawCoal_T1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.Ability$BindingType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Ability$BindingType extends $Enum<($Ability$BindingType)> {
static readonly "LEFT_AND_CUSTOM": $Ability$BindingType
static readonly "CUSTOM_ONLY": $Ability$BindingType
static readonly "NONE": $Ability$BindingType


public static "values"(): ($Ability$BindingType)[]
public static "valueOf"(arg0: StringJS): $Ability$BindingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ability$BindingType$$Type = (("none") | ("custom_only") | ("left_and_custom"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ability$BindingType_ = $Ability$BindingType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.EclipseAlloyChestplate" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$BaseChestplate, $BaseChestplate$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseChestplate"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $EclipseAlloyChestplate extends $BaseChestplate implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public static "isFlyEnabled"(arg0: $ItemStack$$Type): boolean
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyChestplate$$Type = ($EclipseAlloyChestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyChestplate_ = $EclipseAlloyChestplate$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.BlazegoldBow" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BaseBow, $BaseBow$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseBow"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlazegoldBow extends $BaseBow {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "MAX_DRAW_DURATION": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "DEFAULT_RANGE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getMaxDraw"(): float
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxDraw"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldBow$$Type = ($BlazegoldBow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldBow_ = $BlazegoldBow$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.GooSpreadRecipeTag" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockTagIngredient, $BlockTagIngredient$$Type} from "net.neoforged.neoforge.common.crafting.BlockTagIngredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$GooBlockBE_Base, $GooBlockBE_Base$$Type} from "com.direwolf20.justdirethings.common.blockentities.basebe.GooBlockBE_Base"

export class $GooSpreadRecipeTag implements $CraftingRecipe {

constructor(arg0: $ResourceLocation$$Type, arg1: $BlockTagIngredient$$Type, arg2: $BlockState$$Type, arg3: integer, arg4: integer)

public "category"(): $CraftingBookCategory
public "getInput"(): $BlockTagIngredient
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $GooBlockBE_Base$$Type, arg1: $BlockState$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getOutput"(): $BlockState
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getTierRequirement"(): integer
public "getCraftingDuration"(): integer
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "input"(): $BlockTagIngredient
get "type"(): $RecipeType<(any)>
get "output"(): $BlockState
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "tierRequirement"(): integer
get "craftingDuration"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooSpreadRecipeTag$$Type = ($GooSpreadRecipeTag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooSpreadRecipeTag_ = $GooSpreadRecipeTag$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.FerricoreIngot" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $FerricoreIngot extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreIngot$$Type = ($FerricoreIngot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreIngot_ = $FerricoreIngot$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.CelestigemBow" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BaseBow, $BaseBow$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseBow"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $CelestigemBow extends $BaseBow implements $PoweredTool {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "MAX_DRAW_DURATION": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "DEFAULT_RANGE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxDraw"(): float
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxDraw"(): float
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemBow$$Type = ($CelestigemBow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemBow_ = $CelestigemBow$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.ClickerT2" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ClickerT2 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickerT2$$Type = ($ClickerT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickerT2_ = $ClickerT2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.ClickerT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ClickerT1 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickerT1$$Type = ($ClickerT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickerT1_ = $ClickerT1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.PortalFluidCatalyst" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $PortalFluidCatalyst extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalFluidCatalyst$$Type = ($PortalFluidCatalyst);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalFluidCatalyst_ = $PortalFluidCatalyst$$Type;
}}
declare module "com.direwolf20.justdirethings.util.NBTHelpers$GlobalVec3" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $NBTHelpers$GlobalVec3 extends $Record {
static readonly "CODEC": $Codec<($NBTHelpers$GlobalVec3)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($NBTHelpers$GlobalVec3)>

constructor(dimension: $ResourceKey$$Type<($Level)>, position: $Vec3$$Type)

public "dimension"(): $ResourceKey<($Level)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vec3
public "toVec3ShortString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTHelpers$GlobalVec3$$Type = ({"position"?: $Vec3$$Type, "dimension"?: $ResourceKey$$Type<($Level)>}) | ([position?: $Vec3$$Type, dimension?: $ResourceKey$$Type<($Level)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTHelpers$GlobalVec3_ = $NBTHelpers$GlobalVec3$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.PotionCanister" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PotionContents, $PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"

export class $PotionCanister extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "attemptFill"(arg0: $ItemStack$$Type): void
public static "getPotionColor"(arg0: $ItemStack$$Type): integer
public static "getMaxMB"(): integer
public static "getFullness"(arg0: $ItemStack$$Type): integer
public static "setPotionContents"(arg0: $ItemStack$$Type, arg1: $PotionContents$$Type): void
public static "getPotionContents"(arg0: $ItemStack$$Type): $PotionContents
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getPotionAmount"(arg0: $ItemStack$$Type): integer
public static "addPotionAmount"(arg0: $ItemStack$$Type, arg1: integer): void
public static "setPotionAmount"(arg0: $ItemStack$$Type, arg1: integer): void
public static "reducePotionAmount"(arg0: $ItemStack$$Type, arg1: integer): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCanister$$Type = ($PotionCanister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCanister_ = $PotionCanister$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.polymorphicfluid.PolymorphicFluidType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $PolymorphicFluidType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicFluidType$$Type = ($PolymorphicFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicFluidType_ = $PolymorphicFluidType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.CelestigemShovel" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseShovel, $BaseShovel$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseShovel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $CelestigemShovel extends $BaseShovel implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemShovel$$Type = ($CelestigemShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemShovel_ = $CelestigemShovel$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.util.context.ItemActionContext" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ItemActionContext extends $Record {

constructor(pos: $BlockPos$$Type, hitResult: $BlockHitResult$$Type, player: $Player$$Type, level: $Level$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type)

public "pos"(): $BlockPos
public "level"(): $Level
public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hand"(): $InteractionHand
public "player"(): $Player
public "hitResult"(): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemActionContext$$Type = ({"hand"?: $InteractionHand$$Type, "pos"?: $BlockPos$$Type, "level"?: $Level$$Type, "stack"?: $ItemStack$$Type, "hitResult"?: $BlockHitResult$$Type, "player"?: $Player$$Type}) | ([hand?: $InteractionHand$$Type, pos?: $BlockPos$$Type, level?: $Level$$Type, stack?: $ItemStack$$Type, hitResult?: $BlockHitResult$$Type, player?: $Player$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemActionContext_ = $ItemActionContext$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.basetools.BaseShovel" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ShovelItem, $ShovelItem$$Type} from "net.minecraft.world.item.ShovelItem"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseShovel extends $ShovelItem implements $ToggleableTool, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseShovel$$Type = ($BaseShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseShovel_ = $BaseShovel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt4fuel.UnrefinedT4Fuel" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $UnrefinedT4Fuel extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT4Fuel$$Type = ($UnrefinedT4Fuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT4Fuel_ = $UnrefinedT4Fuel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt2fuel.UnrefinedT2FuelBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UnrefinedT2FuelBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT2FuelBlock$$Type = ($UnrefinedT2FuelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT2FuelBlock_ = $UnrefinedT2FuelBlock$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.items.Redprint" {
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
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $Redprint extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Redprint$$Type = ($Redprint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Redprint_ = $Redprint$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.gooblocks.GooBlock_Item" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $GooBlock_Item extends $BlockItem {
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

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
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
export type $GooBlock_Item$$Type = ($GooBlock_Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooBlock_Item_ = $GooBlock_Item$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.xpfluid.XPFluid$Source" {
import {$XPFluid, $XPFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.xpfluid.XPFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $XPFluid$Source extends $XPFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XPFluid$Source$$Type = ($XPFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XPFluid$Source_ = $XPFluid$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt2fuel.RefinedT2Fuel$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$RefinedT2Fuel, $RefinedT2Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.refinedt2fuel.RefinedT2Fuel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $RefinedT2Fuel$Flowing extends $RefinedT2Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT2Fuel$Flowing$$Type = ($RefinedT2Fuel$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT2Fuel$Flowing_ = $RefinedT2Fuel$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ToggleableItem, $ToggleableItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableItem"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ToggleableTool extends $ToggleableItem {

 "getAbilities"(): $EnumSet<($Ability)>
 "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
 "bindDrops"(arg0: $UseOnContext$$Type): boolean
 "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
 "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
 "useOnAbility"(arg0: $UseOnContext$$Type): boolean
 "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
 "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
 "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
 "hasAbility"(arg0: $Ability$$Type): boolean
 "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
 "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
 "bindSoil"(arg0: $UseOnContext$$Type): boolean
 "openSettings"(arg0: $Player$$Type): void
 "getAllAbilities"(): $EnumSet<($Ability)>
 "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
 "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
 "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
 "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
 "getAllPassiveAbilities"(): $List<($Ability)>
 "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
 "getCooldownAbilities"(): $List<($Ability)>
 "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
 "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
 "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
 "registerAbility"(arg0: $Ability$$Type): void
 "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
 "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
 "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
 "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
 "getEnabled"(arg0: $ItemStack$$Type): boolean
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}

export namespace $ToggleableTool {
function setSetting(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
function getSetting(arg0: $ItemStack$$Type, arg1: StringJS): boolean
function addCooldown(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
function isItemEquipped(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
function cycleSetting(arg0: $ItemStack$$Type, arg1: StringJS): void
function tickCooldowns(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
function getAnyCooldown(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
function hasUpgrade(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
function setToolValue(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
function toggleSetting(arg0: $ItemStack$$Type, arg1: StringJS): void
function getToolValue(arg0: $ItemStack$$Type, arg1: StringJS): integer
function getCooldown(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
function getTargetLookDirection(arg0: $LivingEntity$$Type): $Direction
function getInstantRFCost(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
function cooldownDataClear(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
function getBoundInventory(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
function removeBoundInventory(arg0: $ItemStack$$Type): void
function setBoundInventory(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
function smelterParticles(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
function smokerParticles(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
function getBoundHandler(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
function setCustomSetting(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
function getCustomSetting(arg0: $ItemStack$$Type, arg1: StringJS): integer
function teleportParticles(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
function teleportParticles(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
function teleportParticles(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
function getToggleableItem(arg0: $Player$$Type): $ItemStack
const probejs$$marker: never
}
export class $ToggleableTool$$Static implements $ToggleableTool {


static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
 "getAbilities"(): $EnumSet<($Ability)>
 "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
 "bindDrops"(arg0: $UseOnContext$$Type): boolean
 "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
 "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
 "useOnAbility"(arg0: $UseOnContext$$Type): boolean
 "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
 "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
 "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
 "hasAbility"(arg0: $Ability$$Type): boolean
 "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
 "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
 "bindSoil"(arg0: $UseOnContext$$Type): boolean
static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
 "openSettings"(arg0: $Player$$Type): void
static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
 "getAllAbilities"(): $EnumSet<($Ability)>
 "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
 "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
 "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
 "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
 "getAllPassiveAbilities"(): $List<($Ability)>
 "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
static "removeBoundInventory"(arg0: $ItemStack$$Type): void
static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
 "getCooldownAbilities"(): $List<($Ability)>
 "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
 "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
 "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
 "registerAbility"(arg0: $Ability$$Type): void
static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
 "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
 "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
 "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
 "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
 "getEnabled"(arg0: $ItemStack$$Type): boolean
static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleableTool$$Type = ($ToggleableTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleableTool_ = $ToggleableTool$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.Ability" {
import {$Ability$SettingType, $Ability$SettingType$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability$SettingType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Ability$AbilityAction, $Ability$AbilityAction$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability$AbilityAction"
import {$Ability$BindingType, $Ability$BindingType$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability$BindingType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Ability$UseOnAbilityAction, $Ability$UseOnAbilityAction$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability$UseOnAbilityAction"
import {$Ability$CustomSettingType, $Ability$CustomSettingType$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability$CustomSettingType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $Ability extends $Enum<($Ability)> {
static readonly "EPICARROW": $Ability
static readonly "JUMPBOOST": $Ability
static readonly "OREMINER": $Ability
static readonly "WALKSPEED": $Ability
static readonly "NIGHTVISION": $Ability
static readonly "HOMING": $Ability
static readonly "DROPTELEPORT": $Ability
static readonly "MOBSCANNER": $Ability
static readonly "NOAI": $Ability
static readonly "EXTINGUISH": $Ability
static readonly "INSTABREAK": $Ability
static readonly "VOIDSHIFT": $Ability
static readonly "DECOY": $Ability
static readonly "ECLIPSEGATE": $Ability
static readonly "NEGATEFALLDAMAGE": $Ability
static readonly "GLOWING": $Ability
 "action": $Ability$AbilityAction
static readonly "POTIONARROW": $Ability
static readonly "SMELTER": $Ability
static readonly "OREXRAY": $Ability
static readonly "AIRBURST": $Ability
static readonly "EARTHQUAKE": $Ability
 "useOnAction": $Ability$UseOnAbilityAction
static readonly "ORESCANNER": $Ability
static readonly "ELYTRA": $Ability
static readonly "LAVAIMMUNITY": $Ability
static readonly "TREEFELLER": $Ability
static readonly "CAUTERIZEWOUNDS": $Ability
static readonly "MINDFOG": $Ability
static readonly "GROUNDSTOMP": $Ability
static readonly "FLIGHT": $Ability
static readonly "STEPHEIGHT": $Ability
static readonly "DEATHPROTECTION": $Ability
static readonly "POLYMORPH_RANDOM": $Ability
static readonly "SPLASH": $Ability
static readonly "DEBUFFREMOVER": $Ability
static readonly "LAVAREPAIR": $Ability
static readonly "PHASE": $Ability
static readonly "HAMMER": $Ability
static readonly "STUPEFY": $Ability
static readonly "WATERBREATHING": $Ability
static readonly "TIMEPROTECTION": $Ability
static readonly "LAWNMOWER": $Ability
static readonly "POLYMORPH_TARGET": $Ability
static readonly "SWIMSPEED": $Ability
static readonly "SMOKER": $Ability
static readonly "INVULNERABILITY": $Ability
static readonly "SKYSWEEPER": $Ability
static readonly "LEAFBREAKER": $Ability
static readonly "LINGERING": $Ability
static readonly "RUNSPEED": $Ability


public "getName"(): StringJS
public static "values"(): ($Ability)[]
public static "valueOf"(arg0: StringJS): $Ability
public static "byName"(arg0: StringJS): $Ability
public "getFeCost"(): integer
public "getSettingType"(): $Ability$SettingType
public "isBindable"(): boolean
public "getBindingType"(): $Ability$BindingType
public "getUpgradeItem"(): $Holder<($Item)>
public "hasCustomSetting"(): boolean
public "hasDynamicParams"(arg0: $Ability$$Type): boolean
public "getIconLocation"(): $ResourceLocation
public "getDurabilityCost"(): integer
public "getCooldownIcon"(): $ResourceLocation
public "getLocalization"(): StringJS
public "requiresUpgrade"(): boolean
public "getCustomSetting"(): $Ability$CustomSettingType
public static "getAbilityFromUpgradeItem"(arg0: $Item$$Type): $Ability
get "name"(): StringJS
get "feCost"(): integer
get "settingType"(): $Ability$SettingType
get "bindable"(): boolean
get "bindingType"(): $Ability$BindingType
get "upgradeItem"(): $Holder<($Item)>
get "iconLocation"(): $ResourceLocation
get "durabilityCost"(): integer
get "cooldownIcon"(): $ResourceLocation
get "localization"(): StringJS
get "customSetting"(): $Ability$CustomSettingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ability$$Type = (("mobscanner") | ("oreminer") | ("orescanner") | ("lawnmower") | ("skysweeper") | ("treefeller") | ("leafbreaker") | ("runspeed") | ("walkspeed") | ("stepheight") | ("jumpboost") | ("mindfog") | ("invulnerability") | ("potionarrow") | ("smelter") | ("smoker") | ("hammer") | ("lavarepair") | ("cauterizewounds") | ("airburst") | ("swimspeed") | ("groundstomp") | ("extinguish") | ("stupefy") | ("splash") | ("polymorph_random") | ("dropteleport") | ("voidshift") | ("negatefalldamage") | ("nightvision") | ("elytra") | ("decoy") | ("lingering") | ("homing") | ("waterbreathing") | ("orexray") | ("glowing") | ("instabreak") | ("eclipsegate") | ("deathprotection") | ("debuffremover") | ("earthquake") | ("noai") | ("flight") | ("lavaimmunity") | ("phase") | ("timeprotection") | ("polymorph_target") | ("epicarrow"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ability_ = $Ability$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.GeneratorFluidT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GeneratorFluidT1 extends $BaseMachineBlock {
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "direRotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorFluidT1$$Type = ($GeneratorFluidT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratorFluidT1_ = $GeneratorFluidT1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.BlazegoldChestplate" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$BaseChestplate, $BaseChestplate$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseChestplate"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $BlazegoldChestplate extends $BaseChestplate {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldChestplate$$Type = ($BlazegoldChestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldChestplate_ = $BlazegoldChestplate$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.FerricoreChestplate" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$BaseChestplate, $BaseChestplate$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseChestplate"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $FerricoreChestplate extends $BaseChestplate {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreChestplate$$Type = ($FerricoreChestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreChestplate_ = $FerricoreChestplate$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.FluidCollectorT2" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidCollectorT2 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCollectorT2$$Type = ($FluidCollectorT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidCollectorT2_ = $FluidCollectorT2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.FluidCollectorT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidCollectorT1 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCollectorT1$$Type = ($FluidCollectorT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidCollectorT1_ = $FluidCollectorT1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.FerricoreBow" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BaseBow, $BaseBow$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseBow"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FerricoreBow extends $BaseBow {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "MAX_DRAW_DURATION": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "DEFAULT_RANGE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreBow$$Type = ($FerricoreBow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreBow_ = $FerricoreBow$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt2fuel.UnrefinedT2FuelType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnrefinedT2FuelType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT2FuelType$$Type = ($UnrefinedT2FuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT2FuelType_ = $UnrefinedT2FuelType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.Ability$AbilityAction" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $Ability$AbilityAction {

 "execute"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean

(arg0: $Level, arg1: $Player, arg2: $ItemStack): boolean
}

export namespace $Ability$AbilityAction {
const probejs$$marker: never
}
export class $Ability$AbilityAction$$Static implements $Ability$AbilityAction {


 "execute"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ability$AbilityAction$$Type = ((arg0: $Level, arg1: $Player, arg2: $ItemStack) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ability$AbilityAction_ = $Ability$AbilityAction$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.BlazegoldHoe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseHoe, $BaseHoe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseHoe"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $BlazegoldHoe extends $BaseHoe {
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

constructor()

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldHoe$$Type = ($BlazegoldHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldHoe_ = $BlazegoldHoe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt2fuel.UnrefinedT2Fuel$Source" {
import {$UnrefinedT2Fuel, $UnrefinedT2Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.unrefinedt2fuel.UnrefinedT2Fuel"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnrefinedT2Fuel$Source extends $UnrefinedT2Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT2Fuel$Source$$Type = ($UnrefinedT2Fuel$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT2Fuel$Source_ = $UnrefinedT2Fuel$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.VoidshiftWand" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$PoweredItem, $PoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredItem"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseToggleableTool, $BaseToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.BaseToggleableTool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $VoidshiftWand extends $BaseToggleableTool implements $PoweredItem, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidshiftWand$$Type = ($VoidshiftWand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidshiftWand_ = $VoidshiftWand$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.RawEclipseAlloyOre" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseRawOre, $BaseRawOre$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseRawOre"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RawEclipseAlloyOre extends $BaseRawOre {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawEclipseAlloyOre$$Type = ($RawEclipseAlloyOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawEclipseAlloyOre_ = $RawEclipseAlloyOre$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.basetools.BaseSword" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseSword extends $SwordItem implements $ToggleableTool, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSword$$Type = ($BaseSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseSword_ = $BaseSword$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt4fuel.UnrefinedT4Fuel$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$UnrefinedT4Fuel, $UnrefinedT4Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.unrefinedt4fuel.UnrefinedT4Fuel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnrefinedT4Fuel$Flowing extends $UnrefinedT4Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT4Fuel$Flowing$$Type = ($UnrefinedT4Fuel$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT4Fuel$Flowing_ = $UnrefinedT4Fuel$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.BlazejetWand" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseToggleableTool, $BaseToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.BaseToggleableTool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlazejetWand extends $BaseToggleableTool implements $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazejetWand$$Type = ($BlazejetWand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazejetWand_ = $BlazejetWand$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.EclipsegateWand" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$PoweredItem, $PoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredItem"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseToggleableTool, $BaseToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.BaseToggleableTool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $EclipsegateWand extends $BaseToggleableTool implements $PoweredItem, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getMaxEnergy"(): integer
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipsegateWand$$Type = ($EclipsegateWand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipsegateWand_ = $EclipsegateWand$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.basetools.BaseAxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AxeItem, $AxeItem$$Type} from "net.minecraft.world.item.AxeItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseAxe extends $AxeItem implements $ToggleableTool, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "getStrippables"(): $Map<($Block), ($Block)>
public static "setStrippables"(strippedBlocks: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseAxe$$Type = ($BaseAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseAxe_ = $BaseAxe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt4fuel.RefinedT4FuelType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $RefinedT4FuelType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT4FuelType$$Type = ($RefinedT4FuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT4FuelType_ = $RefinedT4FuelType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.basetools.BaseBow" {
import {$BowItem, $BowItem$$Type} from "net.minecraft.world.item.BowItem"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$JustDireArrow, $JustDireArrow$$Type} from "com.direwolf20.justdirethings.common.entities.JustDireArrow"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseBow extends $BowItem implements $ToggleableTool, $LeftClickableTool {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "MAX_DRAW_DURATION": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "DEFAULT_RANGE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "getAbilities"(): $EnumSet<($Ability)>
public "getMaxDraw"(): float
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public "findAimedAtEntity"(arg0: $LivingEntity$$Type, arg1: boolean, arg2: $JustDireArrow$$Type): $LivingEntity
public "noPotionAbilitiesActive"(arg0: $ItemStack$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "maxDraw"(): float
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBow$$Type = ($BaseBow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBow_ = $BaseBow$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.EclipseAlloyHelmet" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BaseHelmet, $BaseHelmet$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseHelmet"

export class $EclipseAlloyHelmet extends $BaseHelmet implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyHelmet$$Type = ($EclipseAlloyHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyHelmet_ = $EclipseAlloyHelmet$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.FerricoreAxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$BaseAxe, $BaseAxe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseAxe"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FerricoreAxe extends $BaseAxe {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "getStrippables"(): $Map<($Block), ($Block)>
public static "setStrippables"(strippedBlocks: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreAxe$$Type = ($FerricoreAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreAxe_ = $FerricoreAxe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.capabilities.EnergyStorageItemstack" {
import {$EnergyStorage, $EnergyStorage$$Type} from "net.neoforged.neoforge.energy.EnergyStorage"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $EnergyStorageItemstack extends $EnergyStorage {

constructor(arg0: integer, arg1: $ItemStack$$Type)

public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "setEnergy"(arg0: integer): void
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canExtract"(): boolean
public "canReceive"(): boolean
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
set "energy"(value: integer)
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyStorageItemstack$$Type = ($EnergyStorageItemstack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyStorageItemstack_ = $EnergyStorageItemstack$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.BaseToggleableTool" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BasePoweredItem, $BasePoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.BasePoweredItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseToggleableTool extends $BasePoweredItem implements $ToggleableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseToggleableTool$$Type = ($BaseToggleableTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseToggleableTool_ = $BaseToggleableTool$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.portalfluid.PortalFluidType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $PortalFluidType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalFluidType$$Type = ($PortalFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalFluidType_ = $PortalFluidType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.FluidCanister$FillMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $FluidCanister$FillMode extends $Enum<($FluidCanister$FillMode)> {
static readonly "ALL": $FluidCanister$FillMode
static readonly "NONE": $FluidCanister$FillMode
static readonly "JDTONLY": $FluidCanister$FillMode


public static "values"(): ($FluidCanister$FillMode)[]
public static "valueOf"(arg0: StringJS): $FluidCanister$FillMode
public "next"(): $FluidCanister$FillMode
public "getTooltip"(): $Component
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCanister$FillMode$$Type = (("none") | ("jdtonly") | ("all"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidCanister$FillMode_ = $FluidCanister$FillMode$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.Celestigem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $Celestigem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Celestigem$$Type = ($Celestigem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Celestigem_ = $Celestigem$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $ItemFlowParticleData implements $ParticleOptions {
readonly "shrinking": boolean
static readonly "MAP_CODEC": $MapCodec<($ItemFlowParticleData)>
readonly "doGravity": boolean
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemFlowParticleData)>

constructor(arg0: $ItemStack$$Type, arg1: boolean, arg2: boolean)

public "getType"(): $ParticleType<($ItemFlowParticleData)>
public "getItemStack"(): $ItemStack
public "isDoGravity"(): boolean
public "isShrinking"(): boolean
get "type"(): $ParticleType<($ItemFlowParticleData)>
get "itemStack"(): $ItemStack
get "doGravity"(): boolean
get "shrinking"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFlowParticleData$$Type = ($ItemFlowParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFlowParticleData_ = $ItemFlowParticleData$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.EclipseAlloyIngot" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $EclipseAlloyIngot extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyIngot$$Type = ($EclipseAlloyIngot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyIngot_ = $EclipseAlloyIngot$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.BlazegoldHelmet" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BaseHelmet, $BaseHelmet$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseHelmet"

export class $BlazegoldHelmet extends $BaseHelmet {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldHelmet$$Type = ($BlazegoldHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldHelmet_ = $BlazegoldHelmet$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.BlazegoldShovel" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseShovel, $BaseShovel$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseShovel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $BlazegoldShovel extends $BaseShovel {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazegoldShovel$$Type = ($BlazegoldShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazegoldShovel_ = $BlazegoldShovel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.DropperT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DropperT1 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropperT1$$Type = ($DropperT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropperT1_ = $DropperT1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.DropperT2" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DropperT2 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropperT2$$Type = ($DropperT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropperT2_ = $DropperT2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.RawCelestigemOre" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseRawOre, $BaseRawOre$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseRawOre"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RawCelestigemOre extends $BaseRawOre {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawCelestigemOre$$Type = ($RawCelestigemOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawCelestigemOre_ = $RawCelestigemOre$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseChestplate" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseChestplate extends $ArmorItem implements $ToggleableTool, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseChestplate$$Type = ($BaseChestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseChestplate_ = $BaseChestplate$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.PortalGunV2" {
import {$NBTHelpers$PortalDestination, $NBTHelpers$PortalDestination$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$PortalDestination"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BasePoweredItem, $BasePoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.BasePoweredItem"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidContainingItem, $FluidContainingItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.FluidContainingItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$PoweredItem, $PoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $PortalGunV2 extends $BasePoweredItem implements $PoweredItem, $FluidContainingItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "maxMB": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_FAVORITES": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "setPrevious"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public static "getUUID"(arg0: $ItemStack$$Type): $UUID
public static "setUUID"(arg0: $ItemStack$$Type): $UUID
public static "getPrevious"(arg0: $ItemStack$$Type): $NBTHelpers$PortalDestination
public static "getFavorites"(arg0: $ItemStack$$Type): $List<($NBTHelpers$PortalDestination)>
public static "setFavorites"(arg0: $ItemStack$$Type, arg1: $List$$Type<($NBTHelpers$PortalDestination$$Type)>): void
public static "getFavorite"(arg0: $ItemStack$$Type, arg1: integer): $NBTHelpers$PortalDestination
public static "addFavorite"(arg0: $ItemStack$$Type, arg1: integer, arg2: $NBTHelpers$PortalDestination$$Type): void
public static "removeFavorite"(arg0: $ItemStack$$Type, arg1: integer): void
public static "getStayOpen"(arg0: $ItemStack$$Type): boolean
public static "setStayOpen"(arg0: $ItemStack$$Type, arg1: boolean): void
public static "getPortalGunv2"(arg0: $Player$$Type): $ItemStack
public static "pickupFluid"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
public static "consumeFluid"(arg0: $ItemStack$$Type, arg1: integer): void
public static "hasEnoughFluid"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "getFullness"(arg0: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "getSelectedFavorite"(arg0: $ItemStack$$Type): $NBTHelpers$PortalDestination
public static "getFavoritePosition"(arg0: $ItemStack$$Type): integer
public static "setFavoritePosition"(arg0: $ItemStack$$Type, arg1: integer): void
public static "calculateFluidCost"(arg0: $ServerLevel$$Type, arg1: $Player$$Type, arg2: $NBTHelpers$PortalDestination$$Type): integer
public static "spawnProjectile"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: boolean): void
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public "getMaxMB"(): integer
public static "getAvailableFluid"(arg0: $ItemStack$$Type): integer
public "isFluidBarVisible"(arg0: $ItemStack$$Type): boolean
public "getFluidBarWidth"(arg0: $ItemStack$$Type): integer
public "getFluidBarColor"(arg0: $ItemStack$$Type): integer
public static "getLiquidBlockAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $LiquidBlock
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "maxMB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalGunV2$$Type = ($PortalGunV2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalGunV2_ = $PortalGunV2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt3fuel.UnrefinedT3Fuel" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $UnrefinedT3Fuel extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT3Fuel$$Type = ($UnrefinedT3Fuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT3Fuel_ = $UnrefinedT3Fuel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.BlazeGoldIngot" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $BlazeGoldIngot extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeGoldIngot$$Type = ($BlazeGoldIngot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeGoldIngot_ = $BlazeGoldIngot$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.RawBlazegold" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $RawBlazegold extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawBlazegold$$Type = ($RawBlazegold);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawBlazegold_ = $RawBlazegold$$Type;
}}
declare module "com.direwolf20.justdirethings.common.entities.JustDireArrow" {
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$AbstractArrow, $AbstractArrow$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$PotionContents, $PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IntOpenHashSet, $IntOpenHashSet$$Type} from "it.unimi.dsi.fastutil.ints.IntOpenHashSet"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractArrow$Pickup, $AbstractArrow$Pickup$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow$Pickup"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $JustDireArrow extends $AbstractArrow {
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
 "shakeTime": integer
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "piercingIgnoreEntityIds": $IntOpenHashSet
 "invulnerableTime": integer
 "piercedAndKilledEntities": $List<($Entity)>
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "ownerUUID": $UUID
 "firedFromWeapon": $ItemStack
 "walkDistO": float
 "pickup": $AbstractArrow$Pickup
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

constructor(arg0: $EntityType$$Type<($AbstractArrow$$Type)>, arg1: $Level$$Type)
constructor(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $ItemStack$$Type, arg5: $ItemStack$$Type)
constructor(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

public "tick"(): void
public "setData"(arg0: $EntityDataAccessor$$Type<(integer)>, arg1: integer): void
public "setData"(arg0: $EntityDataAccessor$$Type<(boolean)>, arg1: boolean): void
public "setPhase"(arg0: boolean): void
public "setSplash"(arg0: boolean): void
public "setYaw"(arg0: float): void
public "setPitch"(arg0: float): void
public "getColor"(): integer
public "addEffect"(arg0: $MobEffectInstance$$Type): void
public "isEpic"(): boolean
public "setEpicArrow"(arg0: boolean): void
public "setHoming"(arg0: boolean): void
public "setHostileOnly"(arg0: boolean): void
public "setPotionArrow"(arg0: boolean): void
public "setLingering"(arg0: boolean): void
public "getTargetAngry"(): boolean
public "setTargetAngry"(arg0: boolean): void
public "getHostileOnly"(): boolean
public "isPhase"(): boolean
public "searchRadius"(): double
public "setPotionContents"(arg0: $PotionContents$$Type): void
public "getPotionContents"(): $PotionContents
public "isGlowing"(): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "setDeltaMovement"(arg0: $Vec3$$Type): void
public "handleEntityEvent"(arg0: byte): void
public "getOriginalVelocity"(): float
public "setTargetEntity"(arg0: $LivingEntity$$Type): void
public "isHostileEntity"(arg0: $LivingEntity$$Type): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "phase"(value: boolean)
set "splash"(value: boolean)
set "yaw"(value: float)
set "pitch"(value: float)
get "color"(): integer
get "epic"(): boolean
set "epicArrow"(value: boolean)
set "homing"(value: boolean)
set "hostileOnly"(value: boolean)
set "potionArrow"(value: boolean)
set "lingering"(value: boolean)
get "targetAngry"(): boolean
set "targetAngry"(value: boolean)
get "hostileOnly"(): boolean
get "phase"(): boolean
set "potionContents"(value: $PotionContents$$Type)
get "potionContents"(): $PotionContents
get "glowing"(): boolean
set "deltaMovement"(value: $Vec3$$Type)
get "originalVelocity"(): float
set "targetEntity"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JustDireArrow$$Type = ($JustDireArrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JustDireArrow_ = $JustDireArrow$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.FluidContainingItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export interface $FluidContainingItem {

 "getMaxMB"(): integer
 "isFluidBarVisible"(arg0: $ItemStack$$Type): boolean
 "getFluidBarWidth"(arg0: $ItemStack$$Type): integer
 "getFluidBarColor"(arg0: $ItemStack$$Type): integer
get "maxMB"(): integer
}

export namespace $FluidContainingItem {
function pickupFluid(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
function consumeFluid(arg0: $ItemStack$$Type, arg1: integer): void
function hasEnoughFluid(arg0: $ItemStack$$Type, arg1: integer): boolean
function getAvailableFluid(arg0: $ItemStack$$Type): integer
function getLiquidBlockAt(arg0: $Level$$Type, arg1: $BlockPos$$Type): $LiquidBlock
const probejs$$marker: never
}
export class $FluidContainingItem$$Static implements $FluidContainingItem {


static "pickupFluid"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
static "consumeFluid"(arg0: $ItemStack$$Type, arg1: integer): void
static "hasEnoughFluid"(arg0: $ItemStack$$Type, arg1: integer): boolean
 "getMaxMB"(): integer
static "getAvailableFluid"(arg0: $ItemStack$$Type): integer
 "isFluidBarVisible"(arg0: $ItemStack$$Type): boolean
 "getFluidBarWidth"(arg0: $ItemStack$$Type): integer
 "getFluidBarColor"(arg0: $ItemStack$$Type): integer
static "getLiquidBlockAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $LiquidBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainingItem$$Type = ($FluidContainingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidContainingItem_ = $FluidContainingItem$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.CelestigemBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CelestigemBlock extends $Block {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemBlock$$Type = ($CelestigemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemBlock_ = $CelestigemBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseLeggings" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseLeggings extends $ArmorItem implements $ToggleableTool, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseLeggings$$Type = ($BaseLeggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseLeggings_ = $BaseLeggings$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.portalfluid.PortalFluid$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$PortalFluid, $PortalFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.portalfluid.PortalFluid"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $PortalFluid$Source extends $PortalFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalFluid$Source$$Type = ($PortalFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalFluid$Source_ = $PortalFluid$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unstableportalfluid.UnstablePortalFluidBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Random, $Random$$Type} from "java.util.Random"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UnstablePortalFluidBlock extends $LiquidBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "random": $Random
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LEVEL": $IntegerProperty
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnstablePortalFluidBlock$$Type = ($UnstablePortalFluidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnstablePortalFluidBlock_ = $UnstablePortalFluidBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.abilityupgrades.Upgrade" {
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
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $Upgrade extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Upgrade$$Type = ($Upgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Upgrade_ = $Upgrade$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.PortalGun" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$PoweredItem, $PoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredItem"
import {$BasePoweredItem, $BasePoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.BasePoweredItem"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $PortalGun extends $BasePoweredItem implements $PoweredItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getUUID"(arg0: $ItemStack$$Type): $UUID
public static "setUUID"(arg0: $ItemStack$$Type): $UUID
public static "closeMyPortals"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public "getMaxEnergy"(): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "spawnProjectile"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: boolean): void
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalGun$$Type = ($PortalGun);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalGun_ = $PortalGun$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.timefluid.TimeFluidType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $TimeFluidType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeFluidType$$Type = ($TimeFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeFluidType_ = $TimeFluidType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.FerricorePickaxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BasePickaxe, $BasePickaxe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BasePickaxe"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FerricorePickaxe extends $BasePickaxe {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricorePickaxe$$Type = ($FerricorePickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricorePickaxe_ = $FerricorePickaxe$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.itemparticle.ItemFlowParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemFlowParticleData, $ItemFlowParticleData$$Type} from "com.direwolf20.justdirethings.client.particles.itemparticle.ItemFlowParticleData"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ItemFlowParticleType extends $ParticleType<($ItemFlowParticleData)> {

constructor(arg0: boolean)

public "getType"(): $ItemFlowParticleType
public "codec"(): $MapCodec<($ItemFlowParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemFlowParticleData)>
get "type"(): $ItemFlowParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFlowParticleType$$Type = ($ItemFlowParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFlowParticleType_ = $ItemFlowParticleType$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.client.particles.fluidparticle.FluidFlowParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$FluidFlowParticleData, $FluidFlowParticleData$$Type} from "com.direwolf20.buildinggadgets2.client.particles.fluidparticle.FluidFlowParticleData"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FluidFlowParticleType extends $ParticleType<($FluidFlowParticleData)> {

constructor(arg0: boolean)

public "getType"(): $FluidFlowParticleType
public "codec"(): $MapCodec<($FluidFlowParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FluidFlowParticleData)>
get "type"(): $FluidFlowParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFlowParticleType$$Type = ($FluidFlowParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFlowParticleType_ = $FluidFlowParticleType$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.alwaysvisibleparticle.AlwaysVisibleParticleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $AlwaysVisibleParticleData implements $ParticleOptions {
static readonly "MAP_CODEC": $MapCodec<($AlwaysVisibleParticleData)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AlwaysVisibleParticleData)>

constructor(arg0: $ResourceLocation$$Type)

public "getType"(): $ParticleType<(any)>
public "getResourceLocation"(): $ResourceLocation
get "type"(): $ParticleType<(any)>
get "resourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlwaysVisibleParticleData$$Type = ($AlwaysVisibleParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlwaysVisibleParticleData_ = $AlwaysVisibleParticleData$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbilityParams {
readonly "minSlider": integer
readonly "maxSlider": integer
readonly "defaultValue": integer
 "cooldown": integer
readonly "increment": integer
 "activeCooldown": integer

constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityParams$$Type = ($AbilityParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityParams_ = $AbilityParams$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetBuilding" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseGadget, $BaseGadget$$Type} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$GadgetTarget, $GadgetTarget$$Type} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $GadgetBuilding extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "gadgetTarget"(): $GadgetTarget
public "getEnergyCost"(): integer
public "getEnergyMax"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetBuilding$$Type = ($GadgetBuilding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GadgetBuilding_ = $GadgetBuilding$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.gooexplodeparticle.GooExplodeParticleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $GooExplodeParticleData implements $ParticleOptions {
static readonly "MAP_CODEC": $MapCodec<($GooExplodeParticleData)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GooExplodeParticleData)>

constructor(arg0: $ItemStack$$Type)

public "getType"(): $ParticleType<($GooExplodeParticleData)>
public "getItemStack"(): $ItemStack
get "type"(): $ParticleType<($GooExplodeParticleData)>
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooExplodeParticleData$$Type = ($GooExplodeParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooExplodeParticleData_ = $GooExplodeParticleData$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetCopyPaste" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseGadget, $BaseGadget$$Type} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemActionContext, $ItemActionContext$$Type} from "com.direwolf20.buildinggadgets2.util.context.ItemActionContext"
import {$GadgetTarget, $GadgetTarget$$Type} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $GadgetCopyPaste extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "gadgetTarget"(): $GadgetTarget
public "buildAndStore"(arg0: $ItemActionContext$$Type, arg1: $ItemStack$$Type): void
public "getEnergyCost"(): integer
public "getEnergyMax"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetCopyPaste$$Type = ($GadgetCopyPaste);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GadgetCopyPaste_ = $GadgetCopyPaste$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unstableportalfluid.UnstablePortalFluid$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$UnstablePortalFluid, $UnstablePortalFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.unstableportalfluid.UnstablePortalFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnstablePortalFluid$Flowing extends $UnstablePortalFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnstablePortalFluid$Flowing$$Type = ($UnstablePortalFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnstablePortalFluid$Flowing_ = $UnstablePortalFluid$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.xpfluid.XPFluidBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $XPFluidBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XPFluidBlock$$Type = ($XPFluidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XPFluidBlock_ = $XPFluidBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt4fuel.UnrefinedT4Fuel$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$UnrefinedT4Fuel, $UnrefinedT4Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.unrefinedt4fuel.UnrefinedT4Fuel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnrefinedT4Fuel$Source extends $UnrefinedT4Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT4Fuel$Source$$Type = ($UnrefinedT4Fuel$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT4Fuel$Source_ = $UnrefinedT4Fuel$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.EclipseAlloyShovel" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseShovel, $BaseShovel$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseShovel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $EclipseAlloyShovel extends $BaseShovel implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyShovel$$Type = ($EclipseAlloyShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyShovel_ = $EclipseAlloyShovel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.PlayerAccessor" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlayerAccessor extends $BaseMachineBlock {
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "direRotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAccessor$$Type = ($PlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAccessor_ = $PlayerAccessor$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt4fuel.RefinedT4Fuel" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$RefinedFuel, $RefinedFuel$$Type} from "com.direwolf20.justdirethings.common.fluids.basefluids.RefinedFuel"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $RefinedT4Fuel extends $BaseFlowingFluid implements $RefinedFuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public "fePerMb"(): integer
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT4Fuel$$Type = ($RefinedT4Fuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT4Fuel_ = $RefinedT4Fuel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt3fuel.RefinedT3FuelBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RefinedT3FuelBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT3FuelBlock$$Type = ($RefinedT3FuelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT3FuelBlock_ = $RefinedT3FuelBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.soil.GooSoilBase" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$FarmBlock, $FarmBlock$$Type} from "net.minecraft.world.level.block.FarmBlock"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GooSoilBase extends $FarmBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FarmBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "MAX_MOISTURE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "MOISTURE": $IntegerProperty
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

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "fallOn"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: float): void
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "bonemealMe"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): void
public static "teleportDrops"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>, arg3: $BlockPos$$Type): void
public static "dropDrops"(arg0: $ServerLevel$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $BlockPos$$Type): void
public static "harvestCrop"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public static "autoHarvest"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): void
public "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
public static "harvestStemCrop"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public static "harvest2TallCrop"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooSoilBase$$Type = ($GooSoilBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooSoilBase_ = $GooSoilBase$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.basetools.BasePaxel" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BasePickaxe, $BasePickaxe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BasePickaxe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $BasePaxel extends $BasePickaxe {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePaxel$$Type = ($BasePaxel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePaxel_ = $BasePaxel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.BasePoweredItem" {
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
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BasePoweredItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePoweredItem$$Type = ($BasePoweredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePoweredItem_ = $BasePoweredItem$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.FerricoreSword" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseSword, $BaseSword$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseSword"

export class $FerricoreSword extends $BaseSword {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerricoreSword$$Type = ($FerricoreSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FerricoreSword_ = $FerricoreSword$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.PoweredItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $PoweredItem {

 "getMaxEnergy"(): integer
 "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
 "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
 "getPowerBarColor"(arg0: $ItemStack$$Type): integer
get "maxEnergy"(): integer
}

export namespace $PoweredItem {
function consumeEnergy(arg0: $ItemStack$$Type, arg1: integer): boolean
function hasEnoughEnergy(arg0: $ItemStack$$Type, arg1: integer): boolean
function getAvailableEnergy(arg0: $ItemStack$$Type): integer
const probejs$$marker: never
}
export class $PoweredItem$$Static implements $PoweredItem {


static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
 "getMaxEnergy"(): integer
static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
 "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
 "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
 "getPowerBarColor"(arg0: $ItemStack$$Type): integer
static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredItem$$Type = ($PoweredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredItem_ = $PoweredItem$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetCutPaste" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseGadget, $BaseGadget$$Type} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GadgetTarget, $GadgetTarget$$Type} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GadgetCutPaste extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "gadgetTarget"(): $GadgetTarget
public "cutAndStore"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "getEnergyCost"(): integer
public "getEnergyMax"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "customCutValidation"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $BlockPos$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetCutPaste$$Type = ($GadgetCutPaste);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GadgetCutPaste_ = $GadgetCutPaste$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.EclipseAlloySword" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BaseSword, $BaseSword$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BaseSword"

export class $EclipseAlloySword extends $BaseSword implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloySword$$Type = ($EclipseAlloySword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloySword_ = $EclipseAlloySword$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.FluidDropRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidDropRecipe implements $CraftingRecipe {

constructor(arg0: $ResourceLocation$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: $Item$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: $Holder$$Type<($Item)>)

public "category"(): $CraftingBookCategory
public "getInput"(): $BlockState
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type): boolean
public "getId"(): $ResourceLocation
public "getType"(): $RecipeType<(any)>
public "getOutput"(): $BlockState
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getCatalyst"(): $Item
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getCatalystHolder"(): $Holder<($Item)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "input"(): $BlockState
get "id"(): $ResourceLocation
get "type"(): $RecipeType<(any)>
get "output"(): $BlockState
get "special"(): boolean
get "catalyst"(): $Item
get "serializer"(): $RecipeSerializer<(any)>
get "catalystHolder"(): $Holder<($Item)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDropRecipe$$Type = ($FluidDropRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDropRecipe_ = $FluidDropRecipe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt3fuel.RefinedT3Fuel$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RefinedT3Fuel, $RefinedT3Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.refinedt3fuel.RefinedT3Fuel"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $RefinedT3Fuel$Source extends $RefinedT3Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT3Fuel$Source$$Type = ($RefinedT3Fuel$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT3Fuel$Source_ = $RefinedT3Fuel$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.TimeCrystal" {
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
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TimeCrystal extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "timeProtection"(arg0: $Entity$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeCrystal$$Type = ($TimeCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeCrystal_ = $TimeCrystal$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.blocks.TemplateManager" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TemplateManager extends $Block implements $EntityBlock {
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

constructor()

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateManager$$Type = ($TemplateManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateManager_ = $TemplateManager$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.RawFerricoreOre" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseRawOre, $BaseRawOre$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseRawOre"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RawFerricoreOre extends $BaseRawOre {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawFerricoreOre$$Type = ($RawFerricoreOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawFerricoreOre_ = $RawFerricoreOre$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.portalfluid.PortalFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $PortalFluid extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalFluid$$Type = ($PortalFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalFluid_ = $PortalFluid$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.CelestigemPaxel" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$BasePaxel, $BasePaxel$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BasePaxel"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $CelestigemPaxel extends $BasePaxel implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "getMaxEnergy"(): integer
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestigemPaxel$$Type = ($CelestigemPaxel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestigemPaxel_ = $CelestigemPaxel$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.paradoxparticle.ParadoxParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParadoxParticleData, $ParadoxParticleData$$Type} from "com.direwolf20.justdirethings.client.particles.paradoxparticle.ParadoxParticleData"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ParadoxParticleType extends $ParticleType<($ParadoxParticleData)> {

constructor(arg0: boolean)

public "getType"(): $ParadoxParticleType
public "codec"(): $MapCodec<($ParadoxParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ParadoxParticleData)>
get "type"(): $ParadoxParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParadoxParticleType$$Type = ($ParadoxParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParadoxParticleType_ = $ParadoxParticleType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt3fuel.UnrefinedT3Fuel$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$UnrefinedT3Fuel, $UnrefinedT3Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.unrefinedt3fuel.UnrefinedT3Fuel"

export class $UnrefinedT3Fuel$Source extends $UnrefinedT3Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT3Fuel$Source$$Type = ($UnrefinedT3Fuel$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT3Fuel$Source_ = $UnrefinedT3Fuel$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.resources.BlazeGoldBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlazeGoldBlock extends $Block {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeGoldBlock$$Type = ($BlazeGoldBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeGoldBlock_ = $BlazeGoldBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.FluidDropRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FluidDropRecipe, $FluidDropRecipe$$Type} from "com.direwolf20.justdirethings.datagen.recipes.FluidDropRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FluidDropRecipe$Serializer implements $RecipeSerializer<($FluidDropRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidDropRecipe)>

constructor()

public "codec"(): $MapCodec<($FluidDropRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FluidDropRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDropRecipe$Serializer$$Type = ($FluidDropRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDropRecipe$Serializer_ = $FluidDropRecipe$Serializer$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.polymorphicfluid.PolymorphicFluid$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$PolymorphicFluid, $PolymorphicFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.polymorphicfluid.PolymorphicFluid"

export class $PolymorphicFluid$Source extends $PolymorphicFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicFluid$Source$$Type = ($PolymorphicFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicFluid$Source_ = $PolymorphicFluid$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseBoots" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseBoots extends $ArmorItem implements $ToggleableTool, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBoots$$Type = ($BaseBoots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBoots_ = $BaseBoots$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.xpfluid.XPFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $XPFluid extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XPFluid$$Type = ($XPFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XPFluid_ = $XPFluid$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.AbilityRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$SmithingRecipeInput, $SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SmithingRecipe, $SmithingRecipe$$Type} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AbilityRecipe implements $SmithingRecipe {

constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $Ingredient$$Type)

public "getBase"(): $Ingredient
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getTemplate"(): $Ingredient
public "getAddition"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(any)>
public "isIncomplete"(): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
get "base"(): $Ingredient
get "type"(): $RecipeType<(any)>
get "template"(): $Ingredient
get "addition"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityRecipe$$Type = ($AbilityRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityRecipe_ = $AbilityRecipe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.Ability$CustomSettingType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Ability$CustomSettingType extends $Enum<($Ability$CustomSettingType)> {
static readonly "TARGET": $Ability$CustomSettingType
static readonly "RENDER": $Ability$CustomSettingType
static readonly "NONE": $Ability$CustomSettingType


public static "values"(): ($Ability$CustomSettingType)[]
public static "valueOf"(arg0: StringJS): $Ability$CustomSettingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ability$CustomSettingType$$Type = (("none") | ("render") | ("target"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ability$CustomSettingType_ = $Ability$CustomSettingType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.timefluid.TimeFluidBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TimeFluidBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeFluidBlock$$Type = ($TimeFluidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeFluidBlock_ = $TimeFluidBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.EclipseAlloyBoots" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BaseBoots, $BaseBoots$$Type} from "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseBoots"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $EclipseAlloyBoots extends $BaseBoots implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyBoots$$Type = ($EclipseAlloyBoots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyBoots_ = $EclipseAlloyBoots$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unstableportalfluid.UnstablePortalFluidType" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnstablePortalFluidType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "onVaporize"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $FluidStack$$Type): void
public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "isVaporizedOnPlacement"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnstablePortalFluidType$$Type = ($UnstablePortalFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnstablePortalFluidType_ = $UnstablePortalFluidType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.xpfluid.XPFluidType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $XPFluidType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XPFluidType$$Type = ($XPFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XPFluidType_ = $XPFluidType$$Type;
}}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetExchanger" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseGadget, $BaseGadget$$Type} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$GadgetTarget, $GadgetTarget$$Type} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $GadgetExchanger extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "undo"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "gadgetTarget"(): $GadgetTarget
public "getEnergyCost"(): integer
public "getEnergyMax"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEnchantmentValue"(): integer
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "energyCost"(): integer
get "energyMax"(): integer
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetExchanger$$Type = ($GadgetExchanger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GadgetExchanger_ = $GadgetExchanger$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.ToggleableItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ToggleableItem {

 "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
 "getEnabled"(arg0: $ItemStack$$Type): boolean
}

export namespace $ToggleableItem {
function getToggleableItem(arg0: $Player$$Type): $ItemStack
const probejs$$marker: never
}
export class $ToggleableItem$$Static implements $ToggleableItem {


 "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
 "getEnabled"(arg0: $ItemStack$$Type): boolean
static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleableItem$$Type = ($ToggleableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleableItem_ = $ToggleableItem$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.timefluid.TimeFluid$Source" {
import {$TimeFluid, $TimeFluid$$Type} from "com.direwolf20.justdirethings.common.fluids.timefluid.TimeFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $TimeFluid$Source extends $TimeFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeFluid$Source$$Type = ($TimeFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeFluid$Source_ = $TimeFluid$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unstableportalfluid.UnstablePortalFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $UnstablePortalFluid extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnstablePortalFluid$$Type = ($UnstablePortalFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnstablePortalFluid_ = $UnstablePortalFluid$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt3fuel.RefinedT3Fuel" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$RefinedFuel, $RefinedFuel$$Type} from "com.direwolf20.justdirethings.common.fluids.basefluids.RefinedFuel"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $RefinedT3Fuel extends $BaseFlowingFluid implements $RefinedFuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public "fePerMb"(): integer
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT3Fuel$$Type = ($RefinedT3Fuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT3Fuel_ = $RefinedT3Fuel$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$PoweredItem, $PoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredItem"

export interface $PoweredTool extends $PoweredItem {

 "getBlockBreakFECost"(): integer
 "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
 "getMaxEnergy"(): integer
 "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
 "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
 "getPowerBarColor"(arg0: $ItemStack$$Type): integer
get "blockBreakFECost"(): integer
get "maxEnergy"(): integer
}

export namespace $PoweredTool {
function consumeEnergy(arg0: $ItemStack$$Type, arg1: integer): boolean
function hasEnoughEnergy(arg0: $ItemStack$$Type, arg1: integer): boolean
function getAvailableEnergy(arg0: $ItemStack$$Type): integer
const probejs$$marker: never
}
export class $PoweredTool$$Static implements $PoweredTool {


 "getBlockBreakFECost"(): integer
 "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
 "getMaxEnergy"(): integer
static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
 "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
 "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
 "getPowerBarColor"(arg0: $ItemStack$$Type): integer
static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredTool$$Type = ($PoweredTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredTool_ = $PoweredTool$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt3fuel.RefinedT3Fuel$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RefinedT3Fuel, $RefinedT3Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.refinedt3fuel.RefinedT3Fuel"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $RefinedT3Fuel$Flowing extends $RefinedT3Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT3Fuel$Flowing$$Type = ($RefinedT3Fuel$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT3Fuel$Flowing_ = $RefinedT3Fuel$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.datagen.recipes.PaxelRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$SmithingRecipeInput, $SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SmithingRecipe, $SmithingRecipe$$Type} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PaxelRecipe implements $SmithingRecipe {

constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type)

public "getResult"(): $ItemStack
public "getBase"(): $Ingredient
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getTemplate"(): $Ingredient
public "getAddition"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(any)>
public "isIncomplete"(): boolean
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
get "result"(): $ItemStack
get "base"(): $Ingredient
get "type"(): $RecipeType<(any)>
get "template"(): $Ingredient
get "addition"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaxelRecipe$$Type = ($PaxelRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaxelRecipe_ = $PaxelRecipe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt4fuel.UnrefinedT4FuelType" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $UnrefinedT4FuelType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT4FuelType$$Type = ($UnrefinedT4FuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT4FuelType_ = $UnrefinedT4FuelType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.resources.RawEclipseAlloy" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $RawEclipseAlloy extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawEclipseAlloy$$Type = ($RawEclipseAlloy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawEclipseAlloy_ = $RawEclipseAlloy$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.BlockBreakerT1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockBreakerT1 extends $BaseMachineBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ACTIVE": $BooleanProperty
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBreakerT1$$Type = ($BlockBreakerT1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBreakerT1_ = $BlockBreakerT1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.BlockBreakerT2" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockBreakerT2 extends $BaseMachineBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBreakerT2$$Type = ($BlockBreakerT2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBreakerT2_ = $BlockBreakerT2$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.alwaysvisibleparticle.AlwaysVisibleParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AlwaysVisibleParticleData, $AlwaysVisibleParticleData$$Type} from "com.direwolf20.justdirethings.client.particles.alwaysvisibleparticle.AlwaysVisibleParticleData"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AlwaysVisibleParticleType extends $ParticleType<($AlwaysVisibleParticleData)> {

constructor(arg0: boolean)

public "getType"(): $AlwaysVisibleParticleType
public "codec"(): $MapCodec<($AlwaysVisibleParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AlwaysVisibleParticleData)>
get "type"(): $AlwaysVisibleParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlwaysVisibleParticleType$$Type = ($AlwaysVisibleParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlwaysVisibleParticleType_ = $AlwaysVisibleParticleType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.FuelCanister" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $FuelCanister extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(any)>): integer
public static "decrementFuel"(arg0: $ItemStack$$Type): void
public static "getBurnSpeed"(arg0: $ItemStack$$Type): double
public static "setBurnSpeed"(arg0: $ItemStack$$Type, arg1: double): void
public static "incrementFuel"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public static "setFuelLevel"(arg0: $ItemStack$$Type, arg1: integer): void
public static "getFuelLevel"(arg0: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public static "calculateBurnSpeed"(arg0: integer, arg1: double, arg2: integer, arg3: double): double
public static "getBurnSpeedMultiplier"(arg0: $ItemStack$$Type): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelCanister$$Type = ($FuelCanister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelCanister_ = $FuelCanister$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.tools.EclipseAlloyPickaxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BasePickaxe, $BasePickaxe$$Type} from "com.direwolf20.justdirethings.common.items.tools.basetools.BasePickaxe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTool, $PoweredTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $EclipseAlloyPickaxe extends $BasePickaxe implements $PoweredTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getMaxEnergy"(): integer
public "getBlockBreakFECost"(): integer
public "getPoweredAttributeModifiers"(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type): $ItemAttributeModifiers
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
get "blockBreakFECost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseAlloyPickaxe$$Type = ($EclipseAlloyPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseAlloyPickaxe_ = $EclipseAlloyPickaxe$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.refinedt2fuel.RefinedT2Fuel$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$RefinedT2Fuel, $RefinedT2Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.refinedt2fuel.RefinedT2Fuel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $RefinedT2Fuel$Source extends $RefinedT2Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedT2Fuel$Source$$Type = ($RefinedT2Fuel$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedT2Fuel$Source_ = $RefinedT2Fuel$Source$$Type;
}}
declare module "com.direwolf20.justdirethings.client.particles.gooexplodeparticle.GooExplodeParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GooExplodeParticleData, $GooExplodeParticleData$$Type} from "com.direwolf20.justdirethings.client.particles.gooexplodeparticle.GooExplodeParticleData"

export class $GooExplodeParticleType extends $ParticleType<($GooExplodeParticleData)> {

constructor(arg0: boolean)

public "getType"(): $GooExplodeParticleType
public "codec"(): $MapCodec<($GooExplodeParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($GooExplodeParticleData)>
get "type"(): $GooExplodeParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooExplodeParticleType$$Type = ($GooExplodeParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooExplodeParticleType_ = $GooExplodeParticleType$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.soil.GooSoilTier2" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$GooSoilBase, $GooSoilBase$$Type} from "com.direwolf20.justdirethings.common.blocks.soil.GooSoilBase"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$FarmBlock, $FarmBlock$$Type} from "net.minecraft.world.level.block.FarmBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GooSoilTier2 extends $GooSoilBase {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FarmBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "MAX_MOISTURE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "MOISTURE": $IntegerProperty
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

public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooSoilTier2$$Type = ($GooSoilTier2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooSoilTier2_ = $GooSoilTier2$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.soil.GooSoilTier1" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$GooSoilBase, $GooSoilBase$$Type} from "com.direwolf20.justdirethings.common.blocks.soil.GooSoilBase"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$FarmBlock, $FarmBlock$$Type} from "net.minecraft.world.level.block.FarmBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GooSoilTier1 extends $GooSoilBase {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FarmBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "MAX_MOISTURE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "MOISTURE": $IntegerProperty
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

public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooSoilTier1$$Type = ($GooSoilTier1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooSoilTier1_ = $GooSoilTier1$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.soil.GooSoilTier4" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$GooSoilBase, $GooSoilBase$$Type} from "com.direwolf20.justdirethings.common.blocks.soil.GooSoilBase"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$FarmBlock, $FarmBlock$$Type} from "net.minecraft.world.level.block.FarmBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GooSoilTier4 extends $GooSoilBase implements $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FarmBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "MAX_MOISTURE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "MOISTURE": $IntegerProperty
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

public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooSoilTier4$$Type = ($GooSoilTier4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooSoilTier4_ = $GooSoilTier4$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.soil.GooSoilTier3" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$GooSoilBase, $GooSoilBase$$Type} from "com.direwolf20.justdirethings.common.blocks.soil.GooSoilBase"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$FarmBlock, $FarmBlock$$Type} from "net.minecraft.world.level.block.FarmBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GooSoilTier3 extends $GooSoilBase implements $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FarmBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "MAX_MOISTURE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "MOISTURE": $IntegerProperty
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

public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooSoilTier3$$Type = ($GooSoilTier3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooSoilTier3_ = $GooSoilTier3$$Type;
}}
declare module "com.direwolf20.justdirethings.common.fluids.unrefinedt3fuel.UnrefinedT3Fuel$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$UnrefinedT3Fuel, $UnrefinedT3Fuel$$Type} from "com.direwolf20.justdirethings.common.fluids.unrefinedt3fuel.UnrefinedT3Fuel"

export class $UnrefinedT3Fuel$Flowing extends $UnrefinedT3Fuel {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnrefinedT3Fuel$Flowing$$Type = ($UnrefinedT3Fuel$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnrefinedT3Fuel$Flowing_ = $UnrefinedT3Fuel$Flowing$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.EclipseGateBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EclipseGateBlock extends $Block implements $EntityBlock {
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
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EclipseGateBlock$$Type = ($EclipseGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EclipseGateBlock_ = $EclipseGateBlock$$Type;
}}
declare module "com.direwolf20.justdirethings.common.blocks.EnergyTransmitter" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMachineBlock, $BaseMachineBlock$$Type} from "com.direwolf20.justdirethings.common.blocks.baseblocks.BaseMachineBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyTransmitter extends $BaseMachineBlock {
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

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $BlockPos$$Type): void
public "isValidBE"(arg0: $BlockEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyTransmitter$$Type = ($EnergyTransmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyTransmitter_ = $EnergyTransmitter$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.armors.basearmors.BaseHelmet" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbilityParams, $AbilityParams$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.AbilityParams"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ToggleableTool, $ToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $BaseHelmet extends $ArmorItem implements $ToggleableTool, $LeftClickableTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "getAbilities"(): $EnumSet<($Ability)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getAllAbilities"(): $EnumSet<($Ability)>
public "getAbilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public "canUseAbility"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "bindDrops"(arg0: $UseOnContext$$Type): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: boolean): boolean
public "useOnAbility"(arg0: $UseOnContext$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean): boolean
public "useAbility"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: boolean): boolean
public "hasAbility"(arg0: $Ability$$Type): boolean
public "canInstaBreak"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Set$$Type<($BlockPos$$Type)>): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public "armorTick"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "bindSoil"(arg0: $UseOnContext$$Type): boolean
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public "openSettings"(arg0: $Player$$Type): void
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public "getBreakBlockPositions"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: $BlockState$$Type): $Set<($BlockPos)>
public "getAbilityParams"(arg0: $Ability$$Type): $AbilityParams
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public "getActiveAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "getAllPassiveAbilities"(): $List<($Ability)>
public "getUseOnAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public "getCooldownAbilities"(): $List<($Ability)>
public "hurtEnemyAbility"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "mineBlocksAbility"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): void
public "registerAbility"(arg0: $Ability$$Type, arg1: $AbilityParams$$Type): void
public "registerAbility"(arg0: $Ability$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public "getPassiveTickAbilities"(arg0: $ItemStack$$Type): $List<($Ability)>
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public "canUseAbilityAndDurability"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): boolean
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public "toggleEnabled"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getEnabled"(arg0: $ItemStack$$Type): boolean
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "abilities"(): $EnumSet<($Ability)>
get "allAbilities"(): $EnumSet<($Ability)>
get "abilityParamsMap"(): $Map<($Ability), ($AbilityParams)>
get "allPassiveAbilities"(): $List<($Ability)>
get "cooldownAbilities"(): $List<($Ability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseHelmet$$Type = ($BaseHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseHelmet_ = $BaseHelmet$$Type;
}}
declare module "com.direwolf20.justdirethings.common.items.PolymorphicWandV2" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NBTHelpers$BoundInventory, $NBTHelpers$BoundInventory$$Type} from "com.direwolf20.justdirethings.util.NBTHelpers$BoundInventory"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ability, $Ability$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.Ability"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BaseToggleableTool, $BaseToggleableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.BaseToggleableTool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$FluidContainingItem, $FluidContainingItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.FluidContainingItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LeftClickableTool, $LeftClickableTool$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.LeftClickableTool"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$PoweredItem, $PoweredItem$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.PoweredItem"
import {$ToolRecords$AbilityBinding, $ToolRecords$AbilityBinding$$Type} from "com.direwolf20.justdirethings.common.items.interfaces.ToolRecords$AbilityBinding"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $PolymorphicWandV2 extends $BaseToggleableTool implements $LeftClickableTool, $FluidContainingItem, $PoweredItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getMaxMB"(): integer
public "getMaxEnergy"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "savePolymorphTarget"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type): void
public static "getBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "setBindingMode"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer): void
public static "getLeftClickList"(arg0: $ItemStack$$Type): $Set<($Ability)>
public static "setLeftClickList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($Ability$$Type)>): void
public static "getCustomBindingList"(arg0: $ItemStack$$Type): $List<($ToolRecords$AbilityBinding)>
public static "setCustomBindingList"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ToolRecords$AbilityBinding$$Type)>): void
public static "addToLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getAbilityBinding"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): $ToolRecords$AbilityBinding
public static "addToCustomBindingList"(arg0: $ItemStack$$Type, arg1: $ToolRecords$AbilityBinding$$Type): void
public static "getLeftClickableItem"(arg0: $Player$$Type): $ItemStack
public static "removeFromCustomBindingList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "removeFromLeftClickList"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getCustomBindingListFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Player$$Type): $List<($Ability)>
public static "pickupFluid"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
public static "consumeFluid"(arg0: $ItemStack$$Type, arg1: integer): void
public static "hasEnoughFluid"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "getAvailableFluid"(arg0: $ItemStack$$Type): integer
public "isFluidBarVisible"(arg0: $ItemStack$$Type): boolean
public "getFluidBarWidth"(arg0: $ItemStack$$Type): integer
public "getFluidBarColor"(arg0: $ItemStack$$Type): integer
public static "getLiquidBlockAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $LiquidBlock
public static "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "isPowerBarVisible"(arg0: $ItemStack$$Type): boolean
public "getPowerBarWidth"(arg0: $ItemStack$$Type): integer
public "getPowerBarColor"(arg0: $ItemStack$$Type): integer
public static "getAvailableEnergy"(arg0: $ItemStack$$Type): integer
public static "setSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: boolean): void
public static "getSetting"(arg0: $ItemStack$$Type, arg1: StringJS): boolean
public static "addCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: integer, arg3: boolean): void
public static "isItemEquipped"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public static "cycleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "tickCooldowns"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): void
public static "getAnyCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): integer
public static "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): boolean
public static "setToolValue"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "toggleSetting"(arg0: $ItemStack$$Type, arg1: StringJS): void
public static "getToolValue"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "getCooldown"(arg0: $ItemStack$$Type, arg1: $Ability$$Type, arg2: boolean): integer
public static "getTargetLookDirection"(arg0: $LivingEntity$$Type): $Direction
public static "getInstantRFCost"(arg0: float, arg1: $Level$$Type, arg2: $ItemStack$$Type): integer
public static "cooldownDataClear"(arg0: $ItemStack$$Type, arg1: $Ability$$Type): void
public static "getBoundInventory"(arg0: $ItemStack$$Type): $NBTHelpers$BoundInventory
public static "removeBoundInventory"(arg0: $ItemStack$$Type): void
public static "setBoundInventory"(arg0: $ItemStack$$Type, arg1: $NBTHelpers$BoundInventory$$Type): void
public static "smelterParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "smokerParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "getBoundHandler"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $IItemHandler
public static "setCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: integer): void
public static "getCustomSetting"(arg0: $ItemStack$$Type, arg1: StringJS): integer
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): void
public static "teleportParticles"(arg0: $ServerLevel$$Type, arg1: $Set$$Type<($BlockPos$$Type)>): void
public static "getToggleableItem"(arg0: $Player$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxMB"(): integer
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicWandV2$$Type = ($PolymorphicWandV2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicWandV2_ = $PolymorphicWandV2$$Type;
}}
