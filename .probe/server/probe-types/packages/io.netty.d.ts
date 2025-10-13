declare module "io.netty.buffer.ByteBuf" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ByteBufConvertible, $ByteBufConvertible$$Type} from "io.netty.buffer.ByteBufConvertible"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"
import {$ByteProcessor, $ByteProcessor$$Type} from "io.netty.util.ByteProcessor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuf implements $ReferenceCounted, $Comparable<($ByteBuf)>, $ByteBufConvertible {

constructor()

public "unwrap"(): $ByteBuf
public "capacity"(arg0: integer): $ByteBuf
public "capacity"(): integer
public "isReadOnly"(): boolean
public "slice"(): $ByteBuf
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "duplicate"(): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $GatheringByteChannel$$Type, arg1: integer): integer
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: $InputStream$$Type, arg1: integer): integer
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $ScatteringByteChannel$$Type, arg1: integer): integer
public "writeBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "getUnsignedShort"(arg0: integer): integer
public "isReadable"(arg0: integer): boolean
public "isReadable"(): boolean
public "isWritable"(): boolean
public "isWritable"(arg0: integer): boolean
public "readUnsignedByte"(): short
public "readUnsignedShort"(): integer
public "writeShort"(arg0: integer): $ByteBuf
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readShort"(): short
public "readLong"(): long
public "readDouble"(): double
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "asReadOnly"(): $ByteBuf
/**
 * 
 * @deprecated
 */
public "order"(arg0: $ByteOrder$$Type): $ByteBuf
/**
 * 
 * @deprecated
 */
public "order"(): $ByteOrder
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$$Type): StringJS
public "toString"(arg0: $Charset$$Type): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ByteBuf$$Type): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$$Type, arg2: integer): integer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(): $ByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "alloc"(): $ByteBufAllocator
public "touch"(): $ByteBuf
public "touch"(arg0: any): $ReferenceCounted
public "retain"(arg0: integer): $ReferenceCounted
public "retain"(): $ReferenceCounted
public "readerIndex"(arg0: integer): $ByteBuf
public "readerIndex"(): integer
public "writerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(): integer
public "readableBytes"(): integer
public "writableBytes"(): integer
public "ensureWritable"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "getShortLE"(arg0: integer): short
public "getMedium"(arg0: integer): integer
public "getMediumLE"(arg0: integer): integer
public "getIntLE"(arg0: integer): integer
public "getLongLE"(arg0: integer): long
public "getFloatLE"(arg0: integer): float
public "getDoubleLE"(arg0: integer): double
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "setFloatLE"(arg0: integer, arg1: float): $ByteBuf
public "setDoubleLE"(arg0: integer, arg1: double): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $InputStream$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "readShortLE"(): short
public "readMedium"(): integer
public "readMediumLE"(): integer
public "readIntLE"(): integer
public "readLongLE"(): long
public "readFloatLE"(): float
public "readDoubleLE"(): double
public "readSlice"(arg0: integer): $ByteBuf
public "writeShortLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "writeMediumLE"(arg0: integer): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "writeLongLE"(arg0: long): $ByteBuf
public "writeFloatLE"(arg0: float): $ByteBuf
public "writeDoubleLE"(arg0: double): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: byte): integer
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "nioBufferCount"(): integer
public "nioBuffer"(): $ByteBuffer
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "isContiguous"(): boolean
public "asByteBuf"(): $ByteBuf
public "getUnsignedInt"(arg0: integer): long
public "memoryAddress"(): long
public "maxCapacity"(): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: $ByteProcessor$$Type): integer
public "readUnsignedShortLE"(): integer
public "readUnsignedMedium"(): integer
public "readUnsignedMediumLE"(): integer
public "readUnsignedInt"(): long
public "readUnsignedIntLE"(): long
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$$Type): charseq
public "writeCharSequence"(arg0: charseq, arg1: $Charset$$Type): integer
public "retainedDuplicate"(): $ByteBuf
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "hasMemoryAddress"(): boolean
public "maxWritableBytes"(): integer
public "maxFastWritableBytes"(): integer
public "markReaderIndex"(): $ByteBuf
public "resetReaderIndex"(): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "resetWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "discardSomeReadBytes"(): $ByteBuf
public "getUnsignedByte"(arg0: integer): short
public "getUnsignedShortLE"(arg0: integer): integer
public "getUnsignedMedium"(arg0: integer): integer
public "getUnsignedMediumLE"(arg0: integer): integer
public "getUnsignedIntLE"(arg0: integer): long
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$$Type): charseq
public "release"(arg0: integer): boolean
public "release"(): boolean
public "refCnt"(): integer
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
get "direct"(): boolean
get "contiguous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBuf$$Type = ($ByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBuf_ = $ByteBuf$$Type;
}}
declare module "io.netty.channel.MessageSizeEstimator" {
import {$MessageSizeEstimator$Handle, $MessageSizeEstimator$Handle$$Type} from "io.netty.channel.MessageSizeEstimator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator {

 "newHandle"(): $MessageSizeEstimator$Handle

(): $MessageSizeEstimator$Handle$$Type
}

export namespace $MessageSizeEstimator {
const probejs$$marker: never
}
export class $MessageSizeEstimator$$Static implements $MessageSizeEstimator {


 "newHandle"(): $MessageSizeEstimator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$$Type = (() => $MessageSizeEstimator$Handle$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSizeEstimator_ = $MessageSizeEstimator$$Type;
}}
declare module "io.netty.util.concurrent.AbstractEventExecutorGroup" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$$Type as $ScheduledFuture$0$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "java.util.concurrent.ScheduledFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutorGroup implements $EventExecutorGroup {

constructor()

public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future<(any)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$$Type): void
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture$0<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future$0<(any)>
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
public "terminationFuture"(): $Future$0<(any)>
public "spliterator"(): $Spliterator<($EventExecutor)>
public "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
public "isShutdown"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
public "isTerminated"(): boolean
public "close"(): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEventExecutorGroup$$Type = ($AbstractEventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEventExecutorGroup_ = $AbstractEventExecutorGroup$$Type;
}}
declare module "io.netty.util.concurrent.RejectedExecutionHandler" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$SingleThreadEventExecutor, $SingleThreadEventExecutor$$Type} from "io.netty.util.concurrent.SingleThreadEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RejectedExecutionHandler {

 "rejected"(arg0: $Runnable$$Type, arg1: $SingleThreadEventExecutor$$Type): void

(arg0: $Runnable, arg1: $SingleThreadEventExecutor): void
}

export namespace $RejectedExecutionHandler {
const probejs$$marker: never
}
export class $RejectedExecutionHandler$$Static implements $RejectedExecutionHandler {


 "rejected"(arg0: $Runnable$$Type, arg1: $SingleThreadEventExecutor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RejectedExecutionHandler$$Type = ((arg0: $Runnable, arg1: $SingleThreadEventExecutor) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RejectedExecutionHandler_ = $RejectedExecutionHandler$$Type;
}}
declare module "io.netty.channel.SelectStrategy" {
import {$IntSupplier, $IntSupplier$$Type} from "io.netty.util.IntSupplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategy {

 "calculateStrategy"(arg0: $IntSupplier$$Type, arg1: boolean): integer

(arg0: $IntSupplier, arg1: boolean): integer
}

export namespace $SelectStrategy {
const CONTINUE: integer
const BUSY_WAIT: integer
const SELECT: integer
const probejs$$marker: never
}
export class $SelectStrategy$$Static implements $SelectStrategy {
static readonly "CONTINUE": integer
static readonly "BUSY_WAIT": integer
static readonly "SELECT": integer


