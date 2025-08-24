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

constructor(output: $ItemStack$$Type, input: $Ingredient$$Type, energy: integer, experience: integer, entityType: $Optional$$Type<($ResourceLocation$$Type)>, mobCategory: $Optional$$Type<($MobCategory$$Type)>, soulData: $Optional$$Type<(string)>, copyInputComponents: boolean)

public "getInput"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SoulBindingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "input"(): $Ingredient
public "output"(): $ItemStack
public "experience"(): integer
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "entityType"(): $Optional<($ResourceLocation)>
public "craft"(arg0: $SoulBindingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "energy"(): integer
public "copyInputComponents"(): boolean
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "soulData"(): $Optional<(string)>
public "mobCategory"(): $Optional<($MobCategory)>
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SoulBindingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getEnergyCost"(arg0: $SoulBindingRecipe$Input$$Type): integer
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SoulBindingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$$Type = ({"input"?: $Ingredient$$Type, "copyInputComponents"?: boolean, "experience"?: integer, "entityType"?: ($ResourceLocation$$Type)?, "mobCategory"?: ($MobCategory$$Type)?, "soulData"?: (string)?, "output"?: $ItemStack$$Type, "energy"?: integer}) | ([input?: $Ingredient$$Type, copyInputComponents?: boolean, experience?: integer, entityType?: ($ResourceLocation$$Type)?, mobCategory?: ($MobCategory$$Type)?, soulData?: (string)?, output?: $ItemStack$$Type, energy?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulBindingRecipe_ = $SoulBindingRecipe$$Type;
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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
declare module "com.enderio.conduits.common.conduit.type.energy.EnergyConduitTicker" {
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode$IOState, $ConduitNode$IOState$$Type} from "com.enderio.conduits.api.ConduitNode$IOState"
import {$ColoredRedstoneProvider, $ColoredRedstoneProvider$$Type} from "com.enderio.conduits.api.ColoredRedstoneProvider"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.api.ConduitNetwork"
import {$IOAwareConduitTicker$Connection, $IOAwareConduitTicker$Connection$$Type} from "com.enderio.conduits.api.ticker.IOAwareConduitTicker$Connection"
import {$IOAwareConduitTicker, $IOAwareConduitTicker$$Type} from "com.enderio.conduits.api.ticker.IOAwareConduitTicker"
import {$EnergyConduit, $EnergyConduit$$Type} from "com.enderio.conduits.common.conduit.type.energy.EnergyConduit"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $EnergyConduitTicker implements $IOAwareConduitTicker<($EnergyConduit)> {

constructor()

public "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "tickColoredGraph"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type<(any)>, arg2: $List$$Type<(any)>, arg3: $List$$Type<(any)>, arg4: $DyeColor$$Type, arg5: $ConduitNetwork$$Type, arg6: $ColoredRedstoneProvider$$Type): void
public "tickColoredGraph"(arg0: $ServerLevel$$Type, arg1: $EnergyConduit$$Type, arg2: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg3: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg4: $DyeColor$$Type, arg5: $ConduitNetwork$$Type, arg6: $ColoredRedstoneProvider$$Type): void
public "shouldSkipColor"(arg0: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg1: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>): boolean
public "tickGraph"(arg0: $ServerLevel$$Type, arg1: $EnergyConduit$$Type, arg2: $List$$Type<($ConduitNode$$Type)>, arg3: $ConduitNetwork$$Type, arg4: $ColoredRedstoneProvider$$Type): void
public "isRedstoneMode"(arg0: $EnergyConduit$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $ConduitNode$IOState$$Type, arg4: $ColoredRedstoneProvider$$Type): boolean
public "isLoaded"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "tickGraph"(arg0: $ServerLevel$$Type, arg1: $EnergyConduit$$Type, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
public "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
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
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$EnchanterRecipe$Input, $EnchanterRecipe$Input$$Type} from "com.enderio.machines.common.blocks.enchanter.EnchanterRecipe$Input"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnchanterRecipe extends $Record implements $Recipe<($EnchanterRecipe$Input)> {

constructor(enchantment: $Holder$$Type<($Enchantment)>, costMultiplier: integer, input: $SizedIngredient$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $EnchanterRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "input"(): $SizedIngredient
public "assemble"(arg0: $EnchanterRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "enchantment"(): $Holder<($Enchantment)>
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getEnchantmentLevel"(arg0: integer): integer
public "getInputAmountConsumed"(arg0: $EnchanterRecipe$Input$$Type): integer
public "getLapisForLevel"(arg0: integer): integer
public "costMultiplier"(): integer
public "getXPCost"(arg0: $EnchanterRecipe$Input$$Type): integer
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getXPCostForLevel"(arg0: integer): integer
public "getBookForLevel"(arg0: integer): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $EnchanterRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$$Type = ({"costMultiplier"?: integer, "enchantment"?: $Holder$$Type<($Enchantment)>, "input"?: $SizedIngredient$$Type}) | ([costMultiplier?: integer, enchantment?: $Holder$$Type<($Enchantment)>, input?: $SizedIngredient$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterRecipe_ = $EnchanterRecipe$$Type;
}}
declare module "com.enderio.conduits.common.conduit.ConduitBundle" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$NetworkDataSlot$CodecType, $NetworkDataSlot$CodecType$$Type} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.SlotType"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RightClickAction, $RightClickAction$$Type} from "com.enderio.conduits.common.conduit.RightClickAction"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ConnectionState, $ConnectionState$$Type} from "com.enderio.conduits.common.conduit.connection.ConnectionState"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FacadeType, $FacadeType$$Type} from "com.enderio.conduits.api.facade.FacadeType"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConduitGraphObject, $ConduitGraphObject$$Type} from "com.enderio.conduits.common.conduit.ConduitGraphObject"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $ConduitBundle {
static "CODEC": $Codec<($ConduitBundle)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitBundle)>
static readonly "MAX_CONDUITS": integer
static "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($ConduitBundle)>

constructor(arg0: $Runnable$$Type, arg1: $BlockPos$$Type)

public "hashCode"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $ConduitBundle
public "hasType"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "deepCopy"(): $ConduitBundle
public "onLoad"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "facade"(): $Optional<($Block)>
public "facade"(arg0: $ItemStack$$Type): void
public "getConnectionState"(arg0: $Direction$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>): $ConnectionState
/**
 * 
 * @deprecated
 */
public "getConnectionState"(arg0: $Direction$$Type, arg1: integer): $ConnectionState
public "setConnectionState"(arg0: $Direction$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>, arg2: $ConnectionState$$Type): void
public "setOnChangedRunnable"(arg0: $Runnable$$Type): void
public "getNodeForTypeExact"(arg0: $Holder$$Type<($Conduit<(any)>)>): $ConduitGraphObject
public "isConnectionEnd"(arg0: $Direction$$Type): boolean
public "getNodeFor"(arg0: $Holder$$Type<($Conduit<(any)>)>): $ConduitGraphObject
public "getConduits"(): $List<($Holder<($Conduit<(any)>)>)>
public "addConduit"(arg0: $Level$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>, arg2: $Player$$Type): $RightClickAction
public "removeConduit"(arg0: $Level$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>): boolean
/**
 * 
 * @deprecated
 */
public "disableConduit"(arg0: $Direction$$Type, arg1: integer): void
public "disableConduit"(arg0: $Direction$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>): void
public "setNodeFor"(arg0: $Holder$$Type<($Conduit<(any)>)>, arg1: $ConduitGraphObject$$Type): void
public "clearFacade"(): void
public "hasFacade"(): boolean
public "facadeItem"(): $ItemStack
public "disconnectFrom"(arg0: $Direction$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>): boolean
public "onChanged"(): void
public "connectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $Holder$$Type<($Conduit<(any)>)>, arg4: boolean): void
public "facadeType"(): $Optional<($FacadeType)>
public "getConnectedConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(any)>)>)>
public "getConduitIndex"(arg0: $Holder$$Type<($Conduit<(any)>)>): integer
public "getConnectionItem"(arg0: $Direction$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>, arg2: $SlotType$$Type): $ItemStack
public "getConnectionItem"(arg0: $Direction$$Type, arg1: integer, arg2: $SlotType$$Type): $ItemStack
public "setConnectionItem"(arg0: $Direction$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>, arg2: $SlotType$$Type, arg3: $ItemStack$$Type): void
public "setConnectionItem"(arg0: $Direction$$Type, arg1: integer, arg2: $SlotType$$Type, arg3: $ItemStack$$Type): void
set "onChangedRunnable"(value: $Runnable$$Type)
get "conduits"(): $List<($Holder<($Conduit<(any)>)>)>
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
declare module "com.enderio.base.common.block.ResettingLeverBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LeverBlock, $LeverBlock$$Type} from "net.minecraft.world.level.block.LeverBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$AttachFace, $AttachFace$$Type} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $CreativeTabIconItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
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
static "IDENTITY": $GrindingBallData
static "CODEC": $Codec<($GrindingBallData)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($GrindingBallData)>

constructor(outputMultiplier: float, bonusMultiplier: float, powerUse: float, durability: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($GrindingBallData)>
public "isIdentity"(): boolean
public "durability"(): integer
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $GrindingBallData
public "bonusMultiplier"(): float
public "outputMultiplier"(): float
public "powerUse"(): float
get "identity"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindingBallData$$Type = ({"bonusMultiplier"?: float, "durability"?: integer, "outputMultiplier"?: float, "powerUse"?: float}) | ([bonusMultiplier?: float, durability?: integer, outputMultiplier?: float, powerUse?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrindingBallData_ = $GrindingBallData$$Type;
}}
declare module "com.enderio.conduits.api.ticker.ConduitTicker" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ColoredRedstoneProvider, $ColoredRedstoneProvider$$Type} from "com.enderio.conduits.api.ColoredRedstoneProvider"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.api.ConduitNetwork"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export interface $ConduitTicker<TConduit extends $Conduit<(TConduit)>> {

 "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
 "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
}

export namespace $ConduitTicker {
const probejs$$marker: never
}
export class $ConduitTicker$$Static<TConduit extends $Conduit<(TConduit)>> implements $ConduitTicker {


 "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
 "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitTicker$$Type<TConduit> = ($ConduitTicker<(TConduit)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitTicker_<TConduit> = $ConduitTicker$$Type<(TConduit)>;
}}
declare module "com.enderio.base.common.block.light.LightNode" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
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
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $LightNode extends $Block implements $EntityBlock {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $Fluid$$Type): boolean
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightNode$$Type = ($LightNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightNode_ = $LightNode$$Type;
}}
declare module "com.enderio.conduits.common.conduit.ConduitGraphContext" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ConduitNetworkContextType, $ConduitNetworkContextType$$Type} from "com.enderio.conduits.api.ConduitNetworkContextType"
import {$ConduitNetworkContextAccessor, $ConduitNetworkContextAccessor$$Type} from "com.enderio.conduits.api.ConduitNetworkContextAccessor"
import {$Mergeable, $Mergeable$$Type} from "dev.gigaherz.graph3.Mergeable"
import {$ConduitNetworkContext, $ConduitNetworkContext$$Type} from "com.enderio.conduits.api.ConduitNetworkContext"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ConduitGraphContext implements $Mergeable<($ConduitGraphContext)>, $ConduitNetworkContextAccessor {

constructor()

public static "of"<T extends $ConduitNetworkContext<(T)>>(arg0: T): $ConduitGraphContext
public "getContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
public "save"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "copy"(): $Mergeable<(any)>
public "mergeWith"(arg0: $Mergeable$$Type<(any)>): $Mergeable<(any)>
public "mergeWith"(arg0: $ConduitGraphContext$$Type): $ConduitGraphContext
public "hasContext"(arg0: $ConduitNetworkContextType$$Type<(any)>): boolean
public "getOrCreateContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
public static "loadNetworkContext"(arg0: $Holder$$Type<($Conduit<(any)>)>, arg1: $HolderLookup$Provider$$Type, arg2: $CompoundTag$$Type): $ConduitGraphContext
public static "createNetworkContext"(): $ConduitGraphContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitGraphContext$$Type = ($ConduitGraphContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitGraphContext_ = $ConduitGraphContext$$Type;
}}
declare module "com.enderio.core.client.item.AdvancedTooltipProvider" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $AdvancedTooltipProvider {

 "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
}

export namespace $AdvancedTooltipProvider {
const probejs$$marker: never
}
export class $AdvancedTooltipProvider$$Static implements $AdvancedTooltipProvider {


 "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
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
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $GlassIdentifier$$Type, arg2: $DyeColor$$Type)

public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getExplosionResistance"(): float
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(): string
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getGlassLighting"(): $GlassLighting
public "getCollisionPredicate"(): $GlassCollisionPredicate
public "asHolder"(): $Holder<(any)>
get "explosionResistance"(): float
get "descriptionId"(): string
get "glassLighting"(): $GlassLighting
get "collisionPredicate"(): $GlassCollisionPredicate
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
declare module "com.enderio.base.common.item.tool.ExperienceRodItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ExperienceRodItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceRodItem$$Type = ($ExperienceRodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceRodItem_ = $ExperienceRodItem$$Type;
}}
declare module "com.enderio.base.common.recipe.FluidRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $FluidRecipeInput extends $RecipeInput {

 "getFluid"(arg0: integer): $FluidStack
 "size"(): integer
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "findAll"(): $List<($ItemStack)>
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "self"(): $RecipeInput
get "empty"(): boolean
}

export namespace $FluidRecipeInput {
const probejs$$marker: never
}
export class $FluidRecipeInput$$Static implements $FluidRecipeInput {


 "getFluid"(arg0: integer): $FluidStack
 "size"(): integer
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "findAll"(): $List<($ItemStack)>
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "self"(): $RecipeInput
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
import {$SideConfig, $SideConfig$$Type} from "com.enderio.base.api.capability.SideConfig"
import {$MultiSlotAccess, $MultiSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.MultiSlotAccess"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
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
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$FluidItemInteractive, $FluidItemInteractive$$Type} from "com.enderio.machines.common.io.fluid.FluidItemInteractive"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"

export class $VatBlockEntity extends $MachineBlockEntity implements $FluidTankUser, $FluidItemInteractive {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "REAGENTS": $MultiSlotAccess
static readonly "TANK_CAPACITY": integer
static readonly "DATA": string
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "OUTPUT_TANK": $TankAccess
static readonly "INDEX": string
static readonly "INPUT_TANK": $TankAccess
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isActive"(): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "serverTick"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onLoad"(): void
public "getFluidHandler"(): $MachineFluidHandler
public "createFluidHandler"(): $MachineFluidHandler
public "createInventoryLayout"(): $MachineInventoryLayout
public "getCraftingProgress"(): float
public "moveFluidToOutputTank"(): void
public "getInputTank"(): $MachineFluidTank
public "getOutputTank"(): $MachineFluidTank
public "dumpOutputTank"(): void
public "getTankLayout"(): $MachineTankLayout
public "getRecipe"(): $RecipeHolder<($FermentingRecipe)>
public "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "fluidHandler"(): $MachineFluidHandler
get "craftingProgress"(): float
get "inputTank"(): $MachineFluidTank
get "outputTank"(): $MachineFluidTank
get "tankLayout"(): $MachineTankLayout
get "recipe"(): $RecipeHolder<($FermentingRecipe)>
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FluidTankBlock, $FluidTankBlock$$Type} from "com.enderio.machines.common.blocks.fluid_tank.FluidTankBlock"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $FluidTankBlockItem extends $BlockItem implements $AdvancedTooltipProvider {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IFluidHandlerItem)>
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

