declare module "java.net.URLStreamHandlerFactory" {
import {$URLStreamHandler, $URLStreamHandler$$Type} from "java.net.URLStreamHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $URLStreamHandlerFactory {

 "createURLStreamHandler"(arg0: StringJS): $URLStreamHandler

(arg0: StringJS): $URLStreamHandler$$Type
}

export namespace $URLStreamHandlerFactory {
const probejs$$marker: never
}
export class $URLStreamHandlerFactory$$Static implements $URLStreamHandlerFactory {


 "createURLStreamHandler"(arg0: StringJS): $URLStreamHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLStreamHandlerFactory$$Type = ((arg0: StringJS) => $URLStreamHandler$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URLStreamHandlerFactory_ = $URLStreamHandlerFactory$$Type;
}}
declare module "java.net.ContentHandlerFactory" {
import {$ContentHandler, $ContentHandler$$Type} from "java.net.ContentHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ContentHandlerFactory {

 "createContentHandler"(arg0: StringJS): $ContentHandler

(arg0: StringJS): $ContentHandler$$Type
}

export namespace $ContentHandlerFactory {
const probejs$$marker: never
}
export class $ContentHandlerFactory$$Static implements $ContentHandlerFactory {


 "createContentHandler"(arg0: StringJS): $ContentHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentHandlerFactory$$Type = ((arg0: StringJS) => $ContentHandler$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentHandlerFactory_ = $ContentHandlerFactory$$Type;
}}
declare module "java.net.ProtocolFamily" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProtocolFamily {

 "name"(): StringJS

(): StringJS
}

export namespace $ProtocolFamily {
const probejs$$marker: never
}
export class $ProtocolFamily$$Static implements $ProtocolFamily {


 "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtocolFamily$$Type = (() => StringJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtocolFamily_ = $ProtocolFamily$$Type;
}}
declare module "java.net.SocketImplFactory" {
import {$SocketImpl, $SocketImpl$$Type} from "java.net.SocketImpl"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketImplFactory {

 "createSocketImpl"(): $SocketImpl

(): $SocketImpl$$Type
}

export namespace $SocketImplFactory {
const probejs$$marker: never
}
export class $SocketImplFactory$$Static implements $SocketImplFactory {


 "createSocketImpl"(): $SocketImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketImplFactory$$Type = (() => $SocketImpl$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketImplFactory_ = $SocketImplFactory$$Type;
}}
declare module "java.net.SocketImpl" {
import {$SocketOptions, $SocketOptions$$Type} from "java.net.SocketOptions"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketImpl implements $SocketOptions {

constructor()

public "toString"(): StringJS
public "setOption"(arg0: integer, arg1: any): void
public "getOption"(arg0: integer): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketImpl$$Type = ($SocketImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketImpl_ = $SocketImpl$$Type;
}}
declare module "java.net.Proxy" {
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Proxy$Type, $Proxy$Type$$Type} from "java.net.Proxy$Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy {
static readonly "NO_PROXY": $Proxy

constructor(arg0: $Proxy$Type$$Type, arg1: $SocketAddress$$Type)

public "address"(): $SocketAddress
public "type"(): $Proxy$Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$$Type = ($Proxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Proxy_ = $Proxy$$Type;
}}
declare module "java.net.FileNameMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileNameMap {

 "getContentTypeFor"(arg0: StringJS): StringJS

(arg0: StringJS): StringJS
}

export namespace $FileNameMap {
const probejs$$marker: never
}
export class $FileNameMap$$Static implements $FileNameMap {


 "getContentTypeFor"(arg0: StringJS): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileNameMap$$Type = ((arg0: StringJS) => StringJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileNameMap_ = $FileNameMap$$Type;
}}
declare module "java.net.NetworkInterface" {
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$List, $List$$Type} from "java.util.List"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"
import {$InterfaceAddress, $InterfaceAddress$$Type} from "java.net.InterfaceAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NetworkInterface {


