declare module "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh" {
import {$QuadEmitter, $QuadEmitter$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Mesh {

 "forEach"(arg0: $Consumer$$Type<($QuadView)>): void
 "outputTo"(arg0: $QuadEmitter$$Type): void

(arg0: $Consumer<($QuadView)>): void
}

export namespace $Mesh {
const probejs$$marker: never
}
export class $Mesh$$Static implements $Mesh {


 "forEach"(arg0: $Consumer$$Type<($QuadView)>): void
 "outputTo"(arg0: $QuadEmitter$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$$Type = ((arg0: $Consumer<($QuadView)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mesh_ = $Mesh$$Type;
}}
declare module "net.fabricmc.fabric.api.blockview.v2.RenderDataBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderDataBlockEntity {

 "getRenderData"(): any
get "renderData"(): any
}

export namespace $RenderDataBlockEntity {
const probejs$$marker: never
}
export class $RenderDataBlockEntity$$Static implements $RenderDataBlockEntity {


 "getRenderData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataBlockEntity$$Type = ($RenderDataBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderDataBlockEntity_ = $RenderDataBlockEntity$$Type;
}}
declare module "net.fabricmc.fabric.mixin.renderer.client.BakedModelMixin" {
import {$RenderContext, $RenderContext$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$FabricBakedModel, $FabricBakedModel$$Type} from "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BakedModelMixin extends $FabricBakedModel {

 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
get "vanillaAdapter"(): boolean
}

export namespace $BakedModelMixin {
const probejs$$marker: never
}
export class $BakedModelMixin$$Static implements $BakedModelMixin {


 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelMixin$$Type = ($BakedModelMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedModelMixin_ = $BakedModelMixin$$Type;
}}
declare module "net.fabricmc.fabric.mixin.blockview.BlockViewMixin" {
import {$FabricBlockView, $FabricBlockView$$Type} from "net.fabricmc.fabric.api.blockview.v2.FabricBlockView"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $BlockViewMixin extends $FabricBlockView {

 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
}

export namespace $BlockViewMixin {
const probejs$$marker: never
}
export class $BlockViewMixin$$Static implements $BlockViewMixin {


 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockViewMixin$$Type = ($BlockViewMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockViewMixin_ = $BlockViewMixin$$Type;
}}
declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView" {
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver, $ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ClipBlockStateContext, $ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer, $LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

/**
 * 
 * @deprecated
 */
export interface $RenderAttachedBlockView extends $BlockAndTintGetter {

/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getHeight"(): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getMinBuildHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "height"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
get "minBuildHeight"(): integer
}

export namespace $RenderAttachedBlockView {
function traverseBlocks<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
const probejs$$marker: never
}
export class $RenderAttachedBlockView$$Static implements $RenderAttachedBlockView {


/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getHeight"(): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getMinBuildHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachedBlockView$$Type = ($RenderAttachedBlockView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderAttachedBlockView_ = $RenderAttachedBlockView$$Type;
}}
declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteFinder, $SpriteFinder$$Type} from "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

export class $SpriteFinderImpl implements $SpriteFinder {

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, arg1: $TextureAtlas$$Type)

public static "get"(arg0: $TextureAtlas$$Type): $SpriteFinderImpl
public "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
public "find"(arg0: float, arg1: float): $TextureAtlasSprite
/**
 * 
 * @deprecated
 */
public "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$$Type = ($SpriteFinderImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinderImpl_ = $SpriteFinderImpl$$Type;
}}
declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachmentBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * 
 * @deprecated
 */
export interface $RenderAttachmentBlockEntity {

/**
 * 
 * @deprecated
 */
 "getRenderAttachmentData"(): any

(): any
get "renderAttachmentData"(): any
}

export namespace $RenderAttachmentBlockEntity {
const probejs$$marker: never
}
export class $RenderAttachmentBlockEntity$$Static implements $RenderAttachmentBlockEntity {


/**
 * 
 * @deprecated
 */
 "getRenderAttachmentData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachmentBlockEntity$$Type = (() => any);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderAttachmentBlockEntity_ = $RenderAttachmentBlockEntity$$Type;
}}
declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl$SpriteFinderAccess" {
import {$SpriteFinderImpl, $SpriteFinderImpl$$Type} from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl"

export interface $SpriteFinderImpl$SpriteFinderAccess {

