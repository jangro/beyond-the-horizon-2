declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$AttributesTooltipFunction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export interface $CapabilityCurios$AttributesTooltipFunction {

 "apply"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>

(arg0: $List<($Component)>, arg1: $Item$TooltipContext, arg2: $ItemStack): $List$$Type<($Component$$Type)>
}

export namespace $CapabilityCurios$AttributesTooltipFunction {
const probejs$$marker: never
}
export class $CapabilityCurios$AttributesTooltipFunction$$Static implements $CapabilityCurios$AttributesTooltipFunction {


 "apply"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$AttributesTooltipFunction$$Type = ((arg0: $List<($Component)>, arg1: $Item$TooltipContext, arg2: $ItemStack) => $List$$Type<($Component$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$AttributesTooltipFunction_ = $CapabilityCurios$AttributesTooltipFunction$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$AttributeModificationContext" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CapabilityCurios$AttributeModificationContext {

constructor(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type, arg3: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>)

public "getStack"(): $ItemStack
public "getIdentifier"(): $ResourceLocation
public "remove"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type): $CapabilityCurios$AttributeModificationContext
public "getModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "modify"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): $CapabilityCurios$AttributeModificationContext
public "getSlotContext"(): $SlotContext
get "stack"(): $ItemStack
get "identifier"(): $ResourceLocation
get "modifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "slotContext"(): $SlotContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$AttributeModificationContext$$Type = ($CapabilityCurios$AttributeModificationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$AttributeModificationContext_ = $CapabilityCurios$AttributeModificationContext$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CurioRenderer$RenderContext" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderLayerParent, $RenderLayerParent$$Type} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioRenderer$RenderContext {
 "matrixStack": $PoseStack
 "stack": $ItemStack
 "renderLayerParent": $RenderLayerParent<($LivingEntity), ($EntityModel<($LivingEntity)>)>
 "ageInTicks": float
 "netHeadYaw": float
 "light": integer
 "limbSwingAmount": float
 "renderTypeBuffer": $MultiBufferSource
 "limbSwing": float
 "slotContext": $SlotContext
 "headPitch": float
 "partialTicks": float

constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $PoseStack$$Type, arg3: $RenderLayerParent$$Type<($LivingEntity$$Type), ($EntityModel$$Type<($LivingEntity$$Type)>)>, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioRenderer$RenderContext$$Type = ($CurioRenderer$RenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioRenderer$RenderContext_ = $CurioRenderer$RenderContext$$Type;
}}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$registerRenderer" {
import {$ClientKubeEvent, $ClientKubeEvent$$Type} from "dev.latvian.mods.kubejs.client.ClientKubeEvent"
import {$CurioRenderer$RenderContext, $CurioRenderer$RenderContext$$Type} from "net.zhaiji.kubejscurios.curios.CurioRenderer$RenderContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $KubeJSCuriosEventJS$registerRenderer implements $ClientKubeEvent {

constructor()

public "remove"(arg0: $Item$$Type): void
public "register"(arg0: $Item$$Type, arg1: $Consumer$$Type<($CurioRenderer$RenderContext)>): void
public "getClient"(): $Minecraft
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "client"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$registerRenderer$$Type = ($KubeJSCuriosEventJS$registerRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCuriosEventJS$registerRenderer_ = $KubeJSCuriosEventJS$registerRenderer$$Type;
}}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioAttributeModifier" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$KubeLivingEntityEvent, $KubeLivingEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$CurioAttributeModifier implements $KubeLivingEntityEvent {
readonly "stack": $ItemStack
readonly "originalModifiers": $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
readonly "id": $ResourceLocation
readonly "slotContext": $SlotContext

constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $ResourceLocation$$Type, arg3: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>)

public "removeAttribute"(arg0: $Holder$$Type<($Attribute)>): $Collection<($AttributeModifier)>
public "getModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getEntity"(): $Entity
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "clearModifiers"(): void
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "modifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "entity"(): $Entity
get "level"(): $Level
get "player"(): $Player
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioAttributeModifier$$Type = ($KubeJSCuriosEventJS$CurioAttributeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCuriosEventJS$CurioAttributeModifier_ = $KubeJSCuriosEventJS$CurioAttributeModifier$$Type;
}}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioChange" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$KubeLivingEntityEvent, $KubeLivingEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$CurioChange implements $KubeLivingEntityEvent {
readonly "slotType": StringJS
readonly "newStack": $ItemStack
readonly "index": integer
readonly "oldStack": $ItemStack

