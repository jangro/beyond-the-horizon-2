declare module "dynamic_fps.impl.util.duck.DuckSoundEngine" {
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"

export interface $DuckSoundEngine {

 "dynamic_fps$updateVolume"(source: $SoundSource$$Type): void
}

export namespace $DuckSoundEngine {
const probejs$$marker: never
}
export class $DuckSoundEngine$$Static implements $DuckSoundEngine {


 "dynamic_fps$updateVolume"(source: $SoundSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DuckSoundEngine$$Type = ($DuckSoundEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DuckSoundEngine_ = $DuckSoundEngine$$Type;
}}
