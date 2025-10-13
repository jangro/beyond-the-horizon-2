declare module "com.enderio.machines.common.blocks.soul_binder.SoulBindingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineRecipe, $MachineRecipe$$Type} from "com.enderio.machines.common.blocks.base.MachineRecipe"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SoulBindingRecipe$Input, $SoulBindingRecipe$Input$$Type} from "com.enderio.machines.common.blocks.soul_binder.SoulBindingRecipe$Input"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack, $OutputStack$$Type} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $SoulBindingRecipe extends $Record implements $MachineRecipe<($SoulBindingRecipe$Input)> {

constructor(output: $ItemStack$$Type, input: $Ingredient$$Type, energy: integer, experience: integer, entityType: $Optional$$Type<($ResourceLocation$$Type)>, mobCategory: $Optional$$Type<($MobCategory$$Type)>, soulData: $Optional$$Type<(StringJS)>, copyInputComponents: boolean)

public "input"(): $Ingredient
public "output"(): $ItemStack
public "getInput"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SoulBindingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $SoulBindingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "energy"(): integer
public "experience"(): integer
public "getIngredients"(): $NonNullList<($Ingredient)>
public "entityType"(): $Optional<($ResourceLocation)>
public "mobCategory"(): $Optional<($MobCategory)>
public "soulData"(): $Optional<(StringJS)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "copyInputComponents"(): boolean
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getEnergyCost"(arg0: $SoulBindingRecipe$Input$$Type): integer
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SoulBindingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SoulBindingRecipe$Input$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$$Type = ({"energy"?: integer, "input"?: $Ingredient$$Type, "copyInputComponents"?: boolean, "experience"?: integer, "entityType"?: ($ResourceLocation$$Type)?, "mobCategory"?: ($MobCategory$$Type)?, "soulData"?: (StringJS)?, "output"?: $ItemStack$$Type}) | ([energy?: integer, input?: $Ingredient$$Type, copyInputComponents?: boolean, experience?: integer, entityType?: ($ResourceLocation$$Type)?, mobCategory?: ($MobCategory$$Type)?, soulData?: (StringJS)?, output?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulBindingRecipe_ = $SoulBindingRecipe$$Type;
}}
declare module "com.enderio.base.common.filter.item.general.EnderItemFilterItem" {
import {$EnderItemFilterItem$Type, $EnderItemFilterItem$Type$$Type} from "com.enderio.base.common.filter.item.general.EnderItemFilterItem$Type"
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
import {$AbstractFilterItem, $AbstractFilterItem$$Type} from "com.enderio.base.common.filter.AbstractFilterItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnderItemFilter, $EnderItemFilter$$Type} from "com.enderio.base.common.filter.item.general.EnderItemFilter"
import {$ItemFilter, $ItemFilter$$Type} from "com.enderio.base.api.filter.ItemFilter"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FilterMenuProvider, $FilterMenuProvider$$Type} from "com.enderio.base.api.filter.FilterMenuProvider"

export class $EnderItemFilterItem extends $AbstractFilterItem<($EnderItemFilter)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILTER_MENU_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FilterMenuProvider)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ITEM_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ItemFilter)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $EnderItemFilterItem$Type$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderItemFilterItem$$Type = ($EnderItemFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderItemFilterItem_ = $EnderItemFilterItem$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedCraftingTableBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CraftingTableBlock, $CraftingTableBlock$$Type} from "net.minecraft.world.level.block.CraftingTableBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PaintedCraftingTableBlock extends $CraftingTableBlock implements $EntityBlock, $PaintedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CraftingTableBlock)>
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

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedCraftingTableBlock$$Type = ($PaintedCraftingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedCraftingTableBlock_ = $PaintedCraftingTableBlock$$Type;
}}
declare module "com.enderio.conduits.common.items.ConduitProbeItem$State" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $ConduitProbeItem$State extends $Enum<($ConduitProbeItem$State)> {
static readonly "CODEC": $Codec<($ConduitProbeItem$State)>
static readonly "COPY_PASTE": $ConduitProbeItem$State
static readonly "PROBE": $ConduitProbeItem$State
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitProbeItem$State)>


public static "values"(): ($ConduitProbeItem$State)[]
public static "valueOf"(arg0: StringJS): $ConduitProbeItem$State
public "getStateText"(): $Component
get "stateText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitProbeItem$State$$Type = (("probe") | ("copy_paste"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitProbeItem$State_ = $ConduitProbeItem$State$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.energy.EnergyConduitTicker" {
import {$IConduitNetwork, $IConduitNetwork$$Type} from "com.enderio.conduits.api.network.IConduitNetwork"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$EnergyConduit, $EnergyConduit$$Type} from "com.enderio.conduits.common.conduit.type.energy.EnergyConduit"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $EnergyConduitTicker implements $ConduitTicker<($EnergyConduit)> {
static readonly "INSTANCE": $EnergyConduitTicker

constructor()

public "tick"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type<(any), (any)>, arg2: $IConduitNetwork$$Type): void
public "tick"(arg0: $ServerLevel$$Type, arg1: $EnergyConduit$$Type, arg2: $IConduitNetwork$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyConduitTicker$$Type = ($EnergyConduitTicker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyConduitTicker_ = $EnergyConduitTicker$$Type;
}}
declare module "com.enderio.machines.common.blocks.enchanter.EnchanterRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$EnchanterRecipe$Input, $EnchanterRecipe$Input$$Type} from "com.enderio.machines.common.blocks.enchanter.EnchanterRecipe$Input"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnchanterRecipe extends $Record implements $Recipe<($EnchanterRecipe$Input)> {

constructor(enchantment: $Holder$$Type<($Enchantment)>, costMultiplier: integer, input: $SizedIngredient$$Type)

public "input"(): $SizedIngredient
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $EnchanterRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "enchantment"(): $Holder<($Enchantment)>
public "isSpecial"(): boolean
public "costMultiplier"(): integer
public "getXPCost"(arg0: $EnchanterRecipe$Input$$Type): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $EnchanterRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getInputAmountConsumed"(arg0: $EnchanterRecipe$Input$$Type): integer
public "getLapisForLevel"(arg0: integer): integer
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getEnchantmentLevel"(arg0: integer): integer
public "getXPCostForLevel"(arg0: integer): integer
public "getBookForLevel"(arg0: integer): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $EnchanterRecipe$Input$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$$Type = ({"input"?: $SizedIngredient$$Type, "costMultiplier"?: integer, "enchantment"?: $Holder$$Type<($Enchantment)>}) | ([input?: $SizedIngredient$$Type, costMultiplier?: integer, enchantment?: $Holder$$Type<($Enchantment)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterRecipe_ = $EnchanterRecipe$$Type;
}}
declare module "com.enderio.base.common.block.ResettingLeverBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LeverBlock, $LeverBlock$$Type} from "net.minecraft.world.level.block.LeverBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$AttachFace, $AttachFace$$Type} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ResettingLeverBlock extends $LeverBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LeverBlock)>
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
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
 "hasCollision": boolean

constructor(arg0: integer, arg1: boolean)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResettingLeverBlock$$Type = ($ResettingLeverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResettingLeverBlock_ = $ResettingLeverBlock$$Type;
}}
declare module "com.enderio.base.common.item.misc.CreativeTabIconItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $CreativeTabIconItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabIconItem$$Type = ($CreativeTabIconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabIconItem_ = $CreativeTabIconItem$$Type;
}}
declare module "com.enderio.base.api.grindingball.GrindingBallData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GrindingBallData extends $Record {
static readonly "IDENTITY": $GrindingBallData
static readonly "CODEC": $Codec<($GrindingBallData)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($GrindingBallData)>

constructor(outputMultiplier: float, bonusMultiplier: float, powerUse: float, durability: integer)

public "isIdentity"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($GrindingBallData)>
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $GrindingBallData
public "durability"(): integer
public "powerUse"(): float
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public "outputMultiplier"(): float
public "bonusMultiplier"(): float
get "identity"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindingBallData$$Type = ({"outputMultiplier"?: float, "powerUse"?: float, "bonusMultiplier"?: float, "durability"?: integer}) | ([outputMultiplier?: float, powerUse?: float, bonusMultiplier?: float, durability?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrindingBallData_ = $GrindingBallData$$Type;
}}
declare module "com.enderio.conduits.api.ticker.ConduitTicker" {
import {$IConduitNetwork, $IConduitNetwork$$Type} from "com.enderio.conduits.api.network.IConduitNetwork"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export interface $ConduitTicker<TConduit extends $Conduit<(TConduit), (any)>> {

 "tick"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $IConduitNetwork$$Type): void

(arg0: $ServerLevel, arg1: TConduit, arg2: $IConduitNetwork): void
}

export namespace $ConduitTicker {
const probejs$$marker: never
}
export class $ConduitTicker$$Static<TConduit extends $Conduit<(TConduit), (any)>> implements $ConduitTicker {


 "tick"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $IConduitNetwork$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitTicker$$Type<TConduit> = ((arg0: $ServerLevel, arg1: TConduit, arg2: $IConduitNetwork) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitTicker_<TConduit> = $ConduitTicker$$Type<(TConduit)>;
}}
declare module "com.enderio.modconduits.common.modules.appeng.MEConduitConnectionConfig" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MEConduitConnectionConfig extends $Record implements $ConnectionConfig {
static readonly "CODEC": $MapCodec<($MEConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($MEConduitConnectionConfig)>
static readonly "DEFAULT": $MEConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MEConduitConnectionConfig)>

constructor(isConnected: boolean)

public "isConnected"(): boolean
public "type"(): $ConnectionConfigType<(any)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "disconnected"(): $ConnectionConfig
public "reconnected"(): $ConnectionConfig
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEConduitConnectionConfig$$Type = ({"isConnected"?: boolean}) | ([isConnected?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEConduitConnectionConfig_ = $MEConduitConnectionConfig$$Type;
}}
declare module "com.enderio.machines.common.blocks.enderface.EnderfaceBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$EIOEntityBlock, $EIOEntityBlock$$Type} from "com.enderio.base.common.block.EIOEntityBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnderfaceBlockEntity, $EnderfaceBlockEntity$$Type} from "com.enderio.machines.common.blocks.enderface.EnderfaceBlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderfaceBlock extends $EIOEntityBlock<($EnderfaceBlockEntity)> {
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

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderfaceBlock$$Type = ($EnderfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderfaceBlock_ = $EnderfaceBlock$$Type;
}}
declare module "com.enderio.core.common.graph.Network" {
import {$INetworkNode, $INetworkNode$$Type} from "com.enderio.core.common.graph.INetworkNode"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Network$IndexedEdgeList, $Network$IndexedEdgeList$$Type} from "com.enderio.core.common.graph.Network$IndexedEdgeList"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $Network<TNet extends $Network<(TNet), (TNode)>, TNode extends $INetworkNode<(TNet), (TNode)>> {

constructor(arg0: TNode)
constructor(arg0: $List$$Type<(TNode)>, arg1: $List$$Type<($Pair$$Type<(TNode), (TNode)>)>)
constructor(arg0: $List$$Type<(TNode)>, arg1: $Network$IndexedEdgeList$$Type)

public "isValid"(): boolean
public "nodes"(): $Set<(TNode)>
public "remove"(arg0: TNode, arg1: $Consumer$$Type<(TNet)>): void
public "remove"(arg0: TNode): void
public "isEmpty"(): boolean
public "contains"(arg0: TNode): boolean
public "connect"(arg0: TNode, arg1: TNode): void
public "connect"(arg0: TNode, arg1: TNode, arg2: $Consumer$$Type<(TNet)>): void
public "edges"(): $Stream<($Pair<(TNode), (TNode)>)>
public "neighbors"(arg0: TNode): $Set<(TNode)>
public "disconnect"(arg0: TNode, arg1: TNode, arg2: $Consumer$$Type<(TNet)>): void
public "disconnect"(arg0: TNode, arg1: TNode): void
public "nodeCount"(): integer
public "connectMany"(arg0: TNode, arg1: $List$$Type<(TNode)>, arg2: $Consumer$$Type<(TNet)>): void
public "connectMany"(arg0: TNode, arg1: $List$$Type<(TNode)>): void
public "createNodeList"(): $List<(TNode)>
public "isDiscarded"(): boolean
public "createEdgeIndices"(): $Network$IndexedEdgeList
get "valid"(): boolean
get "empty"(): boolean
get "discarded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Network$$Type<TNet, TNode> = ($Network<(TNet), (TNode)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Network_<TNet, TNode> = $Network$$Type<(TNet), (TNode)>;
}}
declare module "com.enderio.armory.common.item.darksteel.IDarkSteelItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CreativeTabVariants, $CreativeTabVariants$$Type} from "com.enderio.core.common.item.CreativeTabVariants"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"
import {$EmpoweredUpgrade, $EmpoweredUpgrade$$Type} from "com.enderio.armory.common.item.darksteel.upgrades.empowered.EmpoweredUpgrade"

export interface $IDarkSteelItem extends $AdvancedTooltipProvider, $CreativeTabVariants {

 "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "getEmpoweredUpgrade"(arg0: $ItemStack$$Type): $Optional<($EmpoweredUpgrade)>
 "addDurabilityTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "isDurabilityBarVisible"(arg0: $ItemStack$$Type): boolean
 "createFullyUpgradedStack"(arg0: $Item$$Type): $ItemStack
 "addCurrentUpgradeTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
 "addAvailableUpgradesTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void

(arg0: $CreativeModeTab$Output): void
}

export namespace $IDarkSteelItem {
const probejs$$marker: never
}
export class $IDarkSteelItem$$Static implements $IDarkSteelItem {


 "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "getEmpoweredUpgrade"(arg0: $ItemStack$$Type): $Optional<($EmpoweredUpgrade)>
 "addDurabilityTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "isDurabilityBarVisible"(arg0: $ItemStack$$Type): boolean
 "createFullyUpgradedStack"(arg0: $Item$$Type): $ItemStack
 "addCurrentUpgradeTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
 "addAvailableUpgradesTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDarkSteelItem$$Type = ((arg0: $CreativeModeTab$Output) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDarkSteelItem_ = $IDarkSteelItem$$Type;
}}
declare module "com.enderio.core.client.item.AdvancedTooltipProvider" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $AdvancedTooltipProvider {

 "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
}

export namespace $AdvancedTooltipProvider {
const probejs$$marker: never
}
export class $AdvancedTooltipProvider$$Static implements $AdvancedTooltipProvider {


 "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedTooltipProvider$$Type = ($AdvancedTooltipProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedTooltipProvider_ = $AdvancedTooltipProvider$$Type;
}}
declare module "com.enderio.base.common.block.glass.FusedQuartzBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$GlassLighting, $GlassLighting$$Type} from "com.enderio.base.common.block.glass.GlassLighting"
import {$GlassIdentifier, $GlassIdentifier$$Type} from "com.enderio.base.common.block.glass.GlassIdentifier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GlassCollisionPredicate, $GlassCollisionPredicate$$Type} from "com.enderio.base.common.block.glass.GlassCollisionPredicate"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$TransparentBlock, $TransparentBlock$$Type} from "net.minecraft.world.level.block.TransparentBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FusedQuartzBlock extends $TransparentBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TransparentBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $GlassIdentifier$$Type, arg2: $DyeColor$$Type)

public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getGlassLighting"(): $GlassLighting
public "getCollisionPredicate"(): $GlassCollisionPredicate
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getExplosionResistance"(): float
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getDescriptionId"(): StringJS
public "asHolder"(): $Holder<(any)>
get "glassLighting"(): $GlassLighting
get "collisionPredicate"(): $GlassCollisionPredicate
get "explosionResistance"(): float
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusedQuartzBlock$$Type = ($FusedQuartzBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusedQuartzBlock_ = $FusedQuartzBlock$$Type;
}}
declare module "com.enderio.conduits.api.network.ConduitBlockConnection" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ConduitBlockConnection extends $Record {

constructor(node: $IConduitNode$$Type, connectionSide: $Direction$$Type)

public "node"(): $IConduitNode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "inventory"(): $IItemHandlerModifiable
public "getSidedCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>): TCapability
public "getVoidCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), (void)>): TCapability
public "connectedBlockPos"(): $BlockPos
public "connectionConfig"<T extends $ConnectionConfig>(arg0: $ConnectionConfigType$$Type<(T)>): T
public "connectionConfig"(): $ConnectionConfig
public "connectionSide"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBlockConnection$$Type = ({"connectionSide"?: $Direction$$Type, "node"?: $IConduitNode$$Type}) | ([connectionSide?: $Direction$$Type, node?: $IConduitNode$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBlockConnection_ = $ConduitBlockConnection$$Type;
}}
declare module "com.enderio.base.common.recipe.FluidRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $FluidRecipeInput extends $RecipeInput {

 "getFluid"(arg0: integer): $FluidStack
 "getItem"(arg0: integer): $ItemStack
 "size"(): integer
 "isEmpty"(): boolean
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}

export namespace $FluidRecipeInput {
const probejs$$marker: never
}
export class $FluidRecipeInput$$Static implements $FluidRecipeInput {


 "getFluid"(arg0: integer): $FluidStack
 "getItem"(arg0: integer): $ItemStack
 "size"(): integer
 "isEmpty"(): boolean
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidRecipeInput$$Type = ($FluidRecipeInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidRecipeInput_ = $FluidRecipeInput$$Type;
}}
declare module "com.enderio.machines.common.blocks.vat.VatBlockEntity" {
import {$MultiSlotAccess, $MultiSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.MultiSlotAccess"
import {$SideConfig, $SideConfig$$Type} from "com.enderio.base.api.capability.SideConfig"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ISoulBindable, $ISoulBindable$$Type} from "com.enderio.base.api.soul.binding.ISoulBindable"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FluidTankUser, $FluidTankUser$$Type} from "com.enderio.machines.common.attachment.FluidTankUser"
import {$MachineTankLayout, $MachineTankLayout$$Type} from "com.enderio.machines.common.io.fluid.MachineTankLayout"
import {$TankAccess, $TankAccess$$Type} from "com.enderio.machines.common.io.fluid.TankAccess"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MachineInventoryLayout, $MachineInventoryLayout$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout"
import {$FermentingRecipe, $FermentingRecipe$$Type} from "com.enderio.machines.common.blocks.vat.FermentingRecipe"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MachineFluidTank, $MachineFluidTank$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidTank"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$MachineFluidHandler, $MachineFluidHandler$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidHandler"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$FluidItemInteractive, $FluidItemInteractive$$Type} from "com.enderio.machines.common.io.fluid.FluidItemInteractive"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"

export class $VatBlockEntity extends $MachineBlockEntity implements $FluidTankUser, $FluidItemInteractive {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "REAGENTS": $MultiSlotAccess
static readonly "TANK_CAPACITY": integer
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($ISoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "OUTPUT_TANK": $TankAccess
static readonly "INDEX": StringJS
static readonly "INPUT_TANK": $TankAccess
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isActive"(): boolean
public "onLoad"(): void
public "serverTick"(): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getTankLayout"(): $MachineTankLayout
public "getInputTank"(): $MachineFluidTank
public "getOutputTank"(): $MachineFluidTank
public "dumpOutputTank"(): void
public "getRecipe"(): $RecipeHolder<($FermentingRecipe)>
public "moveFluidToOutputTank"(): void
public "getCraftingProgress"(): float
public "createFluidHandler"(): $MachineFluidHandler
public "createInventoryLayout"(): $MachineInventoryLayout
public "getFluidHandler"(): $MachineFluidHandler
public "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "tankLayout"(): $MachineTankLayout
get "inputTank"(): $MachineFluidTank
get "outputTank"(): $MachineFluidTank
get "recipe"(): $RecipeHolder<($FermentingRecipe)>
get "craftingProgress"(): float
get "fluidHandler"(): $MachineFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatBlockEntity$$Type = ($VatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatBlockEntity_ = $VatBlockEntity$$Type;
}}
declare module "com.enderio.machines.common.blocks.fluid_tank.FluidTankBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FluidTankBlock, $FluidTankBlock$$Type} from "com.enderio.machines.common.blocks.fluid_tank.FluidTankBlock"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $FluidTankBlockItem extends $BlockItem implements $AdvancedTooltipProvider {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IFluidHandlerItem)>
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

constructor(arg0: $FluidTankBlock$$Type, arg1: $Item$Properties$$Type, arg2: integer)

public "getCapacity"(): integer
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlockItem$$Type = ($FluidTankBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankBlockItem_ = $FluidTankBlockItem$$Type;
}}
declare module "com.enderio.base.api.io.IOConfigurable" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IOMode, $IOMode$$Type} from "com.enderio.base.api.io.IOMode"

export interface $IOConfigurable {

 "getNextIOMode"(arg0: $Direction$$Type): $IOMode
 "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
 "cycleIOMode"(arg0: $Direction$$Type): void
 "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
 "getIOMode"(arg0: $Direction$$Type): $IOMode
 "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
 "isIOConfigMutable"(): boolean
 "shouldRenderIOConfigOverlay"(): boolean
get "iOConfigMutable"(): boolean
}

export namespace $IOConfigurable {
const probejs$$marker: never
}
export class $IOConfigurable$$Static implements $IOConfigurable {


 "getNextIOMode"(arg0: $Direction$$Type): $IOMode
 "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
 "cycleIOMode"(arg0: $Direction$$Type): void
 "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
 "getIOMode"(arg0: $Direction$$Type): $IOMode
 "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
 "isIOConfigMutable"(): boolean
 "shouldRenderIOConfigOverlay"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOConfigurable$$Type = ($IOConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOConfigurable_ = $IOConfigurable$$Type;
}}
declare module "com.enderio.base.common.filter.fluid.EnderFluidFilterItem$Type" {
import {$EnderFluidFilterMenu, $EnderFluidFilterMenu$$Type} from "com.enderio.base.common.filter.fluid.EnderFluidFilterMenu"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$AbstractFilterMenu$FilterAccess, $AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.base.common.filter.AbstractFilterMenu$FilterAccess"

export class $EnderFluidFilterItem$Type extends $Enum<($EnderFluidFilterItem$Type)> {
static readonly "BASIC": $EnderFluidFilterItem$Type


public "slotCount"(): integer
public static "values"(): ($EnderFluidFilterItem$Type)[]
public static "valueOf"(arg0: StringJS): $EnderFluidFilterItem$Type
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): $EnderFluidFilterMenu
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractFilterMenu$FilterAccess$$Type): $EnderFluidFilterMenu
public "rowCount"(): integer
public "canMatchComponents"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderFluidFilterItem$Type$$Type = (("basic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderFluidFilterItem$Type_ = $EnderFluidFilterItem$Type$$Type;
}}
declare module "com.enderio.base.common.paint.item.PaintedBlockItem" {
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

export class $PaintedBlockItem extends $BlockItem {
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
export type $PaintedBlockItem$$Type = ($PaintedBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedBlockItem_ = $PaintedBlockItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.travel_anchor.PaintedTravelAnchorBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TravelAnchorBlock, $TravelAnchorBlock$$Type} from "com.enderio.machines.common.blocks.travel_anchor.TravelAnchorBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$PaintedTravelAnchorBlockEntity, $PaintedTravelAnchorBlockEntity$$Type} from "com.enderio.machines.common.blocks.travel_anchor.PaintedTravelAnchorBlockEntity"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PaintedTravelAnchorBlock extends $TravelAnchorBlock<($PaintedTravelAnchorBlockEntity)> implements $PaintedBlock {
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

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedTravelAnchorBlock$$Type = ($PaintedTravelAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedTravelAnchorBlock_ = $PaintedTravelAnchorBlock$$Type;
}}
declare module "com.enderio.machines.common.blocks.block_detector.BlockDetectorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$DirectionalBlock, $DirectionalBlock$$Type} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockDetectorBlock extends $DirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockDetectorBlock)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDetectorBlock$$Type = ($BlockDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDetectorBlock_ = $BlockDetectorBlock$$Type;
}}
declare module "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$BonusType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $SagMillingRecipe$BonusType extends $Enum<($SagMillingRecipe$BonusType)> implements $StringRepresentable {
static readonly "CODEC": $Codec<($SagMillingRecipe$BonusType)>
static readonly "MULTIPLY_OUTPUT": $SagMillingRecipe$BonusType
static readonly "BY_ID": $IntFunction<($SagMillingRecipe$BonusType)>
static readonly "CHANCE_ONLY": $SagMillingRecipe$BonusType
static readonly "NONE": $SagMillingRecipe$BonusType
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SagMillingRecipe$BonusType)>


public static "values"(): ($SagMillingRecipe$BonusType)[]
public static "valueOf"(arg0: StringJS): $SagMillingRecipe$BonusType
public "doChance"(): boolean
public "canMultiply"(): boolean
public "useGrindingBall"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$BonusType$$Type = (("none") | ("multiply_output") | ("chance_only"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$BonusType_ = $SagMillingRecipe$BonusType$$Type;
}}
declare module "com.enderio.base.api.filter.FluidFilter" {
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $FluidFilter {

 "test"(arg0: $IFluidHandler$$Type, arg1: $FluidStack$$Type): $FluidStack

(arg0: $IFluidHandler, arg1: $FluidStack): $FluidStack$$Type
}

export namespace $FluidFilter {
const probejs$$marker: never
}
export class $FluidFilter$$Static implements $FluidFilter {


 "test"(arg0: $IFluidHandler$$Type, arg1: $FluidStack$$Type): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilter$$Type = ((arg0: $IFluidHandler, arg1: $FluidStack) => $FluidStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFilter_ = $FluidFilter$$Type;
}}
declare module "com.enderio.base.common.item.misc.LoreItem" {
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

export class $LoreItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: boolean, arg2: $Component$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoreItem$$Type = ($LoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoreItem_ = $LoreItem$$Type;
}}
declare module "com.enderio.base.common.blockentity.Wrenchable" {
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $Wrenchable {

 "onWrenched"(arg0: $UseOnContext$$Type): $ItemInteractionResult

(arg0: $UseOnContext): $ItemInteractionResult$$Type
}

export namespace $Wrenchable {
const probejs$$marker: never
}
export class $Wrenchable$$Static implements $Wrenchable {


 "onWrenched"(arg0: $UseOnContext$$Type): $ItemInteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrenchable$$Type = ((arg0: $UseOnContext) => $ItemInteractionResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrenchable_ = $Wrenchable$$Type;
}}
declare module "com.enderio.base.api.soul.Soul" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $Soul extends $Record {
static readonly "CODEC": $Codec<($Soul)>
static readonly "KEY_ID": StringJS
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($ByteBuf), ($Soul)>
static readonly "EMPTY": $Soul
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Soul)>

constructor(entityTag: $CompoundTag$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: $LivingEntity$$Type): $Soul
public static "of"(arg0: $ResourceLocation$$Type): $Soul
public static "of"(arg0: $EntityType$$Type<(any)>): $Soul
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($Soul)>
public "copy"(): $Soul
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $Soul
public "entityType"(): $EntityType<(any)>
public "hasEntity"(): boolean
public "getEntityTag"(): $CompoundTag
public "entityTag"(): $CompoundTag
public "entityTypeId"(): $ResourceLocation
public "copyOnlyType"(): $Soul
public static "isSameEntity"(arg0: $Soul$$Type, arg1: $LivingEntity$$Type): boolean
public static "isSameEntity"(arg0: $Soul$$Type, arg1: $Soul$$Type): boolean
public static "isSameEntity"(arg0: $Soul$$Type, arg1: $EntityType$$Type<(any)>): boolean
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "isSameEntitySameTag"(arg0: $Soul$$Type, arg1: $LivingEntity$$Type, arg2: $HolderLookup$Provider$$Type): boolean
public static "isSameEntitySameTag"(arg0: $Soul$$Type, arg1: $Soul$$Type): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Soul$$Type = ({"entityTag"?: $CompoundTag$$Type}) | ([entityTag?: $CompoundTag$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Soul_ = $Soul$$Type;
}}
declare module "com.enderio.base.common.item.tool.ColdFireIgniter" {
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
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$CreativeTabVariants, $CreativeTabVariants$$Type} from "com.enderio.core.common.item.CreativeTabVariants"

export class $ColdFireIgniter extends $Item implements $CreativeTabVariants {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IFluidHandlerItem)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColdFireIgniter$$Type = ($ColdFireIgniter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColdFireIgniter_ = $ColdFireIgniter$$Type;
}}
declare module "com.enderio.machines.common.io.IOConfig" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$NetworkDataSlot$CodecType, $NetworkDataSlot$CodecType$$Type} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IOMode, $IOMode$$Type} from "com.enderio.base.api.io.IOMode"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $IOConfig extends $Record {
static readonly "CODEC": $Codec<($IOConfig)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($IOConfig)>
static readonly "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($IOConfig)>

constructor(modes: $Map$$Type<($Direction$$Type), ($IOMode$$Type)>)

public "modes"(): $Map<($Direction), ($IOMode)>
public "getMode"(arg0: $Direction$$Type): $IOMode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "copyOf"(arg0: $IOConfig$$Type): $IOConfig
public static "of"(arg0: $Function$$Type<($Direction), ($IOMode$$Type)>): $IOConfig
public static "of"(arg0: $IOMode$$Type): $IOConfig
public static "empty"(): $IOConfig
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($IOConfig)>
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $IOConfig
public "withMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOConfig$$Type = ({"modes"?: $Map$$Type<($Direction$$Type), ($IOMode$$Type)>}) | ([modes?: $Map$$Type<($Direction$$Type), ($IOMode$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOConfig_ = $IOConfig$$Type;
}}
declare module "com.enderio.machines.common.item.CapacitorBankItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$CapacitorBankBlock, $CapacitorBankBlock$$Type} from "com.enderio.machines.common.block.CapacitorBankBlock"

export class $CapacitorBankItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CapacitorBankBlock$$Type, arg1: $Item$Properties$$Type)

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
export type $CapacitorBankItem$$Type = ($CapacitorBankItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacitorBankItem_ = $CapacitorBankItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout" {
import {$MachineInventoryLayout$Builder, $MachineInventoryLayout$Builder$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout$Builder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $MachineInventoryLayout {


public static "builder"(): $MachineInventoryLayout$Builder
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "guiCanInsert"(arg0: integer): boolean
public "guiCanExtract"(arg0: integer): boolean
public "canInsert"(arg0: integer): boolean
public "getSlotCount"(): integer
public "getStackLimit"(arg0: integer): integer
public "canExtract"(arg0: integer): boolean
public "supportsCapacitor"(): boolean
public "getCapacitorSlot"(): integer
get "slotCount"(): integer
get "capacitorSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryLayout$$Type = ($MachineInventoryLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInventoryLayout_ = $MachineInventoryLayout$$Type;
}}
declare module "com.enderio.machines.common.blocks.vat.VatBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ProgressMachineBlock, $ProgressMachineBlock$$Type} from "com.enderio.machines.common.blocks.base.block.ProgressMachineBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VatBlockEntity, $VatBlockEntity$$Type} from "com.enderio.machines.common.blocks.vat.VatBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$RegiliteBlockEntity, $RegiliteBlockEntity$$Type} from "com.enderio.regilite.holder.RegiliteBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VatBlock extends $ProgressMachineBlock<($VatBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $RegiliteBlockEntity$$Type<($VatBlockEntity$$Type)>, arg1: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatBlock$$Type = ($VatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VatBlock_ = $VatBlock$$Type;
}}
declare module "com.enderio.conduits.api.bundle.AddConduitResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AddConduitResult {

 "hasChanged"(): boolean
}

export namespace $AddConduitResult {
const probejs$$marker: never
}
export class $AddConduitResult$$Static implements $AddConduitResult {


 "hasChanged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddConduitResult$$Type = ($AddConduitResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddConduitResult_ = $AddConduitResult$$Type;
}}
declare module "com.enderio.base.api.filter.SoulFilter" {
import {$Soul, $Soul$$Type} from "com.enderio.base.api.soul.Soul"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $SoulFilter {

 "test"(arg0: $LivingEntity$$Type): boolean
 "test"(arg0: $Soul$$Type): boolean
 "test"(arg0: $EntityType$$Type<(any)>): boolean
}

export namespace $SoulFilter {
const probejs$$marker: never
}
export class $SoulFilter$$Static implements $SoulFilter {