 "calculateStrategy"(arg0: $IntSupplier$$Type, arg1: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategy$$Type = ((arg0: $IntSupplier, arg1: boolean) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectStrategy_ = $SelectStrategy$$Type;
}}
declare module "io.netty.util.concurrent.ScheduledFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Delayed, $Delayed$$Type} from "java.util.concurrent.Delayed"
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$$Type as $ScheduledFuture$0$$Type} from "java.util.concurrent.ScheduledFuture"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScheduledFuture<V> extends $Future<(V)>, $ScheduledFuture$0<(V)> {

 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "sync"(): $Future<(V)>
 "getNow"(): V
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
export class $ScheduledFuture$$Static<V> implements $ScheduledFuture {


 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "sync"(): $Future<(V)>
 "getNow"(): V
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledFuture$$Type<V> = ($ScheduledFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledFuture_<V> = $ScheduledFuture$$Type<(V)>;
}}
declare module "io.netty.channel.SimpleChannelInboundHandler" {
import {$ChannelInboundHandlerAdapter, $ChannelInboundHandlerAdapter$$Type} from "io.netty.channel.ChannelInboundHandlerAdapter"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SimpleChannelInboundHandler<I> extends $ChannelInboundHandlerAdapter {


public "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "acceptInboundMessage"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleChannelInboundHandler$$Type<I> = ($SimpleChannelInboundHandler<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleChannelInboundHandler_<I> = $SimpleChannelInboundHandler$$Type<(I)>;
}}
declare module "io.netty.util.AttributeKey" {
import {$AbstractConstant, $AbstractConstant$$Type} from "io.netty.util.AbstractConstant"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AttributeKey<T> extends $AbstractConstant<($AttributeKey<(T)>)> {


public static "exists"(arg0: StringJS): boolean
public static "valueOf"<T>(arg0: StringJS): $AttributeKey<(T)>
public static "valueOf"<T>(arg0: $Class$$Type<(any)>, arg1: StringJS): $AttributeKey<(T)>
public static "newInstance"<T>(arg0: StringJS): $AttributeKey<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeKey$$Type<T> = ($AttributeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeKey_<T> = $AttributeKey$$Type<(T)>;
}}
declare module "io.netty.channel.ChannelHandler" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandler {

 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
}

export namespace $ChannelHandler {
const probejs$$marker: never
}
export class $ChannelHandler$$Static implements $ChannelHandler {


 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandler$$Type = ($ChannelHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandler_ = $ChannelHandler$$Type;
}}
declare module "io.netty.channel.ChannelHandlerAdapter" {
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelHandlerAdapter implements $ChannelHandler {

constructor()

public "isSharable"(): boolean
public "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
public "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
public "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
get "sharable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerAdapter$$Type = ($ChannelHandlerAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandlerAdapter_ = $ChannelHandlerAdapter$$Type;
}}
declare module "io.netty.buffer.ByteBufAllocator" {
import {$CompositeByteBuf, $CompositeByteBuf$$Type} from "io.netty.buffer.CompositeByteBuf"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufAllocator {

 "directBuffer"(): $ByteBuf
 "directBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "directBuffer"(arg0: integer): $ByteBuf
 "buffer"(arg0: integer, arg1: integer): $ByteBuf
 "buffer"(arg0: integer): $ByteBuf
 "buffer"(): $ByteBuf
 "ioBuffer"(arg0: integer): $ByteBuf
 "ioBuffer"(): $ByteBuf
 "ioBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "heapBuffer"(): $ByteBuf
 "heapBuffer"(arg0: integer): $ByteBuf
 "heapBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "compositeBuffer"(): $CompositeByteBuf
 "compositeBuffer"(arg0: integer): $CompositeByteBuf
 "compositeHeapBuffer"(arg0: integer): $CompositeByteBuf
 "compositeHeapBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(arg0: integer): $CompositeByteBuf
 "compositeDirectBuffer"(): $CompositeByteBuf
 "isDirectBufferPooled"(): boolean
 "calculateNewCapacity"(arg0: integer, arg1: integer): integer
get "directBufferPooled"(): boolean
}

export namespace $ByteBufAllocator {
const DEFAULT: $ByteBufAllocator
const probejs$$marker: never
}
export class $ByteBufAllocator$$Static implements $ByteBufAllocator {
static readonly "DEFAULT": $ByteBufAllocator


 "directBuffer"(): $ByteBuf
 "directBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "directBuffer"(arg0: integer): $ByteBuf
 "buffer"(arg0: integer, arg1: integer): $ByteBuf
 "buffer"(arg0: integer): $ByteBuf
 "buffer"(): $ByteBuf
 "ioBuffer"(arg0: integer): $ByteBuf
 "ioBuffer"(): $ByteBuf
 "ioBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "heapBuffer"(): $ByteBuf
 "heapBuffer"(arg0: integer): $ByteBuf
 "heapBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "compositeBuffer"(): $CompositeByteBuf
 "compositeBuffer"(arg0: integer): $CompositeByteBuf
 "compositeHeapBuffer"(arg0: integer): $CompositeByteBuf
 "compositeHeapBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(arg0: integer): $CompositeByteBuf
 "compositeDirectBuffer"(): $CompositeByteBuf
 "isDirectBufferPooled"(): boolean
 "calculateNewCapacity"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufAllocator$$Type = ($ByteBufAllocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufAllocator_ = $ByteBufAllocator$$Type;
}}
declare module "io.netty.channel.MessageSizeEstimator$Handle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator$Handle {

 "size"(arg0: any): integer

(arg0: any): integer
}

export namespace $MessageSizeEstimator$Handle {
const probejs$$marker: never
}
export class $MessageSizeEstimator$Handle$$Static implements $MessageSizeEstimator$Handle {


 "size"(arg0: any): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$Handle$$Type = ((arg0: any) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSizeEstimator$Handle_ = $MessageSizeEstimator$Handle$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutor" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutor extends $EventExecutorGroup {

 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "inEventLoop"(): boolean
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutor {
const probejs$$marker: never
}
export class $EventExecutor$$Static implements $EventExecutor {


 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "inEventLoop"(): boolean
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutor$$Type = ($EventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutor_ = $EventExecutor$$Type;
}}
declare module "io.netty.channel.ChannelOutboundInvoker" {
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundInvoker {

 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "flush"(): $ChannelOutboundInvoker
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
}

export namespace $ChannelOutboundInvoker {
const probejs$$marker: never
}
export class $ChannelOutboundInvoker$$Static implements $ChannelOutboundInvoker {


 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "flush"(): $ChannelOutboundInvoker
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundInvoker$$Type = ($ChannelOutboundInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundInvoker_ = $ChannelOutboundInvoker$$Type;
}}
declare module "io.netty.util.AttributeMap" {
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$Attribute, $Attribute$$Type} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeMap {

 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
}

export namespace $AttributeMap {
const probejs$$marker: never
}
export class $AttributeMap$$Static implements $AttributeMap {


 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeMap$$Type = ($AttributeMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeMap_ = $AttributeMap$$Type;
}}
declare module "io.netty.channel.EventLoopTaskQueueFactory" {
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopTaskQueueFactory {

 "newTaskQueue"(arg0: integer): $Queue<($Runnable)>

(arg0: integer): $Queue$$Type<($Runnable$$Type)>
}

export namespace $EventLoopTaskQueueFactory {
const probejs$$marker: never
}
export class $EventLoopTaskQueueFactory$$Static implements $EventLoopTaskQueueFactory {


 "newTaskQueue"(arg0: integer): $Queue<($Runnable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoopTaskQueueFactory$$Type = ((arg0: integer) => $Queue$$Type<($Runnable$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoopTaskQueueFactory_ = $EventLoopTaskQueueFactory$$Type;
}}
declare module "io.netty.util.ByteProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteProcessor {

 "process"(arg0: byte): boolean

(arg0: byte): boolean
}

export namespace $ByteProcessor {
const FIND_NUL: $ByteProcessor
const FIND_COMMA: $ByteProcessor
const FIND_CR: $ByteProcessor
const FIND_ASCII_SPACE: $ByteProcessor
const FIND_NON_CR: $ByteProcessor
const FIND_NON_CRLF: $ByteProcessor
const FIND_LF: $ByteProcessor
const FIND_LINEAR_WHITESPACE: $ByteProcessor
const FIND_NON_LINEAR_WHITESPACE: $ByteProcessor
const FIND_SEMI_COLON: $ByteProcessor
const FIND_NON_NUL: $ByteProcessor
const FIND_CRLF: $ByteProcessor
const FIND_NON_LF: $ByteProcessor
const probejs$$marker: never
}
export class $ByteProcessor$$Static implements $ByteProcessor {
static readonly "FIND_NUL": $ByteProcessor
static readonly "FIND_COMMA": $ByteProcessor
static readonly "FIND_CR": $ByteProcessor
static readonly "FIND_ASCII_SPACE": $ByteProcessor
static readonly "FIND_NON_CR": $ByteProcessor
static readonly "FIND_NON_CRLF": $ByteProcessor
static readonly "FIND_LF": $ByteProcessor
static readonly "FIND_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_NON_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_SEMI_COLON": $ByteProcessor
static readonly "FIND_NON_NUL": $ByteProcessor
static readonly "FIND_CRLF": $ByteProcessor
static readonly "FIND_NON_LF": $ByteProcessor


 "process"(arg0: byte): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteProcessor$$Type = ((arg0: byte) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteProcessor_ = $ByteProcessor$$Type;
}}
declare module "io.netty.channel.EventLoop" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$EventLoopGroup, $EventLoopGroup$$Type} from "io.netty.channel.EventLoopGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"
import {$OrderedEventExecutor, $OrderedEventExecutor$$Type} from "io.netty.util.concurrent.OrderedEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoop extends $OrderedEventExecutor, $EventLoopGroup {

 "parent"(): $EventLoopGroup
 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
 "newPromise"<V>(): $Promise<(V)>
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "inEventLoop"(): boolean
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoop {
const probejs$$marker: never
}
export class $EventLoop$$Static implements $EventLoop {


 "parent"(): $EventLoopGroup
 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
 "newPromise"<V>(): $Promise<(V)>
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "inEventLoop"(): boolean
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoop$$Type = ($EventLoop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoop_ = $EventLoop$$Type;
}}
declare module "io.netty.util.AbstractConstant" {
import {$Constant, $Constant$$Type} from "io.netty.util.Constant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractConstant<T extends $AbstractConstant<(T)>> implements $Constant<(T)> {


public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: T): integer
public "compareTo"(arg0: any): integer
public "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConstant$$Type<T> = ($AbstractConstant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConstant_<T> = $AbstractConstant$$Type<(T)>;
}}
declare module "io.netty.buffer.AbstractByteBuf" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"
import {$ByteProcessor, $ByteProcessor$$Type} from "io.netty.util.ByteProcessor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractByteBuf extends $ByteBuf {


public "isReadOnly"(): boolean
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "slice"(): $ByteBuf
public "duplicate"(): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: $GatheringByteChannel$$Type, arg1: integer): integer
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: $InputStream$$Type, arg1: integer): integer
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: $ScatteringByteChannel$$Type, arg1: integer): integer
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "getUnsignedShort"(arg0: integer): integer
public "isReadable"(): boolean
public "isReadable"(arg0: integer): boolean
public "isWritable"(arg0: integer): boolean
public "isWritable"(): boolean
public "readUnsignedByte"(): short
public "readUnsignedShort"(): integer
public "writeShort"(arg0: integer): $ByteBuf
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readShort"(): short
public "readLong"(): long
public "readDouble"(): double
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "asReadOnly"(): $ByteBuf
public "order"(arg0: $ByteOrder$$Type): $ByteBuf
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "toString"(arg0: $Charset$$Type): StringJS
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$$Type): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ByteBuf$$Type): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(): $ByteBuf
public "readerIndex"(arg0: integer): $ByteBuf
public "readerIndex"(): integer
public "writerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(): integer
public "readableBytes"(): integer
public "writableBytes"(): integer
public "ensureWritable"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "getShortLE"(arg0: integer): short
public "getMedium"(arg0: integer): integer
public "getMediumLE"(arg0: integer): integer
public "getIntLE"(arg0: integer): integer
public "getLongLE"(arg0: integer): long
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "readShortLE"(): short
public "readMedium"(): integer
public "readMediumLE"(): integer
public "readIntLE"(): integer
public "readLongLE"(): long
public "readSlice"(arg0: integer): $ByteBuf
public "writeShortLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "writeMediumLE"(arg0: integer): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "writeLongLE"(arg0: long): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: byte): integer
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "nioBuffer"(): $ByteBuffer
public "nioBuffers"(): ($ByteBuffer)[]
public "getUnsignedInt"(arg0: integer): long
public "maxCapacity"(): integer
public "forEachByte"(arg0: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "readUnsignedShortLE"(): integer
public "readUnsignedMedium"(): integer
public "readUnsignedMediumLE"(): integer
public "readUnsignedInt"(): long
public "readUnsignedIntLE"(): long
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$$Type): charseq
public "writeCharSequence"(arg0: charseq, arg1: $Charset$$Type): integer
public "retainedDuplicate"(): $ByteBuf
public "maxWritableBytes"(): integer
public "markReaderIndex"(): $ByteBuf
public "resetReaderIndex"(): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "resetWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "discardSomeReadBytes"(): $ByteBuf
public "getUnsignedByte"(arg0: integer): short
public "getUnsignedShortLE"(arg0: integer): integer
public "getUnsignedMedium"(arg0: integer): integer
public "getUnsignedMediumLE"(arg0: integer): integer
public "getUnsignedIntLE"(arg0: integer): long
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$$Type): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$$Type): integer
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$$Type): charseq
public "touch"(arg0: any): $ReferenceCounted
public "retain"(arg0: integer): $ReferenceCounted
public "retain"(): $ReferenceCounted
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractByteBuf$$Type = ($AbstractByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractByteBuf_ = $AbstractByteBuf$$Type;
}}
declare module "io.netty.util.concurrent.GenericFutureListener" {
import {$EventListener, $EventListener$$Type} from "java.util.EventListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericFutureListener<F extends $Future<(any)>> extends $EventListener {

