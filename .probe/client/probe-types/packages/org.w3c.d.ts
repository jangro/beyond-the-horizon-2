declare module "org.w3c.dom.Attr" {
import {$UserDataHandler, $UserDataHandler$$Type} from "org.w3c.dom.UserDataHandler"
import {$Node, $Node$$Type} from "org.w3c.dom.Node"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Document, $Document$$Type} from "org.w3c.dom.Document"
import {$NamedNodeMap, $NamedNodeMap$$Type} from "org.w3c.dom.NamedNodeMap"
import {$NodeList, $NodeList$$Type} from "org.w3c.dom.NodeList"
import {$TypeInfo, $TypeInfo$$Type} from "org.w3c.dom.TypeInfo"

export interface $Attr extends $Node {

 "getSpecified"(): boolean
 "getSchemaTypeInfo"(): $TypeInfo
 "isId"(): boolean
 "getOwnerElement"(): $Element
 "getName"(): string
 "getValue"(): string
 "setValue"(arg0: string): void
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getFeature"(arg0: string, arg1: string): any
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$$Type): any
 "isSupported"(arg0: string, arg1: string): boolean
 "getAttributes"(): $NamedNodeMap
 "normalize"(): void
 "getPrefix"(): string
 "getChildNodes"(): $NodeList
get "specified"(): boolean
get "schemaTypeInfo"(): $TypeInfo
get "id"(): boolean
get "ownerElement"(): $Element
get "name"(): string
get "value"(): string
set "value"(value: string)
get "localName"(): string
get "lastChild"(): $Node
get "nodeName"(): string
set "nodeValue"(value: string)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): string
get "baseURI"(): string
get "ownerDocument"(): $Document
get "namespaceURI"(): string
set "prefix"(value: string)
get "textContent"(): string
set "textContent"(value: string)
get "nodeType"(): short
get "attributes"(): $NamedNodeMap
get "prefix"(): string
get "childNodes"(): $NodeList
}

export namespace $Attr {
const probejs$$marker: never
}
export class $Attr$$Static implements $Attr {


 "getSpecified"(): boolean
 "getSchemaTypeInfo"(): $TypeInfo
 "isId"(): boolean
 "getOwnerElement"(): $Element
 "getName"(): string
 "getValue"(): string
 "setValue"(arg0: string): void
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getFeature"(arg0: string, arg1: string): any
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$$Type): any
 "isSupported"(arg0: string, arg1: string): boolean
 "getAttributes"(): $NamedNodeMap
 "normalize"(): void
 "getPrefix"(): string
 "getChildNodes"(): $NodeList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attr$$Type = ($Attr);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Attr_ = $Attr$$Type;
}}
declare module "org.w3c.dom.Document" {
import {$Comment, $Comment$$Type} from "org.w3c.dom.Comment"
import {$UserDataHandler, $UserDataHandler$$Type} from "org.w3c.dom.UserDataHandler"
import {$Node, $Node$$Type} from "org.w3c.dom.Node"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Text, $Text$$Type} from "org.w3c.dom.Text"
import {$NamedNodeMap, $NamedNodeMap$$Type} from "org.w3c.dom.NamedNodeMap"
import {$DOMImplementation, $DOMImplementation$$Type} from "org.w3c.dom.DOMImplementation"
import {$DOMConfiguration, $DOMConfiguration$$Type} from "org.w3c.dom.DOMConfiguration"
import {$DocumentType, $DocumentType$$Type} from "org.w3c.dom.DocumentType"
import {$NodeList, $NodeList$$Type} from "org.w3c.dom.NodeList"
import {$Attr, $Attr$$Type} from "org.w3c.dom.Attr"
import {$CDATASection, $CDATASection$$Type} from "org.w3c.dom.CDATASection"
import {$EntityReference, $EntityReference$$Type} from "org.w3c.dom.EntityReference"
import {$ProcessingInstruction, $ProcessingInstruction$$Type} from "org.w3c.dom.ProcessingInstruction"
import {$DocumentFragment, $DocumentFragment$$Type} from "org.w3c.dom.DocumentFragment"

export interface $Document extends $Node {