 "test"(arg0: $LivingEntity$$Type): boolean
 "test"(arg0: $Soul$$Type): boolean
 "test"(arg0: $EntityType$$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulFilter$$Type = ($SoulFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulFilter_ = $SoulFilter$$Type;
}}
declare module "com.enderio.base.common.item.tool.TravelStaffItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$CreativeTabVariants, $CreativeTabVariants$$Type} from "com.enderio.core.common.item.CreativeTabVariants"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $TravelStaffItem extends $Item implements $AdvancedTooltipProvider, $CreativeTabVariants {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "performAction"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public static "getMaxEnergy"(): integer
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelStaffItem$$Type = ($TravelStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelStaffItem_ = $TravelStaffItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.wireless_charger.WirelessAntennaBlock" {
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

export class $WirelessAntennaBlock extends $Block {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessAntennaBlock$$Type = ($WirelessAntennaBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessAntennaBlock_ = $WirelessAntennaBlock$$Type;
}}
declare module "com.enderio.conduits.api.facade.FacadeType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $FacadeType extends $Enum<($FacadeType)> implements $StringRepresentable {
static readonly "TRANSPARENT_HARDENED": $FacadeType
static readonly "CODEC": $Codec<($FacadeType)>
static readonly "HARDENED": $FacadeType
static readonly "BY_ID": $IntFunction<($FacadeType)>
static readonly "TRANSPARENT": $FacadeType
static readonly "BASIC": $FacadeType
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($FacadeType)>


public static "values"(): ($FacadeType)[]
public static "valueOf"(arg0: StringJS): $FacadeType
public "isBlastResistant"(): boolean
public "getSerializedName"(): StringJS
public "doesHideConduits"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "blastResistant"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadeType$$Type = (("basic") | ("hardened") | ("transparent") | ("transparent_hardened"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacadeType_ = $FacadeType$$Type;
}}
declare module "com.enderio.armory.api.capability.IDarkSteelUpgrade" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IUpgradeTier, $IUpgradeTier$$Type} from "com.enderio.armory.api.capability.IUpgradeTier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IDarkSteelUpgrade {

 "getDisplayName"(): $Component
 "getDescription"(): $Collection<($Component)>
 "getSlot"(): StringJS
 "getName"(): StringJS
 "deserializeNBT"(arg0: $Tag$$Type): void
 "serializeNBT"(): $CompoundTag
 "getNextTier"(): $Optional<($IDarkSteelUpgrade)>
 "onAddedToItem"(arg0: $ItemStack$$Type): void
 "isBaseTier"(): boolean
 "isValidUpgrade"(arg0: $IDarkSteelUpgrade$$Type): boolean
 "getTier"(): $Optional<($IUpgradeTier)>
 "onRemovedFromItem"(arg0: $ItemStack$$Type): void
get "displayName"(): $Component
get "description"(): $Collection<($Component)>
get "slot"(): StringJS
get "name"(): StringJS
get "nextTier"(): $Optional<($IDarkSteelUpgrade)>
get "baseTier"(): boolean
get "tier"(): $Optional<($IUpgradeTier)>
}

export namespace $IDarkSteelUpgrade {
const probejs$$marker: never
}
export class $IDarkSteelUpgrade$$Static implements $IDarkSteelUpgrade {


 "getDisplayName"(): $Component
 "getDescription"(): $Collection<($Component)>
 "getSlot"(): StringJS
 "getName"(): StringJS
 "deserializeNBT"(arg0: $Tag$$Type): void
 "serializeNBT"(): $CompoundTag
 "getNextTier"(): $Optional<($IDarkSteelUpgrade)>
 "onAddedToItem"(arg0: $ItemStack$$Type): void
 "isBaseTier"(): boolean
 "isValidUpgrade"(arg0: $IDarkSteelUpgrade$$Type): boolean
 "getTier"(): $Optional<($IUpgradeTier)>
 "onRemovedFromItem"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDarkSteelUpgrade$$Type = ($IDarkSteelUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDarkSteelUpgrade_ = $IDarkSteelUpgrade$$Type;
}}
declare module "com.enderio.machines.common.io.fluid.MachineFluidHandler" {
import {$IOConfigurable, $IOConfigurable$$Type} from "com.enderio.base.api.io.IOConfigurable"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MachineFluidTank, $MachineFluidTank$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidTank"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineTankLayout, $MachineTankLayout$$Type} from "com.enderio.machines.common.io.fluid.MachineTankLayout"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"

export class $MachineFluidHandler implements $IFluidHandler, $INBTSerializable<($CompoundTag)> {
static readonly "TANK_INDEX": StringJS
static readonly "TANK_CONTENTS": StringJS

constructor(arg0: $IOConfigurable$$Type, arg1: $MachineTankLayout$$Type)

public "drain"(arg0: integer, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "fill"(arg0: integer, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): integer
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getConfig"(): $IOConfigurable
public "getLayout"(): $MachineTankLayout
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type): void
/**
 * 
 * @deprecated
 */
public "getTank"(arg0: integer): $MachineFluidTank
public "canInsert"(arg0: integer): boolean
public "getForSide"(arg0: $Direction$$Type): $IFluidHandler
public "canExtract"(arg0: integer): boolean
public "addSlotChangedCallback"(arg0: $IntConsumer$$Type): void
public "getTankCapacity"(arg0: integer): integer
get "config"(): $IOConfigurable
get "layout"(): $MachineTankLayout
get "tanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFluidHandler$$Type = ($MachineFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineFluidHandler_ = $MachineFluidHandler$$Type;
}}
declare module "com.enderio.conduits.common.redstone.RedstoneInsertFilter" {
import {$RedstoneConduitNetworkContext, $RedstoneConduitNetworkContext$$Type} from "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduitNetworkContext"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export interface $RedstoneInsertFilter {

 "getOutputSignal"(arg0: $RedstoneConduitNetworkContext$$Type, arg1: $DyeColor$$Type): integer

(arg0: $RedstoneConduitNetworkContext, arg1: $DyeColor): integer
}

export namespace $RedstoneInsertFilter {
const probejs$$marker: never
}
export class $RedstoneInsertFilter$$Static implements $RedstoneInsertFilter {


 "getOutputSignal"(arg0: $RedstoneConduitNetworkContext$$Type, arg1: $DyeColor$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneInsertFilter$$Type = ((arg0: $RedstoneConduitNetworkContext, arg1: $DyeColor) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneInsertFilter_ = $RedstoneInsertFilter$$Type;
}}
declare module "com.enderio.base.common.item.tool.PoweredToggledItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CreativeTabVariants, $CreativeTabVariants$$Type} from "com.enderio.core.common.item.CreativeTabVariants"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $PoweredToggledItem extends $Item implements $AdvancedTooltipProvider, $CreativeTabVariants {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public static "getCharged"(arg0: $PoweredToggledItem$$Type): $ItemStack
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredToggledItem$$Type = ($PoweredToggledItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredToggledItem_ = $PoweredToggledItem$$Type;
}}
declare module "com.enderio.conduits.common.conduit.ConduitBlockItem" {
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
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
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $ConduitBlockItem extends $BlockItem {
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

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "getName"(arg0: $ItemStack$$Type): $Component
public static "getStackFor"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: integer): $ItemStack
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(): StringJS
public static "addToCreativeTabs"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
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
export type $ConduitBlockItem$$Type = ($ConduitBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBlockItem_ = $ConduitBlockItem$$Type;
}}
declare module "com.enderio.machines.common.travel.AnchorTravelTarget$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$TravelTargetSerializer, $TravelTargetSerializer$$Type} from "com.enderio.base.api.travel.TravelTargetSerializer"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$AnchorTravelTarget, $AnchorTravelTarget$$Type} from "com.enderio.machines.common.travel.AnchorTravelTarget"

export class $AnchorTravelTarget$Serializer implements $TravelTargetSerializer<($AnchorTravelTarget)> {
static readonly "CODEC": $MapCodec<($AnchorTravelTarget)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AnchorTravelTarget)>

constructor()

public "codec"(): $MapCodec<($AnchorTravelTarget)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AnchorTravelTarget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnchorTravelTarget$Serializer$$Type = ($AnchorTravelTarget$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnchorTravelTarget$Serializer_ = $AnchorTravelTarget$Serializer$$Type;
}}
declare module "com.enderio.machines.common.travel.EnderfaceTravelTarget" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TravelTargetSerializer, $TravelTargetSerializer$$Type} from "com.enderio.base.api.travel.TravelTargetSerializer"
import {$NetworkDataSlot$CodecType, $NetworkDataSlot$CodecType$$Type} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TravelTargetType, $TravelTargetType$$Type} from "com.enderio.base.api.travel.TravelTargetType"
import {$TravelTarget, $TravelTarget$$Type} from "com.enderio.base.api.travel.TravelTarget"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnderfaceTravelTarget extends $Record implements $TravelTarget {
static "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($EnderfaceTravelTarget)>

constructor(pos: $BlockPos$$Type)

public "pos"(): $BlockPos
public "type"(): $TravelTargetType<(any)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "canInteract"(): boolean
public "interact"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
public "serializer"(): $TravelTargetSerializer<(any)>
public "canTravelTo"(): boolean
public "canJumpTo"(): boolean
public "canTeleportTo"(): boolean
public "item2BlockRange"(): integer
public "block2BlockRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderfaceTravelTarget$$Type = ({"pos"?: $BlockPos$$Type}) | ([pos?: $BlockPos$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderfaceTravelTarget_ = $EnderfaceTravelTarget$$Type;
}}
declare module "com.enderio.base.api.filter.ItemFilter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $ItemFilter {

 "test"(arg0: $IItemHandler$$Type, arg1: $ItemStack$$Type): $ItemStack

(arg0: $IItemHandler, arg1: $ItemStack): $ItemStack$$Type
}

export namespace $ItemFilter {
const probejs$$marker: never
}
export class $ItemFilter$$Static implements $ItemFilter {


 "test"(arg0: $IItemHandler$$Type, arg1: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$$Type = ((arg0: $IItemHandler, arg1: $ItemStack) => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$$Type;
}}
declare module "com.enderio.core.common.recipes.WrappedShapedRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$WrappedShapedRecipe, $WrappedShapedRecipe$$Type} from "com.enderio.core.common.recipes.WrappedShapedRecipe"

export class $WrappedShapedRecipe$Serializer<T extends $WrappedShapedRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $Function$$Type<($ShapedRecipe), (T)>)

public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedShapedRecipe$Serializer$$Type<T> = ($WrappedShapedRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedShapedRecipe$Serializer_<T> = $WrappedShapedRecipe$Serializer$$Type<(T)>;
}}
declare module "com.enderio.machines.common.block.SolarPanelBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LegacyMachineBlock, $LegacyMachineBlock$$Type} from "com.enderio.machines.common.block.LegacyMachineBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LegacyMachineBlockEntity, $LegacyMachineBlockEntity$$Type} from "com.enderio.machines.common.blockentity.base.LegacyMachineBlockEntity"
import {$RegiliteBlockEntity, $RegiliteBlockEntity$$Type} from "com.enderio.regilite.holder.RegiliteBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ISolarPanelTier, $ISolarPanelTier$$Type} from "com.enderio.machines.common.blockentity.solar.ISolarPanelTier"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SolarPanelBlock extends $LegacyMachineBlock implements $AdvancedTooltipProvider {
static readonly "WEST": $BooleanProperty
static readonly "BLOCK_ENTITY_TYPE_CODEC": $Codec<($Supplier<($BlockEntityType<($LegacyMachineBlockEntity)>)>)>
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
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "NORTH_WEST": $BooleanProperty
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NORTH_EAST": $BooleanProperty
static readonly "INSTANT": float
static readonly "SOUTH_EAST": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "SOUTH_WEST": $BooleanProperty
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $RegiliteBlockEntity$$Type<($LegacyMachineBlockEntity$$Type)>, arg1: $BlockBehaviour$Properties$$Type, arg2: $ISolarPanelTier$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolarPanelBlock$$Type = ($SolarPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolarPanelBlock_ = $SolarPanelBlock$$Type;
}}
declare module "com.enderio.base.common.recipe.FireCraftingRecipe$Result" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FireCraftingResultMixin, $FireCraftingResultMixin$$Type} from "com.almostreliable.kubeio.mixin.FireCraftingResultMixin"
import {$FireCraftingResult, $FireCraftingResult$$Type} from "com.almostreliable.kubeio.binding.FireCraftingResult"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FireCraftingRecipe$Result extends $Record implements $FireCraftingResult, $FireCraftingResultMixin {
static readonly "CODEC": $Codec<($FireCraftingRecipe$Result)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FireCraftingRecipe$Result)>

constructor(result: $ItemStack$$Type, minCount: integer, maxCount: integer, chance: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "result"(): $ItemStack
public "chance"(): float
public "maxCount"(): integer
public "minCount"(): integer
public static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: float): $FireCraftingRecipe$Result
public static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): $FireCraftingRecipe$Result
public static "of"(arg0: $ItemStack$$Type, arg1: integer): $FireCraftingRecipe$Result
public static "of"(arg0: $ItemStack$$Type): $FireCraftingRecipe$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingRecipe$Result$$Type = ({"maxCount"?: integer, "chance"?: float, "result"?: $ItemStack$$Type, "minCount"?: integer}) | ([maxCount?: integer, chance?: float, result?: $ItemStack$$Type, minCount?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireCraftingRecipe$Result_ = $FireCraftingRecipe$Result$$Type;
}}
declare module "com.enderio.conduits.api.connection.config.RedstoneSensitiveConnectionConfig" {
import {$List, $List$$Type} from "java.util.List"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export interface $RedstoneSensitiveConnectionConfig {

 "getRedstoneSignalColors"(): $List<($DyeColor)>

(): $List$$Type<($DyeColor$$Type)>
get "redstoneSignalColors"(): $List<($DyeColor)>
}

export namespace $RedstoneSensitiveConnectionConfig {
const probejs$$marker: never
}
export class $RedstoneSensitiveConnectionConfig$$Static implements $RedstoneSensitiveConnectionConfig {


 "getRedstoneSignalColors"(): $List<($DyeColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneSensitiveConnectionConfig$$Type = (() => $List$$Type<($DyeColor$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneSensitiveConnectionConfig_ = $RedstoneSensitiveConnectionConfig$$Type;
}}
declare module "com.enderio.base.api.misc.RedstoneControl" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $RedstoneControl extends $Enum<($RedstoneControl)> implements $StringRepresentable {
static readonly "CODEC": $Codec<($RedstoneControl)>
static readonly "ALWAYS_ACTIVE": $RedstoneControl
static readonly "BY_ID": $IntFunction<($RedstoneControl)>
static readonly "NEVER_ACTIVE": $RedstoneControl
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RedstoneControl)>
static readonly "ACTIVE_WITH_SIGNAL": $RedstoneControl
static readonly "ACTIVE_WITHOUT_SIGNAL": $RedstoneControl


public "isActive"(arg0: boolean): boolean
public static "values"(): ($RedstoneControl)[]
public static "valueOf"(arg0: StringJS): $RedstoneControl
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $RedstoneControl
public "isRedstoneSensitive"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "redstoneSensitive"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneControl$$Type = (("always_active") | ("active_with_signal") | ("active_without_signal") | ("never_active"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneControl_ = $RedstoneControl$$Type;
}}
declare module "com.enderio.conduits.common.conduit.menu.ConduitMenu$ConnectionAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List, $List$$Type} from "java.util.List"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $ConduitMenu$ConnectionAccessor {

 "stillValid"(arg0: $Player$$Type): boolean
 "canOpenScreen"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): boolean
 "getAllOpenableConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(any), (any)>)>)>
 "getConduitExtraGuiData"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $CompoundTag
 "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionConfig
 "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
}

export namespace $ConduitMenu$ConnectionAccessor {
const probejs$$marker: never
}
export class $ConduitMenu$ConnectionAccessor$$Static implements $ConduitMenu$ConnectionAccessor {


 "stillValid"(arg0: $Player$$Type): boolean
 "canOpenScreen"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): boolean
 "getAllOpenableConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(any), (any)>)>)>
 "getConduitExtraGuiData"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $CompoundTag
 "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionConfig
 "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitMenu$ConnectionAccessor$$Type = ($ConduitMenu$ConnectionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitMenu$ConnectionAccessor_ = $ConduitMenu$ConnectionAccessor$$Type;
}}
declare module "com.enderio.conduits.api.network.node.legacy.ConduitDataType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ConduitData, $ConduitData$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitData"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

/**
 * 
 * @deprecated
 */
export class $ConduitDataType<T extends $ConduitData<(T)>> extends $Record {

constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, factory: $Supplier$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitDataType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitDataTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitDataType$$Type<T> = (Special.EnderioConduitDataType) | ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, "codec"?: $MapCodec$$Type<(any)>, "factory"?: $Supplier$$Type<(any)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, codec?: $MapCodec$$Type<(any)>, factory?: $Supplier$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitDataType_<T> = $ConduitDataType$$Type<(T)>;
}}
declare module "com.enderio.conduits.api.network.node.NodeData" {
import {$NodeDataType, $NodeDataType$$Type} from "com.enderio.conduits.api.network.node.NodeDataType"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export interface $NodeData {

 "type"(): $NodeDataType<(any)>

(): $NodeDataType$$Type<(any)>
}

export namespace $NodeData {
const GENERIC_CODEC: $Codec<($NodeData)>
const probejs$$marker: never
}
export class $NodeData$$Static implements $NodeData {
static readonly "GENERIC_CODEC": $Codec<($NodeData)>


 "type"(): $NodeDataType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeData$$Type = (() => $NodeDataType$$Type<(any)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeData_ = $NodeData$$Type;
}}
declare module "com.enderio.base.common.filter.soul.EnderSoulFilter" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Soul, $Soul$$Type} from "com.enderio.base.api.soul.Soul"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$SoulFilter, $SoulFilter$$Type} from "com.enderio.base.api.filter.SoulFilter"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EnderSoulFilter extends $Record implements $SoulFilter {
static readonly "CODEC": $Codec<($EnderSoulFilter)>
static readonly "EMPTY": $EnderSoulFilter
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnderSoulFilter)>

constructor(matches: $NonNullList$$Type<($Soul$$Type)>, isDenyList: boolean, shouldCompareTags: boolean)
constructor(arg0: $List$$Type<($Soul$$Type)>, arg1: boolean, arg2: boolean)
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $EntityType$$Type<(any)>): boolean
public "test"(arg0: $LivingEntity$$Type): boolean
public "test"(arg0: $Soul$$Type): boolean
public "matches"(): $NonNullList<($Soul)>
public "isDenyList"(): boolean
public "shouldCompareTags"(): boolean
get "denyList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSoulFilter$$Type = ({"shouldCompareTags"?: boolean, "isDenyList"?: boolean, "matches"?: $NonNullList$$Type<($Soul$$Type)>}) | ([shouldCompareTags?: boolean, isDenyList?: boolean, matches?: $NonNullList$$Type<($Soul$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSoulFilter_ = $EnderSoulFilter$$Type;
}}
declare module "com.enderio.conduits.common.conduit.legacy.ConduitDataContainer" {
import {$ConduitDataType, $ConduitDataType$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataType"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConduitDataAccessor, $ConduitDataAccessor$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataAccessor"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ConduitData, $ConduitData$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

/**
 * 
 * @deprecated
 */
export class $ConduitDataContainer implements $ConduitDataAccessor {
static readonly "CODEC": $Codec<($ConduitDataContainer)>

constructor()
constructor(arg0: $ConduitData$$Type<(any)>)

public "getData"(): $ConduitData<(any)>
public "getData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
public "hashCode"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $ConduitDataContainer
public "hasData"(): boolean
public "hasData"(arg0: $ConduitDataType$$Type<(any)>): boolean
public "deepCopy"(): $ConduitDataContainer
public "getOrCreateData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
get "data"(): $ConduitData<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitDataContainer$$Type = ($ConduitDataContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitDataContainer_ = $ConduitDataContainer$$Type;
}}
declare module "com.enderio.base.common.block.EIOEntityBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$EIOBlockEntity, $EIOBlockEntity$$Type} from "com.enderio.base.common.block.EIOBlockEntity"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EIOEntityBlock<T extends $EIOBlockEntity> extends $BaseEntityBlock {
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


public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOEntityBlock$$Type<T> = ($EIOEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EIOEntityBlock_<T> = $EIOEntityBlock$$Type<(T)>;
}}
declare module "com.enderio.machines.common.blocks.soul_binder.SoulBindingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidRecipeInput, $FluidRecipeInput$$Type} from "com.enderio.base.common.recipe.FluidRecipeInput"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SoulBindingRecipe$Input extends $Record implements $FluidRecipeInput {

constructor(boundSoulItem: $ItemStack$$Type, itemToBind: $ItemStack$$Type, experience: $FluidStack$$Type)

public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "experience"(): $FluidStack
public "getFluid"(arg0: integer): $FluidStack
public "itemToBind"(): $ItemStack
public "boundSoulItem"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$Input$$Type = ({"boundSoulItem"?: $ItemStack$$Type, "experience"?: $FluidStack$$Type, "itemToBind"?: $ItemStack$$Type}) | ([boundSoulItem?: $ItemStack$$Type, experience?: $FluidStack$$Type, itemToBind?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulBindingRecipe$Input_ = $SoulBindingRecipe$Input$$Type;
}}
declare module "com.enderio.machines.common.blockentity.base.LegacyMachineBlockEntity" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$SideConfig, $SideConfig$$Type} from "com.enderio.base.api.capability.SideConfig"
import {$IOConfig, $IOConfig$$Type} from "com.enderio.machines.common.io.IOConfig"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MachineInventory, $MachineInventory$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventory"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IOConfigurable, $IOConfigurable$$Type} from "com.enderio.base.api.io.IOConfigurable"
import {$MachineInventoryLayout, $MachineInventoryLayout$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$NetworkDataSlot$CodecType, $NetworkDataSlot$CodecType$$Type} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Wrenchable, $Wrenchable$$Type} from "com.enderio.base.common.blockentity.Wrenchable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnderBlockEntity, $EnderBlockEntity$$Type} from "com.enderio.core.common.blockentity.EnderBlockEntity"
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$MachineInventoryHolder, $MachineInventoryHolder$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineInventoryHolder"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MachineState, $MachineState$$Type} from "com.enderio.machines.common.blocks.base.state.MachineState"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$IOMode, $IOMode$$Type} from "com.enderio.base.api.io.IOMode"

/**
 * 
 * @deprecated
 */
export class $LegacyMachineBlockEntity extends $EnderBlockEntity implements $MenuProvider, $Wrenchable, $IOConfigurable, $MachineInventoryHolder {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($LegacyMachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "REDSTONE_CONTROL_DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($RedstoneControl)>
static readonly "DATA": StringJS
static readonly "IO_CONFIG_PROPERTY": $ModelProperty<($IOConfigurable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($LegacyMachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getDisplayName"(): $Component
public "canAct"(): boolean
public "onLoad"(): void
public "serverTick"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getModelData"(): $ModelData
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInventory"(): $MachineInventory
public "onWrenched"(arg0: $UseOnContext$$Type): $ItemInteractionResult
public "canOpenMenu"(): boolean
public "canActSlow"(): boolean
public "hasInventory"(): boolean
public "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
public "getIOMode"(arg0: $Direction$$Type): $IOMode
public "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
public "getInventoryLayout"(): $MachineInventoryLayout
public "getDefaultIOConfig"(): $IOConfig
public "isRedstoneBlocked"(): boolean
public "isIOConfigMutable"(): boolean
public "getMachineStates"(): $Set<($MachineState)>
public "getRedstoneControl"(): $RedstoneControl
public "setRedstoneControl"(arg0: $RedstoneControl$$Type): void
public "updateMachineState"(arg0: $MachineState$$Type, arg1: boolean): void
public "createInventoryLayout"(): $MachineInventoryLayout
public "onBlockEntityUsed"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "getLightEmission"(): integer
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "supportsRedstoneControl"(): boolean
public "shouldRenderIOConfigOverlay"(): boolean
public "getNextIOMode"(arg0: $Direction$$Type): $IOMode
public "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
public "cycleIOMode"(arg0: $Direction$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "displayName"(): $Component
get "modelData"(): $ModelData
get "inventory"(): $MachineInventory
get "inventoryLayout"(): $MachineInventoryLayout
get "defaultIOConfig"(): $IOConfig
get "redstoneBlocked"(): boolean
get "iOConfigMutable"(): boolean
get "machineStates"(): $Set<($MachineState)>
get "redstoneControl"(): $RedstoneControl
set "redstoneControl"(value: $RedstoneControl$$Type)
get "lightEmission"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LegacyMachineBlockEntity$$Type = ($LegacyMachineBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LegacyMachineBlockEntity_ = $LegacyMachineBlockEntity$$Type;
}}
declare module "com.enderio.machines.common.blocks.vat.FermentingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$MachineFluidTank, $MachineFluidTank$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidTank"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FermentingRecipe$Input extends $Record implements $RecipeInput {

constructor(leftReagent: $ItemStack$$Type, rightStack: $ItemStack$$Type, inputTank: $MachineFluidTank$$Type)

public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "leftReagent"(): $ItemStack
public "getInputTank"(): $MachineFluidTank
public "inputTank"(): $MachineFluidTank
public "rightStack"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentingRecipe$Input$$Type = ({"inputTank"?: $MachineFluidTank$$Type, "rightStack"?: $ItemStack$$Type, "leftReagent"?: $ItemStack$$Type}) | ([inputTank?: $MachineFluidTank$$Type, rightStack?: $ItemStack$$Type, leftReagent?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FermentingRecipe$Input_ = $FermentingRecipe$Input$$Type;
}}
declare module "com.enderio.conduits.api.network.IConduitNetwork" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConduitNetworkContext, $ConduitNetworkContext$$Type} from "com.enderio.conduits.api.network.ConduitNetworkContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConduitNetworkContextType, $ConduitNetworkContextType$$Type} from "com.enderio.conduits.api.network.ConduitNetworkContextType"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.conduits.api.network.ConduitBlockConnection"

export interface $IConduitNetwork {

 "nodes"(): $Set<($IConduitNode)>
 "isEmpty"(): boolean
 "contains"(arg0: $IConduitNode$$Type): boolean
 "getContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "neighbors"(arg0: $IConduitNode$$Type): $Set<($IConduitNode)>
 "hasContext"(arg0: $ConduitNetworkContextType$$Type<(any)>): boolean
 "nodeCount"(): integer
 "tickingNodes"(): $Collection<($IConduitNode)>
 "blockEndpoints"(): $Collection<($IConduitNode)>
 "allChannels"(): $Set<($DyeColor)>
 "blockConnections"(): $Collection<($ConduitBlockConnection)>
 "insertConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
 "insertConnections"(): $List<($ConduitBlockConnection)>
 "extractConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
 "extractConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
 "extractConnections"(): $List<($ConduitBlockConnection)>
 "insertConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
 "getOrCreateContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "blockConnectionsAccessibleFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
get "empty"(): boolean
}

export namespace $IConduitNetwork {
const probejs$$marker: never
}
export class $IConduitNetwork$$Static implements $IConduitNetwork {


 "nodes"(): $Set<($IConduitNode)>
 "isEmpty"(): boolean
 "contains"(arg0: $IConduitNode$$Type): boolean
 "getContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "neighbors"(arg0: $IConduitNode$$Type): $Set<($IConduitNode)>
 "hasContext"(arg0: $ConduitNetworkContextType$$Type<(any)>): boolean
 "nodeCount"(): integer
 "tickingNodes"(): $Collection<($IConduitNode)>
 "blockEndpoints"(): $Collection<($IConduitNode)>
 "allChannels"(): $Set<($DyeColor)>
 "blockConnections"(): $Collection<($ConduitBlockConnection)>
 "insertConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
 "insertConnections"(): $List<($ConduitBlockConnection)>
 "extractConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
 "extractConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
 "extractConnections"(): $List<($ConduitBlockConnection)>
 "insertConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
 "getOrCreateContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "blockConnectionsAccessibleFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConduitNetwork$$Type = ($IConduitNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConduitNetwork_ = $IConduitNetwork$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.upgrades.empowered.EmpoweredUpgrade" {
import {$TieredUpgrade, $TieredUpgrade$$Type} from "com.enderio.armory.common.item.darksteel.upgrades.TieredUpgrade"
import {$EmpoweredUpgradeTier, $EmpoweredUpgradeTier$$Type} from "com.enderio.armory.common.item.darksteel.upgrades.empowered.EmpoweredUpgradeTier"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $EmpoweredUpgrade extends $TieredUpgrade<($EmpoweredUpgradeTier)> {
static readonly "TIER_KEY": StringJS
static readonly "NAME": StringJS

constructor(arg0: $EmpoweredUpgradeTier$$Type)
constructor()

public "getDescription"(): $Collection<($Component)>
public "getLevel"(): integer
public "adjustDamage"(arg0: integer, arg1: integer, arg2: $ItemStack$$Type): integer
public "getMaxEnergyStored"(): integer
public "getAttackSpeedIncrease"(): double
public "getMobHeadChance"(): double
public static "getAdjustedDamage"(arg0: $ItemStack$$Type, arg1: integer): integer
public "adjustDestroySpeed"(arg0: float, arg1: $ItemStack$$Type): float
public "getMaxEnergyTransfer"(): integer
public "getAttackDamageIncrease"(): integer
get "description"(): $Collection<($Component)>
get "level"(): integer
get "maxEnergyStored"(): integer
get "attackSpeedIncrease"(): double
get "mobHeadChance"(): double
get "maxEnergyTransfer"(): integer
get "attackDamageIncrease"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmpoweredUpgrade$$Type = ($EmpoweredUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmpoweredUpgrade_ = $EmpoweredUpgrade$$Type;
}}
declare module "com.enderio.machines.common.blocks.painting.PaintingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineRecipe, $MachineRecipe$$Type} from "com.enderio.machines.common.blocks.base.MachineRecipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$PaintingRecipe$Input, $PaintingRecipe$Input$$Type} from "com.enderio.machines.common.blocks.painting.PaintingRecipe$Input"
import {$OutputStack, $OutputStack$$Type} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $PaintingRecipe extends $Record implements $MachineRecipe<($PaintingRecipe$Input)> {

constructor(input: $Ingredient$$Type, output: $ItemStack$$Type)

public "input"(): $Ingredient
public "output"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $PaintingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "craft"(arg0: $PaintingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $PaintingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "isSpecial"(): boolean
public "getEnergyCost"(arg0: $PaintingRecipe$Input$$Type): integer
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $PaintingRecipe$Input$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingRecipe$$Type = ({"output"?: $ItemStack$$Type, "input"?: $Ingredient$$Type}) | ([output?: $ItemStack$$Type, input?: $Ingredient$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingRecipe_ = $PaintingRecipe$$Type;
}}
declare module "com.enderio.machines.common.io.fluid.MachineFluidTank" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$IFluidTank, $IFluidTank$$Type} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MachineFluidHandler, $MachineFluidHandler$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidHandler"

export class $MachineFluidTank implements $IFluidTank {

constructor(arg0: integer, arg1: $MachineFluidHandler$$Type)

public "getCapacity"(): integer
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "getFluid"(): $FluidStack
public "isFluidValid"(arg0: $FluidStack$$Type): boolean
public "setFluid"(arg0: $FluidStack$$Type): void
public "getFluidAmount"(): integer
get "capacity"(): integer
get "empty"(): boolean
get "fluid"(): $FluidStack
set "fluid"(value: $FluidStack$$Type)
get "fluidAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFluidTank$$Type = ($MachineFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineFluidTank_ = $MachineFluidTank$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedBlock" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle, $ServerPlayer$RespawnPosAngle$$Type} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IBlockExtension, $IBlockExtension$$Type} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BubbleColumnDirection, $BubbleColumnDirection$$Type} from "net.neoforged.neoforge.common.enums.BubbleColumnDirection"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SignalGetter, $SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export interface $PaintedBlock extends $IBlockExtension {

 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
 "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
 "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(any)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "handler$fon000$passablefoliage$pfoliage_getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $CallbackInfoReturnable$$Type<(any)>): void
}

export namespace $PaintedBlock {
const DEFAULT_PAINT: $Block
const probejs$$marker: never
}
export class $PaintedBlock$$Static implements $PaintedBlock {
static readonly "DEFAULT_PAINT": $Block


 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
 "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
 "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(any)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "handler$fon000$passablefoliage$pfoliage_getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $CallbackInfoReturnable$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedBlock$$Type = ($PaintedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedBlock_ = $PaintedBlock$$Type;
}}
declare module "com.enderio.base.common.block.DarkSteelLadderBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$LadderBlock, $LadderBlock$$Type} from "net.minecraft.world.level.block.LadderBlock"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DarkSteelLadderBlock extends $LadderBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelLadderBlock$$Type = ($DarkSteelLadderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelLadderBlock_ = $DarkSteelLadderBlock$$Type;
}}
declare module "com.enderio.base.common.filter.AbstractFilterMenu" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$BaseEnderMenu, $BaseEnderMenu$$Type} from "com.enderio.core.common.menu.BaseEnderMenu"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ClickType, $ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $AbstractFilterMenu<T> extends $BaseEnderMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "BACK_BUTTON_ID": integer
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer


