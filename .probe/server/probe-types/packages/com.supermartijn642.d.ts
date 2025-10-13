declare module "com.supermartijn642.core.block.BaseBlockEntityType" {
import {$ChestBlockEntity, $ChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ChestBlockEntity"
import {$ChiseledBookShelfBlockEntity, $ChiseledBookShelfBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ChiseledBookShelfBlockEntity"
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
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BlockEntityRenderPredicate, $BlockEntityRenderPredicate$$Type} from "net.caffeinemc.mods.sodium.api.blockentity.BlockEntityRenderPredicate"
import {$BeaconBlockEntity, $BeaconBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BeaconBlockEntity"
import {$TheEndGatewayBlockEntity, $TheEndGatewayBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TheEndGatewayBlockEntity"
import {$CalibratedSculkSensorBlockEntity, $CalibratedSculkSensorBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CalibratedSculkSensorBlockEntity"
import {$TrialSpawnerBlockEntity, $TrialSpawnerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TrialSpawnerBlockEntity"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
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
import {$BaseBlockEntity, $BaseBlockEntity$$Type} from "com.supermartijn642.core.block.BaseBlockEntity"
import {$CampfireBlockEntity, $CampfireBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CampfireBlockEntity"
import {$BellBlockEntity, $BellBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BellBlockEntity"
import {$LecternBlockEntity, $LecternBlockEntity$$Type} from "net.minecraft.world.level.block.entity.LecternBlockEntity"
import {$EnderChestBlockEntity, $EnderChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.EnderChestBlockEntity"
import {$FurnaceBlockEntity, $FurnaceBlockEntity$$Type} from "net.minecraft.world.level.block.entity.FurnaceBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SpawnerBlockEntity"
import {$ShulkerBoxBlockEntity, $ShulkerBoxBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity"
import {$BeehiveBlockEntity, $BeehiveBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BeehiveBlockEntity"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$HangingSignBlockEntity, $HangingSignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.HangingSignBlockEntity"
import {$StructureBlockEntity, $StructureBlockEntity$$Type} from "net.minecraft.world.level.block.entity.StructureBlockEntity"
import {$BedBlockEntity, $BedBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BedBlockEntity"
import {$SkullBlockEntity, $SkullBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SkullBlockEntity"
import {$BlastFurnaceBlockEntity, $BlastFurnaceBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlastFurnaceBlockEntity"
import {$ComparatorBlockEntity, $ComparatorBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ComparatorBlockEntity"

export class $BaseBlockEntityType<T extends $BlockEntity> extends $BlockEntityType<(T)> {
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


public static "create"<T extends $BaseBlockEntity>(entitySupplier: $BiFunction$$Type<($BlockPos), ($BlockState), (T)>, ...validBlocks: ($Block$$Type)[]): $BaseBlockEntityType<(T)>
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
export type $BaseBlockEntityType$$Type<T> = ($BaseBlockEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntityType_<T> = $BaseBlockEntityType$$Type<(T)>;
}}
declare module "com.supermartijn642.core.util.Pair" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export class $Pair<X, Y> {


public "left"(): X
public "right"(): Y
public "equals"(o: any): boolean
public "hashCode"(): integer
public "apply"(consumer: $BiConsumer$$Type<(X), (Y)>): void
public "map"<R, S>(mapLeft: $Function$$Type<(X), (R)>, mapRight: $Function$$Type<(Y), (S)>): $Pair<(R), (S)>
public static "of"<X, Y>(left: X, right: Y): $Pair<(X), (Y)>
public "flatMap"<S>(mapper: $BiFunction$$Type<(X), (Y), (S)>): S
public "mapLeft"<S>(mapper: $Function$$Type<(X), (S)>): $Pair<(S), (Y)>
public "mapRight"<S>(mapper: $Function$$Type<(Y), (S)>): $Pair<(X), (S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<X, Y> = ($Pair<(X), (Y)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<X, Y> = $Pair$$Type<(X), (Y)>;
}}
declare module "com.supermartijn642.chunkloaders.capability.ClientChunkLoadingCapability" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ChunkLoadingCapability, $ChunkLoadingCapability$$Type} from "com.supermartijn642.chunkloaders.capability.ChunkLoadingCapability"
import {$ChunkLoaderType, $ChunkLoaderType$$Type} from "com.supermartijn642.chunkloaders.ChunkLoaderType"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $ClientChunkLoadingCapability extends $ChunkLoadingCapability {

constructor(level: $Level$$Type)

public "addChunkLoader"(pos: $BlockPos$$Type, owner: $UUID$$Type, type: $ChunkLoaderType$$Type): void
public "readServerInfo"(compound: $CompoundTag$$Type): void
public "stopLoadingChunk"(player: $UUID$$Type, chunkPos: $ChunkPos$$Type): void
public "removeChunkLoader"(pos: $BlockPos$$Type, owner: $UUID$$Type, type: $ChunkLoaderType$$Type): void
public "startLoadingChunk"(player: $UUID$$Type, chunkPos: $ChunkPos$$Type, active: boolean): void
public "togglePlayerActivity"(player: $UUID$$Type, active: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkLoadingCapability$$Type = ($ClientChunkLoadingCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkLoadingCapability_ = $ClientChunkLoadingCapability$$Type;
}}
declare module "com.supermartijn642.chunkloaders.capability.ServerChunkLoadingCapability" {
import {$TicketHelper, $TicketHelper$$Type} from "net.neoforged.neoforge.common.world.chunk.TicketHelper"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ChunkLoadingCapability, $ChunkLoadingCapability$$Type} from "com.supermartijn642.chunkloaders.capability.ChunkLoadingCapability"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ChunkLoaderBlockEntity, $ChunkLoaderBlockEntity$$Type} from "com.supermartijn642.chunkloaders.ChunkLoaderBlockEntity"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $ServerChunkLoadingCapability extends $ChunkLoadingCapability {

constructor(level: $Level$$Type)

public "onLoadLevel"(ticketHelper: $TicketHelper$$Type): void
public "addChunkLoader"(entity: $ChunkLoaderBlockEntity$$Type): void
public "stopLoadingChunk"(player: $UUID$$Type, chunkPos: $ChunkPos$$Type): void
public "removeChunkLoader"(entity: $ChunkLoaderBlockEntity$$Type): void
public "startLoadingChunk"(player: $UUID$$Type, chunkPos: $ChunkPos$$Type): void
public "togglePlayerActivity"(player: $UUID$$Type, active: boolean): void
public "getChunksToBeTicked"(): $Set<($ChunkPos)>
public "writeClientInfo"(): $CompoundTag
get "chunksToBeTicked"(): $Set<($ChunkPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkLoadingCapability$$Type = ($ServerChunkLoadingCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerChunkLoadingCapability_ = $ServerChunkLoadingCapability$$Type;
}}
declare module "com.supermartijn642.core.item.ItemProperties" {
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$ItemRarity, $ItemRarity$$Type} from "com.supermartijn642.core.item.ItemRarity"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"

export class $ItemProperties {


public static "create"(): $ItemProperties
public "maxStackSize"(maxStackSize: integer): $ItemProperties
public "group"(group: $CreativeModeTab$$Type): $ItemProperties
public "component"<T>(type: $DataComponentType$$Type<(T)>, value: T): $ItemProperties
public "rarity"(rarity: $ItemRarity$$Type): $ItemProperties
public "rarity"(rarity: $Rarity$$Type): $ItemProperties
public "food"(foodProperties: $FoodProperties$$Type): $ItemProperties
public "craftRemainder"(item: $Item$$Type): $ItemProperties
public "durability"(durability: integer): $ItemProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $Item$Properties
public "fireResistant"(): $ItemProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemProperties$$Type = ($ItemProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemProperties_ = $ItemProperties$$Type;
}}
declare module "com.supermartijn642.fusion.api.texture.SpritePreparationContext" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AnimationMetadataSection, $AnimationMetadataSection$$Type} from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection"
import {$Pair, $Pair$$Type} from "com.supermartijn642.fusion.api.util.Pair"

export interface $SpritePreparationContext {

 "getIdentifier"(): $ResourceLocation
 "getOriginalFrameSize"(): $Pair<(integer), (integer)>
 "getAnimationMetadata"(): $AnimationMetadataSection
 "getTextureWidth"(): integer
 "getOriginalFrameWith"(): integer
 "getTextureHeight"(): integer
 "getOriginalFrameHeight"(): integer
get "identifier"(): $ResourceLocation
get "originalFrameSize"(): $Pair<(integer), (integer)>
get "animationMetadata"(): $AnimationMetadataSection
get "textureWidth"(): integer
get "originalFrameWith"(): integer
get "textureHeight"(): integer
get "originalFrameHeight"(): integer
}

export namespace $SpritePreparationContext {
const probejs$$marker: never
}
export class $SpritePreparationContext$$Static implements $SpritePreparationContext {


 "getIdentifier"(): $ResourceLocation
 "getOriginalFrameSize"(): $Pair<(integer), (integer)>
 "getAnimationMetadata"(): $AnimationMetadataSection
 "getTextureWidth"(): integer
 "getOriginalFrameWith"(): integer
 "getTextureHeight"(): integer
 "getOriginalFrameHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpritePreparationContext$$Type = ($SpritePreparationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpritePreparationContext_ = $SpritePreparationContext$$Type;
}}
declare module "com.supermartijn642.core.item.BaseItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BaseItem$InteractionFeedback, $BaseItem$InteractionFeedback$$Type} from "com.supermartijn642.core.item.BaseItem$InteractionFeedback"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ItemProperties, $ItemProperties$$Type} from "com.supermartijn642.core.item.ItemProperties"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BaseItem$ItemUseResult, $BaseItem$ItemUseResult$$Type} from "com.supermartijn642.core.item.BaseItem$ItemUseResult"

export class $BaseItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)
constructor(properties: $ItemProperties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slot: integer, isSelected: boolean): void
public "onItemUseFirst"(stack: $ItemStack$$Type, context: $UseOnContext$$Type): $InteractionResult
public "interact"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type): $BaseItem$ItemUseResult
public "interactWithEntity"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $BaseItem$InteractionFeedback
public "interactWithBlock"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, hitPos: $BlockPos$$Type, hitSide: $Direction$$Type, hitLocation: $Vec3$$Type): $BaseItem$InteractionFeedback
public "interactWithBlockFirst"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, hitPos: $BlockPos$$Type, hitSide: $Direction$$Type, hitLocation: $Vec3$$Type): $BaseItem$InteractionFeedback
public "inventoryUpdate"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, itemSlot: integer, isSelected: boolean): void
public "isInCreativeGroup"(tab: $CreativeModeTab$$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$$Type, player: $Player$$Type, target: $LivingEntity$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, information: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "initializeClient"(consumer: $Consumer$$Type<($IClientItemExtensions)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$$Type = ($BaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem_ = $BaseItem$$Type;
}}
declare module "com.supermartijn642.core.item.BaseItem$ItemUseResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BaseItem$ItemUseResult {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$ItemUseResult$$Type = ($BaseItem$ItemUseResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem$ItemUseResult_ = $BaseItem$ItemUseResult$$Type;
}}
declare module "com.supermartijn642.fusion.entity.model.SubModelPart" {
import {$FusionModelPart, $FusionModelPart$$Type} from "com.supermartijn642.fusion.entity.model.FusionModelPart"
import {$PartPose, $PartPose$$Type} from "net.minecraft.client.model.geom.PartPose"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ModelPart$Cube, $ModelPart$Cube$$Type} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$List, $List$$Type} from "java.util.List"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $SubModelPart extends $ModelPart {
 "visible": boolean
static readonly "DEFAULT_SCALE": float
 "zRot": float
 "yRot": float
 "xRot": float
 "yScale": float
 "children": $Map<(StringJS), ($ModelPart)>
 "xScale": float
 "cubes": $List<($ModelPart$Cube)>
 "initialPose": $PartPose
 "x": float
 "y": float
 "z": float
 "skipDraw": boolean
 "zScale": float

constructor(mainPart: $FusionModelPart$$Type)

public "getChild"(name: StringJS): $ModelPart
public "finish"(): void
public "render"(poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, i: integer, j: integer, k: integer): void
public "mirror"(target: $ModelPart$$Type): void
public "hasChild"(name: StringJS): boolean
public "validateModelHasImportantChildren"(model: $ModelPart$$Type, missingPartOutput: $Consumer$$Type<(StringJS)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubModelPart$$Type = ($SubModelPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SubModelPart_ = $SubModelPart$$Type;
}}
declare module "com.supermartijn642.core.data.recipe.ConditionalRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$ResourceCondition, $ResourceCondition$$Type} from "com.supermartijn642.core.data.condition.ResourceCondition"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $ConditionalRecipeSerializer implements $RecipeSerializer<($Recipe<(any)>)> {
static readonly "DUMMY_RECIPE": $Recipe<(any)>
static readonly "INSTANCE": $ConditionalRecipeSerializer
static readonly "DUMMY_RECIPE_TYPE": $RecipeType<($Recipe<(any)>)>


public "codec"(): $MapCodec<($Recipe<(any)>)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($Recipe<(any)>)>
public static "wrapRecipe"(recipe: $JsonObject$$Type, conditions: $Collection$$Type<($ResourceCondition$$Type)>): $JsonObject
public static "unwrapRecipe"(location: $ResourceLocation$$Type, json: $JsonObject$$Type, ops: $DynamicOps$$Type<($JsonElement$$Type)>): $JsonElement
public static "wrapRecipeWithForgeConditions"(recipe: $JsonObject$$Type, conditions: $Collection$$Type<($ICondition$$Type)>): $JsonObject
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalRecipeSerializer$$Type = ($ConditionalRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionalRecipeSerializer_ = $ConditionalRecipeSerializer$$Type;
}}
declare module "com.supermartijn642.chunkloaders.ChunkLoaderBlockEntity" {
import {$ChunkLoaderType, $ChunkLoaderType$$Type} from "com.supermartijn642.chunkloaders.ChunkLoaderType"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BaseBlockEntity, $BaseBlockEntity$$Type} from "com.supermartijn642.core.block.BaseBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChunkLoaderBlockEntity extends $BaseBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "animationOffset": integer

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type, type: $ChunkLoaderType$$Type)

public "getOwner"(): $UUID
public "onLoad"(): void
public "setRemoved"(): void
public "hasOwner"(): boolean
public "getChunkLoaderType"(): $ChunkLoaderType
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "owner"(): $UUID
get "chunkLoaderType"(): $ChunkLoaderType
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoaderBlockEntity$$Type = ($ChunkLoaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoaderBlockEntity_ = $ChunkLoaderBlockEntity$$Type;
}}
declare module "com.supermartijn642.core.block.EntityHoldingBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $EntityHoldingBlock extends $EntityBlock {

 "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
 "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, entityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
 "createNewBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener

(pos: $BlockPos, state: $BlockState): $BlockEntity$$Type
}

export namespace $EntityHoldingBlock {
const probejs$$marker: never
}
export class $EntityHoldingBlock$$Static implements $EntityHoldingBlock {


 "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
 "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, entityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
 "createNewBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHoldingBlock$$Type = ((pos: $BlockPos, state: $BlockState) => $BlockEntity$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityHoldingBlock_ = $EntityHoldingBlock$$Type;
}}
declare module "com.supermartijn642.rechiseled.ChiselItem$ItemHolder" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ChiselItem$ItemHolder extends $Record {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiselItem$ItemHolder$$Type = ({"stack"?: $ItemStack$$Type}) | ([stack?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiselItem$ItemHolder_ = $ChiselItem$ItemHolder$$Type;
}}
declare module "com.supermartijn642.fusion.entity.VanillaModelLayerProperties" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ModelLayerLocation, $ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"

export class $VanillaModelLayerProperties {


public static "get"(location: $ModelLayerLocation$$Type, renderer: $EntityRenderer$$Type<(any)>): $VanillaModelLayerProperties
public "transform"(poseStack: $PoseStack$$Type): void
public "getOffsetX"(): float
public "getOffsetY"(): float
public "getOffsetZ"(): float
public "shouldFlipZ"(): boolean
public "shouldFlipY"(): boolean
public "shouldFlipX"(): boolean
get "offsetX"(): float
get "offsetY"(): float
get "offsetZ"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaModelLayerProperties$$Type = ($VanillaModelLayerProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaModelLayerProperties_ = $VanillaModelLayerProperties$$Type;
}}
declare module "com.supermartijn642.fusion.api.texture.TextureType" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$SpriteCreationContext, $SpriteCreationContext$$Type} from "com.supermartijn642.fusion.api.texture.SpriteCreationContext"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$SpritePreparationContext, $SpritePreparationContext$$Type} from "com.supermartijn642.fusion.api.texture.SpritePreparationContext"
import {$Pair, $Pair$$Type} from "com.supermartijn642.fusion.api.util.Pair"
import {$Serializer, $Serializer$$Type} from "com.supermartijn642.fusion.api.util.Serializer"

export interface $TextureType<T> extends $Serializer<(T)> {

 "createSprite"(context: $SpriteCreationContext$$Type, data: T): $TextureAtlasSprite
 "getFrameSize"(context: $SpritePreparationContext$$Type, data: T): $Pair<(integer), (integer)>
 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(data: T): $JsonObject
}

export namespace $TextureType {
const probejs$$marker: never
}
export class $TextureType$$Static<T> implements $TextureType {


 "createSprite"(context: $SpriteCreationContext$$Type, data: T): $TextureAtlasSprite
 "getFrameSize"(context: $SpritePreparationContext$$Type, data: T): $Pair<(integer), (integer)>
 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(data: T): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureType$$Type<T> = ($TextureType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureType_<T> = $TextureType$$Type<(T)>;
}}
declare module "com.supermartijn642.core.mixin.BlockPropertiesAccessor" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $BlockPropertiesAccessor {

 "getLootTableSupplier"(): $Supplier<($ResourceKey<($LootTable)>)>
 "setLootTableSupplier"(supplier: $Supplier$$Type<($ResourceKey$$Type<($LootTable$$Type)>)>): void
get "lootTableSupplier"(): $Supplier<($ResourceKey<($LootTable)>)>
set "lootTableSupplier"(value: $Supplier$$Type<($ResourceKey$$Type<($LootTable$$Type)>)>)
}

export namespace $BlockPropertiesAccessor {
const probejs$$marker: never
}
export class $BlockPropertiesAccessor$$Static implements $BlockPropertiesAccessor {


 "getLootTableSupplier"(): $Supplier<($ResourceKey<($LootTable)>)>
 "setLootTableSupplier"(supplier: $Supplier$$Type<($ResourceKey$$Type<($LootTable$$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPropertiesAccessor$$Type = ($BlockPropertiesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPropertiesAccessor_ = $BlockPropertiesAccessor$$Type;
}}
declare module "com.supermartijn642.core.gui.BaseContainer" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseContainerType, $BaseContainerType$$Type} from "com.supermartijn642.core.gui.BaseContainerType"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Set, $Set$$Type} from "java.util.Set"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $BaseContainer extends $AbstractContainerMenu {
readonly "quickcraftSlots": $Set<($Slot)>
readonly "level": $Level
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

constructor(type: $BaseContainerType$$Type<(any)>, player: $Player$$Type)

public "stillValid"(playerIn: $Player$$Type): boolean
public "setContainerId"(id: integer): void
public "getContainerType"(): $BaseContainerType<(any)>
set "containerId"(value: integer)
get "containerType"(): $BaseContainerType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainer$$Type = ($BaseContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainer_ = $BaseContainer$$Type;
}}
declare module "com.supermartijn642.fusion.extensions.EntityRendererExtension" {
import {$FusionModelPart, $FusionModelPart$$Type} from "com.supermartijn642.fusion.entity.model.FusionModelPart"
import {$List, $List$$Type} from "java.util.List"

export interface $EntityRendererExtension {

 "getFusionModelParts"(): $List<($FusionModelPart)>
 "setFusionModelParts"(parts: $List$$Type<($FusionModelPart$$Type)>): void
get "fusionModelParts"(): $List<($FusionModelPart)>
set "fusionModelParts"(value: $List$$Type<($FusionModelPart$$Type)>)
}

export namespace $EntityRendererExtension {
const probejs$$marker: never
}
export class $EntityRendererExtension$$Static implements $EntityRendererExtension {


 "getFusionModelParts"(): $List<($FusionModelPart)>
 "setFusionModelParts"(parts: $List$$Type<($FusionModelPart$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererExtension$$Type = ($EntityRendererExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRendererExtension_ = $EntityRendererExtension$$Type;
}}
declare module "com.supermartijn642.core.data.tag.CustomTagEntrySerializer" {
import {$CustomTagEntry, $CustomTagEntry$$Type} from "com.supermartijn642.core.data.tag.CustomTagEntry"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $CustomTagEntrySerializer<T extends $CustomTagEntry> {

 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(json: $JsonObject$$Type, entry: T): void
}

export namespace $CustomTagEntrySerializer {
const probejs$$marker: never
}
export class $CustomTagEntrySerializer$$Static<T extends $CustomTagEntry> implements $CustomTagEntrySerializer {


 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(json: $JsonObject$$Type, entry: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTagEntrySerializer$$Type<T> = ($CustomTagEntrySerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTagEntrySerializer_<T> = $CustomTagEntrySerializer$$Type<(T)>;
}}
declare module "com.supermartijn642.core.item.BaseBlockItem$ItemUseResult" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"

export class $BaseBlockItem$ItemUseResult {


public static "fail"(stack: $ItemStack$$Type): $BaseBlockItem$ItemUseResult
public static "consume"(stack: $ItemStack$$Type): $BaseBlockItem$ItemUseResult
public static "pass"(stack: $ItemStack$$Type): $BaseBlockItem$ItemUseResult
public static "success"(stack: $ItemStack$$Type): $BaseBlockItem$ItemUseResult
/**
 * 
 * @deprecated
 */
public "toUnderlying"(isClientSide: boolean): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(underlying: $InteractionResultHolder$$Type<($ItemStack$$Type)>): $BaseBlockItem$ItemUseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$ItemUseResult$$Type = ($BaseBlockItem$ItemUseResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem$ItemUseResult_ = $BaseBlockItem$ItemUseResult$$Type;
}}
declare module "com.supermartijn642.fusion.resources.FusionPackMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FusionPackMetadata {


public "getOverridesFolder"(): StringJS
public "hasOverridesFolder"(): boolean
public "getMinimumVersion"(): StringJS
public "isMinVersionSatisfied"(): boolean
get "overridesFolder"(): StringJS
get "minimumVersion"(): StringJS
get "minVersionSatisfied"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionPackMetadata$$Type = ($FusionPackMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionPackMetadata_ = $FusionPackMetadata$$Type;
}}
declare module "com.supermartijn642.core.block.BlockShape$LineConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockShape$LineConsumer {

 "apply"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): void

(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): void
}

export namespace $BlockShape$LineConsumer {
const probejs$$marker: never
}
export class $BlockShape$LineConsumer$$Static implements $BlockShape$LineConsumer {


 "apply"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockShape$LineConsumer$$Type = ((x1: double, y1: double, z1: double, x2: double, y2: double, z2: double) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockShape$LineConsumer_ = $BlockShape$LineConsumer$$Type;
}}
declare module "com.supermartijn642.chunkloaders.ChunkLoaderType" {
import {$ChunkLoaderBlock, $ChunkLoaderBlock$$Type} from "com.supermartijn642.chunkloaders.ChunkLoaderBlock"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ChunkLoaderBlockEntity, $ChunkLoaderBlockEntity$$Type} from "com.supermartijn642.chunkloaders.ChunkLoaderBlockEntity"
import {$BaseBlockEntityType, $BaseBlockEntityType$$Type} from "com.supermartijn642.core.block.BaseBlockEntityType"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockShape, $BlockShape$$Type} from "com.supermartijn642.core.block.BlockShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBlockItem, $BaseBlockItem$$Type} from "com.supermartijn642.core.item.BaseBlockItem"
import {$RegistrationHandler$Helper, $RegistrationHandler$Helper$$Type} from "com.supermartijn642.core.registry.RegistrationHandler$Helper"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChunkLoaderType extends $Enum<($ChunkLoaderType)> {
static readonly "SINGLE": $ChunkLoaderType
static readonly "ULTIMATE": $ChunkLoaderType
static readonly "BASIC": $ChunkLoaderType
static readonly "ADVANCED": $ChunkLoaderType


public "getIndex"(): integer
public "getBlock"(): $ChunkLoaderBlock
public "getShape"(): $BlockShape
public "getItem"(): $BaseBlockItem
public static "values"(): ($ChunkLoaderType)[]
public static "valueOf"(name: StringJS): $ChunkLoaderType
public "getRange"(): integer
public static "byIndex"(index: integer): $ChunkLoaderType
public "getGridSize"(): integer
public "registerBlock"(helper: $RegistrationHandler$Helper$$Type<($Block$$Type)>): void
public "registerItem"(helper: $RegistrationHandler$Helper$$Type<($Item$$Type)>): void
public "getBlockEntityType"(): $BaseBlockEntityType<($ChunkLoaderBlockEntity)>
public "createBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $ChunkLoaderBlockEntity
public "getRegistryName"(): StringJS
public "registerBlockEntity"(helper: $RegistrationHandler$Helper$$Type<($BlockEntityType$$Type<(any)>)>): void
public "getFullRotation"(): boolean
public "getEnglishTranslation"(): StringJS
get "index"(): integer
get "block"(): $ChunkLoaderBlock
get "shape"(): $BlockShape
get "item"(): $BaseBlockItem
get "range"(): integer
get "gridSize"(): integer
get "blockEntityType"(): $BaseBlockEntityType<($ChunkLoaderBlockEntity)>
get "registryName"(): StringJS
get "fullRotation"(): boolean
get "englishTranslation"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoaderType$$Type = (("single") | ("basic") | ("advanced") | ("ultimate"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoaderType_ = $ChunkLoaderType$$Type;
}}
declare module "com.supermartijn642.core.render.RenderWorldEvent" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $RenderWorldEvent extends $Event {

constructor(poseStack: $PoseStack$$Type, partialTicks: float)

public "getPoseStack"(): $PoseStack
public "getPartialTicks"(): float
get "poseStack"(): $PoseStack
get "partialTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderWorldEvent$$Type = ($RenderWorldEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderWorldEvent_ = $RenderWorldEvent$$Type;
}}
declare module "com.supermartijn642.fusion.extensions.PackExtension" {
import {$FusionPackMetadata, $FusionPackMetadata$$Type} from "com.supermartijn642.fusion.resources.FusionPackMetadata"

export interface $PackExtension {

 "getFusionMetadata"(): $FusionPackMetadata

(): $FusionPackMetadata$$Type
get "fusionMetadata"(): $FusionPackMetadata
}

export namespace $PackExtension {
const probejs$$marker: never
}
export class $PackExtension$$Static implements $PackExtension {


 "getFusionMetadata"(): $FusionPackMetadata
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackExtension$$Type = (() => $FusionPackMetadata$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackExtension_ = $PackExtension$$Type;
}}
declare module "com.supermartijn642.fusion.api.util.Serializer" {
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $Serializer<T> {

 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(data: T): $JsonObject
}

export namespace $Serializer {
const probejs$$marker: never
}
export class $Serializer$$Static<T> implements $Serializer {


 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(data: T): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$$Type<T> = ($Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer_<T> = $Serializer$$Type<(T)>;
}}
declare module "com.supermartijn642.core.extensions.CoreLibHolderReference" {
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $CoreLibHolderReference {

 "supermartijn642corelibOverride"(key: $ResourceKey$$Type<(any)>, value: any): void

(key: $ResourceKey<(any)>, value: any): void
}

export namespace $CoreLibHolderReference {
const probejs$$marker: never
}
export class $CoreLibHolderReference$$Static implements $CoreLibHolderReference {


 "supermartijn642corelibOverride"(key: $ResourceKey$$Type<(any)>, value: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreLibHolderReference$$Type = ((key: $ResourceKey<(any)>, value: any) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreLibHolderReference_ = $CoreLibHolderReference$$Type;
}}
declare module "com.supermartijn642.core.data.condition.ResourceConditionSerializer" {
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ResourceCondition, $ResourceCondition$$Type} from "com.supermartijn642.core.data.condition.ResourceCondition"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export interface $ResourceConditionSerializer<T extends $ResourceCondition> {

 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(json: $JsonObject$$Type, condition: T): void
}

export namespace $ResourceConditionSerializer {
function createForgeConditionCodec(serializer: $ResourceConditionSerializer$$Type<(any)>): $MapCodec<($ICondition)>
const probejs$$marker: never
}
export class $ResourceConditionSerializer$$Static<T extends $ResourceCondition> implements $ResourceConditionSerializer {


 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(json: $JsonObject$$Type, condition: T): void
static "createForgeConditionCodec"(serializer: $ResourceConditionSerializer$$Type<(any)>): $MapCodec<($ICondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionSerializer$$Type<T> = ($ResourceConditionSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConditionSerializer_<T> = $ResourceConditionSerializer$$Type<(T)>;
}}
declare module "com.supermartijn642.fusion.api.texture.SpriteCreationContext" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"

export interface $SpriteCreationContext {

 "getAtlas"(): $TextureAtlas
 "getAtlasWidth"(): integer
 "getAtlasHeight"(): integer
 "getSpriteWidth"(): integer
 "getTextureBuffers"(): ($NativeImage)[]
 "getSpriteHeight"(): integer
 "getMipmapLevels"(): integer
 "getTextureIdentifier"(): $ResourceLocation
 "getTextureWidth"(): integer
 "getTextureHeight"(): integer
 "createOriginalSprite"(): $TextureAtlasSprite
 "getSpritePositionX"(): integer
 "getSpritePositionY"(): integer
get "atlas"(): $TextureAtlas
get "atlasWidth"(): integer
get "atlasHeight"(): integer
get "spriteWidth"(): integer
get "textureBuffers"(): ($NativeImage)[]
get "spriteHeight"(): integer
get "mipmapLevels"(): integer
get "textureIdentifier"(): $ResourceLocation
get "textureWidth"(): integer
get "textureHeight"(): integer
get "spritePositionX"(): integer
get "spritePositionY"(): integer
}

export namespace $SpriteCreationContext {
const probejs$$marker: never
}
export class $SpriteCreationContext$$Static implements $SpriteCreationContext {


 "getAtlas"(): $TextureAtlas
 "getAtlasWidth"(): integer
 "getAtlasHeight"(): integer
 "getSpriteWidth"(): integer
 "getTextureBuffers"(): ($NativeImage)[]
 "getSpriteHeight"(): integer
 "getMipmapLevels"(): integer
 "getTextureIdentifier"(): $ResourceLocation
 "getTextureWidth"(): integer
 "getTextureHeight"(): integer
 "createOriginalSprite"(): $TextureAtlasSprite
 "getSpritePositionX"(): integer
 "getSpritePositionY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteCreationContext$$Type = ($SpriteCreationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteCreationContext_ = $SpriteCreationContext$$Type;
}}
declare module "com.supermartijn642.core.registry.Registries$Registry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Pair, $Pair$$Type} from "com.supermartijn642.core.util.Pair"

export interface $Registries$Registry<T> {

 "getEntries"(): $Set<($Pair<($ResourceLocation), (T)>)>
 "getIdentifier"(object: T): $ResourceLocation
 "getValue"(identifier: $ResourceLocation$$Type): T
 "register"(identifier: $ResourceLocation$$Type, object: T): void
 "getValueClass"(): $Class<(T)>
 "getValues"(): $Collection<(T)>
 "hasIdentifier"(identifier: $ResourceLocation$$Type): boolean
 "getIdentifiers"(): $Set<($ResourceLocation)>
 "getVanillaRegistry"(): $Registry<(T)>
 "getRegistryIdentifier"(): $ResourceLocation
 "hasVanillaRegistry"(): boolean
get "entries"(): $Set<($Pair<($ResourceLocation), (T)>)>
get "valueClass"(): $Class<(T)>
get "values"(): $Collection<(T)>
get "identifiers"(): $Set<($ResourceLocation)>
get "vanillaRegistry"(): $Registry<(T)>
get "registryIdentifier"(): $ResourceLocation
}

export namespace $Registries$Registry {
const probejs$$marker: never
}
export class $Registries$Registry$$Static<T> implements $Registries$Registry {


 "getEntries"(): $Set<($Pair<($ResourceLocation), (T)>)>
 "getIdentifier"(object: T): $ResourceLocation
 "getValue"(identifier: $ResourceLocation$$Type): T
 "register"(identifier: $ResourceLocation$$Type, object: T): void
 "getValueClass"(): $Class<(T)>
 "getValues"(): $Collection<(T)>
 "hasIdentifier"(identifier: $ResourceLocation$$Type): boolean
 "getIdentifiers"(): $Set<($ResourceLocation)>
 "getVanillaRegistry"(): $Registry<(T)>
 "getRegistryIdentifier"(): $ResourceLocation
 "hasVanillaRegistry"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registries$Registry$$Type<T> = ($Registries$Registry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registries$Registry_<T> = $Registries$Registry$$Type<(T)>;
}}
declare module "com.supermartijn642.chunkloaders.ChunkLoaderBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BaseBlock, $BaseBlock$$Type} from "com.supermartijn642.core.block.BaseBlock"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ChunkLoaderType, $ChunkLoaderType$$Type} from "com.supermartijn642.chunkloaders.ChunkLoaderType"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$EntityHoldingBlock, $EntityHoldingBlock$$Type} from "com.supermartijn642.core.block.EntityHoldingBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockShape, $BlockShape$$Type} from "com.supermartijn642.core.block.BlockShape"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ChunkLoaderBlock extends $BaseBlock implements $EntityHoldingBlock, $SimpleWaterloggedBlock {
static readonly "BASIC_SHAPE": $BlockShape
static readonly "TILE_DATA": $DataComponentType<($CompoundTag)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "ULTIMATE_SHAPE": $BlockShape
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "ADVANCED_SHAPE": $BlockShape
static readonly "SINGLE_SHAPE": $BlockShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(type: $ChunkLoaderType$$Type)

public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "onRemove"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "onBlockStateChange"(level: $LevelReader$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, newState: $BlockState$$Type): void
public "createNewBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, entityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoaderBlock$$Type = ($ChunkLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoaderBlock_ = $ChunkLoaderBlock$$Type;
}}
declare module "com.supermartijn642.fusion.extensions.BlockModelExtension" {
import {$ModelInstance, $ModelInstance$$Type} from "com.supermartijn642.fusion.api.model.ModelInstance"

export interface $BlockModelExtension {

 "getFusionModel"(): $ModelInstance<(any)>
 "setFusionModel"(model: $ModelInstance$$Type<(any)>): void
get "fusionModel"(): $ModelInstance<(any)>
set "fusionModel"(value: $ModelInstance$$Type<(any)>)
}

export namespace $BlockModelExtension {
const probejs$$marker: never
}
export class $BlockModelExtension$$Static implements $BlockModelExtension {


 "getFusionModel"(): $ModelInstance<(any)>
 "setFusionModel"(model: $ModelInstance$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelExtension$$Type = ($BlockModelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelExtension_ = $BlockModelExtension$$Type;
}}
declare module "com.supermartijn642.core.block.BaseBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(tileEntityTypeIn: $BlockEntityType$$Type<(any)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "dataChanged"(): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
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
declare module "com.supermartijn642.rechiseled.ChiselItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$BaseItem, $BaseItem$$Type} from "com.supermartijn642.core.item.BaseItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ChiselItem$ItemHolder, $ChiselItem$ItemHolder$$Type} from "com.supermartijn642.rechiseled.ChiselItem$ItemHolder"

export class $ChiselItem extends $BaseItem {
static readonly "HELD_STACK": $DataComponentType<($ChiselItem$ItemHolder)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getStoredStack"(chisel: $ItemStack$$Type): $ItemStack
public static "setStoredStack"(chisel: $ItemStack$$Type, stack: $ItemStack$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiselItem$$Type = ($ChiselItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiselItem_ = $ChiselItem$$Type;
}}
declare module "com.supermartijn642.fusion.api.util.Pair" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export class $Pair<X, Y> {


public "left"(): X
public "right"(): Y
public "equals"(o: any): boolean
public "hashCode"(): integer
public "apply"(consumer: $BiConsumer$$Type<(X), (Y)>): void
public "map"<R, S>(mapLeft: $Function$$Type<(X), (R)>, mapRight: $Function$$Type<(Y), (S)>): $Pair<(R), (S)>
public static "of"<X, Y>(left: X, right: Y): $Pair<(X), (Y)>
public "flatMap"<S>(mapper: $BiFunction$$Type<(X), (Y), (S)>): S
public "mapLeft"<S>(mapper: $Function$$Type<(X), (S)>): $Pair<(S), (Y)>
public "mapRight"<S>(mapper: $Function$$Type<(Y), (S)>): $Pair<(X), (S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<X, Y> = ($Pair<(X), (Y)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<X, Y> = $Pair$$Type<(X), (Y)>;
}}
declare module "com.supermartijn642.core.block.BaseBlock" {
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockProperties, $BlockProperties$$Type} from "com.supermartijn642.core.block.BlockProperties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BaseBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "TILE_DATA": $DataComponentType<($CompoundTag)>
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

constructor(saveTileData: boolean, properties: $BlockBehaviour$Properties$$Type)
constructor(saveTileData: boolean, properties: $BlockProperties$$Type)

public "asItem"(): $Item
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, information: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "getDescriptionId"(): StringJS
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$$Type = ($BaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlock_ = $BaseBlock$$Type;
}}
declare module "com.supermartijn642.core.item.BaseItem$InteractionFeedback" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BaseItem$InteractionFeedback extends $Enum<($BaseItem$InteractionFeedback)> {
static readonly "SUCCESS": $BaseItem$InteractionFeedback
static readonly "PASS": $BaseItem$InteractionFeedback
static readonly "CONSUME": $BaseItem$InteractionFeedback


public static "values"(): ($BaseItem$InteractionFeedback)[]
public static "valueOf"(name: StringJS): $BaseItem$InteractionFeedback
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $InteractionResult
get "underlying"(): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$InteractionFeedback$$Type = (("pass") | ("consume") | ("success"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem$InteractionFeedback_ = $BaseItem$InteractionFeedback$$Type;
}}
declare module "com.supermartijn642.core.item.BaseBlockItem$InteractionFeedback" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BaseBlockItem$InteractionFeedback extends $Enum<($BaseBlockItem$InteractionFeedback)> {
static readonly "SUCCESS": $BaseBlockItem$InteractionFeedback
static readonly "PASS": $BaseBlockItem$InteractionFeedback
static readonly "CONSUME": $BaseBlockItem$InteractionFeedback


public static "values"(): ($BaseBlockItem$InteractionFeedback)[]
public static "valueOf"(name: StringJS): $BaseBlockItem$InteractionFeedback
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(interactionResult: $InteractionResult$$Type): $BaseBlockItem$InteractionFeedback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$InteractionFeedback$$Type = (("pass") | ("consume") | ("success"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem$InteractionFeedback_ = $BaseBlockItem$InteractionFeedback$$Type;
}}
declare module "com.supermartijn642.rechiseled.create.mechanical_chisel.MechanicalChiselBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ProcessingInventory, $ProcessingInventory$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingInventory"
import {$List, $List$$Type} from "java.util.List"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$KineticBlockEntity, $KineticBlockEntity$$Type} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$$Type} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MechanicalChiselBlockEntity extends $KineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "inventory": $ProcessingInventory
 "preventSpeedUpdate": integer
 "network": long

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type)

public "tick"(): void
public "invalidate"(): void
public "write"(compound: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "start"(inserted: $ItemStack$$Type): void
public "destroy"(): void
public "insertItem"(entity: $ItemEntity$$Type): void
public "addBehaviours"(behaviours: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "tickAudio"(): void
public static "registerCapabilities"(event: $RegisterCapabilitiesEvent$$Type): void
public "getItemMovementVec"(): $Vec3
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "itemMovementVec"(): $Vec3
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MechanicalChiselBlockEntity$$Type = ($MechanicalChiselBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MechanicalChiselBlockEntity_ = $MechanicalChiselBlockEntity$$Type;
}}
declare module "com.supermartijn642.core.gui.BaseContainerType" {
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$$Type} from "net.minecraft.world.inventory.MenuType$MenuSupplier"
import {$LoomMenu, $LoomMenu$$Type} from "net.minecraft.world.inventory.LoomMenu"
import {$BaseContainer, $BaseContainer$$Type} from "com.supermartijn642.core.gui.BaseContainer"
import {$GrindstoneMenu, $GrindstoneMenu$$Type} from "net.minecraft.world.inventory.GrindstoneMenu"
import {$CartographyTableMenu, $CartographyTableMenu$$Type} from "net.minecraft.world.inventory.CartographyTableMenu"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CraftingMenu, $CraftingMenu$$Type} from "net.minecraft.world.inventory.CraftingMenu"
import {$BeaconMenu, $BeaconMenu$$Type} from "net.minecraft.world.inventory.BeaconMenu"
import {$DispenserMenu, $DispenserMenu$$Type} from "net.minecraft.world.inventory.DispenserMenu"
import {$AnvilMenu, $AnvilMenu$$Type} from "net.minecraft.world.inventory.AnvilMenu"
import {$LecternMenu, $LecternMenu$$Type} from "net.minecraft.world.inventory.LecternMenu"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$SmokerMenu, $SmokerMenu$$Type} from "net.minecraft.world.inventory.SmokerMenu"
import {$CrafterMenu, $CrafterMenu$$Type} from "net.minecraft.world.inventory.CrafterMenu"
import {$ChestMenu, $ChestMenu$$Type} from "net.minecraft.world.inventory.ChestMenu"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$IContainerFactory, $IContainerFactory$$Type} from "net.neoforged.neoforge.network.IContainerFactory"
import {$StonecutterMenu, $StonecutterMenu$$Type} from "net.minecraft.world.inventory.StonecutterMenu"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlastFurnaceMenu, $BlastFurnaceMenu$$Type} from "net.minecraft.world.inventory.BlastFurnaceMenu"
import {$ShulkerBoxMenu, $ShulkerBoxMenu$$Type} from "net.minecraft.world.inventory.ShulkerBoxMenu"
import {$SmithingMenu, $SmithingMenu$$Type} from "net.minecraft.world.inventory.SmithingMenu"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$BrewingStandMenu, $BrewingStandMenu$$Type} from "net.minecraft.world.inventory.BrewingStandMenu"
import {$HopperMenu, $HopperMenu$$Type} from "net.minecraft.world.inventory.HopperMenu"
import {$FurnaceMenu, $FurnaceMenu$$Type} from "net.minecraft.world.inventory.FurnaceMenu"
import {$MerchantMenu, $MerchantMenu$$Type} from "net.minecraft.world.inventory.MerchantMenu"

export class $BaseContainerType<T extends $BaseContainer> extends $MenuType<(T)> {
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "CRAFTER_3x3": $MenuType<($CrafterMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
readonly "constructor": $MenuType$MenuSupplier<(T)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>


public static "create"<T extends $BaseContainer>(containerSerializer: $BiConsumer$$Type<(T), ($FriendlyByteBuf)>, containerDeserializer: $BiFunction$$Type<($Player), ($FriendlyByteBuf), (T)>): $BaseContainerType<(T)>
public "writeContainer"(container: T, buffer: $FriendlyByteBuf$$Type): void
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainerType$$Type<T> = ($BaseContainerType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainerType_<T> = $BaseContainerType$$Type<(T)>;
}}
declare module "com.supermartijn642.chunkloaders.capability.ChunkLoadingCapability" {
import {$ServerChunkLoadingCapability, $ServerChunkLoadingCapability$$Type} from "com.supermartijn642.chunkloaders.capability.ServerChunkLoadingCapability"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClientChunkLoadingCapability, $ClientChunkLoadingCapability$$Type} from "com.supermartijn642.chunkloaders.capability.ClientChunkLoadingCapability"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $ChunkLoadingCapability {

constructor(level: $Level$$Type)

public static "get"(level: $Level$$Type): $ChunkLoadingCapability
public "write"(): $CompoundTag
public "read"(compound: $CompoundTag$$Type): void
public "castServer"(): $ServerChunkLoadingCapability
public "castClient"(): $ClientChunkLoadingCapability
public "isChunkLoaded"(chunkPos: $ChunkPos$$Type): boolean
public "isChunkLoadedByPlayer"(player: $UUID$$Type, chunkPos: $ChunkPos$$Type): boolean
public "canPlayerLoadChunk"(player: $UUID$$Type, chunkPos: $ChunkPos$$Type): boolean
public "getChunksLoadedByPlayer"(player: $UUID$$Type): $Set<($ChunkPos)>
public "getActivePlayersLoadingChunk"(chunkPos: $ChunkPos$$Type): $Set<($UUID)>
public "getInactivePlayersLoadingChunk"(chunkPos: $ChunkPos$$Type): $Set<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoadingCapability$$Type = ($ChunkLoadingCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoadingCapability_ = $ChunkLoadingCapability$$Type;
}}
declare module "com.supermartijn642.core.block.BlockProperties" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TriPredicate, $TriPredicate$$Type} from "net.neoforged.neoforge.common.util.TriPredicate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockProperties {

constructor()

public static "create"(): $BlockProperties
public static "copy"(block: $Block$$Type): $BlockProperties
public "sound"(soundTypeIn: $SoundType$$Type): $BlockProperties
public "air"(): $BlockProperties
public "mapColor"(color: $MapColor$$Type): $BlockProperties
public "mapColor"(colorFunction: $Function$$Type<($BlockState), ($MapColor$$Type)>): $BlockProperties
public "destroyTime"(destroyTime: float): $BlockProperties
public "friction"(friction: float): $BlockProperties
public "speedFactor"(factor: float): $BlockProperties
public "dynamicShape"(): $BlockProperties
public "noOcclusion"(): $BlockProperties
public "randomTicks"(): $BlockProperties
public "noCollision"(): $BlockProperties
public "isSuffocating"(isSuffocating: boolean): $BlockProperties
public "isSuffocating"(isSuffocating: $TriPredicate$$Type<($BlockState), ($BlockGetter), ($BlockPos)>): $BlockProperties
public "jumpFactor"(factor: float): $BlockProperties
public "lightLevel"(stateLightFunction: $ToIntFunction$$Type<($BlockState)>): $BlockProperties
public "lightLevel"(light: integer): $BlockProperties
public "noLootTable"(): $BlockProperties
public "lootTable"(lootTable: $ResourceKey$$Type<($LootTable)>): $BlockProperties
public "lootTable"(lootTable: $ResourceLocation$$Type): $BlockProperties
public "lootTableFrom"(block: $Supplier$$Type<($Block$$Type)>): $BlockProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $BlockBehaviour$Properties
public "requiresCorrectTool"(): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: $TriPredicate$$Type<($BlockState), ($BlockGetter), ($BlockPos)>): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: boolean): $BlockProperties
public "explosionResistance"(resistance: float): $BlockProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockProperties$$Type = ($BlockProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockProperties_ = $BlockProperties$$Type;
}}
declare module "com.supermartijn642.core.block.BlockShape" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockShape$LineConsumer, $BlockShape$LineConsumer$$Type} from "com.supermartijn642.core.block.BlockShape$LineConsumer"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockShape$PointConsumer, $BlockShape$PointConsumer$$Type} from "com.supermartijn642.core.block.BlockShape$PointConsumer"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $BlockShape {

constructor(shape: $VoxelShape$$Type)
constructor(shape: $AABB$$Type)
constructor(shapes: $List$$Type<($AABB$$Type)>)

public "rotate"(axis: $Direction$Axis$$Type): $BlockShape
public static "or"(shape: $BlockShape$$Type, ...shapes: ($BlockShape$$Type)[]): $BlockShape
public "flip"(axis: $Direction$Axis$$Type): $BlockShape
public "grow"(amount: double): $BlockShape
public "intersects"(shape: $BlockShape$$Type): boolean
public static "intersects"(shape1: $BlockShape$$Type, shape2: $BlockShape$$Type): boolean
public static "create"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): $BlockShape
public static "create"(box: $AABB$$Type): $BlockShape
public static "create"(box: $VoxelShape$$Type): $BlockShape
public "minX"(): double
public "minY"(): double
public "isEmpty"(): boolean
public "offset"(x: double, y: double, z: double): $BlockShape
public "offset"(pos: $BlockPos$$Type): $BlockShape
public "offset"(direction: $Direction$$Type): $BlockShape
public static "empty"(): $BlockShape
public "maxX"(): double
public "shrink"(amount: double): $BlockShape
public "maxZ"(): double
public "maxY"(): double
public "minZ"(): double
public "getStart"(axis: $Direction$Axis$$Type): double
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $VoxelShape
public "getEnd"(axis: $Direction$Axis$$Type): double
public "toBoxes"(): $List<($AABB)>
public static "fullCube"(): $BlockShape
public "forEachBox"(action: $Consumer$$Type<($AABB)>): void
public "forEachEdge"(action: $BlockShape$LineConsumer$$Type): void
public "forEachCorner"(action: $BlockShape$PointConsumer$$Type): void
public "simplify"(): $AABB
public static "createBlockShape"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): $BlockShape
get "underlying"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockShape$$Type = ($BlockShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockShape_ = $BlockShape$$Type;
}}
declare module "com.supermartijn642.rechiseled.create.mechanical_chisel.MechanicalChiselBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$MechanicalChiselBlockEntity, $MechanicalChiselBlockEntity$$Type} from "com.supermartijn642.rechiseled.create.mechanical_chisel.MechanicalChiselBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$DirectionalAxisKineticBlock, $DirectionalAxisKineticBlock$$Type} from "com.simibubi.create.content.kinetics.base.DirectionalAxisKineticBlock"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $MechanicalChiselBlock extends $DirectionalAxisKineticBlock implements $IBE<($MechanicalChiselBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "AXIS_ALONG_FIRST_COORDINATE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public static "isHorizontal"(state: $BlockState$$Type): boolean
public "getRotatedBlockState"(state: $BlockState$$Type, side: $Direction$$Type): $BlockState
public "hasShaftTowards"(world: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, face: $Direction$$Type): boolean
public "getBlockEntityClass"(): $Class<($MechanicalChiselBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($MechanicalChiselBlockEntity)>
public "getRotationAxis"(state: $BlockState$$Type): $Direction$Axis
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getPistonPushReaction"(state: $BlockState$$Type): $PushReaction
public "updateEntityAfterFallOn"(level: $BlockGetter$$Type, entity: $Entity$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MechanicalChiselBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($MechanicalChiselBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MechanicalChiselBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MechanicalChiselBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($MechanicalChiselBlockEntity)>): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
get "blockEntityClass"(): $Class<($MechanicalChiselBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($MechanicalChiselBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MechanicalChiselBlock$$Type = ($MechanicalChiselBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MechanicalChiselBlock_ = $MechanicalChiselBlock$$Type;
}}
declare module "com.supermartijn642.core.item.BaseBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BaseBlockItem$InteractionFeedback, $BaseBlockItem$InteractionFeedback$$Type} from "com.supermartijn642.core.item.BaseBlockItem$InteractionFeedback"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ItemProperties, $ItemProperties$$Type} from "com.supermartijn642.core.item.ItemProperties"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BaseBlockItem$ItemUseResult, $BaseBlockItem$ItemUseResult$$Type} from "com.supermartijn642.core.item.BaseBlockItem$ItemUseResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $BaseBlockItem extends $BlockItem {
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

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)
constructor(block: $Block$$Type, properties: $ItemProperties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slot: integer, isSelected: boolean): void
public "onItemUseFirst"(stack: $ItemStack$$Type, context: $UseOnContext$$Type): $InteractionResult
public "interact"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type): $BaseBlockItem$ItemUseResult
public "interactWithEntity"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $BaseBlockItem$InteractionFeedback
public "interactWithBlock"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, hitPos: $BlockPos$$Type, hitSide: $Direction$$Type, hitLocation: $Vec3$$Type): $BaseBlockItem$InteractionFeedback
public "interactWithBlockFirst"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, hitPos: $BlockPos$$Type, hitSide: $Direction$$Type, hitLocation: $Vec3$$Type): $BaseBlockItem$InteractionFeedback
public "inventoryUpdate"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, itemSlot: integer, isSelected: boolean): void
public "isInCreativeGroup"(tab: $CreativeModeTab$$Type): boolean
public "interactLivingEntity"(stack: $ItemStack$$Type, player: $Player$$Type, target: $LivingEntity$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, information: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "initializeClient"(consumer: $Consumer$$Type<($IClientItemExtensions)>): void
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
export type $BaseBlockItem$$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$$Type;
}}
declare module "com.supermartijn642.fusion.entity.model.EntityLayerProperties" {
import {$List, $List$$Type} from "java.util.List"
import {$VanillaModelLayerProperties, $VanillaModelLayerProperties$$Type} from "com.supermartijn642.fusion.entity.VanillaModelLayerProperties"
import {$Triple, $Triple$$Type} from "com.supermartijn642.fusion.util.Triple"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$EntityLayerProperties$ModelOption, $EntityLayerProperties$ModelOption$$Type} from "com.supermartijn642.fusion.entity.model.EntityLayerProperties$ModelOption"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelLayerLocation, $ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$Pair, $Pair$$Type} from "com.supermartijn642.fusion.api.util.Pair"
import {$EntityModelPredicate, $EntityModelPredicate$$Type} from "com.supermartijn642.fusion.entity.model.predicates.EntityModelPredicate"