 "importNode"(arg0: $Node$$Type, arg1: boolean): $Node
 "getXmlEncoding"(): string
 "getXmlVersion"(): string
 "getXmlStandalone"(): boolean
 "normalizeDocument"(): void
 "createDocumentFragment"(): $DocumentFragment
 "getDoctype"(): $DocumentType
 "getElementsByTagName"(arg0: string): $NodeList
 "getStrictErrorChecking"(): boolean
 "getInputEncoding"(): string
 "renameNode"(arg0: $Node$$Type, arg1: string, arg2: string): $Node
 "getDomConfig"(): $DOMConfiguration
 "adoptNode"(arg0: $Node$$Type): $Node
 "getElementById"(arg0: string): $Element
 "getElementsByTagNameNS"(arg0: string, arg1: string): $NodeList
 "setXmlVersion"(arg0: string): void
 "createComment"(arg0: string): $Comment
 "createProcessingInstruction"(arg0: string, arg1: string): $ProcessingInstruction
 "setStrictErrorChecking"(arg0: boolean): void
 "setDocumentURI"(arg0: string): void
 "setXmlStandalone"(arg0: boolean): void
 "createCDATASection"(arg0: string): $CDATASection
 "createTextNode"(arg0: string): $Text
 "getDocumentURI"(): string
 "createAttributeNS"(arg0: string, arg1: string): $Attr
 "createAttribute"(arg0: string): $Attr
 "createElementNS"(arg0: string, arg1: string): $Element
 "createElement"(arg0: string): $Element
 "getImplementation"(): $DOMImplementation
 "createEntityReference"(arg0: string): $EntityReference
 "getDocumentElement"(): $Element
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getFeature"(arg0: string, arg1: string): any
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$$Type): any
 "isSupported"(arg0: string, arg1: string): boolean
 "getAttributes"(): $NamedNodeMap
 "normalize"(): void
 "getPrefix"(): string
 "getChildNodes"(): $NodeList
get "xmlEncoding"(): string
get "xmlVersion"(): string
get "xmlStandalone"(): boolean
get "doctype"(): $DocumentType
get "strictErrorChecking"(): boolean
get "inputEncoding"(): string
get "domConfig"(): $DOMConfiguration
set "xmlVersion"(value: string)
set "strictErrorChecking"(value: boolean)
set "documentURI"(value: string)
set "xmlStandalone"(value: boolean)
get "documentURI"(): string
get "implementation"(): $DOMImplementation
get "documentElement"(): $Element
get "localName"(): string
get "lastChild"(): $Node
get "nodeName"(): string
set "nodeValue"(value: string)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): string
get "baseURI"(): string
get "ownerDocument"(): $Document
get "namespaceURI"(): string
set "prefix"(value: string)
get "textContent"(): string
set "textContent"(value: string)
get "nodeType"(): short
get "attributes"(): $NamedNodeMap
get "prefix"(): string
get "childNodes"(): $NodeList
}

export namespace $Document {
const probejs$$marker: never
}
export class $Document$$Static implements $Document {


 "importNode"(arg0: $Node$$Type, arg1: boolean): $Node
 "getXmlEncoding"(): string
 "getXmlVersion"(): string
 "getXmlStandalone"(): boolean
 "normalizeDocument"(): void
 "createDocumentFragment"(): $DocumentFragment
 "getDoctype"(): $DocumentType
 "getElementsByTagName"(arg0: string): $NodeList
 "getStrictErrorChecking"(): boolean
 "getInputEncoding"(): string
 "renameNode"(arg0: $Node$$Type, arg1: string, arg2: string): $Node
 "getDomConfig"(): $DOMConfiguration
 "adoptNode"(arg0: $Node$$Type): $Node
 "getElementById"(arg0: string): $Element
 "getElementsByTagNameNS"(arg0: string, arg1: string): $NodeList
 "setXmlVersion"(arg0: string): void
 "createComment"(arg0: string): $Comment
 "createProcessingInstruction"(arg0: string, arg1: string): $ProcessingInstruction
 "setStrictErrorChecking"(arg0: boolean): void
 "setDocumentURI"(arg0: string): void
 "setXmlStandalone"(arg0: boolean): void
 "createCDATASection"(arg0: string): $CDATASection
 "createTextNode"(arg0: string): $Text
 "getDocumentURI"(): string
 "createAttributeNS"(arg0: string, arg1: string): $Attr
 "createAttribute"(arg0: string): $Attr
 "createElementNS"(arg0: string, arg1: string): $Element
 "createElement"(arg0: string): $Element
 "getImplementation"(): $DOMImplementation
 "createEntityReference"(arg0: string): $EntityReference
 "getDocumentElement"(): $Element
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getFeature"(arg0: string, arg1: string): any
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$$Type): any
 "isSupported"(arg0: string, arg1: string): boolean
 "getAttributes"(): $NamedNodeMap
 "normalize"(): void
 "getPrefix"(): string
 "getChildNodes"(): $NodeList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Document$$Type = ($Document);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Document_ = $Document$$Type;
}}
declare module "org.w3c.dom.TypeInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TypeInfo {

 "getTypeNamespace"(): string
 "isDerivedFrom"(arg0: string, arg1: string, arg2: integer): boolean
 "getTypeName"(): string
