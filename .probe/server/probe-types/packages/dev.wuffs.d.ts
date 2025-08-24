declare module "dev.wuffs.bcc.contract.ServerDataExtension" {
import {$BetterStatus, $BetterStatus$$Type} from "dev.wuffs.bcc.data.BetterStatus"

export interface $ServerDataExtension {

 "setBetterData"(arg0: $BetterStatus$$Type): void
 "getBetterData"(): $BetterStatus
set "betterData"(value: $BetterStatus$$Type)
get "betterData"(): $BetterStatus
}

export namespace $ServerDataExtension {
const probejs$$marker: never
}
export class $ServerDataExtension$$Static implements $ServerDataExtension {


 "setBetterData"(arg0: $BetterStatus$$Type): void
 "getBetterData"(): $BetterStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerDataExtension$$Type = ($ServerDataExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerDataExtension_ = $ServerDataExtension$$Type;
}}
declare module "dev.wuffs.bcc.data.BetterStatus" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BetterStatus extends $Record {
static "CODEC": $Codec<($BetterStatus)>

constructor(name: string, version: string, isMetaData: boolean)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): string
public "hashCode"(): integer
public "isMetaData"(): boolean
get "metaData"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterStatus$$Type = ({"isMetaData"?: boolean, "version"?: string, "name"?: string}) | ([isMetaData?: boolean, version?: string, name?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BetterStatus_ = $BetterStatus$$Type;
}}
