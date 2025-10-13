declare module "javax.crypto.SecretKey" {
import {$Destroyable, $Destroyable$$Type} from "javax.security.auth.Destroyable"
import {$Key, $Key$$Type} from "java.security.Key"

export interface $SecretKey extends $Key, $Destroyable {

 "getEncoded"(): (byte)[]
 "getAlgorithm"(): StringJS
 "getFormat"(): StringJS
 "isDestroyed"(): boolean
 "destroy"(): void
get "encoded"(): (byte)[]
get "algorithm"(): StringJS
get "format"(): StringJS
get "destroyed"(): boolean
}

export namespace $SecretKey {
const serialVersionUID: long
const probejs$$marker: never
}
export class $SecretKey$$Static implements $SecretKey {
/**
 * 
 * @deprecated
 */
static readonly "serialVersionUID": long


 "getEncoded"(): (byte)[]
 "getAlgorithm"(): StringJS
 "getFormat"(): StringJS
 "isDestroyed"(): boolean
 "destroy"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecretKey$$Type = ($SecretKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecretKey_ = $SecretKey$$Type;
}}
declare module "javax.crypto.Cipher" {
import {$ExemptionMechanism, $ExemptionMechanism$$Type} from "javax.crypto.ExemptionMechanism"
import {$Certificate, $Certificate$$Type} from "java.security.cert.Certificate"
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$AlgorithmParameters, $AlgorithmParameters$$Type} from "java.security.AlgorithmParameters"
import {$SecureRandom, $SecureRandom$$Type} from "java.security.SecureRandom"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Key, $Key$$Type} from "java.security.Key"
import {$AlgorithmParameterSpec, $AlgorithmParameterSpec$$Type} from "java.security.spec.AlgorithmParameterSpec"

export class $Cipher {
static readonly "WRAP_MODE": integer
static readonly "UNWRAP_MODE": integer
static readonly "ENCRYPT_MODE": integer
static readonly "PUBLIC_KEY": integer
static readonly "PRIVATE_KEY": integer
static readonly "SECRET_KEY": integer
static readonly "DECRYPT_MODE": integer


public "getExemptionMechanism"(): $ExemptionMechanism
public "updateAAD"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "updateAAD"(arg0: $ByteBuffer$$Type): void
public "updateAAD"(arg0: (byte)[]): void
public "getOutputSize"(arg0: integer): integer
public "getIV"(): (byte)[]
public "doFinal"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: (byte)[], arg4: integer): integer
public "doFinal"(): (byte)[]
public "doFinal"(arg0: (byte)[], arg1: integer): integer
public "doFinal"(arg0: (byte)[]): (byte)[]
public "doFinal"(arg0: $ByteBuffer$$Type, arg1: $ByteBuffer$$Type): integer
public "doFinal"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: (byte)[]): integer
public "doFinal"(arg0: (byte)[], arg1: integer, arg2: integer): (byte)[]
public static "getMaxAllowedParameterSpec"(arg0: StringJS): $AlgorithmParameterSpec
public "unwrap"(arg0: (byte)[], arg1: StringJS, arg2: integer): $Key
public "getAlgorithm"(): StringJS
public "getProvider"(): $Provider
public "getBlockSize"(): integer
public "getParameters"(): $AlgorithmParameters
public static "getMaxAllowedKeyLength"(arg0: StringJS): integer
public "toString"(): StringJS
public "update"(arg0: (byte)[]): (byte)[]
public "update"(arg0: $ByteBuffer$$Type, arg1: $ByteBuffer$$Type): integer
public "update"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: (byte)[]): integer
public "update"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: (byte)[], arg4: integer): integer
public "update"(arg0: (byte)[], arg1: integer, arg2: integer): (byte)[]
public "wrap"(arg0: $Key$$Type): (byte)[]
public static "getInstance"(arg0: StringJS, arg1: $Provider$$Type): $Cipher
public static "getInstance"(arg0: StringJS, arg1: StringJS): $Cipher
public static "getInstance"(arg0: StringJS): $Cipher
public "init"(arg0: integer, arg1: $Key$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $AlgorithmParameterSpec$$Type, arg3: $SecureRandom$$Type): void
public "init"(arg0: integer, arg1: $Certificate$$Type, arg2: $SecureRandom$$Type): void
public "init"(arg0: integer, arg1: $Certificate$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $AlgorithmParameters$$Type, arg3: $SecureRandom$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $AlgorithmParameters$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $AlgorithmParameterSpec$$Type): void
public "init"(arg0: integer, arg1: $Key$$Type, arg2: $SecureRandom$$Type): void
get "exemptionMechanism"(): $ExemptionMechanism
get "iV"(): (byte)[]
get "algorithm"(): StringJS
get "provider"(): $Provider
get "blockSize"(): integer
get "parameters"(): $AlgorithmParameters
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cipher$$Type = ($Cipher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cipher_ = $Cipher$$Type;
}}
declare module "javax.crypto.spec.SecretKeySpec" {
import {$KeySpec, $KeySpec$$Type} from "java.security.spec.KeySpec"
import {$SecretKey, $SecretKey$$Type} from "javax.crypto.SecretKey"

export class $SecretKeySpec implements $KeySpec, $SecretKey {

constructor(arg0: (byte)[], arg1: StringJS)
constructor(arg0: (byte)[], arg1: integer, arg2: integer, arg3: StringJS)

public "getEncoded"(): (byte)[]
public "getAlgorithm"(): StringJS
public "getFormat"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isDestroyed"(): boolean
public "destroy"(): void
get "encoded"(): (byte)[]
get "algorithm"(): StringJS
get "format"(): StringJS
get "destroyed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecretKeySpec$$Type = ($SecretKeySpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecretKeySpec_ = $SecretKeySpec$$Type;
}}
declare module "javax.crypto.ExemptionMechanism" {
import {$Provider, $Provider$$Type} from "java.security.Provider"
import {$AlgorithmParameters, $AlgorithmParameters$$Type} from "java.security.AlgorithmParameters"
import {$Key, $Key$$Type} from "java.security.Key"
import {$AlgorithmParameterSpec, $AlgorithmParameterSpec$$Type} from "java.security.spec.AlgorithmParameterSpec"

export class $ExemptionMechanism {


public "isCryptoAllowed"(arg0: $Key$$Type): boolean
public "getOutputSize"(arg0: integer): integer
public "getProvider"(): $Provider
public "getName"(): StringJS
public static "getInstance"(arg0: StringJS): $ExemptionMechanism
public static "getInstance"(arg0: StringJS, arg1: StringJS): $ExemptionMechanism
public static "getInstance"(arg0: StringJS, arg1: $Provider$$Type): $ExemptionMechanism
public "init"(arg0: $Key$$Type, arg1: $AlgorithmParameters$$Type): void
public "init"(arg0: $Key$$Type, arg1: $AlgorithmParameterSpec$$Type): void
public "init"(arg0: $Key$$Type): void
public "genExemptionBlob"(arg0: (byte)[], arg1: integer): integer
public "genExemptionBlob"(arg0: (byte)[]): integer
public "genExemptionBlob"(): (byte)[]
get "provider"(): $Provider
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExemptionMechanism$$Type = ($ExemptionMechanism);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExemptionMechanism_ = $ExemptionMechanism$$Type;
}}