 "shouldRenderIOConfigOverlay"(): boolean
 "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
 "getIOMode"(arg0: $Direction$$Type): $IOMode
 "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
 "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
 "getNextIOMode"(arg0: $Direction$$Type): $IOMode
 "cycleIOMode"(arg0: $Direction$$Type): void
 "isIOConfigMutable"(): boolean
get "iOConfigMutable"(): boolean
}

export namespace $IOConfigurable {
const probejs$$marker: never
}
export class $IOConfigurable$$Static implements $IOConfigurable {


 "shouldRenderIOConfigOverlay"(): boolean
 "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
 "getIOMode"(arg0: $Direction$$Type): $IOMode
 "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
 "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
 "getNextIOMode"(arg0: $Direction$$Type): $IOMode
 "cycleIOMode"(arg0: $Direction$$Type): void
 "isIOConfigMutable"(): boolean
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
declare module "com.enderio.conduits.common.conduit.upgrade.SpeedUpgradeItem" {
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $SpeedUpgradeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "CAPABILITY_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ConduitUpgrade)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeedUpgradeItem$$Type = ($SpeedUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeedUpgradeItem_ = $SpeedUpgradeItem$$Type;
}}
declare module "com.enderio.base.common.paint.item.PaintedBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $PaintedBlockItem extends $BlockItem {
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
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
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
declare module "com.enderio.base.common.item.filter.FluidFilter" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $FluidFilter extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilter$$Type = ($FluidFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFilter_ = $FluidFilter$$Type;
}}
declare module "com.enderio.conduits.common.conduit.block.ConduitBundleBlock" {
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
import {$ConduitBundleBlockEntity, $ConduitBundleBlockEntity$$Type} from "com.enderio.conduits.common.conduit.block.ConduitBundleBlockEntity"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
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
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $Fluid$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "canBeValidConnection"(arg0: $ConduitBundleBlockEntity$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>, arg2: $Direction$$Type): boolean
public static "handleShiftYeta"(arg0: $PlayerInteractEvent$RightClickBlock$$Type): void
public static "canBeOrIsValidConnection"(arg0: $ConduitBundleBlockEntity$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>, arg2: $Direction$$Type): boolean
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
public static "valueOf"(arg0: string): $SagMillingRecipe$BonusType
public "getSerializedName"(): string
public "useGrindingBall"(): boolean
public "canMultiply"(): boolean
public "doChance"(): boolean
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
export type $SagMillingRecipe$BonusType$$Type = (("none") | ("multiply_output") | ("chance_only"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SagMillingRecipe$BonusType_ = $SagMillingRecipe$BonusType$$Type;
}}
declare module "com.enderio.base.common.blockentity.Wrenchable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $Wrenchable {

 "onWrenched"(arg0: $Player$$Type, arg1: $Direction$$Type): $ItemInteractionResult

(arg0: $Player, arg1: $Direction): $ItemInteractionResult$$Type
}

export namespace $Wrenchable {
const probejs$$marker: never
}
export class $Wrenchable$$Static implements $Wrenchable {


 "onWrenched"(arg0: $Player$$Type, arg1: $Direction$$Type): $ItemInteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrenchable$$Type = ((arg0: $Player, arg1: $Direction) => $ItemInteractionResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrenchable_ = $Wrenchable$$Type;
}}
declare module "com.enderio.base.common.item.tool.ColdFireIgniter" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
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
static "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IFluidHandlerItem)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
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
import {$NetworkDataSlot$CodecType, $NetworkDataSlot$CodecType$$Type} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IOMode, $IOMode$$Type} from "com.enderio.base.api.io.IOMode"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $IOConfig extends $Record {
static "CODEC": $Codec<($IOConfig)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($IOConfig)>
static "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($IOConfig)>

constructor(modes: $Map$$Type<($Direction$$Type), ($IOMode$$Type)>)

public "getMode"(arg0: $Direction$$Type): $IOMode
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "copyOf"(arg0: $IOConfig$$Type): $IOConfig
public static "of"(arg0: $IOMode$$Type): $IOConfig
public static "of"(arg0: $Function$$Type<($Direction), ($IOMode$$Type)>): $IOConfig
public static "empty"(): $IOConfig
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($IOConfig)>
public "modes"(): $Map<($Direction), ($IOMode)>
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CapacitorBankBlock, $CapacitorBankBlock$$Type} from "com.enderio.machines.common.block.CapacitorBankBlock"

export class $CapacitorBankItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
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
public "supportsCapacitor"(): boolean
public "getCapacitorSlot"(): integer
public "canExtract"(arg0: integer): boolean
public "canInsert"(arg0: integer): boolean
public "getSlotCount"(): integer
public "guiCanInsert"(arg0: integer): boolean
public "guiCanExtract"(arg0: integer): boolean
public "getStackLimit"(arg0: integer): integer
get "capacitorSlot"(): integer
get "slotCount"(): integer
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
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
declare module "com.enderio.conduits.api.ticker.CapabilityAwareConduitTicker" {
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode$IOState, $ConduitNode$IOState$$Type} from "com.enderio.conduits.api.ConduitNode$IOState"
import {$ColoredRedstoneProvider, $ColoredRedstoneProvider$$Type} from "com.enderio.conduits.api.ColoredRedstoneProvider"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.api.ConduitNetwork"
import {$IOAwareConduitTicker$Connection, $IOAwareConduitTicker$Connection$$Type} from "com.enderio.conduits.api.ticker.IOAwareConduitTicker$Connection"
import {$IOAwareConduitTicker, $IOAwareConduitTicker$$Type} from "com.enderio.conduits.api.ticker.IOAwareConduitTicker"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $CapabilityAwareConduitTicker<TConduit extends $Conduit<(TConduit)>, TCap> implements $IOAwareConduitTicker<(TConduit)> {

constructor()

public "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "tickColoredGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg3: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg4: $DyeColor$$Type, arg5: $ConduitNetwork$$Type, arg6: $ColoredRedstoneProvider$$Type): void
public "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $List$$Type<($ConduitNode$$Type)>, arg3: $ConduitNetwork$$Type, arg4: $ColoredRedstoneProvider$$Type): void
public "isRedstoneMode"(arg0: TConduit, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $ConduitNode$IOState$$Type, arg4: $ColoredRedstoneProvider$$Type): boolean
public "shouldSkipColor"(arg0: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg1: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>): boolean
public "isLoaded"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
public "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityAwareConduitTicker$$Type<TConduit, TCap> = ($CapabilityAwareConduitTicker<(TConduit), (TCap)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityAwareConduitTicker_<TConduit, TCap> = $CapabilityAwareConduitTicker$$Type<(TConduit), (TCap)>;
}}
declare module "com.enderio.base.common.item.tool.TravelStaffItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
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
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "consumeResources"(arg0: $ItemStack$$Type): void
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
public static "getMaxEnergy"(): integer
public "hasResources"(arg0: $ItemStack$$Type): boolean
public "performAction"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
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
public static "valueOf"(arg0: string): $FacadeType
public "getSerializedName"(): string
public "doesHideConduits"(): boolean
public "isBlastResistant"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "blastResistant"(): boolean
get "remappedEnumConstantName"(): string
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
declare module "com.enderio.machines.common.io.fluid.MachineFluidHandler" {
import {$IOConfigurable, $IOConfigurable$$Type} from "com.enderio.base.api.io.IOConfigurable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
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
static readonly "TANK_INDEX": string
static readonly "TANK_CONTENTS": string

constructor(arg0: $IOConfigurable$$Type, arg1: $MachineTankLayout$$Type)

public "drain"(arg0: integer, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "fill"(arg0: integer, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): integer
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getLayout"(): $MachineTankLayout
public "getConfig"(): $IOConfigurable
public "getTankCapacity"(arg0: integer): integer
public "addSlotChangedCallback"(arg0: $IntConsumer$$Type): void
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "canExtract"(arg0: integer): boolean
public "canInsert"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "getTank"(arg0: integer): $MachineFluidTank
public "getForSide"(arg0: $Direction$$Type): $IFluidHandler
public "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type): void
get "layout"(): $MachineTankLayout
get "config"(): $IOConfigurable
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
declare module "com.enderio.conduits.api.ConduitNetworkContextAccessor" {
import {$ConduitNetworkContextType, $ConduitNetworkContextType$$Type} from "com.enderio.conduits.api.ConduitNetworkContextType"
import {$ConduitNetworkContext, $ConduitNetworkContext$$Type} from "com.enderio.conduits.api.ConduitNetworkContext"

export interface $ConduitNetworkContextAccessor {

 "getContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "hasContext"(arg0: $ConduitNetworkContextType$$Type<(any)>): boolean
 "getOrCreateContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
}

export namespace $ConduitNetworkContextAccessor {
const probejs$$marker: never
}
export class $ConduitNetworkContextAccessor$$Static implements $ConduitNetworkContextAccessor {


 "getContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "hasContext"(arg0: $ConduitNetworkContextType$$Type<(any)>): boolean
 "getOrCreateContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNetworkContextAccessor$$Type = ($ConduitNetworkContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitNetworkContextAccessor_ = $ConduitNetworkContextAccessor$$Type;
}}
declare module "com.enderio.base.common.item.tool.PoweredToggledItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
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
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addAllVariants"(arg0: $CreativeModeTab$Output$$Type): void
public static "getCharged"(arg0: $PoweredToggledItem$$Type): $ItemStack
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $ConduitBlockItem extends $BlockItem {
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

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "getName"(arg0: $ItemStack$$Type): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(): string
public static "addToCreativeTabs"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
public static "getStackFor"(arg0: $Holder$$Type<($Conduit<(any)>)>, arg1: integer): $ItemStack
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
static "CODEC": $MapCodec<($AnchorTravelTarget)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AnchorTravelTarget)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AnchorTravelTarget)>
public "codec"(): $MapCodec<($AnchorTravelTarget)>
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
declare module "com.enderio.conduits.api.ConduitNode" {
import {$ConduitData, $ConduitData$$Type} from "com.enderio.conduits.api.ConduitData"
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ConduitDataType, $ConduitDataType$$Type} from "com.enderio.conduits.api.ConduitDataType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitNode$IOState, $ConduitNode$IOState$$Type} from "com.enderio.conduits.api.ConduitNode$IOState"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.api.ConduitNetwork"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitDataAccessor, $ConduitDataAccessor$$Type} from "com.enderio.conduits.api.ConduitDataAccessor"

export interface $ConduitNode extends $ConduitDataAccessor {

 "getPos"(): $BlockPos
 "getExtractFilter"(arg0: $Direction$$Type): $ResourceFilter
 "getInsertFilter"(arg0: $Direction$$Type): $ResourceFilter
 "getParentGraph"(): $ConduitNetwork
 "getIOState"(arg0: $Direction$$Type): $Optional<($ConduitNode$IOState)>
 "getUpgrade"(arg0: $Direction$$Type): $ConduitUpgrade
 "getData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
 "hasData"(arg0: $ConduitDataType$$Type<(any)>): boolean
 "getOrCreateData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
get "pos"(): $BlockPos
get "parentGraph"(): $ConduitNetwork
}

export namespace $ConduitNode {
const probejs$$marker: never
}
export class $ConduitNode$$Static implements $ConduitNode {


 "getPos"(): $BlockPos
 "getExtractFilter"(arg0: $Direction$$Type): $ResourceFilter
 "getInsertFilter"(arg0: $Direction$$Type): $ResourceFilter
 "getParentGraph"(): $ConduitNetwork
 "getIOState"(arg0: $Direction$$Type): $Optional<($ConduitNode$IOState)>
 "getUpgrade"(arg0: $Direction$$Type): $ConduitUpgrade
 "getData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
 "hasData"(arg0: $ConduitDataType$$Type<(any)>): boolean
 "getOrCreateData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
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

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LegacyMachineBlockEntity, $LegacyMachineBlockEntity$$Type} from "com.enderio.machines.common.blockentity.base.LegacyMachineBlockEntity"
import {$RegiliteBlockEntity, $RegiliteBlockEntity$$Type} from "com.enderio.regilite.holder.RegiliteBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
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
declare module "com.enderio.base.api.misc.RedstoneControl" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
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


public static "values"(): ($RedstoneControl)[]
public static "valueOf"(arg0: string): $RedstoneControl
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $RedstoneControl
public "isActive"(arg0: boolean): boolean
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
export type $RedstoneControl$$Type = (("always_active") | ("active_with_signal") | ("active_without_signal") | ("never_active"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneControl_ = $RedstoneControl$$Type;
}}
declare module "com.enderio.base.common.block.EIOEntityBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$EIOBlockEntity, $EIOBlockEntity$$Type} from "com.enderio.base.common.block.EIOBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "getFluid"(arg0: integer): $FluidStack
public "experience"(): $FluidStack
public "itemToBind"(): $ItemStack
public "boundSoulItem"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$Input$$Type = ({"itemToBind"?: $ItemStack$$Type, "boundSoulItem"?: $ItemStack$$Type, "experience"?: $FluidStack$$Type}) | ([itemToBind?: $ItemStack$$Type, boundSoulItem?: $ItemStack$$Type, experience?: $FluidStack$$Type]);
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
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
import {$MachineState, $MachineState$$Type} from "com.enderio.machines.common.blocks.base.state.MachineState"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
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
static readonly "DATA": string
static readonly "IO_CONFIG_PROPERTY": $ModelProperty<($IOConfigurable)>
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "INDEX": string
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($LegacyMachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getDisplayName"(): $Component
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "shouldRenderIOConfigOverlay"(): boolean
public "supportsRedstoneControl"(): boolean
public "serverTick"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInventory"(): $MachineInventory
public "stillValid"(arg0: $Player$$Type): boolean
public "getModelData"(): $ModelData
public "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
public "getIOMode"(arg0: $Direction$$Type): $IOMode
public "hasInventory"(): boolean
public "onLoad"(): void
public "canAct"(): boolean
public "getLightEmission"(): integer
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "getMachineStates"(): $Set<($MachineState)>
public "getRedstoneControl"(): $RedstoneControl
public "setRedstoneControl"(arg0: $RedstoneControl$$Type): void
public "getInventoryLayout"(): $MachineInventoryLayout
public "onBlockEntityUsed"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "updateMachineState"(arg0: $MachineState$$Type, arg1: boolean): void
public "createInventoryLayout"(): $MachineInventoryLayout
public "canOpenMenu"(): boolean
public "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
public "canActSlow"(): boolean
public "onWrenched"(arg0: $Player$$Type, arg1: $Direction$$Type): $ItemInteractionResult
public "getDefaultIOConfig"(): $IOConfig
public "isRedstoneBlocked"(): boolean
public "isIOConfigMutable"(): boolean
public "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
public "getNextIOMode"(arg0: $Direction$$Type): $IOMode
public "cycleIOMode"(arg0: $Direction$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "displayName"(): $Component
get "inventory"(): $MachineInventory
get "modelData"(): $ModelData
get "lightEmission"(): integer
get "machineStates"(): $Set<($MachineState)>
get "redstoneControl"(): $RedstoneControl
set "redstoneControl"(value: $RedstoneControl$$Type)
get "inventoryLayout"(): $MachineInventoryLayout
get "defaultIOConfig"(): $IOConfig
get "redstoneBlocked"(): boolean
get "iOConfigMutable"(): boolean
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
import {$MachineFluidTank, $MachineFluidTank$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidTank"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FermentingRecipe$Input extends $Record implements $RecipeInput {

constructor(leftReagent: $ItemStack$$Type, rightStack: $ItemStack$$Type, inputTank: $MachineFluidTank$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "leftReagent"(): $ItemStack
public "getInputTank"(): $MachineFluidTank
public "inputTank"(): $MachineFluidTank
public "rightStack"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
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
declare module "com.enderio.base.common.block.light.PoweredLight" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$AttachFace, $AttachFace$$Type} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Light, $Light$$Type} from "com.enderio.base.common.block.light.Light"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PoweredLight extends $Light implements $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PoweredLight)>
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
readonly "wireless": boolean
static readonly "ENABLED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
 "hasCollision": boolean

constructor(arg0: boolean, arg1: boolean, arg2: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "checkPoweredState"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "isWireless"(): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "wireless"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredLight$$Type = ($PoweredLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredLight_ = $PoweredLight$$Type;
}}
declare module "com.enderio.conduits.api.ConduitMenuData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConduitMenuData {

 "hasUpgrade"(): boolean
 "showBothEnable"(): boolean
 "hasFilterInsert"(): boolean
 "hasFilterExtract"(): boolean
 "showBarSeparator"(): boolean
 "showColorInsert"(): boolean
 "showColorExtract"(): boolean
 "showRedstoneExtract"(): boolean
}

