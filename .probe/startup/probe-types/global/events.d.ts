import {$EntityModificationEventJS, $EntityModificationEventJS$$Type} from "net.liopyu.entityjs.events.EntityModificationEventJS"
import {$BlockModificationKubeEvent, $BlockModificationKubeEvent$$Type} from "dev.latvian.mods.kubejs.block.BlockModificationKubeEvent"
import {$CompatibilityEventJS, $CompatibilityEventJS$$Type} from "dev.uncandango.kubejstweaks.kubejs.event.CompatibilityEventJS"
import {$ModifyAttributeEventJS, $ModifyAttributeEventJS$$Type} from "net.liopyu.entityjs.events.ModifyAttributeEventJS"
import {$ItemModelPropertiesKubeEvent, $ItemModelPropertiesKubeEvent$$Type} from "dev.latvian.mods.kubejs.item.ItemModelPropertiesKubeEvent"
import {$RegisterSpawnPlacementsEventJS, $RegisterSpawnPlacementsEventJS$$Type} from "net.liopyu.entityjs.events.RegisterSpawnPlacementsEventJS"
import {$MenuScreenRegistryKubeEvent, $MenuScreenRegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.client.MenuScreenRegistryKubeEvent"
import {$BlockEntityRendererRegistryKubeEvent, $BlockEntityRendererRegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.client.BlockEntityRendererRegistryKubeEvent"
import {$AttributeCreationEventJS, $AttributeCreationEventJS$$Type} from "net.liopyu.entityjs.events.AttributeCreationEventJS"
import {$ItemToolTierRegistryKubeEvent, $ItemToolTierRegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.item.custom.ItemToolTierRegistryKubeEvent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$KubeStartupEvent, $KubeStartupEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeStartupEvent"
import {$RegisterCodecEventJS, $RegisterCodecEventJS$$Type} from "dev.uncandango.kubejstweaks.kubejs.event.RegisterCodecEventJS"
import {$SpellSelectionEventJS, $SpellSelectionEventJS$$Type} from "com.squoshi.irons_spells_js.event.SpellSelectionEventJS"
import {$ItemModificationKubeEvent, $ItemModificationKubeEvent$$Type} from "dev.latvian.mods.kubejs.item.ItemModificationKubeEvent"
import {$EntityRendererRegistryKubeEvent, $EntityRendererRegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.client.EntityRendererRegistryKubeEvent"
import {$CreativeTabKubeEvent, $CreativeTabKubeEvent$$Type} from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabKubeEvent"

declare global {
export namespace KubeJSTweaks {
function schema(handler: (event: $RegisterCodecEventJS) => void): void
function checkCompatibility(handler: (event: $CompatibilityEventJS) => void): void
}
export namespace ItemEvents {
function modelProperties(handler: (event: $ItemModelPropertiesKubeEvent) => void): void
/**
 * Invoked after all items are registered to modify them.
 */
function modification(handler: (event: $ItemModificationKubeEvent) => void): void
/**
 * Invoked when the game is starting up and the item tool tiers are being registered.
 */
function toolTierRegistry(handler: (event: $ItemToolTierRegistryKubeEvent) => void): void
}
export namespace ISSEvents {
function spellSelection(handler: (event: $SpellSelectionEventJS) => void): void
}
export namespace EntityJSEvents {
function modifyEntity(handler: (event: $EntityModificationEventJS) => void): void
function attributes(handler: (event: $ModifyAttributeEventJS) => void): void
function spawnPlacement(handler: (event: $RegisterSpawnPlacementsEventJS) => void): void
function createAttributes(handler: (event: $AttributeCreationEventJS) => void): void
}
export namespace ClientEvents {
function menuScreenRegistry(handler: (event: $MenuScreenRegistryKubeEvent) => void): void
function entityRendererRegistry(handler: (event: $EntityRendererRegistryKubeEvent) => void): void
function blockEntityRendererRegistry(handler: (event: $BlockEntityRendererRegistryKubeEvent) => void): void
}
export namespace StartupEvents {
function init(handler: (event: $KubeStartupEvent) => void): void
function modifyCreativeTab(extra: $ResourceLocation$$Type, handler: (event: $CreativeTabKubeEvent) => void): void
function postInit(handler: (event: $KubeStartupEvent) => void): void
}
export namespace BlockEvents {
function modification(handler: (event: $BlockModificationKubeEvent) => void): void
}
}