constructor(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "entity"(): $LivingEntity
get "level"(): $Level
get "player"(): $Player
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioChange$$Type = ($KubeJSCuriosEventJS$CurioChange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCuriosEventJS$CurioChange_ = $KubeJSCuriosEventJS$CurioChange$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$CuriosCapabilityBuilder" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemModificationKubeEvent$ItemModifications, $ItemModificationKubeEvent$ItemModifications$$Type} from "dev.latvian.mods.kubejs.item.ItemModificationKubeEvent$ItemModifications"
import {$ICurioItem, $ICurioItem$$Type} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$CapabilityCurios, $CapabilityCurios$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios"
import {$ItemBuilder, $ItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $CapabilityCurios$CuriosCapabilityBuilder {
static readonly "itemBuilders": $Map<($ItemBuilder), ($ICurioItem)>
static "INSTANCE": $CapabilityCurios$CuriosCapabilityBuilder
static readonly "itemModifications": $Map<($ItemModificationKubeEvent$ItemModifications), ($ICurioItem)>

constructor()

public "create"(): $CapabilityCurios
public static "load"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$CuriosCapabilityBuilder$$Type = ($CapabilityCurios$CuriosCapabilityBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$CuriosCapabilityBuilder_ = $CapabilityCurios$CuriosCapabilityBuilder$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios" {
import {$CapabilityCurios$AttributesTooltipFunction, $CapabilityCurios$AttributesTooltipFunction$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$AttributesTooltipFunction"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$CapabilityCurios$SlotsTooltipFunction, $CapabilityCurios$SlotsTooltipFunction$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$SlotsTooltipFunction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CapabilityCurios$EnderMaskPredicate, $CapabilityCurios$EnderMaskPredicate$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$EnderMaskPredicate"
import {$CapabilityCurios$FortuneFunction, $CapabilityCurios$FortuneFunction$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$FortuneFunction"
import {$CapabilityCurios$EquipConsumer, $CapabilityCurios$EquipConsumer$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$EquipConsumer"
import {$CapabilityCurios$AttributeModificationContext, $CapabilityCurios$AttributeModificationContext$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$AttributeModificationContext"
import {$CapabilityCurios$LootingFunction, $CapabilityCurios$LootingFunction$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$LootingFunction"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$CapabilityCurios$DropRulePredicate, $CapabilityCurios$DropRulePredicate$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$DropRulePredicate"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $CapabilityCurios {

constructor()

public "addAttribute"(arg0: $ResourceKey$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): $CapabilityCurios
public "canEquip"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "isEnderMask"(arg0: $CapabilityCurios$EnderMaskPredicate$$Type): $CapabilityCurios
public "canDrop"(arg0: $CapabilityCurios$DropRulePredicate$$Type): $CapabilityCurios
public "curioTick"(arg0: $BiConsumer$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "onEquip"(arg0: $CapabilityCurios$EquipConsumer$$Type): $CapabilityCurios
public "onUnequip"(arg0: $CapabilityCurios$EquipConsumer$$Type): $CapabilityCurios
public "canUnequip"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "onEquipFromUse"(arg0: $BiConsumer$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "canEquipFromUse"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "canWalkOnPowderedSnow"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "makesPiglinsNeutral"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "modifyAttribute"(arg0: $Consumer$$Type<($CapabilityCurios$AttributeModificationContext)>): $CapabilityCurios
public "modifyEquipSound"(arg0: $BiFunction$$Type<($SlotContext), ($ItemStack), ($ICurio$SoundInfo$$Type)>): $CapabilityCurios
public "modifyFortuneLevel"(arg0: $CapabilityCurios$FortuneFunction$$Type): $CapabilityCurios
public "modifyLootingLevel"(arg0: $CapabilityCurios$LootingFunction$$Type): $CapabilityCurios
public "modifySlotsTooltip"(arg0: $CapabilityCurios$SlotsTooltipFunction$$Type): $CapabilityCurios
public "modifyAttributesTooltip"(arg0: $CapabilityCurios$AttributesTooltipFunction$$Type): $CapabilityCurios
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$$Type = ($CapabilityCurios);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios_ = $CapabilityCurios$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$EnderMaskPredicate" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"

export interface $CapabilityCurios$EnderMaskPredicate {

 "test"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean

(arg0: $SlotContext, arg1: $EnderMan, arg2: $ItemStack): boolean
}

export namespace $CapabilityCurios$EnderMaskPredicate {
const probejs$$marker: never
}
export class $CapabilityCurios$EnderMaskPredicate$$Static implements $CapabilityCurios$EnderMaskPredicate {


 "test"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$EnderMaskPredicate$$Type = ((arg0: $SlotContext, arg1: $EnderMan, arg2: $ItemStack) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$EnderMaskPredicate_ = $CapabilityCurios$EnderMaskPredicate$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$DropRulePredicate" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"

export interface $CapabilityCurios$DropRulePredicate {

 "test"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): boolean

(arg0: $SlotContext, arg1: $DamageSource, arg2: boolean, arg3: $ItemStack): boolean
}

export namespace $CapabilityCurios$DropRulePredicate {
const probejs$$marker: never
}
export class $CapabilityCurios$DropRulePredicate$$Static implements $CapabilityCurios$DropRulePredicate {


 "test"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$DropRulePredicate$$Type = ((arg0: $SlotContext, arg1: $DamageSource, arg2: boolean, arg3: $ItemStack) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$DropRulePredicate_ = $CapabilityCurios$DropRulePredicate$$Type;
}}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioCanEquip" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KubeLivingEntityEvent, $KubeLivingEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $KubeJSCuriosEventJS$CurioCanEquip implements $KubeLivingEntityEvent {
 "result": $TriState
readonly "stack": $ItemStack
readonly "slotContext": $SlotContext

constructor(arg0: $LivingEntity$$Type, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type, arg3: $TriState$$Type)

public "setResult"(arg0: $TriState$$Type): void
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
set "result"(value: $TriState$$Type)
get "entity"(): $LivingEntity
get "level"(): $Level
get "player"(): $Player
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioCanEquip$$Type = ($KubeJSCuriosEventJS$CurioCanEquip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCuriosEventJS$CurioCanEquip_ = $KubeJSCuriosEventJS$CurioCanEquip$$Type;
}}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioCanUnequip" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KubeLivingEntityEvent, $KubeLivingEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $KubeJSCuriosEventJS$CurioCanUnequip implements $KubeLivingEntityEvent {
 "result": $TriState
readonly "stack": $ItemStack
readonly "slotContext": $SlotContext

constructor(arg0: $LivingEntity$$Type, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type, arg3: $TriState$$Type)

public "setResult"(arg0: $TriState$$Type): void
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
set "result"(value: $TriState$$Type)
get "entity"(): $LivingEntity
get "level"(): $Level
get "player"(): $Player
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioCanUnequip$$Type = ($KubeJSCuriosEventJS$CurioCanUnequip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCuriosEventJS$CurioCanUnequip_ = $KubeJSCuriosEventJS$CurioCanUnequip$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$EquipConsumer" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $CapabilityCurios$EquipConsumer {

 "accept"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void

(arg0: $SlotContext, arg1: $ItemStack, arg2: $ItemStack): void
}

export namespace $CapabilityCurios$EquipConsumer {
const probejs$$marker: never
}
export class $CapabilityCurios$EquipConsumer$$Static implements $CapabilityCurios$EquipConsumer {


 "accept"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$EquipConsumer$$Type = ((arg0: $SlotContext, arg1: $ItemStack, arg2: $ItemStack) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$EquipConsumer_ = $CapabilityCurios$EquipConsumer$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.KubeJSCuriosHelper" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ICurio, $ICurio$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SlotResult, $SlotResult$$Type} from "top.theillusivec4.curios.api.SlotResult"
import {$ICurioStacksHandler, $ICurioStacksHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ISlotType, $ISlotType$$Type} from "top.theillusivec4.curios.api.type.ISlotType"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $KubeJSCuriosHelper {

 "findCurios"(...arg0: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer): $Optional<($SlotResult)>
 "getAllCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "getEquippedCurios"(): $IItemHandlerModifiable
 "setEquippedCurio"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): void
 "getCuriosRegistrySlot"(arg0: StringJS): $Optional<($ISlotType)>
 "getCuriosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
 "getCurioCapability"(arg0: $ItemStack$$Type): $Optional<($ICurio)>
 "getStackInCuriosSlots"(arg0: $ItemStack$$Type): $Map<(StringJS), ($ISlotType)>
 "getCuriosStacksHandler"(arg0: StringJS): $Optional<($ICurioStacksHandler)>
 "isCuriosEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "isCuriosEquipped"(arg0: $Item$$Type): boolean
 "addCuriosSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "getCuriosSlotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "getCuriosInventory"(): $ICuriosItemHandler
 "getEntityCuriosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
 "removeCuriosSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
 "clearCuriosSlotModifiers"(): void
get "allCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
get "equippedCurios"(): $IItemHandlerModifiable
get "curiosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
get "curiosSlotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "curiosInventory"(): $ICuriosItemHandler
get "entityCuriosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
}

export namespace $KubeJSCuriosHelper {
const probejs$$marker: never
}
export class $KubeJSCuriosHelper$$Static implements $KubeJSCuriosHelper {


 "findCurios"(...arg0: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer): $Optional<($SlotResult)>
 "getAllCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "getEquippedCurios"(): $IItemHandlerModifiable
 "setEquippedCurio"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): void
 "getCuriosRegistrySlot"(arg0: StringJS): $Optional<($ISlotType)>
 "getCuriosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
 "getCurioCapability"(arg0: $ItemStack$$Type): $Optional<($ICurio)>
 "getStackInCuriosSlots"(arg0: $ItemStack$$Type): $Map<(StringJS), ($ISlotType)>
 "getCuriosStacksHandler"(arg0: StringJS): $Optional<($ICurioStacksHandler)>
 "isCuriosEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "isCuriosEquipped"(arg0: $Item$$Type): boolean
 "addCuriosSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "getCuriosSlotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "getCuriosInventory"(): $ICuriosItemHandler
 "getEntityCuriosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
 "removeCuriosSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
 "clearCuriosSlotModifiers"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosHelper$$Type = ($KubeJSCuriosHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCuriosHelper_ = $KubeJSCuriosHelper$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$FortuneFunction" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $CapabilityCurios$FortuneFunction {

 "apply"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer

(arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack): integer
}

export namespace $CapabilityCurios$FortuneFunction {
const probejs$$marker: never
}
export class $CapabilityCurios$FortuneFunction$$Static implements $CapabilityCurios$FortuneFunction {


 "apply"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$FortuneFunction$$Type = ((arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$FortuneFunction_ = $CapabilityCurios$FortuneFunction$$Type;
}}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$SlotModifiersUpdated" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$KubeLivingEntityEvent, $KubeLivingEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$SlotModifiersUpdated implements $KubeLivingEntityEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $Set$$Type<(StringJS)>)

public "getEntity"(): $Entity
public "getTypes"(): $Set<(StringJS)>
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "entity"(): $Entity
get "types"(): $Set<(StringJS)>
get "level"(): $Level
get "player"(): $Player
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$SlotModifiersUpdated$$Type = ($KubeJSCuriosEventJS$SlotModifiersUpdated);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCuriosEventJS$SlotModifiersUpdated_ = $KubeJSCuriosEventJS$SlotModifiersUpdated$$Type;
}}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$DropRules" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Tuple, $Tuple$$Type} from "net.minecraft.util.Tuple"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$KubeLivingEntityEvent, $KubeLivingEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$DropRules implements $KubeLivingEntityEvent {
readonly "curioHandler": $ICuriosItemHandler
readonly "recentlyHit": boolean
readonly "lootingLevel": integer
readonly "source": $DamageSource
readonly "overrides": $List<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ICuriosItemHandler$$Type)

public "getEntity"(): $Entity
public "addOverride"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $ICurio$DropRule$$Type): void
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "entity"(): $Entity
get "level"(): $Level
get "player"(): $Player
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$DropRules$$Type = ($KubeJSCuriosEventJS$DropRules);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCuriosEventJS$DropRules_ = $KubeJSCuriosEventJS$DropRules$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$SlotsTooltipFunction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export interface $CapabilityCurios$SlotsTooltipFunction {

 "apply"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>

(arg0: $List<($Component)>, arg1: $Item$TooltipContext, arg2: $ItemStack): $List$$Type<($Component$$Type)>
}

export namespace $CapabilityCurios$SlotsTooltipFunction {
const probejs$$marker: never
}
export class $CapabilityCurios$SlotsTooltipFunction$$Static implements $CapabilityCurios$SlotsTooltipFunction {


 "apply"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$SlotsTooltipFunction$$Type = ((arg0: $List<($Component)>, arg1: $Item$TooltipContext, arg2: $ItemStack) => $List$$Type<($Component$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$SlotsTooltipFunction_ = $CapabilityCurios$SlotsTooltipFunction$$Type;
}}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$LootingFunction" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $CapabilityCurios$LootingFunction {

 "apply"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer

(arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack): integer
}

export namespace $CapabilityCurios$LootingFunction {
const probejs$$marker: never
}
export class $CapabilityCurios$LootingFunction$$Static implements $CapabilityCurios$LootingFunction {


 "apply"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$LootingFunction$$Type = ((arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCurios$LootingFunction_ = $CapabilityCurios$LootingFunction$$Type;
}}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioDrops" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$KubeLivingEntityEvent, $KubeLivingEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$CurioDrops implements $KubeLivingEntityEvent {
readonly "curioHandler": $ICuriosItemHandler
readonly "drops": $Collection<($ItemEntity)>
readonly "recentlyHit": boolean
readonly "lootingLevel": integer
readonly "source": $DamageSource

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: $Collection$$Type<($ItemEntity$$Type)>, arg3: integer, arg4: boolean, arg5: $ICuriosItemHandler$$Type)

public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "entity"(): $LivingEntity
get "level"(): $Level
get "player"(): $Player
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioDrops$$Type = ($KubeJSCuriosEventJS$CurioDrops);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCuriosEventJS$CurioDrops_ = $KubeJSCuriosEventJS$CurioDrops$$Type;
}}