export namespace $ConduitMenuData {
const probejs$$marker: never
}
export class $ConduitMenuData$$Static implements $ConduitMenuData {


 "hasUpgrade"(): boolean
 "showBothEnable"(): boolean
 "hasFilterInsert"(): boolean
 "hasFilterExtract"(): boolean
 "showBarSeparator"(): boolean
 "showColorInsert"(): boolean
 "showColorExtract"(): boolean
 "showRedstoneExtract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitMenuData$$Type = ($ConduitMenuData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitMenuData_ = $ConduitMenuData$$Type;
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

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $PaintingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "input"(): $Ingredient
public "output"(): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $PaintingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $PaintingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getEnergyCost"(arg0: $PaintingRecipe$Input$$Type): integer
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $PaintingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "group"(): string
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

public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "getCapacity"(): integer
public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "getFluid"(): $FluidStack
public "setFluid"(arg0: $FluidStack$$Type): void
public "isFluidValid"(arg0: $FluidStack$$Type): boolean
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export interface $PaintedBlock extends $IBlockExtension {

 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
 "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
 "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "handler$cip000$passablefoliage$pfoliage_getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $CallbackInfoReturnable$$Type<(any)>): void
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
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
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
}

export namespace $PaintedBlock {
const DEFAULT_PAINT: $Block
const probejs$$marker: never
}
export class $PaintedBlock$$Static implements $PaintedBlock {
static readonly "DEFAULT_PAINT": $Block


 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
 "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
 "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "handler$cip000$passablefoliage$pfoliage_getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $CallbackInfoReturnable$$Type<(any)>): void
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
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
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
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
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
declare module "com.enderio.conduits.api.ConduitNetworkContextType" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ConduitNetworkContext, $ConduitNetworkContext$$Type} from "com.enderio.conduits.api.ConduitNetworkContext"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ConduitNetworkContextType<T extends $ConduitNetworkContext<(T)>> extends $Record {

constructor(codec: $Codec$$Type<(T)>, factory: $Supplier$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "codec"(): $Codec<(T)>
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
export type $ConduitNetworkContextType$$Type<T> = (Special.EnderioConduitNetworkContextType) | ({"factory"?: $Supplier$$Type<(any)>, "codec"?: $Codec$$Type<(any)>}) | ([factory?: $Supplier$$Type<(any)>, codec?: $Codec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitNetworkContextType_<T> = $ConduitNetworkContextType$$Type<(T)>;
}}
declare module "com.enderio.machines.common.blocks.base.block.MachineBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$EIOEntityBlock, $EIOEntityBlock$$Type} from "com.enderio.base.common.block.EIOEntityBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

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
declare module "com.enderio.base.common.block.light.Light" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FaceAttachedHorizontalDirectionalBlock, $FaceAttachedHorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.FaceAttachedHorizontalDirectionalBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$StateDefinition$Builder, $StateDefinition$Builder$$Type} from "net.minecraft.world.level.block.state.StateDefinition$Builder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AttachFace, $AttachFace$$Type} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Light extends $FaceAttachedHorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Light)>
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
static readonly "ENABLED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
 "hasCollision": boolean

constructor(arg0: boolean, arg1: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "createBlockStateDefinition"(arg0: $StateDefinition$Builder$$Type<($Block$$Type), ($BlockState$$Type)>): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "checkPoweredState"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "isInverted"(): boolean
public "asHolder"(): $Holder<(any)>
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Light$$Type = ($Light);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Light_ = $Light$$Type;
}}
declare module "com.enderio.conduits.common.conduit.ConduitDataContainer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ConduitData, $ConduitData$$Type} from "com.enderio.conduits.api.ConduitData"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ConduitDataType, $ConduitDataType$$Type} from "com.enderio.conduits.api.ConduitDataType"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ConduitDataAccessor, $ConduitDataAccessor$$Type} from "com.enderio.conduits.api.ConduitDataAccessor"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ConduitDataContainer implements $ConduitDataAccessor {
static "CODEC": $Codec<($ConduitDataContainer)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitDataContainer)>

constructor(arg0: $ConduitData$$Type<(any)>)
constructor()

public "hashCode"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $ConduitDataContainer
public "getData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
public "hasData"(arg0: $ConduitDataType$$Type<(any)>): boolean
public "deepCopy"(): $ConduitDataContainer
public "handleClientChanges"(arg0: $ConduitDataContainer$$Type): void
public "getOrCreateData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
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
declare module "com.enderio.conduits.api.Conduit$ConduitConnectionData" {
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Conduit$ConduitConnectionData extends $Record {

constructor(isInsert: boolean, isExtract: boolean, control: $RedstoneControl$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "control"(): $RedstoneControl
public "isInsert"(): boolean
public "isExtract"(): boolean
get "insert"(): boolean
get "extract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Conduit$ConduitConnectionData$$Type = ({"isInsert"?: boolean, "control"?: $RedstoneControl$$Type, "isExtract"?: boolean}) | ([isInsert?: boolean, control?: $RedstoneControl$$Type, isExtract?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Conduit$ConduitConnectionData_ = $Conduit$ConduitConnectionData$$Type;
}}
declare module "com.enderio.conduits.api.ConduitNetworkContext" {
import {$ConduitNetworkContextType, $ConduitNetworkContextType$$Type} from "com.enderio.conduits.api.ConduitNetworkContextType"

export interface $ConduitNetworkContext<T extends $ConduitNetworkContext<(T)>> {

 "type"(): $ConduitNetworkContextType<(T)>
 "copy"(): T
 "mergeWith"(arg0: T): T
}

export namespace $ConduitNetworkContext {
const probejs$$marker: never
}
export class $ConduitNetworkContext$$Static<T extends $ConduitNetworkContext<(T)>> implements $ConduitNetworkContext {


 "type"(): $ConduitNetworkContextType<(T)>
 "copy"(): T
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
declare module "com.enderio.base.common.recipe.FireCraftingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FireCraftingRecipe extends $Record implements $Recipe<($RecipeInput)> {

constructor(lootTable: $ResourceKey$$Type<($LootTable)>, maxItemDrops: integer, bases: $List$$Type<($Block$$Type)>, baseTags: $List$$Type<($TagKey$$Type<($Block$$Type)>)>, dimensions: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>, blockAfterBurning: $Optional$$Type<($Block$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "dimensions"(): $List<($ResourceKey<($Level)>)>
public "getType"(): $RecipeType<(any)>
public "lootTable"(): $ResourceKey<($LootTable)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<($FireCraftingRecipe)>
public "isSpecial"(): boolean
public "bases"(): $List<($Block)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "blockAfterBurning"(): $Optional<($Block)>
public "getAllBaseBlocks"(): $List<($Block)>
public "isDimensionValid"(arg0: $ResourceKey$$Type<($Level)>): boolean
public "isBaseValid"(arg0: $Block$$Type): boolean
public "maxItemDrops"(): integer
public "baseTags"(): $List<($TagKey<($Block)>)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<($FireCraftingRecipe)>
get "special"(): boolean
get "allBaseBlocks"(): $List<($Block)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingRecipe$$Type = ({"bases"?: $List$$Type<($Block$$Type)>, "blockAfterBurning"?: ($Block$$Type)?, "maxItemDrops"?: integer, "lootTable"?: $ResourceKey$$Type<($LootTable)>, "baseTags"?: $List$$Type<($TagKey$$Type<($Block$$Type)>)>, "dimensions"?: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>}) | ([bases?: $List$$Type<($Block$$Type)>, blockAfterBurning?: ($Block$$Type)?, maxItemDrops?: integer, lootTable?: $ResourceKey$$Type<($LootTable)>, baseTags?: $List$$Type<($TagKey$$Type<($Block$$Type)>)>, dimensions?: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireCraftingRecipe_ = $FireCraftingRecipe$$Type;
}}
declare module "com.enderio.base.common.paint.blockentity.PaintedBlockEntity" {
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $PaintedBlockEntity {

 "getPrimaryPaint"(): $Optional<($Block)>
 "setPrimaryPaint"(arg0: $Block$$Type): void
 "getSecondaryPaint"(): $Optional<($Block)>
 "setSecondaryPaint"(arg0: $Block$$Type): void
 "hasSecondaryPaint"(): boolean
get "primaryPaint"(): $Optional<($Block)>
set "primaryPaint"(value: $Block$$Type)
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


static "createAndRegisterModelProperty"(): $ModelProperty<($Block)>
 "getPrimaryPaint"(): $Optional<($Block)>
 "setPrimaryPaint"(arg0: $Block$$Type): void
 "getSecondaryPaint"(): $Optional<($Block)>
 "setSecondaryPaint"(arg0: $Block$$Type): void
 "hasSecondaryPaint"(): boolean
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
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$PaintingTrigger$TriggerInstance, $PaintingTrigger$TriggerInstance$$Type} from "com.enderio.base.common.paint.PaintingTrigger$TriggerInstance"

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

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "hash"(arg0: T): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public "read"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $Supplier$$Type<(T)>): T
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: T): $Tag
public "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type, arg2: $Supplier$$Type<(T)>): T
public "create"(arg0: $Supplier$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $NetworkDataSlot<(T)>
public static "createMap"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, arg3: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (U)>): $NetworkDataSlot$CodecType<($Map<(T), (U)>)>
public "hashFunction"(): $Function<(T), (integer)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public static "createList"<T>(arg0: $Codec$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $NetworkDataSlot$CodecType<($List<(T)>)>
public "codec"(): $Codec<(T)>
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
import {$PaintedBlockItem, $PaintedBlockItem$$Type} from "com.enderio.base.common.paint.item.PaintedBlockItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $PaintedSlabBlockItem extends $PaintedBlockItem {
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
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
declare module "com.enderio.conduits.common.conduit.ConduitShape" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.common.conduit.ConduitBundle"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ConduitShape {
static readonly "CONNECTION": $VoxelShape

constructor()

public "getDirection"(arg0: $BlockPos$$Type, arg1: $HitResult$$Type): $Direction
public "updateConduit"(arg0: $ConduitBundle$$Type): void
public static "rotateVoxelShape"(arg0: $VoxelShape$$Type, arg1: $Direction$$Type): $VoxelShape
public "getShapeFromHit"(arg0: $BlockPos$$Type, arg1: $HitResult$$Type): $VoxelShape
public "getTotalShape"(): $VoxelShape
public "getConduit"(arg0: $BlockPos$$Type, arg1: $HitResult$$Type): $Holder<($Conduit<(any)>)>
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
declare module "com.enderio.machines.common.blocks.fluid_tank.FluidTankBlockEntity" {
import {$SideConfig, $SideConfig$$Type} from "com.enderio.base.api.capability.SideConfig"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FluidTankUser, $FluidTankUser$$Type} from "com.enderio.machines.common.attachment.FluidTankUser"
import {$MachineTankLayout, $MachineTankLayout$$Type} from "com.enderio.machines.common.io.fluid.MachineTankLayout"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TankAccess, $TankAccess$$Type} from "com.enderio.machines.common.io.fluid.TankAccess"
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
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$FluidItemInteractive, $FluidItemInteractive$$Type} from "com.enderio.machines.common.io.fluid.FluidItemInteractive"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"

export class $FluidTankBlockEntity extends $MachineBlockEntity implements $FluidItemInteractive, $FluidTankUser {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_FILL_OUTPUT": $SingleSlotAccess
static readonly "FLUID_DRAIN_INPUT": $SingleSlotAccess
static readonly "FLUID_FILL_INPUT": $SingleSlotAccess
static readonly "DATA": string
static readonly "FLUID_DRAIN_OUTPUT": $SingleSlotAccess
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "INDEX": string
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>
static readonly "TANK": $TankAccess

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "serverTick"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getFluidHandler"(): $MachineFluidHandler
public "createFluidHandler"(): $MachineFluidHandler
public "acceptItemDrain"(arg0: $ItemStack$$Type): boolean
public "createInventoryLayout"(): $MachineInventoryLayout
public "getFluidTank"(): $MachineFluidTank
public "acceptItemFill"(arg0: $ItemStack$$Type): boolean
public "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
public "getTankLayout"(): $MachineTankLayout
public "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "fluidHandler"(): $MachineFluidHandler
get "fluidTank"(): $MachineFluidTank
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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

public "inputs"(): $List<($ItemStack)>
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
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
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$TravelTargetSerializer, $TravelTargetSerializer$$Type} from "com.enderio.base.api.travel.TravelTargetSerializer"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TravelTargetType, $TravelTargetType$$Type} from "com.enderio.base.api.travel.TravelTargetType"

export interface $TravelTarget {

 "type"(): $TravelTargetType<(any)>
 "pos"(): $BlockPos
 "serializer"(): $TravelTargetSerializer<(any)>
 "block2BlockRange"(): integer
 "item2BlockRange"(): integer
/**
 * 
 * @deprecated
 */
 "canTravelTo"(): boolean
 "canJumpTo"(): boolean
 "canTeleportTo"(): boolean
}

export namespace $TravelTarget {
const CODEC: $Codec<($TravelTarget)>
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($TravelTarget)>
const probejs$$marker: never
}
export class $TravelTarget$$Static implements $TravelTarget {
static readonly "CODEC": $Codec<($TravelTarget)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TravelTarget)>


