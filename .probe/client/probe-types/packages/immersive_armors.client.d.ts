declare module "immersive_armors.client.render.entity.piece.Piece" {
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $Piece {

constructor()

public "isGlowing"(): boolean
public "glowing"(): $Piece
public "texture"(texture: string): $Piece
public "getTexture"(): string
public "render"<T extends $LivingEntity, A extends $HumanoidModel<(T)>>(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: T, arg4: $ItemStack$$Type, arg5: float, arg6: $EquipmentSlot$$Type, arg7: A): void
public "glint"(): $Piece
public "isTranslucent"(): boolean
public "hasGlint"(): boolean
public "translucent"(): $Piece
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Piece$$Type = ($Piece);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Piece_ = $Piece$$Type;
}}