public "stillValid"(arg0: $Player$$Type): boolean
public "doClick"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFilterMenu$$Type<T> = ($AbstractFilterMenu<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFilterMenu_<T> = $AbstractFilterMenu$$Type<(T)>;
}}
declare module "com.enderio.machines.common.blocks.obelisks.weather.WeatherChangeRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WeatherChangeRecipe$Input extends $Record implements $RecipeInput {

constructor(fluid: $FluidStack$$Type)

public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "fluid"(): $FluidStack
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatherChangeRecipe$Input$$Type = ({"fluid"?: $FluidStack$$Type}) | ([fluid?: $FluidStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeatherChangeRecipe$Input_ = $WeatherChangeRecipe$Input$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.DarkSteelHelmetItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$DarkSteelArmor, $DarkSteelArmor$$Type} from "com.enderio.armory.common.item.darksteel.DarkSteelArmor"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $DarkSteelHelmetItem extends $DarkSteelArmor {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelHelmetItem$$Type = ($DarkSteelHelmetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelHelmetItem_ = $DarkSteelHelmetItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.block.MachineBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$EIOEntityBlock, $EIOEntityBlock$$Type} from "com.enderio.base.common.block.EIOEntityBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MachineBlock<T extends $MachineBlockEntity> extends $EIOEntityBlock<(T)> {
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

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineBlock$$Type<T> = ($MachineBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineBlock_<T> = $MachineBlock$$Type<(T)>;
}}
declare module "com.enderio.conduits.api.network.ConduitNetworkContextType" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ConduitNetworkContext, $ConduitNetworkContext$$Type} from "com.enderio.conduits.api.network.ConduitNetworkContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ConduitNetworkContextType<T extends $ConduitNetworkContext<(T)>> extends $Record {

constructor(codec: $MapCodec$$Type<(T)>, factory: $Supplier$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "codec"(): $MapCodec<(T)>
public "codecOrThrow"(): $MapCodec<(T)>
public "isPersistent"(): boolean
get "persistent"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitNetworkContextType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitNetworkContextTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNetworkContextType$$Type<T> = (Special.EnderioConduitNetworkContextType) | ({"codec"?: $MapCodec$$Type<(any)>, "factory"?: $Supplier$$Type<(any)>}) | ([codec?: $MapCodec$$Type<(any)>, factory?: $Supplier$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitNetworkContextType_<T> = $ConduitNetworkContextType$$Type<(T)>;
}}
declare module "com.enderio.armory.common.item.darksteel.DarkSteelLeggingsItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$DarkSteelArmor, $DarkSteelArmor$$Type} from "com.enderio.armory.common.item.darksteel.DarkSteelArmor"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $DarkSteelLeggingsItem extends $DarkSteelArmor {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelLeggingsItem$$Type = ($DarkSteelLeggingsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelLeggingsItem_ = $DarkSteelLeggingsItem$$Type;
}}
declare module "com.enderio.base.common.recipe.FireCraftingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$FireCraftingRecipe$Result, $FireCraftingRecipe$Result$$Type} from "com.enderio.base.common.recipe.FireCraftingRecipe$Result"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FireCraftingRecipe extends $Record implements $Recipe<($RecipeInput)> {

constructor(results: $List$$Type<($FireCraftingRecipe$Result$$Type)>, bases: $List$$Type<($Block$$Type)>, baseTags: $List$$Type<($TagKey$$Type<($Block$$Type)>)>, dimensions: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>, blockAfterBurning: $Optional$$Type<($Block$$Type)>)

public "results"(): $List<($FireCraftingRecipe$Result)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "dimensions"(): $List<($ResourceKey<($Level)>)>
public "getType"(): $RecipeType<(any)>
public "bases"(): $List<($Block)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "isBaseValid"(arg0: $Block$$Type): boolean
public "baseTags"(): $List<($TagKey<($Block)>)>
public "getSerializer"(): $RecipeSerializer<($FireCraftingRecipe)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isDimensionValid"(arg0: $ResourceKey$$Type<($Level)>): boolean
public "getAllBaseBlocks"(): $List<($Block)>
public "blockAfterBurning"(): $Optional<($Block)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<($FireCraftingRecipe)>
get "allBaseBlocks"(): $List<($Block)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingRecipe$$Type = ({"blockAfterBurning"?: ($Block$$Type)?, "dimensions"?: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>, "bases"?: $List$$Type<($Block$$Type)>, "baseTags"?: $List$$Type<($TagKey$$Type<($Block$$Type)>)>, "results"?: $List$$Type<($FireCraftingRecipe$Result$$Type)>}) | ([blockAfterBurning?: ($Block$$Type)?, dimensions?: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>, bases?: $List$$Type<($Block$$Type)>, baseTags?: $List$$Type<($TagKey$$Type<($Block$$Type)>)>, results?: $List$$Type<($FireCraftingRecipe$Result$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireCraftingRecipe_ = $FireCraftingRecipe$$Type;
}}
declare module "com.enderio.conduits.api.connection.config.ConnectionConfigType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ConnectionConfigType<T extends $ConnectionConfig> extends $Record {

constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, defaultSupplier: $Supplier$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getDefault"(): T
public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "defaultSupplier"(): $Supplier<(T)>
get "default"(): T
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitConnectionConfigType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitConnectionConfigTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionConfigType$$Type<T> = (Special.EnderioConduitConnectionConfigType) | ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, "defaultSupplier"?: $Supplier$$Type<(any)>, "codec"?: $MapCodec$$Type<(any)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, defaultSupplier?: $Supplier$$Type<(any)>, codec?: $MapCodec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionConfigType_<T> = $ConnectionConfigType$$Type<(T)>;
}}
declare module "com.enderio.core.common.network.menu.payload.SlotPayload" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SlotPayloadType, $SlotPayloadType$$Type} from "com.enderio.core.common.network.menu.payload.SlotPayloadType"

export interface $SlotPayload {

 "type"(): $SlotPayloadType

(): $SlotPayloadType$$Type
}

export namespace $SlotPayload {
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($SlotPayload)>
const probejs$$marker: never
}
export class $SlotPayload$$Static implements $SlotPayload {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SlotPayload)>


 "type"(): $SlotPayloadType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotPayload$$Type = (() => $SlotPayloadType$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotPayload_ = $SlotPayload$$Type;
}}
declare module "com.enderio.base.common.paint.blockentity.PaintedBlockEntity" {
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $PaintedBlockEntity {

 "setPrimaryPaint"(arg0: $Block$$Type): void
 "getPrimaryPaint"(): $Optional<($Block)>
 "getSecondaryPaint"(): $Optional<($Block)>
 "setSecondaryPaint"(arg0: $Block$$Type): void
 "hasSecondaryPaint"(): boolean
set "primaryPaint"(value: $Block$$Type)
get "primaryPaint"(): $Optional<($Block)>
get "secondaryPaint"(): $Optional<($Block)>
set "secondaryPaint"(value: $Block$$Type)
}

export namespace $PaintedBlockEntity {
const PAINT_DATA_PROPERTIES: $Set<($ModelProperty<($Block)>)>
function createAndRegisterModelProperty(): $ModelProperty<($Block)>
const probejs$$marker: never
}
export class $PaintedBlockEntity$$Static implements $PaintedBlockEntity {
static readonly "PAINT_DATA_PROPERTIES": $Set<($ModelProperty<($Block)>)>


 "setPrimaryPaint"(arg0: $Block$$Type): void
 "getPrimaryPaint"(): $Optional<($Block)>
 "getSecondaryPaint"(): $Optional<($Block)>
 "setSecondaryPaint"(arg0: $Block$$Type): void
 "hasSecondaryPaint"(): boolean
static "createAndRegisterModelProperty"(): $ModelProperty<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedBlockEntity$$Type = ($PaintedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedBlockEntity_ = $PaintedBlockEntity$$Type;
}}
declare module "com.enderio.base.common.paint.PaintingTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PaintingTrigger$TriggerInstance, $PaintingTrigger$TriggerInstance$$Type} from "com.enderio.base.common.paint.PaintingTrigger$TriggerInstance"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PaintingTrigger extends $SimpleCriterionTrigger<($PaintingTrigger$TriggerInstance)> {

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Block$$Type): void
public "getId"(): $ResourceLocation
public "codec"(): $Codec<($PaintingTrigger$TriggerInstance)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingTrigger$$Type = ($PaintingTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingTrigger_ = $PaintingTrigger$$Type;
}}
declare module "com.enderio.core.common.network.NetworkDataSlot$CodecType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$NetworkDataSlot$Type, $NetworkDataSlot$Type$$Type} from "com.enderio.core.common.network.NetworkDataSlot$Type"
import {$List, $List$$Type} from "java.util.List"
import {$NetworkDataSlot, $NetworkDataSlot$$Type} from "com.enderio.core.common.network.NetworkDataSlot"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $NetworkDataSlot$CodecType<T> extends $Record implements $NetworkDataSlot$Type<(T)> {

constructor(arg0: $Codec$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)
constructor(codec: $Codec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, hashFunction: $Function$$Type<(T), (integer)>)

public "create"(arg0: $Supplier$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $NetworkDataSlot<(T)>
public static "createMap"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, arg3: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (U)>): $NetworkDataSlot$CodecType<($Map<(T), (U)>)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hash"(arg0: T): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public "read"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $Supplier$$Type<(T)>): T
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: T): $Tag
public "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type, arg2: $Supplier$$Type<(T)>): T
public "codec"(): $Codec<(T)>
public "hashFunction"(): $Function<(T), (integer)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public static "createList"<T>(arg0: $Codec$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $NetworkDataSlot$CodecType<($List<(T)>)>
public static "createSet"<T>(arg0: $Codec$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $NetworkDataSlot$CodecType<($Set<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDataSlot$CodecType$$Type<T> = ({"hashFunction"?: $Function$$Type<(any), (integer)>, "streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, "codec"?: $Codec$$Type<(any)>}) | ([hashFunction?: $Function$$Type<(any), (integer)>, streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, codec?: $Codec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkDataSlot$CodecType_<T> = $NetworkDataSlot$CodecType$$Type<(T)>;
}}
declare module "com.enderio.base.common.paint.item.PaintedSlabBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$PaintedBlockItem, $PaintedBlockItem$$Type} from "com.enderio.base.common.paint.item.PaintedBlockItem"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $PaintedSlabBlockItem extends $PaintedBlockItem {
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
export type $PaintedSlabBlockItem$$Type = ($PaintedSlabBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedSlabBlockItem_ = $PaintedSlabBlockItem$$Type;
}}
declare module "com.enderio.base.common.block.skull.WallEnderSkullBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$WallSkullBlock, $WallSkullBlock$$Type} from "net.minecraft.world.level.block.WallSkullBlock"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WallEnderSkullBlock extends $WallSkullBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallSkullBlock)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallEnderSkullBlock$$Type = ($WallEnderSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallEnderSkullBlock_ = $WallEnderSkullBlock$$Type;
}}
declare module "com.enderio.machines.common.blocks.fluid_tank.FluidTankBlockEntity" {
import {$SideConfig, $SideConfig$$Type} from "com.enderio.base.api.capability.SideConfig"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ISoulBindable, $ISoulBindable$$Type} from "com.enderio.base.api.soul.binding.ISoulBindable"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FluidTankUser, $FluidTankUser$$Type} from "com.enderio.machines.common.attachment.FluidTankUser"
import {$MachineTankLayout, $MachineTankLayout$$Type} from "com.enderio.machines.common.io.fluid.MachineTankLayout"
import {$TankAccess, $TankAccess$$Type} from "com.enderio.machines.common.io.fluid.TankAccess"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MachineInventoryLayout, $MachineInventoryLayout$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MachineFluidTank, $MachineFluidTank$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidTank"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$MachineFluidHandler, $MachineFluidHandler$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidHandler"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$FluidItemInteractive, $FluidItemInteractive$$Type} from "com.enderio.machines.common.io.fluid.FluidItemInteractive"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"

export class $FluidTankBlockEntity extends $MachineBlockEntity implements $FluidItemInteractive, $FluidTankUser {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_FILL_OUTPUT": $SingleSlotAccess
static readonly "FLUID_DRAIN_INPUT": $SingleSlotAccess
static readonly "FLUID_FILL_INPUT": $SingleSlotAccess
static readonly "DATA": StringJS
static readonly "FLUID_DRAIN_OUTPUT": $SingleSlotAccess
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($ISoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>
static readonly "TANK": $TankAccess

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "serverTick"(): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "acceptItemFill"(arg0: $ItemStack$$Type): boolean
public "getFluidTank"(): $MachineFluidTank
public "createFluidHandler"(): $MachineFluidHandler
public "acceptItemDrain"(arg0: $ItemStack$$Type): boolean
public "createInventoryLayout"(): $MachineInventoryLayout
public "getFluidHandler"(): $MachineFluidHandler
public "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
public "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getTankLayout"(): $MachineTankLayout
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "fluidTank"(): $MachineFluidTank
get "fluidHandler"(): $MachineFluidHandler
get "tankLayout"(): $MachineTankLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlockEntity$$Type = ($FluidTankBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankBlockEntity_ = $FluidTankBlockEntity$$Type;
}}
declare module "com.enderio.base.common.filter.item.general.EnderItemFilterMenu" {
import {$EnderItemFilterItem$Type, $EnderItemFilterItem$Type$$Type} from "com.enderio.base.common.filter.item.general.EnderItemFilterItem$Type"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractFilterMenu, $AbstractFilterMenu$$Type} from "com.enderio.base.common.filter.AbstractFilterMenu"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$DamageFilterMode, $DamageFilterMode$$Type} from "com.enderio.base.common.filter.item.general.DamageFilterMode"
import {$EnderItemFilter, $EnderItemFilter$$Type} from "com.enderio.base.common.filter.item.general.EnderItemFilter"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AbstractFilterMenu$FilterAccess, $AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.base.common.filter.AbstractFilterMenu$FilterAccess"

export class $EnderItemFilterMenu extends $AbstractFilterMenu<($EnderItemFilter)> {
readonly "quickcraftSlots": $Set<($Slot)>
static readonly "SHOULD_COMPARE_COMPONENTS_BUTTON_ID": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "BACK_BUTTON_ID": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "type": $EnderItemFilterItem$Type
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "IS_INVERTED_BUTTON_ID": integer
 "quickcraftType": integer
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(any)>, arg1: $EnderItemFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type, arg4: $AbstractFilterMenu$FilterAccess$$Type)
constructor(arg0: $MenuType$$Type<(any)>, arg1: $EnderItemFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type)

public "isInverted"(): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "damageFilterMode"(): $DamageFilterMode
public "setDamageFilterMode"(arg0: $DamageFilterMode$$Type): void
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "shouldCompareComponents"(): boolean
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderItemFilterMenu$$Type = ($EnderItemFilterMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderItemFilterMenu_ = $EnderItemFilterMenu$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedFenceGateBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$FenceGateBlock, $FenceGateBlock$$Type} from "net.minecraft.world.level.block.FenceGateBlock"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PaintedFenceGateBlock extends $FenceGateBlock implements $EntityBlock, $PaintedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedFenceGateBlock$$Type = ($PaintedFenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedFenceGateBlock_ = $PaintedFenceGateBlock$$Type;
}}
declare module "com.enderio.machines.common.blocks.slicer.SlicingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlicingRecipe$Input extends $Record implements $RecipeInput {

constructor(inputs: $List$$Type<($ItemStack$$Type)>)

public "getItem"(arg0: integer): $ItemStack
public "inputs"(): $List<($ItemStack)>
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicingRecipe$Input$$Type = ({"inputs"?: $List$$Type<($ItemStack$$Type)>}) | ([inputs?: $List$$Type<($ItemStack$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicingRecipe$Input_ = $SlicingRecipe$Input$$Type;
}}
declare module "com.enderio.base.api.travel.TravelTarget" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$TravelTargetSerializer, $TravelTargetSerializer$$Type} from "com.enderio.base.api.travel.TravelTargetSerializer"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TravelTargetType, $TravelTargetType$$Type} from "com.enderio.base.api.travel.TravelTargetType"

export interface $TravelTarget {

 "pos"(): $BlockPos
 "type"(): $TravelTargetType<(any)>
 "canInteract"(): boolean
 "interact"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
 "serializer"(): $TravelTargetSerializer<(any)>
/**
 * 
 * @deprecated
 */
 "canTravelTo"(): boolean
 "canJumpTo"(): boolean
 "canTeleportTo"(): boolean
 "item2BlockRange"(): integer
 "block2BlockRange"(): integer
}

export namespace $TravelTarget {
const CODEC: $Codec<($TravelTarget)>
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($TravelTarget)>
const probejs$$marker: never
}
export class $TravelTarget$$Static implements $TravelTarget {
static readonly "CODEC": $Codec<($TravelTarget)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TravelTarget)>


 "pos"(): $BlockPos
 "type"(): $TravelTargetType<(any)>
 "canInteract"(): boolean
 "interact"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
 "serializer"(): $TravelTargetSerializer<(any)>
/**
 * 
 * @deprecated
 */
 "canTravelTo"(): boolean
 "canJumpTo"(): boolean
 "canTeleportTo"(): boolean
 "item2BlockRange"(): integer
 "block2BlockRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelTarget$$Type = ($TravelTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelTarget_ = $TravelTarget$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.MachineRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack, $OutputStack$$Type} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export interface $MachineRecipe<T extends $RecipeInput> extends $Recipe<(T)> {

 "craft"(arg0: T, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "getEnergyCost"(arg0: T): integer
/**
 * 
 * @deprecated
 */
 "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getBaseEnergyCost"(): integer
 "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "matches"(arg0: T, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(any)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getGroup"(): StringJS
 "getSerializer"(): $RecipeSerializer<(any)>
 "isIncomplete"(): boolean
 "getToastSymbol"(): $ItemStack
 "showNotification"(): boolean
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
get "special"(): boolean
get "baseEnergyCost"(): integer
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}

export namespace $MachineRecipe {
const probejs$$marker: never
}
export class $MachineRecipe$$Static<T extends $RecipeInput> implements $MachineRecipe {


 "craft"(arg0: T, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "getEnergyCost"(arg0: T): integer
/**
 * 
 * @deprecated
 */
 "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getBaseEnergyCost"(): integer
 "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "matches"(arg0: T, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(any)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getGroup"(): StringJS
 "getSerializer"(): $RecipeSerializer<(any)>
 "isIncomplete"(): boolean
 "getToastSymbol"(): $ItemStack
 "showNotification"(): boolean
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRecipe$$Type<T> = ($MachineRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineRecipe_<T> = $MachineRecipe$$Type<(T)>;
}}
declare module "com.enderio.conduits.common.items.ConduitProbeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ConduitProbeItem$State, $ConduitProbeItem$State$$Type} from "com.enderio.conduits.common.items.ConduitProbeItem$State"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ConduitBundleBlockEntity, $ConduitBundleBlockEntity$$Type} from "com.enderio.conduits.common.conduit.bundle.ConduitBundleBlockEntity"

export class $ConduitProbeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getState"(arg0: $ItemStack$$Type): $ConduitProbeItem$State
public static "setState"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ConduitProbeItem$State$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "handlePaste"(arg0: $ConduitBundleBlockEntity$$Type, arg1: $Direction$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): void
public static "switchState"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitProbeItem$$Type = ($ConduitProbeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitProbeItem_ = $ConduitProbeItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.enchanter.EnchanterRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$EnchanterRecipe, $EnchanterRecipe$$Type} from "com.enderio.machines.common.blocks.enchanter.EnchanterRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $EnchanterRecipe$Serializer implements $RecipeSerializer<($EnchanterRecipe)> {
static readonly "CODEC": $MapCodec<($EnchanterRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnchanterRecipe)>

constructor()

public "codec"(): $MapCodec<($EnchanterRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EnchanterRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$Serializer$$Type = ($EnchanterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterRecipe$Serializer_ = $EnchanterRecipe$Serializer$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.inventory.MachineInventory" {
import {$IOConfigurable, $IOConfigurable$$Type} from "com.enderio.base.api.io.IOConfigurable"
import {$MachineInventoryLayout, $MachineInventoryLayout$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MultiSlotAccess, $MultiSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.MultiSlotAccess"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineState, $MachineState$$Type} from "com.enderio.machines.common.blocks.base.state.MachineState"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $MachineInventory extends $ItemStackHandler {

constructor(arg0: $IOConfigurable$$Type, arg1: $MachineInventoryLayout$$Type)

public "layout"(): $MachineInventoryLayout
public "snapshot"(arg0: $MultiSlotAccess$$Type): $MachineInventory
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getLayout"(): $MachineInventoryLayout
public "getForSide"(arg0: $Direction$$Type): $IItemHandler
public "copyFromItem"(arg0: $ItemContainerContents$$Type): void
public "toItemContents"(): $ItemContainerContents
public "addSlotChangedCallback"(arg0: $IntConsumer$$Type): void
public "updateMachineState"(arg0: $MachineState$$Type, arg1: boolean): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventory$$Type = ($MachineInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInventory_ = $MachineInventory$$Type;
}}
declare module "com.enderio.base.api.travel.TravelTargetSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TravelTarget, $TravelTarget$$Type} from "com.enderio.base.api.travel.TravelTarget"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $TravelTargetSerializer<T extends $TravelTarget> {

 "codec"(): $MapCodec<(T)>
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioTravelTargetSerializers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioTravelTargetSerializersTag
}

export namespace $TravelTargetSerializer {
const probejs$$marker: never
}
export class $TravelTargetSerializer$$Static<T extends $TravelTarget> implements $TravelTargetSerializer {


 "codec"(): $MapCodec<(T)>
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelTargetSerializer$$Type<T> = (Special.EnderioTravelTargetSerializers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelTargetSerializer_<T> = $TravelTargetSerializer$$Type<(T)>;
}}
declare module "com.enderio.conduits.api.ConduitType$Builder" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $ConduitType$Builder<T extends $Conduit<(T), (any)>> {


public "build"(): $ConduitType<(T)>
public "exposeCapability"<U>(arg0: $BlockCapability$$Type<(U), (any)>): $ConduitType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitType$Builder$$Type<T> = ($ConduitType$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitType$Builder_<T> = $ConduitType$Builder$$Type<(T)>;
}}
declare module "com.enderio.conduits.common.conduit.type.energy.EnergyConduitConnectionConfig" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RedstoneSensitiveConnectionConfig, $RedstoneSensitiveConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.RedstoneSensitiveConnectionConfig"
import {$List, $List$$Type} from "java.util.List"
import {$ConduitRedstoneSignalAware, $ConduitRedstoneSignalAware$$Type} from "com.enderio.conduits.api.ConduitRedstoneSignalAware"
import {$IOConnectionConfig, $IOConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.IOConnectionConfig"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnergyConduitConnectionConfig extends $Record implements $IOConnectionConfig, $RedstoneSensitiveConnectionConfig {
static readonly "CODEC": $MapCodec<($EnergyConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($EnergyConduitConnectionConfig)>
static readonly "DEFAULT": $EnergyConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($EnergyConduitConnectionConfig)>

constructor(isInsert: boolean, isExtract: boolean, extractRedstoneControl: $RedstoneControl$$Type, extractRedstoneChannel: $DyeColor$$Type, priority: integer)

public "priority"(): integer
public "type"(): $ConnectionConfigType<(any)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "disconnected"(): $ConnectionConfig
public "reconnected"(): $ConnectionConfig
public "withPriority"(arg0: integer): $EnergyConduitConnectionConfig
public "withIsInsert"(arg0: boolean): $EnergyConduitConnectionConfig
public "withIsExtract"(arg0: boolean): $EnergyConduitConnectionConfig
public "isInsert"(): boolean
public "isExtract"(): boolean
public "insertChannel"(): $DyeColor
public "extractChannel"(): $DyeColor
public "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "extractRedstoneControl"(): $RedstoneControl
public "extractRedstoneChannel"(): $DyeColor
public "withExtractRedstoneControl"(arg0: $RedstoneControl$$Type): $EnergyConduitConnectionConfig
public "withExtractRedstoneChannel"(arg0: $DyeColor$$Type): $EnergyConduitConnectionConfig
public "getRedstoneSignalColors"(): $List<($DyeColor)>
public "isConnected"(): boolean
get "insert"(): boolean
get "extract"(): boolean
get "redstoneSignalColors"(): $List<($DyeColor)>
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyConduitConnectionConfig$$Type = ({"isExtract"?: boolean, "extractRedstoneChannel"?: $DyeColor$$Type, "extractRedstoneControl"?: $RedstoneControl$$Type, "priority"?: integer, "isInsert"?: boolean}) | ([isExtract?: boolean, extractRedstoneChannel?: $DyeColor$$Type, extractRedstoneControl?: $RedstoneControl$$Type, priority?: integer, isInsert?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyConduitConnectionConfig_ = $EnergyConduitConnectionConfig$$Type;
}}
declare module "com.enderio.base.api.attachment.CoordinateSelection" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CoordinateSelection extends $Record {
static readonly "CODEC": $Codec<($CoordinateSelection)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CoordinateSelection)>

constructor(level: $ResourceKey$$Type<($Level)>, pos: $BlockPos$$Type)
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type)

public "pos"(): $BlockPos
public "level"(): $ResourceKey<($Level)>
public "getLevelName"(): StringJS
public static "getLevelName"(arg0: $ResourceLocation$$Type): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
get "levelName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoordinateSelection$$Type = ({"pos"?: $BlockPos$$Type, "level"?: $ResourceKey$$Type<($Level)>}) | ([pos?: $BlockPos$$Type, level?: $ResourceKey$$Type<($Level)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoordinateSelection_ = $CoordinateSelection$$Type;
}}
declare module "com.enderio.base.common.filter.fluid.EnderFluidFilterItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$FluidFilter, $FluidFilter$$Type} from "com.enderio.base.api.filter.FluidFilter"
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
import {$AbstractFilterItem, $AbstractFilterItem$$Type} from "com.enderio.base.common.filter.AbstractFilterItem"
import {$EnderFluidFilterItem$Type, $EnderFluidFilterItem$Type$$Type} from "com.enderio.base.common.filter.fluid.EnderFluidFilterItem$Type"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FilterMenuProvider, $FilterMenuProvider$$Type} from "com.enderio.base.api.filter.FilterMenuProvider"
import {$EnderFluidFilter, $EnderFluidFilter$$Type} from "com.enderio.base.common.filter.fluid.EnderFluidFilter"

export class $EnderFluidFilterItem extends $AbstractFilterItem<($EnderFluidFilter)> {
static readonly "FLUID_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FluidFilter)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILTER_MENU_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FilterMenuProvider)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $EnderFluidFilterItem$Type$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderFluidFilterItem$$Type = ($EnderFluidFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderFluidFilterItem_ = $EnderFluidFilterItem$$Type;
}}
declare module "com.enderio.base.common.filter.item.general.EnderItemFilterItem$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$EnderItemFilterMenu, $EnderItemFilterMenu$$Type} from "com.enderio.base.common.filter.item.general.EnderItemFilterMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$AbstractFilterMenu$FilterAccess, $AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.base.common.filter.AbstractFilterMenu$FilterAccess"

export class $EnderItemFilterItem$Type extends $Enum<($EnderItemFilterItem$Type)> {
static readonly "BIG": $EnderItemFilterItem$Type
static readonly "BIG_ADVANCED": $EnderItemFilterItem$Type
static readonly "BASIC": $EnderItemFilterItem$Type
static readonly "ADVANCED": $EnderItemFilterItem$Type


public "slotCount"(): integer
public static "values"(): ($EnderItemFilterItem$Type)[]
public static "valueOf"(arg0: StringJS): $EnderItemFilterItem$Type
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): $EnderItemFilterMenu
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractFilterMenu$FilterAccess$$Type): $EnderItemFilterMenu
public "rowCount"(): integer
public "canFilterByDamage"(): boolean
public "canMatchComponents"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderItemFilterItem$Type$$Type = (("basic") | ("advanced") | ("big") | ("big_advanced"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderItemFilterItem$Type_ = $EnderItemFilterItem$Type$$Type;
}}
declare module "com.enderio.machines.common.blocks.fluid_tank.TankRecipe$Mode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $TankRecipe$Mode extends $Enum<($TankRecipe$Mode)> implements $StringRepresentable {
static readonly "FILL": $TankRecipe$Mode
static readonly "CODEC": $Codec<($TankRecipe$Mode)>
static readonly "BY_ID": $IntFunction<($TankRecipe$Mode)>
static readonly "EMPTY": $TankRecipe$Mode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TankRecipe$Mode)>


public static "values"(): ($TankRecipe$Mode)[]
public static "valueOf"(arg0: StringJS): $TankRecipe$Mode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$Mode$$Type = (("fill") | ("empty"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRecipe$Mode_ = $TankRecipe$Mode$$Type;
}}
declare module "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$OutputItem" {
import {$SagMillOutputItem, $SagMillOutputItem$$Type} from "com.almostreliable.kubeio.binding.SagMillOutputItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SagMillOutputItemAccessor, $SagMillOutputItemAccessor$$Type} from "com.almostreliable.kubeio.mixin.SagMillOutputItemAccessor"
import {$SagMillingRecipe$OutputItem$SizedTagOutput, $SagMillingRecipe$OutputItem$SizedTagOutput$$Type} from "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$OutputItem$SizedTagOutput"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SagMillingRecipe$OutputItem extends $Record implements $SagMillOutputItemAccessor, $SagMillOutputItem {

constructor(output: $Either$$Type<($ItemStack$$Type), ($SagMillingRecipe$OutputItem$SizedTagOutput$$Type)>, chance: float, isOptional: boolean)

public "output"(): $Either<($ItemStack), ($SagMillingRecipe$OutputItem$SizedTagOutput)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "ofTag"(arg0: $TagKey$$Type<($Item)>, arg1: integer, arg2: float, arg3: boolean): $SagMillingRecipe$OutputItem
public static "of"(arg0: $ItemStack$$Type, arg1: float, arg2: boolean): $SagMillingRecipe$OutputItem
public "isPresent"(): boolean
public "chance"(): float
public "getItemStack"(): $ItemStack
public "isOptional"(): boolean
public static "getCodec$kubejs_enderio_$md$850d7f$0"(): $Codec<(any)>
public static "getCodec"(): $Codec<($SagMillingRecipe$OutputItem)>
public static "of"(arg0: $ItemStack$$Type): $SagMillingRecipe$OutputItem
public static "of"(arg0: $ItemStack$$Type, arg1: float): $SagMillingRecipe$OutputItem
public static "ofTag"(arg0: $TagKey$$Type<($Item)>, arg1: integer, arg2: float): $SagMillingRecipe$OutputItem
public static "ofTag"(arg0: $TagKey$$Type<($Item)>, arg1: integer): $SagMillingRecipe$OutputItem
get "present"(): boolean
get "itemStack"(): $ItemStack
get "optional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$OutputItem$$Type = ({"isOptional"?: boolean, "chance"?: float, "output"?: $Either$$Type<($ItemStack$$Type), ($SagMillingRecipe$OutputItem$SizedTagOutput$$Type)>}) | ([isOptional?: boolean, chance?: float, output?: $Either$$Type<($ItemStack$$Type), ($SagMillingRecipe$OutputItem$SizedTagOutput$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$OutputItem_ = $SagMillingRecipe$OutputItem$$Type;
}}
declare module "com.enderio.machines.common.blockentity.multienergy.CapacityTier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CapacityTier {

 "getStorageCapacity"(): integer

(): integer
get "storageCapacity"(): integer
}

export namespace $CapacityTier {
const probejs$$marker: never
}
export class $CapacityTier$$Static implements $CapacityTier {


 "getStorageCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityTier$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacityTier_ = $CapacityTier$$Type;
}}
declare module "com.enderio.base.common.filter.fluid.EnderFluidFilter" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FluidFilter, $FluidFilter$$Type} from "com.enderio.base.api.filter.FluidFilter"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnderFluidFilter extends $Record implements $FluidFilter {
static readonly "CODEC": $Codec<($EnderFluidFilter)>
static readonly "EMPTY": $EnderFluidFilter
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnderFluidFilter)>

constructor(matches: $NonNullList$$Type<($FluidStack$$Type)>, isDenyList: boolean, shouldCompareComponents: boolean)
constructor(arg0: $List$$Type<($FluidStack$$Type)>, arg1: boolean, arg2: boolean)
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $IFluidHandler$$Type, arg1: $FluidStack$$Type): $FluidStack
public "matches"(): $NonNullList<($FluidStack)>
public "isDenyList"(): boolean
public "shouldCompareComponents"(): boolean
get "denyList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderFluidFilter$$Type = ({"shouldCompareComponents"?: boolean, "isDenyList"?: boolean, "matches"?: $NonNullList$$Type<($FluidStack$$Type)>}) | ([shouldCompareComponents?: boolean, isDenyList?: boolean, matches?: $NonNullList$$Type<($FluidStack$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderFluidFilter_ = $EnderFluidFilter$$Type;
}}
declare module "com.enderio.core.common.blockentity.EnderBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$NetworkDataSlot, $NetworkDataSlot$$Type} from "com.enderio.core.common.network.NetworkDataSlot"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderBlockEntity extends $BlockEntity {
static readonly "DATA": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public static "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $EnderBlockEntity$$Type): void
/**
 * 
 * @deprecated
 */