 "operationComplete"(arg0: F): void

(arg0: F): void
}

export namespace $GenericFutureListener {
const probejs$$marker: never
}
export class $GenericFutureListener$$Static<F extends $Future<(any)>> implements $GenericFutureListener {


 "operationComplete"(arg0: F): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericFutureListener$$Type<F> = ((arg0: F) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericFutureListener_<F> = $GenericFutureListener$$Type<(F)>;
}}
declare module "io.netty.channel.WriteBufferWaterMark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WriteBufferWaterMark {
static readonly "DEFAULT": $WriteBufferWaterMark

constructor(arg0: integer, arg1: integer)

public "high"(): integer
public "low"(): integer
public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriteBufferWaterMark$$Type = ($WriteBufferWaterMark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WriteBufferWaterMark_ = $WriteBufferWaterMark$$Type;
}}
declare module "io.netty.util.IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IntSupplier {

 "get"(): integer

(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
export class $IntSupplier$$Static implements $IntSupplier {


 "get"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSupplier$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntSupplier_ = $IntSupplier$$Type;
}}
declare module "io.netty.channel.ChannelPromise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPromise extends $ChannelFuture, $Promise<(void)> {

 "awaitUninterruptibly"(): $ChannelPromise
 "sync"(): $ChannelPromise
 "channel"(): $Channel
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "await"(): $ChannelPromise
 "unvoid"(): $ChannelPromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "trySuccess"(): boolean
 "setFailure"(arg0: $Throwable$$Type): $ChannelPromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "setSuccess"(): $ChannelPromise
 "setSuccess"(arg0: void): $ChannelPromise
 "syncUninterruptibly"(): $ChannelPromise
 "isVoid"(): boolean
 "trySuccess"(arg0: void): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setSuccess"(arg0: void): $Promise<(void)>
 "setUncancellable"(): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
 "get"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "state"(): $Future$State
 "isDone"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: void)
get "void"(): boolean
set "success"(value: void)
get "now"(): void
get "cancellable"(): boolean
get "success"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ChannelPromise {
const probejs$$marker: never
}
export class $ChannelPromise$$Static implements $ChannelPromise {


 "awaitUninterruptibly"(): $ChannelPromise
 "sync"(): $ChannelPromise
 "channel"(): $Channel
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "await"(): $ChannelPromise
 "unvoid"(): $ChannelPromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "trySuccess"(): boolean
 "setFailure"(arg0: $Throwable$$Type): $ChannelPromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "setSuccess"(): $ChannelPromise
 "setSuccess"(arg0: void): $ChannelPromise
 "syncUninterruptibly"(): $ChannelPromise
 "isVoid"(): boolean
 "trySuccess"(arg0: void): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setSuccess"(arg0: void): $Promise<(void)>
 "setUncancellable"(): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
 "get"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "state"(): $Future$State
 "isDone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPromise$$Type = ($ChannelPromise);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelPromise_ = $ChannelPromise$$Type;
}}
declare module "io.netty.channel.Channel" {
import {$EventLoop, $EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$ChannelConfig, $ChannelConfig$$Type} from "io.netty.channel.ChannelConfig"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Channel$Unsafe, $Channel$Unsafe$$Type} from "io.netty.channel.Channel$Unsafe"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ChannelId, $ChannelId$$Type} from "io.netty.channel.ChannelId"
import {$ChannelPipeline, $ChannelPipeline$$Type} from "io.netty.channel.ChannelPipeline"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Type} from "io.netty.channel.ChannelOutboundInvoker"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$AttributeMap, $AttributeMap$$Type} from "io.netty.util.AttributeMap"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$ChannelMetadata, $ChannelMetadata$$Type} from "io.netty.channel.ChannelMetadata"
import {$Attribute, $Attribute$$Type} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel extends $AttributeMap, $ChannelOutboundInvoker, $Comparable<($Channel)> {

 "isActive"(): boolean
 "config"(): $ChannelConfig
 "isWritable"(): boolean
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "parent"(): $Channel
 "flush"(): $Channel
 "isOpen"(): boolean
 "isRegistered"(): boolean
 "id"(): $ChannelId
 "unsafe"(): $Channel$Unsafe
 "read"(): $Channel
 "alloc"(): $ByteBufAllocator
 "pipeline"(): $ChannelPipeline
 "metadata"(): $ChannelMetadata
 "eventLoop"(): $EventLoop
 "closeFuture"(): $ChannelFuture
 "bytesBeforeUnwritable"(): long
 "bytesBeforeWritable"(): long
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "compareTo"(arg0: $Channel$$Type): integer
get "active"(): boolean
get "writable"(): boolean
get "open"(): boolean
get "registered"(): boolean
}

export namespace $Channel {
const probejs$$marker: never
}
export class $Channel$$Static implements $Channel {


 "isActive"(): boolean
 "config"(): $ChannelConfig
 "isWritable"(): boolean
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "parent"(): $Channel
 "flush"(): $Channel
 "isOpen"(): boolean
 "isRegistered"(): boolean
 "id"(): $ChannelId
 "unsafe"(): $Channel$Unsafe
 "read"(): $Channel
 "alloc"(): $ByteBufAllocator
 "pipeline"(): $ChannelPipeline
 "metadata"(): $ChannelMetadata
 "eventLoop"(): $EventLoop
 "closeFuture"(): $ChannelFuture
 "bytesBeforeUnwritable"(): long
 "bytesBeforeWritable"(): long
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "compareTo"(arg0: $Channel$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$$Type = ($Channel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channel_ = $Channel$$Type;
}}
declare module "io.netty.buffer.CompositeByteBuf" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$AbstractReferenceCountedByteBuf, $AbstractReferenceCountedByteBuf$$Type} from "io.netty.buffer.AbstractReferenceCountedByteBuf"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CompositeByteBuf extends $AbstractReferenceCountedByteBuf implements $Iterable<($ByteBuf)> {

constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer, ...arg3: ($ByteBuf$$Type)[])
constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer)
constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer, arg3: $Iterable$$Type<($ByteBuf$$Type)>)

public "unwrap"(): $ByteBuf
public "capacity"(arg0: integer): $CompositeByteBuf
public "capacity"(): integer
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[]): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $CompositeByteBuf
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "writeShort"(arg0: integer): $ByteBuf
public "skipBytes"(arg0: integer): $CompositeByteBuf
public "writeBoolean"(arg0: boolean): $CompositeByteBuf
public "writeByte"(arg0: integer): $CompositeByteBuf
public "writeLong"(arg0: long): $CompositeByteBuf
public "writeDouble"(arg0: double): $CompositeByteBuf
public "order"(): $ByteOrder
public "writeChar"(arg0: integer): $ByteBuf
public "writeFloat"(arg0: float): $CompositeByteBuf
public "toString"(): StringJS
public "getByte"(arg0: integer): byte
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$$Type, arg2: integer): integer
public "iterator"(): $Iterator<($ByteBuf)>
public "component"(arg0: integer): $ByteBuf
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "writeInt"(arg0: integer): $CompositeByteBuf
public "setBoolean"(arg0: integer, arg1: boolean): $CompositeByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $CompositeByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "decompose"(arg0: integer, arg1: integer): $List<($ByteBuf)>
public "alloc"(): $ByteBufAllocator
public "touch"(arg0: any): $CompositeByteBuf
public "touch"(): $ByteBuf
public "retain"(arg0: integer): $ByteBuf
public "retain"(): $ReferenceCounted
public "readerIndex"(arg0: integer): $CompositeByteBuf
public "writerIndex"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "setMedium"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $InputStream$$Type, arg2: integer): integer
public "setZero"(arg0: integer, arg1: integer): $CompositeByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "nioBufferCount"(): integer
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "memoryAddress"(): long
public "addComponent"(arg0: boolean, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: integer, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: boolean, arg1: integer, arg2: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: $ByteBuf$$Type): $CompositeByteBuf
public "addComponents"(arg0: integer, ...arg1: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: integer, arg1: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(...arg0: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(arg0: boolean, arg1: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(arg0: boolean, ...arg1: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "numComponents"(): integer
public "toByteIndex"(arg0: integer): integer
public "consolidate"(arg0: integer, arg1: integer): $CompositeByteBuf
public "consolidate"(): $CompositeByteBuf
public "addFlattenedComponents"(arg0: boolean, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "maxNumComponents"(): integer
public "removeComponent"(arg0: integer): $CompositeByteBuf
public "removeComponents"(arg0: integer, arg1: integer): $CompositeByteBuf
public "toComponentIndex"(arg0: integer): integer
public "componentAtOffset"(arg0: integer): $ByteBuf
public "internalComponent"(arg0: integer): $ByteBuf
public "discardReadComponents"(): $CompositeByteBuf
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "hasMemoryAddress"(): boolean
public "markReaderIndex"(): $CompositeByteBuf
public "resetReaderIndex"(): $CompositeByteBuf
public "markWriterIndex"(): $CompositeByteBuf
public "resetWriterIndex"(): $CompositeByteBuf
public "discardReadBytes"(): $CompositeByteBuf
public "discardSomeReadBytes"(): $CompositeByteBuf
public "internalComponentAtOffset"(arg0: integer): $ByteBuf
public "spliterator"(): $Spliterator<($ByteBuf)>
public "forEach"(arg0: $Consumer$$Type<($ByteBuf)>): void
[Symbol.iterator](): IterableIterator<$ByteBuf>;
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeByteBuf$$Type = ($CompositeByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeByteBuf_ = $CompositeByteBuf$$Type;
}}
declare module "io.netty.channel.epoll.EpollEventLoopGroup" {
import {$SelectStrategyFactory, $SelectStrategyFactory$$Type} from "io.netty.channel.SelectStrategyFactory"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$List, $List$$Type} from "java.util.List"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$EventExecutorChooserFactory, $EventExecutorChooserFactory$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory"
import {$EventLoopTaskQueueFactory, $EventLoopTaskQueueFactory$$Type} from "io.netty.channel.EventLoopTaskQueueFactory"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$RejectedExecutionHandler, $RejectedExecutionHandler$$Type} from "io.netty.util.concurrent.RejectedExecutionHandler"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$$Type} from "io.netty.channel.MultithreadEventLoopGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $EpollEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectStrategyFactory$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: integer, arg3: $SelectStrategyFactory$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: integer)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type, arg4: $RejectedExecutionHandler$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type, arg4: $RejectedExecutionHandler$$Type, arg5: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type, arg4: $RejectedExecutionHandler$$Type, arg5: $EventLoopTaskQueueFactory$$Type, arg6: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $SelectStrategyFactory$$Type)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer)
constructor()
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)

public "setIoRatio"(arg0: integer): void
public "next"(): $EventExecutor
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
set "ioRatio"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpollEventLoopGroup$$Type = ($EpollEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpollEventLoopGroup_ = $EpollEventLoopGroup$$Type;
}}
declare module "io.netty.channel.ChannelInboundHandler" {
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundHandler extends $ChannelHandler {

 "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelActive"(arg0: $ChannelHandlerContext$$Type): void
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
 "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
 "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
 "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
}

export namespace $ChannelInboundHandler {
const probejs$$marker: never
}
export class $ChannelInboundHandler$$Static implements $ChannelInboundHandler {