export class $EntityLayerProperties {
static readonly "RANDOM": $RandomSource

constructor(identifier: $ModelLayerLocation$$Type, defaultModel: $List$$Type<($EntityLayerProperties$ModelOption$$Type)>, conditionals: $List$$Type<($Pair$$Type<($EntityModelPredicate$$Type), ($List$$Type<($EntityLayerProperties$ModelOption$$Type)>)>)>)

public "identifier"(): $ModelLayerLocation
public "transformed"(properties: $VanillaModelLayerProperties$$Type): $EntityLayerProperties
public "chooseModel"(entity: $Entity$$Type): $Triple<($ModelPart), ($ResourceLocation), (float)>
public "gatherModels"(output: $Consumer$$Type<($ModelPart)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityLayerProperties$$Type = ($EntityLayerProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityLayerProperties_ = $EntityLayerProperties$$Type;
}}
declare module "com.supermartijn642.chunkloaders.extensions.ChunkLoadersLevel" {
import {$ChunkLoadingCapability, $ChunkLoadingCapability$$Type} from "com.supermartijn642.chunkloaders.capability.ChunkLoadingCapability"

export interface $ChunkLoadersLevel {

 "getChunkLoadingCapability"(): $ChunkLoadingCapability

(): $ChunkLoadingCapability$$Type
get "chunkLoadingCapability"(): $ChunkLoadingCapability
}

export namespace $ChunkLoadersLevel {
const probejs$$marker: never
}
export class $ChunkLoadersLevel$$Static implements $ChunkLoadersLevel {