public "sync"(): void
public "serverTick"(): void
public "clientTick"(): void
public "endTick"(): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "addDataSlot"<T extends $NetworkDataSlot<(any)>>(arg0: T): T
/**
 * 
 * @deprecated
 */
public "addAfterSyncRunnable"(arg0: $Runnable$$Type): void
/**
 * 
 * @deprecated
 */
public "clientUpdateSlot"<T>(arg0: $NetworkDataSlot$$Type<(T)>, arg1: T): void
/**
 * 
 * @deprecated
 */
public "clientHandleBufferSync"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
/**
 * 
 * @deprecated
 */
public "serverHandleBufferChange"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderBlockEntity$$Type = ($EnderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderBlockEntity_ = $EnderBlockEntity$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.state.MachineStateType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $MachineStateType extends $Enum<($MachineStateType)> implements $StringRepresentable {
static readonly "DISABLED": $MachineStateType
static readonly "CODEC": $Codec<($MachineStateType)>
static readonly "ACTIVE": $MachineStateType
static readonly "IDLE": $MachineStateType
static readonly "BY_ID": $IntFunction<($MachineStateType)>
static readonly "ERROR": $MachineStateType
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MachineStateType)>


public static "values"(): ($MachineStateType)[]
public static "valueOf"(arg0: StringJS): $MachineStateType
public "getPriority"(): integer
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "priority"(): integer
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineStateType$$Type = (("active") | ("idle") | ("error") | ("disabled"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineStateType_ = $MachineStateType$$Type;
}}
declare module "com.enderio.conduits.api.bundle.ConduitBundle" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FacadeType, $FacadeType$$Type} from "com.enderio.conduits.api.facade.FacadeType"
import {$AddConduitResult, $AddConduitResult$$Type} from "com.enderio.conduits.api.bundle.AddConduitResult"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$ConnectionStatus, $ConnectionStatus$$Type} from "com.enderio.conduits.api.connection.ConnectionStatus"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export interface $ConduitBundle {

 "isFull"(): boolean
 "isEmpty"(): boolean
 "tryConnectTo"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: boolean): boolean
 "hasFacade"(): boolean
 "removeConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Player$$Type): void
 "getConduitNode"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): $IConduitNode
 "getConduits"(): $List<($Holder<($Conduit<(any), (any)>)>)>
 "canAddConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "addConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $Player$$Type): $AddConduitResult
 "getFacadeType"(): $FacadeType
 "getFacadeBlock"(): $Block
 "getConnectionStatus"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionStatus
 "getConduitByType"(arg0: $ConduitType$$Type<(any)>): $Holder<($Conduit<(any), (any)>)>
 "setFacadeProvider"(arg0: $ItemStack$$Type): void
 "getConduitExtraGuiData"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $CompoundTag
 "getConnectedConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(any), (any)>)>)>
 "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfigType$$Type<(T)>): T
 "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionConfig
 "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
 "getFacadeProvider"(): $ItemStack
 "hasConduitStrict"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "hasConduitByType"(arg0: $ConduitType$$Type<(any)>): boolean
 "hasConduitByType"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "getConnectionInventory"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $IItemHandlerModifiable
 "getConduitExtraWorldData"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): $CompoundTag
get "full"(): boolean
get "empty"(): boolean
get "conduits"(): $List<($Holder<($Conduit<(any), (any)>)>)>
get "facadeType"(): $FacadeType
get "facadeBlock"(): $Block
set "facadeProvider"(value: $ItemStack$$Type)
get "facadeProvider"(): $ItemStack
}

export namespace $ConduitBundle {
const probejs$$marker: never
}
export class $ConduitBundle$$Static implements $ConduitBundle {


 "isFull"(): boolean
 "isEmpty"(): boolean
 "tryConnectTo"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: boolean): boolean
 "hasFacade"(): boolean
 "removeConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Player$$Type): void
 "getConduitNode"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): $IConduitNode
 "getConduits"(): $List<($Holder<($Conduit<(any), (any)>)>)>
 "canAddConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "addConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $Player$$Type): $AddConduitResult
 "getFacadeType"(): $FacadeType
 "getFacadeBlock"(): $Block
 "getConnectionStatus"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionStatus
 "getConduitByType"(arg0: $ConduitType$$Type<(any)>): $Holder<($Conduit<(any), (any)>)>
 "setFacadeProvider"(arg0: $ItemStack$$Type): void
 "getConduitExtraGuiData"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $CompoundTag
 "getConnectedConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(any), (any)>)>)>
 "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfigType$$Type<(T)>): T
 "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionConfig
 "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
 "getFacadeProvider"(): $ItemStack
 "hasConduitStrict"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "hasConduitByType"(arg0: $ConduitType$$Type<(any)>): boolean
 "hasConduitByType"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "getConnectionInventory"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $IItemHandlerModifiable
 "getConduitExtraWorldData"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBundle$$Type = ($ConduitBundle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBundle_ = $ConduitBundle$$Type;
}}
declare module "com.enderio.conduits.api.ConduitType" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConduitType$Builder, $ConduitType$Builder$$Type} from "com.enderio.conduits.api.ConduitType$Builder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export interface $ConduitType<T extends $Conduit<(T), (any)>> {

 "codec"(): $MapCodec<(T)>
 "exposedCapabilities"(): $Set<($BlockCapability<(any), (any)>)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitTypeTag
}

export namespace $ConduitType {
const CODEC: $Codec<($ConduitType<(any)>)>
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitType<(any)>)>
function of<T extends $Conduit<(T), (any)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType<(T)>
function of<T extends $Conduit<(T), (any)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType<(T)>
function builder<T extends $Conduit<(T), (any)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType$Builder<(T)>
function builder<T extends $Conduit<(T), (any)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType$Builder<(T)>
const probejs$$marker: never
}
export class $ConduitType$$Static<T extends $Conduit<(T), (any)>> implements $ConduitType {
static readonly "CODEC": $Codec<($ConduitType<(any)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitType<(any)>)>


static "of"<T extends $Conduit<(T), (any)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType<(T)>
static "of"<T extends $Conduit<(T), (any)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType<(T)>
static "builder"<T extends $Conduit<(T), (any)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType$Builder<(T)>
static "builder"<T extends $Conduit<(T), (any)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType$Builder<(T)>
 "codec"(): $MapCodec<(T)>
 "exposedCapabilities"(): $Set<($BlockCapability<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitType$$Type<T> = (Special.EnderioConduitType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitType_<T> = $ConduitType$$Type<(T)>;
}}
declare module "com.enderio.conduits.api.network.node.legacy.ConduitDataAccessor" {
import {$ConduitDataType, $ConduitDataType$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataType"
import {$ConduitData, $ConduitData$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitData"

/**
 * 
 * @deprecated
 */
export interface $ConduitDataAccessor {

 "getData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
 "hasData"(arg0: $ConduitDataType$$Type<(any)>): boolean
 "getOrCreateData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
}

export namespace $ConduitDataAccessor {
const probejs$$marker: never
}
export class $ConduitDataAccessor$$Static implements $ConduitDataAccessor {


 "getData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
 "hasData"(arg0: $ConduitDataType$$Type<(any)>): boolean
 "getOrCreateData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitDataAccessor$$Type = ($ConduitDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitDataAccessor_ = $ConduitDataAccessor$$Type;
}}
declare module "com.enderio.base.common.block.EIOBlockEntity" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EnderBlockEntity, $EnderBlockEntity$$Type} from "com.enderio.core.common.blockentity.EnderBlockEntity"

export class $EIOBlockEntity extends $EnderBlockEntity {
static readonly "DATA": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "onLoad"(): void
public "serverTick"(): void
public "neighborChanged"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOBlockEntity$$Type = ($EIOBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EIOBlockEntity_ = $EIOBlockEntity$$Type;
}}
declare module "com.enderio.machines.common.blocks.slicer.SlicingRecipe" {
import {$SlicingRecipe$Input, $SlicingRecipe$Input$$Type} from "com.enderio.machines.common.blocks.slicer.SlicingRecipe$Input"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineRecipe, $MachineRecipe$$Type} from "com.enderio.machines.common.blocks.base.MachineRecipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack, $OutputStack$$Type} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $SlicingRecipe extends $Record implements $MachineRecipe<($SlicingRecipe$Input)> {

constructor(output: $ItemStack$$Type, inputs: $List$$Type<($Ingredient$$Type)>, energy: integer)

public "output"(): $ItemStack
public "inputs"(): $List<($Ingredient)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SlicingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $SlicingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "energy"(): integer
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getEnergyCost"(arg0: $SlicingRecipe$Input$$Type): integer
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SlicingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SlicingRecipe$Input$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicingRecipe$$Type = ({"energy"?: integer, "inputs"?: $List$$Type<($Ingredient$$Type)>, "output"?: $ItemStack$$Type}) | ([energy?: integer, inputs?: $List$$Type<($Ingredient$$Type)>, output?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicingRecipe_ = $SlicingRecipe$$Type;
}}
declare module "com.enderio.conduits.api.bundle.SlotType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * 
 * @deprecated
 */
export class $SlotType extends $Enum<($SlotType)> {
static readonly "FILTER_INSERT": $SlotType
static readonly "FILTER_EXTRACT": $SlotType
static readonly "UPGRADE_EXTRACT": $SlotType
static readonly "Y_POSITION": integer


public static "values"(): ($SlotType)[]
public static "valueOf"(arg0: StringJS): $SlotType
public "getY"(): integer
public "getX"(): integer
get "y"(): integer
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotType$$Type = (("filter_extract") | ("filter_insert") | ("upgrade_extract"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotType_ = $SlotType$$Type;
}}
declare module "com.enderio.base.common.filter.soul.EnderSoulFilterItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractFilterItem, $AbstractFilterItem$$Type} from "com.enderio.base.common.filter.AbstractFilterItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnderSoulFilter, $EnderSoulFilter$$Type} from "com.enderio.base.common.filter.soul.EnderSoulFilter"
import {$EnderSoulFilterItem$Type, $EnderSoulFilterItem$Type$$Type} from "com.enderio.base.common.filter.soul.EnderSoulFilterItem$Type"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FilterMenuProvider, $FilterMenuProvider$$Type} from "com.enderio.base.api.filter.FilterMenuProvider"
import {$SoulFilter, $SoulFilter$$Type} from "com.enderio.base.api.filter.SoulFilter"

export class $EnderSoulFilterItem extends $AbstractFilterItem<($EnderSoulFilter)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "ENTITY_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($SoulFilter)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILTER_MENU_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FilterMenuProvider)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $EnderSoulFilterItem$Type$$Type)

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSoulFilterItem$$Type = ($EnderSoulFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSoulFilterItem_ = $EnderSoulFilterItem$$Type;
}}
declare module "com.enderio.base.common.block.glass.GlassCollisionPredicate" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EntityCollisionContext, $EntityCollisionContext$$Type} from "net.minecraft.world.phys.shapes.EntityCollisionContext"

export class $GlassCollisionPredicate extends $Enum<($GlassCollisionPredicate)> {
static readonly "ANIMALS_PASS": $GlassCollisionPredicate
static readonly "PLAYERS_BLOCK": $GlassCollisionPredicate
static readonly "MOBS_PASS": $GlassCollisionPredicate
static readonly "PLAYERS_PASS": $GlassCollisionPredicate
static readonly "ANIMALS_BLOCK": $GlassCollisionPredicate
static readonly "MOBS_BLOCK": $GlassCollisionPredicate
static readonly "NONE": $GlassCollisionPredicate


public "shortName"(): StringJS
public static "values"(): ($GlassCollisionPredicate)[]
public static "valueOf"(arg0: StringJS): $GlassCollisionPredicate
public static "invert"(arg0: $GlassCollisionPredicate$$Type): $GlassCollisionPredicate
public static "fromToken"(arg0: $Item$$Type): $GlassCollisionPredicate
public "canPass"(arg0: $EntityCollisionContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassCollisionPredicate$$Type = (("none") | ("players_pass") | ("players_block") | ("mobs_pass") | ("mobs_block") | ("animals_pass") | ("animals_block"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassCollisionPredicate_ = $GlassCollisionPredicate$$Type;
}}
declare module "com.enderio.conduits.common.redstone.RedstoneExtractFilter" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $RedstoneExtractFilter {

 "getInputSignal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer

(arg0: $Level, arg1: $BlockPos, arg2: $Direction): integer
}

export namespace $RedstoneExtractFilter {
const probejs$$marker: never
}
export class $RedstoneExtractFilter$$Static implements $RedstoneExtractFilter {


 "getInputSignal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneExtractFilter$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $Direction) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneExtractFilter_ = $RedstoneExtractFilter$$Type;
}}
declare module "com.enderio.machines.common.blocks.obelisks.weather.WeatherChangeRecipe$WeatherMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$Fireworks, $Fireworks$$Type} from "net.minecraft.world.item.component.Fireworks"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $WeatherChangeRecipe$WeatherMode extends $Enum<($WeatherChangeRecipe$WeatherMode)> implements $StringRepresentable {
static readonly "RAIN": $WeatherChangeRecipe$WeatherMode
static readonly "CODEC": $Codec<($WeatherChangeRecipe$WeatherMode)>
static readonly "SURPRISE": $Fireworks
static readonly "LIGHTNING": $WeatherChangeRecipe$WeatherMode
static readonly "BY_ID": $IntFunction<($WeatherChangeRecipe$WeatherMode)>
static readonly "SURPRISE_2": $Fireworks
static readonly "CLEAR": $WeatherChangeRecipe$WeatherMode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($WeatherChangeRecipe$WeatherMode)>


public static "values"(): ($WeatherChangeRecipe$WeatherMode)[]
public static "valueOf"(arg0: StringJS): $WeatherChangeRecipe$WeatherMode
public "getFireworks"(): $Fireworks
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "fireworks"(): $Fireworks
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatherChangeRecipe$WeatherMode$$Type = (("clear") | ("rain") | ("lightning"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeatherChangeRecipe$WeatherMode_ = $WeatherChangeRecipe$WeatherMode$$Type;
}}
declare module "com.enderio.base.common.filter.AbstractFilterItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FilterMenuProvider, $FilterMenuProvider$$Type} from "com.enderio.base.api.filter.FilterMenuProvider"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $AbstractFilterItem<T> extends $Item implements $FilterMenuProvider {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILTER_MENU_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FilterMenuProvider)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "openMenu"(arg0: $ServerPlayer$$Type, arg1: $IItemHandlerModifiable$$Type, arg2: integer, arg3: $Runnable$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFilterItem$$Type<T> = ($AbstractFilterItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFilterItem_<T> = $AbstractFilterItem$$Type<(T)>;
}}
declare module "com.enderio.conduits.common.conduit.type.energy.EnergyConduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.bundle.SlotType"
import {$EnergyConduitConnectionConfig, $EnergyConduitConnectionConfig$$Type} from "com.enderio.conduits.common.conduit.type.energy.EnergyConduitConnectionConfig"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ConduitDataAccessor, $ConduitDataAccessor$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataAccessor"
import {$Vector2i, $Vector2i$$Type} from "org.joml.Vector2i"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.conduits.api.network.ConduitBlockConnection"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$EnergyConduitTicker, $EnergyConduitTicker$$Type} from "com.enderio.conduits.common.conduit.type.energy.EnergyConduitTicker"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.api.bundle.ConduitBundle"

export class $EnergyConduit extends $Record implements $Conduit<($EnergyConduit), ($EnergyConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($EnergyConduit)>

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, transferRatePerTick: integer)

public "type"(): $ConduitType<($EnergyConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $EnergyConduit$$Type): integer
public static "of"(arg0: $ResourceLocation$$Type, arg1: $Component$$Type, arg2: integer): $EnergyConduit
public "ticker"(): $EnergyConduitTicker
public "texture"(): $ResourceLocation
public "description"(): $Component
public "hasMenu"(): boolean
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "onRemoved"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "networkTickRate"(): integer
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $EnergyConduitConnectionConfig
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "proxyCapability"<TCap, TContext>(arg0: $Level$$Type, arg1: $IConduitNode$$Type, arg2: $BlockCapability$$Type<(TCap), (TContext)>, arg3: TContext): TCap
public "connectionConfigType"(): $ConnectionConfigType<($EnergyConduitConnectionConfig)>
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "transferRatePerTick"(): integer
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
/**
 * 
 * @deprecated
 */
public "copyLegacyData"(arg0: $IConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
public "onCreated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "onConnectTo"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): void
public "getInventorySize"(): integer
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "hasConnectionDelay"(): boolean
/**
 * 
 * @deprecated
 */
public "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "canConnectToConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type): $CompoundTag
public "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
public "onConnectionsUpdated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "canConnectConduits"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): boolean
public "getInventorySlotPosition"(arg0: integer): $Vector2i
public "hasServerConnectionChecks"(): boolean
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
get "inventorySize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyConduit$$Type = ({"transferRatePerTick"?: integer, "description"?: $Component$$Type, "texture"?: $ResourceLocation$$Type}) | ([transferRatePerTick?: integer, description?: $Component$$Type, texture?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyConduit_ = $EnergyConduit$$Type;
}}
declare module "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$SagMillingRecipe, $SagMillingRecipe$$Type} from "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SagMillingRecipe$Serializer implements $RecipeSerializer<($SagMillingRecipe)> {
static readonly "CODEC": $MapCodec<($SagMillingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SagMillingRecipe)>

constructor()

public "codec"(): $MapCodec<($SagMillingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SagMillingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$Serializer$$Type = ($SagMillingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$Serializer_ = $SagMillingRecipe$Serializer$$Type;
}}
declare module "com.enderio.conduits.common.conduit.bundle.ConduitBundleBlockEntity" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$List, $List$$Type} from "java.util.List"
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$ConduitShape, $ConduitShape$$Type} from "com.enderio.conduits.common.conduit.bundle.ConduitShape"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.common.conduit.network.ConduitNode"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConduitMenu$ConnectionAccessor, $ConduitMenu$ConnectionAccessor$$Type} from "com.enderio.conduits.common.conduit.menu.ConduitMenu$ConnectionAccessor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Wrenchable, $Wrenchable$$Type} from "com.enderio.base.common.blockentity.Wrenchable"
import {$IConduitNodeAttachment, $IConduitNodeAttachment$$Type} from "com.enderio.conduits.common.conduit.network.IConduitNodeAttachment"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnderBlockEntity, $EnderBlockEntity$$Type} from "com.enderio.core.common.blockentity.EnderBlockEntity"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$FacadeType, $FacadeType$$Type} from "com.enderio.conduits.api.facade.FacadeType"
import {$AddConduitResult, $AddConduitResult$$Type} from "com.enderio.conduits.api.bundle.AddConduitResult"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$ConnectionStatus, $ConnectionStatus$$Type} from "com.enderio.conduits.api.connection.ConnectionStatus"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.api.bundle.ConduitBundle"

export class $ConduitBundleBlockEntity extends $EnderBlockEntity implements $ConduitBundle, $Wrenchable, $ConduitMenu$ConnectionAccessor, $IConduitNodeAttachment {
static readonly "FACADES": $Long2ObjectMap<($BlockState)>
static readonly "DATA": StringJS
 "primaryConnectionSide": $Direction
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "CHUNK_FACADES": $Long2ObjectMap<($LongSet)>
static readonly "MAX_CONDUITS": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isFull"(): boolean
public "setLevel"(arg0: $Level$$Type): void
public "getShape"(): $ConduitShape
public "isEmpty"(): boolean
public "onLoad"(): void
public "updateShape"(): void
public "serverTick"(): void
public "setRemoved"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getModelData"(): $ModelData
public "tryConnectTo"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: boolean): boolean
public "hasFacade"(): boolean
public "removeConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Player$$Type): void
public "removeConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Player$$Type, arg2: $BlockPos$$Type): void
public "getConduitNode"(arg0: $Holder$$Type<(any)>): $IConduitNode
public "getConduits"(): $List<($Holder<($Conduit<(any), (any)>)>)>
public "canOpenScreen"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): boolean
public "canAddConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "addConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $Player$$Type): $AddConduitResult
public "markNodesDirty"(): void
public "getFacadeType"(): $FacadeType
public "dropFacadeItem"(arg0: $BlockPos$$Type): void
public "dropFacadeItem"(): void
public "onWrenched"(arg0: $UseOnContext$$Type): $ItemInteractionResult
public "updateModel"(): void
public "canConnectTo"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConduitNode$$Type, arg3: boolean): boolean
public "getFacadeBlock"(): $Block
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getConnectionStatus"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionStatus
public "updateConnections"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: boolean): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChunkUnloaded"(): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
public "getConduitByType"(arg0: $ConduitType$$Type<(any)>): $Holder<($Conduit<(any), (any)>)>
public "setFacadeProvider"(arg0: $ItemStack$$Type): void
public "getAllOpenableConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(any), (any)>)>)>
public "getConduitExtraGuiData"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $CompoundTag
public "getConnectedConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(any), (any)>)>)>
public "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfigType$$Type<(T)>): T
public "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionConfig
public "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
public "getFacadeProvider"(): $ItemStack
public "updateNeighborRedstone"(): void
public "hasConduitStrict"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "setConnectionStatus"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionStatus$$Type): void
public "hasConduitByType"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "hasConduitByType"(arg0: $ConduitType$$Type<(any)>): boolean
public "onConnectionsUpdated"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): void
public "getConnectionInventory"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $IItemHandlerModifiable
public "removeNeighborConnections"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): void
public "getConduitExtraWorldData"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): $CompoundTag
public "getNeighborSidedCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg2: $Direction$$Type): TCapability
public "getNeighborVoidCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $BlockCapability$$Type<(TCapability), (void)>, arg2: $Direction$$Type): TCapability
public static "createCapabilityProvider"<TCap, TContext>(arg0: $BlockCapability$$Type<(TCap), (TContext)>): $ICapabilityProvider<($ConduitBundleBlockEntity), (TContext), (TCap)>
public "getLevel"(): $Level
public "hasLevel"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "full"(): boolean
set "level"(value: $Level$$Type)
get "shape"(): $ConduitShape
get "empty"(): boolean
get "modelData"(): $ModelData
get "conduits"(): $List<($Holder<($Conduit<(any), (any)>)>)>
get "facadeType"(): $FacadeType
get "facadeBlock"(): $Block
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
set "facadeProvider"(value: $ItemStack$$Type)
get "facadeProvider"(): $ItemStack
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBundleBlockEntity$$Type = ($ConduitBundleBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBundleBlockEntity_ = $ConduitBundleBlockEntity$$Type;
}}
declare module "com.enderio.machines.common.blockentity.solar.ISolarPanelTier" {
import {$CapacityTier, $CapacityTier$$Type} from "com.enderio.machines.common.blockentity.multienergy.CapacityTier"

export interface $ISolarPanelTier extends $CapacityTier {

 "getProductionRate"(): integer
 "getStorageCapacity"(): integer
get "productionRate"(): integer
get "storageCapacity"(): integer
}

export namespace $ISolarPanelTier {
const probejs$$marker: never
}
export class $ISolarPanelTier$$Static implements $ISolarPanelTier {


 "getProductionRate"(): integer
 "getStorageCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISolarPanelTier$$Type = ($ISolarPanelTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISolarPanelTier_ = $ISolarPanelTier$$Type;
}}
declare module "com.enderio.conduits.api.network.node.NodeDataType" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$NodeData, $NodeData$$Type} from "com.enderio.conduits.api.network.node.NodeData"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $NodeDataType<T extends $NodeData> {

constructor(arg0: $MapCodec$$Type<(T)>, arg1: $Supplier$$Type<(T)>)

public "create"(): T
public "codec"(): $MapCodec<(T)>
public "isPersistent"(): boolean
get "persistent"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitNodeDataType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitNodeDataTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeDataType$$Type<T> = (Special.EnderioConduitNodeDataType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeDataType_<T> = $NodeDataType$$Type<(T)>;
}}
declare module "com.enderio.base.common.filter.soul.EnderSoulFilterItem$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$EnderSoulFilterMenu, $EnderSoulFilterMenu$$Type} from "com.enderio.base.common.filter.soul.EnderSoulFilterMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$AbstractFilterMenu$FilterAccess, $AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.base.common.filter.AbstractFilterMenu$FilterAccess"

export class $EnderSoulFilterItem$Type extends $Enum<($EnderSoulFilterItem$Type)> {
static readonly "BASIC": $EnderSoulFilterItem$Type


public "slotCount"(): integer
public static "values"(): ($EnderSoulFilterItem$Type)[]
public static "valueOf"(arg0: StringJS): $EnderSoulFilterItem$Type
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): $EnderSoulFilterMenu
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractFilterMenu$FilterAccess$$Type): $EnderSoulFilterMenu
public "rowCount"(): integer
public "canMatchComponents"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSoulFilterItem$Type$$Type = (("basic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSoulFilterItem$Type_ = $EnderSoulFilterItem$Type$$Type;
}}
declare module "com.enderio.base.api.filter.FilterMenuProvider" {
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $FilterMenuProvider {

 "openMenu"(arg0: $ServerPlayer$$Type, arg1: $IItemHandlerModifiable$$Type, arg2: integer, arg3: $Runnable$$Type): void

(arg0: $ServerPlayer, arg1: $IItemHandlerModifiable, arg2: integer, arg3: $Runnable): void
}

export namespace $FilterMenuProvider {
const probejs$$marker: never
}
export class $FilterMenuProvider$$Static implements $FilterMenuProvider {