get "typeNamespace"(): string
get "typeName"(): string
}

export namespace $TypeInfo {
const DERIVATION_UNION: integer
const DERIVATION_EXTENSION: integer
const DERIVATION_RESTRICTION: integer
const DERIVATION_LIST: integer
const probejs$$marker: never
}
export class $TypeInfo$$Static implements $TypeInfo {
static readonly "DERIVATION_UNION": integer
static readonly "DERIVATION_EXTENSION": integer
static readonly "DERIVATION_RESTRICTION": integer
static readonly "DERIVATION_LIST": integer


 "getTypeNamespace"(): string
 "isDerivedFrom"(arg0: string, arg1: string, arg2: integer): boolean
 "getTypeName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeInfo$$Type = ($TypeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeInfo_ = $TypeInfo$$Type;
}}
declare module "org.w3c.dom.NamedNodeMap" {
import {$Node, $Node$$Type} from "org.w3c.dom.Node"

export interface $NamedNodeMap {

 "getNamedItemNS"(arg0: string, arg1: string): $Node
 "removeNamedItemNS"(arg0: string, arg1: string): $Node
 "setNamedItem"(arg0: $Node$$Type): $Node
 "setNamedItemNS"(arg0: $Node$$Type): $Node
 "getNamedItem"(arg0: string): $Node
 "getLength"(): integer
 "item"(arg0: integer): $Node
 "removeNamedItem"(arg0: string): $Node
set "namedItem"(value: $Node$$Type)
set "namedItemNS"(value: $Node$$Type)
get "length"(): integer
}

export namespace $NamedNodeMap {
const probejs$$marker: never
}
export class $NamedNodeMap$$Static implements $NamedNodeMap {


 "getNamedItemNS"(arg0: string, arg1: string): $Node
 "removeNamedItemNS"(arg0: string, arg1: string): $Node
 "setNamedItem"(arg0: $Node$$Type): $Node
 "setNamedItemNS"(arg0: $Node$$Type): $Node
 "getNamedItem"(arg0: string): $Node
 "getLength"(): integer
 "item"(arg0: integer): $Node
 "removeNamedItem"(arg0: string): $Node
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedNodeMap$$Type = ($NamedNodeMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedNodeMap_ = $NamedNodeMap$$Type;
}}
declare module "org.w3c.dom.Node" {
import {$UserDataHandler, $UserDataHandler$$Type} from "org.w3c.dom.UserDataHandler"
import {$Document, $Document$$Type} from "org.w3c.dom.Document"
import {$NamedNodeMap, $NamedNodeMap$$Type} from "org.w3c.dom.NamedNodeMap"
import {$NodeList, $NodeList$$Type} from "org.w3c.dom.NodeList"

export interface $Node {

 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getFeature"(arg0: string, arg1: string): any
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$$Type): any
 "isSupported"(arg0: string, arg1: string): boolean
 "getAttributes"(): $NamedNodeMap
 "normalize"(): void
 "getPrefix"(): string
 "getChildNodes"(): $NodeList
get "localName"(): string
get "lastChild"(): $Node
get "nodeName"(): string
set "nodeValue"(value: string)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): string
get "baseURI"(): string
get "ownerDocument"(): $Document
get "namespaceURI"(): string
set "prefix"(value: string)
get "textContent"(): string
set "textContent"(value: string)
get "nodeType"(): short
get "attributes"(): $NamedNodeMap
get "prefix"(): string
get "childNodes"(): $NodeList
}