 "getChunkLoadingCapability"(): $ChunkLoadingCapability
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoadersLevel$$Type = (() => $ChunkLoadingCapability$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoadersLevel_ = $ChunkLoadersLevel$$Type;
}}
declare module "com.supermartijn642.fusion.entity.model.predicates.EntityModelPredicate" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Serializer, $Serializer$$Type} from "com.supermartijn642.fusion.api.util.Serializer"

export interface $EntityModelPredicate {

 "test"(entity: $Entity$$Type): boolean
 "getSerializer"(): $Serializer<($EntityModelPredicate)>
get "serializer"(): $Serializer<($EntityModelPredicate)>
}

export namespace $EntityModelPredicate {
const probejs$$marker: never
}
export class $EntityModelPredicate$$Static implements $EntityModelPredicate {


 "test"(entity: $Entity$$Type): boolean
 "getSerializer"(): $Serializer<($EntityModelPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityModelPredicate$$Type = ($EntityModelPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityModelPredicate_ = $EntityModelPredicate$$Type;
}}
declare module "com.supermartijn642.core.item.ItemRarity" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"

export class $ItemRarity extends $Enum<($ItemRarity)> {
static readonly "RARE": $ItemRarity
static readonly "EPIC": $ItemRarity
static readonly "UNCOMMON": $ItemRarity
static readonly "COMMON": $ItemRarity


public static "values"(): ($ItemRarity)[]
public static "valueOf"(name: StringJS): $ItemRarity
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $Rarity
get "underlying"(): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRarity$$Type = (("common") | ("uncommon") | ("rare") | ("epic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRarity_ = $ItemRarity$$Type;
}}
declare module "com.supermartijn642.fusion.api.model.SpriteIdentifier" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"

export interface $SpriteIdentifier {

