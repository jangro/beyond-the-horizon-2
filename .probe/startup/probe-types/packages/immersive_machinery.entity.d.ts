declare module "immersive_machinery.entity.BambooBee$Configuration$Order" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BambooBee$Configuration$Order extends $Enum<($BambooBee$Configuration$Order)> {
static readonly "ROUND_ROBIN": $BambooBee$Configuration$Order
static readonly "FIRST": $BambooBee$Configuration$Order


public static "values"(): ($BambooBee$Configuration$Order)[]
public static "valueOf"(name: string): $BambooBee$Configuration$Order
public "next"(): $BambooBee$Configuration$Order
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooBee$Configuration$Order$$Type = (("first") | ("round_robin"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BambooBee$Configuration$Order_ = $BambooBee$Configuration$Order$$Type;
}}
declare module "immersive_machinery.entity.inventory.ContainerPosition" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ContainerPosition {
static "CODEC": $Codec<($ContainerPosition)>

constructor(pos: $BlockPos$$Type, name: string, input: boolean)
constructor(tag: $CompoundTag$$Type)

public "name"(): string
public "pos"(): $BlockPos
public "input"(): boolean
public "setInput"(input: boolean): void
public "toTag"(): $CompoundTag
public "getPos"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerPosition$$Type = ($ContainerPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerPosition_ = $ContainerPosition$$Type;
}}
declare module "immersive_machinery.entity.BambooBee$Configuration" {
import {$BambooBee$Configuration$Order, $BambooBee$Configuration$Order$$Type} from "immersive_machinery.entity.BambooBee$Configuration$Order"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export class $BambooBee$Configuration {
static "CODEC": $Codec<($BambooBee$Configuration)>
 "blacklist": boolean
 "compareTag": boolean
 "order": $BambooBee$Configuration$Order

constructor()
constructor(tag: $CompoundTag$$Type)

public "decode"(b: $FriendlyByteBuf$$Type): void
public "encode"(b: $FriendlyByteBuf$$Type): void
public "isDirty"(): boolean
public "setDirty"(): void
public "toTag"(): $CompoundTag
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooBee$Configuration$$Type = ($BambooBee$Configuration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BambooBee$Configuration_ = $BambooBee$Configuration$$Type;
}}