 "openMenu"(arg0: $ServerPlayer$$Type, arg1: $IItemHandlerModifiable$$Type, arg2: integer, arg3: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterMenuProvider$$Type = ((arg0: $ServerPlayer, arg1: $IItemHandlerModifiable, arg2: integer, arg3: $Runnable) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterMenuProvider_ = $FilterMenuProvider$$Type;
}}
declare module "com.enderio.machines.common.blocks.slicer.SlicingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$SlicingRecipe, $SlicingRecipe$$Type} from "com.enderio.machines.common.blocks.slicer.SlicingRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SlicingRecipe$Serializer implements $RecipeSerializer<($SlicingRecipe)> {
static readonly "CODEC": $MapCodec<($SlicingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SlicingRecipe)>

constructor()

public "codec"(): $MapCodec<($SlicingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SlicingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicingRecipe$Serializer$$Type = ($SlicingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicingRecipe$Serializer_ = $SlicingRecipe$Serializer$$Type;
}}
declare module "com.enderio.base.common.block.ColdFireBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$FireBlock, $FireBlock$$Type} from "net.minecraft.world.level.block.FireBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ColdFireBlock extends $FireBlock {
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
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
static readonly "AGE": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FireBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getStateWithAge"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: integer): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColdFireBlock$$Type = ($ColdFireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColdFireBlock_ = $ColdFireBlock$$Type;
}}
declare module "com.enderio.base.common.item.misc.EnderSkullBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$StandingAndWallBlockItem, $StandingAndWallBlockItem$$Type} from "net.minecraft.world.item.StandingAndWallBlockItem"

export class $EnderSkullBlockItem extends $StandingAndWallBlockItem {
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

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $Direction$$Type)

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
export type $EnderSkullBlockItem$$Type = ($EnderSkullBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSkullBlockItem_ = $EnderSkullBlockItem$$Type;
}}
declare module "com.enderio.base.common.block.SilentPressurePlateBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$PressurePlateBlock, $PressurePlateBlock$$Type} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SilentPressurePlateBlock extends $PressurePlateBlock {
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

constructor(arg0: $PressurePlateBlock$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SilentPressurePlateBlock$$Type = ($SilentPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SilentPressurePlateBlock_ = $SilentPressurePlateBlock$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout$Builder" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$MachineInventoryLayout, $MachineInventoryLayout$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout"
import {$MultiSlotAccess, $MultiSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.MultiSlotAccess"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$MachineInventoryLayout$Builder$SlotBuilder, $MachineInventoryLayout$Builder$SlotBuilder$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout$Builder$SlotBuilder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess"

export class $MachineInventoryLayout$Builder {

constructor()

public "build"(): $MachineInventoryLayout
public "slot"(arg0: $UnaryOperator$$Type<($MachineInventoryLayout$Builder$SlotBuilder)>): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "storageSlot"(): $MachineInventoryLayout$Builder
public "slotAccess"(arg0: $SingleSlotAccess$$Type): $MachineInventoryLayout$Builder
public "slotAccess"(arg0: $MultiSlotAccess$$Type): $MachineInventoryLayout$Builder
public "capacitor"(): $MachineInventoryLayout$Builder
public "ghostSlot"(): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "setStackLimit"(arg0: integer): $MachineInventoryLayout$Builder
public "previewSlot"(): $MachineInventoryLayout$Builder
public "previewSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "outputSlot"(): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "inputSlot"(): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
set "stackLimit"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryLayout$Builder$$Type = ($MachineInventoryLayout$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInventoryLayout$Builder_ = $MachineInventoryLayout$Builder$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.state.MachineState" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$NetworkDataSlot$CodecType, $NetworkDataSlot$CodecType$$Type} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MachineStateType, $MachineStateType$$Type} from "com.enderio.machines.common.blocks.base.state.MachineStateType"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MachineState extends $Record {
static readonly "NOT_SOULBOUND": $MachineState
static readonly "CODEC": $Codec<($MachineState)>
static readonly "ACTIVE": $MachineState
static readonly "REDSTONE": $MachineState
static readonly "EMPTY_INPUT": $MachineState
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MachineState)>
static readonly "NO_SOURCE": $MachineState
static readonly "IDLE": $MachineState
static readonly "EMPTY_TANK": $MachineState
static readonly "NO_POWER": $MachineState
static readonly "FULL_OUTPUT": $MachineState
static readonly "FULL_TANK": $MachineState
static readonly "FULL_POWER": $MachineState
static readonly "NO_CAPACITOR": $MachineState
static readonly "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($Set<($MachineState)>)>

constructor(type: $MachineStateType$$Type, component: $MutableComponent$$Type)

public "type"(): $MachineStateType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "component"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineState$$Type = ({"component"?: $MutableComponent$$Type, "type"?: $MachineStateType$$Type}) | ([component?: $MutableComponent$$Type, type?: $MachineStateType$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineState_ = $MachineState$$Type;
}}
declare module "com.enderio.conduits.api.network.node.legacy.ConduitData" {
import {$ConduitDataType, $ConduitDataType$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataType"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$NodeData, $NodeData$$Type} from "com.enderio.conduits.api.network.node.NodeData"

/**
 * 
 * @deprecated
 */
export interface $ConduitData<T extends $ConduitData<(T)>> {

 "type"(): $ConduitDataType<(T)>
 "deepCopy"(): T
 "toNodeData"(): $NodeData
 "withClientChanges"(arg0: T): T
}

export namespace $ConduitData {
const CODEC: $Codec<($ConduitData<(any)>)>
const probejs$$marker: never
}
export class $ConduitData$$Static<T extends $ConduitData<(T)>> implements $ConduitData {
static readonly "CODEC": $Codec<($ConduitData<(any)>)>


 "type"(): $ConduitDataType<(T)>
 "deepCopy"(): T
 "toNodeData"(): $NodeData
 "withClientChanges"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitData$$Type<T> = ($ConduitData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitData_<T> = $ConduitData$$Type<(T)>;
}}
declare module "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduitNetworkContext" {
import {$IConduitNetwork, $IConduitNetwork$$Type} from "com.enderio.conduits.api.network.IConduitNetwork"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConduitNetworkContext, $ConduitNetworkContext$$Type} from "com.enderio.conduits.api.network.ConduitNetworkContext"
import {$ConduitNetworkContextType, $ConduitNetworkContextType$$Type} from "com.enderio.conduits.api.network.ConduitNetworkContextType"
import {$Set, $Set$$Type} from "java.util.Set"

export class $RedstoneConduitNetworkContext implements $ConduitNetworkContext<($RedstoneConduitNetworkContext)> {
static readonly "TYPE": $ConduitNetworkContextType<($RedstoneConduitNetworkContext)>

constructor()

public "isActive"(arg0: $DyeColor$$Type): boolean
public "isActive"(): boolean
public "type"(): $ConduitNetworkContextType<($RedstoneConduitNetworkContext)>
public "split"(arg0: $IConduitNetwork$$Type, arg1: $Set$$Type<($IConduitNetwork$$Type)>): $RedstoneConduitNetworkContext
public "isNew"(): boolean
public "getSignal"(arg0: $DyeColor$$Type): integer
public "mergeWith"(arg0: $ConduitNetworkContext$$Type<(any)>): $ConduitNetworkContext<(any)>
public "mergeWith"(arg0: $RedstoneConduitNetworkContext$$Type): $RedstoneConduitNetworkContext
public "nextTick"(): void
public "setSignal"(arg0: $DyeColor$$Type, arg1: integer): void
public "getSignalLastTick"(arg0: $DyeColor$$Type): integer
get "active"(): boolean
get "new"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneConduitNetworkContext$$Type = ($RedstoneConduitNetworkContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneConduitNetworkContext_ = $RedstoneConduitNetworkContext$$Type;
}}
declare module "com.enderio.base.api.soul.binding.ISoulBindable" {
import {$Soul, $Soul$$Type} from "com.enderio.base.api.soul.Soul"

export interface $ISoulBindable {

 "getBoundSoul"(): $Soul
 "hasSoul"(): boolean
 "canBind"(): boolean
 "isSoulValid"(arg0: $Soul$$Type): boolean
 "bindSoul"(arg0: $Soul$$Type): void
get "boundSoul"(): $Soul
}

export namespace $ISoulBindable {
const probejs$$marker: never
}
export class $ISoulBindable$$Static implements $ISoulBindable {


 "getBoundSoul"(): $Soul
 "hasSoul"(): boolean
 "canBind"(): boolean
 "isSoulValid"(arg0: $Soul$$Type): boolean
 "bindSoul"(arg0: $Soul$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoulBindable$$Type = ($ISoulBindable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoulBindable_ = $ISoulBindable$$Type;
}}
declare module "com.enderio.machines.common.blocks.soul_binder.SoulBindingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$SoulBindingRecipe, $SoulBindingRecipe$$Type} from "com.enderio.machines.common.blocks.soul_binder.SoulBindingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SoulBindingRecipe$Serializer implements $RecipeSerializer<($SoulBindingRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SoulBindingRecipe)>

constructor()

public "codec"(): $MapCodec<($SoulBindingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SoulBindingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$Serializer$$Type = ($SoulBindingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulBindingRecipe$Serializer_ = $SoulBindingRecipe$Serializer$$Type;
}}
declare module "com.enderio.base.common.item.tool.VoidVialItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $VoidVialItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidVialItem$$Type = ($VoidVialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidVialItem_ = $VoidVialItem$$Type;
}}
declare module "com.enderio.conduits.common.redstone.RedstoneFilterItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RedstoneInsertFilter, $RedstoneInsertFilter$$Type} from "com.enderio.conduits.common.redstone.RedstoneInsertFilter"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RedstoneExtractFilter, $RedstoneExtractFilter$$Type} from "com.enderio.conduits.common.redstone.RedstoneExtractFilter"

export class $RedstoneFilterItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
static readonly "TIMER_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneExtractFilter)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "NOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInsertFilter)>
static readonly "OR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInsertFilter)>
static readonly "SENSOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneExtractFilter)>
static readonly "COUNT_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInsertFilter)>
static readonly "NOT_FILTER_PROVIDER_INSERT": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInsertFilter)>
static readonly "AND_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInsertFilter)>
static readonly "NAND_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInsertFilter)>
static readonly "TLATCH_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInsertFilter)>
static readonly "XNOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInsertFilter)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "NOT_FILTER_PROVIDER_EXTRACT": $ICapabilityProvider<($ItemStack), (void), ($RedstoneExtractFilter)>
static readonly "XOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInsertFilter)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Supplier$$Type<($MenuType$$Type<(any)>)>)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneFilterItem$$Type = ($RedstoneFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneFilterItem_ = $RedstoneFilterItem$$Type;
}}
declare module "com.enderio.core.common.recipes.OutputStack" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $OutputStack extends $Record {
static readonly "EMPTY": $OutputStack

constructor(stack: $Either$$Type<($ItemStack$$Type), ($FluidStack$$Type)>)

public "getItem"(): $ItemStack
public "stack"(): $Either<($ItemStack), ($FluidStack)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: $FluidStack$$Type): $OutputStack
public static "of"(arg0: $ItemStack$$Type): $OutputStack
public "isFluid"(): boolean
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getFluid"(): $FluidStack
public "isItem"(): boolean
public static "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $OutputStack
get "item"(): $ItemStack
get "empty"(): boolean
get "fluid"(): boolean
get "fluid"(): $FluidStack
get "item"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputStack$$Type = ({"stack"?: $Either$$Type<($ItemStack$$Type), ($FluidStack$$Type)>}) | ([stack?: $Either$$Type<($ItemStack$$Type), ($FluidStack$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputStack_ = $OutputStack$$Type;
}}
declare module "com.enderio.core.common.network.NetworkDataSlot" {
import {$NetworkDataSlot$CodecType, $NetworkDataSlot$CodecType$$Type} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$NetworkDataSlot$Type, $NetworkDataSlot$Type$$Type} from "com.enderio.core.common.network.NetworkDataSlot$Type"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $NetworkDataSlot<T> {
static readonly "RESOURCE_LOCATION": $NetworkDataSlot$CodecType<($ResourceLocation)>
static readonly "FLUID_STACK": $NetworkDataSlot$CodecType<($FluidStack)>
static readonly "FLOAT": $NetworkDataSlot$CodecType<(float)>
static readonly "BOOL": $NetworkDataSlot$CodecType<(boolean)>
static readonly "STRING": $NetworkDataSlot$CodecType<(StringJS)>
static readonly "INT": $NetworkDataSlot$CodecType<(integer)>
static readonly "LONG": $NetworkDataSlot$CodecType<(long)>

constructor(arg0: $NetworkDataSlot$Type$$Type<(T)>, arg1: $Supplier$$Type<(T)>, arg2: $Consumer$$Type<(T)>)

public "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "read"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: boolean): $Tag
public "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "doesNeedUpdate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDataSlot$$Type<T> = ($NetworkDataSlot<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkDataSlot_<T> = $NetworkDataSlot$$Type<(T)>;
}}
declare module "com.enderio.machines.common.io.fluid.MachineTankLayout$Builder" {
import {$MachineTankLayout, $MachineTankLayout$$Type} from "com.enderio.machines.common.io.fluid.MachineTankLayout"
import {$TankAccess, $TankAccess$$Type} from "com.enderio.machines.common.io.fluid.TankAccess"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $MachineTankLayout$Builder {

constructor()

public "build"(): $MachineTankLayout
public "tank"(arg0: $TankAccess$$Type, arg1: integer, arg2: boolean, arg3: boolean, arg4: $Predicate$$Type<($FluidStack)>): $MachineTankLayout$Builder
public "tank"(arg0: $TankAccess$$Type, arg1: integer, arg2: $Predicate$$Type<($FluidStack)>): $MachineTankLayout$Builder
public "tank"(arg0: $TankAccess$$Type, arg1: integer): $MachineTankLayout$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTankLayout$Builder$$Type = ($MachineTankLayout$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineTankLayout$Builder_ = $MachineTankLayout$Builder$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.DarkSteelChestplateItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$DarkSteelArmor, $DarkSteelArmor$$Type} from "com.enderio.armory.common.item.darksteel.DarkSteelArmor"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $DarkSteelChestplateItem extends $DarkSteelArmor {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelChestplateItem$$Type = ($DarkSteelChestplateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelChestplateItem_ = $DarkSteelChestplateItem$$Type;
}}
declare module "com.enderio.base.common.item.tool.LevitationStaffItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PoweredToggledItem, $PoweredToggledItem$$Type} from "com.enderio.base.common.item.tool.PoweredToggledItem"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export class $LevitationStaffItem extends $PoweredToggledItem {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IFluidHandlerItem)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getMaxEnergy"(): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevitationStaffItem$$Type = ($LevitationStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevitationStaffItem_ = $LevitationStaffItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout$Builder$SlotBuilder" {
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $MachineInventoryLayout$Builder$SlotBuilder {


public "extract"(): $MachineInventoryLayout$Builder$SlotBuilder
public "insert"(): $MachineInventoryLayout$Builder$SlotBuilder
public "filter"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder$SlotBuilder
public "stackLimit"(arg0: integer): $MachineInventoryLayout$Builder$SlotBuilder
public "guiInsert"(): $MachineInventoryLayout$Builder$SlotBuilder
public "guiExtract"(): $MachineInventoryLayout$Builder$SlotBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryLayout$Builder$SlotBuilder$$Type = ($MachineInventoryLayout$Builder$SlotBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInventoryLayout$Builder$SlotBuilder_ = $MachineInventoryLayout$Builder$SlotBuilder$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedSandBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$ColorRGBA, $ColorRGBA$$Type} from "net.minecraft.util.ColorRGBA"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ColoredFallingBlock, $ColoredFallingBlock$$Type} from "net.minecraft.world.level.block.ColoredFallingBlock"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PaintedSandBlock extends $ColoredFallingBlock implements $EntityBlock, $PaintedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ColoredFallingBlock)>
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
readonly "dustColor": $ColorRGBA
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDustColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedSandBlock$$Type = ($PaintedSandBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedSandBlock_ = $PaintedSandBlock$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.DarkSteelArmor" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IDarkSteelItem, $IDarkSteelItem$$Type} from "com.enderio.armory.common.item.darksteel.IDarkSteelItem"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$EmpoweredUpgrade, $EmpoweredUpgrade$$Type} from "com.enderio.armory.common.item.darksteel.upgrades.empowered.EmpoweredUpgrade"

export class $DarkSteelArmor extends $ArmorItem implements $IDarkSteelItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $ArmorItem$Type$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getEmpoweredUpgrade"(arg0: $ItemStack$$Type): $Optional<($EmpoweredUpgrade)>
public "addDurabilityTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isDurabilityBarVisible"(arg0: $ItemStack$$Type): boolean
public "createFullyUpgradedStack"(arg0: $Item$$Type): $ItemStack
public "addCurrentUpgradeTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
public "addAvailableUpgradesTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelArmor$$Type = ($DarkSteelArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelArmor_ = $DarkSteelArmor$$Type;
}}
declare module "com.enderio.conduits.api.connection.config.IOConnectionConfig" {
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConduitRedstoneSignalAware, $ConduitRedstoneSignalAware$$Type} from "com.enderio.conduits.api.ConduitRedstoneSignalAware"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"

export interface $IOConnectionConfig extends $ConnectionConfig {

 "isConnected"(): boolean
 "isInsert"(): boolean
 "isExtract"(): boolean
 "insertChannel"(): $DyeColor
 "extractChannel"(): $DyeColor
 "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
 "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
 "type"(): $ConnectionConfigType<(any)>
 "disconnected"(): $ConnectionConfig
 "reconnected"(): $ConnectionConfig
get "connected"(): boolean
get "insert"(): boolean
get "extract"(): boolean
}

export namespace $IOConnectionConfig {
const probejs$$marker: never
}
export class $IOConnectionConfig$$Static implements $IOConnectionConfig {


 "isConnected"(): boolean
 "isInsert"(): boolean
 "isExtract"(): boolean
 "insertChannel"(): $DyeColor
 "extractChannel"(): $DyeColor
 "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
 "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
 "type"(): $ConnectionConfigType<(any)>
 "disconnected"(): $ConnectionConfig
 "reconnected"(): $ConnectionConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOConnectionConfig$$Type = ($IOConnectionConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOConnectionConfig_ = $IOConnectionConfig$$Type;
}}
declare module "com.enderio.armory.api.capability.IUpgradeTier" {
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$IDarkSteelUpgrade, $IDarkSteelUpgrade$$Type} from "com.enderio.armory.api.capability.IDarkSteelUpgrade"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IUpgradeTier {

 "getDisplayName"(): $Component
 "getLevel"(): integer
 "getFactory"(): $Supplier<($IDarkSteelUpgrade)>
 "getActivationCost"(): $ModConfigSpec$ConfigValue<(integer)>
get "displayName"(): $Component
get "level"(): integer
get "factory"(): $Supplier<($IDarkSteelUpgrade)>
get "activationCost"(): $ModConfigSpec$ConfigValue<(integer)>
}

export namespace $IUpgradeTier {
const probejs$$marker: never
}
export class $IUpgradeTier$$Static implements $IUpgradeTier {


 "getDisplayName"(): $Component
 "getLevel"(): integer
 "getFactory"(): $Supplier<($IDarkSteelUpgrade)>
 "getActivationCost"(): $ModConfigSpec$ConfigValue<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeTier$$Type = ($IUpgradeTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeTier_ = $IUpgradeTier$$Type;
}}
declare module "com.enderio.base.common.block.glass.GlassIdentifier" {
import {$GlassLighting, $GlassLighting$$Type} from "com.enderio.base.common.block.glass.GlassLighting"
import {$GlassCollisionPredicate, $GlassCollisionPredicate$$Type} from "com.enderio.base.common.block.glass.GlassCollisionPredicate"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GlassIdentifier extends $Record {

constructor(lighting: $GlassLighting$$Type, collisionPredicate: $GlassCollisionPredicate$$Type, explosion_resistance: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "glassName"(): StringJS
public "lighting"(): $GlassLighting
public "withoutLight"(): $GlassIdentifier
public "withCollision"(arg0: $GlassCollisionPredicate$$Type): $GlassIdentifier
public "collisionPredicate"(): $GlassCollisionPredicate
public "explosion_resistance"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassIdentifier$$Type = ({"lighting"?: $GlassLighting$$Type, "collisionPredicate"?: $GlassCollisionPredicate$$Type, "explosion_resistance"?: boolean}) | ([lighting?: $GlassLighting$$Type, collisionPredicate?: $GlassCollisionPredicate$$Type, explosion_resistance?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassIdentifier_ = $GlassIdentifier$$Type;
}}
declare module "com.enderio.machines.common.blocks.alloy.AlloySmeltingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AlloySmeltingRecipe$Input extends $Record implements $RecipeInput {

constructor(inputs: $List$$Type<($ItemStack$$Type)>, inputsConsumed: integer)

public "getItem"(arg0: integer): $ItemStack
public "inputs"(): $List<($ItemStack)>
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "inputsConsumed"(): integer
public "getFirstPopulated"(): $ItemStack
public "withInputsConsumed"(arg0: integer): $AlloySmeltingRecipe$Input
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "firstPopulated"(): $ItemStack
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloySmeltingRecipe$Input$$Type = ({"inputs"?: $List$$Type<($ItemStack$$Type)>, "inputsConsumed"?: integer}) | ([inputs?: $List$$Type<($ItemStack$$Type)>, inputsConsumed?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloySmeltingRecipe$Input_ = $AlloySmeltingRecipe$Input$$Type;
}}
declare module "com.enderio.base.common.block.SilentWeightedPressurePlateBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$WeightedPressurePlateBlock, $WeightedPressurePlateBlock$$Type} from "net.minecraft.world.level.block.WeightedPressurePlateBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SilentWeightedPressurePlateBlock extends $WeightedPressurePlateBlock {
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

constructor(arg0: $WeightedPressurePlateBlock$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SilentWeightedPressurePlateBlock$$Type = ($SilentWeightedPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SilentWeightedPressurePlateBlock_ = $SilentWeightedPressurePlateBlock$$Type;
}}
declare module "com.enderio.machines.common.blocks.vat.FermentingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineRecipe, $MachineRecipe$$Type} from "com.enderio.machines.common.blocks.base.MachineRecipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$FermentingRecipe$Input, $FermentingRecipe$Input$$Type} from "com.enderio.machines.common.blocks.vat.FermentingRecipe$Input"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$OutputStack, $OutputStack$$Type} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $FermentingRecipe extends $Record implements $MachineRecipe<($FermentingRecipe$Input)> {

constructor(input: $SizedFluidIngredient$$Type, leftReagent: $TagKey$$Type<($Item)>, rightReagent: $TagKey$$Type<($Item)>, output: $FluidStack$$Type, ticks: integer)

public "input"(): $SizedFluidIngredient
public "output"(): $FluidStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $FermentingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "craft"(arg0: $FermentingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "ticks"(): integer
public static "getModifier"(arg0: $ItemStack$$Type, arg1: $TagKey$$Type<($Item)>): double
public "leftReagent"(): $TagKey<($Item)>
public "rightReagent"(): $TagKey<($Item)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getEnergyCost"(arg0: $FermentingRecipe$Input$$Type): integer
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $FermentingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $FermentingRecipe$Input$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentingRecipe$$Type = ({"output"?: $FluidStack$$Type, "leftReagent"?: $TagKey$$Type<($Item)>, "rightReagent"?: $TagKey$$Type<($Item)>, "input"?: $SizedFluidIngredient$$Type, "ticks"?: integer}) | ([output?: $FluidStack$$Type, leftReagent?: $TagKey$$Type<($Item)>, rightReagent?: $TagKey$$Type<($Item)>, input?: $SizedFluidIngredient$$Type, ticks?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FermentingRecipe_ = $FermentingRecipe$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.DarkSteelPickaxeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CreativeTabVariants, $CreativeTabVariants$$Type} from "com.enderio.core.common.item.CreativeTabVariants"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IDarkSteelItem, $IDarkSteelItem$$Type} from "com.enderio.armory.common.item.darksteel.IDarkSteelItem"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$PickaxeItem, $PickaxeItem$$Type} from "net.minecraft.world.item.PickaxeItem"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EmpoweredUpgrade, $EmpoweredUpgrade$$Type} from "com.enderio.armory.common.item.darksteel.upgrades.empowered.EmpoweredUpgrade"

export class $DarkSteelPickaxeItem extends $PickaxeItem implements $IDarkSteelItem, $CreativeTabVariants {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "addCurrentUpgradeTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getEmpoweredUpgrade"(arg0: $ItemStack$$Type): $Optional<($EmpoweredUpgrade)>
public "addDurabilityTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isDurabilityBarVisible"(arg0: $ItemStack$$Type): boolean
public "createFullyUpgradedStack"(arg0: $Item$$Type): $ItemStack
public "addAvailableUpgradesTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelPickaxeItem$$Type = ($DarkSteelPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelPickaxeItem_ = $DarkSteelPickaxeItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.enderface.EnderfaceBlockEntity" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EIOBlockEntity, $EIOBlockEntity$$Type} from "com.enderio.base.common.block.EIOBlockEntity"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderfaceBlockEntity extends $EIOBlockEntity {
static readonly "DATA": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getLastUiPitch"(): float
public "getLastUiYaw"(): float
public "setLastUiPitch"(arg0: float): void
public "setLastUiYaw"(arg0: float): void
public "canBeUsedByPlayer"(arg0: $Player$$Type): boolean
public "getLastUiDistance"(): float
public "setLastUiDistance"(arg0: float): void
public static "canPlayerInteractWithBlock"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "lastUiPitch"(): float
get "lastUiYaw"(): float
set "lastUiPitch"(value: float)
set "lastUiYaw"(value: float)
get "lastUiDistance"(): float
set "lastUiDistance"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderfaceBlockEntity$$Type = ($EnderfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderfaceBlockEntity_ = $EnderfaceBlockEntity$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.DarkSteelUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IDarkSteelUpgrade, $IDarkSteelUpgrade$$Type} from "com.enderio.armory.api.capability.IDarkSteelUpgrade"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $DarkSteelUpgradeItem extends $Item implements $AdvancedTooltipProvider {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $ModConfigSpec$ConfigValue$$Type<(integer)>, arg2: $Supplier$$Type<($IDarkSteelUpgrade$$Type)>)

public "getUpgrade"(): $Supplier<($IDarkSteelUpgrade)>
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getLevelsRequired"(): $ModConfigSpec$ConfigValue<(integer)>
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "upgrade"(): $Supplier<($IDarkSteelUpgrade)>
get "levelsRequired"(): $ModConfigSpec$ConfigValue<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelUpgradeItem$$Type = ($DarkSteelUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelUpgradeItem_ = $DarkSteelUpgradeItem$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.DarkSteelBootsItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$DarkSteelArmor, $DarkSteelArmor$$Type} from "com.enderio.armory.common.item.darksteel.DarkSteelArmor"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $DarkSteelBootsItem extends $DarkSteelArmor {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "addCurrentUpgradeTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelBootsItem$$Type = ($DarkSteelBootsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelBootsItem_ = $DarkSteelBootsItem$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedFenceBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FenceBlock, $FenceBlock$$Type} from "net.minecraft.world.level.block.FenceBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PaintedFenceBlock extends $FenceBlock implements $EntityBlock, $PaintedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedFenceBlock$$Type = ($PaintedFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedFenceBlock_ = $PaintedFenceBlock$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.upgrades.empowered.EmpoweredUpgradeTier" {
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$IDarkSteelUpgrade, $IDarkSteelUpgrade$$Type} from "com.enderio.armory.api.capability.IDarkSteelUpgrade"
import {$IUpgradeTier, $IUpgradeTier$$Type} from "com.enderio.armory.api.capability.IUpgradeTier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $EmpoweredUpgradeTier extends $Enum<($EmpoweredUpgradeTier)> implements $IUpgradeTier {
static readonly "ONE": $EmpoweredUpgradeTier
static readonly "FOUR": $EmpoweredUpgradeTier
static readonly "TWO": $EmpoweredUpgradeTier
static readonly "THREE": $EmpoweredUpgradeTier


public "getDisplayName"(): $Component
public "getLevel"(): integer
public static "values"(): ($EmpoweredUpgradeTier)[]
public static "valueOf"(arg0: StringJS): $EmpoweredUpgradeTier
public "getFactory"(): $Supplier<($IDarkSteelUpgrade)>
public "getMaxStorage"(): integer
public "getAttackSpeedIncrease"(): double
public "getMobHeadChance"(): double
public "getActivationCost"(): $ModConfigSpec$ConfigValue<(integer)>
public "getAttackDamageIncrease"(): integer
public "getDamageAbsorptionChance"(): float
get "displayName"(): $Component
get "level"(): integer
get "factory"(): $Supplier<($IDarkSteelUpgrade)>
get "maxStorage"(): integer
get "attackSpeedIncrease"(): double
get "mobHeadChance"(): double
get "activationCost"(): $ModConfigSpec$ConfigValue<(integer)>
get "attackDamageIncrease"(): integer
get "damageAbsorptionChance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmpoweredUpgradeTier$$Type = (("one") | ("two") | ("three") | ("four"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmpoweredUpgradeTier_ = $EmpoweredUpgradeTier$$Type;
}}
declare module "com.enderio.machines.common.blocks.alloy.AlloySmeltingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AlloySmeltingRecipe, $AlloySmeltingRecipe$$Type} from "com.enderio.machines.common.blocks.alloy.AlloySmeltingRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AlloySmeltingRecipe$Serializer implements $RecipeSerializer<($AlloySmeltingRecipe)> {
static readonly "CODEC": $MapCodec<($AlloySmeltingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AlloySmeltingRecipe)>

constructor()

public "codec"(): $MapCodec<($AlloySmeltingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AlloySmeltingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloySmeltingRecipe$Serializer$$Type = ($AlloySmeltingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloySmeltingRecipe$Serializer_ = $AlloySmeltingRecipe$Serializer$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedSlabBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SlabType, $SlabType$$Type} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SlabBlock, $SlabBlock$$Type} from "net.minecraft.world.level.block.SlabBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PaintedSlabBlock extends $SlabBlock implements $EntityBlock, $PaintedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SlabBlock)>
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
static readonly "TYPE": $EnumProperty<($SlabType)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedSlabBlock$$Type = ($PaintedSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedSlabBlock_ = $PaintedSlabBlock$$Type;
}}
declare module "com.enderio.conduits.api.ConduitType$Builder$SimpleType" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConduitType$Builder, $ConduitType$Builder$$Type} from "com.enderio.conduits.api.ConduitType$Builder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ConduitType$Builder$SimpleType<T extends $Conduit<(T), (any)>> extends $Record implements $ConduitType<(T)> {


public static "of"<T extends $Conduit<(T), (any)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType<(T)>
public static "of"<T extends $Conduit<(T), (any)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType<(T)>
public static "builder"<T extends $Conduit<(T), (any)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType$Builder<(T)>
public static "builder"<T extends $Conduit<(T), (any)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType$Builder<(T)>
public "codec"(): $MapCodec<(T)>
public "exposedCapabilities"(): $Set<($BlockCapability<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitType$Builder$SimpleType$$Type<T> = ({"codec"?: $MapCodec$$Type<(any)>, "exposedCapabilities"?: $Set$$Type<($BlockCapability$$Type<(never), (never)>)>}) | ([codec?: $MapCodec$$Type<(any)>, exposedCapabilities?: $Set$$Type<($BlockCapability$$Type<(never), (never)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitType$Builder$SimpleType_<T> = $ConduitType$Builder$SimpleType$$Type<(T)>;
}}
declare module "com.enderio.base.common.paint.block.PaintedWoodenPressurePlateBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PressurePlateBlock, $PressurePlateBlock$$Type} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PaintedWoodenPressurePlateBlock extends $PressurePlateBlock implements $EntityBlock, $PaintedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedWoodenPressurePlateBlock$$Type = ($PaintedWoodenPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedWoodenPressurePlateBlock_ = $PaintedWoodenPressurePlateBlock$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.block.ProgressMachineBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$MachineBlock, $MachineBlock$$Type} from "com.enderio.machines.common.blocks.base.block.MachineBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$RegiliteBlockEntity, $RegiliteBlockEntity$$Type} from "com.enderio.regilite.holder.RegiliteBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ProgressMachineBlock<T extends $MachineBlockEntity> extends $MachineBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $RegiliteBlockEntity$$Type<(T)>, arg1: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressMachineBlock$$Type<T> = ($ProgressMachineBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressMachineBlock_<T> = $ProgressMachineBlock$$Type<(T)>;
}}
declare module "com.enderio.base.common.item.capacitors.CapacitorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $CapacitorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorItem$$Type = ($CapacitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacitorItem_ = $CapacitorItem$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.item.ItemConduitTicker" {
import {$IConduitNetwork, $IConduitNetwork$$Type} from "com.enderio.conduits.api.network.IConduitNetwork"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$ItemConduit, $ItemConduit$$Type} from "com.enderio.conduits.common.conduit.type.item.ItemConduit"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $ItemConduitTicker implements $ConduitTicker<($ItemConduit)> {
static readonly "INSTANCE": $ItemConduitTicker

constructor()

public "tick"(arg0: $ServerLevel$$Type, arg1: $ItemConduit$$Type, arg2: $IConduitNetwork$$Type): void
public "tick"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type<(any), (any)>, arg2: $IConduitNetwork$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConduitTicker$$Type = ($ItemConduitTicker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemConduitTicker_ = $ItemConduitTicker$$Type;
}}
declare module "com.enderio.base.common.filter.item.general.EnderItemFilter" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DamageFilterMode, $DamageFilterMode$$Type} from "com.enderio.base.common.filter.item.general.DamageFilterMode"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemFilter, $ItemFilter$$Type} from "com.enderio.base.api.filter.ItemFilter"
import {$List, $List$$Type} from "java.util.List"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnderItemFilter extends $Record implements $ItemFilter {
static readonly "CODEC": $Codec<($EnderItemFilter)>
static readonly "EMPTY": $EnderItemFilter
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnderItemFilter)>

constructor(matches: $NonNullList$$Type<($ItemStack$$Type)>, isDenyList: boolean, shouldCompareComponents: boolean, damageFilterMode: $DamageFilterMode$$Type)
constructor(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean, arg3: $DamageFilterMode$$Type)
constructor(arg0: integer, arg1: boolean, arg2: boolean, arg3: $DamageFilterMode$$Type)
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $IItemHandler$$Type, arg1: $ItemStack$$Type): $ItemStack
public "matches"(): $NonNullList<($ItemStack)>
public "isDenyList"(): boolean
public "damageFilterMode"(): $DamageFilterMode
public "shouldCompareComponents"(): boolean
get "denyList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderItemFilter$$Type = ({"damageFilterMode"?: $DamageFilterMode$$Type, "matches"?: $NonNullList$$Type<($ItemStack$$Type)>, "isDenyList"?: boolean, "shouldCompareComponents"?: boolean}) | ([damageFilterMode?: $DamageFilterMode$$Type, matches?: $NonNullList$$Type<($ItemStack$$Type)>, isDenyList?: boolean, shouldCompareComponents?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderItemFilter_ = $EnderItemFilter$$Type;
}}
declare module "com.enderio.base.common.item.capacitors.LootCapacitorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CapacitorItem, $CapacitorItem$$Type} from "com.enderio.base.common.item.capacitors.CapacitorItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $LootCapacitorItem extends $CapacitorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCapacitorItem$$Type = ($LootCapacitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCapacitorItem_ = $LootCapacitorItem$$Type;
}}
declare module "com.enderio.base.common.item.tool.ElectromagnetItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PoweredToggledItem, $PoweredToggledItem$$Type} from "com.enderio.base.common.item.tool.PoweredToggledItem"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export class $ElectromagnetItem extends $PoweredToggledItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getMaxEnergy"(): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectromagnetItem$$Type = ($ElectromagnetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectromagnetItem_ = $ElectromagnetItem$$Type;
}}
declare module "com.enderio.machines.common.io.fluid.FluidItemInteractive" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FluidTankUser, $FluidTankUser$$Type} from "com.enderio.machines.common.attachment.FluidTankUser"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TankAccess, $TankAccess$$Type} from "com.enderio.machines.common.io.fluid.TankAccess"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"

export interface $FluidItemInteractive {

 "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
}

export namespace $FluidItemInteractive {
const probejs$$marker: never
}
export class $FluidItemInteractive$$Static implements $FluidItemInteractive {


