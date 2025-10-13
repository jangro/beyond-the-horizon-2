declare module "net.raphimc.immediatelyfast.injection.interfaces.IMapRenderer" {
import {$MapAtlasTexture, $MapAtlasTexture$$Type} from "net.raphimc.immediatelyfast.feature.map_atlas_generation.MapAtlasTexture"

export interface $IMapRenderer {

 "immediatelyFast$getMapAtlasTexture"(arg0: integer): $MapAtlasTexture
 "immediatelyFast$getAtlasMapping"(arg0: integer): integer
}

export namespace $IMapRenderer {
const probejs$$marker: never
}
export class $IMapRenderer$$Static implements $IMapRenderer {


 "immediatelyFast$getMapAtlasTexture"(arg0: integer): $MapAtlasTexture
 "immediatelyFast$getAtlasMapping"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMapRenderer$$Type = ($IMapRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMapRenderer_ = $IMapRenderer$$Type;
}}
declare module "net.raphimc.immediatelyfast.feature.map_atlas_generation.MapAtlasTexture" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$DynamicTexture, $DynamicTexture$$Type} from "net.minecraft.client.renderer.texture.DynamicTexture"

export class $MapAtlasTexture implements $AutoCloseable {
static readonly "MAP_SIZE": integer
static readonly "ATLAS_SIZE": integer
static readonly "MAPS_PER_ATLAS": integer

constructor(id: integer)

public "getIdentifier"(): $ResourceLocation
public "getId"(): integer
public "close"(): void
public "getTexture"(): $DynamicTexture
public "getNextMapLocation"(): integer
get "identifier"(): $ResourceLocation
get "id"(): integer
get "texture"(): $DynamicTexture
get "nextMapLocation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapAtlasTexture$$Type = ($MapAtlasTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapAtlasTexture_ = $MapAtlasTexture$$Type;
}}