 "type"(): $TravelTargetType<(any)>
 "pos"(): $BlockPos
 "serializer"(): $TravelTargetSerializer<(any)>
 "block2BlockRange"(): integer
 "item2BlockRange"(): integer
/**
 * 
 * @deprecated
 */
 "canTravelTo"(): boolean
 "canJumpTo"(): boolean
 "canTeleportTo"(): boolean
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

/**
 * 
 * @deprecated
 */
 "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "craft"(arg0: T, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getBaseEnergyCost"(): integer
 "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
 "getEnergyCost"(arg0: T): integer
/**
 * 
 * @deprecated
 */
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "matches"(arg0: T, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(any)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getSerializer"(): $RecipeSerializer<(any)>
 "getGroup"(): string
 "showNotification"(): boolean
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
 "isIncomplete"(): boolean
 "getToastSymbol"(): $ItemStack
get "special"(): boolean
get "baseEnergyCost"(): integer
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}

export namespace $MachineRecipe {
const probejs$$marker: never
}
export class $MachineRecipe$$Static<T extends $RecipeInput> implements $MachineRecipe {


/**
 * 
 * @deprecated
 */
 "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "craft"(arg0: T, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getBaseEnergyCost"(): integer
 "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
 "getEnergyCost"(arg0: T): integer
/**
 * 
 * @deprecated
 */
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "matches"(arg0: T, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(any)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getSerializer"(): $RecipeSerializer<(any)>
 "getGroup"(): string
 "showNotification"(): boolean
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
 "isIncomplete"(): boolean
 "getToastSymbol"(): $ItemStack
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
declare module "com.enderio.conduits.api.ConduitDataType" {
import {$ConduitData, $ConduitData$$Type} from "com.enderio.conduits.api.ConduitData"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ConduitDataType<T extends $ConduitData<(T)>> extends $Record {

constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, factory: $Supplier$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
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
declare module "com.enderio.base.common.item.filter.ItemFilter" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemFilter extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$$Type = ($ItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$$Type;
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

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EnchanterRecipe)>
public "codec"(): $MapCodec<($EnchanterRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineState, $MachineState$$Type} from "com.enderio.machines.common.blocks.base.state.MachineState"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $MachineInventory extends $ItemStackHandler {

constructor(arg0: $IOConfigurable$$Type, arg1: $MachineInventoryLayout$$Type)

public "layout"(): $MachineInventoryLayout
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getLayout"(): $MachineInventoryLayout
public "addSlotChangedCallback"(arg0: $IntConsumer$$Type): void
public "updateMachineState"(arg0: $MachineState$$Type, arg1: boolean): void
public "copyFromItem"(arg0: $ItemContainerContents$$Type): void
public "toItemContents"(): $ItemContainerContents
public "getForSide"(arg0: $Direction$$Type): $IItemHandler
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
declare module "com.enderio.conduits.common.conduit.block.ConduitBundleBlockEntity" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ConduitShape, $ConduitShape$$Type} from "com.enderio.conduits.common.conduit.ConduitShape"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$GraphObject, $GraphObject$$Type} from "dev.gigaherz.graph3.GraphObject"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ChunkRenderTypeSet, $ChunkRenderTypeSet$$Type} from "net.neoforged.neoforge.client.ChunkRenderTypeSet"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitDataContainer, $ConduitDataContainer$$Type} from "com.enderio.conduits.common.conduit.ConduitDataContainer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ConduitGraphContext, $ConduitGraphContext$$Type} from "com.enderio.conduits.common.conduit.ConduitGraphContext"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$ConduitBundle, $ConduitBundle$$Type} from "com.enderio.conduits.common.conduit.ConduitBundle"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$DynamicConnectionState, $DynamicConnectionState$$Type} from "com.enderio.conduits.common.conduit.connection.DynamicConnectionState"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RightClickAction, $RightClickAction$$Type} from "com.enderio.conduits.common.conduit.RightClickAction"
import {$EnderBlockEntity, $EnderBlockEntity$$Type} from "com.enderio.core.common.blockentity.EnderBlockEntity"
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $ConduitBundleBlockEntity extends $EnderBlockEntity {
static readonly "FACADE_MODEL_DATA": $ModelProperty<($ModelData)>
static readonly "FACADES": $Long2ObjectMap<($BlockState)>
static readonly "DATA": string
static readonly "BUNDLE_MODEL_PROPERTY": $ModelProperty<($ConduitBundle)>
static readonly "CONDUIT_INV_KEY": string
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "INDEX": string
static readonly "CHUNK_FACADES": $Long2ObjectMap<($LongSet)>
static readonly "FACADE_RENDERTYPE": $ModelProperty<($ChunkRenderTypeSet)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getBundle"(): $ConduitBundle
public "setLevel"(arg0: $Level$$Type): void
public "getShape"(): $ConduitShape
public "addType"(arg0: $Holder$$Type<($Conduit<(any)>)>, arg1: $Player$$Type): $RightClickAction
public "updateShape"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "menuProvider"(arg0: $Direction$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>): $MenuProvider
public "hasType"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "stillValid"(arg0: $Player$$Type): boolean
public "setRemoved"(): void
public "getModelData"(): $ModelData
public "onLoad"(): void
public "onChunkUnloaded"(): void
public "onConnectionsUpdated"(arg0: $Holder$$Type<($Conduit<(any)>)>): void
public "dropConnectionItems"(arg0: $DynamicConnectionState$$Type): void
public "removeTypeAndDelete"(arg0: $Player$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>): void
public "getConduitItemHandler"(): $IItemHandler
public static "createConduitCap"<TCap, TContext>(arg0: $BlockCapability$$Type<(TCap), (TContext)>): $ICapabilityProvider<($ConduitBundleBlockEntity), (TContext), (TCap)>
public "updateConnections"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: boolean): void
public "updateClient"(): void
public "tryConnectTo"(arg0: $Direction$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>, arg2: boolean, arg3: boolean, arg4: boolean): $Optional<($GraphObject<($ConduitGraphContext)>)>
public "removeType"(arg0: $Holder$$Type<($Conduit<(any)>)>, arg1: boolean): boolean
public "dropFacadeItem"(): void
public "everyTick"(): void
public "removeNeighborConnections"(arg0: $Holder$$Type<($Conduit<(any)>)>): void
public "handleConnectionStateUpdate"(arg0: $Direction$$Type, arg1: $Holder$$Type<($Conduit<(any)>)>, arg2: $DynamicConnectionState$$Type): void
public "handleConduitDataUpdate"(arg0: $Holder$$Type<($Conduit<(any)>)>, arg1: $ConduitDataContainer$$Type): void
public "updateEmptyDynConnection"(): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "bundle"(): $ConduitBundle
set "level"(value: $Level$$Type)
get "shape"(): $ConduitShape
get "modelData"(): $ModelData
get "conduitItemHandler"(): $IItemHandler
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
declare module "com.enderio.base.api.travel.TravelTargetSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TravelTarget, $TravelTarget$$Type} from "com.enderio.base.api.travel.TravelTarget"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $TravelTargetSerializer<T extends $TravelTarget> {

 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
 "codec"(): $MapCodec<(T)>
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


 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
 "codec"(): $MapCodec<(T)>
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

export class $ConduitType$Builder<T extends $Conduit<(T)>> {


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
declare module "com.enderio.conduits.api.ticker.LoadedAwareConduitTicker" {
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ColoredRedstoneProvider, $ColoredRedstoneProvider$$Type} from "com.enderio.conduits.api.ColoredRedstoneProvider"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.api.ConduitNetwork"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export interface $LoadedAwareConduitTicker<TConduit extends $Conduit<(TConduit)>> extends $ConduitTicker<(TConduit)> {

 "isLoaded"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $List$$Type<($ConduitNode$$Type)>, arg3: $ConduitNetwork$$Type, arg4: $ColoredRedstoneProvider$$Type): void
 "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
}

export namespace $LoadedAwareConduitTicker {
const probejs$$marker: never
}
export class $LoadedAwareConduitTicker$$Static<TConduit extends $Conduit<(TConduit)>> implements $LoadedAwareConduitTicker {


 "isLoaded"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $List$$Type<($ConduitNode$$Type)>, arg3: $ConduitNetwork$$Type, arg4: $ColoredRedstoneProvider$$Type): void
 "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadedAwareConduitTicker$$Type<TConduit> = ($LoadedAwareConduitTicker<(TConduit)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadedAwareConduitTicker_<TConduit> = $LoadedAwareConduitTicker$$Type<(TConduit)>;
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
static "CODEC": $Codec<($CoordinateSelection)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CoordinateSelection)>

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type)
constructor(level: $ResourceKey$$Type<($Level)>, pos: $BlockPos$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
public "level"(): $ResourceKey<($Level)>
public static "getLevelName"(arg0: $ResourceLocation$$Type): string
public "getLevelName"(): string
get "levelName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoordinateSelection$$Type = ({"level"?: $ResourceKey$$Type<($Level)>, "pos"?: $BlockPos$$Type}) | ([level?: $ResourceKey$$Type<($Level)>, pos?: $BlockPos$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoordinateSelection_ = $CoordinateSelection$$Type;
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
public static "valueOf"(arg0: string): $TankRecipe$Mode
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
export type $TankRecipe$Mode$$Type = (("fill") | ("empty"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRecipe$Mode_ = $TankRecipe$Mode$$Type;
}}
declare module "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$OutputItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SagMillingRecipe$OutputItem$SizedTagOutput, $SagMillingRecipe$OutputItem$SizedTagOutput$$Type} from "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$OutputItem$SizedTagOutput"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SagMillingRecipe$OutputItem extends $Record {

constructor(output: $Either$$Type<($ItemStack$$Type), ($SagMillingRecipe$OutputItem$SizedTagOutput$$Type)>, chance: float, isOptional: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $TagKey$$Type<($Item)>, arg1: integer, arg2: float, arg3: boolean): $SagMillingRecipe$OutputItem
public static "of"(arg0: $Item$$Type, arg1: integer, arg2: float, arg3: boolean): $SagMillingRecipe$OutputItem
public static "of"(arg0: $ItemStack$$Type, arg1: float, arg2: boolean): $SagMillingRecipe$OutputItem
public "isPresent"(): boolean
public "output"(): $Either<($ItemStack), ($SagMillingRecipe$OutputItem$SizedTagOutput)>
public "getItemStack"(): $ItemStack
public "isOptional"(): boolean
public "chance"(): float
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
declare module "com.enderio.conduits.common.conduit.connection.ConnectionState" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export interface $ConnectionState {

 "isConnection"(): boolean

(): boolean
get "connection"(): boolean
}

export namespace $ConnectionState {
const CODEC: $Codec<($ConnectionState)>
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($ConnectionState)>
const probejs$$marker: never
}
export class $ConnectionState$$Static implements $ConnectionState {
static readonly "CODEC": $Codec<($ConnectionState)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConnectionState)>


 "isConnection"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionState$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionState_ = $ConnectionState$$Type;
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
declare module "com.enderio.core.common.blockentity.EnderBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$NetworkDataSlot, $NetworkDataSlot$$Type} from "com.enderio.core.common.network.NetworkDataSlot"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderBlockEntity extends $BlockEntity {
static readonly "DATA": string
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "INDEX": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

/**
 * 
 * @deprecated
 */
public "sync"(): void
public static "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $EnderBlockEntity$$Type): void
/**
 * 
 * @deprecated
 */
public "serverHandleBufferChange"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "serverTick"(): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "addDataSlot"<T extends $NetworkDataSlot<(any)>>(arg0: T): T
public "endTick"(): void
public "clientTick"(): void
public "setChanged"(): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
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
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
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
public static "valueOf"(arg0: string): $MachineStateType
public "getPriority"(): integer
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "priority"(): integer
get "serializedName"(): string
get "remappedEnumConstantName"(): string
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
declare module "com.enderio.conduits.api.ticker.IOAwareConduitTicker" {
import {$LoadedAwareConduitTicker, $LoadedAwareConduitTicker$$Type} from "com.enderio.conduits.api.ticker.LoadedAwareConduitTicker"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode$IOState, $ConduitNode$IOState$$Type} from "com.enderio.conduits.api.ConduitNode$IOState"
import {$ColoredRedstoneProvider, $ColoredRedstoneProvider$$Type} from "com.enderio.conduits.api.ColoredRedstoneProvider"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.api.ConduitNetwork"
import {$IOAwareConduitTicker$Connection, $IOAwareConduitTicker$Connection$$Type} from "com.enderio.conduits.api.ticker.IOAwareConduitTicker$Connection"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export interface $IOAwareConduitTicker<TConduit extends $Conduit<(TConduit)>> extends $LoadedAwareConduitTicker<(TConduit)> {

 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $List$$Type<($ConduitNode$$Type)>, arg3: $ConduitNetwork$$Type, arg4: $ColoredRedstoneProvider$$Type): void
 "isRedstoneMode"(arg0: TConduit, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $ConduitNode$IOState$$Type, arg4: $ColoredRedstoneProvider$$Type): boolean
 "tickColoredGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg3: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg4: $DyeColor$$Type, arg5: $ConduitNetwork$$Type, arg6: $ColoredRedstoneProvider$$Type): void
 "shouldSkipColor"(arg0: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg1: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>): boolean
 "isLoaded"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
 "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
}

export namespace $IOAwareConduitTicker {
const probejs$$marker: never
}
export class $IOAwareConduitTicker$$Static<TConduit extends $Conduit<(TConduit)>> implements $IOAwareConduitTicker {


 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $List$$Type<($ConduitNode$$Type)>, arg3: $ConduitNetwork$$Type, arg4: $ColoredRedstoneProvider$$Type): void
 "isRedstoneMode"(arg0: TConduit, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $ConduitNode$IOState$$Type, arg4: $ColoredRedstoneProvider$$Type): boolean
 "tickColoredGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg3: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg4: $DyeColor$$Type, arg5: $ConduitNetwork$$Type, arg6: $ColoredRedstoneProvider$$Type): void
 "shouldSkipColor"(arg0: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg1: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>): boolean
 "isLoaded"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "tickGraph"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
 "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOAwareConduitTicker$$Type<TConduit> = ($IOAwareConduitTicker<(TConduit)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOAwareConduitTicker_<TConduit> = $IOAwareConduitTicker$$Type<(TConduit)>;
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

export interface $ConduitType<T extends $Conduit<(T)>> {

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
function of<T extends $Conduit<(T)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType<(T)>
function of<T extends $Conduit<(T)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType<(T)>
function builder<T extends $Conduit<(T)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType$Builder<(T)>
function builder<T extends $Conduit<(T)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType$Builder<(T)>
const probejs$$marker: never
}
export class $ConduitType$$Static<T extends $Conduit<(T)>> implements $ConduitType {
static readonly "CODEC": $Codec<($ConduitType<(any)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitType<(any)>)>


static "of"<T extends $Conduit<(T)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType<(T)>
static "of"<T extends $Conduit<(T)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType<(T)>
static "builder"<T extends $Conduit<(T)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType$Builder<(T)>
static "builder"<T extends $Conduit<(T)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType$Builder<(T)>
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
declare module "com.enderio.conduits.common.conduit.ConduitGraphObject" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ConduitGraphContext, $ConduitGraphContext$$Type} from "com.enderio.conduits.common.conduit.ConduitGraphContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$ConduitNode$IOState, $ConduitNode$IOState$$Type} from "com.enderio.conduits.api.ConduitNode$IOState"
import {$GraphObject, $GraphObject$$Type} from "dev.gigaherz.graph3.GraphObject"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.api.ConduitNetwork"
import {$Graph, $Graph$$Type} from "dev.gigaherz.graph3.Graph"
import {$DynamicConnectionState, $DynamicConnectionState$$Type} from "com.enderio.conduits.common.conduit.connection.DynamicConnectionState"
import {$ConduitData, $ConduitData$$Type} from "com.enderio.conduits.api.ConduitData"
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ConduitDataType, $ConduitDataType$$Type} from "com.enderio.conduits.api.ConduitDataType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitDataContainer, $ConduitDataContainer$$Type} from "com.enderio.conduits.common.conduit.ConduitDataContainer"

export class $ConduitGraphObject implements $GraphObject<($ConduitGraphContext)>, $ConduitNode {
static readonly "CODEC": $Codec<($ConduitGraphObject)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitGraphObject)>

constructor(arg0: $BlockPos$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $ConduitDataContainer$$Type)

