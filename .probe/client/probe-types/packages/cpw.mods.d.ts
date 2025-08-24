declare module "cpw.mods.jarhandling.SecureJar$Status" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $SecureJar$Status extends $Enum<($SecureJar$Status)> {
static readonly "UNVERIFIED": $SecureJar$Status
static readonly "NONE": $SecureJar$Status
static readonly "INVALID": $SecureJar$Status
static readonly "VERIFIED": $SecureJar$Status


public static "values"(): ($SecureJar$Status)[]
public static "valueOf"(arg0: string): $SecureJar$Status
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecureJar$Status$$Type = (("none") | ("invalid") | ("unverified") | ("verified"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecureJar$Status_ = $SecureJar$Status$$Type;
}}
declare module "cpw.mods.jarhandling.SecureJar" {
import {$Attributes, $Attributes$$Type} from "java.util.jar.Attributes"
import {$JarContents, $JarContents$$Type} from "cpw.mods.jarhandling.JarContents"
import {$SecureJar$ModuleDataProvider, $SecureJar$ModuleDataProvider$$Type} from "cpw.mods.jarhandling.SecureJar$ModuleDataProvider"
import {$SecureJar$Status, $SecureJar$Status$$Type} from "cpw.mods.jarhandling.SecureJar$Status"
import {$JarMetadata, $JarMetadata$$Type} from "cpw.mods.jarhandling.JarMetadata"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$CodeSigner, $CodeSigner$$Type} from "java.security.CodeSigner"

export interface $SecureJar {

 "name"(): string
 "close"(): void
 "getPath"(arg0: string, ...arg1: (string)[]): $Path
 "getTrustedManifestEntries"(arg0: string): $Attributes
 "getPrimaryPath"(): $Path
 "getFileStatus"(arg0: string): $SecureJar$Status
 "verifyPath"(arg0: $Path$$Type): $SecureJar$Status
 "getRootPath"(): $Path
 "moduleDataProvider"(): $SecureJar$ModuleDataProvider
 "hasSecurityData"(): boolean
 "getManifestSigners"(): ($CodeSigner)[]
get "primaryPath"(): $Path
get "rootPath"(): $Path
get "manifestSigners"(): ($CodeSigner)[]
}

export namespace $SecureJar {
function from(arg0: $JarContents$$Type, arg1: $JarMetadata$$Type): $SecureJar
function from(arg0: $JarContents$$Type): $SecureJar
function from(...arg0: ($Path$$Type)[]): $SecureJar
const probejs$$marker: never
}
export class $SecureJar$$Static implements $SecureJar {


 "name"(): string
static "from"(arg0: $JarContents$$Type, arg1: $JarMetadata$$Type): $SecureJar
static "from"(arg0: $JarContents$$Type): $SecureJar
static "from"(...arg0: ($Path$$Type)[]): $SecureJar
 "close"(): void
 "getPath"(arg0: string, ...arg1: (string)[]): $Path
 "getTrustedManifestEntries"(arg0: string): $Attributes
 "getPrimaryPath"(): $Path
 "getFileStatus"(arg0: string): $SecureJar$Status
 "verifyPath"(arg0: $Path$$Type): $SecureJar$Status
 "getRootPath"(): $Path
 "moduleDataProvider"(): $SecureJar$ModuleDataProvider
 "hasSecurityData"(): boolean
 "getManifestSigners"(): ($CodeSigner)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecureJar$$Type = ($SecureJar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecureJar_ = $SecureJar$$Type;
}}