public static "getByName"(arg0: StringJS): $NetworkInterface
public "getIndex"(): integer
public "getDisplayName"(): StringJS
public static "networkInterfaces"(): $Stream<($NetworkInterface)>
public "inetAddresses"(): $Stream<($InetAddress)>
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isVirtual"(): boolean
public "getParent"(): $NetworkInterface
public "getInterfaceAddresses"(): $List<($InterfaceAddress)>
public "getSubInterfaces"(): $Enumeration<($NetworkInterface)>
public "subInterfaces"(): $Stream<($NetworkInterface)>
public static "getByIndex"(arg0: integer): $NetworkInterface
public "isPointToPoint"(): boolean
public "supportsMulticast"(): boolean
public "getMTU"(): integer
public "isUp"(): boolean
public "isLoopback"(): boolean
public static "getNetworkInterfaces"(): $Enumeration<($NetworkInterface)>
public "getInetAddresses"(): $Enumeration<($InetAddress)>
public static "getByInetAddress"(arg0: $InetAddress$$Type): $NetworkInterface
public "getHardwareAddress"(): (byte)[]
get "index"(): integer
get "displayName"(): StringJS
get "name"(): StringJS
get "virtual"(): boolean
get "parent"(): $NetworkInterface
get "interfaceAddresses"(): $List<($InterfaceAddress)>
get "pointToPoint"(): boolean
get "mTU"(): integer
get "up"(): boolean
get "loopback"(): boolean
get "hardwareAddress"(): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkInterface$$Type = ($NetworkInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkInterface_ = $NetworkInterface$$Type;
}}
declare module "java.net.InetAddress" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetAddress implements $Serializable {


public "getHostName"(): StringJS
public "getAddress"(): (byte)[]
public static "getByName"(arg0: StringJS): $InetAddress
public "isReachable"(arg0: integer): boolean
public "isReachable"(arg0: $NetworkInterface$$Type, arg1: integer, arg2: integer): boolean
public static "getAllByName"(arg0: StringJS): ($InetAddress)[]
public static "getByAddress"(arg0: StringJS, arg1: (byte)[]): $InetAddress
public static "getByAddress"(arg0: (byte)[]): $InetAddress
public "isMulticastAddress"(): boolean
public "isAnyLocalAddress"(): boolean
public "isLoopbackAddress"(): boolean
public "isSiteLocalAddress"(): boolean
public "isMCGlobal"(): boolean
public "isMCNodeLocal"(): boolean
public "isMCLinkLocal"(): boolean
public "isMCSiteLocal"(): boolean
public "isMCOrgLocal"(): boolean
public "getCanonicalHostName"(): StringJS
public static "getLoopbackAddress"(): $InetAddress
public static "getLocalHost"(): $InetAddress
public "isLinkLocalAddress"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getHostAddress"(): StringJS
get "hostName"(): StringJS
get "address"(): (byte)[]
get "multicastAddress"(): boolean
get "anyLocalAddress"(): boolean
get "loopbackAddress"(): boolean
get "siteLocalAddress"(): boolean
get "mCGlobal"(): boolean
get "mCNodeLocal"(): boolean
get "mCLinkLocal"(): boolean
get "mCSiteLocal"(): boolean
get "mCOrgLocal"(): boolean
get "canonicalHostName"(): StringJS
get "linkLocalAddress"(): boolean
get "hostAddress"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InetAddress$$Type = ($InetAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InetAddress_ = $InetAddress$$Type;
}}
declare module "java.net.DatagramSocket" {
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$DatagramSocketImplFactory, $DatagramSocketImplFactory$$Type} from "java.net.DatagramSocketImplFactory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$DatagramChannel, $DatagramChannel$$Type} from "java.nio.channels.DatagramChannel"
import {$DatagramPacket, $DatagramPacket$$Type} from "java.net.DatagramPacket"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramSocket implements $Closeable {

constructor(arg0: integer, arg1: $InetAddress$$Type)
constructor(arg0: integer)
constructor(arg0: $SocketAddress$$Type)
constructor()

public "getPort"(): integer
public "getChannel"(): $DatagramChannel
public "bind"(arg0: $SocketAddress$$Type): void
public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "isConnected"(): boolean
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $DatagramSocket
public "getLocalAddress"(): $InetAddress
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "connect"(arg0: $SocketAddress$$Type): void
public "connect"(arg0: $InetAddress$$Type, arg1: integer): void
public "close"(): void
public "receive"(arg0: $DatagramPacket$$Type): void
public "getInetAddress"(): $InetAddress
public "getRemoteSocketAddress"(): $SocketAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getReuseAddress"(): boolean
public "setBroadcast"(arg0: boolean): void
public "getBroadcast"(): boolean
/**
 * 
 * @deprecated
 */
public static "setDatagramSocketImplFactory"(arg0: $DatagramSocketImplFactory$$Type): void
public "send"(arg0: $DatagramPacket$$Type): void
public "isBound"(): boolean
public "disconnect"(): void
public "isClosed"(): boolean
public "setSoTimeout"(arg0: integer): void
public "getSoTimeout"(): integer
public "setReuseAddress"(arg0: boolean): void
public "setReceiveBufferSize"(arg0: integer): void
public "setTrafficClass"(arg0: integer): void
public "getReceiveBufferSize"(): integer
public "getSendBufferSize"(): integer
public "getTrafficClass"(): integer
public "setSendBufferSize"(arg0: integer): void
public "joinGroup"(arg0: $SocketAddress$$Type, arg1: $NetworkInterface$$Type): void
public "leaveGroup"(arg0: $SocketAddress$$Type, arg1: $NetworkInterface$$Type): void
get "port"(): integer
get "channel"(): $DatagramChannel
get "connected"(): boolean
get "localAddress"(): $InetAddress
get "inetAddress"(): $InetAddress
get "remoteSocketAddress"(): $SocketAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "reuseAddress"(): boolean
set "broadcast"(value: boolean)
get "broadcast"(): boolean
get "bound"(): boolean
get "closed"(): boolean
set "soTimeout"(value: integer)
get "soTimeout"(): integer
set "reuseAddress"(value: boolean)
set "receiveBufferSize"(value: integer)
set "trafficClass"(value: integer)
get "receiveBufferSize"(): integer
get "sendBufferSize"(): integer
get "trafficClass"(): integer
set "sendBufferSize"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatagramSocket$$Type = ($DatagramSocket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatagramSocket_ = $DatagramSocket$$Type;
}}
declare module "java.net.URI" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$URL, $URL$$Type} from "java.net.URL"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URI implements $Comparable<($URI)>, $Serializable {

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS)
constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS)
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS, arg4: StringJS)
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: integer, arg4: StringJS, arg5: StringJS, arg6: StringJS)