public "pushState"(arg0: $Direction$$Type, arg1: $DynamicConnectionState$$Type): void
public "getData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
public "getGraph"(): $Graph<($ConduitGraphContext)>
public "hasData"(arg0: $ConduitDataType$$Type<(any)>): boolean
public "deepCopy"(): $ConduitGraphObject
public "getPos"(): $BlockPos
public "handleClientChanges"(arg0: $ConduitDataContainer$$Type): void
public "conduitDataContainer"(): $ConduitDataContainer
public "getExtractFilter"(arg0: $Direction$$Type): $ResourceFilter
public "getInsertFilter"(arg0: $Direction$$Type): $ResourceFilter
public "getOrCreateData"<T extends $ConduitData<(T)>>(arg0: $ConduitDataType$$Type<(T)>): T
public "getParentGraph"(): $ConduitNetwork
public "getIOState"(arg0: $Direction$$Type): $Optional<($ConduitNode$IOState)>
public "setGraph"(arg0: $Graph$$Type<($ConduitGraphContext$$Type)>): void
public "hashContents"(): integer
public "getUpgrade"(arg0: $Direction$$Type): $ConduitUpgrade
public "clearState"(arg0: $Direction$$Type): void
get "graph"(): $Graph<($ConduitGraphContext)>
get "pos"(): $BlockPos
get "parentGraph"(): $ConduitNetwork
set "graph"(value: $Graph$$Type<($ConduitGraphContext$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitGraphObject$$Type = ($ConduitGraphObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitGraphObject_ = $ConduitGraphObject$$Type;
}}
declare module "com.enderio.base.common.block.EIOBlockEntity" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$EnderBlockEntity, $EnderBlockEntity$$Type} from "com.enderio.core.common.blockentity.EnderBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EIOBlockEntity extends $EnderBlockEntity {
static readonly "DATA": string
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "INDEX": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "serverTick"(): void
public "onLoad"(): void
public "neighborChanged"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
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

public "inputs"(): $List<($Ingredient)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SlicingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "output"(): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $SlicingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "energy"(): integer
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SlicingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getEnergyCost"(arg0: $SlicingRecipe$Input$$Type): integer
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SlicingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "group"(): string
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


public static "values"(): ($GlassCollisionPredicate)[]
public static "valueOf"(arg0: string): $GlassCollisionPredicate
public "shortName"(): string
public static "fromToken"(arg0: $Item$$Type): $GlassCollisionPredicate
public static "invert"(arg0: $GlassCollisionPredicate$$Type): $GlassCollisionPredicate
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
declare module "com.enderio.base.api.filter.ResourceFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ResourceFilter {

}

export namespace $ResourceFilter {
const probejs$$marker: never
}
export class $ResourceFilter$$Static implements $ResourceFilter {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceFilter$$Type = ($ResourceFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceFilter_ = $ResourceFilter$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.energy.EnergyConduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$Conduit$ConduitConnectionData, $Conduit$ConduitConnectionData$$Type} from "com.enderio.conduits.api.Conduit$ConduitConnectionData"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.SlotType"
import {$ConduitMenuData, $ConduitMenuData$$Type} from "com.enderio.conduits.api.ConduitMenuData"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnergyConduit extends $Record implements $Conduit<($EnergyConduit)> {
static readonly "CODEC": $MapCodec<($EnergyConduit)>

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, transferRatePerTick: integer)

public "type"(): $ConduitType<($EnergyConduit)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $EnergyConduit$$Type): integer
public "compareTo"(arg0: any): integer
public static "of"(arg0: $ResourceLocation$$Type, arg1: $Component$$Type, arg2: integer): $EnergyConduit
public "description"(): $Component
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getTicker"(): $ConduitTicker<(any)>
public "texture"(): $ResourceLocation
public "proxyCapability"<TCap, TContext>(arg0: $BlockCapability$$Type<(TCap), (TContext)>, arg1: $ConduitNode$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: TContext): TCap
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "getDefaultConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $Conduit$ConduitConnectionData
public "graphTickRate"(): integer
public "getMenuData"(): $ConduitMenuData
public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "transferRatePerTick"(): integer
public "getTexture"(arg0: $ConduitNode$$Type): $ResourceLocation
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "hasConnectionDelay"(): boolean
public "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "canApplyUpgrade"(arg0: $SlotType$$Type, arg1: $ConduitUpgrade$$Type): boolean
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "canApplyFilter"(arg0: $SlotType$$Type, arg1: $ResourceFilter$$Type): boolean
public "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "canConnectTo"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
get "ticker"(): $ConduitTicker<(any)>
get "menuData"(): $ConduitMenuData
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

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SagMillingRecipe)>
public "codec"(): $MapCodec<($SagMillingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SlicingRecipe)>
public "codec"(): $MapCodec<($SlicingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FireBlock, $FireBlock$$Type} from "net.minecraft.world.level.block.FireBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
 "descriptionId": string
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StandingAndWallBlockItem, $StandingAndWallBlockItem$$Type} from "net.minecraft.world.item.StandingAndWallBlockItem"