 "getAtlas"(): $ResourceLocation
 "getTexture"(): $ResourceLocation
 "toMaterial"(): $Material
get "atlas"(): $ResourceLocation
get "texture"(): $ResourceLocation
}

export namespace $SpriteIdentifier {
function of(atlas: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): $SpriteIdentifier
function of(material: $Material$$Type): $SpriteIdentifier
function missing(): $SpriteIdentifier
const probejs$$marker: never
}
export class $SpriteIdentifier$$Static implements $SpriteIdentifier {


static "of"(atlas: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): $SpriteIdentifier
static "of"(material: $Material$$Type): $SpriteIdentifier
 "getAtlas"(): $ResourceLocation
static "missing"(): $SpriteIdentifier
 "getTexture"(): $ResourceLocation
 "toMaterial"(): $Material
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteIdentifier$$Type = ($SpriteIdentifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteIdentifier_ = $SpriteIdentifier$$Type;
}}
declare module "com.supermartijn642.rechiseled.blocks.RechiseledPillarBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$RechiseledBlock, $RechiseledBlock$$Type} from "com.supermartijn642.rechiseled.blocks.RechiseledBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BlockProperties, $BlockProperties$$Type} from "com.supermartijn642.core.block.BlockProperties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RechiseledPillarBlock extends $RechiseledBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "AXIS_PROPERTY": $EnumProperty<($Direction$Axis)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "TILE_DATA": $DataComponentType<($CompoundTag)>
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
readonly "connecting": boolean
 "hasCollision": boolean

constructor(connecting: boolean, properties: $BlockProperties$$Type)

public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RechiseledPillarBlock$$Type = ($RechiseledPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RechiseledPillarBlock_ = $RechiseledPillarBlock$$Type;
}}
declare module "com.supermartijn642.fusion.entity.model.FusionModelPart" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$VanillaModelLayerProperties, $VanillaModelLayerProperties$$Type} from "com.supermartijn642.fusion.entity.VanillaModelLayerProperties"
import {$EntityLayerProperties, $EntityLayerProperties$$Type} from "com.supermartijn642.fusion.entity.model.EntityLayerProperties"
import {$PartPose, $PartPose$$Type} from "net.minecraft.client.model.geom.PartPose"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ModelPart$Cube, $ModelPart$Cube$$Type} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$SubModelPart, $SubModelPart$$Type} from "com.supermartijn642.fusion.entity.model.SubModelPart"