 "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidItemInteractive$$Type = ($FluidItemInteractive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidItemInteractive_ = $FluidItemInteractive$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess" {
import {$MultiSlotAccess, $MultiSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.MultiSlotAccess"
import {$MachineInventoryHolder, $MachineInventoryHolder$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineInventoryHolder"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineInventory, $MachineInventory$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventory"

export class $SingleSlotAccess {

constructor()

public "getIndex"(): integer
public "isSlot"(arg0: integer): boolean
public "insertItem"(arg0: $MachineInventory$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "insertItem"(arg0: $MachineInventoryHolder$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: $MachineInventoryHolder$$Type, arg1: $ItemStack$$Type): void
public "setStackInSlot"(arg0: $MachineInventory$$Type, arg1: $ItemStack$$Type): void
public "getItemStack"(arg0: $MachineInventoryHolder$$Type): $ItemStack
public "getItemStack"(arg0: $MachineInventory$$Type): $ItemStack
public "getItemStack"(arg0: $Container$$Type): $ItemStack
public "wrapToMulti"(): $MultiSlotAccess
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleSlotAccess$$Type = ($SingleSlotAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleSlotAccess_ = $SingleSlotAccess$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity" {
import {$SideConfig, $SideConfig$$Type} from "com.enderio.base.api.capability.SideConfig"
import {$ISoulBindable, $ISoulBindable$$Type} from "com.enderio.base.api.soul.binding.ISoulBindable"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IOConfig, $IOConfig$$Type} from "com.enderio.machines.common.io.IOConfig"
import {$EIOBlockEntity, $EIOBlockEntity$$Type} from "com.enderio.base.common.block.EIOBlockEntity"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MachineInventory, $MachineInventory$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IOConfigurable, $IOConfigurable$$Type} from "com.enderio.base.api.io.IOConfigurable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Wrenchable, $Wrenchable$$Type} from "com.enderio.base.common.blockentity.Wrenchable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$MachineInventoryHolder, $MachineInventoryHolder$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineInventoryHolder"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MachineState, $MachineState$$Type} from "com.enderio.machines.common.blocks.base.state.MachineState"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$IOMode, $IOMode$$Type} from "com.enderio.base.api.io.IOMode"

export class $MachineBlockEntity extends $EIOBlockEntity implements $MenuProvider, $Wrenchable, $IOConfigurable, $MachineInventoryHolder {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($ISoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean)

public "isActive"(): boolean
public "getDisplayName"(): $Component
public "canAct"(): boolean
public "canAct"(arg0: integer): boolean
public "serverTick"(): void
public "getModelData"(): $ModelData
public "getInventory"(): $MachineInventory
public "onWrenched"(arg0: $UseOnContext$$Type): $ItemInteractionResult
public "hasInventory"(): boolean
public "getIOConfig"(): $IOConfig
public "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
public "getIOMode"(arg0: $Direction$$Type): $IOMode
public "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
public "getDefaultIOConfig"(): $IOConfig
public "isIOConfigMutable"(): boolean
public "getMachineOwner"(): $UUID
public "getMachineStates"(): $Set<($MachineState)>
public "clientSetMachineStates"(arg0: $Set$$Type<($MachineState$$Type)>): void
public "getRedstoneControl"(): $RedstoneControl
public "setRedstoneControl"(arg0: $RedstoneControl$$Type): void
public "setMachineOwner"(arg0: $UUID$$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "supportsRedstoneControl"(): boolean
public "shouldRenderIOConfigOverlay"(): boolean
public "getNextIOMode"(arg0: $Direction$$Type): $IOMode
public "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
public "cycleIOMode"(arg0: $Direction$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "displayName"(): $Component
get "modelData"(): $ModelData
get "inventory"(): $MachineInventory
get "iOConfig"(): $IOConfig
get "defaultIOConfig"(): $IOConfig
get "iOConfigMutable"(): boolean
get "machineOwner"(): $UUID
get "machineStates"(): $Set<($MachineState)>
get "redstoneControl"(): $RedstoneControl
set "redstoneControl"(value: $RedstoneControl$$Type)
set "machineOwner"(value: $UUID$$Type)
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineBlockEntity$$Type = ($MachineBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineBlockEntity_ = $MachineBlockEntity$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.bundle.SlotType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ConduitDataAccessor, $ConduitDataAccessor$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataAccessor"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Vector2i, $Vector2i$$Type} from "org.joml.Vector2i"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$RedstoneConduitConnectionConfig, $RedstoneConduitConnectionConfig$$Type} from "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduitConnectionConfig"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.conduits.api.network.ConduitBlockConnection"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.api.bundle.ConduitBundle"

export class $RedstoneConduit extends $Record implements $Conduit<($RedstoneConduit), ($RedstoneConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($RedstoneConduit)>
static readonly "INSERT_FILTER_SLOT": integer
static readonly "EXTRACT_FILTER_SLOT": integer

constructor(texture: $ResourceLocation$$Type, activeTexture: $ResourceLocation$$Type, description: $Component$$Type)

public "type"(): $ConduitType<($RedstoneConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $RedstoneConduit$$Type): integer
public "compareTo"(arg0: any): integer
public "ticker"(): $ConduitTicker<(any)>
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "texture"(): $ResourceLocation
public "description"(): $Component
public "hasMenu"(): boolean
public "activeTexture"(): $ResourceLocation
public "getInventorySize"(): integer
public "networkTickRate"(): integer
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $RedstoneConduitConnectionConfig
public "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type): $CompoundTag
public "connectionConfigType"(): $ConnectionConfigType<($RedstoneConduitConnectionConfig)>
public "onConnectionsUpdated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "getInventorySlotPosition"(arg0: integer): $Vector2i
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
/**
 * 
 * @deprecated
 */
public "copyLegacyData"(arg0: $IConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
public "onCreated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "onConnectTo"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): void
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "onRemoved"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "hasConnectionDelay"(): boolean
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $IConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
public "canConnectToConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
public "canConnectConduits"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): boolean
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
public "hasServerConnectionChecks"(): boolean
get "inventorySize"(): integer
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneConduit$$Type = ({"activeTexture"?: $ResourceLocation$$Type, "description"?: $Component$$Type, "texture"?: $ResourceLocation$$Type}) | ([activeTexture?: $ResourceLocation$$Type, description?: $Component$$Type, texture?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneConduit_ = $RedstoneConduit$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedWallBlock" {
import {$WallSide, $WallSide$$Type} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$WallBlock, $WallBlock$$Type} from "net.minecraft.world.level.block.WallBlock"

export class $PaintedWallBlock extends $WallBlock implements $EntityBlock, $PaintedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedWallBlock$$Type = ($PaintedWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedWallBlock_ = $PaintedWallBlock$$Type;
}}
declare module "com.enderio.base.common.paint.PaintingTrigger$TriggerInstance" {
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PaintingTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, paint: $Block$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Block$$Type): boolean
public "paint"(): $Block
public "player"(): $Optional<($ContextAwarePredicate)>
public static "painted"(arg0: $Block$$Type): $Criterion<($PaintingTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "paint"?: $Block$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, paint?: $Block$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingTrigger$TriggerInstance_ = $PaintingTrigger$TriggerInstance$$Type;
}}
declare module "com.enderio.conduits.api.ConduitRedstoneSignalAware" {
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export interface $ConduitRedstoneSignalAware {

 "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean

(arg0: $DyeColor): boolean
}

export namespace $ConduitRedstoneSignalAware {
const NONE: $ConduitRedstoneSignalAware
const probejs$$marker: never
}
export class $ConduitRedstoneSignalAware$$Static implements $ConduitRedstoneSignalAware {
static readonly "NONE": $ConduitRedstoneSignalAware


 "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitRedstoneSignalAware$$Type = ((arg0: $DyeColor) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitRedstoneSignalAware_ = $ConduitRedstoneSignalAware$$Type;
}}
declare module "com.enderio.machines.common.blocks.vat.FermentingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FermentingRecipe, $FermentingRecipe$$Type} from "com.enderio.machines.common.blocks.vat.FermentingRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FermentingRecipe$Serializer implements $RecipeSerializer<($FermentingRecipe)> {
static readonly "CODEC": $MapCodec<($FermentingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FermentingRecipe)>

constructor()

public "codec"(): $MapCodec<($FermentingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FermentingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentingRecipe$Serializer$$Type = ($FermentingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FermentingRecipe$Serializer_ = $FermentingRecipe$Serializer$$Type;
}}
declare module "com.enderio.machines.common.block.CapacitorBankBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CapacityTier, $CapacityTier$$Type} from "com.enderio.machines.common.blockentity.multienergy.CapacityTier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LegacyMachineBlock, $LegacyMachineBlock$$Type} from "com.enderio.machines.common.block.LegacyMachineBlock"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LegacyMachineBlockEntity, $LegacyMachineBlockEntity$$Type} from "com.enderio.machines.common.blockentity.base.LegacyMachineBlockEntity"
import {$RegiliteBlockEntity, $RegiliteBlockEntity$$Type} from "com.enderio.regilite.holder.RegiliteBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$AdvancementEvent$AdvancementEarnEvent, $AdvancementEvent$AdvancementEarnEvent$$Type} from "net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CapacitorBankBlock extends $LegacyMachineBlock implements $AdvancedTooltipProvider {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_ENTITY_TYPE_CODEC": $Codec<($Supplier<($BlockEntityType<($LegacyMachineBlockEntity)>)>)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
readonly "tier": $CapacityTier
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean
static readonly "PLACE_ADVANCEMENT_ID": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $RegiliteBlockEntity$$Type<($LegacyMachineBlockEntity$$Type)>, arg2: $CapacityTier$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public static "onAdvancement"(arg0: $AdvancementEvent$AdvancementEarnEvent$$Type): void
public "getTier"(): $CapacityTier
public static "rightClickBlock"(arg0: $PlayerInteractEvent$RightClickBlock$$Type): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "asHolder"(): $Holder<(any)>
get "tier"(): $CapacityTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorBankBlock$$Type = ($CapacitorBankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacitorBankBlock_ = $CapacitorBankBlock$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.DarkSteelSwordItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifierEvent, $ItemAttributeModifierEvent$$Type} from "net.neoforged.neoforge.event.ItemAttributeModifierEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EntityTeleportEvent, $EntityTeleportEvent$$Type} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IDarkSteelItem, $IDarkSteelItem$$Type} from "com.enderio.armory.common.item.darksteel.IDarkSteelItem"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"
import {$EmpoweredUpgrade, $EmpoweredUpgrade$$Type} from "com.enderio.armory.common.item.darksteel.upgrades.empowered.EmpoweredUpgrade"

export class $DarkSteelSwordItem extends $SwordItem implements $AdvancedTooltipProvider, $IDarkSteelItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
public static "onEntityTeleport"(arg0: $EntityTeleportEvent$$Type): void
public static "applyAttackModifiers"(arg0: $ItemAttributeModifierEvent$$Type): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getEmpoweredUpgrade"(arg0: $ItemStack$$Type): $Optional<($EmpoweredUpgrade)>
public "addDurabilityTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isDurabilityBarVisible"(arg0: $ItemStack$$Type): boolean
public "createFullyUpgradedStack"(arg0: $Item$$Type): $ItemStack
public "addCurrentUpgradeTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
public "addAvailableUpgradesTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelSwordItem$$Type = ($DarkSteelSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelSwordItem_ = $DarkSteelSwordItem$$Type;
}}
declare module "com.enderio.conduits.api.network.ConduitNetworkContext" {
import {$IConduitNetwork, $IConduitNetwork$$Type} from "com.enderio.conduits.api.network.IConduitNetwork"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConduitNetworkContextType, $ConduitNetworkContextType$$Type} from "com.enderio.conduits.api.network.ConduitNetworkContextType"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $ConduitNetworkContext<T extends $ConduitNetworkContext<(T)>> {

 "type"(): $ConduitNetworkContextType<(T)>
 "split"(arg0: $IConduitNetwork$$Type, arg1: $Set$$Type<($IConduitNetwork$$Type)>): T
 "mergeWith"(arg0: T): T
}

export namespace $ConduitNetworkContext {
const GENERIC_CODEC: $Codec<($ConduitNetworkContext<(any)>)>
const probejs$$marker: never
}
export class $ConduitNetworkContext$$Static<T extends $ConduitNetworkContext<(T)>> implements $ConduitNetworkContext {
static readonly "GENERIC_CODEC": $Codec<($ConduitNetworkContext<(any)>)>


 "type"(): $ConduitNetworkContextType<(T)>
 "split"(arg0: $IConduitNetwork$$Type, arg1: $Set$$Type<($IConduitNetwork$$Type)>): T
 "mergeWith"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNetworkContext$$Type<T> = ($ConduitNetworkContext<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitNetworkContext_<T> = $ConduitNetworkContext$$Type<(T)>;
}}
declare module "com.enderio.base.common.filter.fluid.EnderFluidFilterMenu" {
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractFilterMenu, $AbstractFilterMenu$$Type} from "com.enderio.base.common.filter.AbstractFilterMenu"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$EnderFluidFilterItem$Type, $EnderFluidFilterItem$Type$$Type} from "com.enderio.base.common.filter.fluid.EnderFluidFilterItem$Type"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$EnderFluidFilter, $EnderFluidFilter$$Type} from "com.enderio.base.common.filter.fluid.EnderFluidFilter"
import {$AbstractFilterMenu$FilterAccess, $AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.base.common.filter.AbstractFilterMenu$FilterAccess"

export class $EnderFluidFilterMenu extends $AbstractFilterMenu<($EnderFluidFilter)> {
readonly "quickcraftSlots": $Set<($Slot)>
static readonly "SHOULD_COMPARE_COMPONENTS_BUTTON_ID": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "BACK_BUTTON_ID": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "type": $EnderFluidFilterItem$Type
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "IS_INVERTED_BUTTON_ID": integer
 "quickcraftType": integer
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(any)>, arg1: $EnderFluidFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type, arg4: $AbstractFilterMenu$FilterAccess$$Type)
constructor(arg0: $MenuType$$Type<(any)>, arg1: $EnderFluidFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type)

public "isInverted"(): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "shouldCompareComponents"(): boolean
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderFluidFilterMenu$$Type = ($EnderFluidFilterMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderFluidFilterMenu_ = $EnderFluidFilterMenu$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.fluid.FluidConduitTicker" {
import {$IConduitNetwork, $IConduitNetwork$$Type} from "com.enderio.conduits.api.network.IConduitNetwork"
import {$FluidConduit, $FluidConduit$$Type} from "com.enderio.conduits.common.conduit.type.fluid.FluidConduit"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $FluidConduitTicker implements $ConduitTicker<($FluidConduit)> {
static readonly "INSTANCE": $FluidConduitTicker

constructor()

public "tick"(arg0: $ServerLevel$$Type, arg1: $FluidConduit$$Type, arg2: $IConduitNetwork$$Type): void
public "tick"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type<(any), (any)>, arg2: $IConduitNetwork$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConduitTicker$$Type = ($FluidConduitTicker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidConduitTicker_ = $FluidConduitTicker$$Type;
}}
declare module "com.enderio.base.common.filter.AbstractFilterMenu$FilterAccess" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $AbstractFilterMenu$FilterAccess {

 "goBack"(): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "getFilterItem"(): $ItemStack
 "setFilterItem"(arg0: $ItemStack$$Type): void
get "filterItem"(): $ItemStack
set "filterItem"(value: $ItemStack$$Type)
}

export namespace $AbstractFilterMenu$FilterAccess {
const probejs$$marker: never
}
export class $AbstractFilterMenu$FilterAccess$$Static implements $AbstractFilterMenu$FilterAccess {


 "goBack"(): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "getFilterItem"(): $ItemStack
 "setFilterItem"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFilterMenu$FilterAccess$$Type = ($AbstractFilterMenu$FilterAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFilterMenu$FilterAccess_ = $AbstractFilterMenu$FilterAccess$$Type;
}}
declare module "com.enderio.base.common.item.tool.YetaWrenchItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $YetaWrenchItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YetaWrenchItem$$Type = ($YetaWrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YetaWrenchItem_ = $YetaWrenchItem$$Type;
}}
declare module "com.enderio.base.common.item.misc.HangGliderItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $HangGliderItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangGliderItem$$Type = ($HangGliderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangGliderItem_ = $HangGliderItem$$Type;
}}
declare module "com.enderio.base.common.particle.RangeParticleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RangeParticleData extends $Record implements $ParticleOptions {
static readonly "CODEC": $MapCodec<($RangeParticleData)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RangeParticleData)>

constructor(range: integer, color: StringJS)

public "color"(): StringJS
public "range"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getType"(): $ParticleType<(any)>
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeParticleData$$Type = ({"range"?: integer, "color"?: StringJS}) | ([range?: integer, color?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeParticleData_ = $RangeParticleData$$Type;
}}
declare module "com.enderio.machines.common.blocks.obelisks.weather.WeatherChangeRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$WeatherChangeRecipe, $WeatherChangeRecipe$$Type} from "com.enderio.machines.common.blocks.obelisks.weather.WeatherChangeRecipe"

export class $WeatherChangeRecipe$Serializer implements $RecipeSerializer<($WeatherChangeRecipe)> {
static readonly "CODEC": $MapCodec<($WeatherChangeRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WeatherChangeRecipe)>

constructor()

public "codec"(): $MapCodec<($WeatherChangeRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($WeatherChangeRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatherChangeRecipe$Serializer$$Type = ($WeatherChangeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeatherChangeRecipe$Serializer_ = $WeatherChangeRecipe$Serializer$$Type;
}}
declare module "com.enderio.machines.common.blocks.fluid_tank.TankRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$MachineFluidTank, $MachineFluidTank$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidTank"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TankRecipe$Input extends $Record implements $RecipeInput {

constructor(fillItem: $ItemStack$$Type, emptyItem: $ItemStack$$Type, fluidTank: $MachineFluidTank$$Type)

public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "fillItem"(): $ItemStack
public "fluidTank"(): $MachineFluidTank
public "emptyItem"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$Input$$Type = ({"fillItem"?: $ItemStack$$Type, "fluidTank"?: $MachineFluidTank$$Type, "emptyItem"?: $ItemStack$$Type}) | ([fillItem?: $ItemStack$$Type, fluidTank?: $MachineFluidTank$$Type, emptyItem?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRecipe$Input_ = $TankRecipe$Input$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.inventory.MultiSlotAccess" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess"
import {$MachineInventory, $MachineInventory$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventory"

export class $MultiSlotAccess {

constructor()

public "size"(): integer
public "get"(arg0: integer): $SingleSlotAccess
public static "wrap"(arg0: $SingleSlotAccess$$Type): $MultiSlotAccess
public "contains"(arg0: integer): boolean
public "getAccesses"(): $List<($SingleSlotAccess)>
public "getItemStacks"(arg0: $MachineInventory$$Type): $List<($ItemStack)>
get "accesses"(): $List<($SingleSlotAccess)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiSlotAccess$$Type = ($MultiSlotAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiSlotAccess_ = $MultiSlotAccess$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.blockentity.MachineInventoryHolder" {
import {$MachineInventory, $MachineInventory$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventory"

export interface $MachineInventoryHolder {

 "getInventory"(): $MachineInventory
 "hasInventory"(): boolean
get "inventory"(): $MachineInventory
}

export namespace $MachineInventoryHolder {
const probejs$$marker: never
}
export class $MachineInventoryHolder$$Static implements $MachineInventoryHolder {


 "getInventory"(): $MachineInventory
 "hasInventory"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryHolder$$Type = ($MachineInventoryHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInventoryHolder_ = $MachineInventoryHolder$$Type;
}}
declare module "com.enderio.conduits.api.connection.config.ConnectionConfig" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"

export interface $ConnectionConfig {

 "isConnected"(): boolean
 "type"(): $ConnectionConfigType<(any)>
 "disconnected"(): $ConnectionConfig
 "reconnected"(): $ConnectionConfig
get "connected"(): boolean
}

export namespace $ConnectionConfig {
const GENERIC_CODEC: $Codec<($ConnectionConfig)>
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($ConnectionConfig)>
const probejs$$marker: never
}
export class $ConnectionConfig$$Static implements $ConnectionConfig {
static readonly "GENERIC_CODEC": $Codec<($ConnectionConfig)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConnectionConfig)>


 "isConnected"(): boolean
 "type"(): $ConnectionConfigType<(any)>
 "disconnected"(): $ConnectionConfig
 "reconnected"(): $ConnectionConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionConfig$$Type = ($ConnectionConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionConfig_ = $ConnectionConfig$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.DarkSteelAxeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$AxeItem, $AxeItem$$Type} from "net.minecraft.world.item.AxeItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CreativeTabVariants, $CreativeTabVariants$$Type} from "com.enderio.core.common.item.CreativeTabVariants"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IDarkSteelItem, $IDarkSteelItem$$Type} from "com.enderio.armory.common.item.darksteel.IDarkSteelItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EmpoweredUpgrade, $EmpoweredUpgrade$$Type} from "com.enderio.armory.common.item.darksteel.upgrades.empowered.EmpoweredUpgrade"

export class $DarkSteelAxeItem extends $AxeItem implements $IDarkSteelItem, $CreativeTabVariants {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "addCurrentUpgradeTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getEmpoweredUpgrade"(arg0: $ItemStack$$Type): $Optional<($EmpoweredUpgrade)>
public "addDurabilityTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isDurabilityBarVisible"(arg0: $ItemStack$$Type): boolean
public "createFullyUpgradedStack"(arg0: $Item$$Type): $ItemStack
public "addAvailableUpgradesTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "getStrippables"(): $Map<($Block), ($Block)>
public static "setStrippables"(strippedBlocks: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelAxeItem$$Type = ($DarkSteelAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelAxeItem_ = $DarkSteelAxeItem$$Type;
}}
declare module "com.enderio.base.common.filter.soul.EnderSoulFilterMenu" {
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractFilterMenu, $AbstractFilterMenu$$Type} from "com.enderio.base.common.filter.AbstractFilterMenu"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$EnderSoulFilter, $EnderSoulFilter$$Type} from "com.enderio.base.common.filter.soul.EnderSoulFilter"
import {$EnderSoulFilterItem$Type, $EnderSoulFilterItem$Type$$Type} from "com.enderio.base.common.filter.soul.EnderSoulFilterItem$Type"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AbstractFilterMenu$FilterAccess, $AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.base.common.filter.AbstractFilterMenu$FilterAccess"

export class $EnderSoulFilterMenu extends $AbstractFilterMenu<($EnderSoulFilter)> {
readonly "quickcraftSlots": $Set<($Slot)>
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "BACK_BUTTON_ID": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "type": $EnderSoulFilterItem$Type
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "IS_INVERTED_BUTTON_ID": integer
 "quickcraftType": integer
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "SHOULD_COMPARE_TAGS_BUTTON_ID": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(any)>, arg1: $EnderSoulFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type, arg4: $AbstractFilterMenu$FilterAccess$$Type)
constructor(arg0: $MenuType$$Type<(any)>, arg1: $EnderSoulFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type)

public "isInverted"(): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "shouldCompareTags"(): boolean
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSoulFilterMenu$$Type = ($EnderSoulFilterMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSoulFilterMenu_ = $EnderSoulFilterMenu$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduitConnectionConfig" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConduitRedstoneSignalAware, $ConduitRedstoneSignalAware$$Type} from "com.enderio.conduits.api.ConduitRedstoneSignalAware"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$IOConnectionConfig, $IOConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.IOConnectionConfig"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RedstoneConduitConnectionConfig extends $Record implements $IOConnectionConfig {
static readonly "CODEC": $MapCodec<($RedstoneConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($RedstoneConduitConnectionConfig)>
static readonly "DEFAULT": $RedstoneConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RedstoneConduitConnectionConfig)>

constructor(isInsert: boolean, insertChannel: $DyeColor$$Type, isExtract: boolean, extractChannel: $DyeColor$$Type, isStrongOutputSignal: boolean)

public "type"(): $ConnectionConfigType<($RedstoneConduitConnectionConfig)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "disconnected"(): $ConnectionConfig
public "reconnected"(): $ConnectionConfig
public "withIsInsert"(arg0: boolean): $RedstoneConduitConnectionConfig
public "withIsExtract"(arg0: boolean): $RedstoneConduitConnectionConfig
public "isInsert"(): boolean
public "isExtract"(): boolean
public "insertChannel"(): $DyeColor
public "extractChannel"(): $DyeColor
public "isStrongOutputSignal"(): boolean
public "withExtractChannel"(arg0: $DyeColor$$Type): $RedstoneConduitConnectionConfig
public "withInsertChannel"(arg0: $DyeColor$$Type): $RedstoneConduitConnectionConfig
public "withIsStrongOutputSignal"(arg0: boolean): $RedstoneConduitConnectionConfig
public "isConnected"(): boolean
public "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
get "insert"(): boolean
get "extract"(): boolean
get "strongOutputSignal"(): boolean
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneConduitConnectionConfig$$Type = ({"isExtract"?: boolean, "isStrongOutputSignal"?: boolean, "isInsert"?: boolean, "insertChannel"?: $DyeColor$$Type, "extractChannel"?: $DyeColor$$Type}) | ([isExtract?: boolean, isStrongOutputSignal?: boolean, isInsert?: boolean, insertChannel?: $DyeColor$$Type, extractChannel?: $DyeColor$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneConduitConnectionConfig_ = $RedstoneConduitConnectionConfig$$Type;
}}
declare module "com.enderio.machines.common.blocks.obelisks.weather.WeatherChangeRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineRecipe, $MachineRecipe$$Type} from "com.enderio.machines.common.blocks.base.MachineRecipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$WeatherChangeRecipe$WeatherMode, $WeatherChangeRecipe$WeatherMode$$Type} from "com.enderio.machines.common.blocks.obelisks.weather.WeatherChangeRecipe$WeatherMode"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$WeatherChangeRecipe$Input, $WeatherChangeRecipe$Input$$Type} from "com.enderio.machines.common.blocks.obelisks.weather.WeatherChangeRecipe$Input"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack, $OutputStack$$Type} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $WeatherChangeRecipe extends $Record implements $MachineRecipe<($WeatherChangeRecipe$Input)> {

constructor(fluid: $FluidStack$$Type, mode: $WeatherChangeRecipe$WeatherMode$$Type)

public "mode"(): $WeatherChangeRecipe$WeatherMode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $WeatherChangeRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $WeatherChangeRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "fluid"(): $FluidStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getEnergyCost"(arg0: $WeatherChangeRecipe$Input$$Type): integer
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $WeatherChangeRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $WeatherChangeRecipe$Input$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatherChangeRecipe$$Type = ({"fluid"?: $FluidStack$$Type, "mode"?: $WeatherChangeRecipe$WeatherMode$$Type}) | ([fluid?: $FluidStack$$Type, mode?: $WeatherChangeRecipe$WeatherMode$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeatherChangeRecipe_ = $WeatherChangeRecipe$$Type;
}}
declare module "com.enderio.conduits.api.network.node.IConduitNode" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$IConduitNetwork, $IConduitNetwork$$Type} from "com.enderio.conduits.api.network.IConduitNetwork"
import {$NodeDataType, $NodeDataType$$Type} from "com.enderio.conduits.api.network.node.NodeDataType"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NodeData, $NodeData$$Type} from "com.enderio.conduits.api.network.node.NodeData"

export interface $IConduitNode {

 "pos"(): $BlockPos
 "isLoaded"(): boolean
 "markDirty"(): void
 "getInventory"(arg0: $Direction$$Type): $IItemHandlerModifiable
 "hasNodeData"(arg0: $NodeDataType$$Type<(any)>): boolean
 "setNodeData"<T extends $NodeData>(arg0: T): void
 "isConnectedTo"(arg0: $Direction$$Type): boolean
 "getNodeData"<T extends $NodeData>(arg0: $NodeDataType$$Type<(T)>): T
 "getNodeData"(): $NodeData
 "isTicking"(): boolean
 "getNetwork"(): $IConduitNetwork
 "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
 "getConnectionConfig"(arg0: $Direction$$Type): $ConnectionConfig
 "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Direction$$Type, arg1: $ConnectionConfigType$$Type<(T)>): T
 "getOrCreateNodeData"<T extends $NodeData>(arg0: $NodeDataType$$Type<(T)>): T
 "isConnectedToBlock"(arg0: $Direction$$Type): boolean
 "getNeighborSidedCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg1: $Direction$$Type): TCapability
 "getNeighborVoidCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), (void)>, arg1: $Direction$$Type): TCapability
get "loaded"(): boolean
set "nodeData"(value: T)
get "nodeData"(): $NodeData
get "ticking"(): boolean
get "network"(): $IConduitNetwork
}

export namespace $IConduitNode {
const probejs$$marker: never
}
export class $IConduitNode$$Static implements $IConduitNode {


 "pos"(): $BlockPos
 "isLoaded"(): boolean
 "markDirty"(): void
 "getInventory"(arg0: $Direction$$Type): $IItemHandlerModifiable
 "hasNodeData"(arg0: $NodeDataType$$Type<(any)>): boolean
 "setNodeData"<T extends $NodeData>(arg0: T): void
 "isConnectedTo"(arg0: $Direction$$Type): boolean
 "getNodeData"<T extends $NodeData>(arg0: $NodeDataType$$Type<(T)>): T
 "getNodeData"(): $NodeData
 "isTicking"(): boolean
 "getNetwork"(): $IConduitNetwork
 "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
 "getConnectionConfig"(arg0: $Direction$$Type): $ConnectionConfig
 "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Direction$$Type, arg1: $ConnectionConfigType$$Type<(T)>): T
 "getOrCreateNodeData"<T extends $NodeData>(arg0: $NodeDataType$$Type<(T)>): T
 "isConnectedToBlock"(arg0: $Direction$$Type): boolean
 "getNeighborSidedCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg1: $Direction$$Type): TCapability
 "getNeighborVoidCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), (void)>, arg1: $Direction$$Type): TCapability
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConduitNode$$Type = ($IConduitNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConduitNode_ = $IConduitNode$$Type;
}}
declare module "com.enderio.base.common.block.EIOPressurePlateBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$EIOPressurePlateBlock$Detector, $EIOPressurePlateBlock$Detector$$Type} from "com.enderio.base.common.block.EIOPressurePlateBlock$Detector"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$PressurePlateBlock, $PressurePlateBlock$$Type} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EIOPressurePlateBlock extends $PressurePlateBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PressurePlateBlock)>
static readonly "HOSTILE_MOB": $EIOPressurePlateBlock$Detector
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "PLAYER": $EIOPressurePlateBlock$Detector
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $EIOPressurePlateBlock$Detector$$Type, arg2: boolean)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOPressurePlateBlock$$Type = ($EIOPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EIOPressurePlateBlock_ = $EIOPressurePlateBlock$$Type;
}}
declare module "com.enderio.machines.common.attachment.FluidTankUser" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MachineTankLayout, $MachineTankLayout$$Type} from "com.enderio.machines.common.io.fluid.MachineTankLayout"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MachineFluidHandler, $MachineFluidHandler$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $FluidTankUser {

 "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "getTankLayout"(): $MachineTankLayout
 "createFluidHandler"(): $MachineFluidHandler
 "getFluidHandler"(): $MachineFluidHandler
get "tankLayout"(): $MachineTankLayout
get "fluidHandler"(): $MachineFluidHandler
}

export namespace $FluidTankUser {
const FLUID_HANDLER_PROVIDER: $ICapabilityProvider<($BlockEntity), ($Direction), ($IFluidHandler)>
const probejs$$marker: never
}
export class $FluidTankUser$$Static implements $FluidTankUser {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($BlockEntity), ($Direction), ($IFluidHandler)>


 "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "getTankLayout"(): $MachineTankLayout
 "createFluidHandler"(): $MachineFluidHandler
 "getFluidHandler"(): $MachineFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankUser$$Type = ($FluidTankUser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankUser_ = $FluidTankUser$$Type;
}}
declare module "com.enderio.conduits.api.Conduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.bundle.SlotType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set, $Set$$Type} from "java.util.Set"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ConduitDataAccessor, $ConduitDataAccessor$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataAccessor"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Vector2i, $Vector2i$$Type} from "org.joml.Vector2i"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.conduits.api.network.ConduitBlockConnection"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.api.bundle.ConduitBundle"

export interface $Conduit<TConduit extends $Conduit<(TConduit), (TConnectionConfig)>, TConnectionConfig extends $ConnectionConfig> extends $Comparable<(TConduit)>, $TooltipProvider {

 "type"(): $ConduitType<(TConduit)>
 "ticker"(): $ConduitTicker<(TConduit)>
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "texture"(): $ResourceLocation
 "description"(): $Component
 "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
/**
 * 
 * @deprecated
 */
 "copyLegacyData"(arg0: $IConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
 "onCreated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
 "hasMenu"(): boolean
 "onConnectTo"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): void
 "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
 "onRemoved"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
 "getInventorySize"(): integer
 "hasAdvancedTooltip"(): boolean
 "showDebugTooltip"(): boolean
 "networkTickRate"(): integer
 "hasConnectionDelay"(): boolean
/**
 * 
 * @deprecated
 */
 "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): TConnectionConfig
/**
 * 
 * @deprecated
 */
 "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
 "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $IConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
 "canConnectToConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type): $CompoundTag
 "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
 "connectionConfigType"(): $ConnectionConfigType<(TConnectionConfig)>
 "onConnectionsUpdated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
 "canConnectConduits"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): boolean
 "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getInventorySlotPosition"(arg0: integer): $Vector2i
 "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
 "hasServerConnectionChecks"(): boolean
 "compareTo"(arg0: TConduit): integer
get "inventorySize"(): integer
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduit
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitTag
}

export namespace $Conduit {
const CODEC: $Codec<($Holder<($Conduit<(any), (any)>)>)>
const DIRECT_CODEC: $Codec<($Conduit<(any), (any)>)>
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Conduit<(any), (any)>)>)>
const probejs$$marker: never
}
export class $Conduit$$Static<TConduit extends $Conduit<(TConduit), (TConnectionConfig)>, TConnectionConfig extends $ConnectionConfig> implements $Conduit {
static readonly "CODEC": $Codec<($Holder<($Conduit<(any), (any)>)>)>
static readonly "DIRECT_CODEC": $Codec<($Conduit<(any), (any)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Conduit<(any), (any)>)>)>


 "type"(): $ConduitType<(TConduit)>
 "ticker"(): $ConduitTicker<(TConduit)>
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "texture"(): $ResourceLocation
 "description"(): $Component
 "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
/**
 * 
 * @deprecated
 */
 "copyLegacyData"(arg0: $IConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
 "onCreated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
 "hasMenu"(): boolean
 "onConnectTo"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): void
 "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
 "onRemoved"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
 "getInventorySize"(): integer
 "hasAdvancedTooltip"(): boolean
 "showDebugTooltip"(): boolean
 "networkTickRate"(): integer
 "hasConnectionDelay"(): boolean
/**
 * 
 * @deprecated
 */
 "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): TConnectionConfig
/**
 * 
 * @deprecated
 */
 "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
 "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $IConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
 "canConnectToConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
 "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type): $CompoundTag
 "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
 "connectionConfigType"(): $ConnectionConfigType<(TConnectionConfig)>
 "onConnectionsUpdated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
 "canConnectConduits"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): boolean
 "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getInventorySlotPosition"(arg0: integer): $Vector2i
 "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
 "hasServerConnectionChecks"(): boolean
 "compareTo"(arg0: TConduit): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Conduit$$Type<TConduit, TConnectionConfig> = (Special.EnderioConduit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Conduit_<TConduit, TConnectionConfig> = $Conduit$$Type<(TConduit), (TConnectionConfig)>;
}}
declare module "com.enderio.machines.common.travel.EnderfaceTravelTarget$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$TravelTargetSerializer, $TravelTargetSerializer$$Type} from "com.enderio.base.api.travel.TravelTargetSerializer"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EnderfaceTravelTarget, $EnderfaceTravelTarget$$Type} from "com.enderio.machines.common.travel.EnderfaceTravelTarget"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $EnderfaceTravelTarget$Serializer implements $TravelTargetSerializer<($EnderfaceTravelTarget)> {
static "CODEC": $MapCodec<($EnderfaceTravelTarget)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnderfaceTravelTarget)>