 "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelActive"(arg0: $ChannelHandlerContext$$Type): void
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
 "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
 "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
 "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandler$$Type = ($ChannelInboundHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundHandler_ = $ChannelInboundHandler$$Type;
}}
declare module "io.netty.util.concurrent.Future" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Future<V> extends $Future$0<(V)> {

 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "sync"(): $Future<(V)>
 "getNow"(): V
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
export class $Future$$Static<V> implements $Future {


 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "sync"(): $Future<(V)>
 "getNow"(): V
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "syncUninterruptibly"(): $Future<(V)>
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$$Type<V> = ($Future<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Future_<V> = $Future$$Type<(V)>;
}}
declare module "io.netty.channel.ChannelOutboundBuffer" {
import {$ChannelOutboundBuffer$MessageProcessor, $ChannelOutboundBuffer$MessageProcessor$$Type} from "io.netty.channel.ChannelOutboundBuffer$MessageProcessor"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOutboundBuffer {


public "progress"(arg0: long): void
public "isWritable"(): boolean
public "remove"(): boolean
public "remove"(arg0: $Throwable$$Type): boolean
public "size"(): integer
public "isEmpty"(): boolean
public "current"(): any
public "nioBufferCount"(): integer
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffers"(arg0: integer, arg1: long): ($ByteBuffer)[]
public "addMessage"(arg0: any, arg1: integer, arg2: $ChannelPromise$$Type): void
/**
 * 
 * @deprecated
 */
public "recycle"(): void
public "currentProgress"(): long
public "setUserDefinedWritability"(arg0: integer, arg1: boolean): void
public "nioBufferSize"(): long
public "removeBytes"(arg0: long): void
public "addFlush"(): void
public "bytesBeforeUnwritable"(): long
public "bytesBeforeWritable"(): long
public "totalPendingWriteBytes"(): long
public "forEachFlushedMessage"(arg0: $ChannelOutboundBuffer$MessageProcessor$$Type): void
public "getUserDefinedWritability"(arg0: integer): boolean
get "writable"(): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$$Type = ($ChannelOutboundBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundBuffer_ = $ChannelOutboundBuffer$$Type;
}}
declare module "io.netty.util.concurrent.SingleThreadEventExecutor" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "java.util.concurrent.ScheduledFuture"
import {$AbstractScheduledEventExecutor, $AbstractScheduledEventExecutor$$Type} from "io.netty.util.concurrent.AbstractScheduledEventExecutor"
import {$ThreadProperties, $ThreadProperties$$Type} from "io.netty.util.concurrent.ThreadProperties"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"
import {$OrderedEventExecutor, $OrderedEventExecutor$$Type} from "io.netty.util.concurrent.OrderedEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SingleThreadEventExecutor extends $AbstractScheduledEventExecutor implements $OrderedEventExecutor {


public "isShutdown"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
public "addShutdownHook"(arg0: $Runnable$$Type): void
public "removeShutdownHook"(arg0: $Runnable$$Type): void
/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$$Type): void
public "isTerminated"(): boolean
public "pendingTasks"(): integer
public "inEventLoop"(arg0: $Thread$$Type): boolean
public "isShuttingDown"(): boolean
public "lazyExecute"(arg0: $Runnable$$Type): void
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
public "terminationFuture"(): $Future$0<(any)>
public "threadProperties"(): $ThreadProperties
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "parent"(): $EventExecutorGroup
public "next"(): $EventExecutor
public "newPromise"<V>(): $Promise<(V)>
public "inEventLoop"(): boolean
public "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
public "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
public "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleThreadEventExecutor$$Type = ($SingleThreadEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleThreadEventExecutor_ = $SingleThreadEventExecutor$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutorGroup" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledExecutorService, $ScheduledExecutorService$$Type} from "java.util.concurrent.ScheduledExecutorService"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorGroup extends $ScheduledExecutorService, $Iterable<($EventExecutor)> {

 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "next"(): $EventExecutor
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutorGroup {
const probejs$$marker: never
}
export class $EventExecutorGroup$$Static implements $EventExecutorGroup {


 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "next"(): $EventExecutor
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorGroup$$Type = ($EventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorGroup_ = $EventExecutorGroup$$Type;
}}
declare module "io.netty.channel.ChannelOutboundBuffer$MessageProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundBuffer$MessageProcessor {

 "processMessage"(arg0: any): boolean

(arg0: any): boolean
}

export namespace $ChannelOutboundBuffer$MessageProcessor {
const probejs$$marker: never
}
export class $ChannelOutboundBuffer$MessageProcessor$$Static implements $ChannelOutboundBuffer$MessageProcessor {


 "processMessage"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$MessageProcessor$$Type = ((arg0: any) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundBuffer$MessageProcessor_ = $ChannelOutboundBuffer$MessageProcessor$$Type;
}}
declare module "io.netty.channel.Channel$Unsafe" {
import {$EventLoop, $EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelOutboundBuffer, $ChannelOutboundBuffer$$Type} from "io.netty.channel.ChannelOutboundBuffer"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$$Type} from "io.netty.channel.RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel$Unsafe {

 "localAddress"(): $SocketAddress
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): void
 "remoteAddress"(): $SocketAddress
 "beginRead"(): void
 "flush"(): void
 "register"(arg0: $EventLoop$$Type, arg1: $ChannelPromise$$Type): void
 "write"(arg0: any, arg1: $ChannelPromise$$Type): void
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): void
 "close"(arg0: $ChannelPromise$$Type): void
 "disconnect"(arg0: $ChannelPromise$$Type): void
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): void
 "outboundBuffer"(): $ChannelOutboundBuffer
 "closeForcibly"(): void
 "recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
}

export namespace $Channel$Unsafe {
const probejs$$marker: never
}
export class $Channel$Unsafe$$Static implements $Channel$Unsafe {


 "localAddress"(): $SocketAddress
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): void
 "remoteAddress"(): $SocketAddress
 "beginRead"(): void
 "flush"(): void
 "register"(arg0: $EventLoop$$Type, arg1: $ChannelPromise$$Type): void
 "write"(arg0: any, arg1: $ChannelPromise$$Type): void
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): void
 "close"(arg0: $ChannelPromise$$Type): void
 "disconnect"(arg0: $ChannelPromise$$Type): void
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): void
 "outboundBuffer"(): $ChannelOutboundBuffer
 "closeForcibly"(): void
 "recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$Unsafe$$Type = ($Channel$Unsafe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channel$Unsafe_ = $Channel$Unsafe$$Type;
}}
declare module "io.netty.channel.ChannelFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelFuture extends $Future<(void)> {

 "awaitUninterruptibly"(): $ChannelFuture
 "isVoid"(): boolean
 "sync"(): $ChannelFuture
 "channel"(): $Channel
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "await"(): $ChannelFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "syncUninterruptibly"(): $ChannelFuture
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
 "get"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "state"(): $Future$State
 "isDone"(): boolean
get "void"(): boolean
get "now"(): void
get "cancellable"(): boolean
get "success"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ChannelFuture {
const probejs$$marker: never
}
export class $ChannelFuture$$Static implements $ChannelFuture {