public "getAuthority"(): StringJS
public "getQuery"(): StringJS
public "getPath"(): StringJS
public "getUserInfo"(): StringJS
public "toURL"(): $URL
public "getScheme"(): StringJS
public "isOpaque"(): boolean
public "getRawAuthority"(): StringJS
public "getRawFragment"(): StringJS
public "getRawQuery"(): StringJS
public "getRawPath"(): StringJS
public "getHost"(): StringJS
public "getPort"(): integer
public static "create"(arg0: StringJS): $URI
public "relativize"(arg0: $URI$$Type): $URI
public "getRawSchemeSpecificPart"(): StringJS
public "normalize"(): $URI
public "parseServerAuthority"(): $URI
public "getSchemeSpecificPart"(): StringJS
public "getRawUserInfo"(): StringJS
public "getFragment"(): StringJS
public "toASCIIString"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $URI$$Type): integer
public "isAbsolute"(): boolean
public "resolve"(arg0: StringJS): $URI
public "resolve"(arg0: $URI$$Type): $URI
get "authority"(): StringJS
get "query"(): StringJS
get "path"(): StringJS
get "userInfo"(): StringJS
get "scheme"(): StringJS
get "opaque"(): boolean
get "rawAuthority"(): StringJS
get "rawFragment"(): StringJS
get "rawQuery"(): StringJS
get "rawPath"(): StringJS
get "host"(): StringJS
get "port"(): integer
get "rawSchemeSpecificPart"(): StringJS
get "schemeSpecificPart"(): StringJS
get "rawUserInfo"(): StringJS
get "fragment"(): StringJS
get "absolute"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URI$$Type = ($URI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URI_ = $URI$$Type;
}}
declare module "java.net.URL" {
import {$URLStreamHandler, $URLStreamHandler$$Type} from "java.net.URLStreamHandler"
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$URI, $URI$$Type} from "java.net.URI"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$URLConnection, $URLConnection$$Type} from "java.net.URLConnection"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$URLStreamHandlerFactory, $URLStreamHandlerFactory$$Type} from "java.net.URLStreamHandlerFactory"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URL implements $Serializable {

/**
 * 
 * @deprecated
 */
constructor(arg0: $URL$$Type, arg1: StringJS, arg2: $URLStreamHandler$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS, arg2: integer, arg3: StringJS, arg4: $URLStreamHandler$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: $URL$$Type, arg1: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS, arg2: integer, arg3: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS)

public "getContent"(arg0: ($Class$$Type<(any)>)[]): any
public "getContent"(): any
public "getProtocol"(): StringJS
public "getAuthority"(): StringJS
public "getFile"(): StringJS
public "getRef"(): StringJS
public "getQuery"(): StringJS
public "getPath"(): StringJS
public "getUserInfo"(): StringJS
public "toURI"(): $URI
public static "setURLStreamHandlerFactory"(arg0: $URLStreamHandlerFactory$$Type): void
public "getHost"(): StringJS
public "getPort"(): integer
public "getDefaultPort"(): integer
public "sameFile"(arg0: $URL$$Type): boolean
public "toExternalForm"(): StringJS
public "openConnection"(arg0: $Proxy$$Type): $URLConnection
public "openConnection"(): $URLConnection
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $URI$$Type, arg1: $URLStreamHandler$$Type): $URL
public "openStream"(): $InputStream
get "content"(): any
get "protocol"(): StringJS
get "authority"(): StringJS
get "file"(): StringJS
get "ref"(): StringJS
get "query"(): StringJS
get "path"(): StringJS
get "userInfo"(): StringJS
get "host"(): StringJS
get "port"(): integer
get "defaultPort"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URL$$Type = ($URL);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URL_ = $URL$$Type;
}}
declare module "java.net.InterfaceAddress" {
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterfaceAddress {


public "getAddress"(): $InetAddress
public "getNetworkPrefixLength"(): short
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getBroadcast"(): $InetAddress
get "address"(): $InetAddress
get "networkPrefixLength"(): short
get "broadcast"(): $InetAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceAddress$$Type = ($InterfaceAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceAddress_ = $InterfaceAddress$$Type;
}}
declare module "java.net.ServerSocket" {
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$ServerSocketChannel, $ServerSocketChannel$$Type} from "java.nio.channels.ServerSocketChannel"
import {$Socket, $Socket$$Type} from "java.net.Socket"
import {$SocketImplFactory, $SocketImplFactory$$Type} from "java.net.SocketImplFactory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ServerSocket implements $Closeable {

constructor(arg0: integer, arg1: integer, arg2: $InetAddress$$Type)
constructor()
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "getChannel"(): $ServerSocketChannel
public "bind"(arg0: $SocketAddress$$Type, arg1: integer): void
public "bind"(arg0: $SocketAddress$$Type): void
public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $ServerSocket
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "toString"(): StringJS
public "accept"(): $Socket
public "close"(): void
public "getInetAddress"(): $InetAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getReuseAddress"(): boolean
public "isBound"(): boolean
public "isClosed"(): boolean
public "setSoTimeout"(arg0: integer): void
public "getSoTimeout"(): integer
public "setReuseAddress"(arg0: boolean): void
public "setReceiveBufferSize"(arg0: integer): void
public "getReceiveBufferSize"(): integer
public "setPerformancePreferences"(arg0: integer, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
public static "setSocketFactory"(arg0: $SocketImplFactory$$Type): void
get "channel"(): $ServerSocketChannel
get "inetAddress"(): $InetAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "reuseAddress"(): boolean
get "bound"(): boolean
get "closed"(): boolean
set "soTimeout"(value: integer)
get "soTimeout"(): integer
set "reuseAddress"(value: boolean)
set "receiveBufferSize"(value: integer)
get "receiveBufferSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerSocket$$Type = ($ServerSocket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerSocket_ = $ServerSocket$$Type;
}}
declare module "java.net.SocketOption" {
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketOption<T> {

 "name"(): StringJS
 "type"(): $Class<(T)>
}

export namespace $SocketOption {
const probejs$$marker: never
}
export class $SocketOption$$Static<T> implements $SocketOption {