export class $EnderSkullBlockItem extends $StandingAndWallBlockItem {
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

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $Direction$$Type)

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
export type $EnderSkullBlockItem$$Type = ($EnderSkullBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderSkullBlockItem_ = $EnderSkullBlockItem$$Type;
}}
declare module "com.enderio.conduits.api.ConduitDataAccessor" {
import {$ConduitData, $ConduitData$$Type} from "com.enderio.conduits.api.ConduitData"
import {$ConduitDataType, $ConduitDataType$$Type} from "com.enderio.conduits.api.ConduitDataType"

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
declare module "com.enderio.base.common.block.SilentPressurePlateBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$PressurePlateBlock, $PressurePlateBlock$$Type} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineInventoryLayout$Builder$SlotBuilder, $MachineInventoryLayout$Builder$SlotBuilder$$Type} from "com.enderio.machines.common.blocks.base.inventory.MachineInventoryLayout$Builder$SlotBuilder"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess"

export class $MachineInventoryLayout$Builder {

constructor()

public "slot"(arg0: $UnaryOperator$$Type<($MachineInventoryLayout$Builder$SlotBuilder)>): $MachineInventoryLayout$Builder
public "build"(): $MachineInventoryLayout
public "inputSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "inputSlot"(): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "outputSlot"(): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "storageSlot"(): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "ghostSlot"(): $MachineInventoryLayout$Builder
public "slotAccess"(arg0: $MultiSlotAccess$$Type): $MachineInventoryLayout$Builder
public "slotAccess"(arg0: $SingleSlotAccess$$Type): $MachineInventoryLayout$Builder
public "setStackLimit"(arg0: integer): $MachineInventoryLayout$Builder
public "capacitor"(): $MachineInventoryLayout$Builder
public "previewSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "previewSlot"(): $MachineInventoryLayout$Builder
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
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$MachineStateType, $MachineStateType$$Type} from "com.enderio.machines.common.blocks.base.state.MachineStateType"
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
public "toString"(): string
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

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SoulBindingRecipe)>
public "codec"(): $MapCodec<($SoulBindingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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
declare module "com.enderio.conduits.common.redstone.RedstoneFilterItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $RedstoneFilterItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
static "TIMER_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "NOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static "OR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static "SENSOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static "COUNT_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static "AND_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static "NAND_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static "TLATCH_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static "XNOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "NOT_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static "XOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Supplier$$Type<($MenuType$$Type<(any)>)>)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
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

public "stack"(): $Either<($ItemStack), ($FluidStack)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: $FluidStack$$Type): $OutputStack
public static "of"(arg0: $ItemStack$$Type): $OutputStack
public "getItem"(): $ItemStack
public "getFluid"(): $FluidStack
public "isFluid"(): boolean
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "isItem"(): boolean
public static "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $OutputStack
get "empty"(): boolean
get "item"(): $ItemStack
get "fluid"(): $FluidStack
get "fluid"(): boolean
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
import {$NetworkDataSlot$Type, $NetworkDataSlot$Type$$Type} from "com.enderio.core.common.network.NetworkDataSlot$Type"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $NetworkDataSlot<T> {
static "RESOURCE_LOCATION": $NetworkDataSlot$CodecType<($ResourceLocation)>
static "FLUID_STACK": $NetworkDataSlot$CodecType<($FluidStack)>
static "FLOAT": $NetworkDataSlot$CodecType<(float)>
static "BOOL": $NetworkDataSlot$CodecType<(boolean)>
static "STRING": $NetworkDataSlot$CodecType<(string)>
static "INT": $NetworkDataSlot$CodecType<(integer)>
static "LONG": $NetworkDataSlot$CodecType<(long)>

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
declare module "com.enderio.armory.common.item.darksteel.upgrades.DarkSteelUpgradeRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DarkSteelUpgradeRecipe, $DarkSteelUpgradeRecipe$$Type} from "com.enderio.armory.common.item.darksteel.upgrades.DarkSteelUpgradeRecipe"

export class $DarkSteelUpgradeRecipe$Serializer implements $RecipeSerializer<($DarkSteelUpgradeRecipe)> {
static readonly "CODEC": $MapCodec<($DarkSteelUpgradeRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($DarkSteelUpgradeRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($DarkSteelUpgradeRecipe)>
public "codec"(): $MapCodec<($DarkSteelUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelUpgradeRecipe$Serializer$$Type = ($DarkSteelUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelUpgradeRecipe$Serializer_ = $DarkSteelUpgradeRecipe$Serializer$$Type;
}}
declare module "com.enderio.base.common.item.tool.LevitationStaffItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoweredToggledItem, $PoweredToggledItem$$Type} from "com.enderio.base.common.item.tool.PoweredToggledItem"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export class $LevitationStaffItem extends $PoweredToggledItem {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IFluidHandlerItem)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getMaxEnergy"(): integer
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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
declare module "com.enderio.base.common.block.glass.GlassIdentifier" {
import {$GlassLighting, $GlassLighting$$Type} from "com.enderio.base.common.block.glass.GlassLighting"
import {$GlassCollisionPredicate, $GlassCollisionPredicate$$Type} from "com.enderio.base.common.block.glass.GlassCollisionPredicate"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GlassIdentifier extends $Record {

constructor(lighting: $GlassLighting$$Type, collisionPredicate: $GlassCollisionPredicate$$Type, explosion_resistance: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "collisionPredicate"(): $GlassCollisionPredicate
public "explosion_resistance"(): boolean
public "glassName"(): string
public "lighting"(): $GlassLighting
public "withoutLight"(): $GlassIdentifier
public "withCollision"(arg0: $GlassCollisionPredicate$$Type): $GlassIdentifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassIdentifier$$Type = ({"explosion_resistance"?: boolean, "lighting"?: $GlassLighting$$Type, "collisionPredicate"?: $GlassCollisionPredicate$$Type}) | ([explosion_resistance?: boolean, lighting?: $GlassLighting$$Type, collisionPredicate?: $GlassCollisionPredicate$$Type]);
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

public "inputs"(): $List<($ItemStack)>
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "inputsConsumed"(): integer
public "getFirstPopulated"(): $ItemStack
public "withInputsConsumed"(arg0: integer): $AlloySmeltingRecipe$Input
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
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
 "descriptionId": string
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

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $FermentingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "input"(): $SizedFluidIngredient
public "output"(): $FluidStack
public "getSerializer"(): $RecipeSerializer<(any)>
public static "getModifier"(arg0: $ItemStack$$Type, arg1: $TagKey$$Type<($Item)>): double
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $FermentingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "ticks"(): integer
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "leftReagent"(): $TagKey<($Item)>
public "rightReagent"(): $TagKey<($Item)>
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $FermentingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getEnergyCost"(arg0: $FermentingRecipe$Input$$Type): integer
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $FermentingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentingRecipe$$Type = ({"rightReagent"?: $TagKey$$Type<($Item)>, "input"?: $SizedFluidIngredient$$Type, "ticks"?: integer, "output"?: $FluidStack$$Type, "leftReagent"?: $TagKey$$Type<($Item)>}) | ([rightReagent?: $TagKey$$Type<($Item)>, input?: $SizedFluidIngredient$$Type, ticks?: integer, output?: $FluidStack$$Type, leftReagent?: $TagKey$$Type<($Item)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FermentingRecipe_ = $FermentingRecipe$$Type;
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AlloySmeltingRecipe)>
public "codec"(): $MapCodec<($AlloySmeltingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
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
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConduitType$Builder, $ConduitType$Builder$$Type} from "com.enderio.conduits.api.ConduitType$Builder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ConduitType$Builder$SimpleType<T extends $Conduit<(T)>> extends $Record implements $ConduitType<(T)> {


public static "of"<T extends $Conduit<(T)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType<(T)>
public static "of"<T extends $Conduit<(T)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType<(T)>
public static "builder"<T extends $Conduit<(T)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType$Builder<(T)>
public static "builder"<T extends $Conduit<(T)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType$Builder<(T)>
public "codec"(): $MapCodec<(T)>
public "exposedCapabilities"(): $Set<($BlockCapability<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitType$Builder$SimpleType$$Type<T> = ({"exposedCapabilities"?: $Set$$Type<($BlockCapability$$Type<(never), (never)>)>, "codec"?: $MapCodec$$Type<(any)>}) | ([exposedCapabilities?: $Set$$Type<($BlockCapability$$Type<(never), (never)>)>, codec?: $MapCodec$$Type<(any)>]);
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $CapacitorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
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
import {$ItemConduit, $ItemConduit$$Type} from "com.enderio.conduits.common.conduit.type.item.ItemConduit"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$CapabilityAwareConduitTicker, $CapabilityAwareConduitTicker$$Type} from "com.enderio.conduits.api.ticker.CapabilityAwareConduitTicker"

export class $ItemConduitTicker extends $CapabilityAwareConduitTicker<($ItemConduit), ($IItemHandler)> {

constructor()

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
declare module "com.enderio.base.common.item.capacitors.LootCapacitorItem" {
import {$CapacitorItem, $CapacitorItem$$Type} from "com.enderio.base.common.item.capacitors.CapacitorItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $LootCapacitorItem extends $CapacitorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
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
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoweredToggledItem, $PoweredToggledItem$$Type} from "com.enderio.base.common.item.tool.PoweredToggledItem"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export class $ElectromagnetItem extends $PoweredToggledItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getMaxEnergy"(): integer
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
public "getItemStack"(arg0: $MachineInventoryHolder$$Type): $ItemStack
public "getItemStack"(arg0: $MachineInventory$$Type): $ItemStack
public "getItemStack"(arg0: $Container$$Type): $ItemStack
public "insertItem"(arg0: $MachineInventory$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "insertItem"(arg0: $MachineInventoryHolder$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: $MachineInventory$$Type, arg1: $ItemStack$$Type): void
public "setStackInSlot"(arg0: $MachineInventoryHolder$$Type, arg1: $ItemStack$$Type): void
public "isSlot"(arg0: integer): boolean
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
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
import {$MachineState, $MachineState$$Type} from "com.enderio.machines.common.blocks.base.state.MachineState"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$IOMode, $IOMode$$Type} from "com.enderio.base.api.io.IOMode"

export class $MachineBlockEntity extends $EIOBlockEntity implements $MenuProvider, $Wrenchable, $IOConfigurable, $MachineInventoryHolder {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "DATA": string
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "INDEX": string
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean)

public "isActive"(): boolean
public "getDisplayName"(): $Component
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "shouldRenderIOConfigOverlay"(): boolean
public "supportsRedstoneControl"(): boolean
public "serverTick"(): void
public "getInventory"(): $MachineInventory
public "getModelData"(): $ModelData
public "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
public "getIOConfig"(): $IOConfig
public "getIOMode"(arg0: $Direction$$Type): $IOMode
public "hasInventory"(): boolean
public "canAct"(arg0: integer): boolean
public "canAct"(): boolean
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getMachineStates"(): $Set<($MachineState)>
public "clientSetMachineStates"(arg0: $Set$$Type<($MachineState$$Type)>): void
public "getRedstoneControl"(): $RedstoneControl
public "setRedstoneControl"(arg0: $RedstoneControl$$Type): void
public "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
public "onWrenched"(arg0: $Player$$Type, arg1: $Direction$$Type): $ItemInteractionResult
public "getDefaultIOConfig"(): $IOConfig
public "isIOConfigMutable"(): boolean
public "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
public "getNextIOMode"(arg0: $Direction$$Type): $IOMode
public "cycleIOMode"(arg0: $Direction$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "displayName"(): $Component
get "inventory"(): $MachineInventory
get "modelData"(): $ModelData
get "iOConfig"(): $IOConfig
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "machineStates"(): $Set<($MachineState)>
get "redstoneControl"(): $RedstoneControl
set "redstoneControl"(value: $RedstoneControl$$Type)
get "defaultIOConfig"(): $IOConfig
get "iOConfigMutable"(): boolean
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
declare module "com.enderio.conduits.common.conduit.connection.DynamicConnectionState" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.SlotType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ConnectionState, $ConnectionState$$Type} from "com.enderio.conduits.common.conduit.connection.ConnectionState"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DynamicConnectionState extends $Record implements $ConnectionState {
static "CODEC": $Codec<($DynamicConnectionState)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($DynamicConnectionState)>

constructor(isInsert: boolean, insertChannel: $DyeColor$$Type, isExtract: boolean, extractChannel: $DyeColor$$Type, control: $RedstoneControl$$Type, redstoneChannel: $DyeColor$$Type, filterInsert: $ItemStack$$Type, filterExtract: $ItemStack$$Type, upgradeExtract: $ItemStack$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "control"(): $RedstoneControl
public "getItem"(arg0: $SlotType$$Type): $ItemStack
public "withColor"(arg0: boolean, arg1: $DyeColor$$Type): $DynamicConnectionState
public "redstoneChannel"(): $DyeColor
public static "defaultConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $Holder$$Type<($Conduit<(any)>)>): $DynamicConnectionState
public "withRedstoneMode"(arg0: $RedstoneControl$$Type): $DynamicConnectionState
public "withRedstoneChannel"(arg0: $DyeColor$$Type): $DynamicConnectionState
public "isConnection"(): boolean
public "isInsert"(): boolean
public "filterInsert"(): $ItemStack
public "insertChannel"(): $DyeColor
public "withEnabled"(arg0: boolean, arg1: boolean): $DynamicConnectionState
public "isExtract"(): boolean
public "extractChannel"(): $DyeColor
public "upgradeExtract"(): $ItemStack
public "filterExtract"(): $ItemStack
public "withItem"(arg0: $SlotType$$Type, arg1: $ItemStack$$Type): $DynamicConnectionState
get "empty"(): boolean
get "connection"(): boolean
get "insert"(): boolean
get "extract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicConnectionState$$Type = ({"filterExtract"?: $ItemStack$$Type, "isInsert"?: boolean, "redstoneChannel"?: $DyeColor$$Type, "filterInsert"?: $ItemStack$$Type, "upgradeExtract"?: $ItemStack$$Type, "extractChannel"?: $DyeColor$$Type, "control"?: $RedstoneControl$$Type, "insertChannel"?: $DyeColor$$Type, "isExtract"?: boolean}) | ([filterExtract?: $ItemStack$$Type, isInsert?: boolean, redstoneChannel?: $DyeColor$$Type, filterInsert?: $ItemStack$$Type, upgradeExtract?: $ItemStack$$Type, extractChannel?: $DyeColor$$Type, control?: $RedstoneControl$$Type, insertChannel?: $DyeColor$$Type, isExtract?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicConnectionState_ = $DynamicConnectionState$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$Conduit$ConduitConnectionData, $Conduit$ConduitConnectionData$$Type} from "com.enderio.conduits.api.Conduit$ConduitConnectionData"
import {$RedstoneConduitTicker, $RedstoneConduitTicker$$Type} from "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduitTicker"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.SlotType"
import {$ConduitMenuData, $ConduitMenuData$$Type} from "com.enderio.conduits.api.ConduitMenuData"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RedstoneConduit extends $Record implements $Conduit<($RedstoneConduit)> {
static "CODEC": $MapCodec<($RedstoneConduit)>

constructor(texture: $ResourceLocation$$Type, activeTexture: $ResourceLocation$$Type, description: $Component$$Type)

public "type"(): $ConduitType<($RedstoneConduit)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $RedstoneConduit$$Type): integer
public "description"(): $Component
public "getTicker"(): $RedstoneConduitTicker
public "texture"(): $ResourceLocation
public "getTexture"(arg0: $ConduitNode$$Type): $ResourceLocation
public "graphTickRate"(): integer
public "getMenuData"(): $ConduitMenuData
public "canApplyFilter"(arg0: $SlotType$$Type, arg1: $ResourceFilter$$Type): boolean
public "activeTexture"(): $ResourceLocation
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "hasConnectionDelay"(): boolean
public "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "proxyCapability"<TCapability, TContext>(arg0: $BlockCapability$$Type<(TCapability), (TContext)>, arg1: $ConduitNode$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: TContext): TCapability
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canApplyUpgrade"(arg0: $SlotType$$Type, arg1: $ConduitUpgrade$$Type): boolean
public "getDefaultConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $Conduit$ConduitConnectionData
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "canConnectTo"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
get "ticker"(): $RedstoneConduitTicker
get "menuData"(): $ConduitMenuData
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
declare module "com.enderio.conduits.api.ConduitData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ConduitDataType, $ConduitDataType$$Type} from "com.enderio.conduits.api.ConduitDataType"

export interface $ConduitData<T extends $ConduitData<(T)>> {

 "type"(): $ConduitDataType<(T)>
 "deepCopy"(): T
 "withClientChanges"(arg0: T): T
}

export namespace $ConduitData {
const CODEC: $Codec<($ConduitData<(any)>)>
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitData<(any)>)>
const probejs$$marker: never
}
export class $ConduitData$$Static<T extends $ConduitData<(T)>> implements $ConduitData {
static readonly "CODEC": $Codec<($ConduitData<(any)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitData<(any)>)>


 "type"(): $ConduitDataType<(T)>
 "deepCopy"(): T
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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
declare module "com.enderio.armory.common.item.darksteel.upgrades.DarkSteelUpgradeRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput, $SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$$Type} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DarkSteelUpgradeRecipe extends $SmithingTransformRecipe {
readonly "template": $Ingredient
readonly "result": $ItemStack
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor()

public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelUpgradeRecipe$$Type = ($DarkSteelUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkSteelUpgradeRecipe_ = $DarkSteelUpgradeRecipe$$Type;
}}
declare module "com.enderio.base.common.paint.PaintingTrigger$TriggerInstance" {
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $PaintingTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, paint: $Block$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
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

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FermentingRecipe)>
public "codec"(): $MapCodec<($FermentingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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
import {$CapacityTier, $CapacityTier$$Type} from "com.enderio.machines.common.blockentity.multienergy.CapacityTier"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
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
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
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
 "descriptionId": string
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
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "rightClickBlock"(arg0: $PlayerInteractEvent$RightClickBlock$$Type): void
public static "onAdvancement"(arg0: $AdvancementEvent$AdvancementEarnEvent$$Type): void
public "getTier"(): $CapacityTier
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $DarkSteelSwordItem extends $SwordItem implements $AdvancedTooltipProvider {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "getSkull"(arg0: $LivingEntity$$Type): $Optional<($ItemStack)>
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
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
declare module "com.enderio.conduits.common.conduit.type.fluid.FluidConduitTicker" {
import {$FluidConduit, $FluidConduit$$Type} from "com.enderio.conduits.common.conduit.type.fluid.FluidConduit"
import {$List, $List$$Type} from "java.util.List"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$ColoredRedstoneProvider, $ColoredRedstoneProvider$$Type} from "com.enderio.conduits.api.ColoredRedstoneProvider"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.api.ConduitNetwork"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$CapabilityAwareConduitTicker, $CapabilityAwareConduitTicker$$Type} from "com.enderio.conduits.api.ticker.CapabilityAwareConduitTicker"

export class $FluidConduitTicker extends $CapabilityAwareConduitTicker<($FluidConduit), ($IFluidHandler)> {

constructor()

public "tickGraph"(arg0: $ServerLevel$$Type, arg1: $FluidConduit$$Type, arg2: $List$$Type<($ConduitNode$$Type)>, arg3: $ConduitNetwork$$Type, arg4: $ColoredRedstoneProvider$$Type): void
public "tickGraph"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type<(any)>, arg2: $List$$Type<(any)>, arg3: $ConduitNetwork$$Type, arg4: $ColoredRedstoneProvider$$Type): void
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
declare module "com.enderio.base.common.item.tool.YetaWrenchItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $YetaWrenchItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
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

constructor(range: integer, color: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getType"(): $ParticleType<(any)>
public "color"(): string
public "range"(): integer
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeParticleData$$Type = ({"color"?: string, "range"?: integer}) | ([color?: string, range?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeParticleData_ = $RangeParticleData$$Type;
}}
declare module "com.enderio.machines.common.blocks.fluid_tank.TankRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$MachineFluidTank, $MachineFluidTank$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidTank"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TankRecipe$Input extends $Record implements $RecipeInput {

constructor(fillItem: $ItemStack$$Type, emptyItem: $ItemStack$$Type, fluidTank: $MachineFluidTank$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "fluidTank"(): $MachineFluidTank
public "emptyItem"(): $ItemStack
public "fillItem"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$Input$$Type = ({"fluidTank"?: $MachineFluidTank$$Type, "emptyItem"?: $ItemStack$$Type, "fillItem"?: $ItemStack$$Type}) | ([fluidTank?: $MachineFluidTank$$Type, emptyItem?: $ItemStack$$Type, fillItem?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRecipe$Input_ = $TankRecipe$Input$$Type;
}}
declare module "com.enderio.machines.common.blocks.base.inventory.MultiSlotAccess" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess"
import {$List, $List$$Type} from "java.util.List"
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
declare module "com.enderio.conduits.api.ConduitNetwork" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ConduitNetworkContextType, $ConduitNetworkContextType$$Type} from "com.enderio.conduits.api.ConduitNetworkContextType"
import {$ConduitNetworkContextAccessor, $ConduitNetworkContextAccessor$$Type} from "com.enderio.conduits.api.ConduitNetworkContextAccessor"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$ConduitNetworkContext, $ConduitNetworkContext$$Type} from "com.enderio.conduits.api.ConduitNetworkContext"

export interface $ConduitNetwork extends $ConduitNetworkContextAccessor {

 "getNodes"(): $Collection<($ConduitNode)>
 "getContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "hasContext"(arg0: $ConduitNetworkContextType$$Type<(any)>): boolean
 "getOrCreateContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
get "nodes"(): $Collection<($ConduitNode)>
}

export namespace $ConduitNetwork {
const probejs$$marker: never
}
export class $ConduitNetwork$$Static implements $ConduitNetwork {


 "getNodes"(): $Collection<($ConduitNode)>
 "getContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "hasContext"(arg0: $ConduitNetworkContextType$$Type<(any)>): boolean
 "getOrCreateContext"<T extends $ConduitNetworkContext<(T)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
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
declare module "com.enderio.base.common.block.EIOPressurePlateBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$EIOPressurePlateBlock$Detector, $EIOPressurePlateBlock$Detector$$Type} from "com.enderio.base.common.block.EIOPressurePlateBlock$Detector"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$PressurePlateBlock, $PressurePlateBlock$$Type} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
declare module "com.enderio.conduits.api.ConduitNode$IOState" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.base.api.misc.RedstoneControl"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ConduitNode$IOState extends $Record {

constructor(insert: $Optional$$Type<($DyeColor$$Type)>, extract: $Optional$$Type<($DyeColor$$Type)>, control: $RedstoneControl$$Type, redstoneChannel: $DyeColor$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "extract"(): $Optional<($DyeColor)>
public "insert"(): $Optional<($DyeColor)>
public static "of"(arg0: $DyeColor$$Type, arg1: $DyeColor$$Type, arg2: $RedstoneControl$$Type, arg3: $DyeColor$$Type): $ConduitNode$IOState
public "control"(): $RedstoneControl
public "redstoneChannel"(): $DyeColor
public "isInsert"(): boolean
public "isExtract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNode$IOState$$Type = ({"control"?: $RedstoneControl$$Type, "redstoneChannel"?: $DyeColor$$Type, "extract"?: ($DyeColor$$Type)?, "insert"?: ($DyeColor$$Type)?}) | ([control?: $RedstoneControl$$Type, redstoneChannel?: $DyeColor$$Type, extract?: ($DyeColor$$Type)?, insert?: ($DyeColor$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitNode$IOState_ = $ConduitNode$IOState$$Type;
}}
declare module "com.enderio.machines.common.attachment.FluidTankUser" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MachineTankLayout, $MachineTankLayout$$Type} from "com.enderio.machines.common.io.fluid.MachineTankLayout"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineFluidHandler, $MachineFluidHandler$$Type} from "com.enderio.machines.common.io.fluid.MachineFluidHandler"

export interface $FluidTankUser {

 "getFluidHandler"(): $MachineFluidHandler
 "createFluidHandler"(): $MachineFluidHandler
 "getTankLayout"(): $MachineTankLayout
 "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
get "fluidHandler"(): $MachineFluidHandler
get "tankLayout"(): $MachineTankLayout
}

export namespace $FluidTankUser {
const FLUID_HANDLER_PROVIDER: $ICapabilityProvider<($BlockEntity), ($Direction), ($IFluidHandler)>
const probejs$$marker: never
}
export class $FluidTankUser$$Static implements $FluidTankUser {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($BlockEntity), ($Direction), ($IFluidHandler)>


 "getFluidHandler"(): $MachineFluidHandler
 "createFluidHandler"(): $MachineFluidHandler
 "getTankLayout"(): $MachineTankLayout
 "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
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
import {$Conduit$ConduitConnectionData, $Conduit$ConduitConnectionData$$Type} from "com.enderio.conduits.api.Conduit$ConduitConnectionData"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.SlotType"
import {$ConduitMenuData, $ConduitMenuData$$Type} from "com.enderio.conduits.api.ConduitMenuData"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Set, $Set$$Type} from "java.util.Set"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export interface $Conduit<TConduit extends $Conduit<(TConduit)>> extends $Comparable<(TConduit)>, $TooltipProvider {

 "type"(): $ConduitType<(TConduit)>
 "description"(): $Component
 "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
 "getTicker"(): $ConduitTicker<(TConduit)>
 "texture"(): $ResourceLocation
 "getTexture"(arg0: $ConduitNode$$Type): $ResourceLocation
 "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
 "hasConnectionDelay"(): boolean
 "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "proxyCapability"<TCapability, TContext>(arg0: $BlockCapability$$Type<(TCapability), (TContext)>, arg1: $ConduitNode$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: TContext): TCapability
 "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
 "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
 "canApplyUpgrade"(arg0: $SlotType$$Type, arg1: $ConduitUpgrade$$Type): boolean
 "getDefaultConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $Conduit$ConduitConnectionData
 "hasAdvancedTooltip"(): boolean
 "showDebugTooltip"(): boolean
 "graphTickRate"(): integer
 "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
 "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
 "getMenuData"(): $ConduitMenuData
 "canApplyFilter"(arg0: $SlotType$$Type, arg1: $ResourceFilter$$Type): boolean
 "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "canConnectTo"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
 "canConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
 "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
 "compareTo"(arg0: TConduit): integer
get "ticker"(): $ConduitTicker<(TConduit)>
get "menuData"(): $ConduitMenuData
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
const CODEC: $Codec<($Holder<($Conduit<(any)>)>)>
const DIRECT_CODEC: $Codec<($Conduit<(any)>)>
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Conduit<(any)>)>)>
const probejs$$marker: never
}
export class $Conduit$$Static<TConduit extends $Conduit<(TConduit)>> implements $Conduit {
static readonly "CODEC": $Codec<($Holder<($Conduit<(any)>)>)>
static readonly "DIRECT_CODEC": $Codec<($Conduit<(any)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Conduit<(any)>)>)>


 "type"(): $ConduitType<(TConduit)>
 "description"(): $Component
 "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
 "getTicker"(): $ConduitTicker<(TConduit)>
 "texture"(): $ResourceLocation
 "getTexture"(arg0: $ConduitNode$$Type): $ResourceLocation
 "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
 "hasConnectionDelay"(): boolean
 "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "proxyCapability"<TCapability, TContext>(arg0: $BlockCapability$$Type<(TCapability), (TContext)>, arg1: $ConduitNode$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: TContext): TCapability
 "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
 "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
 "canApplyUpgrade"(arg0: $SlotType$$Type, arg1: $ConduitUpgrade$$Type): boolean
 "getDefaultConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $Conduit$ConduitConnectionData
 "hasAdvancedTooltip"(): boolean
 "showDebugTooltip"(): boolean
 "graphTickRate"(): integer
 "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
 "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
 "getMenuData"(): $ConduitMenuData
 "canApplyFilter"(arg0: $SlotType$$Type, arg1: $ResourceFilter$$Type): boolean
 "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "canConnectTo"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
 "canConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
 "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
 "compareTo"(arg0: TConduit): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Conduit$$Type<TConduit> = (Special.EnderioConduit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Conduit_<TConduit> = $Conduit$$Type<(TConduit)>;
}}
declare module "com.enderio.base.common.block.ReinforcedObsidianBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
import {$List, $List$$Type} from "java.util.List"
import {$RedstoneConduit, $RedstoneConduit$$Type} from "com.enderio.conduits.common.conduit.type.redstone.RedstoneConduit"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode$IOState, $ConduitNode$IOState$$Type} from "com.enderio.conduits.api.ConduitNode$IOState"
import {$ColoredRedstoneProvider, $ColoredRedstoneProvider$$Type} from "com.enderio.conduits.api.ColoredRedstoneProvider"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.conduits.api.ConduitNetwork"
import {$IOAwareConduitTicker$Connection, $IOAwareConduitTicker$Connection$$Type} from "com.enderio.conduits.api.ticker.IOAwareConduitTicker$Connection"
import {$IOAwareConduitTicker, $IOAwareConduitTicker$$Type} from "com.enderio.conduits.api.ticker.IOAwareConduitTicker"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"

export class $RedstoneConduitTicker implements $IOAwareConduitTicker<($RedstoneConduit)> {

constructor()

public "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "tickGraph"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type<(any)>, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
public "tickGraph"(arg0: $ServerLevel$$Type, arg1: $RedstoneConduit$$Type, arg2: $ConduitNetwork$$Type, arg3: $ColoredRedstoneProvider$$Type): void
public "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "tickColoredGraph"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type<(any)>, arg2: $List$$Type<(any)>, arg3: $List$$Type<(any)>, arg4: $DyeColor$$Type, arg5: $ConduitNetwork$$Type, arg6: $ColoredRedstoneProvider$$Type): void
public "tickColoredGraph"(arg0: $ServerLevel$$Type, arg1: $RedstoneConduit$$Type, arg2: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg3: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg4: $DyeColor$$Type, arg5: $ConduitNetwork$$Type, arg6: $ColoredRedstoneProvider$$Type): void
public "shouldSkipColor"(arg0: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>, arg1: $List$$Type<($IOAwareConduitTicker$Connection$$Type)>): boolean
public "tickGraph"(arg0: $ServerLevel$$Type, arg1: $RedstoneConduit$$Type, arg2: $List$$Type<($ConduitNode$$Type)>, arg3: $ConduitNetwork$$Type, arg4: $ColoredRedstoneProvider$$Type): void
public "isRedstoneMode"(arg0: $RedstoneConduit$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $ConduitNode$IOState$$Type, arg4: $ColoredRedstoneProvider$$Type): boolean
public "isLoaded"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
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
import {$Conduit$ConduitConnectionData, $Conduit$ConduitConnectionData$$Type} from "com.enderio.conduits.api.Conduit$ConduitConnectionData"
import {$FluidConduitTicker, $FluidConduitTicker$$Type} from "com.enderio.conduits.common.conduit.type.fluid.FluidConduitTicker"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.SlotType"
import {$ConduitMenuData, $ConduitMenuData$$Type} from "com.enderio.conduits.api.ConduitMenuData"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FluidConduit extends $Record implements $Conduit<($FluidConduit)> {
static readonly "CODEC": $MapCodec<($FluidConduit)>
static readonly "NORMAL_MENU_DATA": $ConduitMenuData
static readonly "ADVANCED_MENU_DATA": $ConduitMenuData

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, transferRatePerTick: integer, isMultiFluid: boolean)

public "type"(): $ConduitType<($FluidConduit)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $FluidConduit$$Type): integer
public "compareTo"(arg0: any): integer
public "description"(): $Component
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getTicker"(): $FluidConduitTicker
public "texture"(): $ResourceLocation
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canApplyUpgrade"(arg0: $SlotType$$Type, arg1: $ConduitUpgrade$$Type): boolean
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
public "getMenuData"(): $ConduitMenuData
public "canApplyFilter"(arg0: $SlotType$$Type, arg1: $ResourceFilter$$Type): boolean
public "canConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
public "isMultiFluid"(): boolean
public "transferRatePerTick"(): integer
public "getTexture"(arg0: $ConduitNode$$Type): $ResourceLocation
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "hasConnectionDelay"(): boolean
public "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "proxyCapability"<TCapability, TContext>(arg0: $BlockCapability$$Type<(TCapability), (TContext)>, arg1: $ConduitNode$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: TContext): TCapability
public "getDefaultConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $Conduit$ConduitConnectionData
public "graphTickRate"(): integer
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "canConnectTo"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
get "ticker"(): $FluidConduitTicker
get "menuData"(): $ConduitMenuData
get "multiFluid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConduit$$Type = ({"isMultiFluid"?: boolean, "transferRatePerTick"?: integer, "texture"?: $ResourceLocation$$Type, "description"?: $Component$$Type}) | ([isMultiFluid?: boolean, transferRatePerTick?: integer, texture?: $ResourceLocation$$Type, description?: $Component$$Type]);
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

public "inputs"(): $List<($SizedIngredient)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $AlloySmeltingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "output"(): $ItemStack
public "experience"(): float
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $AlloySmeltingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "energy"(): integer
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "isSmelting"(): boolean
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $AlloySmeltingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getEnergyCost"(arg0: $AlloySmeltingRecipe$Input$$Type): integer
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $AlloySmeltingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "smelting"(): boolean
get "special"(): boolean
get "group"(): string
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
public static "valueOf"(arg0: string): $IOMode
public "getSerializedName"(): string
public "canConnect"(): boolean
public "canOutput"(): boolean
public "canForce"(): boolean
public "canInput"(): boolean
public "canPush"(): boolean
public "canPull"(): boolean
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
export type $IOMode$$Type = (("none") | ("push") | ("pull") | ("both") | ("disable"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOMode_ = $IOMode$$Type;
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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

public "drain"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $MachineFluidHandler$$Type, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidTankUser$$Type, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "getCapacity"(arg0: $MachineFluidHandler$$Type): integer
public "getCapacity"(arg0: $FluidTankUser$$Type): integer
public "isEmpty"(arg0: $MachineFluidHandler$$Type): boolean
public "isEmpty"(arg0: $FluidTankUser$$Type): boolean
public "fill"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): integer
public "fill"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): integer
public "getFluid"(arg0: $MachineFluidHandler$$Type): $FluidStack
public "getFluid"(arg0: $FluidTankUser$$Type): $FluidStack
public "setFluid"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type): void
public "setFluid"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type): void
public "isTank"(arg0: integer): boolean
public "isFluidValid"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type): boolean
public "isFluidValid"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type): boolean
public "canExtract"(arg0: $MachineFluidHandler$$Type): boolean
public "canExtract"(arg0: $FluidTankUser$$Type): boolean
public "canInsert"(arg0: $FluidTankUser$$Type): boolean
public "canInsert"(arg0: $MachineFluidHandler$$Type): boolean
public "getTank"(arg0: $FluidTankUser$$Type): $MachineFluidTank
public "getTank"(arg0: $MachineFluidHandler$$Type): $MachineFluidTank
public "getFluidAmount"(arg0: $FluidTankUser$$Type): integer
public "getFluidAmount"(arg0: $MachineFluidHandler$$Type): integer
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


public static "values"(): ($GlassLighting)[]
public static "valueOf"(arg0: string): $GlassLighting
public "shortName"(): string
public "englishName"(): string
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
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$UseGliderTrigger$TriggerInstance, $UseGliderTrigger$TriggerInstance$$Type} from "com.enderio.base.common.advancement.UseGliderTrigger$TriggerInstance"
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
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $ConduitFacadeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
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
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $WrappedShapedRecipe extends $ShapedRecipe implements $CraftingRecipe {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern


public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "category"(): $CraftingBookCategory
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getWrapped"(): $ShapedRecipe
public "getGroup"(): string
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "width"(): integer
get "height"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "wrapped"(): $ShapedRecipe
get "group"(): string
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
declare module "com.enderio.machines.common.blocks.painting.PaintingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PaintingRecipe$Input extends $Record implements $RecipeInput {

constructor(template: $ItemStack$$Type, paint: $ItemStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "template"(): $ItemStack
public "paint"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingRecipe$Input$$Type = ({"paint"?: $ItemStack$$Type, "template"?: $ItemStack$$Type}) | ([paint?: $ItemStack$$Type, template?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingRecipe$Input_ = $PaintingRecipe$Input$$Type;
}}
declare module "com.enderio.conduits.api.SlotType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ConduitMenuData, $ConduitMenuData$$Type} from "com.enderio.conduits.api.ConduitMenuData"

export class $SlotType extends $Enum<($SlotType)> {
static readonly "FILTER_INSERT": $SlotType
static readonly "FILTER_EXTRACT": $SlotType
static readonly "UPGRADE_EXTRACT": $SlotType
static readonly "Y_POSITION": integer


public "getY"(): integer
public static "values"(): ($SlotType)[]
public static "valueOf"(arg0: string): $SlotType
public "getX"(): integer
public "isAvailableFor"(arg0: $ConduitMenuData$$Type): boolean
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
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
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
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $RegiliteBlockEntity$$Type<($LegacyMachineBlockEntity$$Type)>, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TankRecipe$Input, $TankRecipe$Input$$Type} from "com.enderio.machines.common.blocks.fluid_tank.TankRecipe$Input"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TankRecipe extends $Record implements $Recipe<($TankRecipe$Input)> {

constructor(input: $Ingredient$$Type, output: $ItemStack$$Type, fluid: $FluidStack$$Type, mode: $TankRecipe$Mode$$Type)

public "mode"(): $TankRecipe$Mode
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $TankRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "input"(): $Ingredient
public "output"(): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $TankRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "fluid"(): $FluidStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $TankRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$$Type = ({"output"?: $ItemStack$$Type, "input"?: $Ingredient$$Type, "mode"?: $TankRecipe$Mode$$Type, "fluid"?: $FluidStack$$Type}) | ([output?: $ItemStack$$Type, input?: $Ingredient$$Type, mode?: $TankRecipe$Mode$$Type, fluid?: $FluidStack$$Type]);
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
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
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
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

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "grindingBallData"(): $GrindingBallData
public "inputItemStack"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
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
declare module "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$OutputItem$SizedTagOutput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SagMillingRecipe$OutputItem$SizedTagOutput extends $Record {

constructor(itemTag: $TagKey$$Type<($Item)>, count: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "count"(): integer
public "itemTag"(): $TagKey<($Item)>
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
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "canExtract"(arg0: integer): boolean
public "canInsert"(arg0: integer): boolean
public "getTankCount"(): integer
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
declare module "com.enderio.base.api.attachment.StoredEntityData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Tuple, $Tuple$$Type} from "net.minecraft.util.Tuple"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $StoredEntityData extends $Record {
static "CODEC": $Codec<($StoredEntityData)>
static readonly "KEY_ID": string
static readonly "KEY_HEALTH": string
static readonly "EMPTY": $StoredEntityData
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($StoredEntityData)>

constructor(entityTag: $CompoundTag$$Type, maxHealth: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $LivingEntity$$Type): $StoredEntityData
public static "of"(arg0: $ResourceLocation$$Type): $StoredEntityData
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($StoredEntityData)>
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public "entityType"(): $Optional<($ResourceLocation)>
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $StoredEntityData
public "maxHealth"(): float
public "entityTag"(): $CompoundTag
public "hasEntity"(): boolean
public "getHealthState"(): $Optional<($Tuple<(float), (float)>)>
public "getEntityTag"(): $CompoundTag
get "healthState"(): $Optional<($Tuple<(float), (float)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoredEntityData$$Type = ({"entityTag"?: $CompoundTag$$Type, "maxHealth"?: float}) | ([entityTag?: $CompoundTag$$Type, maxHealth?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoredEntityData_ = $StoredEntityData$$Type;
}}
declare module "com.enderio.machines.common.travel.AnchorTravelTarget" {
import {$TravelTargetSerializer, $TravelTargetSerializer$$Type} from "com.enderio.base.api.travel.TravelTargetSerializer"
import {$NetworkDataSlot$CodecType, $NetworkDataSlot$CodecType$$Type} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TravelTargetType, $TravelTargetType$$Type} from "com.enderio.base.api.travel.TravelTargetType"
import {$TravelTarget, $TravelTarget$$Type} from "com.enderio.base.api.travel.TravelTarget"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AnchorTravelTarget extends $Record implements $TravelTarget {
static "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($AnchorTravelTarget)>

constructor(pos: $BlockPos$$Type, name: string, icon: $Item$$Type, isVisible: boolean)

public "name"(): string
public "type"(): $TravelTargetType<(any)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
public "isVisible"(): boolean
public "serializer"(): $TravelTargetSerializer<(any)>
public "withName"(arg0: string): $AnchorTravelTarget
public "icon"(): $Item
public "block2BlockRange"(): integer
public "item2BlockRange"(): integer
public "withIcon"(arg0: $Item$$Type): $AnchorTravelTarget
public "withVisible"(arg0: boolean): $AnchorTravelTarget
public "canTravelTo"(): boolean
public "canJumpTo"(): boolean
public "canTeleportTo"(): boolean
get "visible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnchorTravelTarget$$Type = ({"isVisible"?: boolean, "icon"?: $Item$$Type, "name"?: string, "pos"?: $BlockPos$$Type}) | ([isVisible?: boolean, icon?: $Item$$Type, name?: string, pos?: $BlockPos$$Type]);
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

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PaintingRecipe)>
public "codec"(): $MapCodec<($PaintingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
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
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getSelection"(arg0: $ItemStack$$Type): $Optional<($CoordinateSelection)>
public static "setSelection"(arg0: $ItemStack$$Type, arg1: $CoordinateSelection$$Type): void
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
static readonly "DATA": string
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "INDEX": string
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getName"(): string
public "setName"(arg0: string): void
public "isActive"(): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "setIcon"(arg0: $Item$$Type): void
public "isVisible"(): boolean
public "getIcon"(): $Item
public "createInventoryLayout"(): $MachineInventoryLayout
public "setIsVisible"(arg0: boolean): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "name"(): string
set "name"(value: string)
get "active"(): boolean
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
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
declare module "com.enderio.conduits.common.conduit.RightClickAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RightClickAction {

 "hasChanged"(): boolean
}

export namespace $RightClickAction {
const probejs$$marker: never
}
export class $RightClickAction$$Static implements $RightClickAction {


 "hasChanged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RightClickAction$$Type = ($RightClickAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RightClickAction_ = $RightClickAction$$Type;
}}
declare module "com.enderio.machines.mixin.AbstractCookingRecipeAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"

export interface $AbstractCookingRecipeAccessor {

 "getResult"(): $ItemStack
 "getExperience"(): float
 "getIngredient"(): $Ingredient
get "result"(): $ItemStack
get "experience"(): float
get "ingredient"(): $Ingredient
}

export namespace $AbstractCookingRecipeAccessor {
const probejs$$marker: never
}
export class $AbstractCookingRecipeAccessor$$Static implements $AbstractCookingRecipeAccessor {


 "getResult"(): $ItemStack
 "getExperience"(): float
 "getIngredient"(): $Ingredient
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PaintedBlock, $PaintedBlock$$Type} from "com.enderio.base.common.paint.block.PaintedBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
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
declare module "com.enderio.conduits.api.upgrade.ConduitUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConduitUpgrade {

}

export namespace $ConduitUpgrade {
const probejs$$marker: never
}
export class $ConduitUpgrade$$Static implements $ConduitUpgrade {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitUpgrade$$Type = ($ConduitUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConduitUpgrade_ = $ConduitUpgrade$$Type;
}}
declare module "com.enderio.modconduits.mods.appeng.MEConduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$Conduit$ConduitConnectionData, $Conduit$ConduitConnectionData$$Type} from "com.enderio.conduits.api.Conduit$ConduitConnectionData"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.SlotType"
import {$ConduitMenuData, $ConduitMenuData$$Type} from "com.enderio.conduits.api.ConduitMenuData"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MEConduit extends $Record implements $Conduit<($MEConduit)> {
static "CODEC": $MapCodec<($MEConduit)>

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, isDense: boolean)

public "type"(): $ConduitType<($MEConduit)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $MEConduit$$Type): integer
public "compareTo"(arg0: any): integer
public "description"(): $Component
public "getTicker"(): $ConduitTicker<($MEConduit)>
public "texture"(): $ResourceLocation
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "hasConnectionDelay"(): boolean
public "proxyCapability"<TCap, TContext>(arg0: $BlockCapability$$Type<(TCap), (TContext)>, arg1: $ConduitNode$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: TContext): TCap
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "getMenuData"(): $ConduitMenuData
public "isDense"(): boolean
public "canConnectTo"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getTexture"(arg0: $ConduitNode$$Type): $ResourceLocation
public "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canApplyUpgrade"(arg0: $SlotType$$Type, arg1: $ConduitUpgrade$$Type): boolean
public "getDefaultConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $Conduit$ConduitConnectionData
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "graphTickRate"(): integer
public "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
public "canApplyFilter"(arg0: $SlotType$$Type, arg1: $ResourceFilter$$Type): boolean
public "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "canConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
get "ticker"(): $ConduitTicker<($MEConduit)>
get "menuData"(): $ConduitMenuData
get "dense"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEConduit$$Type = ({"description"?: $Component$$Type, "texture"?: $ResourceLocation$$Type, "isDense"?: boolean}) | ([description?: $Component$$Type, texture?: $ResourceLocation$$Type, isDense?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEConduit_ = $MEConduit$$Type;
}}
declare module "com.enderio.base.common.item.misc.BrokenSpawnerItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BrokenSpawnerItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "forType"(arg0: $ResourceLocation$$Type): $ItemStack
public static "getEntityType"(arg0: $ItemStack$$Type): $Optional<($ResourceLocation)>
public static "getPossibleStacks"(): $List<($ItemStack)>
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
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
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
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
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
declare module "com.enderio.base.common.item.misc.EnderiosItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $EnderiosItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
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
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
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
 "descriptionId": string
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
import {$SagMillingRecipe$Input, $SagMillingRecipe$Input$$Type} from "com.enderio.machines.common.blocks.sag_mill.SagMillingRecipe$Input"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $SagMillingRecipe extends $Record implements $MachineRecipe<($SagMillingRecipe$Input)> {

constructor(input: $Ingredient$$Type, outputs: $List$$Type<($SagMillingRecipe$OutputItem$$Type)>, energy: integer, bonusType: $SagMillingRecipe$BonusType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $SagMillingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "input"(): $Ingredient
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "outputs"(): $List<($SagMillingRecipe$OutputItem)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List<(any)>
public "craft"(arg0: $SagMillingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "energy"(): integer
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "getEnergyCost"(arg0: $GrindingBallData$$Type): integer
public "getEnergyCost"(arg0: $SagMillingRecipe$Input$$Type): integer
public "getEnergyCost"(arg0: $RecipeInput$$Type): integer
public "bonusType"(): $SagMillingRecipe$BonusType
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SagMillingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SagMillingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "baseEnergyCost"(): integer
get "special"(): boolean
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$$Type = ({"energy"?: integer, "bonusType"?: $SagMillingRecipe$BonusType$$Type, "outputs"?: $List$$Type<($SagMillingRecipe$OutputItem$$Type)>, "input"?: $Ingredient$$Type}) | ([energy?: integer, bonusType?: $SagMillingRecipe$BonusType$$Type, outputs?: $List$$Type<($SagMillingRecipe$OutputItem$$Type)>, input?: $Ingredient$$Type]);
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
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BlockEntityRenderer, $BlockEntityRenderer$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntityRendererProvider$Context, $BlockEntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RegiliteBlockEntity<T extends $BlockEntity> extends $DeferredHolder<($BlockEntityType<($BlockEntity)>), ($BlockEntityType<(T)>)> implements $ITagagble<($BlockEntityType<(any)>)> {


public "apply"(arg0: $Consumer$$Type<($RegiliteBlockEntity<(T)>)>): $RegiliteBlockEntity<(T)>
public "create"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): T
public "registerCapabilityProviders"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getTags"(): $Set<($TagKey<($BlockEntityType<(any)>)>)>
public static "createBlockEntity"<T extends $BlockEntity>(arg0: $ResourceKey$$Type<($BlockEntityType<($BlockEntity)>)>): $RegiliteBlockEntity<(T)>
public "addCapability"<TCap, TContext>(arg0: $BlockCapability$$Type<(TCap), (TContext)>, arg1: $ICapabilityProvider$$Type<(T), (TContext), (TCap)>): $RegiliteBlockEntity<(T)>
public "getRenderer"(): $Supplier<($Function<($BlockEntityRendererProvider$Context), ($BlockEntityRenderer<(T)>)>)>
public "setRenderer"(arg0: $Supplier$$Type<($Function$$Type<($BlockEntityRendererProvider$Context$$Type), ($BlockEntityRenderer$$Type<(T)>)>)>): $RegiliteBlockEntity<(T)>
public "addBlockEntityTagsTags"(...arg0: ($TagKey$$Type<($BlockEntityType$$Type<(any)>)>)[]): $RegiliteBlockEntity<(T)>
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
import {$FireCraftingRecipe, $FireCraftingRecipe$$Type} from "com.enderio.base.common.recipe.FireCraftingRecipe"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FireCraftingRecipe$Serializer implements $RecipeSerializer<($FireCraftingRecipe)> {
static readonly "CODEC": $MapCodec<($FireCraftingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FireCraftingRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FireCraftingRecipe)>
public "codec"(): $MapCodec<($FireCraftingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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
import {$SideConfig, $SideConfig$$Type} from "com.enderio.base.api.capability.SideConfig"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TravelAnchorBlockEntity, $TravelAnchorBlockEntity$$Type} from "com.enderio.machines.common.blocks.travel_anchor.TravelAnchorBlockEntity"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.machines.common.blocks.base.inventory.SingleSlotAccess"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineBlockEntity, $MachineBlockEntity$$Type} from "com.enderio.machines.common.blocks.base.blockentity.MachineBlockEntity"
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$PaintedBlockEntity, $PaintedBlockEntity$$Type} from "com.enderio.base.common.paint.blockentity.PaintedBlockEntity"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PaintedTravelAnchorBlockEntity extends $TravelAnchorBlockEntity implements $PaintedBlockEntity {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "GHOST": $SingleSlotAccess
static readonly "DATA": string
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "INDEX": string
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getModelData"(): $ModelData
public "getPrimaryPaint"(): $Optional<($Block)>
public "getUpdatePacket"(): $Packet<(any)>
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setPrimaryPaint"(arg0: $Block$$Type): void
public static "createAndRegisterModelProperty"(): $ModelProperty<($Block)>
public "getSecondaryPaint"(): $Optional<($Block)>
public "setSecondaryPaint"(arg0: $Block$$Type): void
public "hasSecondaryPaint"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "modelData"(): $ModelData
get "primaryPaint"(): $Optional<($Block)>
get "updatePacket"(): $Packet<(any)>
set "primaryPaint"(value: $Block$$Type)
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
declare module "com.enderio.conduits.api.ColoredRedstoneProvider" {
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ColoredRedstoneProvider {

 "isRedstoneActive"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $DyeColor$$Type): boolean

(arg0: $ServerLevel, arg1: $BlockPos, arg2: $DyeColor): boolean
}

export namespace $ColoredRedstoneProvider {
const probejs$$marker: never
}
export class $ColoredRedstoneProvider$$Static implements $ColoredRedstoneProvider {


 "isRedstoneActive"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $DyeColor$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredRedstoneProvider$$Type = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $DyeColor) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredRedstoneProvider_ = $ColoredRedstoneProvider$$Type;
}}
declare module "com.enderio.machines.common.blocks.enchanter.EnchanterRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnchanterRecipe$Input extends $Record implements $RecipeInput {

constructor(bookItem: $ItemStack$$Type, catalyst: $ItemStack$$Type, lapis: $ItemStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "lapis"(): $ItemStack
public "catalyst"(): $ItemStack
public "bookItem"(): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$Input$$Type = ({"bookItem"?: $ItemStack$$Type, "catalyst"?: $ItemStack$$Type, "lapis"?: $ItemStack$$Type}) | ([bookItem?: $ItemStack$$Type, catalyst?: $ItemStack$$Type, lapis?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterRecipe$Input_ = $EnchanterRecipe$Input$$Type;
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
declare module "com.enderio.base.common.particle.RangeParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RangeParticleData, $RangeParticleData$$Type} from "com.enderio.base.common.particle.RangeParticleData"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RangeParticleType extends $ParticleType<($RangeParticleData)> {

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RangeParticleData)>
public "codec"(): $MapCodec<($RangeParticleData)>
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
import {$FluidTankBlockEntity, $FluidTankBlockEntity$$Type} from "com.enderio.machines.common.blocks.fluid_tank.FluidTankBlockEntity"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
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
declare module "com.enderio.conduits.api.ticker.IOAwareConduitTicker$Connection" {
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $IOAwareConduitTicker$Connection {

constructor(arg0: $Direction$$Type, arg1: $ConduitNode$$Type)

public "pos"(): $BlockPos
public "node"(): $ConduitNode
public "direction"(): $Direction
public "move"(): $BlockPos
public "upgrade"(): $ConduitUpgrade
public "extractFilter"(): $ResourceFilter
public "insertFilter"(): $ResourceFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOAwareConduitTicker$Connection$$Type = ($IOAwareConduitTicker$Connection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOAwareConduitTicker$Connection_ = $IOAwareConduitTicker$Connection$$Type;
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
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $MaterialItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: boolean)

public "isFoil"(arg0: $ItemStack$$Type): boolean
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
declare module "com.enderio.base.common.item.filter.EntityFilter" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $EntityFilter extends $Item {
static "ENTITY_FILTER": $ICapabilityProvider<($ItemStack), (void), ($ResourceFilter)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFilter$$Type = ($EntityFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFilter_ = $EntityFilter$$Type;
}}
declare module "com.enderio.conduits.common.conduit.type.item.ItemConduit" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$Conduit$ConduitConnectionData, $Conduit$ConduitConnectionData$$Type} from "com.enderio.conduits.api.Conduit$ConduitConnectionData"
import {$ConduitTicker, $ConduitTicker$$Type} from "com.enderio.conduits.api.ticker.ConduitTicker"
import {$SlotType, $SlotType$$Type} from "com.enderio.conduits.api.SlotType"
import {$ConduitMenuData, $ConduitMenuData$$Type} from "com.enderio.conduits.api.ConduitMenuData"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.conduits.api.ConduitNode"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.conduits.api.ConduitType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ConduitUpgrade, $ConduitUpgrade$$Type} from "com.enderio.conduits.api.upgrade.ConduitUpgrade"
import {$ResourceFilter, $ResourceFilter$$Type} from "com.enderio.base.api.filter.ResourceFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Conduit, $Conduit$$Type} from "com.enderio.conduits.api.Conduit"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ItemConduit extends $Record implements $Conduit<($ItemConduit)> {
static readonly "CODEC": $MapCodec<($ItemConduit)>

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, transferRatePerCycle: integer, graphTickRate: integer)

public "type"(): $ConduitType<($ItemConduit)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ItemConduit$$Type): integer
public "description"(): $Component
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getTicker"(): $ConduitTicker<(any)>
public "texture"(): $ResourceLocation
public "canApplyUpgrade"(arg0: $SlotType$$Type, arg1: $ConduitUpgrade$$Type): boolean
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "graphTickRate"(): integer
public "getMenuData"(): $ConduitMenuData
public "canApplyFilter"(arg0: $SlotType$$Type, arg1: $ResourceFilter$$Type): boolean
public "transferRatePerCycle"(): integer
public "getTexture"(arg0: $ConduitNode$$Type): $ResourceLocation
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "hasConnectionDelay"(): boolean
public "canForceConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "proxyCapability"<TCapability, TContext>(arg0: $BlockCapability$$Type<(TCapability), (TContext)>, arg1: $ConduitNode$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: TContext): TCapability
public "canBeInSameBundle"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canBeReplacedBy"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "getDefaultConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $Conduit$ConduitConnectionData
public "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "canConnectTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "canConnectTo"(arg0: $Holder$$Type<($Conduit<(any)>)>): boolean
public "canConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
get "ticker"(): $ConduitTicker<(any)>
get "menuData"(): $ConduitMenuData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConduit$$Type = ({"transferRatePerCycle"?: integer, "graphTickRate"?: integer, "texture"?: $ResourceLocation$$Type, "description"?: $Component$$Type}) | ([transferRatePerCycle?: integer, graphTickRate?: integer, texture?: $ResourceLocation$$Type, description?: $Component$$Type]);
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

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($TankRecipe)>
public "codec"(): $MapCodec<($TankRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PlayerInteractEvent$EntityInteractSpecific, $PlayerInteractEvent$EntityInteractSpecific$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StoredEntityData, $StoredEntityData$$Type} from "com.enderio.base.api.attachment.StoredEntityData"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdvancedTooltipProvider, $AdvancedTooltipProvider$$Type} from "com.enderio.core.client.item.AdvancedTooltipProvider"
import {$FMLCommonSetupEvent, $FMLCommonSetupEvent$$Type} from "net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent"

export class $SoulVialItem extends $Item implements $AdvancedTooltipProvider {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "STORED_ENTITY_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($StoredEntityData)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getEntityData"(arg0: $ItemStack$$Type): $Optional<($StoredEntityData)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "onLivingInteract"(arg0: $PlayerInteractEvent$EntityInteractSpecific$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "onCommonSetup"(arg0: $FMLCommonSetupEvent$$Type): void
public static "getAllFilled"(): $List<($ItemStack)>
public static "setEntityType"(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
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
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $UseGliderTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
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
