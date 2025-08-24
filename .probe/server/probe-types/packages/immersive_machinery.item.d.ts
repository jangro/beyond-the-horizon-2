declare module "immersive_machinery.item.BambooBeeItem" {
import {$VehicleItem$VehicleConstructor, $VehicleItem$VehicleConstructor$$Type} from "immersive_aircraft.item.VehicleItem$VehicleConstructor"
import {$BambooBee$Configuration, $BambooBee$Configuration$$Type} from "immersive_machinery.entity.BambooBee$Configuration"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ContainerPosition, $ContainerPosition$$Type} from "immersive_machinery.entity.inventory.ContainerPosition"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$MachineryItem, $MachineryItem$$Type} from "immersive_machinery.item.MachineryItem"

export class $BambooBeeItem extends $MachineryItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "CONFIGURATION": $DataComponentType<($BambooBee$Configuration)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "CONTAINER_POSITIONS": $DataComponentType<($List<($ContainerPosition)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, arg1: $VehicleItem$VehicleConstructor$$Type)

public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$$Type, ctx: $Item$TooltipContext$$Type, tooltips: $List$$Type<($Component$$Type)>, flags: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooBeeItem$$Type = ($BambooBeeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BambooBeeItem_ = $BambooBeeItem$$Type;
}}
declare module "immersive_machinery.item.MachineryItem" {
import {$VehicleItem$VehicleConstructor, $VehicleItem$VehicleConstructor$$Type} from "immersive_aircraft.item.VehicleItem$VehicleConstructor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$VehicleItem, $VehicleItem$$Type} from "immersive_aircraft.item.VehicleItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $MachineryItem extends $VehicleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, arg1: $VehicleItem$VehicleConstructor$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineryItem$$Type = ($MachineryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineryItem_ = $MachineryItem$$Type;
}}