 "awaitUninterruptibly"(): $ChannelFuture
 "isVoid"(): boolean
 "sync"(): $ChannelFuture
 "channel"(): $Channel
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "await"(): $ChannelFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "syncUninterruptibly"(): $ChannelFuture
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
 "get"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "state"(): $Future$State
 "isDone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelFuture$$Type = ($ChannelFuture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelFuture_ = $ChannelFuture$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutorChooserFactory" {
import {$EventExecutorChooserFactory$EventExecutorChooser, $EventExecutorChooserFactory$EventExecutorChooser$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory {

 "newChooser"(arg0: ($EventExecutor$$Type)[]): $EventExecutorChooserFactory$EventExecutorChooser

(arg0: ($EventExecutor)[]): $EventExecutorChooserFactory$EventExecutorChooser$$Type
}

export namespace $EventExecutorChooserFactory {
const probejs$$marker: never
}
export class $EventExecutorChooserFactory$$Static implements $EventExecutorChooserFactory {


 "newChooser"(arg0: ($EventExecutor$$Type)[]): $EventExecutorChooserFactory$EventExecutorChooser
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$$Type = ((arg0: ($EventExecutor)[]) => $EventExecutorChooserFactory$EventExecutorChooser$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorChooserFactory_ = $EventExecutorChooserFactory$$Type;
}}
declare module "io.netty.channel.ChannelOption" {
import {$RecvByteBufAllocator, $RecvByteBufAllocator$$Type} from "io.netty.channel.RecvByteBufAllocator"
import {$WriteBufferWaterMark, $WriteBufferWaterMark$$Type} from "io.netty.channel.WriteBufferWaterMark"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$AbstractConstant, $AbstractConstant$$Type} from "io.netty.util.AbstractConstant"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$MessageSizeEstimator, $MessageSizeEstimator$$Type} from "io.netty.channel.MessageSizeEstimator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOption<T> extends $AbstractConstant<($ChannelOption<(T)>)> {
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_HIGH_WATER_MARK": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_LOW_WATER_MARK": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION": $ChannelOption<(boolean)>
static readonly "IP_TOS": $ChannelOption<(integer)>
static readonly "SINGLE_EVENTEXECUTOR_PER_GROUP": $ChannelOption<(boolean)>
static readonly "SO_SNDBUF": $ChannelOption<(integer)>
static readonly "IP_MULTICAST_IF": $ChannelOption<($NetworkInterface)>
static readonly "WRITE_BUFFER_WATER_MARK": $ChannelOption<($WriteBufferWaterMark)>
static readonly "TCP_NODELAY": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN": $ChannelOption<(integer)>
static readonly "SO_LINGER": $ChannelOption<(integer)>
static readonly "SO_RCVBUF": $ChannelOption<(integer)>
static readonly "SO_KEEPALIVE": $ChannelOption<(boolean)>
static readonly "ALLOCATOR": $ChannelOption<($ByteBufAllocator)>
static readonly "IP_MULTICAST_ADDR": $ChannelOption<($InetAddress)>
static readonly "IP_MULTICAST_LOOP_DISABLED": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN_CONNECT": $ChannelOption<(boolean)>
static readonly "MESSAGE_SIZE_ESTIMATOR": $ChannelOption<($MessageSizeEstimator)>
static readonly "WRITE_SPIN_COUNT": $ChannelOption<(integer)>
static readonly "SO_TIMEOUT": $ChannelOption<(integer)>
static readonly "SO_REUSEADDR": $ChannelOption<(boolean)>
static readonly "CONNECT_TIMEOUT_MILLIS": $ChannelOption<(integer)>
static readonly "ALLOW_HALF_CLOSURE": $ChannelOption<(boolean)>
static readonly "SO_BACKLOG": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "MAX_MESSAGES_PER_READ": $ChannelOption<(integer)>
static readonly "AUTO_CLOSE": $ChannelOption<(boolean)>
static readonly "MAX_MESSAGES_PER_WRITE": $ChannelOption<(integer)>
static readonly "SO_BROADCAST": $ChannelOption<(boolean)>
static readonly "AUTO_READ": $ChannelOption<(boolean)>
static readonly "IP_MULTICAST_TTL": $ChannelOption<(integer)>
static readonly "RCVBUF_ALLOCATOR": $ChannelOption<($RecvByteBufAllocator)>


public static "exists"(arg0: StringJS): boolean
public static "valueOf"<T>(arg0: StringJS): $ChannelOption<(T)>
public static "valueOf"<T>(arg0: $Class$$Type<(any)>, arg1: StringJS): $ChannelOption<(T)>
/**
 * 
 * @deprecated
 */
public static "newInstance"<T>(arg0: StringJS): $ChannelOption<(T)>
public "validate"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOption$$Type<T> = ($ChannelOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOption_<T> = $ChannelOption$$Type<(T)>;
}}
declare module "io.netty.channel.SelectStrategyFactory" {
import {$SelectStrategy, $SelectStrategy$$Type} from "io.netty.channel.SelectStrategy"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategyFactory {

 "newSelectStrategy"(): $SelectStrategy

(): $SelectStrategy$$Type
}

export namespace $SelectStrategyFactory {
const probejs$$marker: never
}
export class $SelectStrategyFactory$$Static implements $SelectStrategyFactory {


 "newSelectStrategy"(): $SelectStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategyFactory$$Type = (() => $SelectStrategy$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectStrategyFactory_ = $SelectStrategyFactory$$Type;
}}
declare module "io.netty.util.Constant" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constant<T extends $Constant<(T)>> extends $Comparable<(T)> {

 "name"(): StringJS
 "id"(): integer
 "compareTo"(arg0: T): integer
}

export namespace $Constant {
const probejs$$marker: never
}
export class $Constant$$Static<T extends $Constant<(T)>> implements $Constant {


 "name"(): StringJS
 "id"(): integer
 "compareTo"(arg0: T): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constant$$Type<T> = ($Constant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constant_<T> = $Constant$$Type<(T)>;
}}
declare module "io.netty.channel.ChannelProgressivePromise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$ChannelProgressiveFuture, $ChannelProgressiveFuture$$Type} from "io.netty.channel.ChannelProgressiveFuture"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressivePromise extends $ProgressivePromise<(void)>, $ChannelProgressiveFuture, $ChannelPromise {

 "awaitUninterruptibly"(): $ChannelProgressivePromise
 "sync"(): $ChannelProgressivePromise
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "await"(): $ChannelProgressivePromise
 "unvoid"(): $ChannelProgressivePromise
 "setProgress"(arg0: long, arg1: long): $ChannelProgressivePromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelProgressivePromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "setSuccess"(): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ChannelProgressivePromise
 "syncUninterruptibly"(): $ChannelProgressivePromise
 "tryProgress"(arg0: long, arg1: long): boolean
 "setSuccess"(arg0: void): $ProgressivePromise<(void)>
 "channel"(): $Channel
 "trySuccess"(): boolean
 "trySuccess"(arg0: void): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setUncancellable"(): boolean
 "isVoid"(): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
 "get"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "state"(): $Future$State
 "isDone"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: void)
set "success"(value: void)
get "void"(): boolean
get "now"(): void
get "cancellable"(): boolean
get "success"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ChannelProgressivePromise {
const probejs$$marker: never
}
export class $ChannelProgressivePromise$$Static implements $ChannelProgressivePromise {


 "awaitUninterruptibly"(): $ChannelProgressivePromise
 "sync"(): $ChannelProgressivePromise
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "await"(): $ChannelProgressivePromise
 "unvoid"(): $ChannelProgressivePromise
 "setProgress"(arg0: long, arg1: long): $ChannelProgressivePromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelProgressivePromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "setSuccess"(): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ChannelProgressivePromise
 "syncUninterruptibly"(): $ChannelProgressivePromise
 "tryProgress"(arg0: long, arg1: long): boolean
 "setSuccess"(arg0: void): $ProgressivePromise<(void)>
 "channel"(): $Channel
 "trySuccess"(): boolean
 "trySuccess"(arg0: void): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setUncancellable"(): boolean
 "isVoid"(): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
 "get"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "state"(): $Future$State
 "isDone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressivePromise$$Type = ($ChannelProgressivePromise);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelProgressivePromise_ = $ChannelProgressivePromise$$Type;
}}
declare module "io.netty.channel.ChannelConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RecvByteBufAllocator, $RecvByteBufAllocator$$Type} from "io.netty.channel.RecvByteBufAllocator"
import {$WriteBufferWaterMark, $WriteBufferWaterMark$$Type} from "io.netty.channel.WriteBufferWaterMark"
import {$ChannelOption, $ChannelOption$$Type} from "io.netty.channel.ChannelOption"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$MessageSizeEstimator, $MessageSizeEstimator$$Type} from "io.netty.channel.MessageSizeEstimator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelConfig {

 "setOptions"(arg0: $Map$$Type<($ChannelOption$$Type<(any)>), (any)>): boolean
 "setOption"<T>(arg0: $ChannelOption$$Type<(T)>, arg1: T): boolean
 "getOption"<T>(arg0: $ChannelOption$$Type<(T)>): T
 "setAutoRead"(arg0: boolean): $ChannelConfig
 "getOptions"(): $Map<($ChannelOption<(any)>), (any)>
 "getAllocator"(): $ByteBufAllocator
 "setConnectTimeoutMillis"(arg0: integer): $ChannelConfig
 "isAutoRead"(): boolean
 "setAllocator"(arg0: $ByteBufAllocator$$Type): $ChannelConfig
 "setAutoClose"(arg0: boolean): $ChannelConfig
 "isAutoClose"(): boolean
/**
 * 
 * @deprecated
 */
 "getMaxMessagesPerRead"(): integer
/**
 * 
 * @deprecated
 */
 "setMaxMessagesPerRead"(arg0: integer): $ChannelConfig
 "getWriteSpinCount"(): integer
 "setWriteSpinCount"(arg0: integer): $ChannelConfig
 "getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
 "getConnectTimeoutMillis"(): integer
 "setRecvByteBufAllocator"(arg0: $RecvByteBufAllocator$$Type): $ChannelConfig
 "getWriteBufferHighWaterMark"(): integer
 "setWriteBufferHighWaterMark"(arg0: integer): $ChannelConfig
 "getWriteBufferLowWaterMark"(): integer
 "setWriteBufferLowWaterMark"(arg0: integer): $ChannelConfig
 "getMessageSizeEstimator"(): $MessageSizeEstimator
 "setMessageSizeEstimator"(arg0: $MessageSizeEstimator$$Type): $ChannelConfig
 "getWriteBufferWaterMark"(): $WriteBufferWaterMark
 "setWriteBufferWaterMark"(arg0: $WriteBufferWaterMark$$Type): $ChannelConfig
set "options"(value: $Map$$Type<($ChannelOption$$Type<(any)>), (any)>)
set "autoRead"(value: boolean)
get "options"(): $Map<($ChannelOption<(any)>), (any)>
get "allocator"(): $ByteBufAllocator
set "connectTimeoutMillis"(value: integer)
get "autoRead"(): boolean
set "allocator"(value: $ByteBufAllocator$$Type)
set "autoClose"(value: boolean)
get "autoClose"(): boolean
get "maxMessagesPerRead"(): integer
set "maxMessagesPerRead"(value: integer)
get "writeSpinCount"(): integer
set "writeSpinCount"(value: integer)
get "recvByteBufAllocator"(): T
get "connectTimeoutMillis"(): integer
set "recvByteBufAllocator"(value: $RecvByteBufAllocator$$Type)
get "writeBufferHighWaterMark"(): integer
set "writeBufferHighWaterMark"(value: integer)
get "writeBufferLowWaterMark"(): integer
set "writeBufferLowWaterMark"(value: integer)
get "messageSizeEstimator"(): $MessageSizeEstimator
set "messageSizeEstimator"(value: $MessageSizeEstimator$$Type)
get "writeBufferWaterMark"(): $WriteBufferWaterMark
set "writeBufferWaterMark"(value: $WriteBufferWaterMark$$Type)
}