export class $FusionModelPart extends $SubModelPart {
 "visible": boolean
static readonly "DEFAULT_SCALE": float
 "zRot": float
 "yRot": float
 "xRot": float
 "yScale": float
 "children": $Map<(StringJS), ($ModelPart)>
 "xScale": float
 "cubes": $List<($ModelPart$Cube)>
 "initialPose": $PartPose
 "x": float
 "y": float
 "z": float
 "skipDraw": boolean
 "zScale": float

constructor(layerIndex: integer, original: $ModelPart$$Type)

public "clear"(): void
public "setup"(entity: $Entity$$Type, bufferSource: $MultiBufferSource$$Type): void
public "setProperties"(properties: $EntityLayerProperties$$Type, vanillaProperties: $VanillaModelLayerProperties$$Type): void
public "render"(poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, i: integer, j: integer, k: integer): void
public "renderPart"(part: $SubModelPart$$Type, poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, i: integer, j: integer, k: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionModelPart$$Type = ($FusionModelPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionModelPart_ = $FusionModelPart$$Type;
}}
declare module "com.supermartijn642.rechiseled.blocks.RechiseledBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BaseBlock, $BaseBlock$$Type} from "com.supermartijn642.core.block.BaseBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockProperties, $BlockProperties$$Type} from "com.supermartijn642.core.block.BlockProperties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RechiseledBlock extends $BaseBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "TILE_DATA": $DataComponentType<($CompoundTag)>
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
readonly "connecting": boolean
 "hasCollision": boolean