export namespace $Node {
const NOTATION_NODE: short
const ENTITY_REFERENCE_NODE: short
const CDATA_SECTION_NODE: short
const PROCESSING_INSTRUCTION_NODE: short
const ENTITY_NODE: short
const DOCUMENT_NODE: short
const COMMENT_NODE: short
const DOCUMENT_POSITION_CONTAINS: short
const DOCUMENT_POSITION_PRECEDING: short
const DOCUMENT_POSITION_DISCONNECTED: short
const DOCUMENT_POSITION_CONTAINED_BY: short
const ELEMENT_NODE: short
const DOCUMENT_TYPE_NODE: short
const DOCUMENT_FRAGMENT_NODE: short
const TEXT_NODE: short
const DOCUMENT_POSITION_FOLLOWING: short
const ATTRIBUTE_NODE: short
const DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: short
const probejs$$marker: never
}
export class $Node$$Static implements $Node {
static readonly "NOTATION_NODE": short
static readonly "ENTITY_REFERENCE_NODE": short
static readonly "CDATA_SECTION_NODE": short
static readonly "PROCESSING_INSTRUCTION_NODE": short
static readonly "ENTITY_NODE": short
static readonly "DOCUMENT_NODE": short
static readonly "COMMENT_NODE": short
static readonly "DOCUMENT_POSITION_CONTAINS": short
static readonly "DOCUMENT_POSITION_PRECEDING": short
static readonly "DOCUMENT_POSITION_DISCONNECTED": short
static readonly "DOCUMENT_POSITION_CONTAINED_BY": short
static readonly "ELEMENT_NODE": short
static readonly "DOCUMENT_TYPE_NODE": short
static readonly "DOCUMENT_FRAGMENT_NODE": short
static readonly "TEXT_NODE": short
static readonly "DOCUMENT_POSITION_FOLLOWING": short
static readonly "ATTRIBUTE_NODE": short
static readonly "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC": short


 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getFeature"(arg0: string, arg1: string): any
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$$Type): any
 "isSupported"(arg0: string, arg1: string): boolean
 "getAttributes"(): $NamedNodeMap
 "normalize"(): void
 "getPrefix"(): string
 "getChildNodes"(): $NodeList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Node$$Type = ($Node);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Node_ = $Node$$Type;
}}
declare module "org.w3c.dom.UserDataHandler" {
import {$Node, $Node$$Type} from "org.w3c.dom.Node"

export interface $UserDataHandler {

 "handle"(arg0: short, arg1: string, arg2: any, arg3: $Node$$Type, arg4: $Node$$Type): void

(arg0: short, arg1: string, arg2: any, arg3: $Node, arg4: $Node): void
}

export namespace $UserDataHandler {
const NODE_DELETED: short
const NODE_IMPORTED: short
const NODE_ADOPTED: short
const NODE_RENAMED: short
const NODE_CLONED: short
const probejs$$marker: never
}
export class $UserDataHandler$$Static implements $UserDataHandler {
static readonly "NODE_DELETED": short
static readonly "NODE_IMPORTED": short
static readonly "NODE_ADOPTED": short
static readonly "NODE_RENAMED": short
static readonly "NODE_CLONED": short


 "handle"(arg0: short, arg1: string, arg2: any, arg3: $Node$$Type, arg4: $Node$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserDataHandler$$Type = ((arg0: short, arg1: string, arg2: any, arg3: $Node, arg4: $Node) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserDataHandler_ = $UserDataHandler$$Type;
}}
declare module "org.w3c.dom.NodeList" {
import {$Node, $Node$$Type} from "org.w3c.dom.Node"

export interface $NodeList {

 "getLength"(): integer
 "item"(arg0: integer): $Node
get "length"(): integer
}

export namespace $NodeList {
const probejs$$marker: never
}
export class $NodeList$$Static implements $NodeList {


 "getLength"(): integer
 "item"(arg0: integer): $Node
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeList$$Type = ($NodeList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeList_ = $NodeList$$Type;
}}
declare module "org.w3c.dom.Element" {
import {$UserDataHandler, $UserDataHandler$$Type} from "org.w3c.dom.UserDataHandler"
import {$Attr, $Attr$$Type} from "org.w3c.dom.Attr"
import {$Node, $Node$$Type} from "org.w3c.dom.Node"
import {$Document, $Document$$Type} from "org.w3c.dom.Document"
import {$NamedNodeMap, $NamedNodeMap$$Type} from "org.w3c.dom.NamedNodeMap"
import {$NodeList, $NodeList$$Type} from "org.w3c.dom.NodeList"
import {$TypeInfo, $TypeInfo$$Type} from "org.w3c.dom.TypeInfo"

export interface $Element extends $Node {