export namespace $ChannelConfig {
const probejs$$marker: never
}
export class $ChannelConfig$$Static implements $ChannelConfig {


 "setOptions"(arg0: $Map$$Type<($ChannelOption$$Type<(any)>), (any)>): boolean
 "setOption"<T>(arg0: $ChannelOption$$Type<(T)>, arg1: T): boolean
 "getOption"<T>(arg0: $ChannelOption$$Type<(T)>): T
 "setAutoRead"(arg0: boolean): $ChannelConfig
 "getOptions"(): $Map<($ChannelOption<(any)>), (any)>
 "getAllocator"(): $ByteBufAllocator
 "setConnectTimeoutMillis"(arg0: integer): $ChannelConfig
 "isAutoRead"(): boolean
 "setAllocator"(arg0: $ByteBufAllocator$$Type): $ChannelConfig
 "setAutoClose"(arg0: boolean): $ChannelConfig
 "isAutoClose"(): boolean
/**
 * 
 * @deprecated
 */
 "getMaxMessagesPerRead"(): integer
/**
 * 
 * @deprecated
 */
 "setMaxMessagesPerRead"(arg0: integer): $ChannelConfig
 "getWriteSpinCount"(): integer
 "setWriteSpinCount"(arg0: integer): $ChannelConfig
 "getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
 "getConnectTimeoutMillis"(): integer
 "setRecvByteBufAllocator"(arg0: $RecvByteBufAllocator$$Type): $ChannelConfig
 "getWriteBufferHighWaterMark"(): integer
 "setWriteBufferHighWaterMark"(arg0: integer): $ChannelConfig
 "getWriteBufferLowWaterMark"(): integer
 "setWriteBufferLowWaterMark"(arg0: integer): $ChannelConfig
 "getMessageSizeEstimator"(): $MessageSizeEstimator
 "setMessageSizeEstimator"(arg0: $MessageSizeEstimator$$Type): $ChannelConfig
 "getWriteBufferWaterMark"(): $WriteBufferWaterMark
 "setWriteBufferWaterMark"(arg0: $WriteBufferWaterMark$$Type): $ChannelConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelConfig$$Type = ($ChannelConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelConfig_ = $ChannelConfig$$Type;
}}
declare module "io.netty.buffer.AbstractReferenceCountedByteBuf" {
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$AbstractByteBuf, $AbstractByteBuf$$Type} from "io.netty.buffer.AbstractByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractReferenceCountedByteBuf extends $AbstractByteBuf {


public "release"(arg0: integer): boolean
public "release"(): boolean
public "refCnt"(): integer
public "touch"(arg0: any): $ReferenceCounted
public "touch"(): $ByteBuf
public "retain"(): $ReferenceCounted
public "retain"(arg0: integer): $ReferenceCounted
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReferenceCountedByteBuf$$Type = ($AbstractReferenceCountedByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractReferenceCountedByteBuf_ = $AbstractReferenceCountedByteBuf$$Type;
}}
declare module "io.netty.buffer.ByteBufConvertible" {
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufConvertible {

 "asByteBuf"(): $ByteBuf

(): $ByteBuf$$Type
}

export namespace $ByteBufConvertible {
const probejs$$marker: never
}
export class $ByteBufConvertible$$Static implements $ByteBufConvertible {


 "asByteBuf"(): $ByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufConvertible$$Type = (() => $ByteBuf$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufConvertible_ = $ByteBufConvertible$$Type;
}}
declare module "io.netty.channel.ChannelMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelMetadata {

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: integer)

public "hasDisconnect"(): boolean
public "defaultMaxMessagesPerRead"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelMetadata$$Type = ($ChannelMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelMetadata_ = $ChannelMetadata$$Type;
}}
declare module "io.netty.util.concurrent.OrderedEventExecutor" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OrderedEventExecutor extends $EventExecutor {

 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "inEventLoop"(): boolean
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $OrderedEventExecutor {
const probejs$$marker: never
}
export class $OrderedEventExecutor$$Static implements $OrderedEventExecutor {


 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "inEventLoop"(arg0: $Thread$$Type): boolean
 "inEventLoop"(): boolean
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future$0<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future$0<(V)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrderedEventExecutor$$Type = ($OrderedEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrderedEventExecutor_ = $OrderedEventExecutor$$Type;
}}
declare module "io.netty.channel.nio.NioEventLoopGroup" {
import {$SelectStrategyFactory, $SelectStrategyFactory$$Type} from "io.netty.channel.SelectStrategyFactory"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$List, $List$$Type} from "java.util.List"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$EventExecutorChooserFactory, $EventExecutorChooserFactory$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory"
import {$EventLoopTaskQueueFactory, $EventLoopTaskQueueFactory$$Type} from "io.netty.channel.EventLoopTaskQueueFactory"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$SelectorProvider, $SelectorProvider$$Type} from "java.nio.channels.spi.SelectorProvider"
import {$RejectedExecutionHandler, $RejectedExecutionHandler$$Type} from "io.netty.util.concurrent.RejectedExecutionHandler"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$$Type} from "io.netty.channel.MultithreadEventLoopGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NioEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectorProvider$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectorProvider$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectorProvider$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type, arg6: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type, arg6: $EventLoopTaskQueueFactory$$Type, arg7: $EventLoopTaskQueueFactory$$Type)
constructor()
constructor(arg0: integer)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectorProvider$$Type)
constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)

public "setIoRatio"(arg0: integer): void
public "rebuildSelectors"(): void
public "next"(): $EventExecutor
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
set "ioRatio"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NioEventLoopGroup$$Type = ($NioEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NioEventLoopGroup_ = $NioEventLoopGroup$$Type;
}}
declare module "io.netty.channel.ChannelInboundInvoker" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundInvoker {

 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelInboundInvoker
 "fireChannelRegistered"(): $ChannelInboundInvoker
 "fireChannelActive"(): $ChannelInboundInvoker
 "fireChannelInactive"(): $ChannelInboundInvoker
 "fireUserEventTriggered"(arg0: any): $ChannelInboundInvoker
 "fireChannelRead"(arg0: any): $ChannelInboundInvoker
 "fireChannelUnregistered"(): $ChannelInboundInvoker
 "fireChannelReadComplete"(): $ChannelInboundInvoker
 "fireChannelWritabilityChanged"(): $ChannelInboundInvoker
}

export namespace $ChannelInboundInvoker {
const probejs$$marker: never
}
export class $ChannelInboundInvoker$$Static implements $ChannelInboundInvoker {


 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelInboundInvoker
 "fireChannelRegistered"(): $ChannelInboundInvoker
 "fireChannelActive"(): $ChannelInboundInvoker
 "fireChannelInactive"(): $ChannelInboundInvoker
 "fireUserEventTriggered"(arg0: any): $ChannelInboundInvoker
 "fireChannelRead"(arg0: any): $ChannelInboundInvoker
 "fireChannelUnregistered"(): $ChannelInboundInvoker
 "fireChannelReadComplete"(): $ChannelInboundInvoker
 "fireChannelWritabilityChanged"(): $ChannelInboundInvoker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundInvoker$$Type = ($ChannelInboundInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundInvoker_ = $ChannelInboundInvoker$$Type;
}}
declare module "io.netty.channel.ChannelId" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelId extends $Serializable, $Comparable<($ChannelId)> {

 "asLongText"(): StringJS
 "asShortText"(): StringJS
 "compareTo"(arg0: $ChannelId$$Type): integer
}

export namespace $ChannelId {
const probejs$$marker: never
}
export class $ChannelId$$Static implements $ChannelId {


 "asLongText"(): StringJS
 "asShortText"(): StringJS
 "compareTo"(arg0: $ChannelId$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelId$$Type = ($ChannelId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelId_ = $ChannelId$$Type;
}}
declare module "io.netty.channel.ChannelProgressiveFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$ProgressiveFuture, $ProgressiveFuture$$Type} from "io.netty.util.concurrent.ProgressiveFuture"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressiveFuture extends $ChannelFuture, $ProgressiveFuture<(void)> {

 "awaitUninterruptibly"(): $ChannelProgressiveFuture
 "sync"(): $ChannelProgressiveFuture
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "await"(): $ChannelProgressiveFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "syncUninterruptibly"(): $ChannelProgressiveFuture
 "isVoid"(): boolean
 "channel"(): $Channel
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
 "get"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "state"(): $Future$State
 "isDone"(): boolean
get "void"(): boolean
get "now"(): void
get "cancellable"(): boolean
get "success"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ChannelProgressiveFuture {
const probejs$$marker: never
}
export class $ChannelProgressiveFuture$$Static implements $ChannelProgressiveFuture {


 "awaitUninterruptibly"(): $ChannelProgressiveFuture
 "sync"(): $ChannelProgressiveFuture
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "await"(): $ChannelProgressiveFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "syncUninterruptibly"(): $ChannelProgressiveFuture
 "isVoid"(): boolean
 "channel"(): $Channel
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): void
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
 "get"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "state"(): $Future$State
 "isDone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressiveFuture$$Type = ($ChannelProgressiveFuture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelProgressiveFuture_ = $ChannelProgressiveFuture$$Type;
}}
declare module "io.netty.util.concurrent.ProgressiveFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressiveFuture<V> extends $Future<(V)> {

 "awaitUninterruptibly"(): $ProgressiveFuture<(V)>
 "sync"(): $ProgressiveFuture<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "await"(): $ProgressiveFuture<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "syncUninterruptibly"(): $ProgressiveFuture<(V)>
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): V
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ProgressiveFuture {
const probejs$$marker: never
}
export class $ProgressiveFuture$$Static<V> implements $ProgressiveFuture {