constructor(connecting: boolean, properties: $BlockProperties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RechiseledBlock$$Type = ($RechiseledBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RechiseledBlock_ = $RechiseledBlock$$Type;
}}
declare module "com.supermartijn642.core.block.BlockShape$PointConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockShape$PointConsumer {

 "apply"(x: double, y: double, z: double): void

(x: double, y: double, z: double): void
}

export namespace $BlockShape$PointConsumer {
const probejs$$marker: never
}
export class $BlockShape$PointConsumer$$Static implements $BlockShape$PointConsumer {


 "apply"(x: double, y: double, z: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockShape$PointConsumer$$Type = ((x: double, y: double, z: double) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockShape$PointConsumer_ = $BlockShape$PointConsumer$$Type;
}}
declare module "com.supermartijn642.fusion.extensions.SpriteContentsExtension" {
import {$TextureType, $TextureType$$Type} from "com.supermartijn642.fusion.api.texture.TextureType"
import {$Pair, $Pair$$Type} from "com.supermartijn642.fusion.api.util.Pair"

export interface $SpriteContentsExtension {

 "fusionTextureMetadata"(): $Pair<($TextureType<(any)>), (any)>
 "clearFusionTextureMetadata"(): void
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
export class $SpriteContentsExtension$$Static implements $SpriteContentsExtension {


 "fusionTextureMetadata"(): $Pair<($TextureType<(any)>), (any)>
 "clearFusionTextureMetadata"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = ($SpriteContentsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtension_ = $SpriteContentsExtension$$Type;
}}
declare module "com.supermartijn642.fusion.entity.model.EntityLayerProperties$ModelOption" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $EntityLayerProperties$ModelOption {

constructor(model: $ModelPart$$Type, isVanillaModel: boolean, textures: $List$$Type<($ResourceLocation$$Type)>, weight: double, scaling: float)

public "model"(): $ModelPart
public "weight"(): double
public "textures"(): $List<($ResourceLocation)>
public "scaling"(): float
public "isVanillaModel"(): boolean
get "vanillaModel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityLayerProperties$ModelOption$$Type = ($EntityLayerProperties$ModelOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityLayerProperties$ModelOption_ = $EntityLayerProperties$ModelOption$$Type;
}}
declare module "com.supermartijn642.core.item.CreativeItemGroup" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$List, $List$$Type} from "java.util.List"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$$Type} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export class $CreativeItemGroup extends $CreativeModeTab {
readonly "tabsAfter": $List<($ResourceLocation)>
readonly "tabsBefore": $List<($ResourceLocation)>
 "displayItemsGenerator": $CreativeModeTab$DisplayItemsGenerator
 "displayItems": $Collection<($ItemStack)>


public static "create"(modid: StringJS, icon: $ItemLike$$Type): $CreativeItemGroup
public static "create"(modid: StringJS, icon: $Supplier$$Type<($ItemStack$$Type)>): $CreativeItemGroup
public static "create"(modid: StringJS, name: StringJS, icon: $ItemLike$$Type): $CreativeItemGroup
public static "create"(modid: StringJS, name: StringJS, icon: $Supplier$$Type<($ItemStack$$Type)>): $CreativeItemGroup
public "filler"(filler: $Consumer$$Type<($Consumer<($ItemStack)>)>): $CreativeItemGroup
public "sorter"(sorter: $Comparator$$Type<($ItemStack)>): $CreativeItemGroup
public static "getIngredients"(): $CreativeModeTab
public "buildContents"(parameters: $CreativeModeTab$ItemDisplayParameters$$Type): void
public static "getCombat"(): $CreativeModeTab
public static "getSpawnEggs"(): $CreativeModeTab
public static "getSearch"(): $CreativeModeTab
public static "getBuildingBlocks"(): $CreativeModeTab
public static "getColoredBlocks"(): $CreativeModeTab
public static "getNaturalBlocks"(): $CreativeModeTab
public static "getFunctionalBlocks"(): $CreativeModeTab
public static "getRedstoneBlocks"(): $CreativeModeTab
public static "getToolsAndUtilities"(): $CreativeModeTab
public static "getFoodAndDrinks"(): $CreativeModeTab
public static "getOperatorUtilities"(): $CreativeModeTab
public "sortAlphabetically"(): $CreativeItemGroup
public "getBackgroundTexture"(): $ResourceLocation
public "getDisplayItems"(): $Collection<($ItemStack)>
get "backgroundTexture"(): $ResourceLocation
get "displayItems"(): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeItemGroup$$Type = ($CreativeItemGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeItemGroup_ = $CreativeItemGroup$$Type;
}}
declare module "com.supermartijn642.core.data.tag.CustomTagEntry" {
import {$CustomTagEntrySerializer, $CustomTagEntrySerializer$$Type} from "com.supermartijn642.core.data.tag.CustomTagEntrySerializer"
import {$TagEntry, $TagEntry$$Type} from "net.minecraft.tags.TagEntry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CustomTagEntry$TagEntryResolutionContext, $CustomTagEntry$TagEntryResolutionContext$$Type} from "com.supermartijn642.core.data.tag.CustomTagEntry$TagEntryResolutionContext"

export interface $CustomTagEntry {

 "resolve"<T>(context: $CustomTagEntry$TagEntryResolutionContext$$Type<(T)>): $Collection<(T)>
 "getSerializer"(): $CustomTagEntrySerializer<(any)>
 "getTagDependencies"(): $Collection<($ResourceLocation)>
get "serializer"(): $CustomTagEntrySerializer<(any)>
get "tagDependencies"(): $Collection<($ResourceLocation)>
}

export namespace $CustomTagEntry {
function createVanillaEntry(customEntry: $CustomTagEntry$$Type): $TagEntry
const probejs$$marker: never
}
export class $CustomTagEntry$$Static implements $CustomTagEntry {


 "resolve"<T>(context: $CustomTagEntry$TagEntryResolutionContext$$Type<(T)>): $Collection<(T)>
 "getSerializer"(): $CustomTagEntrySerializer<(any)>
 "getTagDependencies"(): $Collection<($ResourceLocation)>
static "createVanillaEntry"(customEntry: $CustomTagEntry$$Type): $TagEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTagEntry$$Type = ($CustomTagEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTagEntry_ = $CustomTagEntry$$Type;
}}
declare module "com.supermartijn642.fusion.api.model.ModelInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$BlockModel, $BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$ModelType, $ModelType$$Type} from "com.supermartijn642.fusion.api.model.ModelType"
import {$ModelBakingContext, $ModelBakingContext$$Type} from "com.supermartijn642.fusion.api.model.ModelBakingContext"

export interface $ModelInstance<T> {