constructor()

public "codec"(): $MapCodec<($EnderfaceTravelTarget)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EnderfaceTravelTarget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderfaceTravelTarget$Serializer$$Type = ($EnderfaceTravelTarget$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderfaceTravelTarget$Serializer_ = $EnderfaceTravelTarget$Serializer$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.fluid.FluidConduitConnectionConfig" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RedstoneSensitiveConnectionConfig, $RedstoneSensitiveConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.RedstoneSensitiveConnectionConfig"
import {$List, $List$$Type} from "java.util.List"
import {$ConduitRedstoneSignalAware, $ConduitRedstoneSignalAware$$Type} from "com.enderio.conduits.api.ConduitRedstoneSignalAware"
import {$IOConnectionConfig, $IOConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.IOConnectionConfig"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FluidConduitConnectionConfig extends $Record implements $IOConnectionConfig, $RedstoneSensitiveConnectionConfig {
static readonly "CODEC": $MapCodec<($FluidConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($FluidConduitConnectionConfig)>
static readonly "DEFAULT": $FluidConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($FluidConduitConnectionConfig)>

constructor(isInsert: boolean, insertChannel: $DyeColor$$Type, isExtract: boolean, extractChannel: $DyeColor$$Type, extractRedstoneControl: $RedstoneControl$$Type, extractRedstoneChannel: $DyeColor$$Type, insertPriority: integer)

public "type"(): $ConnectionConfigType<($FluidConduitConnectionConfig)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "disconnected"(): $ConnectionConfig
public "reconnected"(): $ConnectionConfig
public "withPriority"(arg0: integer): $FluidConduitConnectionConfig
public "insertPriority"(): integer
public "withIsInsert"(arg0: boolean): $FluidConduitConnectionConfig
public "withIsExtract"(arg0: boolean): $FluidConduitConnectionConfig
public "isInsert"(): boolean
public "isExtract"(): boolean
public "insertChannel"(): $DyeColor
public "extractChannel"(): $DyeColor
public "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "withExtractChannel"(arg0: $DyeColor$$Type): $FluidConduitConnectionConfig
public "withInsertChannel"(arg0: $DyeColor$$Type): $FluidConduitConnectionConfig
public "extractRedstoneControl"(): $RedstoneControl
public "extractRedstoneChannel"(): $DyeColor
public "withExtractRedstoneControl"(arg0: $RedstoneControl$$Type): $FluidConduitConnectionConfig
public "withExtractRedstoneChannel"(arg0: $DyeColor$$Type): $FluidConduitConnectionConfig
public "getRedstoneSignalColors"(): $List<($DyeColor)>
public "isConnected"(): boolean
get "insert"(): boolean
get "extract"(): boolean
get "redstoneSignalColors"(): $List<($DyeColor)>
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConduitConnectionConfig$$Type = ({"isExtract"?: boolean, "isInsert"?: boolean, "extractChannel"?: $DyeColor$$Type, "insertPriority"?: integer, "insertChannel"?: $DyeColor$$Type, "extractRedstoneChannel"?: $DyeColor$$Type, "extractRedstoneControl"?: $RedstoneControl$$Type}) | ([isExtract?: boolean, isInsert?: boolean, extractChannel?: $DyeColor$$Type, insertPriority?: integer, insertChannel?: $DyeColor$$Type, extractRedstoneChannel?: $DyeColor$$Type, extractRedstoneControl?: $RedstoneControl$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidConduitConnectionConfig_ = $FluidConduitConnectionConfig$$Type;
}}
declare module "com.enderio.conduits.common.conduit.network.ConduitNetwork" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ConduitNetworkContext, $ConduitNetworkContext$$Type} from "com.enderio.conduits.api.network.ConduitNetworkContext"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.conduits.api.network.ConduitBlockConnection"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IConduitNetwork, $IConduitNetwork$$Type} from "com.enderio.conduits.api.network.IConduitNetwork"
import {$Network, $Network$$Type} from "com.enderio.core.common.graph.Network"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.common.conduit.network.ConduitNode"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConduitNetworkContextType, $ConduitNetworkContextType$$Type} from "com.enderio.conduits.api.network.ConduitNetworkContextType"
import {$Network$IndexedEdgeList, $Network$IndexedEdgeList$$Type} from "com.enderio.core.common.graph.Network$IndexedEdgeList"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export class $ConduitNetwork extends $Network<($ConduitNetwork), ($ConduitNode)> implements $IConduitNetwork {
static readonly "CODEC": $Codec<($ConduitNetwork)>

constructor(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $ConduitNode$$Type)
constructor(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Optional$$Type<($ConduitNetworkContext$$Type<(any)>)>, arg2: $List$$Type<($ConduitNode$$Type)>, arg3: $Network$IndexedEdgeList$$Type)

public "contains"(arg0: $IConduitNode$$Type): boolean
public "getContext"<C extends $ConduitNetworkContext<(C)>>(arg0: $ConduitNetworkContextType$$Type<(C)>): C
public "conduit"(): $Holder<($Conduit<(any), (any)>)>
public "neighbors"(arg0: $IConduitNode$$Type): $Set<($IConduitNode)>
public "hasContext"(arg0: $ConduitNetworkContextType$$Type<(any)>): boolean
public "tickingNodes"(): $Collection<($ConduitNode)>
public "blockEndpoints"(): $Collection<($ConduitNode)>
public "allChannels"(): $Set<($DyeColor)>
public "allChunks"(): $Set<(long)>
public "addCrashInfo"(arg0: $CrashReportCategory$$Type): void
public "beforeTicking"(): void
public "onNodeUpdated"(arg0: $ConduitNode$$Type): void
public "blockConnections"(): $Collection<($ConduitBlockConnection)>
public "insertConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
public "insertConnections"(): $List<($ConduitBlockConnection)>
public "extractConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
public "extractConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
public "extractConnections"(): $List<($ConduitBlockConnection)>
public "insertConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
public "getOrCreateContext"<C extends $ConduitNetworkContext<(C)>>(arg0: $ConduitNetworkContextType$$Type<(C)>): C
public "blockConnectionsAccessibleFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
public "setOnChunkCoverageChanged"(arg0: $Consumer$$Type<($ConduitNetwork)>): void
public "onChunkTickStatusChanged"(arg0: long): void
public "nodes"(): $Set<($IConduitNode)>
public "isEmpty"(): boolean
public "nodeCount"(): integer
set "onChunkCoverageChanged"(value: $Consumer$$Type<($ConduitNetwork)>)
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNetwork$$Type = ($ConduitNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitNetwork_ = $ConduitNetwork$$Type;
}}
declare module "com.enderio.base.common.block.ReinforcedObsidianBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReinforcedObsidianBlock extends $Block {
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

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedObsidianBlock$$Type = ($ReinforcedObsidianBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedObsidianBlock_ = $ReinforcedObsidianBlock$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduitTicker" {
import {$IConduitNetwork, $IConduitNetwork$$Type} from "com.enderio.conduits.api.network.IConduitNetwork"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$RedstoneConduit, $RedstoneConduit$$Type} from "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduit"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $RedstoneConduitTicker implements $ConduitTicker<($RedstoneConduit)> {
static readonly "INSTANCE": $RedstoneConduitTicker

constructor()

public "tick"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type<(any), (any)>, arg2: $IConduitNetwork$$Type): void
public "tick"(arg0: $ServerLevel$$Type, arg1: $RedstoneConduit$$Type, arg2: $IConduitNetwork$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneConduitTicker$$Type = ($RedstoneConduitTicker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneConduitTicker_ = $RedstoneConduitTicker$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.fluid.FluidConduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.bundle.SlotType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ConduitDataAccessor, $ConduitDataAccessor$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataAccessor"
import {$FluidConduitTicker, $FluidConduitTicker$$Type} from "com.enderio.conduits.common.conduit.type.fluid.FluidConduitTicker"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Vector2i, $Vector2i$$Type} from "org.joml.Vector2i"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.conduits.api.network.ConduitBlockConnection"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$FluidConduitConnectionConfig, $FluidConduitConnectionConfig$$Type} from "com.enderio.conduits.common.conduit.type.fluid.FluidConduitConnectionConfig"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.api.bundle.ConduitBundle"

export class $FluidConduit extends $Record implements $Conduit<($FluidConduit), ($FluidConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($FluidConduit)>
static readonly "INSERT_FILTER_SLOT": integer
static readonly "EXTRACT_FILTER_SLOT": integer

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, transferRatePerTick: integer, isMultiFluid: boolean, doesSupportPriority: boolean)

public "type"(): $ConduitType<($FluidConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $FluidConduit$$Type): integer
public "ticker"(): $FluidConduitTicker
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "texture"(): $ResourceLocation
public "description"(): $Component
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
public "copyLegacyData"(arg0: $IConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
public "isMultiFluid"(): boolean
public "hasMenu"(): boolean
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getInventorySize"(): integer
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $FluidConduitConnectionConfig
public "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "doesSupportPriority"(): boolean
public "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type): $CompoundTag
public "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
public "connectionConfigType"(): $ConnectionConfigType<($FluidConduitConnectionConfig)>
public "canConnectConduits"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): boolean
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "transferRatePerTick"(): integer
public "getInventorySlotPosition"(arg0: integer): $Vector2i
public "hasServerConnectionChecks"(): boolean
public "onCreated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "onConnectTo"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): void
public "onRemoved"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "networkTickRate"(): integer
public "hasConnectionDelay"(): boolean
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $IConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
public "canConnectToConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "onConnectionsUpdated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
get "multiFluid"(): boolean
get "inventorySize"(): integer
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConduit$$Type = ({"doesSupportPriority"?: boolean, "transferRatePerTick"?: integer, "texture"?: $ResourceLocation$$Type, "description"?: $Component$$Type, "isMultiFluid"?: boolean}) | ([doesSupportPriority?: boolean, transferRatePerTick?: integer, texture?: $ResourceLocation$$Type, description?: $Component$$Type, isMultiFluid?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidConduit_ = $FluidConduit$$Type;
}}
declare module "com.enderio.machines.common.blocks.alloy.AlloySmeltingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineRecipe, $MachineRecipe$$Type} from "com.enderio.machines.common.blocks.base.MachineRecipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AlloySmeltingRecipe$Input, $AlloySmeltingRecipe$Input$$Type} from "com.enderio.machines.common.blocks.alloy.AlloySmeltingRecipe$Input"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack, $OutputStack$$Type} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $AlloySmeltingRecipe implements $MachineRecipe<($AlloySmeltingRecipe$Input)> {

constructor(arg0: $List$$Type<($SizedIngredient$$Type)>, arg1: $ItemStack$$Type, arg2: integer, arg3: float, arg4: boolean)
constructor(arg0: $List$$Type<($SizedIngredient$$Type)>, arg1: $ItemStack$$Type, arg2: integer, arg3: float)

public "output"(): $ItemStack
public "inputs"(): $List<($SizedIngredient)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $AlloySmeltingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $AlloySmeltingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "energy"(): integer
public "experience"(): float
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isSmelting"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getEnergyCost"(arg0: $AlloySmeltingRecipe$Input$$Type): integer
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $AlloySmeltingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $AlloySmeltingRecipe$Input$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "smelting"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloySmeltingRecipe$$Type = ($AlloySmeltingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloySmeltingRecipe_ = $AlloySmeltingRecipe$$Type;
}}
declare module "com.enderio.base.api.io.IOMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $IOMode extends $Enum<($IOMode)> implements $StringRepresentable {
static readonly "PULL": $IOMode
static readonly "DISABLED": $IOMode
static readonly "CODEC": $Codec<($IOMode)>
static readonly "BY_ID": $IntFunction<($IOMode)>
static readonly "NONE": $IOMode
static readonly "BOTH": $IOMode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($IOMode)>
static readonly "PUSH": $IOMode


public static "values"(): ($IOMode)[]
public static "valueOf"(arg0: StringJS): $IOMode
public "canConnect"(): boolean
public "canOutput"(): boolean
public "canForce"(): boolean
public "canInput"(): boolean
public "canPush"(): boolean
public "canPull"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOMode$$Type = (("none") | ("push") | ("pull") | ("both") | ("disable"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOMode_ = $IOMode$$Type;
}}
declare module "com.enderio.conduits.common.conduit.bundle.ConduitShape" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.api.bundle.ConduitBundle"

export class $ConduitShape {
static readonly "CONNECTION": $VoxelShape

constructor()

public "updateConduit"(arg0: $ConduitBundle$$Type): void
public "getTotalShape"(): $VoxelShape
public "getConduit"(arg0: $BlockPos$$Type, arg1: $HitResult$$Type): $Holder<($Conduit<(any), (any)>)>
public static "rotateVoxelShape"(arg0: $VoxelShape$$Type, arg1: $Direction$$Type): $VoxelShape
public "getConnectionFromHit"(arg0: $BlockPos$$Type, arg1: $HitResult$$Type): $Pair<($Direction), ($Holder<($Conduit<(any), (any)>)>)>
public "getShapeFromHit"(arg0: $BlockPos$$Type, arg1: $HitResult$$Type): $VoxelShape
get "totalShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitShape$$Type = ($ConduitShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitShape_ = $ConduitShape$$Type;
}}
declare module "com.enderio.base.common.paint.block.SinglePaintedBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SinglePaintedBlock extends $Block implements $EntityBlock, $PaintedBlock {
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

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePaintedBlock$$Type = ($SinglePaintedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SinglePaintedBlock_ = $SinglePaintedBlock$$Type;
}}
declare module "com.enderio.machines.common.io.fluid.TankAccess" {
import {$FluidTankUser, $FluidTankUser$$Type} from "com.enderio.machines.common.attachment.FluidTankUser"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$MachineFluidTank, $MachineFluidTank$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidTank"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MachineFluidHandler, $MachineFluidHandler$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidHandler"

export class $TankAccess {

constructor()

public "getCapacity"(arg0: $FluidTankUser$$Type): integer
public "getCapacity"(arg0: $MachineFluidHandler$$Type): integer
public "drain"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidTankUser$$Type, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $MachineFluidHandler$$Type, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "isEmpty"(arg0: $MachineFluidHandler$$Type): boolean
public "isEmpty"(arg0: $FluidTankUser$$Type): boolean
public "fill"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): integer
public "fill"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): integer
public "getFluid"(arg0: $MachineFluidHandler$$Type): $FluidStack
public "getFluid"(arg0: $FluidTankUser$$Type): $FluidStack
public "isTank"(arg0: integer): boolean
public "isFluidValid"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type): boolean
public "isFluidValid"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type): boolean
public "setFluid"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type): void
public "setFluid"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type): void
public "getTank"(arg0: $MachineFluidHandler$$Type): $MachineFluidTank
public "getTank"(arg0: $FluidTankUser$$Type): $MachineFluidTank
public "getFluidAmount"(arg0: $MachineFluidHandler$$Type): integer
public "getFluidAmount"(arg0: $FluidTankUser$$Type): integer
public "canInsert"(arg0: $MachineFluidHandler$$Type): boolean
public "canInsert"(arg0: $FluidTankUser$$Type): boolean
public "canExtract"(arg0: $MachineFluidHandler$$Type): boolean
public "canExtract"(arg0: $FluidTankUser$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankAccess$$Type = ($TankAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankAccess_ = $TankAccess$$Type;
}}
declare module "com.enderio.base.common.block.glass.GlassLighting" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $GlassLighting extends $Enum<($GlassLighting)> {
static readonly "EMITTING": $GlassLighting
static readonly "NONE": $GlassLighting
static readonly "BLOCKING": $GlassLighting


public "shortName"(): StringJS
public static "values"(): ($GlassLighting)[]
public static "valueOf"(arg0: StringJS): $GlassLighting
public "englishName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassLighting$$Type = (("none") | ("blocking") | ("emitting"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassLighting_ = $GlassLighting$$Type;
}}
declare module "com.enderio.base.common.advancement.UseGliderTrigger" {
import {$UseGliderTrigger$TriggerInstance, $UseGliderTrigger$TriggerInstance$$Type} from "com.enderio.base.common.advancement.UseGliderTrigger$TriggerInstance"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $UseGliderTrigger extends $SimpleCriterionTrigger<($UseGliderTrigger$TriggerInstance)> {

constructor()

public "trigger"(arg0: $ServerPlayer$$Type): void
public "getId"(): $ResourceLocation
public "codec"(): $Codec<($UseGliderTrigger$TriggerInstance)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseGliderTrigger$$Type = ($UseGliderTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UseGliderTrigger_ = $UseGliderTrigger$$Type;
}}
declare module "com.enderio.base.api.capability.SideConfig" {
import {$IOMode, $IOMode$$Type} from "com.enderio.base.api.io.IOMode"

export interface $SideConfig {

 "setMode"(arg0: $IOMode$$Type): void
 "getMode"(): $IOMode
 "cycleMode"(): void
set "mode"(value: $IOMode$$Type)
get "mode"(): $IOMode
}

export namespace $SideConfig {
const probejs$$marker: never
}
export class $SideConfig$$Static implements $SideConfig {


 "setMode"(arg0: $IOMode$$Type): void
 "getMode"(): $IOMode
 "cycleMode"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SideConfig$$Type = ($SideConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SideConfig_ = $SideConfig$$Type;
}}
declare module "com.enderio.conduits.common.conduit.facades.ConduitFacadeItem" {
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
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ConduitFacadeItem extends $BlockItem {
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

constructor(arg0: $Item$Properties$$Type)

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
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
export type $ConduitFacadeItem$$Type = ($ConduitFacadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitFacadeItem_ = $ConduitFacadeItem$$Type;
}}
declare module "com.enderio.base.common.block.IndustrialInsulationBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SpongeBlock, $SpongeBlock$$Type} from "net.minecraft.world.level.block.SpongeBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IndustrialInsulationBlock extends $SpongeBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SpongeBlock)>
static readonly "MAX_COUNT": integer
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MAX_DEPTH": integer
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialInsulationBlock$$Type = ($IndustrialInsulationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialInsulationBlock_ = $IndustrialInsulationBlock$$Type;
}}
declare module "com.enderio.core.common.recipes.WrappedShapedRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $WrappedShapedRecipe extends $ShapedRecipe implements $CraftingRecipe {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern


public "category"(): $CraftingBookCategory
public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getWrapped"(): $ShapedRecipe
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
get "width"(): integer
get "height"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "wrapped"(): $ShapedRecipe
get "group"(): StringJS
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedShapedRecipe$$Type = ($WrappedShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedShapedRecipe_ = $WrappedShapedRecipe$$Type;
}}
declare module "com.enderio.conduits.common.conduit.network.IConduitNodeAttachment" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$ConnectionStatus, $ConnectionStatus$$Type} from "com.enderio.conduits.api.connection.ConnectionStatus"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $IConduitNodeAttachment {

 "getLevel"(): $Level
 "hasLevel"(): boolean
 "markNodesDirty"(): void
 "getConnectionStatus"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionStatus
 "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
 "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionConfig
 "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfigType$$Type<(T)>): T
 "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
 "getConnectionInventory"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $IItemHandlerModifiable
 "getNeighborSidedCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg2: $Direction$$Type): TCapability
 "getNeighborVoidCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $BlockCapability$$Type<(TCapability), (void)>, arg2: $Direction$$Type): TCapability
get "level"(): $Level
}

export namespace $IConduitNodeAttachment {
const probejs$$marker: never
}
export class $IConduitNodeAttachment$$Static implements $IConduitNodeAttachment {


 "getLevel"(): $Level
 "hasLevel"(): boolean
 "markNodesDirty"(): void
 "getConnectionStatus"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionStatus
 "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
 "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $ConnectionConfig
 "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfigType$$Type<(T)>): T
 "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
 "getConnectionInventory"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $Direction$$Type): $IItemHandlerModifiable
 "getNeighborSidedCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg2: $Direction$$Type): TCapability
 "getNeighborVoidCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $BlockCapability$$Type<(TCapability), (void)>, arg2: $Direction$$Type): TCapability
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConduitNodeAttachment$$Type = ($IConduitNodeAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConduitNodeAttachment_ = $IConduitNodeAttachment$$Type;
}}
declare module "com.enderio.core.common.item.CreativeTabVariants" {
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"

export interface $CreativeTabVariants {

 "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void

(arg0: $CreativeModeTab$Output): void
}

export namespace $CreativeTabVariants {
const probejs$$marker: never
}
export class $CreativeTabVariants$$Static implements $CreativeTabVariants {


 "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabVariants$$Type = ((arg0: $CreativeModeTab$Output) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabVariants_ = $CreativeTabVariants$$Type;
}}
declare module "com.enderio.modconduits.common.modules.appeng.MEConduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.bundle.SlotType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MEConduitConnectionConfig, $MEConduitConnectionConfig$$Type} from "com.enderio.modconduits.common.modules.appeng.MEConduitConnectionConfig"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ConduitDataAccessor, $ConduitDataAccessor$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataAccessor"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Vector2i, $Vector2i$$Type} from "org.joml.Vector2i"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.conduits.api.network.ConduitBlockConnection"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.api.bundle.ConduitBundle"

export class $MEConduit extends $Record implements $Conduit<($MEConduit), ($MEConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($MEConduit)>

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, color: $AEColor$$Type, isDense: boolean)

public "color"(): $AEColor
public "type"(): $ConduitType<($MEConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $MEConduit$$Type): integer
public "compareTo"(arg0: any): integer
public "ticker"(): $ConduitTicker<($MEConduit)>
public "texture"(): $ResourceLocation
public "description"(): $Component
public "isDense"(): boolean
public "onCreated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "hasMenu"(): boolean
public "onRemoved"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "hasConnectionDelay"(): boolean
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $MEConduitConnectionConfig
public "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $IConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
public "canConnectToConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "connectionConfigType"(): $ConnectionConfigType<($MEConduitConnectionConfig)>
public "onConnectionsUpdated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
/**
 * 
 * @deprecated
 */
public "copyLegacyData"(arg0: $IConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
public "onConnectTo"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): void
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getInventorySize"(): integer
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "networkTickRate"(): integer
/**
 * 
 * @deprecated
 */
public "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type): $CompoundTag
public "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
public "canConnectConduits"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): boolean
public "getInventorySlotPosition"(arg0: integer): $Vector2i
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
public "hasServerConnectionChecks"(): boolean
get "dense"(): boolean
get "inventorySize"(): integer
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEConduit$$Type = ({"color"?: $AEColor$$Type, "texture"?: $ResourceLocation$$Type, "description"?: $Component$$Type, "isDense"?: boolean}) | ([color?: $AEColor$$Type, texture?: $ResourceLocation$$Type, description?: $Component$$Type, isDense?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEConduit_ = $MEConduit$$Type;
}}
declare module "com.enderio.machines.common.blocks.painting.PaintingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PaintingRecipe$Input extends $Record implements $RecipeInput {

constructor(template: $ItemStack$$Type, paint: $ItemStack$$Type)

public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "paint"(): $ItemStack
public "template"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingRecipe$Input$$Type = ({"template"?: $ItemStack$$Type, "paint"?: $ItemStack$$Type}) | ([template?: $ItemStack$$Type, paint?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingRecipe$Input_ = $PaintingRecipe$Input$$Type;
}}
declare module "com.enderio.machines.common.block.LegacyMachineBlock" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LegacyMachineBlockEntity, $LegacyMachineBlockEntity$$Type} from "com.enderio.machines.common.blockentity.base.LegacyMachineBlockEntity"
import {$RegiliteBlockEntity, $RegiliteBlockEntity$$Type} from "com.enderio.regilite.holder.RegiliteBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

/**
 * 
 * @deprecated
 */
export class $LegacyMachineBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_ENTITY_TYPE_CODEC": $Codec<($Supplier<($BlockEntityType<($LegacyMachineBlockEntity)>)>)>
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

constructor(arg0: $RegiliteBlockEntity$$Type<($LegacyMachineBlockEntity$$Type)>, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LegacyMachineBlock$$Type = ($LegacyMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LegacyMachineBlock_ = $LegacyMachineBlock$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedRedstoneBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PoweredBlock, $PoweredBlock$$Type} from "net.minecraft.world.level.block.PoweredBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PaintedRedstoneBlock extends $PoweredBlock implements $EntityBlock, $PaintedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PoweredBlock)>
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

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedRedstoneBlock$$Type = ($PaintedRedstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedRedstoneBlock_ = $PaintedRedstoneBlock$$Type;
}}
declare module "com.enderio.machines.common.blocks.fluid_tank.TankRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$TankRecipe$Mode, $TankRecipe$Mode$$Type} from "com.enderio.machines.common.blocks.fluid_tank.TankRecipe$Mode"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$TankRecipe$Input, $TankRecipe$Input$$Type} from "com.enderio.machines.common.blocks.fluid_tank.TankRecipe$Input"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TankRecipe extends $Record implements $Recipe<($TankRecipe$Input)> {

constructor(input: $Ingredient$$Type, output: $ItemStack$$Type, fluid: $FluidStack$$Type, mode: $TankRecipe$Mode$$Type)

