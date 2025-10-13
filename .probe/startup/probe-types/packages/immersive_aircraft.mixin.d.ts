declare module "immersive_aircraft.mixin.ServerPlayerEntityMixin" {
import {$ContainerSynchronizer, $ContainerSynchronizer$$Type} from "net.minecraft.world.inventory.ContainerSynchronizer"

export interface $ServerPlayerEntityMixin {

 "getContainerCounter"(): integer
 "getContainerSynchronizer"(): $ContainerSynchronizer
 "ic$nextContainerCounter"(): void
get "containerCounter"(): integer
get "containerSynchronizer"(): $ContainerSynchronizer
}

export namespace $ServerPlayerEntityMixin {
const probejs$$marker: never
}
export class $ServerPlayerEntityMixin$$Static implements $ServerPlayerEntityMixin {


 "getContainerCounter"(): integer
 "getContainerSynchronizer"(): $ContainerSynchronizer
 "ic$nextContainerCounter"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerEntityMixin$$Type = ($ServerPlayerEntityMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerEntityMixin_ = $ServerPlayerEntityMixin$$Type;
}}
declare module "immersive_aircraft.mixin.client.KeyMappingAccessorMixin" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessorMixin {

 "getKey"(): $InputConstants$Key
 "getClickCount"(): integer
 "setClickCount"(arg0: integer): void
get "key"(): $InputConstants$Key
get "clickCount"(): integer
set "clickCount"(value: integer)
}

export namespace $KeyMappingAccessorMixin {
const probejs$$marker: never
}
export class $KeyMappingAccessorMixin$$Static implements $KeyMappingAccessorMixin {


 "getKey"(): $InputConstants$Key
 "getClickCount"(): integer
 "setClickCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessorMixin$$Type = ($KeyMappingAccessorMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessorMixin_ = $KeyMappingAccessorMixin$$Type;
}}