 "removeAttributeNode"(arg0: $Attr$$Type): $Attr
 "getElementsByTagName"(arg0: string): $NodeList
 "getElementsByTagNameNS"(arg0: string, arg1: string): $NodeList
 "getAttributeNS"(arg0: string, arg1: string): string
 "removeAttributeNS"(arg0: string, arg1: string): void
 "hasAttribute"(arg0: string): boolean
 "hasAttributeNS"(arg0: string, arg1: string): boolean
 "setIdAttributeNS"(arg0: string, arg1: string, arg2: boolean): void
 "getSchemaTypeInfo"(): $TypeInfo
 "setAttributeNodeNS"(arg0: $Attr$$Type): $Attr
 "setAttributeNode"(arg0: $Attr$$Type): $Attr
 "setIdAttributeNode"(arg0: $Attr$$Type, arg1: boolean): void
 "getAttributeNodeNS"(arg0: string, arg1: string): $Attr
 "getAttributeNode"(arg0: string): $Attr
 "setAttributeNS"(arg0: string, arg1: string, arg2: string): void
 "setIdAttribute"(arg0: string, arg1: boolean): void
 "setAttribute"(arg0: string, arg1: string): void
 "getAttribute"(arg0: string): string
 "removeAttribute"(arg0: string): void
 "getTagName"(): string
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getFeature"(arg0: string, arg1: string): any
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$$Type): any
 "isSupported"(arg0: string, arg1: string): boolean
 "getAttributes"(): $NamedNodeMap
 "normalize"(): void
 "getPrefix"(): string
 "getChildNodes"(): $NodeList
get "schemaTypeInfo"(): $TypeInfo
set "attributeNodeNS"(value: $Attr$$Type)
set "attributeNode"(value: $Attr$$Type)
get "tagName"(): string
get "localName"(): string
get "lastChild"(): $Node
get "nodeName"(): string
set "nodeValue"(value: string)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): string
get "baseURI"(): string
get "ownerDocument"(): $Document
get "namespaceURI"(): string
set "prefix"(value: string)
get "textContent"(): string
set "textContent"(value: string)
get "nodeType"(): short
get "attributes"(): $NamedNodeMap
get "prefix"(): string
get "childNodes"(): $NodeList
}

export namespace $Element {
const probejs$$marker: never
}
export class $Element$$Static implements $Element {


 "removeAttributeNode"(arg0: $Attr$$Type): $Attr
 "getElementsByTagName"(arg0: string): $NodeList
 "getElementsByTagNameNS"(arg0: string, arg1: string): $NodeList
 "getAttributeNS"(arg0: string, arg1: string): string
 "removeAttributeNS"(arg0: string, arg1: string): void
 "hasAttribute"(arg0: string): boolean
 "hasAttributeNS"(arg0: string, arg1: string): boolean
 "setIdAttributeNS"(arg0: string, arg1: string, arg2: boolean): void
 "getSchemaTypeInfo"(): $TypeInfo
 "setAttributeNodeNS"(arg0: $Attr$$Type): $Attr
 "setAttributeNode"(arg0: $Attr$$Type): $Attr
 "setIdAttributeNode"(arg0: $Attr$$Type, arg1: boolean): void
 "getAttributeNodeNS"(arg0: string, arg1: string): $Attr
 "getAttributeNode"(arg0: string): $Attr
 "setAttributeNS"(arg0: string, arg1: string, arg2: string): void
 "setIdAttribute"(arg0: string, arg1: boolean): void
 "setAttribute"(arg0: string, arg1: string): void
 "getAttribute"(arg0: string): string
 "removeAttribute"(arg0: string): void
 "getTagName"(): string
 "hasAttributes"(): boolean
 "getLocalName"(): string
 "getFeature"(arg0: string, arg1: string): any
 "getLastChild"(): $Node
 "getNodeName"(): string
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: string): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): string
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): string
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): string
 "setPrefix"(arg0: string): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): string
 "setTextContent"(arg0: string): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: string): string
 "isDefaultNamespace"(arg0: string): boolean
 "lookupNamespaceURI"(arg0: string): string
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: string): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "setUserData"(arg0: string, arg1: any, arg2: $UserDataHandler$$Type): any
 "isSupported"(arg0: string, arg1: string): boolean
 "getAttributes"(): $NamedNodeMap
 "normalize"(): void
 "getPrefix"(): string
 "getChildNodes"(): $NodeList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Element$$Type = ($Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Element_ = $Element$$Type;
}}