 "awaitUninterruptibly"(): $ProgressiveFuture<(V)>
 "sync"(): $ProgressiveFuture<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "await"(): $ProgressiveFuture<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "syncUninterruptibly"(): $ProgressiveFuture<(V)>
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): V
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressiveFuture$$Type<V> = ($ProgressiveFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressiveFuture_<V> = $ProgressiveFuture$$Type<(V)>;
}}
declare module "io.netty.util.concurrent.AbstractScheduledEventExecutor" {
import {$AbstractEventExecutor, $AbstractEventExecutor$$Type} from "io.netty.util.concurrent.AbstractEventExecutor"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "java.util.concurrent.ScheduledFuture"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$$Type as $ScheduledFuture$0$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractScheduledEventExecutor extends $AbstractEventExecutor {


public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture$0<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture$0<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractScheduledEventExecutor$$Type = ($AbstractScheduledEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractScheduledEventExecutor_ = $AbstractScheduledEventExecutor$$Type;
}}
declare module "io.netty.util.ReferenceCounted" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReferenceCounted {

 "release"(arg0: integer): boolean
 "release"(): boolean
 "refCnt"(): integer
 "touch"(): $ReferenceCounted
 "touch"(arg0: any): $ReferenceCounted
 "retain"(arg0: integer): $ReferenceCounted
 "retain"(): $ReferenceCounted
}

export namespace $ReferenceCounted {
const probejs$$marker: never
}
export class $ReferenceCounted$$Static implements $ReferenceCounted {


 "release"(arg0: integer): boolean
 "release"(): boolean
 "refCnt"(): integer
 "touch"(): $ReferenceCounted
 "touch"(arg0: any): $ReferenceCounted
 "retain"(arg0: integer): $ReferenceCounted
 "retain"(): $ReferenceCounted
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceCounted$$Type = ($ReferenceCounted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReferenceCounted_ = $ReferenceCounted$$Type;
}}
declare module "io.netty.channel.MultithreadEventLoopGroup" {
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$EventLoopGroup, $EventLoopGroup$$Type} from "io.netty.channel.EventLoopGroup"
import {$List, $List$$Type} from "java.util.List"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$MultithreadEventExecutorGroup, $MultithreadEventExecutorGroup$$Type} from "io.netty.util.concurrent.MultithreadEventExecutorGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventLoopGroup extends $MultithreadEventExecutorGroup implements $EventLoopGroup {


public "next"(): $EventExecutor
public "register"(arg0: $Channel$$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
public "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
public "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventLoopGroup$$Type = ($MultithreadEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultithreadEventLoopGroup_ = $MultithreadEventLoopGroup$$Type;
}}
declare module "io.netty.channel.ChannelInboundHandlerAdapter" {
import {$ChannelHandlerAdapter, $ChannelHandlerAdapter$$Type} from "io.netty.channel.ChannelHandlerAdapter"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelInboundHandler, $ChannelInboundHandler$$Type} from "io.netty.channel.ChannelInboundHandler"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelInboundHandlerAdapter extends $ChannelHandlerAdapter implements $ChannelInboundHandler {

constructor()

public "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "channelActive"(arg0: $ChannelHandlerContext$$Type): void
public "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
public "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
public "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
public "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
public "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
public "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandlerAdapter$$Type = ($ChannelInboundHandlerAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundHandlerAdapter_ = $ChannelInboundHandlerAdapter$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser" {
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory$EventExecutorChooser {

 "next"(): $EventExecutor

(): $EventExecutor$$Type
}

export namespace $EventExecutorChooserFactory$EventExecutorChooser {
const probejs$$marker: never
}
export class $EventExecutorChooserFactory$EventExecutorChooser$$Static implements $EventExecutorChooserFactory$EventExecutorChooser {


 "next"(): $EventExecutor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$EventExecutorChooser$$Type = (() => $EventExecutor$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorChooserFactory$EventExecutorChooser_ = $EventExecutorChooserFactory$EventExecutorChooser$$Type;
}}
declare module "io.netty.channel.ChannelHandlerContext" {
import {$ChannelInboundInvoker, $ChannelInboundInvoker$$Type} from "io.netty.channel.ChannelInboundInvoker"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelPipeline, $ChannelPipeline$$Type} from "io.netty.channel.ChannelPipeline"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Type} from "io.netty.channel.ChannelOutboundInvoker"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$AttributeMap, $AttributeMap$$Type} from "io.netty.util.AttributeMap"
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$Attribute, $Attribute$$Type} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandlerContext extends $AttributeMap, $ChannelInboundInvoker, $ChannelOutboundInvoker {

/**
 * 
 * @deprecated
 */
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "channel"(): $Channel
 "executor"(): $EventExecutor
 "name"(): StringJS
 "flush"(): $ChannelHandlerContext
 "read"(): $ChannelHandlerContext
 "handler"(): $ChannelHandler
 "alloc"(): $ByteBufAllocator
 "isRemoved"(): boolean
 "pipeline"(): $ChannelPipeline
/**
 * 
 * @deprecated
 */
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelHandlerContext
 "fireChannelRegistered"(): $ChannelHandlerContext
 "fireChannelActive"(): $ChannelHandlerContext
 "fireChannelInactive"(): $ChannelHandlerContext
 "fireUserEventTriggered"(arg0: any): $ChannelHandlerContext
 "fireChannelRead"(arg0: any): $ChannelHandlerContext
 "fireChannelUnregistered"(): $ChannelHandlerContext
 "fireChannelReadComplete"(): $ChannelHandlerContext
 "fireChannelWritabilityChanged"(): $ChannelHandlerContext
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
get "removed"(): boolean
}

export namespace $ChannelHandlerContext {
const probejs$$marker: never
}
export class $ChannelHandlerContext$$Static implements $ChannelHandlerContext {


/**
 * 
 * @deprecated
 */
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "channel"(): $Channel
 "executor"(): $EventExecutor
 "name"(): StringJS
 "flush"(): $ChannelHandlerContext
 "read"(): $ChannelHandlerContext
 "handler"(): $ChannelHandler
 "alloc"(): $ByteBufAllocator
 "isRemoved"(): boolean
 "pipeline"(): $ChannelPipeline
/**
 * 
 * @deprecated
 */
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelHandlerContext
 "fireChannelRegistered"(): $ChannelHandlerContext
 "fireChannelActive"(): $ChannelHandlerContext
 "fireChannelInactive"(): $ChannelHandlerContext
 "fireUserEventTriggered"(arg0: any): $ChannelHandlerContext
 "fireChannelRead"(arg0: any): $ChannelHandlerContext
 "fireChannelUnregistered"(): $ChannelHandlerContext
 "fireChannelReadComplete"(): $ChannelHandlerContext
 "fireChannelWritabilityChanged"(): $ChannelHandlerContext
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerContext$$Type = ($ChannelHandlerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandlerContext_ = $ChannelHandlerContext$$Type;
}}
declare module "io.netty.channel.EventLoopGroup" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$EventLoop, $EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopGroup extends $EventExecutorGroup {

 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoopGroup {
const probejs$$marker: never
}
export class $EventLoopGroup$$Static implements $EventLoopGroup {


 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future$0<(T)>
 "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future$0<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future$0<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
 "terminationFuture"(): $Future$0<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isShutdown"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoopGroup$$Type = ($EventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoopGroup_ = $EventLoopGroup$$Type;
}}
declare module "io.netty.channel.RecvByteBufAllocator" {
import {$RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$$Type} from "io.netty.channel.RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator {

 "newHandle"(): $RecvByteBufAllocator$Handle

(): $RecvByteBufAllocator$Handle$$Type
}

export namespace $RecvByteBufAllocator {
const probejs$$marker: never
}
export class $RecvByteBufAllocator$$Static implements $RecvByteBufAllocator {


 "newHandle"(): $RecvByteBufAllocator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$$Type = (() => $RecvByteBufAllocator$Handle$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecvByteBufAllocator_ = $RecvByteBufAllocator$$Type;
}}
declare module "io.netty.channel.ChannelPipeline" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ChannelInboundInvoker, $ChannelInboundInvoker$$Type} from "io.netty.channel.ChannelInboundInvoker"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Type} from "io.netty.channel.ChannelOutboundInvoker"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPipeline extends $ChannelInboundInvoker, $ChannelOutboundInvoker, $Iterable<($Map$Entry<(StringJS), ($ChannelHandler)>)> {