 "name"(): StringJS
 "type"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketOption$$Type<T> = ($SocketOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketOption_<T> = $SocketOption$$Type<(T)>;
}}
declare module "java.net.ContentHandler" {
import {$URLConnection, $URLConnection$$Type} from "java.net.URLConnection"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ContentHandler {

constructor()

public "getContent"(arg0: $URLConnection$$Type): any
public "getContent"(arg0: $URLConnection$$Type, arg1: ($Class$$Type<(any)>)[]): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentHandler$$Type = ($ContentHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentHandler_ = $ContentHandler$$Type;
}}
declare module "java.net.InetSocketAddress" {
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetSocketAddress extends $SocketAddress {

constructor(arg0: integer)
constructor(arg0: $InetAddress$$Type, arg1: integer)
constructor(arg0: StringJS, arg1: integer)

public "getHostString"(): StringJS
public static "createUnresolved"(arg0: StringJS, arg1: integer): $InetSocketAddress
public "isUnresolved"(): boolean
public "getHostName"(): StringJS
public "getAddress"(): $InetAddress
public "getPort"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
get "hostString"(): StringJS
get "unresolved"(): boolean
get "hostName"(): StringJS
get "address"(): $InetAddress
get "port"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InetSocketAddress$$Type = ($InetSocketAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InetSocketAddress_ = $InetSocketAddress$$Type;
}}
declare module "java.net.Proxy$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy$Type extends $Enum<($Proxy$Type)> {
static readonly "SOCKS": $Proxy$Type
static readonly "HTTP": $Proxy$Type
static readonly "DIRECT": $Proxy$Type


public static "values"(): ($Proxy$Type)[]
public static "valueOf"(arg0: StringJS): $Proxy$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$Type$$Type = (("direct") | ("http") | ("socks"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Proxy$Type_ = $Proxy$Type$$Type;
}}
declare module "java.net.URLConnection" {
import {$ContentHandlerFactory, $ContentHandlerFactory$$Type} from "java.net.ContentHandlerFactory"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Permission, $Permission$$Type} from "java.security.Permission"
import {$FileNameMap, $FileNameMap$$Type} from "java.net.FileNameMap"
import {$List, $List$$Type} from "java.util.List"
import {$URL, $URL$$Type} from "java.net.URL"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLConnection {


public "setUseCaches"(arg0: boolean): void
public "getInputStream"(): $InputStream
public "getContent"(): any
public "getContent"(arg0: ($Class$$Type<(any)>)[]): any
public "getPermission"(): $Permission
public "setRequestProperty"(arg0: StringJS, arg1: StringJS): void
public "getURL"(): $URL
public "getUseCaches"(): boolean
public "getContentLengthLong"(): long
public static "guessContentTypeFromStream"(arg0: $InputStream$$Type): StringJS
public static "guessContentTypeFromName"(arg0: StringJS): StringJS
public "getHeaderField"(arg0: StringJS): StringJS
public "getHeaderField"(arg0: integer): StringJS
public "getRequestProperty"(arg0: StringJS): StringJS
public "addRequestProperty"(arg0: StringJS, arg1: StringJS): void
public "getRequestProperties"(): $Map<(StringJS), ($List<(StringJS)>)>
public "setAllowUserInteraction"(arg0: boolean): void
public "getAllowUserInteraction"(): boolean
public "setIfModifiedSince"(arg0: long): void
public static "setDefaultUseCaches"(arg0: StringJS, arg1: boolean): void
public "setDefaultUseCaches"(arg0: boolean): void
public static "getDefaultUseCaches"(arg0: StringJS): boolean
public "getDefaultUseCaches"(): boolean
public "getContentType"(): StringJS
public "getHeaderFieldLong"(arg0: StringJS, arg1: long): long
public "getHeaderFieldDate"(arg0: StringJS, arg1: long): long
public static "getFileNameMap"(): $FileNameMap
public "getContentLength"(): integer
public static "setFileNameMap"(arg0: $FileNameMap$$Type): void
public "setConnectTimeout"(arg0: integer): void
public "getConnectTimeout"(): integer
public "setReadTimeout"(arg0: integer): void
public "getReadTimeout"(): integer
public "getContentEncoding"(): StringJS
public "getExpiration"(): long
public "getDate"(): long
public "getLastModified"(): long
public "getHeaderFields"(): $Map<(StringJS), ($List<(StringJS)>)>
public "getHeaderFieldInt"(arg0: StringJS, arg1: integer): integer
public "getHeaderFieldKey"(arg0: integer): StringJS
public "getOutputStream"(): $OutputStream
public "setDoInput"(arg0: boolean): void
public "getDoInput"(): boolean
public "setDoOutput"(arg0: boolean): void
public "getDoOutput"(): boolean
public static "setDefaultAllowUserInteraction"(arg0: boolean): void
public static "getDefaultAllowUserInteraction"(): boolean
public "getIfModifiedSince"(): long
/**
 * 
 * @deprecated
 */
public static "setDefaultRequestProperty"(arg0: StringJS, arg1: StringJS): void
/**
 * 
 * @deprecated
 */
public static "getDefaultRequestProperty"(arg0: StringJS): StringJS
public static "setContentHandlerFactory"(arg0: $ContentHandlerFactory$$Type): void
public "toString"(): StringJS
public "connect"(): void
set "useCaches"(value: boolean)
get "inputStream"(): $InputStream
get "content"(): any
get "permission"(): $Permission
get "uRL"(): $URL
get "useCaches"(): boolean
get "contentLengthLong"(): long
get "requestProperties"(): $Map<(StringJS), ($List<(StringJS)>)>
set "allowUserInteraction"(value: boolean)
get "allowUserInteraction"(): boolean
set "ifModifiedSince"(value: long)
set "defaultUseCaches"(value: boolean)
get "defaultUseCaches"(): boolean
get "contentType"(): StringJS
get "contentLength"(): integer
set "connectTimeout"(value: integer)
get "connectTimeout"(): integer
set "readTimeout"(value: integer)
get "readTimeout"(): integer
get "contentEncoding"(): StringJS
get "expiration"(): long
get "date"(): long
get "lastModified"(): long
get "headerFields"(): $Map<(StringJS), ($List<(StringJS)>)>
get "outputStream"(): $OutputStream
set "doInput"(value: boolean)
get "doInput"(): boolean
set "doOutput"(value: boolean)
get "doOutput"(): boolean
get "ifModifiedSince"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLConnection$$Type = ($URLConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URLConnection_ = $URLConnection$$Type;
}}
declare module "java.net.SocketAddress" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketAddress implements $Serializable {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketAddress$$Type = ($SocketAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketAddress_ = $SocketAddress$$Type;
}}
declare module "java.net.Socket" {
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$SocketOption, $SocketOption$$Type} from "java.net.SocketOption"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$SocketChannel, $SocketChannel$$Type} from "java.nio.channels.SocketChannel"
import {$SocketImplFactory, $SocketImplFactory$$Type} from "java.net.SocketImplFactory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Socket implements $Closeable {

constructor(arg0: $InetAddress$$Type, arg1: integer, arg2: $InetAddress$$Type, arg3: integer)
constructor(arg0: $Proxy$$Type)
constructor()
constructor(arg0: StringJS, arg1: integer, arg2: $InetAddress$$Type, arg3: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: integer, arg2: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: $InetAddress$$Type, arg1: integer, arg2: boolean)
constructor(arg0: StringJS, arg1: integer)
constructor(arg0: $InetAddress$$Type, arg1: integer)

public "getInputStream"(): $InputStream
public "getPort"(): integer
public "getChannel"(): $SocketChannel
public "getOutputStream"(): $OutputStream
public "bind"(arg0: $SocketAddress$$Type): void
public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "isConnected"(): boolean
public "setOption"<T>(arg0: $SocketOption$$Type<(T)>, arg1: T): $Socket
public "getLocalAddress"(): $InetAddress
public "getOption"<T>(arg0: $SocketOption$$Type<(T)>): T
public "shutdownInput"(): void
public "shutdownOutput"(): void
public "toString"(): StringJS
public "connect"(arg0: $SocketAddress$$Type): void
public "connect"(arg0: $SocketAddress$$Type, arg1: integer): void
public "close"(): void
public "isOutputShutdown"(): boolean
public "isInputShutdown"(): boolean
public "getInetAddress"(): $InetAddress
public "getRemoteSocketAddress"(): $SocketAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getTcpNoDelay"(): boolean
public "getKeepAlive"(): boolean
public "getReuseAddress"(): boolean
public "sendUrgentData"(arg0: integer): void
public "getOOBInline"(): boolean
/**
 * 
 * @deprecated
 */
public static "setSocketImplFactory"(arg0: $SocketImplFactory$$Type): void
public "isBound"(): boolean
public "isClosed"(): boolean
public "setKeepAlive"(arg0: boolean): void
public "setOOBInline"(arg0: boolean): void
public "setSoLinger"(arg0: boolean, arg1: integer): void
public "setSoTimeout"(arg0: integer): void
public "setTcpNoDelay"(arg0: boolean): void
public "getSoLinger"(): integer
public "getSoTimeout"(): integer
public "setReuseAddress"(arg0: boolean): void
public "setReceiveBufferSize"(arg0: integer): void
public "setTrafficClass"(arg0: integer): void
public "getReceiveBufferSize"(): integer
public "getSendBufferSize"(): integer
public "getTrafficClass"(): integer
public "setSendBufferSize"(arg0: integer): void
public "setPerformancePreferences"(arg0: integer, arg1: integer, arg2: integer): void
get "inputStream"(): $InputStream
get "port"(): integer
get "channel"(): $SocketChannel
get "outputStream"(): $OutputStream
get "connected"(): boolean
get "localAddress"(): $InetAddress
get "outputShutdown"(): boolean
get "inputShutdown"(): boolean
get "inetAddress"(): $InetAddress
get "remoteSocketAddress"(): $SocketAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "tcpNoDelay"(): boolean
get "keepAlive"(): boolean
get "reuseAddress"(): boolean
get "oOBInline"(): boolean
get "bound"(): boolean
get "closed"(): boolean
set "keepAlive"(value: boolean)
set "oOBInline"(value: boolean)
set "soTimeout"(value: integer)
set "tcpNoDelay"(value: boolean)
get "soLinger"(): integer
get "soTimeout"(): integer
set "reuseAddress"(value: boolean)
set "receiveBufferSize"(value: integer)
set "trafficClass"(value: integer)
get "receiveBufferSize"(): integer
get "sendBufferSize"(): integer
get "trafficClass"(): integer
set "sendBufferSize"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Socket$$Type = ($Socket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Socket_ = $Socket$$Type;
}}
declare module "java.net.URLStreamHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLStreamHandler {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLStreamHandler$$Type = ($URLStreamHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URLStreamHandler_ = $URLStreamHandler$$Type;
}}
