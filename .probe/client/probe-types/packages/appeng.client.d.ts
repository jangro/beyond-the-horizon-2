declare module "appeng.client.gui.style.Blitter" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Rect2i, $Rect2i$$Type} from "net.minecraft.client.renderer.Rect2i"
import {$TextureTransform, $TextureTransform$$Type} from "appeng.client.gui.style.TextureTransform"

export class $Blitter {
static readonly "DEFAULT_TEXTURE_WIDTH": integer
static readonly "DEFAULT_TEXTURE_HEIGHT": integer


public "src"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Blitter
public "src"(arg0: $Rect2i$$Type): $Blitter
public "transform"(arg0: $TextureTransform$$Type): $Blitter
public "copy"(): $Blitter
public "color"(arg0: float, arg1: float, arg2: float): $Blitter
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $Blitter
public "dest"(arg0: $Rect2i$$Type): $Blitter
public "dest"(arg0: integer, arg1: integer): $Blitter
public "dest"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Blitter
public "zOffset"(arg0: integer): $Blitter
public static "texture"(arg0: $ResourceLocation$$Type): $Blitter
public static "texture"(arg0: string, arg1: integer, arg2: integer): $Blitter
public static "texture"(arg0: string): $Blitter
public static "texture"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer): $Blitter
public "opacity"(arg0: float): $Blitter
public "blit"(arg0: $GuiGraphics$$Type): void
public static "sprite"(arg0: $TextureAtlasSprite$$Type): $Blitter
public "getSrcWidth"(): integer
public "getSrcHeight"(): integer
public "getSrcX"(): integer
public "getSrcY"(): integer
public "colorRgb"(arg0: integer): $Blitter
public "colorArgb"(arg0: integer): $Blitter
public "blending"(arg0: boolean): $Blitter
public static "guiSprite"(arg0: $ResourceLocation$$Type): $Blitter
public "srcHeight"(arg0: integer): $Blitter
public "srcWidth"(arg0: integer): $Blitter
public "getDestRect"(): $Rect2i
get "srcX"(): integer
get "srcY"(): integer
get "destRect"(): $Rect2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Blitter$$Type = ($Blitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Blitter_ = $Blitter$$Type;
}}
declare module "appeng.client.render.crafting.AssemblerAnimationStatus" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $AssemblerAnimationStatus {

constructor(arg0: byte, arg1: $ItemStack$$Type)

public "isExpired"(): boolean
public "getSpeed"(): byte
public "getIs"(): $ItemStack
public "getAccumulatedTicks"(): float
public "setAccumulatedTicks"(arg0: float): void
public "getTicksUntilParticles"(): float
public "setTicksUntilParticles"(arg0: float): void
get "expired"(): boolean
get "speed"(): byte
get "is"(): $ItemStack
get "accumulatedTicks"(): float
set "accumulatedTicks"(value: float)
get "ticksUntilParticles"(): float
set "ticksUntilParticles"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblerAnimationStatus$$Type = ($AssemblerAnimationStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblerAnimationStatus_ = $AssemblerAnimationStatus$$Type;
}}
declare module "appeng.client.gui.style.TextureTransform" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TextureTransform extends $Enum<($TextureTransform)> {
static readonly "MIRROR_V": $TextureTransform
static readonly "NONE": $TextureTransform
static readonly "MIRROR_H": $TextureTransform


public static "values"(): ($TextureTransform)[]
public static "valueOf"(arg0: string): $TextureTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureTransform$$Type = (("none") | ("mirror_h") | ("mirror_v"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureTransform_ = $TextureTransform$$Type;
}}
declare module "appeng.client.render.cablebus.FacadeRenderState" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FacadeRenderState {

constructor(arg0: $BlockState$$Type, arg1: boolean)

public "getSourceBlock"(): $BlockState
public "isTransparent"(): boolean
get "sourceBlock"(): $BlockState
get "transparent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadeRenderState$$Type = ($FacadeRenderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacadeRenderState_ = $FacadeRenderState$$Type;
}}
declare module "appeng.client.render.overlay.IOverlayDataSource" {
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IOverlayDataSource {

 "getOverlayChunks"(): $Set<($ChunkPos)>
 "getOverlayBlockEntity"(): $BlockEntity
 "getOverlayColor"(): integer
 "getOverlaySourceLocation"(): $DimensionalBlockPos
get "overlayChunks"(): $Set<($ChunkPos)>
get "overlayBlockEntity"(): $BlockEntity
get "overlayColor"(): integer
get "overlaySourceLocation"(): $DimensionalBlockPos
}

export namespace $IOverlayDataSource {
const probejs$$marker: never
}
export class $IOverlayDataSource$$Static implements $IOverlayDataSource {


