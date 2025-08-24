declare module "me.cominixo.betterf3.ducks.ChunkBuilderAccess" {
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $ChunkBuilderAccess {

 "betterF3$getQueuedTaskCount"(): integer
 "betterF3$getUploadQueue"(): $Queue<($Runnable)>
 "betterF3$getBufferCount"(): integer
}

export namespace $ChunkBuilderAccess {
const probejs$$marker: never
}
export class $ChunkBuilderAccess$$Static implements $ChunkBuilderAccess {


 "betterF3$getQueuedTaskCount"(): integer
 "betterF3$getUploadQueue"(): $Queue<($Runnable)>
 "betterF3$getBufferCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilderAccess$$Type = ($ChunkBuilderAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuilderAccess_ = $ChunkBuilderAccess$$Type;
}}
declare module "me.cominixo.betterf3.ducks.ClientChunkManagerAccess" {
import {$ClientChunkCache$Storage, $ClientChunkCache$Storage$$Type} from "net.minecraft.client.multiplayer.ClientChunkCache$Storage"

export interface $ClientChunkManagerAccess {

 "getChunks"(): $ClientChunkCache$Storage

(): $ClientChunkCache$Storage$$Type
get "chunks"(): $ClientChunkCache$Storage
}

export namespace $ClientChunkManagerAccess {
const probejs$$marker: never
}
export class $ClientChunkManagerAccess$$Static implements $ClientChunkManagerAccess {


 "getChunks"(): $ClientChunkCache$Storage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkManagerAccess$$Type = (() => $ClientChunkCache$Storage$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkManagerAccess_ = $ClientChunkManagerAccess$$Type;
}}
declare module "me.cominixo.betterf3.ducks.ClientChunkMapAccess" {
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$AtomicReferenceArray, $AtomicReferenceArray$$Type} from "java.util.concurrent.atomic.AtomicReferenceArray"

export interface $ClientChunkMapAccess {

 "getChunks"(): $AtomicReferenceArray<($LevelChunk)>

(): $AtomicReferenceArray$$Type<($LevelChunk$$Type)>
get "chunks"(): $AtomicReferenceArray<($LevelChunk)>
}

export namespace $ClientChunkMapAccess {
const probejs$$marker: never
}
export class $ClientChunkMapAccess$$Static implements $ClientChunkMapAccess {


 "getChunks"(): $AtomicReferenceArray<($LevelChunk)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkMapAccess$$Type = (() => $AtomicReferenceArray$$Type<($LevelChunk$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkMapAccess_ = $ClientChunkMapAccess$$Type;
}}
