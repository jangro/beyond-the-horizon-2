declare module "lain.mods.cos.api.event.CosArmorDeathDrops" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CAStacksBase, $CAStacksBase$$Type} from "lain.mods.cos.api.inventory.CAStacksBase"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $CosArmorDeathDrops extends $Event implements $ICancellableEvent {

constructor(arg0: $Player$$Type, arg1: $CAStacksBase$$Type)

public "getCAStacks"(): $CAStacksBase
public "getEntityPlayer"(): $Player
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "cAStacks"(): $CAStacksBase
get "entityPlayer"(): $Player
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosArmorDeathDrops$$Type = ($CosArmorDeathDrops);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosArmorDeathDrops_ = $CosArmorDeathDrops$$Type;
}}
declare module "lain.mods.cos.api.inventory.CAStacksBase" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $CAStacksBase extends $ItemStackHandler {

constructor()
constructor(arg0: integer)

public "setSize"(arg0: integer): void
public "isHidden"(arg0: StringJS, arg1: StringJS): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "setHidden"(arg0: StringJS, arg1: StringJS, arg2: boolean): boolean
public "forEachHidden"(arg0: $BiConsumer$$Type<(StringJS), (StringJS)>): void
public "isSkinArmor"(arg0: integer): boolean
public "setSkinArmor"(arg0: integer, arg1: boolean): void
set "size"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CAStacksBase$$Type = ($CAStacksBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CAStacksBase_ = $CAStacksBase$$Type;
}}