 "addFirst"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(arg0: StringJS, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(arg0: StringJS, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "removeFirst"(): $ChannelHandler
 "removeLast"(): $ChannelHandler
 "channel"(): $Channel
 "names"(): $List<(StringJS)>
 "remove"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "remove"(arg0: StringJS): $ChannelHandler
 "remove"(arg0: $ChannelHandler$$Type): $ChannelPipeline
 "get"(arg0: StringJS): $ChannelHandler
 "get"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "context"(arg0: $ChannelHandler$$Type): $ChannelHandlerContext
 "context"(arg0: $Class$$Type<($ChannelHandler$$Type)>): $ChannelHandlerContext
 "context"(arg0: StringJS): $ChannelHandlerContext
 "flush"(): $ChannelPipeline
 "replace"(arg0: StringJS, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelHandler
 "replace"(arg0: $ChannelHandler$$Type, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "replace"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>, arg1: StringJS, arg2: $ChannelHandler$$Type): T
 "last"(): $ChannelHandler
 "toMap"(): $Map<(StringJS), ($ChannelHandler)>
 "first"(): $ChannelHandler
 "addAfter"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: StringJS, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "addAfter"(arg0: StringJS, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: StringJS, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: StringJS, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "lastContext"(): $ChannelHandlerContext
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelPipeline
 "fireChannelRegistered"(): $ChannelPipeline
 "fireChannelActive"(): $ChannelPipeline
 "fireChannelInactive"(): $ChannelPipeline
 "fireUserEventTriggered"(arg0: any): $ChannelPipeline
 "fireChannelRead"(arg0: any): $ChannelPipeline
 "fireChannelUnregistered"(): $ChannelPipeline
 "fireChannelReadComplete"(): $ChannelPipeline
 "fireChannelWritabilityChanged"(): $ChannelPipeline
 "firstContext"(): $ChannelHandlerContext
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "iterator"(): $Iterator<($Map$Entry<(StringJS), ($ChannelHandler)>)>
 "spliterator"(): $Spliterator<($Map$Entry<(StringJS), ($ChannelHandler)>)>
 "forEach"(arg0: $Consumer$$Type<($Map$Entry<(StringJS), ($ChannelHandler)>)>): void
[Symbol.iterator](): IterableIterator<$Map$Entry<(StringJS), ($ChannelHandler)>>;
}

export namespace $ChannelPipeline {
const probejs$$marker: never
}
export class $ChannelPipeline$$Static implements $ChannelPipeline {


 "addFirst"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(arg0: StringJS, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(arg0: StringJS, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "removeFirst"(): $ChannelHandler
 "removeLast"(): $ChannelHandler
 "channel"(): $Channel
 "names"(): $List<(StringJS)>
 "remove"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "remove"(arg0: StringJS): $ChannelHandler
 "remove"(arg0: $ChannelHandler$$Type): $ChannelPipeline
 "get"(arg0: StringJS): $ChannelHandler
 "get"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "context"(arg0: $ChannelHandler$$Type): $ChannelHandlerContext
 "context"(arg0: $Class$$Type<($ChannelHandler$$Type)>): $ChannelHandlerContext
 "context"(arg0: StringJS): $ChannelHandlerContext
 "flush"(): $ChannelPipeline
 "replace"(arg0: StringJS, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelHandler
 "replace"(arg0: $ChannelHandler$$Type, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "replace"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>, arg1: StringJS, arg2: $ChannelHandler$$Type): T
 "last"(): $ChannelHandler
 "toMap"(): $Map<(StringJS), ($ChannelHandler)>
 "first"(): $ChannelHandler
 "addAfter"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: StringJS, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "addAfter"(arg0: StringJS, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: StringJS, arg1: StringJS, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: $EventExecutorGroup$$Type, arg1: StringJS, arg2: StringJS, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "lastContext"(): $ChannelHandlerContext
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelPipeline
 "fireChannelRegistered"(): $ChannelPipeline
 "fireChannelActive"(): $ChannelPipeline
 "fireChannelInactive"(): $ChannelPipeline
 "fireUserEventTriggered"(arg0: any): $ChannelPipeline
 "fireChannelRead"(arg0: any): $ChannelPipeline
 "fireChannelUnregistered"(): $ChannelPipeline
 "fireChannelReadComplete"(): $ChannelPipeline
 "fireChannelWritabilityChanged"(): $ChannelPipeline
 "firstContext"(): $ChannelHandlerContext
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "write"(arg0: any): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newPromise"(): $ChannelPromise
 "newProgressivePromise"(): $ChannelProgressivePromise
 "newSucceededFuture"(): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "iterator"(): $Iterator<($Map$Entry<(StringJS), ($ChannelHandler)>)>
 "spliterator"(): $Spliterator<($Map$Entry<(StringJS), ($ChannelHandler)>)>
 "forEach"(arg0: $Consumer$$Type<($Map$Entry<(StringJS), ($ChannelHandler)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPipeline$$Type = ($ChannelPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelPipeline_ = $ChannelPipeline$$Type;
}}
declare module "io.netty.util.concurrent.ThreadProperties" {
import {$Thread$State, $Thread$State$$Type} from "java.lang.Thread$State"
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ThreadProperties {

 "name"(): StringJS
 "priority"(): integer
 "id"(): long
 "stackTrace"(): ($StackTraceElement)[]
 "isDaemon"(): boolean
 "isAlive"(): boolean
 "isInterrupted"(): boolean
 "state"(): $Thread$State
get "daemon"(): boolean
get "alive"(): boolean
get "interrupted"(): boolean
}

export namespace $ThreadProperties {
const probejs$$marker: never
}
export class $ThreadProperties$$Static implements $ThreadProperties {


 "name"(): StringJS
 "priority"(): integer
 "id"(): long
 "stackTrace"(): ($StackTraceElement)[]
 "isDaemon"(): boolean
 "isAlive"(): boolean
 "isInterrupted"(): boolean
 "state"(): $Thread$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadProperties$$Type = ($ThreadProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadProperties_ = $ThreadProperties$$Type;
}}
declare module "io.netty.util.Attribute" {
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Attribute<T> {

 "compareAndSet"(arg0: T, arg1: T): boolean
 "getAndSet"(arg0: T): T
/**
 * 
 * @deprecated
 */
 "remove"(): void
 "get"(): T
 "set"(arg0: T): void
 "key"(): $AttributeKey<(T)>
/**
 * 
 * @deprecated
 */
 "getAndRemove"(): T
 "setIfAbsent"(arg0: T): T
get "andRemove"(): T
set "ifAbsent"(value: T)
}

export namespace $Attribute {
const probejs$$marker: never
}
export class $Attribute$$Static<T> implements $Attribute {


 "compareAndSet"(arg0: T, arg1: T): boolean
 "getAndSet"(arg0: T): T
/**
 * 
 * @deprecated
 */
 "remove"(): void
 "get"(): T
 "set"(arg0: T): void
 "key"(): $AttributeKey<(T)>
/**
 * 
 * @deprecated
 */
 "getAndRemove"(): T
 "setIfAbsent"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attribute$$Type<T> = ($Attribute<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Attribute_<T> = $Attribute$$Type<(T)>;
}}
declare module "io.netty.channel.DefaultEventLoopGroup" {
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$List, $List$$Type} from "java.util.List"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$$Type} from "io.netty.channel.MultithreadEventLoopGroup"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DefaultEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer)
constructor()

public "next"(): $EventExecutor
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultEventLoopGroup$$Type = ($DefaultEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultEventLoopGroup_ = $DefaultEventLoopGroup$$Type;
}}
declare module "io.netty.channel.RecvByteBufAllocator$Handle" {
import {$ChannelConfig, $ChannelConfig$$Type} from "io.netty.channel.ChannelConfig"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * 
 * @deprecated
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator$Handle {

 "allocate"(arg0: $ByteBufAllocator$$Type): $ByteBuf
 "guess"(): integer
 "reset"(arg0: $ChannelConfig$$Type): void
 "readComplete"(): void
 "lastBytesRead"(): integer
 "lastBytesRead"(arg0: integer): void
 "incMessagesRead"(arg0: integer): void
 "attemptedBytesRead"(arg0: integer): void
 "attemptedBytesRead"(): integer
 "continueReading"(): boolean
}

export namespace $RecvByteBufAllocator$Handle {
const probejs$$marker: never
}
export class $RecvByteBufAllocator$Handle$$Static implements $RecvByteBufAllocator$Handle {


 "allocate"(arg0: $ByteBufAllocator$$Type): $ByteBuf
 "guess"(): integer
 "reset"(arg0: $ChannelConfig$$Type): void
 "readComplete"(): void
 "lastBytesRead"(): integer
 "lastBytesRead"(arg0: integer): void
 "incMessagesRead"(arg0: integer): void
 "attemptedBytesRead"(arg0: integer): void
 "attemptedBytesRead"(): integer
 "continueReading"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$Handle$$Type = ($RecvByteBufAllocator$Handle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecvByteBufAllocator$Handle_ = $RecvByteBufAllocator$Handle$$Type;
}}
declare module "io.netty.util.concurrent.MultithreadEventExecutorGroup" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "java.util.concurrent.ScheduledFuture"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "io.netty.util.concurrent.Future"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$AbstractEventExecutorGroup, $AbstractEventExecutorGroup$$Type} from "io.netty.util.concurrent.AbstractEventExecutorGroup"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventExecutorGroup extends $AbstractEventExecutorGroup {


public "isShutdown"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "isTerminated"(): boolean
public "isShuttingDown"(): boolean
public "executorCount"(): integer
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future$0<(any)>
public "terminationFuture"(): $Future$0<(any)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future<(any)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventExecutorGroup$$Type = ($MultithreadEventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultithreadEventExecutorGroup_ = $MultithreadEventExecutorGroup$$Type;
}}
declare module "io.netty.util.concurrent.Promise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Promise<V> extends $Future<(V)> {

 "awaitUninterruptibly"(): $Promise<(V)>
 "sync"(): $Promise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "await"(): $Promise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "trySuccess"(arg0: V): boolean
 "setFailure"(arg0: $Throwable$$Type): $Promise<(V)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "setSuccess"(arg0: V): $Promise<(V)>
 "syncUninterruptibly"(): $Promise<(V)>
 "setUncancellable"(): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): V
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: V)
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $Promise {
const probejs$$marker: never
}
export class $Promise$$Static<V> implements $Promise {


 "awaitUninterruptibly"(): $Promise<(V)>
 "sync"(): $Promise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "await"(): $Promise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "trySuccess"(arg0: V): boolean
 "setFailure"(arg0: $Throwable$$Type): $Promise<(V)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "setSuccess"(arg0: V): $Promise<(V)>
 "syncUninterruptibly"(): $Promise<(V)>
 "setUncancellable"(): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): V
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Promise$$Type<V> = ($Promise<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Promise_<V> = $Promise$$Type<(V)>;
}}
declare module "io.netty.util.concurrent.ProgressivePromise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$ProgressiveFuture, $ProgressiveFuture$$Type} from "io.netty.util.concurrent.ProgressiveFuture"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressivePromise<V> extends $Promise<(V)>, $ProgressiveFuture<(V)> {

 "awaitUninterruptibly"(): $ProgressivePromise<(V)>
 "sync"(): $ProgressivePromise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "await"(): $ProgressivePromise<(V)>
 "setProgress"(arg0: long, arg1: long): $ProgressivePromise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "setFailure"(arg0: $Throwable$$Type): $ProgressivePromise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "setSuccess"(arg0: V): $ProgressivePromise<(V)>
 "syncUninterruptibly"(): $ProgressivePromise<(V)>
 "trySuccess"(arg0: V): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setUncancellable"(): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): V
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: V)
get "now"(): V
get "cancellable"(): boolean
get "success"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ProgressivePromise {
const probejs$$marker: never
}
export class $ProgressivePromise$$Static<V> implements $ProgressivePromise {


 "awaitUninterruptibly"(): $ProgressivePromise<(V)>
 "sync"(): $ProgressivePromise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "await"(): $ProgressivePromise<(V)>
 "setProgress"(arg0: long, arg1: long): $ProgressivePromise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "setFailure"(arg0: $Throwable$$Type): $ProgressivePromise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "setSuccess"(arg0: V): $ProgressivePromise<(V)>
 "syncUninterruptibly"(): $ProgressivePromise<(V)>
 "trySuccess"(arg0: V): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setUncancellable"(): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "getNow"(): V
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(arg0: long): boolean
 "isCancellable"(): boolean
 "isSuccess"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressivePromise$$Type<V> = ($ProgressivePromise<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressivePromise_<V> = $ProgressivePromise$$Type<(V)>;
}}