 "bake"(context: $ModelBakingContext$$Type): $BakedModel
 "getModelData"(): T
 "getModelType"(): $ModelType<(T)>
 "getAsVanillaModel"(): $BlockModel
 "getModelDependencies"(): $Collection<($ResourceLocation)>
 "getParentModels"(): $List<($ResourceLocation)>
get "modelData"(): T
get "modelType"(): $ModelType<(T)>
get "asVanillaModel"(): $BlockModel
get "modelDependencies"(): $Collection<($ResourceLocation)>
get "parentModels"(): $List<($ResourceLocation)>
}

export namespace $ModelInstance {
function of<T>(modelType: $ModelType$$Type<(T)>, modelData: T): $ModelInstance<(T)>
const probejs$$marker: never
}
export class $ModelInstance$$Static<T> implements $ModelInstance {


static "of"<T>(modelType: $ModelType$$Type<(T)>, modelData: T): $ModelInstance<(T)>
 "bake"(context: $ModelBakingContext$$Type): $BakedModel
 "getModelData"(): T
 "getModelType"(): $ModelType<(T)>
 "getAsVanillaModel"(): $BlockModel
 "getModelDependencies"(): $Collection<($ResourceLocation)>
 "getParentModels"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelInstance$$Type<T> = ($ModelInstance<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelInstance_<T> = $ModelInstance$$Type<(T)>;
}}
declare module "com.supermartijn642.rechiseled.blocks.RechiseledGlassPillarBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RechiseledPillarBlock, $RechiseledPillarBlock$$Type} from "com.supermartijn642.rechiseled.blocks.RechiseledPillarBlock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockProperties, $BlockProperties$$Type} from "com.supermartijn642.core.block.BlockProperties"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RechiseledGlassPillarBlock extends $RechiseledPillarBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "AXIS_PROPERTY": $EnumProperty<($Direction$Axis)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "TILE_DATA": $DataComponentType<($CompoundTag)>
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
readonly "connecting": boolean
 "hasCollision": boolean

constructor(connecting: boolean, properties: $BlockProperties$$Type)

public "getVisualShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "skipRendering"(state: $BlockState$$Type, otherState: $BlockState$$Type, side: $Direction$$Type): boolean
public "getShadeBrightness"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "propagatesSkylightDown"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RechiseledGlassPillarBlock$$Type = ($RechiseledGlassPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RechiseledGlassPillarBlock_ = $RechiseledGlassPillarBlock$$Type;
}}
declare module "com.supermartijn642.fusion.util.Triple" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Triple<X, Y, Z> extends $Record {

constructor(left: X, middle: Y, right: Z)

public "left"(): X
public "right"(): Z
public "middle"(): Y
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<X, Y, Z>(left: X, middle: Y, right: Z): $Triple<(X), (Y), (Z)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triple$$Type<X, Y, Z> = ({"left"?: any, "right"?: any, "middle"?: any}) | ([left?: any, right?: any, middle?: any]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Triple_<X, Y, Z> = $Triple$$Type<(X), (Y), (Z)>;
}}
declare module "com.supermartijn642.fusion.extensions.EntityExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$Triple, $Triple$$Type} from "com.supermartijn642.fusion.util.Triple"

export interface $EntityExtension {

 "getFusionModel"(layerIndex: integer): $Triple<($ModelPart), ($ResourceLocation), (float)>
 "setFusionModel"(layerIndex: integer, model: $Triple$$Type<($ModelPart$$Type), ($ResourceLocation$$Type), (float)>): void
 "shouldFusionRecomputeModel"(layerIndex: integer): boolean
 "markFusionRecomputeModels"(): void
}

export namespace $EntityExtension {
const probejs$$marker: never
}
export class $EntityExtension$$Static implements $EntityExtension {