public "input"(): $Ingredient
public "output"(): $ItemStack
public "mode"(): $TankRecipe$Mode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $TankRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "fluid"(): $FluidStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $TankRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $TankRecipe$Input$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$$Type = ({"input"?: $Ingredient$$Type, "mode"?: $TankRecipe$Mode$$Type, "fluid"?: $FluidStack$$Type, "output"?: $ItemStack$$Type}) | ([input?: $Ingredient$$Type, mode?: $TankRecipe$Mode$$Type, fluid?: $FluidStack$$Type, output?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRecipe_ = $TankRecipe$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedStairBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StairBlock, $StairBlock$$Type} from "net.minecraft.world.level.block.StairBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$StairsShape, $StairsShape$$Type} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PaintedStairBlock extends $StairBlock implements $EntityBlock, $PaintedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedStairBlock$$Type = ($PaintedStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedStairBlock_ = $PaintedStairBlock$$Type;
}}
declare module "com.enderio.base.common.item.tool.CoordinateSelectorItem" {
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
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $CoordinateSelectorItem extends $Item {
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
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoordinateSelectorItem$$Type = ($CoordinateSelectorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoordinateSelectorItem_ = $CoordinateSelectorItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$GrindingBallData, $GrindingBallData$$Type} from "com.enderio.base.api.grindingball.GrindingBallData"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SagMillingRecipe$Input extends $Record implements $RecipeInput {

constructor(inputItemStack: $ItemStack$$Type, grindingBallData: $GrindingBallData$$Type)

public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "grindingBallData"(): $GrindingBallData
public "inputItemStack"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$Input$$Type = ({"inputItemStack"?: $ItemStack$$Type, "grindingBallData"?: $GrindingBallData$$Type}) | ([inputItemStack?: $ItemStack$$Type, grindingBallData?: $GrindingBallData$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$Input_ = $SagMillingRecipe$Input$$Type;
}}
declare module "com.enderio.core.common.graph.Network$IndexedEdgeList" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$INetworkNode, $INetworkNode$$Type} from "com.enderio.core.common.graph.INetworkNode"
import {$Network, $Network$$Type} from "com.enderio.core.common.graph.Network"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Network$IndexedEdgeList extends $Record {
static readonly "CODEC": $Codec<($Network$IndexedEdgeList)>

constructor(edges: $List$$Type<($Pair$$Type<(integer), (integer)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "expand"<TNode extends $INetworkNode<($Network<(any), (TNode)>), (TNode)>>(arg0: $List$$Type<(TNode)>): $List<($Pair<(TNode), (TNode)>)>
public "edges"(): $List<($Pair<(integer), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Network$IndexedEdgeList$$Type = ({"edges"?: $List$$Type<($Pair$$Type<(integer), (integer)>)>}) | ([edges?: $List$$Type<($Pair$$Type<(integer), (integer)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Network$IndexedEdgeList_ = $Network$IndexedEdgeList$$Type;
}}
declare module "com.enderio.armory.common.item.darksteel.upgrades.TieredUpgrade" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IDarkSteelUpgrade, $IDarkSteelUpgrade$$Type} from "com.enderio.armory.api.capability.IDarkSteelUpgrade"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IUpgradeTier, $IUpgradeTier$$Type} from "com.enderio.armory.api.capability.IUpgradeTier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $TieredUpgrade<T extends $IUpgradeTier> implements $IDarkSteelUpgrade {
static readonly "TIER_KEY": StringJS


public "getDisplayName"(): $Component
public "getName"(): StringJS
public "deserializeNBT"(arg0: $Tag$$Type): void
public "serializeNBT"(): $CompoundTag
public "getNextTier"(): $Optional<($IDarkSteelUpgrade)>
public "isBaseTier"(): boolean
public "isValidUpgrade"(arg0: $IDarkSteelUpgrade$$Type): boolean
public "getTier"(): $Optional<($IUpgradeTier)>
public "getDescription"(): $Collection<($Component)>
public "getSlot"(): StringJS
public "onAddedToItem"(arg0: $ItemStack$$Type): void
public "onRemovedFromItem"(arg0: $ItemStack$$Type): void
get "displayName"(): $Component
get "name"(): StringJS
get "nextTier"(): $Optional<($IDarkSteelUpgrade)>
get "baseTier"(): boolean
get "tier"(): $Optional<($IUpgradeTier)>
get "description"(): $Collection<($Component)>
get "slot"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredUpgrade$$Type<T> = ($TieredUpgrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredUpgrade_<T> = $TieredUpgrade$$Type<(T)>;
}}
declare module "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$OutputItem$SizedTagOutput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SagMillingRecipe$OutputItem$SizedTagOutput extends $Record {

constructor(itemTag: $TagKey$$Type<($Item)>, count: integer)

public "itemTag"(): $TagKey<($Item)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "count"(): integer
public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$OutputItem$SizedTagOutput$$Type = ({"itemTag"?: $TagKey$$Type<($Item)>, "count"?: integer}) | ([itemTag?: $TagKey$$Type<($Item)>, count?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$OutputItem$SizedTagOutput_ = $SagMillingRecipe$OutputItem$SizedTagOutput$$Type;
}}
declare module "com.enderio.machines.common.io.fluid.MachineTankLayout" {
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MachineTankLayout$Builder, $MachineTankLayout$Builder$$Type} from "com.enderio.machines.common.io.fluid.MachineTankLayout$Builder"

export class $MachineTankLayout {


public static "builder"(): $MachineTankLayout$Builder
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "getTankCount"(): integer
public "canInsert"(arg0: integer): boolean
public "canExtract"(arg0: integer): boolean
public "getTankCapacity"(arg0: integer): integer
get "tankCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTankLayout$$Type = ($MachineTankLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineTankLayout_ = $MachineTankLayout$$Type;
}}
declare module "com.enderio.conduits.api.connection.ConnectionStatus" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $ConnectionStatus extends $Enum<($ConnectionStatus)> implements $StringRepresentable {
static readonly "DISABLED": $ConnectionStatus
static readonly "CONNECTED_BLOCK": $ConnectionStatus
static readonly "DISCONNECTED": $ConnectionStatus
static readonly "CODEC": $StringRepresentable$EnumCodec<($ConnectionStatus)>
static readonly "BY_ID": $IntFunction<($ConnectionStatus)>
static readonly "CONNECTED_CONDUIT": $ConnectionStatus
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ConnectionStatus)>


public "isConnected"(): boolean
public static "values"(): ($ConnectionStatus)[]
public static "valueOf"(arg0: StringJS): $ConnectionStatus
public static "byName"(arg0: StringJS): $ConnectionStatus
public "isEndpoint"(): boolean
public "canConnect"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "connected"(): boolean
get "endpoint"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionStatus$$Type = (("none") | ("connected_block") | ("connected_conduit") | ("disabled"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionStatus_ = $ConnectionStatus$$Type;
}}
declare module "com.enderio.machines.common.travel.AnchorTravelTarget" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TravelTargetSerializer, $TravelTargetSerializer$$Type} from "com.enderio.base.api.travel.TravelTargetSerializer"
import {$NetworkDataSlot$CodecType, $NetworkDataSlot$CodecType$$Type} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TravelTargetType, $TravelTargetType$$Type} from "com.enderio.base.api.travel.TravelTargetType"
import {$TravelTarget, $TravelTarget$$Type} from "com.enderio.base.api.travel.TravelTarget"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AnchorTravelTarget extends $Record implements $TravelTarget {
static readonly "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($AnchorTravelTarget)>

constructor(pos: $BlockPos$$Type, name: StringJS, icon: $Item$$Type, isVisible: boolean)

public "pos"(): $BlockPos
public "name"(): StringJS
public "type"(): $TravelTargetType<(any)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "icon"(): $Item
public "isVisible"(): boolean
public "serializer"(): $TravelTargetSerializer<(any)>
public "withName"(arg0: StringJS): $AnchorTravelTarget
public "canTravelTo"(): boolean
public "canJumpTo"(): boolean
public "withIcon"(arg0: $Item$$Type): $AnchorTravelTarget
public "withVisible"(arg0: boolean): $AnchorTravelTarget
public "canTeleportTo"(): boolean
public "item2BlockRange"(): integer
public "block2BlockRange"(): integer
public "canInteract"(): boolean
public "interact"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
get "visible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnchorTravelTarget$$Type = ({"name"?: StringJS, "pos"?: $BlockPos$$Type, "isVisible"?: boolean, "icon"?: $Item$$Type}) | ([name?: StringJS, pos?: $BlockPos$$Type, isVisible?: boolean, icon?: $Item$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnchorTravelTarget_ = $AnchorTravelTarget$$Type;
}}
declare module "com.enderio.machines.common.blocks.painting.PaintingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$PaintingRecipe, $PaintingRecipe$$Type} from "com.enderio.machines.common.blocks.painting.PaintingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PaintingRecipe$Serializer implements $RecipeSerializer<($PaintingRecipe)> {
static readonly "CODEC": $MapCodec<($PaintingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PaintingRecipe)>

constructor()

public "codec"(): $MapCodec<($PaintingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PaintingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingRecipe$Serializer$$Type = ($PaintingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingRecipe$Serializer_ = $PaintingRecipe$Serializer$$Type;
}}
declare module "com.enderio.base.common.item.misc.LocationPrintoutItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$CoordinateSelection, $CoordinateSelection$$Type} from "com.enderio.base.api.attachment.CoordinateSelection"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $LocationPrintoutItem extends $Item {
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
public static "getSelection"(arg0: $ItemStack$$Type): $Optional<($CoordinateSelection)>
public static "setSelection"(arg0: $ItemStack$$Type, arg1: $CoordinateSelection$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationPrintoutItem$$Type = ($LocationPrintoutItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocationPrintoutItem_ = $LocationPrintoutItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.travel_anchor.TravelAnchorBlockEntity" {
import {$MachineInventoryLayout, $MachineInventoryLayout$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout"
import {$SideConfig, $SideConfig$$Type} from "com.enderio.base.api.capability.SideConfig"
import {$ISoulBindable, $ISoulBindable$$Type} from "com.enderio.base.api.soul.binding.ISoulBindable"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TravelAnchorBlockEntity extends $MachineBlockEntity {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "GHOST": $SingleSlotAccess
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($ISoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isActive"(): boolean
public "getName"(): StringJS
public "setName"(arg0: StringJS): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "setIcon"(arg0: $Item$$Type): void
public "isVisible"(): boolean
public "getIcon"(): $Item
public "setIsVisible"(arg0: boolean): void
public "createInventoryLayout"(): $MachineInventoryLayout
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "name"(): StringJS
set "name"(value: StringJS)
set "icon"(value: $Item$$Type)
get "visible"(): boolean
get "icon"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelAnchorBlockEntity$$Type = ($TravelAnchorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelAnchorBlockEntity_ = $TravelAnchorBlockEntity$$Type;
}}
declare module "com.enderio.base.common.block.skull.EnderSkullBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SkullBlock, $SkullBlock$$Type} from "net.minecraft.world.level.block.SkullBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderSkullBlock extends $SkullBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SkullBlock)>
static readonly "MAX": integer
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSkullBlock$$Type = ($EnderSkullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSkullBlock_ = $EnderSkullBlock$$Type;
}}
declare module "com.enderio.conduits.common.conduit.network.ConduitNode" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$NodeDataType, $NodeDataType$$Type} from "com.enderio.conduits.api.network.node.NodeDataType"
import {$INetworkNode, $INetworkNode$$Type} from "com.enderio.core.common.graph.INetworkNode"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IConduitNodeAttachment, $IConduitNodeAttachment$$Type} from "com.enderio.conduits.common.conduit.network.IConduitNodeAttachment"
import {$NodeData, $NodeData$$Type} from "com.enderio.conduits.api.network.node.NodeData"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Network, $Network$$Type} from "com.enderio.core.common.graph.Network"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$ConduitDataContainer, $ConduitDataContainer$$Type} from "com.enderio.conduits.common.conduit.legacy.ConduitDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.common.conduit.network.ConduitNetwork"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $ConduitNode implements $INetworkNode<($ConduitNetwork), ($ConduitNode)>, $IConduitNode {
static readonly "CODEC": $Codec<($ConduitNode)>

constructor(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $BlockPos$$Type, arg2: $NodeData$$Type)
constructor(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $BlockPos$$Type, arg2: $ConduitDataContainer$$Type)
constructor(arg0: $Holder$$Type<($Conduit<(any), (any)>)>, arg1: $BlockPos$$Type)

public "pos"(): $BlockPos
public "attach"(arg0: $IConduitNodeAttachment$$Type, arg1: $Holder$$Type<($Conduit<(any), (any)>)>): void
public "detach"(): void
public "isValid"(): boolean
public "isLoaded"(): boolean
public "markDirty"(): void
public "getInventory"(arg0: $Direction$$Type): $IItemHandlerModifiable
public "hasNodeData"(arg0: $NodeDataType$$Type<(any)>): boolean
public "setNodeData"<D extends $NodeData>(arg0: D): void
public "isConnectedTo"(arg0: $Direction$$Type): boolean
public "setNetwork"(arg0: $ConduitNetwork$$Type): void
public "setNetwork"(arg0: $Network$$Type<(any), (any)>): void
public "getNodeData"(): $NodeData
public "getNodeData"<D extends $NodeData>(arg0: $NodeDataType$$Type<(D)>): D
public "isTicking"(): boolean
public "getNetwork"(): $Network<(any), (any)>
public "onConfigChanged"(): void
public "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
public "onRedstoneChanged"(): void
public "getConnectionConfig"(arg0: $Direction$$Type): $ConnectionConfig
public "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Direction$$Type, arg1: $ConnectionConfigType$$Type<(T)>): T
public "getOrCreateNodeData"<D extends $NodeData>(arg0: $NodeDataType$$Type<(D)>): D
public "isConnectedToBlock"(arg0: $Direction$$Type): boolean
public "getNeighborSidedCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg1: $Direction$$Type): TCapability
public "getNeighborVoidCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), (void)>, arg1: $Direction$$Type): TCapability
get "valid"(): boolean
get "loaded"(): boolean
set "nodeData"(value: D)
set "network"(value: $ConduitNetwork$$Type)
set "network"(value: $Network$$Type<(any), (any)>)
get "nodeData"(): $NodeData
get "ticking"(): boolean
get "network"(): $Network<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNode$$Type = ($ConduitNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitNode_ = $ConduitNode$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.item.ItemConduitConnectionConfig" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RedstoneSensitiveConnectionConfig, $RedstoneSensitiveConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.RedstoneSensitiveConnectionConfig"
import {$List, $List$$Type} from "java.util.List"
import {$ConduitRedstoneSignalAware, $ConduitRedstoneSignalAware$$Type} from "com.enderio.conduits.api.ConduitRedstoneSignalAware"
import {$IOConnectionConfig, $IOConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.IOConnectionConfig"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ItemConduitConnectionConfig extends $Record implements $IOConnectionConfig, $RedstoneSensitiveConnectionConfig {
static readonly "CODEC": $MapCodec<($ItemConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($ItemConduitConnectionConfig)>
static readonly "DEFAULT": $ItemConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ItemConduitConnectionConfig)>

constructor(isInsert: boolean, insertChannel: $DyeColor$$Type, isExtract: boolean, extractChannel: $DyeColor$$Type, extractRedstoneControl: $RedstoneControl$$Type, extractRedstoneChannel: $DyeColor$$Type, isRoundRobin: boolean, isSelfFeed: boolean, priority: integer)

public "priority"(): integer
public "type"(): $ConnectionConfigType<($ItemConduitConnectionConfig)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "disconnected"(): $ConnectionConfig
public "reconnected"(): $ConnectionConfig
public "withPriority"(arg0: integer): $ItemConduitConnectionConfig
public "withIsSelfFeed"(arg0: boolean): $ItemConduitConnectionConfig
public "isSelfFeed"(): boolean
public "isRoundRobin"(): boolean
public "withIsInsert"(arg0: boolean): $ItemConduitConnectionConfig
public "withIsExtract"(arg0: boolean): $ItemConduitConnectionConfig
public "isInsert"(): boolean
public "isExtract"(): boolean
public "insertChannel"(): $DyeColor
public "extractChannel"(): $DyeColor
public "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "withExtractChannel"(arg0: $DyeColor$$Type): $ItemConduitConnectionConfig
public "withInsertChannel"(arg0: $DyeColor$$Type): $ItemConduitConnectionConfig
public "withIsRoundRobin"(arg0: boolean): $ItemConduitConnectionConfig
public "extractRedstoneControl"(): $RedstoneControl
public "extractRedstoneChannel"(): $DyeColor
public "withExtractRedstoneControl"(arg0: $RedstoneControl$$Type): $ItemConduitConnectionConfig
public "withExtractRedstoneChannel"(arg0: $DyeColor$$Type): $ItemConduitConnectionConfig
public "getRedstoneSignalColors"(): $List<($DyeColor)>
public "isConnected"(): boolean
get "selfFeed"(): boolean
get "roundRobin"(): boolean
get "insert"(): boolean
get "extract"(): boolean
get "redstoneSignalColors"(): $List<($DyeColor)>
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConduitConnectionConfig$$Type = ({"extractChannel"?: $DyeColor$$Type, "insertChannel"?: $DyeColor$$Type, "isExtract"?: boolean, "isInsert"?: boolean, "isRoundRobin"?: boolean, "isSelfFeed"?: boolean, "extractRedstoneChannel"?: $DyeColor$$Type, "priority"?: integer, "extractRedstoneControl"?: $RedstoneControl$$Type}) | ([extractChannel?: $DyeColor$$Type, insertChannel?: $DyeColor$$Type, isExtract?: boolean, isInsert?: boolean, isRoundRobin?: boolean, isSelfFeed?: boolean, extractRedstoneChannel?: $DyeColor$$Type, priority?: integer, extractRedstoneControl?: $RedstoneControl$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemConduitConnectionConfig_ = $ItemConduitConnectionConfig$$Type;
}}
declare module "com.enderio.core.common.network.NetworkDataSlot$Type" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $NetworkDataSlot$Type<T> {

 "hash"(arg0: T): integer
 "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
 "read"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $Supplier$$Type<(T)>): T
 "save"(arg0: $HolderLookup$Provider$$Type, arg1: T): $Tag
 "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type, arg2: $Supplier$$Type<(T)>): T
}

export namespace $NetworkDataSlot$Type {
const probejs$$marker: never
}
export class $NetworkDataSlot$Type$$Static<T> implements $NetworkDataSlot$Type {


 "hash"(arg0: T): integer
 "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
 "read"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $Supplier$$Type<(T)>): T
 "save"(arg0: $HolderLookup$Provider$$Type, arg1: T): $Tag
 "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type, arg2: $Supplier$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDataSlot$Type$$Type<T> = ($NetworkDataSlot$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkDataSlot$Type_<T> = $NetworkDataSlot$Type$$Type<(T)>;
}}
declare module "com.enderio.machines.mixin.AbstractCookingRecipeAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"

export interface $AbstractCookingRecipeAccessor {

 "getResult"(): $ItemStack
 "getIngredient"(): $Ingredient
 "getExperience"(): float
get "result"(): $ItemStack
get "ingredient"(): $Ingredient
get "experience"(): float
}

export namespace $AbstractCookingRecipeAccessor {
const probejs$$marker: never
}
export class $AbstractCookingRecipeAccessor$$Static implements $AbstractCookingRecipeAccessor {


 "getResult"(): $ItemStack
 "getIngredient"(): $Ingredient
 "getExperience"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCookingRecipeAccessor$$Type = ($AbstractCookingRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCookingRecipeAccessor_ = $AbstractCookingRecipeAccessor$$Type;
}}
declare module "com.enderio.core.common.menu.BaseEnderMenu" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$SlotPayload, $SlotPayload$$Type} from "com.enderio.core.common.network.menu.payload.SlotPayload"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $BaseEnderMenu extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer


public "sendAllDataToRemote"(): void
public "broadcastChanges"(): void
public "clientHandleIncomingPayload"(arg0: short, arg1: $SlotPayload$$Type): void
public "serverHandleIncomingPayload"(arg0: short, arg1: $SlotPayload$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseEnderMenu$$Type = ($BaseEnderMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseEnderMenu_ = $BaseEnderMenu$$Type;
}}
declare module "com.enderio.base.common.paint.block.PaintedTrapDoorBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$TrapDoorBlock, $TrapDoorBlock$$Type} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PaintedTrapDoorBlock extends $TrapDoorBlock implements $EntityBlock, $PaintedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedTrapDoorBlock$$Type = ($PaintedTrapDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedTrapDoorBlock_ = $PaintedTrapDoorBlock$$Type;
}}
declare module "com.enderio.base.common.item.misc.BrokenSpawnerItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Soul, $Soul$$Type} from "com.enderio.base.api.soul.Soul"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BrokenSpawnerItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "forSoul"(arg0: $Soul$$Type): $ItemStack
public static "getPossibleStacks"(): $List<($ItemStack)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrokenSpawnerItem$$Type = ($BrokenSpawnerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrokenSpawnerItem_ = $BrokenSpawnerItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.travel_anchor.TravelAnchorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$TravelAnchorBlockEntity, $TravelAnchorBlockEntity$$Type} from "com.enderio.machines.common.blocks.travel_anchor.TravelAnchorBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$MachineBlock, $MachineBlock$$Type} from "com.enderio.machines.common.blocks.base.block.MachineBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TravelAnchorBlock<T extends $TravelAnchorBlockEntity> extends $MachineBlock<(T)> {
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

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelAnchorBlock$$Type<T> = ($TravelAnchorBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelAnchorBlock_<T> = $TravelAnchorBlock$$Type<(T)>;
}}
declare module "com.enderio.base.common.filter.item.general.DamageFilterMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $DamageFilterMode extends $Enum<($DamageFilterMode)> implements $StringRepresentable {
static readonly "NOT_DAMAGED": $DamageFilterMode
static readonly "CODEC": $Codec<($DamageFilterMode)>
static readonly "MORE_THAN_50": $DamageFilterMode
static readonly "IS_DAMAGEABLE": $DamageFilterMode
static readonly "BY_ID": $IntFunction<($DamageFilterMode)>
static readonly "UP_TO_75": $DamageFilterMode
static readonly "IGNORE": $DamageFilterMode
static readonly "UP_TO_50": $DamageFilterMode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($DamageFilterMode)>
static readonly "UP_TO_25": $DamageFilterMode
static readonly "ONLY_DAMAGED": $DamageFilterMode
static readonly "MORE_THAN_75": $DamageFilterMode
static readonly "NOT_DAMAGEABLE": $DamageFilterMode
static readonly "MORE_THAN_25": $DamageFilterMode


public static "values"(): ($DamageFilterMode)[]
public "test"(arg0: $ItemStack$$Type): boolean
public static "valueOf"(arg0: StringJS): $DamageFilterMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageFilterMode$$Type = (("ignore") | ("up_to_25") | ("more_than_25") | ("up_to_50") | ("more_than_50") | ("up_to_75") | ("more_than_75") | ("not_damaged") | ("only_damaged") | ("is_damageable") | ("not_damageable"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageFilterMode_ = $DamageFilterMode$$Type;
}}
declare module "com.enderio.base.common.item.misc.EnderiosItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $EnderiosItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderiosItem$$Type = ($EnderiosItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderiosItem_ = $EnderiosItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.enchanter.EnchanterBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchanterBlock extends $Block implements $EntityBlock {
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
export type $EnchanterBlock$$Type = ($EnchanterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterBlock_ = $EnchanterBlock$$Type;
}}
declare module "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineRecipe, $MachineRecipe$$Type} from "com.enderio.machines.common.blocks.base.MachineRecipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SagMillingRecipe$OutputItem, $SagMillingRecipe$OutputItem$$Type} from "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$OutputItem"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$GrindingBallData, $GrindingBallData$$Type} from "com.enderio.base.api.grindingball.GrindingBallData"
import {$SagMillingRecipe$BonusType, $SagMillingRecipe$BonusType$$Type} from "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$BonusType"
import {$OutputStack, $OutputStack$$Type} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SagMillingRecipe$Input, $SagMillingRecipe$Input$$Type} from "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$Input"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $SagMillingRecipe extends $Record implements $MachineRecipe<($SagMillingRecipe$Input)> {

constructor(input: $Ingredient$$Type, outputs: $List$$Type<($SagMillingRecipe$OutputItem$$Type)>, energy: integer, bonusType: $SagMillingRecipe$BonusType$$Type)

public "input"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $SagMillingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $SagMillingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "energy"(): integer
public "getIngredients"(): $NonNullList<($Ingredient)>
public "outputs"(): $List<($SagMillingRecipe$OutputItem)>
public "bonusType"(): $SagMillingRecipe$BonusType
public "getEnergyCost"(arg0: $RecipeInput$$Type): integer
public "getEnergyCost"(arg0: $GrindingBallData$$Type): integer
public "getEnergyCost"(arg0: $SagMillingRecipe$Input$$Type): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SagMillingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SagMillingRecipe$Input$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$$Type = ({"outputs"?: $List$$Type<($SagMillingRecipe$OutputItem$$Type)>, "input"?: $Ingredient$$Type, "energy"?: integer, "bonusType"?: $SagMillingRecipe$BonusType$$Type}) | ([outputs?: $List$$Type<($SagMillingRecipe$OutputItem$$Type)>, input?: $Ingredient$$Type, energy?: integer, bonusType?: $SagMillingRecipe$BonusType$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe_ = $SagMillingRecipe$$Type;
}}
declare module "com.enderio.regilite.holder.RegiliteBlockEntity" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ITagagble, $ITagagble$$Type} from "com.enderio.regilite.registry.ITagagble"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BlockEntityRenderer, $BlockEntityRenderer$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntityRendererProvider$Context, $BlockEntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RegiliteBlockEntity<T extends $BlockEntity> extends $DeferredHolder<($BlockEntityType<($BlockEntity)>), ($BlockEntityType<(T)>)> implements $ITagagble<($BlockEntityType<(any)>)> {


public "create"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): T
public "apply"(arg0: $Consumer$$Type<($RegiliteBlockEntity<(T)>)>): $RegiliteBlockEntity<(T)>
public "getTags"(): $Set<($TagKey<($BlockEntityType<(any)>)>)>
public "getRenderer"(): $Supplier<($Function<($BlockEntityRendererProvider$Context), ($BlockEntityRenderer<(T)>)>)>
public "setRenderer"(arg0: $Supplier$$Type<($Function$$Type<($BlockEntityRendererProvider$Context$$Type), ($BlockEntityRenderer$$Type<(T)>)>)>): $RegiliteBlockEntity<(T)>
public "addCapability"<TCap, TContext>(arg0: $BlockCapability$$Type<(TCap), (TContext)>, arg1: $ICapabilityProvider$$Type<(T), (TContext), (TCap)>): $RegiliteBlockEntity<(T)>
public "addBlockEntityTagsTags"(...arg0: ($TagKey$$Type<($BlockEntityType$$Type<(any)>)>)[]): $RegiliteBlockEntity<(T)>
public static "createBlockEntity"<T extends $BlockEntity>(arg0: $ResourceKey$$Type<($BlockEntityType<($BlockEntity)>)>): $RegiliteBlockEntity<(T)>
public "registerCapabilityProviders"(arg0: $RegisterCapabilitiesEvent$$Type): void
public static "direct"<T>(arg0: T): $Holder<(T)>
get "tags"(): $Set<($TagKey<($BlockEntityType<(any)>)>)>
get "renderer"(): $Supplier<($Function<($BlockEntityRendererProvider$Context), ($BlockEntityRenderer<(T)>)>)>
set "renderer"(value: $Supplier$$Type<($Function$$Type<($BlockEntityRendererProvider$Context$$Type), ($BlockEntityRenderer$$Type<(T)>)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegiliteBlockEntity$$Type<T> = ($RegiliteBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegiliteBlockEntity_<T> = $RegiliteBlockEntity$$Type<(T)>;
}}
declare module "com.enderio.base.common.recipe.FireCraftingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$FireCraftingRecipe, $FireCraftingRecipe$$Type} from "com.enderio.base.common.recipe.FireCraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FireCraftingRecipe$Serializer implements $RecipeSerializer<($FireCraftingRecipe)> {
static readonly "CODEC": $MapCodec<($FireCraftingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FireCraftingRecipe)>

constructor()

public "codec"(): $MapCodec<($FireCraftingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FireCraftingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingRecipe$Serializer$$Type = ($FireCraftingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireCraftingRecipe$Serializer_ = $FireCraftingRecipe$Serializer$$Type;
}}
declare module "com.enderio.machines.common.blocks.travel_anchor.PaintedTravelAnchorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SideConfig, $SideConfig$$Type} from "com.enderio.base.api.capability.SideConfig"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ISoulBindable, $ISoulBindable$$Type} from "com.enderio.base.api.soul.binding.ISoulBindable"
import {$TravelAnchorBlockEntity, $TravelAnchorBlockEntity$$Type} from "com.enderio.machines.common.blocks.travel_anchor.TravelAnchorBlockEntity"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$PaintedBlockEntity, $PaintedBlockEntity$$Type} from "com.enderio.base.common.paint.blockentity.PaintedBlockEntity"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PaintedTravelAnchorBlockEntity extends $TravelAnchorBlockEntity implements $PaintedBlockEntity {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "GHOST": $SingleSlotAccess
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($ISoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getModelData"(): $ModelData
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "setPrimaryPaint"(arg0: $Block$$Type): void
public "getPrimaryPaint"(): $Optional<($Block)>
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $Packet<(any)>
public "getSecondaryPaint"(): $Optional<($Block)>
public "setSecondaryPaint"(arg0: $Block$$Type): void
public "hasSecondaryPaint"(): boolean
public static "createAndRegisterModelProperty"(): $ModelProperty<($Block)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "modelData"(): $ModelData
set "primaryPaint"(value: $Block$$Type)
get "primaryPaint"(): $Optional<($Block)>
get "updatePacket"(): $Packet<(any)>
get "secondaryPaint"(): $Optional<($Block)>
set "secondaryPaint"(value: $Block$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedTravelAnchorBlockEntity$$Type = ($PaintedTravelAnchorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintedTravelAnchorBlockEntity_ = $PaintedTravelAnchorBlockEntity$$Type;
}}
declare module "com.enderio.base.common.block.EIOPressurePlateBlock$Detector" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $EIOPressurePlateBlock$Detector {

 "getSignalStrength"(arg0: $Level$$Type, arg1: $BlockPos$$Type): integer

(arg0: $Level, arg1: $BlockPos): integer
}

export namespace $EIOPressurePlateBlock$Detector {
const probejs$$marker: never
}
export class $EIOPressurePlateBlock$Detector$$Static implements $EIOPressurePlateBlock$Detector {


 "getSignalStrength"(arg0: $Level$$Type, arg1: $BlockPos$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOPressurePlateBlock$Detector$$Type = ((arg0: $Level, arg1: $BlockPos) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EIOPressurePlateBlock$Detector_ = $EIOPressurePlateBlock$Detector$$Type;
}}
declare module "com.enderio.machines.common.blocks.enchanter.EnchanterRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnchanterRecipe$Input extends $Record implements $RecipeInput {

constructor(bookItem: $ItemStack$$Type, catalyst: $ItemStack$$Type, lapis: $ItemStack$$Type)

public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "lapis"(): $ItemStack
public "bookItem"(): $ItemStack
public "catalyst"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$Input$$Type = ({"lapis"?: $ItemStack$$Type, "bookItem"?: $ItemStack$$Type, "catalyst"?: $ItemStack$$Type}) | ([lapis?: $ItemStack$$Type, bookItem?: $ItemStack$$Type, catalyst?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterRecipe$Input_ = $EnchanterRecipe$Input$$Type;
}}
declare module "com.enderio.core.common.graph.INetworkNode" {
import {$Network, $Network$$Type} from "com.enderio.core.common.graph.Network"

export interface $INetworkNode<TNet extends $Network<(TNet), (TNode)>, TNode extends $INetworkNode<(TNet), (TNode)>> {

 "isValid"(): boolean
 "setNetwork"(arg0: TNet): void
 "getNetwork"(): TNet
get "valid"(): boolean
set "network"(value: TNet)
get "network"(): TNet
}

export namespace $INetworkNode {
const probejs$$marker: never
}
export class $INetworkNode$$Static<TNet extends $Network<(TNet), (TNode)>, TNode extends $INetworkNode<(TNet), (TNode)>> implements $INetworkNode {


 "isValid"(): boolean
 "setNetwork"(arg0: TNet): void
 "getNetwork"(): TNet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkNode$$Type<TNet, TNode> = ($INetworkNode<(TNet), (TNode)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkNode_<TNet, TNode> = $INetworkNode$$Type<(TNet), (TNode)>;
}}
declare module "com.enderio.regilite.registry.ITagagble" {
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $ITagagble<T> {

 "getTags"(): $Set<($TagKey<(T)>)>

(): $Set$$Type<($TagKey$$Type<(T)>)>
get "tags"(): $Set<($TagKey<(T)>)>
}

export namespace $ITagagble {
const probejs$$marker: never
}
export class $ITagagble$$Static<T> implements $ITagagble {


 "getTags"(): $Set<($TagKey<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagagble$$Type<T> = (() => $Set$$Type<($TagKey$$Type<(T)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITagagble_<T> = $ITagagble$$Type<(T)>;
}}
declare module "com.enderio.conduits.common.conduit.bundle.ConduitBundleBlock" {
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
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export class $ConduitBundleBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
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

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
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
export type $ConduitBundleBlock$$Type = ($ConduitBundleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitBundleBlock_ = $ConduitBundleBlock$$Type;
}}
declare module "com.enderio.base.common.particle.RangeParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RangeParticleData, $RangeParticleData$$Type} from "com.enderio.base.common.particle.RangeParticleData"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RangeParticleType extends $ParticleType<($RangeParticleData)> {

constructor()

public "codec"(): $MapCodec<($RangeParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RangeParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeParticleType$$Type = ($RangeParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeParticleType_ = $RangeParticleType$$Type;
}}
declare module "com.enderio.machines.common.blocks.fluid_tank.FluidTankBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$FluidTankBlockEntity, $FluidTankBlockEntity$$Type} from "com.enderio.machines.common.blocks.fluid_tank.FluidTankBlockEntity"
import {$MachineBlock, $MachineBlock$$Type} from "com.enderio.machines.common.blocks.base.block.MachineBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidTankBlock extends $MachineBlock<($FluidTankBlockEntity)> {
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

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<($FluidTankBlockEntity$$Type)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlock$$Type = ($FluidTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankBlock_ = $FluidTankBlock$$Type;
}}
declare module "com.enderio.base.api.travel.TravelTargetType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TravelTarget, $TravelTarget$$Type} from "com.enderio.base.api.travel.TravelTarget"

export interface $TravelTargetType<T extends $TravelTarget> {

/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioTravelTargetTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioTravelTargetTypesTag
}

export namespace $TravelTargetType {
function simple<T extends $TravelTarget>(arg0: $ResourceLocation$$Type): $TravelTargetType<(T)>
const probejs$$marker: never
}
export class $TravelTargetType$$Static<T extends $TravelTarget> implements $TravelTargetType {


static "simple"<T extends $TravelTarget>(arg0: $ResourceLocation$$Type): $TravelTargetType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelTargetType$$Type<T> = (Special.EnderioTravelTargetTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelTargetType_<T> = $TravelTargetType$$Type<(T)>;
}}
declare module "com.enderio.base.common.item.misc.MaterialItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $MaterialItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: boolean)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItem$$Type = ($MaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItem_ = $MaterialItem$$Type;
}}
declare module "com.enderio.machines.common.blocks.powered_spawner.MindKillerBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MindKillerBlock extends $Block implements $EntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MindKillerBlock$$Type = ($MindKillerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MindKillerBlock_ = $MindKillerBlock$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.item.ItemConduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemConduitConnectionConfig, $ItemConduitConnectionConfig$$Type} from "com.enderio.conduits.common.conduit.type.item.ItemConduitConnectionConfig"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.bundle.SlotType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ConduitDataAccessor, $ConduitDataAccessor$$Type} from "com.enderio.conduits.api.network.node.legacy.ConduitDataAccessor"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Vector2i, $Vector2i$$Type} from "org.joml.Vector2i"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.conduits.api.network.ConduitBlockConnection"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ConnectionConfigType, $ConnectionConfigType$$Type} from "com.enderio.conduits.api.connection.config.ConnectionConfigType"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$IConduitNode, $IConduitNode$$Type} from "com.enderio.conduits.api.network.node.IConduitNode"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.api.bundle.ConduitBundle"

export class $ItemConduit extends $Record implements $Conduit<($ItemConduit), ($ItemConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($ItemConduit)>
static readonly "INSERT_FILTER_SLOT": integer
static readonly "EXTRACT_FILTER_SLOT": integer

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, transferRatePerCycle: integer, networkTickRate: integer)

public "type"(): $ConduitType<($ItemConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ItemConduit$$Type): integer
public "compareTo"(arg0: any): integer
public "ticker"(): $ConduitTicker<(any)>
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "texture"(): $ResourceLocation
public "description"(): $Component
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
public "copyLegacyData"(arg0: $IConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
public "hasMenu"(): boolean
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getInventorySize"(): integer
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "networkTickRate"(): integer
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $ItemConduitConnectionConfig
public "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
public "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
public "connectionConfigType"(): $ConnectionConfigType<($ItemConduitConnectionConfig)>
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "transferRatePerCycle"(): integer
public "getInventorySlotPosition"(arg0: integer): $Vector2i
public "onCreated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "onConnectTo"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): void
public "onRemoved"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "hasConnectionDelay"(): boolean
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $IConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
public "canConnectToConduit"(arg0: $Holder$$Type<($Conduit<(any), (any)>)>): boolean
public "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $IConduitNode$$Type): $CompoundTag
public "onConnectionsUpdated"(arg0: $IConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "canConnectConduits"(arg0: $IConduitNode$$Type, arg1: $IConduitNode$$Type): boolean
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
public "hasServerConnectionChecks"(): boolean
get "inventorySize"(): integer
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConduit$$Type = ({"networkTickRate"?: integer, "texture"?: $ResourceLocation$$Type, "description"?: $Component$$Type, "transferRatePerCycle"?: integer}) | ([networkTickRate?: integer, texture?: $ResourceLocation$$Type, description?: $Component$$Type, transferRatePerCycle?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemConduit_ = $ItemConduit$$Type;
}}
declare module "com.enderio.machines.common.blocks.fluid_tank.TankRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$TankRecipe, $TankRecipe$$Type} from "com.enderio.machines.common.blocks.fluid_tank.TankRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $TankRecipe$Serializer implements $RecipeSerializer<($TankRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TankRecipe)>

constructor()

public "codec"(): $MapCodec<($TankRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($TankRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$Serializer$$Type = ($TankRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRecipe$Serializer_ = $TankRecipe$Serializer$$Type;
}}
declare module "com.enderio.base.common.item.tool.SoulVialItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Soul, $Soul$$Type} from "com.enderio.base.api.soul.Soul"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PlayerInteractEvent$EntityInteractSpecific, $PlayerInteractEvent$EntityInteractSpecific$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"
import {$FMLCommonSetupEvent, $FMLCommonSetupEvent$$Type} from "net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent"

export class $SoulVialItem extends $Item implements $AdvancedTooltipProvider {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILLED_MODEL_PROPERTY": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "KEY_HEALTH": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "onCommonSetup"(arg0: $FMLCommonSetupEvent$$Type): void
public static "getAllFilled"(): $List<($ItemStack)>
public static "forSoul"(arg0: $Soul$$Type): $ItemStack
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "onLivingInteract"(arg0: $PlayerInteractEvent$EntityInteractSpecific$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulVialItem$$Type = ($SoulVialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulVialItem_ = $SoulVialItem$$Type;
}}
declare module "com.enderio.base.common.advancement.UseGliderTrigger$TriggerInstance" {
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $UseGliderTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseGliderTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UseGliderTrigger$TriggerInstance_ = $UseGliderTrigger$TriggerInstance$$Type;
}}
