declare module "betterdays.wrappers.ServerLevelWrapper" {
import {$SleepStatus, $SleepStatus$$Type} from "betterdays.time.SleepStatus"
import {$ServerLevelData, $ServerLevelData$$Type} from "net.minecraft.world.level.storage.ServerLevelData"
import {$Wrapper, $Wrapper$$Type} from "betterdays.wrappers.Wrapper"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $ServerLevelWrapper extends $Wrapper<($ServerLevel)> {
readonly "levelData": $ServerLevelData

constructor(arg0: $LevelAccessor$$Type)

public "weatherCycleEnabled"(): boolean
public "tickBlockEntities"(): void
public "wakeUpAllPlayers"(): void
public "setRandomTickSpeed"(arg0: integer): void
public "daylightRuleEnabled"(): boolean
public static "isServerLevel"(arg0: $LevelAccessor$$Type): boolean
public "stopWeather"(): void
public "setSleepStatus"(arg0: $SleepStatus$$Type): void
public static "isDerived"(arg0: $LevelAccessor$$Type): boolean
public "weatherRuleEnabled"(): boolean
set "randomTickSpeed"(value: integer)
set "sleepStatus"(value: $SleepStatus$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelWrapper$$Type = ($ServerLevelWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLevelWrapper_ = $ServerLevelWrapper$$Type;
}}
declare module "betterdays.wrappers.Wrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Wrapper<T> {

constructor(arg0: T)

public "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapper$$Type<T> = ($Wrapper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrapper_<T> = $Wrapper$$Type<(T)>;
}}