 "getFusionModel"(layerIndex: integer): $Triple<($ModelPart), ($ResourceLocation), (float)>
 "setFusionModel"(layerIndex: integer, model: $Triple$$Type<($ModelPart$$Type), ($ResourceLocation$$Type), (float)>): void
 "shouldFusionRecomputeModel"(layerIndex: integer): boolean
 "markFusionRecomputeModels"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityExtension$$Type = ($EntityExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityExtension_ = $EntityExtension$$Type;
}}
declare module "com.supermartijn642.fusion.api.model.ModelBakingContext" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteIdentifier, $SpriteIdentifier$$Type} from "com.supermartijn642.fusion.api.model.SpriteIdentifier"
import {$ModelInstance, $ModelInstance$$Type} from "com.supermartijn642.fusion.api.model.ModelInstance"
import {$ModelState, $ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$ModelBaker, $ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"

export interface $ModelBakingContext {

 "getModel"(identifier: $ResourceLocation$$Type): $ModelInstance<(any)>
 "getTexture"(atlas: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): $TextureAtlasSprite
 "getTexture"(identifier: $SpriteIdentifier$$Type): $TextureAtlasSprite
 "getModelBaker"(): $ModelBaker
 "getBlockTexture"(texture: $ResourceLocation$$Type): $TextureAtlasSprite
 "getTransformation"(): $ModelState
 "getModelIdentifier"(): $ResourceLocation
get "modelBaker"(): $ModelBaker
get "transformation"(): $ModelState
get "modelIdentifier"(): $ResourceLocation
}

export namespace $ModelBakingContext {
const probejs$$marker: never
}
export class $ModelBakingContext$$Static implements $ModelBakingContext {


 "getModel"(identifier: $ResourceLocation$$Type): $ModelInstance<(any)>
 "getTexture"(atlas: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): $TextureAtlasSprite
 "getTexture"(identifier: $SpriteIdentifier$$Type): $TextureAtlasSprite
 "getModelBaker"(): $ModelBaker
 "getBlockTexture"(texture: $ResourceLocation$$Type): $TextureAtlasSprite
 "getTransformation"(): $ModelState
 "getModelIdentifier"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakingContext$$Type = ($ModelBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakingContext_ = $ModelBakingContext$$Type;
}}
declare module "com.supermartijn642.core.registry.RegistrationHandler" {
import {$CustomTagEntrySerializer, $CustomTagEntrySerializer$$Type} from "com.supermartijn642.core.data.tag.CustomTagEntrySerializer"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"
import {$StatType, $StatType$$Type} from "net.minecraft.stats.StatType"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceConditionSerializer, $ResourceConditionSerializer$$Type} from "com.supermartijn642.core.data.condition.ResourceConditionSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RegistrationHandler$Helper, $RegistrationHandler$Helper$$Type} from "com.supermartijn642.core.registry.RegistrationHandler$Helper"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RegistrationHandler {


public static "get"(modid: StringJS): $RegistrationHandler
public "registerPotion"(identifier: StringJS, potion: $Potion$$Type): void
public "registerPotion"(identifier: StringJS, potion: $Supplier$$Type<($Potion$$Type)>): void
public "registerFluid"(identifier: StringJS, fluid: $Fluid$$Type): void
public "registerFluid"(identifier: StringJS, fluid: $Supplier$$Type<($Fluid$$Type)>): void
public "registerBlock"(identifier: StringJS, block: $Block$$Type): void
public "registerBlock"(identifier: StringJS, block: $Supplier$$Type<($Block$$Type)>): void
public "registerItem"(identifier: StringJS, item: $Item$$Type): void
public "registerItem"(identifier: StringJS, item: $Supplier$$Type<($Item$$Type)>): void
public "registerBlockOverride"(namespace: StringJS, identifier: StringJS, block: $Supplier$$Type<($Block$$Type)>): void
public "registerBlockOverride"(namespace: StringJS, identifier: StringJS, block: $Block$$Type): void
public "registerFluidOverride"(namespace: StringJS, identifier: StringJS, fluid: $Fluid$$Type): void
public "registerFluidOverride"(namespace: StringJS, identifier: StringJS, fluid: $Supplier$$Type<($Fluid$$Type)>): void
public "registerFluidCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($Fluid)>)>): void
public "registerItemOverride"(namespace: StringJS, identifier: StringJS, item: $Item$$Type): void
public "registerItemOverride"(namespace: StringJS, identifier: StringJS, item: $Supplier$$Type<($Item$$Type)>): void
public "registerPotionOverride"(namespace: StringJS, identifier: StringJS, potion: $Potion$$Type): void
public "registerPotionOverride"(namespace: StringJS, identifier: StringJS, potion: $Supplier$$Type<($Potion$$Type)>): void
public "registerPotionCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($Potion)>)>): void
public "registerStatType"(identifier: StringJS, statType: $StatType$$Type<(any)>): void
public "registerStatType"(identifier: StringJS, statType: $Supplier$$Type<($StatType$$Type<(any)>)>): void
public "registerBlockCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($Block)>)>): void
public "registerMobEffect"(identifier: StringJS, effect: $Supplier$$Type<($MobEffect$$Type)>): void
public "registerMobEffect"(identifier: StringJS, effect: $MobEffect$$Type): void
public "registerParticleType"(identifier: StringJS, particleType: $ParticleType$$Type<(any)>): void
public "registerParticleType"(identifier: StringJS, particleType: $Supplier$$Type<($ParticleType$$Type<(any)>)>): void
public "registerAttribute"(identifier: StringJS, attribute: $Attribute$$Type): void
public "registerAttribute"(identifier: StringJS, attribute: $Supplier$$Type<($Attribute$$Type)>): void
public "registerItemCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($Item)>)>): void
public "registerTriggerType"(identifier: StringJS, serializer: $Supplier$$Type<($CriterionTrigger$$Type<(any)>)>): void
public "registerTriggerType"(identifier: StringJS, serializer: $CriterionTrigger$$Type<(any)>): void
public "registerRecipeType"(identifier: StringJS, recipeType: $Supplier$$Type<($RecipeType$$Type<(any)>)>): void
public "registerRecipeType"(identifier: StringJS, recipeType: $RecipeType$$Type<(any)>): void
public "registerEntityType"(identifier: StringJS, entityType: $EntityType$$Type<(any)>): void
public "registerEntityType"(identifier: StringJS, entityType: $Supplier$$Type<($EntityType$$Type<(any)>)>): void
public "registerMenuType"(identifier: StringJS, menuType: $Supplier$$Type<($MenuType$$Type<(any)>)>): void
public "registerMenuType"(identifier: StringJS, menuType: $MenuType$$Type<(any)>): void
public "registerSoundEvent"(identifier: StringJS, sound: $Supplier$$Type<($SoundEvent$$Type)>): void
public "registerSoundEvent"(identifier: StringJS, sound: $SoundEvent$$Type): void
public "registerResourceConditionSerializer"(identifier: StringJS, conditionSerializer: $Supplier$$Type<($ResourceConditionSerializer$$Type<(any)>)>): void
public "registerResourceConditionSerializer"(identifier: StringJS, conditionSerializer: $ResourceConditionSerializer$$Type<(any)>): void
public "registerCustomTagEntrySerializer"(identifier: StringJS, serializer: $CustomTagEntrySerializer$$Type<(any)>): void
public "registerCustomTagEntrySerializer"(identifier: StringJS, serializer: $Supplier$$Type<($CustomTagEntrySerializer$$Type<(any)>)>): void
public "registerBlockEntityTypeCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($BlockEntityType<(any)>)>)>): void
public "registerConditionSerializerOverride"(namespace: StringJS, identifier: StringJS, conditionSerializer: $Supplier$$Type<($MapCodec$$Type<($ICondition$$Type)>)>): void
public "registerConditionSerializerOverride"(namespace: StringJS, identifier: StringJS, conditionSerializer: $MapCodec$$Type<($ICondition$$Type)>): void
public "registerConditionSerializerCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($MapCodec<($ICondition)>)>)>): void
public "registerBlockEntityTypeOverride"(namespace: StringJS, identifier: StringJS, blockEntityType: $BlockEntityType$$Type<(any)>): void
public "registerBlockEntityTypeOverride"(namespace: StringJS, identifier: StringJS, blockEntityType: $Supplier$$Type<($BlockEntityType$$Type<(any)>)>): void
public "registerRecipeSerializerOverride"(namespace: StringJS, identifier: StringJS, recipeSerializer: $Supplier$$Type<($RecipeSerializer$$Type<(any)>)>): void
public "registerRecipeSerializerOverride"(namespace: StringJS, identifier: StringJS, recipeSerializer: $RecipeSerializer$$Type<(any)>): void
public "registerRecipeSerializerCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($RecipeSerializer<(any)>)>)>): void
public "registerDataComponentTypeOverride"(namespace: StringJS, identifier: StringJS, serializer: $DataComponentType$$Type<(any)>): void
public "registerDataComponentTypeOverride"(namespace: StringJS, identifier: StringJS, serializer: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): void
public "registerDataComponentTypeCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($DataComponentType<(any)>)>)>): void
public "registerResourceConditionSerializerOverride"(namespace: StringJS, identifier: StringJS, conditionSerializer: $ResourceConditionSerializer$$Type<(any)>): void
public "registerResourceConditionSerializerOverride"(namespace: StringJS, identifier: StringJS, conditionSerializer: $Supplier$$Type<($ResourceConditionSerializer$$Type<(any)>)>): void
public "registerResourceConditionSerializerCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($ResourceConditionSerializer<(any)>)>)>): void
public "registerCustomTagEntrySerializerOverride"(namespace: StringJS, identifier: StringJS, serializer: $CustomTagEntrySerializer$$Type<(any)>): void
public "registerCustomTagEntrySerializerOverride"(namespace: StringJS, identifier: StringJS, serializer: $Supplier$$Type<($CustomTagEntrySerializer$$Type<(any)>)>): void
public "registerCustomTagEntrySerializerCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($CustomTagEntrySerializer<(any)>)>)>): void
public "registerConditionSerializer"(identifier: StringJS, conditionSerializer: $MapCodec$$Type<($ICondition$$Type)>): void
public "registerConditionSerializer"(identifier: StringJS, conditionSerializer: $Supplier$$Type<($MapCodec$$Type<($ICondition$$Type)>)>): void
public "registerMobEffectOverride"(namespace: StringJS, identifier: StringJS, effect: $Supplier$$Type<($MobEffect$$Type)>): void
public "registerMobEffectOverride"(namespace: StringJS, identifier: StringJS, effect: $MobEffect$$Type): void
public "registerMobEffectCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($MobEffect)>)>): void
public "registerSoundEventOverride"(namespace: StringJS, identifier: StringJS, sound: $SoundEvent$$Type): void
public "registerSoundEventOverride"(namespace: StringJS, identifier: StringJS, sound: $Supplier$$Type<($SoundEvent$$Type)>): void
public "registerSoundEventCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($SoundEvent)>)>): void
public "registerEntityTypeOverride"(namespace: StringJS, identifier: StringJS, entityType: $Supplier$$Type<($EntityType$$Type<(any)>)>): void
public "registerEntityTypeOverride"(namespace: StringJS, identifier: StringJS, entityType: $EntityType$$Type<(any)>): void
public "registerEntityTypeCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($EntityType<(any)>)>)>): void
public "registerParticleTypeOverride"(namespace: StringJS, identifier: StringJS, particleType: $ParticleType$$Type<(any)>): void
public "registerParticleTypeOverride"(namespace: StringJS, identifier: StringJS, particleType: $Supplier$$Type<($ParticleType$$Type<(any)>)>): void
public "registerParticleTypeCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($ParticleType<(any)>)>)>): void
public "registerMenuTypeOverride"(namespace: StringJS, identifier: StringJS, menuType: $Supplier$$Type<($MenuType$$Type<(any)>)>): void
public "registerMenuTypeOverride"(namespace: StringJS, identifier: StringJS, menuType: $MenuType$$Type<(any)>): void
public "registerMenuTypeCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($MenuType<(any)>)>)>): void
public "registerRecipeTypeOverride"(namespace: StringJS, identifier: StringJS, recipeType: $Supplier$$Type<($RecipeType$$Type<(any)>)>): void
public "registerRecipeTypeOverride"(namespace: StringJS, identifier: StringJS, recipeType: $RecipeType$$Type<(any)>): void
public "registerRecipeTypeCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($RecipeType<(any)>)>)>): void
public "registerAttributeOverride"(namespace: StringJS, identifier: StringJS, attribute: $Attribute$$Type): void
public "registerAttributeOverride"(namespace: StringJS, identifier: StringJS, attribute: $Supplier$$Type<($Attribute$$Type)>): void
public "registerAttributeCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($Attribute)>)>): void
public "registerStatTypeOverride"(namespace: StringJS, identifier: StringJS, statType: $Supplier$$Type<($StatType$$Type<(any)>)>): void
public "registerStatTypeOverride"(namespace: StringJS, identifier: StringJS, statType: $StatType$$Type<(any)>): void
public "registerStatTypeCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($StatType<(any)>)>)>): void
public "registerTriggerTypeOverride"(namespace: StringJS, identifier: StringJS, serializer: $CriterionTrigger$$Type<(any)>): void
public "registerTriggerTypeOverride"(namespace: StringJS, identifier: StringJS, serializer: $Supplier$$Type<($CriterionTrigger$$Type<(any)>)>): void
public "registerTriggerTypeCallback"(callback: $Consumer$$Type<($RegistrationHandler$Helper<($CriterionTrigger<(any)>)>)>): void
public "registerDataComponentType"(identifier: StringJS, serializer: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): void
public "registerDataComponentType"(identifier: StringJS, serializer: $DataComponentType$$Type<(any)>): void
public "registerRecipeSerializer"(identifier: StringJS, recipeSerializer: $RecipeSerializer$$Type<(any)>): void
public "registerRecipeSerializer"(identifier: StringJS, recipeSerializer: $Supplier$$Type<($RecipeSerializer$$Type<(any)>)>): void
public "registerBlockEntityType"(identifier: StringJS, blockEntityType: $BlockEntityType$$Type<(any)>): void
public "registerBlockEntityType"(identifier: StringJS, blockEntityType: $Supplier$$Type<($BlockEntityType$$Type<(any)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrationHandler$$Type = ($RegistrationHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrationHandler_ = $RegistrationHandler$$Type;
}}
declare module "com.supermartijn642.fusion.extensions.BufferSourceExtension" {
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $BufferSourceExtension {

 "fusionGetLastRenderType"(): $RenderType

(): $RenderType$$Type
}

export namespace $BufferSourceExtension {
const probejs$$marker: never
}
export class $BufferSourceExtension$$Static implements $BufferSourceExtension {


 "fusionGetLastRenderType"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferSourceExtension$$Type = (() => $RenderType$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferSourceExtension_ = $BufferSourceExtension$$Type;
}}
declare module "com.supermartijn642.fusion.api.model.ModelType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$BlockModel, $BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ModelBakingContext, $ModelBakingContext$$Type} from "com.supermartijn642.fusion.api.model.ModelBakingContext"
import {$Serializer, $Serializer$$Type} from "com.supermartijn642.fusion.api.util.Serializer"

export interface $ModelType<T> extends $Serializer<(T)> {

 "bake"(context: $ModelBakingContext$$Type, data: T): $BakedModel
 "getAsVanillaModel"(data: T): $BlockModel
 "getModelDependencies"(data: T): $Collection<($ResourceLocation)>
 "getParentModels"(data: T): $List<($ResourceLocation)>
 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(data: T): $JsonObject
}

export namespace $ModelType {
const probejs$$marker: never
}
export class $ModelType$$Static<T> implements $ModelType {


 "bake"(context: $ModelBakingContext$$Type, data: T): $BakedModel
 "getAsVanillaModel"(data: T): $BlockModel
 "getModelDependencies"(data: T): $Collection<($ResourceLocation)>
 "getParentModels"(data: T): $List<($ResourceLocation)>
 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(data: T): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelType$$Type<T> = ($ModelType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelType_<T> = $ModelType$$Type<(T)>;
}}
declare module "com.supermartijn642.core.registry.RegistrationHandler$Helper" {
import {$Registries$Registry, $Registries$Registry$$Type} from "com.supermartijn642.core.registry.Registries$Registry"
import {$RegistrationHandler, $RegistrationHandler$$Type} from "com.supermartijn642.core.registry.RegistrationHandler"

export class $RegistrationHandler$Helper<T> {

constructor(this$0: $RegistrationHandler$$Type, registry: $Registries$Registry$$Type<(T)>)

public "register"<X extends T>(identifier: StringJS, object: X): X
public "registerOverride"<X extends T>(namespace: StringJS, identifier: StringJS, object: X): X
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrationHandler$Helper$$Type<T> = ($RegistrationHandler$Helper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrationHandler$Helper_<T> = $RegistrationHandler$Helper$$Type<(T)>;
}}
declare module "com.supermartijn642.core.data.condition.ResourceConditionContext" {
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"

export class $ResourceConditionContext {


/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $ICondition$IContext
get "underlying"(): $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionContext$$Type = ($ResourceConditionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConditionContext_ = $ResourceConditionContext$$Type;
}}
declare module "com.supermartijn642.core.data.condition.ResourceCondition" {
import {$ResourceConditionContext, $ResourceConditionContext$$Type} from "com.supermartijn642.core.data.condition.ResourceConditionContext"
import {$ResourceConditionSerializer, $ResourceConditionSerializer$$Type} from "com.supermartijn642.core.data.condition.ResourceConditionSerializer"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export interface $ResourceCondition {

 "or"(alternative: $ResourceCondition$$Type): $ResourceCondition
 "negate"(): $ResourceCondition
 "and"(condition: $ResourceCondition$$Type): $ResourceCondition
 "test"(context: $ResourceConditionContext$$Type): boolean
 "getSerializer"(): $ResourceConditionSerializer<(any)>
get "serializer"(): $ResourceConditionSerializer<(any)>
}

export namespace $ResourceCondition {
function createForgeCondition(condition: $ResourceCondition$$Type): $ICondition
const probejs$$marker: never
}
export class $ResourceCondition$$Static implements $ResourceCondition {


 "or"(alternative: $ResourceCondition$$Type): $ResourceCondition
 "negate"(): $ResourceCondition
 "and"(condition: $ResourceCondition$$Type): $ResourceCondition
 "test"(context: $ResourceConditionContext$$Type): boolean
 "getSerializer"(): $ResourceConditionSerializer<(any)>
static "createForgeCondition"(condition: $ResourceCondition$$Type): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceCondition$$Type = ($ResourceCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceCondition_ = $ResourceCondition$$Type;
}}
declare module "com.supermartijn642.fusion.extensions.TextureAtlasSpriteExtension" {
import {$TextureType, $TextureType$$Type} from "com.supermartijn642.fusion.api.texture.TextureType"

export interface $TextureAtlasSpriteExtension {

 "setFusionTextureType"(type: $TextureType$$Type<(any)>): void
 "getFusionTextureType"(): $TextureType<(any)>
set "fusionTextureType"(value: $TextureType$$Type<(any)>)
get "fusionTextureType"(): $TextureType<(any)>
}

export namespace $TextureAtlasSpriteExtension {
const probejs$$marker: never
}
export class $TextureAtlasSpriteExtension$$Static implements $TextureAtlasSpriteExtension {


 "setFusionTextureType"(type: $TextureType$$Type<(any)>): void
 "getFusionTextureType"(): $TextureType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSpriteExtension$$Type = ($TextureAtlasSpriteExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasSpriteExtension_ = $TextureAtlasSpriteExtension$$Type;
}}