 "getOverlayChunks"(): $Set<($ChunkPos)>
 "getOverlayBlockEntity"(): $BlockEntity
 "getOverlayColor"(): integer
 "getOverlaySourceLocation"(): $DimensionalBlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverlayDataSource$$Type = ($IOverlayDataSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOverlayDataSource_ = $IOverlayDataSource$$Type;
}}
declare module "appeng.client.render.cablebus.CableBusRenderState" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$FacadeRenderState, $FacadeRenderState$$Type} from "appeng.client.render.cablebus.FacadeRenderState"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$EnumMap, $EnumMap$$Type} from "java.util.EnumMap"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$CableCoreType, $CableCoreType$$Type} from "appeng.client.render.cablebus.CableCoreType"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $CableBusRenderState {
static readonly "PROPERTY": $ModelProperty<($CableBusRenderState)>

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getAttachments"(): $EnumMap<($Direction), ($IPartModel)>
public "setPos"(arg0: $BlockPos$$Type): void
public "getPos"(): $BlockPos
public "setChannelsOnSide"(arg0: $EnumMap$$Type<($Direction$$Type), (integer)>): void
public "getChannelsOnSide"(): $EnumMap<($Direction), (integer)>
public "getBoundingBoxes"(): $List<($AABB)>
public "getCableColor"(): $AEColor
public "getFacades"(): $EnumMap<($Direction), ($FacadeRenderState)>
public "getAttachmentConnections"(): $EnumMap<($Direction), (integer)>
public "setCableColor"(arg0: $AEColor$$Type): void
public "setCoreType"(arg0: $CableCoreType$$Type): void
public "getCoreType"(): $CableCoreType
public "setCableType"(arg0: $AECableType$$Type): void
public "getCableType"(): $AECableType
public "getPartModelData"(): $EnumMap<($Direction), ($ModelData)>
public "getConnectionTypes"(): $EnumMap<($Direction), ($AECableType)>
public "getCableBusAdjacent"(): $EnumSet<($Direction)>
public "setConnectionTypes"(arg0: $EnumMap$$Type<($Direction$$Type), ($AECableType$$Type)>): void
public "setCableBusAdjacent"(arg0: $EnumSet$$Type<($Direction$$Type)>): void
get "attachments"(): $EnumMap<($Direction), ($IPartModel)>
set "pos"(value: $BlockPos$$Type)
get "pos"(): $BlockPos
set "channelsOnSide"(value: $EnumMap$$Type<($Direction$$Type), (integer)>)
get "channelsOnSide"(): $EnumMap<($Direction), (integer)>
get "boundingBoxes"(): $List<($AABB)>
get "cableColor"(): $AEColor
get "facades"(): $EnumMap<($Direction), ($FacadeRenderState)>
get "attachmentConnections"(): $EnumMap<($Direction), (integer)>
set "cableColor"(value: $AEColor$$Type)
set "coreType"(value: $CableCoreType$$Type)
get "coreType"(): $CableCoreType
set "cableType"(value: $AECableType$$Type)
get "cableType"(): $AECableType
get "partModelData"(): $EnumMap<($Direction), ($ModelData)>
get "connectionTypes"(): $EnumMap<($Direction), ($AECableType)>
get "cableBusAdjacent"(): $EnumSet<($Direction)>
set "connectionTypes"(value: $EnumMap$$Type<($Direction$$Type), ($AECableType$$Type)>)
set "cableBusAdjacent"(value: $EnumSet$$Type<($Direction$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusRenderState$$Type = ($CableBusRenderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusRenderState_ = $CableBusRenderState$$Type;
}}
declare module "appeng.client.render.cablebus.CableCoreType" {
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CableCoreType extends $Enum<($CableCoreType)> {
static readonly "GLASS": $CableCoreType
static readonly "DENSE": $CableCoreType
static readonly "COVERED": $CableCoreType


public static "values"(): ($CableCoreType)[]
public static "valueOf"(arg0: string): $CableCoreType
public "getTexture"(arg0: $AEColor$$Type): $Material
public static "fromCableType"(arg0: $AECableType$$Type): $CableCoreType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableCoreType$$Type = (("glass") | ("covered") | ("dense"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableCoreType_ = $CableCoreType$$Type;
}}
