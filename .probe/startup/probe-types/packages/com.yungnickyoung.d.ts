declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.context.StructureContext" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$List, $List$$Type} from "java.util.List"
import {$RandomState, $RandomState$$Type} from "net.minecraft.world.level.levelgen.RandomState"
import {$PieceEntry, $PieceEntry$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.jigsaw.PieceEntry"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StructureTemplateManager, $StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$BiomeSource, $BiomeSource$$Type} from "net.minecraft.world.level.biome.BiomeSource"

export class $StructureContext {


public "depth"(): integer
public "pos"(): $BlockPos
public "random"(): $RandomSource
public "structureTemplateManager"(): $StructureTemplateManager
public "randomState"(): $RandomState
public "rotation"(): $Rotation
public "pieces"(): $List<($PieceEntry)>
public "pieceEntry"(): $PieceEntry
public "pieceMinY"(): integer
public "pieceMaxY"(): integer
public "biomeSource"(): $BiomeSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureContext$$Type = ($StructureContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureContext_ = $StructureContext$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterendisland.world.IEndSpike" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEndSpike {

 "setCrystalYOffsetFromPillarHeight"(arg0: integer): void
 "getCrystalYOffset"(): integer
set "crystalYOffsetFromPillarHeight"(value: integer)
get "crystalYOffset"(): integer
}

export namespace $IEndSpike {
const probejs$$marker: never
}
export class $IEndSpike$$Static implements $IEndSpike {


 "setCrystalYOffsetFromPillarHeight"(arg0: integer): void
 "getCrystalYOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEndSpike$$Type = ($IEndSpike);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEndSpike_ = $IEndSpike$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.ReplaceAquiferOverride" {
import {$AquiferOverride, $AquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$AquiferOverrideType, $AquiferOverrideType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReplaceAquiferOverride extends $AquiferOverride {
static readonly "CODEC": $MapCodec<($ReplaceAquiferOverride)>
static readonly "NONE": $AquiferOverride

constructor(arg0: $BlockState$$Type)

public "type"(): $AquiferOverrideType<(any)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplaceAquiferOverride$$Type = ($ReplaceAquiferOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReplaceAquiferOverride_ = $ReplaceAquiferOverride$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.world.feature.RibbitsVegetationFeatureConfig" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$List, $List$$Type} from "java.util.List"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RibbitsVegetationFeatureConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($RibbitsVegetationFeatureConfig)>

constructor(onSolidStateProvider: $Optional$$Type<($BlockStateProvider$$Type)>, onLiquidStateProvider: $Optional$$Type<($BlockStateProvider$$Type)>, cannotPlaceOn: $List$$Type<($BlockState$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "onSolidStateProvider"(): $Optional<($BlockStateProvider)>
public "onLiquidStateProvider"(): $Optional<($BlockStateProvider)>
public "cannotPlaceOn"(): $List<($BlockState)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbitsVegetationFeatureConfig$$Type = ({"onSolidStateProvider"?: ($BlockStateProvider$$Type)?, "cannotPlaceOn"?: $List$$Type<($BlockState$$Type)>, "onLiquidStateProvider"?: ($BlockStateProvider$$Type)?}) | ([onSolidStateProvider?: ($BlockStateProvider$$Type)?, cannotPlaceOn?: $List$$Type<($BlockState$$Type)>, onLiquidStateProvider?: ($BlockStateProvider$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbitsVegetationFeatureConfig_ = $RibbitsVegetationFeatureConfig$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdeserttemples.world.state.ITempleStateCacheProvider" {
import {$TempleStateCache, $TempleStateCache$$Type} from "com.yungnickyoung.minecraft.betterdeserttemples.world.state.TempleStateCache"

export interface $ITempleStateCacheProvider {

 "getTempleStateCache"(): $TempleStateCache

(): $TempleStateCache$$Type
get "templeStateCache"(): $TempleStateCache
}

export namespace $ITempleStateCacheProvider {
const probejs$$marker: never
}
export class $ITempleStateCacheProvider$$Static implements $ITempleStateCacheProvider {


 "getTempleStateCache"(): $TempleStateCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITempleStateCacheProvider$$Type = (() => $TempleStateCache$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITempleStateCacheProvider_ = $ITempleStateCacheProvider$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation$Padding" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EnhancedTerrainAdaptation$Padding extends $Record {
static readonly "ZERO": $EnhancedTerrainAdaptation$Padding
static readonly "CODEC": $Codec<($EnhancedTerrainAdaptation$Padding)>

constructor(x: integer, top: integer, bottom: integer, z: integer)

public "bottom"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "z"(): integer
public "top"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedTerrainAdaptation$Padding$$Type = ({"top"?: integer, "x"?: integer, "z"?: integer, "bottom"?: integer}) | ([top?: integer, x?: integer, z?: integer, bottom?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnhancedTerrainAdaptation$Padding_ = $EnhancedTerrainAdaptation$Padding$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.item.RibbitSpawnEggItemNeoForge" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DeferredSpawnEggItem, $DeferredSpawnEggItem$$Type} from "net.neoforged.neoforge.common.DeferredSpawnEggItem"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SpawnEggItem, $SpawnEggItem$$Type} from "net.minecraft.world.item.SpawnEggItem"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RibbitProfession, $RibbitProfession$$Type} from "com.yungnickyoung.minecraft.ribbits.data.RibbitProfession"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RibbitEntity, $RibbitEntity$$Type} from "com.yungnickyoung.minecraft.ribbits.entity.RibbitEntity"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RibbitSpawnEggItemNeoForge extends $DeferredSpawnEggItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "BY_ID": $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "defaultType": $EntityType<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EntityType$$Type<($RibbitEntity$$Type)>, arg1: $RibbitProfession$$Type, arg2: integer, arg3: integer, arg4: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getProfession"(): $RibbitProfession
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
get "profession"(): $RibbitProfession
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbitSpawnEggItemNeoForge$$Type = ($RibbitSpawnEggItemNeoForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbitSpawnEggItemNeoForge_ = $RibbitSpawnEggItemNeoForge$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideMaskSupplier" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$AquiferOverrideMask, $AquiferOverrideMask$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideMask"

export interface $AquiferOverrideMaskSupplier {

 "getOrCreateAquiferOverrideMask"(arg0: $Supplier$$Type<($AquiferOverrideMask$$Type)>): $AquiferOverrideMask

(arg0: $Supplier<($AquiferOverrideMask$$Type)>): $AquiferOverrideMask$$Type
}

export namespace $AquiferOverrideMaskSupplier {
const probejs$$marker: never
}
export class $AquiferOverrideMaskSupplier$$Static implements $AquiferOverrideMaskSupplier {


 "getOrCreateAquiferOverrideMask"(arg0: $Supplier$$Type<($AquiferOverrideMask$$Type)>): $AquiferOverrideMask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverrideMaskSupplier$$Type = ((arg0: $Supplier<($AquiferOverrideMask)>) => $AquiferOverrideMask$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AquiferOverrideMaskSupplier_ = $AquiferOverrideMaskSupplier$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.data.RibbitInstrument" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"

export class $RibbitInstrument {

constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: string, arg3: $SoundEvent$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "getId"(): $ResourceLocation
public "getSoundEvent"(): $SoundEvent
public "getAnimationName"(): string
public "getModelId"(): $ResourceLocation
get "id"(): $ResourceLocation
get "soundEvent"(): $SoundEvent
get "animationName"(): string
get "modelId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbitInstrument$$Type = ($RibbitInstrument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbitInstrument_ = $RibbitInstrument$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.interfaces.client.ISoundEngineDuck" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $ISoundEngineDuck {

 "ribbits$stopMaraca"(arg0: $UUID$$Type): void
 "ribbits$stopRibbitsMusic"(arg0: $UUID$$Type): void
}

export namespace $ISoundEngineDuck {
const probejs$$marker: never
}
export class $ISoundEngineDuck$$Static implements $ISoundEngineDuck {


 "ribbits$stopMaraca"(arg0: $UUID$$Type): void
 "ribbits$stopRibbitsMusic"(arg0: $UUID$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoundEngineDuck$$Type = ($ISoundEngineDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoundEngineDuck_ = $ISoundEngineDuck$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$NoneAdaptation, $NoneAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.NoneAdaptation"
import {$EnhancedTerrainAdaptation, $EnhancedTerrainAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$SmallCarvedTopNoBeardAdaptation, $SmallCarvedTopNoBeardAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.SmallCarvedTopNoBeardAdaptation"
import {$LargeCarvedTopNoBeardAdaptation, $LargeCarvedTopNoBeardAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.LargeCarvedTopNoBeardAdaptation"
import {$CustomAdaptation, $CustomAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.CustomAdaptation"

export interface $EnhancedTerrainAdaptationType<C extends $EnhancedTerrainAdaptation> {

 "codec"(): $MapCodec<(C)>

(): $MapCodec$$Type<(C)>
}

export namespace $EnhancedTerrainAdaptationType {
const ADAPTATION_TYPE_CODEC: $Codec<($EnhancedTerrainAdaptationType<(any)>)>
const LARGE_CARVED_TOP_NO_BEARD: $EnhancedTerrainAdaptationType<($LargeCarvedTopNoBeardAdaptation)>
const ADAPTATION_TYPES_BY_NAME: $Map<($ResourceLocation), ($EnhancedTerrainAdaptationType<(any)>)>
const NAME_BY_ADAPTATION_TYPES: $Map<($EnhancedTerrainAdaptationType<(any)>), ($ResourceLocation)>
const CUSTOM: $EnhancedTerrainAdaptationType<($CustomAdaptation)>
const ADAPTATION_CODEC: $Codec<($EnhancedTerrainAdaptation)>
const SMALL_CARVED_TOP_NO_BEARD: $EnhancedTerrainAdaptationType<($SmallCarvedTopNoBeardAdaptation)>
const NONE: $EnhancedTerrainAdaptationType<($NoneAdaptation)>
function register<C extends $EnhancedTerrainAdaptation>(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<(C)>): $EnhancedTerrainAdaptationType<(C)>
const probejs$$marker: never
}
export class $EnhancedTerrainAdaptationType$$Static<C extends $EnhancedTerrainAdaptation> implements $EnhancedTerrainAdaptationType {
static readonly "ADAPTATION_TYPE_CODEC": $Codec<($EnhancedTerrainAdaptationType<(any)>)>
static readonly "LARGE_CARVED_TOP_NO_BEARD": $EnhancedTerrainAdaptationType<($LargeCarvedTopNoBeardAdaptation)>
static readonly "ADAPTATION_TYPES_BY_NAME": $Map<($ResourceLocation), ($EnhancedTerrainAdaptationType<(any)>)>
static readonly "NAME_BY_ADAPTATION_TYPES": $Map<($EnhancedTerrainAdaptationType<(any)>), ($ResourceLocation)>
static readonly "CUSTOM": $EnhancedTerrainAdaptationType<($CustomAdaptation)>
static readonly "ADAPTATION_CODEC": $Codec<($EnhancedTerrainAdaptation)>
static readonly "SMALL_CARVED_TOP_NO_BEARD": $EnhancedTerrainAdaptationType<($SmallCarvedTopNoBeardAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptationType<($NoneAdaptation)>


static "register"<C extends $EnhancedTerrainAdaptation>(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<(C)>): $EnhancedTerrainAdaptationType<(C)>
 "codec"(): $MapCodec<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedTerrainAdaptationType$$Type<C> = (() => $MapCodec$$Type<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnhancedTerrainAdaptationType_<C> = $EnhancedTerrainAdaptationType$$Type<(C)>;
}}
declare module "com.yungnickyoung.minecraft.betteroceanmonuments.mixin.accessor.ProjectileAccessor" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $ProjectileAccessor {

 "getOwnerUUID"(): $UUID

(): $UUID$$Type
get "ownerUUID"(): $UUID
}

export namespace $ProjectileAccessor {
const probejs$$marker: never
}
export class $ProjectileAccessor$$Static implements $ProjectileAccessor {


 "getOwnerUUID"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileAccessor$$Type = (() => $UUID$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileAccessor_ = $ProjectileAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.block.SwampDaisyBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SwampPlantBlock, $SwampPlantBlock$$Type} from "com.yungnickyoung.minecraft.ribbits.block.SwampPlantBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SwampDaisyBlock extends $SwampPlantBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SwampPlantBlock)>
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
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwampDaisyBlock$$Type = ($SwampDaisyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwampDaisyBlock_ = $SwampDaisyBlock$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.block.SwampLanternBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export class $SwampLanternBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "HANGING": $BooleanProperty
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
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $PathComputationType$$Type): boolean
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
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
export type $SwampLanternBlock$$Type = ($SwampLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwampLanternBlock_ = $SwampLanternBlock$$Type;
}}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.BetterMineshaftStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$BetterMineshaftConfiguration, $BetterMineshaftConfiguration$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $BetterMineshaftStructure extends $Structure {
static readonly "CODEC": $MapCodec<($BetterMineshaftStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $BetterMineshaftConfiguration$$Type)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftStructure$$Type = ($BetterMineshaftStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BetterMineshaftStructure_ = $BetterMineshaftStructure$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.entity.RibbitEntity" {
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$GeoEntity, $GeoEntity$$Type} from "software.bernie.geckolib.animatable.GeoEntity"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$MobSpawnType, $MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$Set, $Set$$Type} from "java.util.Set"
import {$RibbitInstrument, $RibbitInstrument$$Type} from "com.yungnickyoung.minecraft.ribbits.data.RibbitInstrument"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
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
import {$RibbitData, $RibbitData$$Type} from "com.yungnickyoung.minecraft.ribbits.data.RibbitData"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Merchant, $Merchant$$Type} from "net.minecraft.world.item.trading.Merchant"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$DifficultyInstance, $DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $RibbitEntity extends $AgeableMob implements $GeoEntity, $Merchant {
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
static readonly "WATER_SPEED_MULTIPLIER": float
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

constructor(arg0: $EntityType$$Type<($RibbitEntity$$Type)>, arg1: $Level$$Type)

public "remove"(arg0: $Entity$RemovalReason$$Type): void
public "tick"(): void
public "addRibbitToPlayingMusic"(arg0: $RibbitEntity$$Type): void
public "removeRibbitFromPlayingMusic"(arg0: $RibbitEntity$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "restock"(): void
public "getRibbitData"(): $RibbitData
public "setInstrument"(arg0: $RibbitInstrument$$Type): void
public "isClientSide"(): boolean
public "getSpeed"(): float
public "isInRain"(): boolean
public "mobInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "getMaxHeadYRot"(): integer
public "getMaxHeadXRot"(): integer
public "finalizeSpawn"(arg0: $ServerLevelAccessor$$Type, arg1: $DifficultyInstance$$Type, arg2: $MobSpawnType$$Type, arg3: $SpawnGroupData$$Type): $SpawnGroupData
public "aiStep"(): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "setTradingPlayer"(arg0: $Player$$Type): void
public "getTradingPlayer"(): $Player
public "showProgressBar"(): boolean
public "notifyTradeUpdated"(arg0: $ItemStack$$Type): void
public "getNotifyTradeSound"(): $SoundEvent
public static "createRibbitAttributes"(): $AttributeSupplier$Builder
public "isUmbrellaFalling"(): boolean
public "setUmbrellaFalling"(arg0: boolean): void
public "getMasterRibbit"(): $RibbitEntity
public "setMasterRibbit"(arg0: $RibbitEntity$$Type): void
public "removeBandMember"(arg0: $RibbitInstrument$$Type): void
public "setRibbitsPlayingMusic"(arg0: $Set$$Type<($RibbitEntity$$Type)>): void
public "getPlayersHearingMusic"(): $Set<($Player)>
public "setPlayersHearingMusic"(arg0: $Set$$Type<($Player$$Type)>): void
public "setTicksPlayingMusic"(arg0: integer): void
public "clearBandMembers"(): void
public "findNewMasterRibbit"(): void
public "getPlayingInstrument"(): boolean
public "getBuffCooldown"(): integer
public "setBuffCooldown"(arg0: integer): void
public "getWaterCropsCooldown"(): integer
public "setWaterCropsCooldown"(arg0: integer): void
public "getHomePosition"(): $BlockPos
public "setPlayingInstrument"(arg0: boolean): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "handleEntityEvent"(arg0: byte): void
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(any)>): void
public "removeWhenFarAway"(arg0: double): boolean
public "getBreedOffspring"(arg0: $ServerLevel$$Type, arg1: $AgeableMob$$Type): $AgeableMob
public "reassessGoals"(): void
public "getBuffing"(): boolean
public "getBandMembers"(): $Set<($RibbitInstrument)>
public "setBandMembers"(arg0: $Set$$Type<($RibbitInstrument$$Type)>): void
public "isMasterRibbit"(): boolean
public "getFishing"(): boolean
public "getWatering"(): boolean
public "isPrideRibbit"(): boolean
public "setWatering"(arg0: boolean): void
public "setFishing"(arg0: boolean): void
public "setBuffing"(arg0: boolean): void
public "isBandFull"(): boolean
public "addBandMember"(arg0: $RibbitInstrument$$Type): void
public "setRibbitData"(arg0: $RibbitData$$Type): void
public "getOffers"(): $MerchantOffers
public "getVillagerXp"(): integer
public "isTrading"(): boolean
public "canRestock"(): boolean
public "shouldRestock"(): boolean
public "overrideOffers"(arg0: $MerchantOffers$$Type): void
public "overrideXp"(arg0: integer): void
public "notifyTrade"(arg0: $MerchantOffer$$Type): void
public "getTicksPlayingMusic"(): integer
public "getRibbitsPlayingMusic"(): $Set<($RibbitEntity)>
public "stopTriggeredAnim"(arg0: string, arg1: string): void
public "getTick"(arg0: any): double
public "triggerAnim"(arg0: string, arg1: string): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "openTradingScreen"(arg0: $Player$$Type, arg1: $Component$$Type, arg2: integer): void
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "getBoneResetTime"(): double
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
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "ribbitData"(): $RibbitData
set "instrument"(value: $RibbitInstrument$$Type)
get "clientSide"(): boolean
get "speed"(): float
get "inRain"(): boolean
get "maxHeadYRot"(): integer
get "maxHeadXRot"(): integer
set "tradingPlayer"(value: $Player$$Type)
get "tradingPlayer"(): $Player
get "notifyTradeSound"(): $SoundEvent
get "umbrellaFalling"(): boolean
set "umbrellaFalling"(value: boolean)
get "masterRibbit"(): $RibbitEntity
set "masterRibbit"(value: $RibbitEntity$$Type)
set "ribbitsPlayingMusic"(value: $Set$$Type<($RibbitEntity$$Type)>)
get "playersHearingMusic"(): $Set<($Player)>
set "playersHearingMusic"(value: $Set$$Type<($Player$$Type)>)
set "ticksPlayingMusic"(value: integer)
get "playingInstrument"(): boolean
get "buffCooldown"(): integer
set "buffCooldown"(value: integer)
get "waterCropsCooldown"(): integer
set "waterCropsCooldown"(value: integer)
get "homePosition"(): $BlockPos
set "playingInstrument"(value: boolean)
get "buffing"(): boolean
get "bandMembers"(): $Set<($RibbitInstrument)>
set "bandMembers"(value: $Set$$Type<($RibbitInstrument$$Type)>)
get "masterRibbit"(): boolean
get "fishing"(): boolean
get "watering"(): boolean
get "prideRibbit"(): boolean
set "watering"(value: boolean)
set "fishing"(value: boolean)
set "buffing"(value: boolean)
get "bandFull"(): boolean
set "ribbitData"(value: $RibbitData$$Type)
get "offers"(): $MerchantOffers
get "villagerXp"(): integer
get "trading"(): boolean
get "ticksPlayingMusic"(): integer
get "ribbitsPlayingMusic"(): $Set<($RibbitEntity)>
get "boneResetTime"(): double
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbitEntity$$Type = ($RibbitEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbitEntity_ = $RibbitEntity$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation$TerrainAction" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EnhancedTerrainAdaptation$TerrainAction extends $Enum<($EnhancedTerrainAdaptation$TerrainAction)> implements $StringRepresentable {
static readonly "CODEC": $Codec<($EnhancedTerrainAdaptation$TerrainAction)>
static readonly "BURY": $EnhancedTerrainAdaptation$TerrainAction
static readonly "NONE": $EnhancedTerrainAdaptation$TerrainAction
static readonly "CARVE": $EnhancedTerrainAdaptation$TerrainAction


public static "values"(): ($EnhancedTerrainAdaptation$TerrainAction)[]
public static "valueOf"(arg0: string): $EnhancedTerrainAdaptation$TerrainAction
public "getSerializedName"(): string
public "getDensityModifier"(): integer
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "densityModifier"(): integer
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedTerrainAdaptation$TerrainAction$$Type = (("carve") | ("bury") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnhancedTerrainAdaptation$TerrainAction_ = $EnhancedTerrainAdaptation$TerrainAction$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.LargeCarvedTopNoBeardAdaptation" {
import {$EnhancedTerrainAdaptationType, $EnhancedTerrainAdaptationType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"
import {$EnhancedTerrainAdaptation, $EnhancedTerrainAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $LargeCarvedTopNoBeardAdaptation extends $EnhancedTerrainAdaptation {
static readonly "CODEC": $MapCodec<($LargeCarvedTopNoBeardAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptation

constructor()

public "type"(): $EnhancedTerrainAdaptationType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCarvedTopNoBeardAdaptation$$Type = ($LargeCarvedTopNoBeardAdaptation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeCarvedTopNoBeardAdaptation_ = $LargeCarvedTopNoBeardAdaptation$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride" {
import {$AquiferOverrideType, $AquiferOverrideType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AquiferOverride {
static readonly "NONE": $AquiferOverride


public "type"(): $AquiferOverrideType<(any)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverride$$Type = ($AquiferOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AquiferOverride_ = $AquiferOverride$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation" {
import {$EnhancedTerrainAdaptation$Padding, $EnhancedTerrainAdaptation$Padding$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation$Padding"
import {$AquiferOverride, $AquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$EnhancedTerrainAdaptation$TerrainAction, $EnhancedTerrainAdaptation$TerrainAction$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation$TerrainAction"
import {$EnhancedTerrainAdaptationType, $EnhancedTerrainAdaptationType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"

export class $EnhancedTerrainAdaptation {
static readonly "NONE": $EnhancedTerrainAdaptation


public "type"(): $EnhancedTerrainAdaptationType<(any)>
public "getPadding"(): $EnhancedTerrainAdaptation$Padding
public "topAction"(): $EnhancedTerrainAdaptation$TerrainAction
public "bottomAction"(): $EnhancedTerrainAdaptation$TerrainAction
public "getKernel"(): (float)[]
public "getKernelSize"(): integer
public "getKernelRadius"(): integer
public "getBottomOffset"(): double
public "getAquiferOverride"(): $AquiferOverride
public "getKernelDistance"(): integer
public "computeDensityFactor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): double
get "padding"(): $EnhancedTerrainAdaptation$Padding
get "kernel"(): (float)[]
get "kernelSize"(): integer
get "kernelRadius"(): integer
get "bottomOffset"(): double
get "aquiferOverride"(): $AquiferOverride
get "kernelDistance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedTerrainAdaptation$$Type = ($EnhancedTerrainAdaptation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnhancedTerrainAdaptation_ = $EnhancedTerrainAdaptation$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdeserttemples.world.state.TempleStateRegion" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $TempleStateRegion {

constructor(arg0: $Path$$Type, arg1: string)

public "reset"(): void
public "isTempleCleared"(arg0: $BlockPos$$Type): boolean
public "setTempleCleared"(arg0: $BlockPos$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempleStateRegion$$Type = ($TempleStateRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempleStateRegion_ = $TempleStateRegion$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.block.GiantLilyPadBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterlilyBlock, $WaterlilyBlock$$Type} from "net.minecraft.world.level.block.WaterlilyBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GiantLilyPadBlock extends $WaterlilyBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WaterlilyBlock)>
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
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GiantLilyPadBlock$$Type = ($GiantLilyPadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GiantLilyPadBlock_ = $GiantLilyPadBlock$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.StructureTemplatePoolAccessor" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructureTemplatePoolAccessor {

 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>

(): $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>
get "rawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
export class $StructureTemplatePoolAccessor$$Static implements $StructureTemplatePoolAccessor {


 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplatePoolAccessor$$Type = (() => $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplatePoolAccessor_ = $StructureTemplatePoolAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.block.SwampPlantBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BushBlock, $BushBlock$$Type} from "net.minecraft.world.level.block.BushBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SwampPlantBlock extends $BushBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SwampPlantBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $ResourceKey$$Type<($PlacedFeature)>)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwampPlantBlock$$Type = ($SwampPlantBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwampPlantBlock_ = $SwampPlantBlock$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdeserttemples.mixin.accessor.ChunkGeneratorStructureStateAccessor" {
import {$BiomeSource, $BiomeSource$$Type} from "net.minecraft.world.level.biome.BiomeSource"

export interface $ChunkGeneratorStructureStateAccessor {

 "getBiomeSource"(): $BiomeSource

(): $BiomeSource$$Type
get "biomeSource"(): $BiomeSource
}

export namespace $ChunkGeneratorStructureStateAccessor {
const probejs$$marker: never
}
export class $ChunkGeneratorStructureStateAccessor$$Static implements $ChunkGeneratorStructureStateAccessor {


 "getBiomeSource"(): $BiomeSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkGeneratorStructureStateAccessor$$Type = (() => $BiomeSource$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkGeneratorStructureStateAccessor_ = $ChunkGeneratorStructureStateAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.api.world.randomize.BlockStateRandomizer" {
import {$BlockStateRandomizer$Entry, $BlockStateRandomizer$Entry$$Type} from "com.yungnickyoung.minecraft.yungsapi.api.world.randomize.BlockStateRandomizer$Entry"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$StructureContext, $StructureContext$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.context.StructureContext"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Random, $Random$$Type} from "java.util.Random"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateRandomizer {
static readonly "CODEC": $Codec<($BlockStateRandomizer)>

constructor(arg0: $BlockState$$Type)
constructor(arg0: $List$$Type<($BlockStateRandomizer$Entry$$Type)>, arg1: $BlockState$$Type)
constructor(arg0: $Map$$Type<($BlockState$$Type), (float)>, arg1: $BlockState$$Type)
constructor(arg0: $CompoundTag$$Type)
constructor()

public "get"(arg0: $RandomSource$$Type): $BlockState
public "get"(arg0: $RandomSource$$Type, arg1: $StructureContext$$Type): $BlockState
public "get"(arg0: $Random$$Type): $BlockState
public static "from"(...arg0: ($BlockState$$Type)[]): $BlockStateRandomizer
public "getEntries"(): $List<($BlockStateRandomizer$Entry)>
public "saveTag"(): $CompoundTag
public "addBlock"(arg0: $BlockState$$Type, arg1: float): $BlockStateRandomizer
public "setDefaultBlockState"(arg0: $BlockState$$Type): void
public "getEntriesAsMap"(): $Map<($BlockState), (float)>
public "getDefaultBlockState"(): $BlockState
get "entries"(): $List<($BlockStateRandomizer$Entry)>
set "defaultBlockState"(value: $BlockState$$Type)
get "entriesAsMap"(): $Map<($BlockState), (float)>
get "defaultBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRandomizer$$Type = ($BlockStateRandomizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateRandomizer_ = $BlockStateRandomizer$$Type;
}}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftBlockstateRandomizers" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockStateRandomizer, $BlockStateRandomizer$$Type} from "com.yungnickyoung.minecraft.yungsapi.api.world.randomize.BlockStateRandomizer"

export class $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers {
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration$MineshaftBlockstateRandomizers)>
 "floorRandomizer": $BlockStateRandomizer
 "brickRandomizer": $BlockStateRandomizer
 "mainRandomizer": $BlockStateRandomizer
 "legRandomizer": $BlockStateRandomizer

constructor(arg0: $BlockStateRandomizer$$Type, arg1: $BlockStateRandomizer$$Type, arg2: $BlockStateRandomizer$$Type, arg3: $BlockStateRandomizer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers$$Type = ($BetterMineshaftConfiguration$MineshaftBlockstateRandomizers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers_ = $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideMask" {
import {$AquiferOverride, $AquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AquiferOverrideMask {

constructor(arg0: integer, arg1: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer): boolean
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "getAquiferOverride"(): $AquiferOverride
public "setAquiferOverride"(arg0: $AquiferOverride$$Type): void
public "getBlockStateForPos"(arg0: integer, arg1: integer, arg2: integer, arg3: $BlockState$$Type): $BlockState
get "aquiferOverride"(): $AquiferOverride
set "aquiferOverride"(value: $AquiferOverride$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverrideMask$$Type = ($AquiferOverrideMask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AquiferOverrideMask_ = $AquiferOverrideMask$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.block.ToadstoolBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SwampPlantBlock, $SwampPlantBlock$$Type} from "com.yungnickyoung.minecraft.ribbits.block.SwampPlantBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ToadstoolBlock extends $SwampPlantBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SwampPlantBlock)>
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
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToadstoolBlock$$Type = ($ToadstoolBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToadstoolBlock_ = $ToadstoolBlock$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.mixins.client.accessor.ClientLevelAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelEntityGetter, $LevelEntityGetter$$Type} from "net.minecraft.world.level.entity.LevelEntityGetter"

export interface $ClientLevelAccessor {

 "callGetEntities"(): $LevelEntityGetter<($Entity)>

(): $LevelEntityGetter$$Type<($Entity$$Type)>
}

export namespace $ClientLevelAccessor {
const probejs$$marker: never
}
export class $ClientLevelAccessor$$Static implements $ClientLevelAccessor {


 "callGetEntities"(): $LevelEntityGetter<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelAccessor$$Type = (() => $LevelEntityGetter$$Type<($Entity$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelAccessor_ = $ClientLevelAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdeserttemples.entity.IPharaohData" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export interface $IPharaohData {

 "setOriginalSpawnPos"(arg0: $Vec3$$Type): void
 "getOriginalSpawnPos"(): $Vec3
set "originalSpawnPos"(value: $Vec3$$Type)
get "originalSpawnPos"(): $Vec3
}

export namespace $IPharaohData {
const probejs$$marker: never
}
export class $IPharaohData$$Static implements $IPharaohData {


 "setOriginalSpawnPos"(arg0: $Vec3$$Type): void
 "getOriginalSpawnPos"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPharaohData$$Type = ($IPharaohData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPharaohData_ = $IPharaohData$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.data.RibbitUmbrellaType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $RibbitUmbrellaType {

constructor(arg0: $ResourceLocation$$Type, arg1: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "getId"(): $ResourceLocation
public "getModelLocationSuffix"(): string
get "id"(): $ResourceLocation
get "modelLocationSuffix"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbitUmbrellaType$$Type = ($RibbitUmbrellaType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbitUmbrellaType_ = $RibbitUmbrellaType$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdeserttemples.mixin.accessor.StructureProcessorAccessor" {
import {$StructureProcessorType, $StructureProcessorType$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

export interface $StructureProcessorAccessor {

 "callGetType"(): $StructureProcessorType<(any)>

(): $StructureProcessorType$$Type<(any)>
}

export namespace $StructureProcessorAccessor {
const probejs$$marker: never
}
export class $StructureProcessorAccessor$$Static implements $StructureProcessorAccessor {


 "callGetType"(): $StructureProcessorType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureProcessorAccessor$$Type = (() => $StructureProcessorType$$Type<(any)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureProcessorAccessor_ = $StructureProcessorAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.block.GiantLilyPadBlockNeoForge" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$GiantLilyPadBlock, $GiantLilyPadBlock$$Type} from "com.yungnickyoung.minecraft.ribbits.block.GiantLilyPadBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$WaterlilyBlock, $WaterlilyBlock$$Type} from "net.minecraft.world.level.block.WaterlilyBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GiantLilyPadBlockNeoForge extends $GiantLilyPadBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WaterlilyBlock)>
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
export type $GiantLilyPadBlockNeoForge$$Type = ($GiantLilyPadBlockNeoForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GiantLilyPadBlockNeoForge_ = $GiantLilyPadBlockNeoForge$$Type;
}}
declare module "com.yungnickyoung.minecraft.bettermineshafts.mixin.BlockBehaviourAccessor" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourAccessor {

 "callCanSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean

(arg0: $BlockState, arg1: $LevelReader, arg2: $BlockPos): boolean
}

export namespace $BlockBehaviourAccessor {
const probejs$$marker: never
}
export class $BlockBehaviourAccessor$$Static implements $BlockBehaviourAccessor {


 "callCanSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourAccessor$$Type = ((arg0: $BlockState, arg1: $LevelReader, arg2: $BlockPos) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBehaviourAccessor_ = $BlockBehaviourAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.YungJigsawStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$DimensionPadding, $DimensionPadding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.DimensionPadding"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$EnhancedTerrainAdaptation, $EnhancedTerrainAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $YungJigsawStructure extends $Structure {
static readonly "CODEC": $MapCodec<($YungJigsawStructure)>
readonly "maxY": $Optional<(integer)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "maxDepth": integer
readonly "zOffsetInChunk": $IntProvider
readonly "xOffsetInChunk": $IntProvider
readonly "useExpansionHack": boolean
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "minY": $Optional<(integer)>
readonly "enhancedTerrainAdaptation": $EnhancedTerrainAdaptation
static readonly "MAX_TOTAL_STRUCTURE_RADIUS": integer
readonly "maxDistanceFromCenter": integer

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: $Optional$$Type<($ResourceLocation$$Type)>, arg3: integer, arg4: $HeightProvider$$Type, arg5: $IntProvider$$Type, arg6: $IntProvider$$Type, arg7: boolean, arg8: $Optional$$Type<($Heightmap$Types$$Type)>, arg9: integer, arg10: $Optional$$Type<(integer)>, arg11: $Optional$$Type<(integer)>, arg12: $EnhancedTerrainAdaptation$$Type, arg13: $DimensionPadding$$Type, arg14: $LiquidSettings$$Type)

public "type"(): $StructureType<(any)>
public "adjustBoundingBox"(arg0: $BoundingBox$$Type): $BoundingBox
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YungJigsawStructure$$Type = ($YungJigsawStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YungJigsawStructure_ = $YungJigsawStructure$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType" {
import {$SolidifyAquiferOverride, $SolidifyAquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.SolidifyAquiferOverride"
import {$AquiferOverride, $AquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$NoneAquiferOverride, $NoneAquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.NoneAquiferOverride"
import {$ReplaceAquiferOverride, $ReplaceAquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.ReplaceAquiferOverride"

export interface $AquiferOverrideType<C extends $AquiferOverride> {

 "codec"(): $MapCodec<(C)>

(): $MapCodec$$Type<(C)>
}

export namespace $AquiferOverrideType {
const AQUIFER_OVERRIDE_NAME_BY_TYPE: $Map<($AquiferOverrideType<(any)>), ($ResourceLocation)>
const SOLIDIFY: $AquiferOverrideType<($SolidifyAquiferOverride)>
const AQUIFER_OVERRIDE_TYPE_BY_NAME: $Map<($ResourceLocation), ($AquiferOverrideType<(any)>)>
const AQUIFER_OVERRIDE_CODEC: $Codec<($AquiferOverride)>
const NONE: $AquiferOverrideType<($NoneAquiferOverride)>
const REPLACE: $AquiferOverrideType<($ReplaceAquiferOverride)>
const AQUIFER_OVERRIDE_TYPE_CODEC: $Codec<($AquiferOverrideType<(any)>)>
function register<C extends $AquiferOverride>(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<(C)>): $AquiferOverrideType<(C)>
const probejs$$marker: never
}
export class $AquiferOverrideType$$Static<C extends $AquiferOverride> implements $AquiferOverrideType {
static readonly "AQUIFER_OVERRIDE_NAME_BY_TYPE": $Map<($AquiferOverrideType<(any)>), ($ResourceLocation)>
static readonly "SOLIDIFY": $AquiferOverrideType<($SolidifyAquiferOverride)>
static readonly "AQUIFER_OVERRIDE_TYPE_BY_NAME": $Map<($ResourceLocation), ($AquiferOverrideType<(any)>)>
static readonly "AQUIFER_OVERRIDE_CODEC": $Codec<($AquiferOverride)>
static readonly "NONE": $AquiferOverrideType<($NoneAquiferOverride)>
static readonly "REPLACE": $AquiferOverrideType<($ReplaceAquiferOverride)>
static readonly "AQUIFER_OVERRIDE_TYPE_CODEC": $Codec<($AquiferOverrideType<(any)>)>


static "register"<C extends $AquiferOverride>(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<(C)>): $AquiferOverrideType<(C)>
 "codec"(): $MapCodec<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverrideType$$Type<C> = (() => $MapCodec$$Type<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AquiferOverrideType_<C> = $AquiferOverrideType$$Type<(C)>;
}}
declare module "com.yungnickyoung.minecraft.ribbits.data.RibbitProfession" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $RibbitProfession {

constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "getId"(): $ResourceLocation
public "getModelLocation"(): $ResourceLocation
get "id"(): $ResourceLocation
get "modelLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbitProfession$$Type = ($RibbitProfession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbitProfession_ = $RibbitProfession$$Type;
}}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$LegVariant" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $BetterMineshaftConfiguration$LegVariant extends $Enum<($BetterMineshaftConfiguration$LegVariant)> implements $StringRepresentable {
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration$LegVariant)>
static readonly "EDGE": $BetterMineshaftConfiguration$LegVariant
static readonly "INNER": $BetterMineshaftConfiguration$LegVariant


public "getName"(): string
public static "values"(): ($BetterMineshaftConfiguration$LegVariant)[]
public static "valueOf"(arg0: string): $BetterMineshaftConfiguration$LegVariant
public static "byId"(arg0: integer): $BetterMineshaftConfiguration$LegVariant
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "name"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$LegVariant$$Type = (("edge") | ("inner"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BetterMineshaftConfiguration$LegVariant_ = $BetterMineshaftConfiguration$LegVariant$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdeserttemples.world.state.TempleStateCache" {
import {$TempleStateRegion, $TempleStateRegion$$Type} from "com.yungnickyoung.minecraft.betterdeserttemples.world.state.TempleStateRegion"
import {$ConcurrentHashMap, $ConcurrentHashMap$$Type} from "java.util.concurrent.ConcurrentHashMap"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $TempleStateCache {
 "templeStateRegionMap": $ConcurrentHashMap<(string), ($TempleStateRegion)>

constructor(arg0: $Path$$Type)

public "isTempleCleared"(arg0: $BlockPos$$Type): boolean
public "setTempleCleared"(arg0: $BlockPos$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempleStateCache$$Type = ($TempleStateCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempleStateCache_ = $TempleStateCache$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.FeaturePoolElementAccessor" {
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $FeaturePoolElementAccessor {

 "getFeature"(): $Holder<($PlacedFeature)>

(): $Holder$$Type<($PlacedFeature$$Type)>
get "feature"(): $Holder<($PlacedFeature)>
}

export namespace $FeaturePoolElementAccessor {
const probejs$$marker: never
}
export class $FeaturePoolElementAccessor$$Static implements $FeaturePoolElementAccessor {


 "getFeature"(): $Holder<($PlacedFeature)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturePoolElementAccessor$$Type = (() => $Holder$$Type<($PlacedFeature$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeaturePoolElementAccessor_ = $FeaturePoolElementAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterendisland.world.IBetterDragonFight" {
import {$DragonRespawnStage, $DragonRespawnStage$$Type} from "com.yungnickyoung.minecraft.betterendisland.world.DragonRespawnStage"

export interface $IBetterDragonFight {

 "reset"(arg0: boolean): void
 "setIsFirstExitPortalSpawn"(arg0: boolean): void
 "setHasDragonEverSpawned"(arg0: boolean): void
 "setNumTimesDragonKilled"(arg0: integer): void
 "getNumTimesDragonKilled"(): integer
 "tickBellSound"(): void
 "doInitialDragonSpawn"(): void
 "getDragonRespawnStage"(): $DragonRespawnStage
 "isFirstExitPortalSpawn"(): boolean
 "hasDragonEverSpawned"(): boolean
 "advanceRespawnStage"(arg0: $DragonRespawnStage$$Type): void
 "setDragonRespawnStage"(arg0: $DragonRespawnStage$$Type): void
set "numTimesDragonKilled"(value: integer)
get "numTimesDragonKilled"(): integer
get "dragonRespawnStage"(): $DragonRespawnStage
get "firstExitPortalSpawn"(): boolean
set "dragonRespawnStage"(value: $DragonRespawnStage$$Type)
}

export namespace $IBetterDragonFight {
const probejs$$marker: never
}
export class $IBetterDragonFight$$Static implements $IBetterDragonFight {


 "reset"(arg0: boolean): void
 "setIsFirstExitPortalSpawn"(arg0: boolean): void
 "setHasDragonEverSpawned"(arg0: boolean): void
 "setNumTimesDragonKilled"(arg0: integer): void
 "getNumTimesDragonKilled"(): integer
 "tickBellSound"(): void
 "doInitialDragonSpawn"(): void
 "getDragonRespawnStage"(): $DragonRespawnStage
 "isFirstExitPortalSpawn"(): boolean
 "hasDragonEverSpawned"(): boolean
 "advanceRespawnStage"(arg0: $DragonRespawnStage$$Type): void
 "setDragonRespawnStage"(arg0: $DragonRespawnStage$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBetterDragonFight$$Type = ($IBetterDragonFight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBetterDragonFight_ = $IBetterDragonFight$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.item.MaracaItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MaracaItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaracaItem$$Type = ($MaracaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaracaItem_ = $MaracaItem$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.interfaces.client.IChannelDuck" {
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$SoundBuffer, $SoundBuffer$$Type} from "com.mojang.blaze3d.audio.SoundBuffer"

export interface $IChannelDuck {

 "ribbits$attachStaticBufferWithByteOffset"(arg0: $SoundInstance$$Type, arg1: $SoundBuffer$$Type, arg2: integer): void
 "ribbits$attachStaticBufferWithTickOffset"(arg0: $SoundInstance$$Type, arg1: $SoundBuffer$$Type, arg2: integer): void
}

export namespace $IChannelDuck {
const probejs$$marker: never
}
export class $IChannelDuck$$Static implements $IChannelDuck {


 "ribbits$attachStaticBufferWithByteOffset"(arg0: $SoundInstance$$Type, arg1: $SoundBuffer$$Type, arg2: integer): void
 "ribbits$attachStaticBufferWithTickOffset"(arg0: $SoundInstance$$Type, arg1: $SoundBuffer$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChannelDuck$$Type = ($IChannelDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChannelDuck_ = $IChannelDuck$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.ListPoolElementAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $ListPoolElementAccessor {

 "getElements"(): $List<($StructurePoolElement)>

(): $List$$Type<($StructurePoolElement$$Type)>
get "elements"(): $List<($StructurePoolElement)>
}

export namespace $ListPoolElementAccessor {
const probejs$$marker: never
}
export class $ListPoolElementAccessor$$Static implements $ListPoolElementAccessor {


 "getElements"(): $List<($StructurePoolElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListPoolElementAccessor$$Type = (() => $List$$Type<($StructurePoolElement$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListPoolElementAccessor_ = $ListPoolElementAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.SmallCarvedTopNoBeardAdaptation" {
import {$EnhancedTerrainAdaptationType, $EnhancedTerrainAdaptationType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"
import {$EnhancedTerrainAdaptation, $EnhancedTerrainAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SmallCarvedTopNoBeardAdaptation extends $EnhancedTerrainAdaptation {
static readonly "CODEC": $MapCodec<($SmallCarvedTopNoBeardAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptation

constructor()

public "type"(): $EnhancedTerrainAdaptationType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallCarvedTopNoBeardAdaptation$$Type = ($SmallCarvedTopNoBeardAdaptation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallCarvedTopNoBeardAdaptation_ = $SmallCarvedTopNoBeardAdaptation$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.NoneAquiferOverride" {
import {$AquiferOverride, $AquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$AquiferOverrideType, $AquiferOverrideType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NoneAquiferOverride extends $AquiferOverride {
static readonly "CODEC": $MapCodec<($NoneAquiferOverride)>
static readonly "NONE": $AquiferOverride

constructor()

public "type"(): $AquiferOverrideType<(any)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoneAquiferOverride$$Type = ($NoneAquiferOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoneAquiferOverride_ = $NoneAquiferOverride$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterjungletemples.mixin.accessor.ChunkGeneratorStructureStateAccessor" {
import {$BiomeSource, $BiomeSource$$Type} from "net.minecraft.world.level.biome.BiomeSource"

export interface $ChunkGeneratorStructureStateAccessor {

 "getBiomeSource"(): $BiomeSource

(): $BiomeSource$$Type
get "biomeSource"(): $BiomeSource
}

export namespace $ChunkGeneratorStructureStateAccessor {
const probejs$$marker: never
}
export class $ChunkGeneratorStructureStateAccessor$$Static implements $ChunkGeneratorStructureStateAccessor {


 "getBiomeSource"(): $BiomeSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkGeneratorStructureStateAccessor$$Type = (() => $BiomeSource$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkGeneratorStructureStateAccessor_ = $ChunkGeneratorStructureStateAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.jigsaw.PieceEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PoolElementStructurePiece, $PoolElementStructurePiece$$Type} from "net.minecraft.world.level.levelgen.structure.PoolElementStructurePiece"
import {$MutableObject, $MutableObject$$Type} from "org.apache.commons.lang3.mutable.MutableObject"
import {$JigsawJunction, $JigsawJunction$$Type} from "net.minecraft.world.level.levelgen.structure.pools.JigsawJunction"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$PieceContext, $PieceContext$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.jigsaw.assembler.PieceContext"
import {$BoxOctree, $BoxOctree$$Type} from "com.yungnickyoung.minecraft.yungsapi.util.BoxOctree"

export class $PieceEntry {

constructor(arg0: $PoolElementStructurePiece$$Type, arg1: $MutableObject$$Type<($BoxOctree$$Type)>, arg2: $AABB$$Type, arg3: integer, arg4: $PieceEntry$$Type, arg5: $PieceContext$$Type, arg6: $JigsawJunction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getParentEntry"(): $PieceEntry
public "hasChildren"(): boolean
public "getDepth"(): integer
public "getPiece"(): $PoolElementStructurePiece
public "getDeadendPool"(): $Optional<($ResourceLocation)>
public "getBoxOctree"(): $MutableObject<($BoxOctree)>
public "getPieceAabb"(): $AABB
public "setPiece"(arg0: $PoolElementStructurePiece$$Type): void
public "setDelayGeneration"(arg0: boolean): void
public "addChildEntry"(arg0: $PieceEntry$$Type): void
public "getSourcePieceContext"(): $PieceContext
public "getParentJunction"(): $JigsawJunction
public "isDelayGeneration"(): boolean
get "parentEntry"(): $PieceEntry
get "depth"(): integer
get "piece"(): $PoolElementStructurePiece
get "deadendPool"(): $Optional<($ResourceLocation)>
get "boxOctree"(): $MutableObject<($BoxOctree)>
get "pieceAabb"(): $AABB
set "piece"(value: $PoolElementStructurePiece$$Type)
set "delayGeneration"(value: boolean)
get "sourcePieceContext"(): $PieceContext
get "parentJunction"(): $JigsawJunction
get "delayGeneration"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PieceEntry$$Type = ($PieceEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PieceEntry_ = $PieceEntry$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterendisland.world.DragonRespawnStage" {
import {$IBetterDragonFight, $IBetterDragonFight$$Type} from "com.yungnickyoung.minecraft.betterendisland.world.IBetterDragonFight"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$EndCrystal, $EndCrystal$$Type} from "net.minecraft.world.entity.boss.enderdragon.EndCrystal"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EndDragonFight, $EndDragonFight$$Type} from "net.minecraft.world.level.dimension.end.EndDragonFight"

export class $DragonRespawnStage extends $Enum<($DragonRespawnStage)> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<($DragonRespawnStage)>
static readonly "SUMMONING_PILLARS": $DragonRespawnStage
static readonly "START": $DragonRespawnStage
static readonly "END": $DragonRespawnStage
static readonly "PREPARING_TO_SUMMON_PILLARS": $DragonRespawnStage
static readonly "SUMMONING_DRAGON": $DragonRespawnStage


public static "values"(): ($DragonRespawnStage)[]
public static "valueOf"(arg0: string): $DragonRespawnStage
public "onStart"(arg0: $ServerLevel$$Type, arg1: $IBetterDragonFight$$Type): void
public "tick"(arg0: $ServerLevel$$Type, arg1: $EndDragonFight$$Type, arg2: $List$$Type<($EndCrystal$$Type)>, arg3: integer): void
public static "byName"(arg0: string): $DragonRespawnStage
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
export type $DragonRespawnStage$$Type = (("start") | ("preparing_to_summon_pillars") | ("summoning_pillars") | ("summoning_dragon") | ("end"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonRespawnStage_ = $DragonRespawnStage$$Type;
}}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration" {
import {$BetterMineshaftConfiguration$LegVariant, $BetterMineshaftConfiguration$LegVariant$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$LegVariant"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BetterMineshaftConfiguration$MineshaftBlockStates, $BetterMineshaftConfiguration$MineshaftBlockStates$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftBlockStates"
import {$BetterMineshaftConfiguration$MineshaftDecorationChances, $BetterMineshaftConfiguration$MineshaftDecorationChances$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftDecorationChances"
import {$BetterMineshaftConfiguration$MineshaftBlockstateRandomizers, $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftBlockstateRandomizers"

export class $BetterMineshaftConfiguration {
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration)>
 "blockStateRandomizers": $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers
 "decorationChances": $BetterMineshaftConfiguration$MineshaftDecorationChances
 "blockStates": $BetterMineshaftConfiguration$MineshaftBlockStates
 "legVariant": $BetterMineshaftConfiguration$LegVariant
 "replacementRate": float

constructor(arg0: float, arg1: $BetterMineshaftConfiguration$LegVariant$$Type, arg2: $BetterMineshaftConfiguration$MineshaftDecorationChances$$Type, arg3: $BetterMineshaftConfiguration$MineshaftBlockStates$$Type, arg4: $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$$Type = ($BetterMineshaftConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BetterMineshaftConfiguration_ = $BetterMineshaftConfiguration$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.NoneAdaptation" {
import {$EnhancedTerrainAdaptationType, $EnhancedTerrainAdaptationType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"
import {$EnhancedTerrainAdaptation, $EnhancedTerrainAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $NoneAdaptation extends $EnhancedTerrainAdaptation {
static readonly "CODEC": $MapCodec<($NoneAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptation

constructor()

public "type"(): $EnhancedTerrainAdaptationType<(any)>
public "computeDensityFactor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoneAdaptation$$Type = ($NoneAdaptation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoneAdaptation_ = $NoneAdaptation$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.SinglePoolElementAccessor" {
import {$StructureTemplateManager, $StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"

export interface $SinglePoolElementAccessor {

 "callGetTemplate"(arg0: $StructureTemplateManager$$Type): $StructureTemplate

(arg0: $StructureTemplateManager): $StructureTemplate$$Type
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
export class $SinglePoolElementAccessor$$Static implements $SinglePoolElementAccessor {


 "callGetTemplate"(arg0: $StructureTemplateManager$$Type): $StructureTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePoolElementAccessor$$Type = ((arg0: $StructureTemplateManager) => $StructureTemplate$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SinglePoolElementAccessor_ = $SinglePoolElementAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.api.world.randomize.BlockStateRandomizer$Entry" {
import {$StructureCondition, $StructureCondition$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.condition.StructureCondition"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureContext, $StructureContext$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.context.StructureContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateRandomizer$Entry {
 "blockState": $BlockState
 "condition": $Optional<($StructureCondition)>
static "CODEC": $Codec<($BlockStateRandomizer$Entry)>
 "probability": float

constructor(arg0: $BlockState$$Type, arg1: float)
constructor(arg0: $BlockState$$Type, arg1: float, arg2: $Optional$$Type<($StructureCondition$$Type)>)

public "equals"(arg0: any): boolean
public "passesCondition"(arg0: $StructureContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRandomizer$Entry$$Type = ($BlockStateRandomizer$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateRandomizer$Entry_ = $BlockStateRandomizer$Entry$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdungeons.world.structure.SmallNetherDungeonStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$DimensionPadding, $DimensionPadding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.DimensionPadding"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $SmallNetherDungeonStructure extends $Structure {
static readonly "CODEC": $MapCodec<($SmallNetherDungeonStructure)>
readonly "maxY": $Optional<(integer)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "maxDepth": integer
readonly "zOffsetInChunk": $IntProvider
readonly "xOffsetInChunk": $IntProvider
readonly "useExpansionHack": boolean
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "minY": $Optional<(integer)>
static readonly "MAX_TOTAL_STRUCTURE_RADIUS": integer
readonly "maxDistanceFromCenter": integer

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: $Optional$$Type<($ResourceLocation$$Type)>, arg3: integer, arg4: $HeightProvider$$Type, arg5: $IntProvider$$Type, arg6: $IntProvider$$Type, arg7: boolean, arg8: $Optional$$Type<($Heightmap$Types$$Type)>, arg9: integer, arg10: $Optional$$Type<(integer)>, arg11: $Optional$$Type<(integer)>, arg12: $DimensionPadding$$Type, arg13: $LiquidSettings$$Type)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallNetherDungeonStructure$$Type = ($SmallNetherDungeonStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallNetherDungeonStructure_ = $SmallNetherDungeonStructure$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.block.UmbrellaLeafBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SwampPlantBlock, $SwampPlantBlock$$Type} from "com.yungnickyoung.minecraft.ribbits.block.SwampPlantBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UmbrellaLeafBlock extends $SwampPlantBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SwampPlantBlock)>
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
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UmbrellaLeafBlock$$Type = ($UmbrellaLeafBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UmbrellaLeafBlock_ = $UmbrellaLeafBlock$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.CustomAdaptation" {
import {$EnhancedTerrainAdaptationType, $EnhancedTerrainAdaptationType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"
import {$EnhancedTerrainAdaptation, $EnhancedTerrainAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CustomAdaptation extends $EnhancedTerrainAdaptation {
static readonly "CODEC": $MapCodec<($CustomAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptation


public "type"(): $EnhancedTerrainAdaptationType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomAdaptation$$Type = ($CustomAdaptation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomAdaptation_ = $CustomAdaptation$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.PotionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PotionAccessor {

 "getName"(): string
 "setName"(arg0: string): void
get "name"(): string
set "name"(value: string)
}

export namespace $PotionAccessor {
const probejs$$marker: never
}
export class $PotionAccessor$$Static implements $PotionAccessor {


 "getName"(): string
 "setName"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionAccessor$$Type = ($PotionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionAccessor_ = $PotionAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.bettermineshafts.mixin.BoundingBoxAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoundingBoxAccessor {

 "setMinX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
set "minX"(value: integer)
set "minZ"(value: integer)
set "maxX"(value: integer)
set "maxY"(value: integer)
set "maxZ"(value: integer)
set "minY"(value: integer)
}

export namespace $BoundingBoxAccessor {
const probejs$$marker: never
}
export class $BoundingBoxAccessor$$Static implements $BoundingBoxAccessor {


 "setMinX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxAccessor$$Type = ($BoundingBoxAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundingBoxAccessor_ = $BoundingBoxAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdungeons.world.structure.spider_dungeon.SpiderDungeonStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $SpiderDungeonStructure extends $Structure {
static readonly "CODEC": $MapCodec<($SpiderDungeonStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $HeightProvider$$Type)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiderDungeonStructure$$Type = ($SpiderDungeonStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiderDungeonStructure_ = $SpiderDungeonStructure$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.mixins.accessor.DoorBlockAccessor" {
import {$DoorBlock, $DoorBlock$$Type} from "net.minecraft.world.level.block.DoorBlock"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export interface $DoorBlockAccessor {

}

export namespace $DoorBlockAccessor {
function createDoorBlock(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type): $DoorBlock
const probejs$$marker: never
}
export class $DoorBlockAccessor$$Static implements $DoorBlockAccessor {


static "createDoorBlock"(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type): $DoorBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorBlockAccessor$$Type = ($DoorBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoorBlockAccessor_ = $DoorBlockAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.condition.StructureCondition" {
import {$StructureContext, $StructureContext$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.context.StructureContext"
import {$StructureConditionType, $StructureConditionType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.condition.StructureConditionType"

export class $StructureCondition {
static readonly "ALWAYS_TRUE": $StructureCondition

constructor()

public "type"(): $StructureConditionType<(any)>
public "passes"(arg0: $StructureContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureCondition$$Type = ($StructureCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureCondition_ = $StructureCondition$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdeserttemples.mixin.accessor.BoundingBoxAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoundingBoxAccessor {

 "setMinX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
set "minX"(value: integer)
set "minZ"(value: integer)
set "maxX"(value: integer)
set "maxY"(value: integer)
set "maxZ"(value: integer)
set "minY"(value: integer)
}

export namespace $BoundingBoxAccessor {
const probejs$$marker: never
}
export class $BoundingBoxAccessor$$Static implements $BoundingBoxAccessor {


 "setMinX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxAccessor$$Type = ($BoundingBoxAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundingBoxAccessor_ = $BoundingBoxAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterdungeons.mixin.accessor.BoundingBoxAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoundingBoxAccessor {

 "setMinX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
set "minX"(value: integer)
set "minZ"(value: integer)
set "maxX"(value: integer)
set "maxY"(value: integer)
set "maxZ"(value: integer)
set "minY"(value: integer)
}

export namespace $BoundingBoxAccessor {
const probejs$$marker: never
}
export class $BoundingBoxAccessor$$Static implements $BoundingBoxAccessor {


 "setMinX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxAccessor$$Type = ($BoundingBoxAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundingBoxAccessor_ = $BoundingBoxAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.mixins.client.accessor.SoundBufferAccessor" {
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"

export interface $SoundBufferAccessor {

 "callGetAlBuffer"(): $OptionalInt

(): $OptionalInt$$Type
}

export namespace $SoundBufferAccessor {
const probejs$$marker: never
}
export class $SoundBufferAccessor$$Static implements $SoundBufferAccessor {


 "callGetAlBuffer"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundBufferAccessor$$Type = (() => $OptionalInt$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundBufferAccessor_ = $SoundBufferAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.betterendisland.mixin.accessor.EndDragonFightAccessor" {
import {$ServerBossEvent, $ServerBossEvent$$Type} from "net.minecraft.server.level.ServerBossEvent"
import {$EnderDragon, $EnderDragon$$Type} from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ObjectArrayList, $ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"

export interface $EndDragonFightAccessor {

 "setDragonKilled"(arg0: boolean): void
 "getPortalLocation"(): $BlockPos
 "getDragonEvent"(): $ServerBossEvent
 "getGateways"(): $ObjectArrayList<(integer)>
 "setPortalLocation"(arg0: $BlockPos$$Type): void
 "invokeCreateNewDragon"(): $EnderDragon
 "getPreviouslyKilled"(): boolean
set "dragonKilled"(value: boolean)
get "portalLocation"(): $BlockPos
get "dragonEvent"(): $ServerBossEvent
get "gateways"(): $ObjectArrayList<(integer)>
set "portalLocation"(value: $BlockPos$$Type)
get "previouslyKilled"(): boolean
}

export namespace $EndDragonFightAccessor {
const probejs$$marker: never
}
export class $EndDragonFightAccessor$$Static implements $EndDragonFightAccessor {


 "setDragonKilled"(arg0: boolean): void
 "getPortalLocation"(): $BlockPos
 "getDragonEvent"(): $ServerBossEvent
 "getGateways"(): $ObjectArrayList<(integer)>
 "setPortalLocation"(arg0: $BlockPos$$Type): void
 "invokeCreateNewDragon"(): $EnderDragon
 "getPreviouslyKilled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndDragonFightAccessor$$Type = ($EndDragonFightAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndDragonFightAccessor_ = $EndDragonFightAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftDecorationChances" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $BetterMineshaftConfiguration$MineshaftDecorationChances {
 "vineChance": float
 "mushroomChance": float
 "dripstoneDecorations": boolean
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration$MineshaftDecorationChances)>
 "cactusChance": float
 "gravelPileChance": float
 "deadBushChance": float
 "lushDecorations": boolean
 "snowChance": float

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: boolean, arg7: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$MineshaftDecorationChances$$Type = ($BetterMineshaftConfiguration$MineshaftDecorationChances);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BetterMineshaftConfiguration$MineshaftDecorationChances_ = $BetterMineshaftConfiguration$MineshaftDecorationChances$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.BoundingBoxAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoundingBoxAccessor {

 "setMinX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
set "minX"(value: integer)
set "minZ"(value: integer)
set "maxX"(value: integer)
set "maxY"(value: integer)
set "maxZ"(value: integer)
set "minY"(value: integer)
}

export namespace $BoundingBoxAccessor {
const probejs$$marker: never
}
export class $BoundingBoxAccessor$$Static implements $BoundingBoxAccessor {


 "setMinX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxAccessor$$Type = ($BoundingBoxAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundingBoxAccessor_ = $BoundingBoxAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftBlockStates" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BetterMineshaftConfiguration$MineshaftBlockStates {
 "mainBlockState": $BlockState
 "stoneWallBlockState": $BlockState
 "smallLegBlockState": $BlockState
 "slabBlockState": $BlockState
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration$MineshaftBlockStates)>
 "trapdoorBlockState": $BlockState
 "gravelBlockState": $BlockState
 "supportBlockState": $BlockState
 "stoneSlabBlockState": $BlockState

constructor(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: $BlockState$$Type, arg6: $BlockState$$Type, arg7: $BlockState$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$MineshaftBlockStates$$Type = ($BetterMineshaftConfiguration$MineshaftBlockStates);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BetterMineshaftConfiguration$MineshaftBlockStates_ = $BetterMineshaftConfiguration$MineshaftBlockStates$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.data.RibbitData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RibbitProfession, $RibbitProfession$$Type} from "com.yungnickyoung.minecraft.ribbits.data.RibbitProfession"
import {$RibbitUmbrellaType, $RibbitUmbrellaType$$Type} from "com.yungnickyoung.minecraft.ribbits.data.RibbitUmbrellaType"
import {$RibbitInstrument, $RibbitInstrument$$Type} from "com.yungnickyoung.minecraft.ribbits.data.RibbitInstrument"

export class $RibbitData {
static readonly "CODEC": $Codec<($RibbitData)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($RibbitData)>

constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $RibbitProfession$$Type, arg1: $RibbitUmbrellaType$$Type, arg2: $RibbitInstrument$$Type)

public "write"(arg0: $FriendlyByteBuf$$Type): void
public "getProfession"(): $RibbitProfession
public "setInstrument"(arg0: $RibbitInstrument$$Type): void
public "getInstrument"(): $RibbitInstrument
public "getUmbrellaType"(): $RibbitUmbrellaType
public "setProfession"(arg0: $RibbitProfession$$Type): void
get "profession"(): $RibbitProfession
set "instrument"(value: $RibbitInstrument$$Type)
get "instrument"(): $RibbitInstrument
get "umbrellaType"(): $RibbitUmbrellaType
set "profession"(value: $RibbitProfession$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbitData$$Type = ($RibbitData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbitData_ = $RibbitData$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.SolidifyAquiferOverride" {
import {$AquiferOverride, $AquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$AquiferOverrideType, $AquiferOverrideType$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SolidifyAquiferOverride extends $AquiferOverride {
static readonly "CODEC": $MapCodec<($SolidifyAquiferOverride)>
static readonly "NONE": $AquiferOverride

constructor()

public "type"(): $AquiferOverrideType<(any)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
public "setSolidBlockState"(arg0: $BlockState$$Type): void
set "solidBlockState"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidifyAquiferOverride$$Type = ($SolidifyAquiferOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolidifyAquiferOverride_ = $SolidifyAquiferOverride$$Type;
}}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.NoiseChunkAccessor" {
import {$NoiseSettings, $NoiseSettings$$Type} from "net.minecraft.world.level.levelgen.NoiseSettings"

export interface $NoiseChunkAccessor {

 "getNoiseSettings"(): $NoiseSettings

(): $NoiseSettings$$Type
get "noiseSettings"(): $NoiseSettings
}

export namespace $NoiseChunkAccessor {
const probejs$$marker: never
}
export class $NoiseChunkAccessor$$Static implements $NoiseChunkAccessor {


 "getNoiseSettings"(): $NoiseSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseChunkAccessor$$Type = (() => $NoiseSettings$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoiseChunkAccessor_ = $NoiseChunkAccessor$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.world.feature.RibbitsVegetationBlockFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
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
import {$RibbitsVegetationFeatureConfig, $RibbitsVegetationFeatureConfig$$Type} from "com.yungnickyoung.minecraft.ribbits.world.feature.RibbitsVegetationFeatureConfig"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $RibbitsVegetationBlockFeature extends $Feature<($RibbitsVegetationFeatureConfig)> {
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

constructor()

public "place"(arg0: $FeaturePlaceContext$$Type<($RibbitsVegetationFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbitsVegetationBlockFeature$$Type = ($RibbitsVegetationBlockFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbitsVegetationBlockFeature_ = $RibbitsVegetationBlockFeature$$Type;
}}
declare module "com.yungnickyoung.minecraft.ribbits.mixin.interfaces.client.ISoundManagerDuck" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $ISoundManagerDuck {

 "ribbits$stopMaraca"(arg0: $UUID$$Type): void
 "ribbits$stopRibbitsMusic"(arg0: $UUID$$Type): void
}

export namespace $ISoundManagerDuck {
const probejs$$marker: never
}
export class $ISoundManagerDuck$$Static implements $ISoundManagerDuck {


 "ribbits$stopMaraca"(arg0: $UUID$$Type): void
 "ribbits$stopRibbitsMusic"(arg0: $UUID$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoundManagerDuck$$Type = ($ISoundManagerDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoundManagerDuck_ = $ISoundManagerDuck$$Type;
}}
