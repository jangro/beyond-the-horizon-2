declare module "dev.shadowsoffire.hostilenetworks.data.ModelAttunement" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ModelAttunement extends $Record {
static "CODEC": $Codec<($ModelAttunement)>

constructor(attunable: boolean, predicate: $EntityPredicate$$Type)

public "predicate"(): $EntityPredicate
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type): boolean
public "attunable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelAttunement$$Type = ({"predicate"?: $EntityPredicate$$Type, "attunable"?: boolean}) | ([predicate?: $EntityPredicate$$Type, attunable?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelAttunement_ = $ModelAttunement$$Type;
}}
declare module "dev.shadowsoffire.placebo.block_entity.TickingBlockEntityType" {
import {$ChestBlockEntity, $ChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ChestBlockEntity"
import {$ChiseledBookShelfBlockEntity, $ChiseledBookShelfBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ChiseledBookShelfBlockEntity"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$DispenserBlockEntity, $DispenserBlockEntity$$Type} from "net.minecraft.world.level.block.entity.DispenserBlockEntity"
import {$HopperBlockEntity, $HopperBlockEntity$$Type} from "net.minecraft.world.level.block.entity.HopperBlockEntity"
import {$SmokerBlockEntity, $SmokerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SmokerBlockEntity"
import {$BarrelBlockEntity, $BarrelBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BarrelBlockEntity"
import {$SignBlockEntity, $SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$JigsawBlockEntity, $JigsawBlockEntity$$Type} from "net.minecraft.world.level.block.entity.JigsawBlockEntity"
import {$SculkSensorBlockEntity, $SculkSensorBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SculkSensorBlockEntity"
import {$BrushableBlockEntity, $BrushableBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BrushableBlockEntity"
import {$CommandBlockEntity, $CommandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$JukeboxBlockEntity, $JukeboxBlockEntity$$Type} from "net.minecraft.world.level.block.entity.JukeboxBlockEntity"
import {$BrewingStandBlockEntity, $BrewingStandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BrewingStandBlockEntity"
import {$DaylightDetectorBlockEntity, $DaylightDetectorBlockEntity$$Type} from "net.minecraft.world.level.block.entity.DaylightDetectorBlockEntity"
import {$BannerBlockEntity, $BannerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BannerBlockEntity"
import {$TrappedChestBlockEntity, $TrappedChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TrappedChestBlockEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockEntityRenderPredicate, $BlockEntityRenderPredicate$$Type} from "net.caffeinemc.mods.sodium.api.blockentity.BlockEntityRenderPredicate"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BeaconBlockEntity, $BeaconBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BeaconBlockEntity"
import {$TheEndGatewayBlockEntity, $TheEndGatewayBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TheEndGatewayBlockEntity"
import {$CalibratedSculkSensorBlockEntity, $CalibratedSculkSensorBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CalibratedSculkSensorBlockEntity"
import {$TrialSpawnerBlockEntity, $TrialSpawnerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TrialSpawnerBlockEntity"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$$Type} from "net.minecraft.world.level.block.piston.PistonMovingBlockEntity"
import {$DecoratedPotBlockEntity, $DecoratedPotBlockEntity$$Type} from "net.minecraft.world.level.block.entity.DecoratedPotBlockEntity"
import {$CrafterBlockEntity, $CrafterBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CrafterBlockEntity"
import {$VaultBlockEntity, $VaultBlockEntity$$Type} from "net.minecraft.world.level.block.entity.vault.VaultBlockEntity"
import {$DynamicLightHandlerHolder, $DynamicLightHandlerHolder$$Type} from "toni.sodiumdynamiclights.accessor.DynamicLightHandlerHolder"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ConduitBlockEntity, $ConduitBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ConduitBlockEntity"
import {$SculkShriekerBlockEntity, $SculkShriekerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SculkShriekerBlockEntity"
import {$DropperBlockEntity, $DropperBlockEntity$$Type} from "net.minecraft.world.level.block.entity.DropperBlockEntity"
import {$TheEndPortalBlockEntity, $TheEndPortalBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TheEndPortalBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$EnchantingTableBlockEntity, $EnchantingTableBlockEntity$$Type} from "net.minecraft.world.level.block.entity.EnchantingTableBlockEntity"
import {$SculkCatalystBlockEntity, $SculkCatalystBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SculkCatalystBlockEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CampfireBlockEntity, $CampfireBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CampfireBlockEntity"
import {$BellBlockEntity, $BellBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BellBlockEntity"
import {$LecternBlockEntity, $LecternBlockEntity$$Type} from "net.minecraft.world.level.block.entity.LecternBlockEntity"
import {$EnderChestBlockEntity, $EnderChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.EnderChestBlockEntity"
import {$FurnaceBlockEntity, $FurnaceBlockEntity$$Type} from "net.minecraft.world.level.block.entity.FurnaceBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SpawnerBlockEntity"
import {$ShulkerBoxBlockEntity, $ShulkerBoxBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity"
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "dev.shadowsoffire.placebo.block_entity.TickingBlockEntity"
import {$BeehiveBlockEntity, $BeehiveBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BeehiveBlockEntity"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$HangingSignBlockEntity, $HangingSignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.HangingSignBlockEntity"
import {$TickingBlockEntityType$TickSide, $TickingBlockEntityType$TickSide$$Type} from "dev.shadowsoffire.placebo.block_entity.TickingBlockEntityType$TickSide"
import {$StructureBlockEntity, $StructureBlockEntity$$Type} from "net.minecraft.world.level.block.entity.StructureBlockEntity"
import {$BedBlockEntity, $BedBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BedBlockEntity"
import {$SkullBlockEntity, $SkullBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SkullBlockEntity"
import {$BlastFurnaceBlockEntity, $BlastFurnaceBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlastFurnaceBlockEntity"
import {$ComparatorBlockEntity, $ComparatorBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ComparatorBlockEntity"

export class $TickingBlockEntityType<T extends ($BlockEntity) & ($TickingBlockEntity)> extends $BlockEntityType<(T)> {
static readonly "BLAST_FURNACE": $BlockEntityType<($BlastFurnaceBlockEntity)>
static readonly "HANGING_SIGN": $BlockEntityType<($HangingSignBlockEntity)>
static readonly "COMPARATOR": $BlockEntityType<($ComparatorBlockEntity)>
static readonly "VAULT": $BlockEntityType<($VaultBlockEntity)>
static readonly "SKULL": $BlockEntityType<($SkullBlockEntity)>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<($ChiseledBookShelfBlockEntity)>
static readonly "JIGSAW": $BlockEntityType<($JigsawBlockEntity)>
static readonly "DECORATED_POT": $BlockEntityType<($DecoratedPotBlockEntity)>
static readonly "BEACON": $BlockEntityType<($BeaconBlockEntity)>
static readonly "CRAFTER": $BlockEntityType<($CrafterBlockEntity)>
 "validBlocks": $Set<($Block)>
static readonly "FURNACE": $BlockEntityType<($FurnaceBlockEntity)>
static readonly "BEEHIVE": $BlockEntityType<($BeehiveBlockEntity)>
static readonly "PISTON": $BlockEntityType<($PistonMovingBlockEntity)>
static readonly "TRAPPED_CHEST": $BlockEntityType<($TrappedChestBlockEntity)>
static readonly "END_PORTAL": $BlockEntityType<($TheEndPortalBlockEntity)>
static readonly "ENDER_CHEST": $BlockEntityType<($EnderChestBlockEntity)>
static readonly "COMMAND_BLOCK": $BlockEntityType<($CommandBlockEntity)>
static readonly "SIGN": $BlockEntityType<($SignBlockEntity)>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<($StructureBlockEntity)>
static readonly "BELL": $BlockEntityType<($BellBlockEntity)>
static readonly "ENCHANTING_TABLE": $BlockEntityType<($EnchantingTableBlockEntity)>
static readonly "BREWING_STAND": $BlockEntityType<($BrewingStandBlockEntity)>
static readonly "BED": $BlockEntityType<($BedBlockEntity)>
static readonly "MOB_SPAWNER": $BlockEntityType<($SpawnerBlockEntity)>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<($CalibratedSculkSensorBlockEntity)>
static readonly "SCULK_CATALYST": $BlockEntityType<($SculkCatalystBlockEntity)>
static readonly "CONDUIT": $BlockEntityType<($ConduitBlockEntity)>
static readonly "CAMPFIRE": $BlockEntityType<($CampfireBlockEntity)>
static readonly "END_GATEWAY": $BlockEntityType<($TheEndGatewayBlockEntity)>
static readonly "SMOKER": $BlockEntityType<($SmokerBlockEntity)>
static readonly "DISPENSER": $BlockEntityType<($DispenserBlockEntity)>
static readonly "SCULK_SHRIEKER": $BlockEntityType<($SculkShriekerBlockEntity)>
static readonly "HOPPER": $BlockEntityType<($HopperBlockEntity)>
static readonly "CHEST": $BlockEntityType<($ChestBlockEntity)>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<($DaylightDetectorBlockEntity)>
static readonly "BANNER": $BlockEntityType<($BannerBlockEntity)>
static readonly "SCULK_SENSOR": $BlockEntityType<($SculkSensorBlockEntity)>
static readonly "TRIAL_SPAWNER": $BlockEntityType<($TrialSpawnerBlockEntity)>
static readonly "LECTERN": $BlockEntityType<($LecternBlockEntity)>
static readonly "SHULKER_BOX": $BlockEntityType<($ShulkerBoxBlockEntity)>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<($BrushableBlockEntity)>
static readonly "JUKEBOX": $BlockEntityType<($JukeboxBlockEntity)>
static readonly "BARREL": $BlockEntityType<($BarrelBlockEntity)>
static readonly "DROPPER": $BlockEntityType<($DropperBlockEntity)>

constructor(arg0: $BlockEntityType$BlockEntitySupplier$$Type<(T)>, arg1: $Set$$Type<($Block$$Type)>, arg2: $TickingBlockEntityType$TickSide$$Type)

public "getTicker"(arg0: boolean): $BlockEntityTicker<(T)>
public static "shouldRender"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: T): boolean
public static "addRenderPredicate"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRenderPredicate$$Type<(T)>): void
public static "removeRenderPredicate"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRenderPredicate$$Type<(T)>): boolean
public static "cast"<T extends $BlockEntity>(entityType: $BlockEntityType$$Type<(T)>): $DynamicLightHandlerHolder<(T)>
public static "cast"<T extends $Entity>(entityType: $EntityType$$Type<(T)>): $DynamicLightHandlerHolder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntityType$$Type<T> = ($TickingBlockEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingBlockEntityType_<T> = $TickingBlockEntityType$$Type<(T)>;
}}
declare module "dev.shadowsoffire.hostilenetworks.data.DataModel$DisplayData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DataModel$DisplayData extends $Record {
static readonly "CODEC": $Codec<($DataModel$DisplayData)>
static readonly "DEFAULT": $DataModel$DisplayData

constructor(nbt: $CompoundTag$$Type, scale: float, xOffset: float, yOffset: float, zOffset: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "scale"(): float
public "nbt"(): $CompoundTag
public "yOffset"(): float
public "xOffset"(): float
public "zOffset"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataModel$DisplayData$$Type = ({"nbt"?: $CompoundTag$$Type, "xOffset"?: float, "yOffset"?: float, "scale"?: float, "zOffset"?: float}) | ([nbt?: $CompoundTag$$Type, xOffset?: float, yOffset?: float, scale?: float, zOffset?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataModel$DisplayData_ = $DataModel$DisplayData$$Type;
}}
declare module "dev.shadowsoffire.placebo.events.AnvilLandEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FallingBlockEntity, $FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AnvilLandEvent extends $Event {

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $FallingBlockEntity$$Type)

public "getLevel"(): $Level
public "getEntity"(): $FallingBlockEntity
public "getPos"(): $BlockPos
public "getNewState"(): $BlockState
public "getOldState"(): $BlockState
get "level"(): $Level
get "entity"(): $FallingBlockEntity
get "pos"(): $BlockPos
get "newState"(): $BlockState
get "oldState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilLandEvent$$Type = ($AnvilLandEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilLandEvent_ = $AnvilLandEvent$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.item.MobPredictionItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITabFiller, $ITabFiller$$Type} from "dev.shadowsoffire.placebo.tabs.ITabFiller"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $MobPredictionItem extends $Item implements $ITabFiller {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "fillItemCategory"(arg0: $CreativeModeTab$$Type, arg1: $BuildCreativeModeTabContentsEvent$$Type): void
public static "simple"(arg0: $ItemLike$$Type): $ITabFiller
public static "delegating"(arg0: $Supplier$$Type<($ItemLike$$Type)>): $ITabFiller
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobPredictionItem$$Type = ($MobPredictionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobPredictionItem_ = $MobPredictionItem$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.data.ModelTier" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CodecProvider, $CodecProvider$$Type} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$DynamicHolder, $DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ModelTier extends $Record implements $CodecProvider<($ModelTier)> {
static readonly "CODEC": $Codec<($ModelTier)>

constructor(requiredData: integer, dataPerKill: integer, color: $TextColor$$Type, accuracy: float, canSim: boolean)

public "color"(): $TextColor
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getCodec"(): $Codec<($ModelTier)>
public "getComponent"(): $Component
public "canSim"(): boolean
public "isMax"(): boolean
public "isMin"(): boolean
public "requiredData"(): integer
public "dataPerKill"(): integer
public "colorValue"(): integer
public "asHolder"(): $DynamicHolder<($ModelTier)>
public "accuracy"(): float
get "codec"(): $Codec<($ModelTier)>
get "component"(): $Component
get "max"(): boolean
get "min"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelTier$$Type = ({"color"?: $TextColor$$Type, "accuracy"?: float, "requiredData"?: integer, "dataPerKill"?: integer, "canSim"?: boolean}) | ([color?: $TextColor$$Type, accuracy?: float, requiredData?: integer, dataPerKill?: integer, canSim?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelTier_ = $ModelTier$$Type;
}}
declare module "dev.shadowsoffire.placebo.util.SpecialTooltipItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpecialTooltipItem {

}

export namespace $SpecialTooltipItem {
const probejs$$marker: never
}
export class $SpecialTooltipItem$$Static implements $SpecialTooltipItem {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialTooltipItem$$Type = ($SpecialTooltipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialTooltipItem_ = $SpecialTooltipItem$$Type;
}}
declare module "dev.shadowsoffire.placebo.block_entity.TickingBlockEntityType$TickSide" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TickingBlockEntityType$TickSide extends $Enum<($TickingBlockEntityType$TickSide)> {
static readonly "SERVER": $TickingBlockEntityType$TickSide
static readonly "CLIENT_AND_SERVER": $TickingBlockEntityType$TickSide
static readonly "CLIENT": $TickingBlockEntityType$TickSide


public static "values"(): ($TickingBlockEntityType$TickSide)[]
public static "valueOf"(arg0: StringJS): $TickingBlockEntityType$TickSide
public "ticksOnClient"(): boolean
public "ticksOnServer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntityType$TickSide$$Type = (("client") | ("server") | ("client_and_server"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingBlockEntityType$TickSide_ = $TickingBlockEntityType$TickSide$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.item.DeepLearnerItem" {
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
import {$ComponentItemHandler, $ComponentItemHandler$$Type} from "net.neoforged.neoforge.items.ComponentItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $DeepLearnerItem extends $Item {
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
public static "getItemHandler"(arg0: $ItemStack$$Type): $ComponentItemHandler
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeepLearnerItem$$Type = ($DeepLearnerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeepLearnerItem_ = $DeepLearnerItem$$Type;
}}
declare module "dev.shadowsoffire.placebo.block_entity.TickingBlockEntity" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $TickingBlockEntity {

 "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
 "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
}

export namespace $TickingBlockEntity {
const probejs$$marker: never
}
export class $TickingBlockEntity$$Static implements $TickingBlockEntity {


 "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
 "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntity$$Type = ($TickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingBlockEntity_ = $TickingBlockEntity$$Type;
}}
declare module "dev.shadowsoffire.placebo.block_entity.TickingEntityBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $TickingEntityBlock extends $EntityBlock {

 "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
 "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity

(arg0: $BlockPos, arg1: $BlockState): $BlockEntity$$Type
}

export namespace $TickingEntityBlock {
const probejs$$marker: never
}
export class $TickingEntityBlock$$Static implements $TickingEntityBlock {


 "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
 "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingEntityBlock$$Type = ((arg0: $BlockPos, arg1: $BlockState) => $BlockEntity$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingEntityBlock_ = $TickingEntityBlock$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.data.DataModel$DataPerKill" {
import {$ModelTier, $ModelTier$$Type} from "dev.shadowsoffire.hostilenetworks.data.ModelTier"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Reference2IntOpenHashMap, $Reference2IntOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntOpenHashMap"
import {$DynamicHolder, $DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DataModel$DataPerKill extends $Record {
static readonly "CODEC": $Codec<($DataModel$DataPerKill)>
static "EMPTY": $DataModel$DataPerKill

constructor(overrides: $Reference2IntOpenHashMap$$Type<($DynamicHolder$$Type<($ModelTier$$Type)>)>)

public "overrides"(): $Reference2IntOpenHashMap<($DynamicHolder<($ModelTier)>)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getDataPerKill"(arg0: $ModelTier$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataModel$DataPerKill$$Type = ({"overrides"?: $Reference2IntOpenHashMap$$Type<($DynamicHolder$$Type<($ModelTier$$Type)>)>}) | ([overrides?: $Reference2IntOpenHashMap$$Type<($DynamicHolder$$Type<($ModelTier$$Type)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataModel$DataPerKill_ = $DataModel$DataPerKill$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.data.DataModel$RequiredData" {
import {$ModelTier, $ModelTier$$Type} from "dev.shadowsoffire.hostilenetworks.data.ModelTier"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Reference2IntOpenHashMap, $Reference2IntOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntOpenHashMap"
import {$DynamicHolder, $DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DataModel$RequiredData extends $Record {
static readonly "CODEC": $Codec<($DataModel$RequiredData)>
static "EMPTY": $DataModel$RequiredData

constructor(overrides: $Reference2IntOpenHashMap$$Type<($DynamicHolder$$Type<($ModelTier$$Type)>)>)

public "overrides"(): $Reference2IntOpenHashMap<($DynamicHolder<($ModelTier)>)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "validate"(arg0: $DataModel$RequiredData$$Type): $DataResult<($DataModel$RequiredData)>
public "getRequiredData"(arg0: $ModelTier$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataModel$RequiredData$$Type = ({"overrides"?: $Reference2IntOpenHashMap$$Type<($DynamicHolder$$Type<($ModelTier$$Type)>)>}) | ([overrides?: $Reference2IntOpenHashMap$$Type<($DynamicHolder$$Type<($ModelTier$$Type)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataModel$RequiredData_ = $DataModel$RequiredData$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.item.FabDirectiveItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$SpecialTooltipItem, $SpecialTooltipItem$$Type} from "dev.shadowsoffire.placebo.util.SpecialTooltipItem"
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
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $FabDirectiveItem extends $Item implements $SpecialTooltipItem {
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
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabDirectiveItem$$Type = ($FabDirectiveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabDirectiveItem_ = $FabDirectiveItem$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.block.SimChamberBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TickingEntityBlock, $TickingEntityBlock$$Type} from "dev.shadowsoffire.placebo.block_entity.TickingEntityBlock"
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
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SimChamberBlock extends $HorizontalDirectionalBlock implements $TickingEntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimChamberBlock$$Type = ($SimChamberBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimChamberBlock_ = $SimChamberBlock$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.block.LootFabBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TickingEntityBlock, $TickingEntityBlock$$Type} from "dev.shadowsoffire.placebo.block_entity.TickingEntityBlock"
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
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootFabBlock extends $HorizontalDirectionalBlock implements $TickingEntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFabBlock$$Type = ($LootFabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFabBlock_ = $LootFabBlock$$Type;
}}
declare module "dev.shadowsoffire.placebo.events.ResourceReloadEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ResourceReloadEvent extends $Event {

constructor(arg0: $ResourceManager$$Type, arg1: $LogicalSide$$Type)

public "getSide"(): $LogicalSide
public "getResourceManager"(): $ResourceManager
get "side"(): $LogicalSide
get "resourceManager"(): $ResourceManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceReloadEvent$$Type = ($ResourceReloadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceReloadEvent_ = $ResourceReloadEvent$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.item.DataModelItem" {
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITabFiller, $ITabFiller$$Type} from "dev.shadowsoffire.placebo.tabs.ITabFiller"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$DataModel, $DataModel$$Type} from "dev.shadowsoffire.hostilenetworks.data.DataModel"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DynamicHolder, $DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"

export class $DataModelItem extends $Item implements $ITabFiller {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getData"(arg0: $ItemStack$$Type): integer
public static "setData"(arg0: $ItemStack$$Type, arg1: integer): void
public "getName"(arg0: $ItemStack$$Type): $Component
public static "getStoredModel"(arg0: $ItemStack$$Type): $DynamicHolder<($DataModel)>
public static "getIters"(arg0: $ItemStack$$Type): integer
public static "setIters"(arg0: $ItemStack$$Type, arg1: integer): void
public static "setStoredModel"(arg0: $ItemStack$$Type, arg1: $DynamicHolder$$Type<($DataModel$$Type)>): void
public static "setStoredModel"(arg0: $ItemStack$$Type, arg1: $DataModel$$Type): void
public static "matchesModelInput"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "fillItemCategory"(arg0: $CreativeModeTab$$Type, arg1: $BuildCreativeModeTabContentsEvent$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
public static "simple"(arg0: $ItemLike$$Type): $ITabFiller
public static "delegating"(arg0: $Supplier$$Type<($ItemLike$$Type)>): $ITabFiller
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataModelItem$$Type = ($DataModelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataModelItem_ = $DataModelItem$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.item.BlankDataModelItem" {
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

export class $BlankDataModelItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlankDataModelItem$$Type = ($BlankDataModelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlankDataModelItem_ = $BlankDataModelItem$$Type;
}}
declare module "dev.shadowsoffire.placebo.util.CachedObject$CachedObjectSource" {
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $CachedObject$CachedObjectSource {

 "getOrCreate"<T>(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ItemStack), (T)>, arg2: $ToIntFunction$$Type<($ItemStack)>): T

(arg0: $ResourceLocation, arg1: $Function<($ItemStack), (T)>, arg2: $ToIntFunction<($ItemStack)>): T
}

export namespace $CachedObject$CachedObjectSource {
function getOrCreate<T>(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: $Function$$Type<($ItemStack), (T)>, arg3: $ToIntFunction$$Type<($ItemStack)>): T
const probejs$$marker: never
}
export class $CachedObject$CachedObjectSource$$Static implements $CachedObject$CachedObjectSource {


 "getOrCreate"<T>(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ItemStack), (T)>, arg2: $ToIntFunction$$Type<($ItemStack)>): T
static "getOrCreate"<T>(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: $Function$$Type<($ItemStack), (T)>, arg3: $ToIntFunction$$Type<($ItemStack)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedObject$CachedObjectSource$$Type = ((arg0: $ResourceLocation, arg1: $Function<($ItemStack), (T)>, arg2: $ToIntFunction<($ItemStack)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedObject$CachedObjectSource_ = $CachedObject$CachedObjectSource$$Type;
}}
declare module "dev.shadowsoffire.placebo.codec.CodecProvider" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export interface $CodecProvider<R> {

 "getCodec"(): $Codec<(R)>

(): $Codec$$Type<(R)>
get "codec"(): $Codec<(R)>
}

export namespace $CodecProvider {
const probejs$$marker: never
}
export class $CodecProvider$$Static<R> implements $CodecProvider {


 "getCodec"(): $Codec<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecProvider$$Type<R> = (() => $Codec$$Type<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecProvider_<R> = $CodecProvider$$Type<(R)>;
}}
declare module "dev.shadowsoffire.placebo.util.DrawsOnLeft" {
import {$AbstractContainerScreen, $AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $DrawsOnLeft {

 "__ths"(): $AbstractContainerScreen<(any)>
 "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer): void
 "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer, arg3: integer): void
}

export namespace $DrawsOnLeft {
function draw(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $GuiGraphics$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer): void
const probejs$$marker: never
}
export class $DrawsOnLeft$$Static implements $DrawsOnLeft {


 "__ths"(): $AbstractContainerScreen<(any)>
static "draw"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $GuiGraphics$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer): void
 "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer): void
 "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawsOnLeft$$Type = ($DrawsOnLeft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawsOnLeft_ = $DrawsOnLeft$$Type;
}}
declare module "dev.shadowsoffire.placebo.tabs.ITabFiller" {
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export interface $ITabFiller {

 "fillItemCategory"(arg0: $CreativeModeTab$$Type, arg1: $BuildCreativeModeTabContentsEvent$$Type): void

(arg0: $CreativeModeTab, arg1: $BuildCreativeModeTabContentsEvent): void
}

export namespace $ITabFiller {
function simple(arg0: $ItemLike$$Type): $ITabFiller
function delegating(arg0: $Supplier$$Type<($ItemLike$$Type)>): $ITabFiller
const probejs$$marker: never
}
export class $ITabFiller$$Static implements $ITabFiller {


static "simple"(arg0: $ItemLike$$Type): $ITabFiller
static "delegating"(arg0: $Supplier$$Type<($ItemLike$$Type)>): $ITabFiller
 "fillItemCategory"(arg0: $CreativeModeTab$$Type, arg1: $BuildCreativeModeTabContentsEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabFiller$$Type = ((arg0: $CreativeModeTab, arg1: $BuildCreativeModeTabContentsEvent) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITabFiller_ = $ITabFiller$$Type;
}}
declare module "dev.shadowsoffire.hostilenetworks.data.DataModel" {
import {$ModelTier, $ModelTier$$Type} from "dev.shadowsoffire.hostilenetworks.data.ModelTier"
import {$DataModel$DataPerKill, $DataModel$DataPerKill$$Type} from "dev.shadowsoffire.hostilenetworks.data.DataModel$DataPerKill"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CodecProvider, $CodecProvider$$Type} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataModel$RequiredData, $DataModel$RequiredData$$Type} from "dev.shadowsoffire.hostilenetworks.data.DataModel$RequiredData"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DataModel$DisplayData, $DataModel$DisplayData$$Type} from "dev.shadowsoffire.hostilenetworks.data.DataModel$DisplayData"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ModelAttunement, $ModelAttunement$$Type} from "dev.shadowsoffire.hostilenetworks.data.ModelAttunement"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $DataModel extends $Record implements $CodecProvider<($DataModel)> {
static readonly "CODEC": $Codec<($DataModel)>

constructor(arg0: $DataModel$$Type, arg1: $List$$Type<($ItemStack$$Type)>)
constructor(entity: $EntityType$$Type<(any)>, variants: $List$$Type<($EntityType$$Type<(any)>)>, name: $Component$$Type, display: $DataModel$DisplayData$$Type, simCost: integer, input: $Ingredient$$Type, baseDrop: $ItemStack$$Type, triviaKey: StringJS, fabDrops: $List$$Type<($ItemStack$$Type)>, requiredData: $DataModel$RequiredData$$Type, dataPerKill: $DataModel$DataPerKill$$Type, attunement: $Optional$$Type<($ModelAttunement$$Type)>)

public "entity"(): $EntityType<(any)>
public "input"(): $Ingredient
public "display"(): $DataModel$DisplayData
public "variants"(): $List<($EntityType<(any)>)>
public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "validate"(arg0: $DataModel$$Type): $DataResult<($DataModel)>
public "getRequiredData"(arg0: $ModelTier$$Type): integer
public "getCodec"(): $Codec<($DataModel)>
public "fabDrops"(): $List<($ItemStack)>
public "triviaKey"(): StringJS
public "requiredData"(): $DataModel$RequiredData
public "attunement"(): $Optional<($ModelAttunement)>
public "getNameColor"(): integer
public "attunesTo"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type): boolean
public "baseDrop"(): $ItemStack
public "simCost"(): integer
public "getDataPerKill"(arg0: $ModelTier$$Type): integer
public "dataPerKill"(): $DataModel$DataPerKill
public "hasAttunement"(): boolean
public "getPredictionDrop"(): $ItemStack
public "entityAndVariants"(): $Stream<($EntityType<(any)>)>
get "codec"(): $Codec<($DataModel)>
get "nameColor"(): integer
get "predictionDrop"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataModel$$Type = ({"fabDrops"?: $List$$Type<($ItemStack$$Type)>, "baseDrop"?: $ItemStack$$Type, "entity"?: $EntityType$$Type<(never)>, "triviaKey"?: StringJS, "simCost"?: integer, "variants"?: $List$$Type<($EntityType$$Type<(never)>)>, "dataPerKill"?: $DataModel$DataPerKill$$Type, "requiredData"?: $DataModel$RequiredData$$Type, "attunement"?: ($ModelAttunement$$Type)?, "input"?: $Ingredient$$Type, "display"?: $DataModel$DisplayData$$Type, "name"?: $Component$$Type}) | ([fabDrops?: $List$$Type<($ItemStack$$Type)>, baseDrop?: $ItemStack$$Type, entity?: $EntityType$$Type<(never)>, triviaKey?: StringJS, simCost?: integer, variants?: $List$$Type<($EntityType$$Type<(never)>)>, dataPerKill?: $DataModel$DataPerKill$$Type, requiredData?: $DataModel$RequiredData$$Type, attunement?: ($ModelAttunement$$Type)?, input?: $Ingredient$$Type, display?: $DataModel$DisplayData$$Type, name?: $Component$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataModel_ = $DataModel$$Type;
}}
