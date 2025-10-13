declare module "com.leobeliik.extremesoundmuffler.interfaces.ISoundLists" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Anchor, $Anchor$$Type} from "com.leobeliik.extremesoundmuffler.utils.Anchor"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $ISoundLists {

}

export namespace $ISoundLists {
const muffledSounds: $Map<($ResourceLocation), (double)>
const soundsList: $List<($ResourceLocation)>
const forbiddenSounds: $Set<(StringJS)>
const recentSoundsList: $List<($ResourceLocation)>
const anchorList: $List<($Anchor)>
const probejs$$marker: never
}
export class $ISoundLists$$Static implements $ISoundLists {
static readonly "muffledSounds": $Map<($ResourceLocation), (double)>
static readonly "soundsList": $List<($ResourceLocation)>
static readonly "forbiddenSounds": $Set<(StringJS)>
static readonly "recentSoundsList": $List<($ResourceLocation)>
static readonly "anchorList": $List<($Anchor)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoundLists$$Type = ($ISoundLists);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoundLists_ = $ISoundLists$$Type;
}}
declare module "com.leobeliik.extremesoundmuffler.utils.Anchor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SortedMap, $SortedMap$$Type} from "java.util.SortedMap"

export class $Anchor {

constructor(arg0: integer, arg1: StringJS)
constructor(arg0: integer, arg1: StringJS, arg2: $BlockPos$$Type, arg3: $ResourceLocation$$Type, arg4: integer, arg5: $SortedMap$$Type<(StringJS), (double)>)

public "getDimension"(): $ResourceLocation
public "getName"(): StringJS
public "getY"(): StringJS
public "getX"(): StringJS
public "getZ"(): StringJS
public "getAnchorId"(): integer
public "replaceSound"(arg0: $ResourceLocation$$Type, arg1: double): void
public "removeSound"(arg0: $ResourceLocation$$Type): void
public "deleteAnchor"(): void
public "editAnchor"(arg0: StringJS, arg1: integer): void
public "addSound"(arg0: $ResourceLocation$$Type, arg1: double): void
public "getAnchorPos"(): $BlockPos
public "setAnchor"(): void
public static "getAnchor"(arg0: $SoundInstance$$Type): $Anchor
public "getRadius"(): integer
public "getMuffledSounds"(): $SortedMap<($ResourceLocation), (double)>
public "setMuffledSounds"(arg0: $SortedMap$$Type<($ResourceLocation$$Type), (double)>): void
get "dimension"(): $ResourceLocation
get "name"(): StringJS
get "y"(): StringJS
get "x"(): StringJS
get "z"(): StringJS
get "anchorId"(): integer
get "anchorPos"(): $BlockPos
get "radius"(): integer
get "muffledSounds"(): $SortedMap<($ResourceLocation), (double)>
set "muffledSounds"(value: $SortedMap$$Type<($ResourceLocation$$Type), (double)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Anchor$$Type = ($Anchor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Anchor_ = $Anchor$$Type;
}}