 "fabric_spriteFinder"(): $SpriteFinderImpl

(): $SpriteFinderImpl$$Type
}

export namespace $SpriteFinderImpl$SpriteFinderAccess {
const probejs$$marker: never
}
export class $SpriteFinderImpl$SpriteFinderAccess$$Static implements $SpriteFinderImpl$SpriteFinderAccess {


 "fabric_spriteFinder"(): $SpriteFinderImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$$Type = (() => $SpriteFinderImpl$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinderImpl$SpriteFinderAccess_ = $SpriteFinderImpl$SpriteFinderAccess$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ShadeMode, $ShadeMode$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode"
import {$MaterialView, $MaterialView$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.MaterialView"
import {$TriState, $TriState$$Type} from "net.fabricmc.fabric.api.util.TriState"
import {$BlendMode, $BlendMode$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.BlendMode"

export interface $RenderMaterial extends $MaterialView {

/**
 * 
 * @deprecated
 */
 "spriteDepth"(): integer
 "glint"(): $TriState
 "emissive"(): boolean
 "blendMode"(): $BlendMode
 "disableDiffuse"(): boolean
 "shadeMode"(): $ShadeMode
 "disableColorIndex"(): boolean
 "ambientOcclusion"(): $TriState
}

export namespace $RenderMaterial {
const MATERIAL_STANDARD: $ResourceLocation
const probejs$$marker: never
}
export class $RenderMaterial$$Static implements $RenderMaterial {
static readonly "MATERIAL_STANDARD": $ResourceLocation


/**
 * 
 * @deprecated
 */
 "spriteDepth"(): integer
 "glint"(): $TriState
 "emissive"(): boolean
 "blendMode"(): $BlendMode
 "disableDiffuse"(): boolean
 "shadeMode"(): $ShadeMode
 "disableColorIndex"(): boolean
 "ambientOcclusion"(): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderMaterial$$Type = ($RenderMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderMaterial_ = $RenderMaterial$$Type;
}}
declare module "net.fabricmc.fabric.api.util.BooleanFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanFunction<R> {

 "apply"(arg0: boolean): R

(arg0: boolean): R
}

export namespace $BooleanFunction {
const probejs$$marker: never
}
export class $BooleanFunction$$Static<R> implements $BooleanFunction {


 "apply"(arg0: boolean): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanFunction$$Type<R> = ((arg0: boolean) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanFunction_<R> = $BooleanFunction$$Type<(R)>;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Vector2fc, $Vector2fc$$Type} from "org.joml.Vector2fc"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $MutableQuadView extends $QuadView {

 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "tag"(): integer
 "color"(arg0: integer): integer
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "cullFace"(): $Direction
 "normalZ"(arg0: integer): float
 "lightFace"(): $Direction
 "colorIndex"(): integer
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "faceNormal"(): $Vector3f
 "hasNormal"(arg0: integer): boolean
 "lightmap"(arg0: integer): integer
 "material"(): $RenderMaterial
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
}

export namespace $MutableQuadView {
const BAKE_LOCK_UV: integer
const BAKE_NORMALIZED: integer
const BAKE_FLIP_V: integer
const BAKE_ROTATE_90: integer
const BAKE_FLIP_U: integer
const BAKE_ROTATE_NONE: integer
const BAKE_ROTATE_180: integer
const BAKE_ROTATE_270: integer
const probejs$$marker: never
}
export class $MutableQuadView$$Static implements $MutableQuadView {
static readonly "BAKE_LOCK_UV": integer
static readonly "BAKE_NORMALIZED": integer
static readonly "BAKE_FLIP_V": integer
static readonly "BAKE_ROTATE_90": integer
static readonly "BAKE_FLIP_U": integer
static readonly "BAKE_ROTATE_NONE": integer
static readonly "BAKE_ROTATE_180": integer
static readonly "BAKE_ROTATE_270": integer


 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "tag"(): integer
 "color"(arg0: integer): integer
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "cullFace"(): $Direction
 "normalZ"(arg0: integer): float
 "lightFace"(): $Direction
 "colorIndex"(): integer
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "faceNormal"(): $Vector3f
 "hasNormal"(arg0: integer): boolean
 "lightmap"(arg0: integer): integer
 "material"(): $RenderMaterial
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableQuadView$$Type = ($MutableQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableQuadView_ = $MutableQuadView$$Type;
}}
declare module "net.fabricmc.fabric.api.blockview.v2.FabricBlockView" {
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $FabricBlockView {

 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
}

export namespace $FabricBlockView {
const probejs$$marker: never
}
export class $FabricBlockView$$Static implements $FabricBlockView {


 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockView$$Type = ($FabricBlockView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlockView_ = $FabricBlockView$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MutableQuadView, $MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadView {

 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "tag"(): integer
 "color"(arg0: integer): integer
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "cullFace"(): $Direction
 "normalZ"(arg0: integer): float
 "lightFace"(): $Direction
 "colorIndex"(): integer
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "faceNormal"(): $Vector3f
 "hasNormal"(arg0: integer): boolean
 "lightmap"(arg0: integer): integer
 "material"(): $RenderMaterial
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
}

export namespace $QuadView {
const VANILLA_QUAD_STRIDE: integer
const VANILLA_VERTEX_STRIDE: integer
const probejs$$marker: never
}
export class $QuadView$$Static implements $QuadView {
static readonly "VANILLA_QUAD_STRIDE": integer
static readonly "VANILLA_VERTEX_STRIDE": integer


 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "tag"(): integer
 "color"(arg0: integer): integer
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "cullFace"(): $Direction
 "normalZ"(arg0: integer): float
 "lightFace"(): $Direction
 "colorIndex"(): integer
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "faceNormal"(): $Vector3f
 "hasNormal"(arg0: integer): boolean
 "lightmap"(arg0: integer): integer
 "material"(): $RenderMaterial
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadView$$Type = ($QuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuadView_ = $QuadView$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

export interface $SpriteFinder {

/**
 * 
 * @deprecated
 */
 "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
}

export namespace $SpriteFinder {
function get(arg0: $TextureAtlas$$Type): $SpriteFinder
const probejs$$marker: never
}
export class $SpriteFinder$$Static implements $SpriteFinder {


static "get"(arg0: $TextureAtlas$$Type): $SpriteFinder
/**
 * 
 * @deprecated
 */
 "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinder$$Type = ($SpriteFinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinder_ = $SpriteFinder$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ShadeMode extends $Enum<($ShadeMode)> {
static readonly "ENHANCED": $ShadeMode
static readonly "VANILLA": $ShadeMode


public static "values"(): ($ShadeMode)[]
public static "valueOf"(arg0: StringJS): $ShadeMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadeMode$$Type = (("enhanced") | ("vanilla"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShadeMode_ = $ShadeMode$$Type;
}}
declare module "net.fabricmc.fabric.impl.blockview.client.RenderDataMapConsumer" {
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"

export interface $RenderDataMapConsumer {

 "fabric_acceptRenderDataMap"(arg0: $Long2ObjectMap$$Type<(any)>): void

(arg0: $Long2ObjectMap<(any)>): void
}

export namespace $RenderDataMapConsumer {
const probejs$$marker: never
}
export class $RenderDataMapConsumer$$Static implements $RenderDataMapConsumer {


 "fabric_acceptRenderDataMap"(arg0: $Long2ObjectMap$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataMapConsumer$$Type = ((arg0: $Long2ObjectMap<(any)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderDataMapConsumer_ = $RenderDataMapConsumer$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform" {
import {$MutableQuadView, $MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"

export interface $RenderContext$QuadTransform {

 "transform"(arg0: $MutableQuadView$$Type): boolean

(arg0: $MutableQuadView): boolean
}

export namespace $RenderContext$QuadTransform {
const probejs$$marker: never
}
export class $RenderContext$QuadTransform$$Static implements $RenderContext$QuadTransform {


 "transform"(arg0: $MutableQuadView$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$QuadTransform$$Type = ((arg0: $MutableQuadView) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext$QuadTransform_ = $RenderContext$QuadTransform$$Type;
}}
declare module "net.fabricmc.fabric.api.event.Event" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $Event<T> {
static readonly "DEFAULT_PHASE": $ResourceLocation

constructor()

public "invoker"(): T
public "register"(arg0: T): void
public "register"(arg0: $ResourceLocation$$Type, arg1: T): void
public "addPhaseOrdering"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$$Type<T> = ($Event<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_<T> = $Event$$Type<(T)>;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext" {
import {$QuadEmitter, $QuadEmitter$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import {$Mesh, $Mesh$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh"
import {$RenderContext$BakedModelConsumer, $RenderContext$BakedModelConsumer$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer"
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$RenderContext$QuadTransform, $RenderContext$QuadTransform$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $RenderContext {

 "getModelData"(): $ModelData
 "getRenderType"(): $RenderType
 "isFaceCulled"(arg0: $Direction$$Type): boolean
/**
 * 
 * @deprecated
 */
 "meshConsumer"(): $Consumer<($Mesh)>
 "pushTransform"(arg0: $RenderContext$QuadTransform$$Type): void
 "popTransform"(): void
 "hasTransform"(): boolean
 "getEmitter"(): $QuadEmitter
 "itemTransformationMode"(): $ItemDisplayContext
/**
 * 
 * @deprecated
 */
 "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/**
 * 
 * @deprecated
 */
 "fallbackConsumer"(): $Consumer<($BakedModel)>
get "modelData"(): $ModelData
get "renderType"(): $RenderType
get "emitter"(): $QuadEmitter
}

export namespace $RenderContext {
const probejs$$marker: never
}
export class $RenderContext$$Static implements $RenderContext {


 "getModelData"(): $ModelData
 "getRenderType"(): $RenderType
 "isFaceCulled"(arg0: $Direction$$Type): boolean
/**
 * 
 * @deprecated
 */
 "meshConsumer"(): $Consumer<($Mesh)>
 "pushTransform"(arg0: $RenderContext$QuadTransform$$Type): void
 "popTransform"(): void
 "hasTransform"(): boolean
 "getEmitter"(): $QuadEmitter
 "itemTransformationMode"(): $ItemDisplayContext
/**
 * 
 * @deprecated
 */
 "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/**
 * 
 * @deprecated
 */
 "fallbackConsumer"(): $Consumer<($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$$Type = ($RenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext_ = $RenderContext$$Type;
}}
declare module "net.fabricmc.fabric.mixin.rendering.data.WorldViewMixin" {
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver, $ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ClipBlockStateContext, $ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer, $LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$RenderAttachedBlockView, $RenderAttachedBlockView$$Type} from "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $WorldViewMixin extends $RenderAttachedBlockView {

/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getHeight"(): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getMinBuildHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "height"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
get "minBuildHeight"(): integer
}

export namespace $WorldViewMixin {
function traverseBlocks<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
const probejs$$marker: never
}
export class $WorldViewMixin$$Static implements $WorldViewMixin {


/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getHeight"(): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getMinBuildHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldViewMixin$$Type = ($WorldViewMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldViewMixin_ = $WorldViewMixin$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.material.MaterialView" {
import {$ShadeMode, $ShadeMode$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode"
import {$TriState, $TriState$$Type} from "net.fabricmc.fabric.api.util.TriState"
import {$BlendMode, $BlendMode$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.BlendMode"

export interface $MaterialView {

 "glint"(): $TriState
 "emissive"(): boolean
 "blendMode"(): $BlendMode
 "disableDiffuse"(): boolean
 "shadeMode"(): $ShadeMode
 "disableColorIndex"(): boolean
 "ambientOcclusion"(): $TriState
}

export namespace $MaterialView {
const probejs$$marker: never
}
export class $MaterialView$$Static implements $MaterialView {


 "glint"(): $TriState
 "emissive"(): boolean
 "blendMode"(): $BlendMode
 "disableDiffuse"(): boolean
 "shadeMode"(): $ShadeMode
 "disableColorIndex"(): boolean
 "ambientOcclusion"(): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialView$$Type = ($MaterialView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialView_ = $MaterialView$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.material.BlendMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $BlendMode extends $Enum<($BlendMode)> {
static readonly "CUTOUT": $BlendMode
static readonly "TRANSLUCENT": $BlendMode
static readonly "CUTOUT_MIPPED": $BlendMode
static readonly "SOLID": $BlendMode
static readonly "DEFAULT": $BlendMode
readonly "blockRenderLayer": $RenderType


public static "values"(): ($BlendMode)[]
public static "valueOf"(arg0: StringJS): $BlendMode
public static "fromRenderLayer"(arg0: $RenderType$$Type): $BlendMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendMode$$Type = (("default") | ("solid") | ("cutout_mipped") | ("cutout") | ("translucent"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendMode_ = $BlendMode$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer" {
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

/**
 * 
 * @deprecated
 */
export interface $RenderContext$BakedModelConsumer extends $Consumer<($BakedModel)> {

 "accept"(arg0: $BakedModel$$Type): void
 "accept"(arg0: $BakedModel$$Type, arg1: $BlockState$$Type): void
 "accept"(arg0: any): void
 "andThen"(arg0: $Consumer$$Type<($BakedModel)>): $Consumer<($BakedModel)>
}

export namespace $RenderContext$BakedModelConsumer {
const probejs$$marker: never
}
export class $RenderContext$BakedModelConsumer$$Static implements $RenderContext$BakedModelConsumer {


 "accept"(arg0: $BakedModel$$Type): void
 "accept"(arg0: $BakedModel$$Type, arg1: $BlockState$$Type): void
 "accept"(arg0: any): void
 "andThen"(arg0: $Consumer$$Type<($BakedModel)>): $Consumer<($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$BakedModelConsumer$$Type = ($RenderContext$BakedModelConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext$BakedModelConsumer_ = $RenderContext$BakedModelConsumer$$Type;
}}
declare module "net.fabricmc.fabric.api.util.TriState" {
import {$BooleanFunction, $BooleanFunction$$Type} from "net.fabricmc.fabric.api.util.BooleanFunction"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "FALSE": $TriState
static readonly "DEFAULT": $TriState


public "orElseGet"(arg0: $BooleanSupplier$$Type): boolean
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): boolean
public "get"(): boolean
public static "values"(): ($TriState)[]
public static "valueOf"(arg0: StringJS): $TriState
public "map"<T>(arg0: $BooleanFunction$$Type<(T)>): $Optional<(T)>
public static "of"(arg0: boolean): $TriState
public static "of"(arg0: boolean): $TriState
public "orElse"(arg0: boolean): boolean
public "getBoxed"(): boolean
get "boxed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$$Type = (("false") | ("default") | ("true"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriState_ = $TriState$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel" {
import {$RenderContext, $RenderContext$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FabricBakedModel {

 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
get "vanillaAdapter"(): boolean
}

export namespace $FabricBakedModel {
const probejs$$marker: never
}
export class $FabricBakedModel$$Static implements $FabricBakedModel {


 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBakedModel$$Type = ($FabricBakedModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBakedModel_ = $FabricBakedModel$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Vector2fc, $Vector2fc$$Type} from "org.joml.Vector2fc"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$MutableQuadView, $MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadEmitter extends $MutableQuadView {

 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $QuadEmitter
 "color"(arg0: integer, arg1: integer): $QuadEmitter
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $QuadEmitter
 "square"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $QuadEmitter
 "emit"(): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $QuadEmitter
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $QuadEmitter
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $QuadEmitter
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $QuadEmitter
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
 "uvUnitSquare"(): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $QuadEmitter
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $QuadEmitter
 "nominalFace"(arg0: $Direction$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteUnitSquare"(arg0: integer): $QuadEmitter
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "tag"(): integer
 "color"(arg0: integer): integer
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "cullFace"(): $Direction
 "normalZ"(arg0: integer): float
 "lightFace"(): $Direction
 "colorIndex"(): integer
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "faceNormal"(): $Vector3f
 "hasNormal"(arg0: integer): boolean
 "lightmap"(arg0: integer): integer
 "material"(): $RenderMaterial
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
}

export namespace $QuadEmitter {
const CULL_FACE_EPSILON: float
const probejs$$marker: never
}
export class $QuadEmitter$$Static implements $QuadEmitter {
static readonly "CULL_FACE_EPSILON": float


 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $QuadEmitter
 "color"(arg0: integer, arg1: integer): $QuadEmitter
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $QuadEmitter
 "square"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $QuadEmitter
 "emit"(): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $QuadEmitter
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $QuadEmitter
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $QuadEmitter
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $QuadEmitter
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
 "uvUnitSquare"(): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $QuadEmitter
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $QuadEmitter
 "nominalFace"(arg0: $Direction$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteUnitSquare"(arg0: integer): $QuadEmitter
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "tag"(): integer
 "color"(arg0: integer): integer
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "cullFace"(): $Direction
 "normalZ"(arg0: integer): float
 "lightFace"(): $Direction
 "colorIndex"(): integer
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "faceNormal"(): $Vector3f
 "hasNormal"(arg0: integer): boolean
 "lightmap"(arg0: integer): integer
 "material"(): $RenderMaterial
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadEmitter$$Type = ($QuadEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuadEmitter_ = $QuadEmitter$$Type;
}}
