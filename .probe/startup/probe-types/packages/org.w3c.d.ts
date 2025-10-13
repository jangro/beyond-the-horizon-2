declare module "org.w3c.dom.Attr" {
import {$UserDataHandler, $UserDataHandler$$Type} from "org.w3c.dom.UserDataHandler"
import {$Node, $Node$$Type} from "org.w3c.dom.Node"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Document, $Document$$Type} from "org.w3c.dom.Document"
import {$NamedNodeMap, $NamedNodeMap$$Type} from "org.w3c.dom.NamedNodeMap"
import {$NodeList, $NodeList$$Type} from "org.w3c.dom.NodeList"
import {$TypeInfo, $TypeInfo$$Type} from "org.w3c.dom.TypeInfo"

export interface $Attr extends $Node {

 "getSchemaTypeInfo"(): $TypeInfo
 "isId"(): boolean
 "getName"(): StringJS
 "getValue"(): StringJS
 "setValue"(arg0: StringJS): void
 "getOwnerElement"(): $Element
 "getSpecified"(): boolean
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "getAttributes"(): $NamedNodeMap
 "getLocalName"(): StringJS
 "normalize"(): void
 "hasAttributes"(): boolean
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getPrefix"(): StringJS
 "getChildNodes"(): $NodeList
get "schemaTypeInfo"(): $TypeInfo
get "id"(): boolean
get "name"(): StringJS
get "value"(): StringJS
set "value"(value: StringJS)
get "ownerElement"(): $Element
get "specified"(): boolean
get "nodeType"(): short
get "lastChild"(): $Node
get "nodeName"(): StringJS
set "nodeValue"(value: StringJS)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): StringJS
get "baseURI"(): StringJS
get "attributes"(): $NamedNodeMap
get "localName"(): StringJS
get "ownerDocument"(): $Document
get "namespaceURI"(): StringJS
set "prefix"(value: StringJS)
get "textContent"(): StringJS
set "textContent"(value: StringJS)
get "prefix"(): StringJS
get "childNodes"(): $NodeList
}

export namespace $Attr {
const probejs$$marker: never
}
export class $Attr$$Static implements $Attr {


 "getSchemaTypeInfo"(): $TypeInfo
 "isId"(): boolean
 "getName"(): StringJS
 "getValue"(): StringJS
 "setValue"(arg0: StringJS): void
 "getOwnerElement"(): $Element
 "getSpecified"(): boolean
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "getAttributes"(): $NamedNodeMap
 "getLocalName"(): StringJS
 "normalize"(): void
 "hasAttributes"(): boolean
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getPrefix"(): StringJS
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

 "createEntityReference"(arg0: StringJS): $EntityReference
 "setXmlVersion"(arg0: StringJS): void
 "createComment"(arg0: StringJS): $Comment
 "createProcessingInstruction"(arg0: StringJS, arg1: StringJS): $ProcessingInstruction
 "setStrictErrorChecking"(arg0: boolean): void
 "setDocumentURI"(arg0: StringJS): void
 "setXmlStandalone"(arg0: boolean): void
 "createCDATASection"(arg0: StringJS): $CDATASection
 "createTextNode"(arg0: StringJS): $Text
 "getDocumentURI"(): StringJS
 "createAttributeNS"(arg0: StringJS, arg1: StringJS): $Attr
 "createAttribute"(arg0: StringJS): $Attr
 "createElementNS"(arg0: StringJS, arg1: StringJS): $Element
 "createElement"(arg0: StringJS): $Element
 "getImplementation"(): $DOMImplementation
 "importNode"(arg0: $Node$$Type, arg1: boolean): $Node
 "getXmlEncoding"(): StringJS
 "getXmlVersion"(): StringJS
 "getXmlStandalone"(): boolean
 "normalizeDocument"(): void
 "createDocumentFragment"(): $DocumentFragment
 "getDoctype"(): $DocumentType
 "getElementsByTagName"(arg0: StringJS): $NodeList
 "getStrictErrorChecking"(): boolean
 "getInputEncoding"(): StringJS
 "renameNode"(arg0: $Node$$Type, arg1: StringJS, arg2: StringJS): $Node
 "getDomConfig"(): $DOMConfiguration
 "adoptNode"(arg0: $Node$$Type): $Node
 "getElementById"(arg0: StringJS): $Element
 "getElementsByTagNameNS"(arg0: StringJS, arg1: StringJS): $NodeList
 "getDocumentElement"(): $Element
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "getAttributes"(): $NamedNodeMap
 "getLocalName"(): StringJS
 "normalize"(): void
 "hasAttributes"(): boolean
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getPrefix"(): StringJS
 "getChildNodes"(): $NodeList
set "xmlVersion"(value: StringJS)
set "strictErrorChecking"(value: boolean)
set "documentURI"(value: StringJS)
set "xmlStandalone"(value: boolean)
get "documentURI"(): StringJS
get "implementation"(): $DOMImplementation
get "xmlEncoding"(): StringJS
get "xmlVersion"(): StringJS
get "xmlStandalone"(): boolean
get "doctype"(): $DocumentType
get "strictErrorChecking"(): boolean
get "inputEncoding"(): StringJS
get "domConfig"(): $DOMConfiguration
get "documentElement"(): $Element
get "nodeType"(): short
get "lastChild"(): $Node
get "nodeName"(): StringJS
set "nodeValue"(value: StringJS)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): StringJS
get "baseURI"(): StringJS
get "attributes"(): $NamedNodeMap
get "localName"(): StringJS
get "ownerDocument"(): $Document
get "namespaceURI"(): StringJS
set "prefix"(value: StringJS)
get "textContent"(): StringJS
set "textContent"(value: StringJS)
get "prefix"(): StringJS
get "childNodes"(): $NodeList
}

export namespace $Document {
const probejs$$marker: never
}
export class $Document$$Static implements $Document {


 "createEntityReference"(arg0: StringJS): $EntityReference
 "setXmlVersion"(arg0: StringJS): void
 "createComment"(arg0: StringJS): $Comment
 "createProcessingInstruction"(arg0: StringJS, arg1: StringJS): $ProcessingInstruction
 "setStrictErrorChecking"(arg0: boolean): void
 "setDocumentURI"(arg0: StringJS): void
 "setXmlStandalone"(arg0: boolean): void
 "createCDATASection"(arg0: StringJS): $CDATASection
 "createTextNode"(arg0: StringJS): $Text
 "getDocumentURI"(): StringJS
 "createAttributeNS"(arg0: StringJS, arg1: StringJS): $Attr
 "createAttribute"(arg0: StringJS): $Attr
 "createElementNS"(arg0: StringJS, arg1: StringJS): $Element
 "createElement"(arg0: StringJS): $Element
 "getImplementation"(): $DOMImplementation
 "importNode"(arg0: $Node$$Type, arg1: boolean): $Node
 "getXmlEncoding"(): StringJS
 "getXmlVersion"(): StringJS
 "getXmlStandalone"(): boolean
 "normalizeDocument"(): void
 "createDocumentFragment"(): $DocumentFragment
 "getDoctype"(): $DocumentType
 "getElementsByTagName"(arg0: StringJS): $NodeList
 "getStrictErrorChecking"(): boolean
 "getInputEncoding"(): StringJS
 "renameNode"(arg0: $Node$$Type, arg1: StringJS, arg2: StringJS): $Node
 "getDomConfig"(): $DOMConfiguration
 "adoptNode"(arg0: $Node$$Type): $Node
 "getElementById"(arg0: StringJS): $Element
 "getElementsByTagNameNS"(arg0: StringJS, arg1: StringJS): $NodeList
 "getDocumentElement"(): $Element
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "getAttributes"(): $NamedNodeMap
 "getLocalName"(): StringJS
 "normalize"(): void
 "hasAttributes"(): boolean
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getPrefix"(): StringJS
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

 "getTypeNamespace"(): StringJS
 "isDerivedFrom"(arg0: StringJS, arg1: StringJS, arg2: integer): boolean
 "getTypeName"(): StringJS
get "typeNamespace"(): StringJS
get "typeName"(): StringJS
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


 "getTypeNamespace"(): StringJS
 "isDerivedFrom"(arg0: StringJS, arg1: StringJS, arg2: integer): boolean
 "getTypeName"(): StringJS
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

 "getNamedItem"(arg0: StringJS): $Node
 "setNamedItem"(arg0: $Node$$Type): $Node
 "setNamedItemNS"(arg0: $Node$$Type): $Node
 "getNamedItemNS"(arg0: StringJS, arg1: StringJS): $Node
 "removeNamedItemNS"(arg0: StringJS, arg1: StringJS): $Node
 "item"(arg0: integer): $Node
 "getLength"(): integer
 "removeNamedItem"(arg0: StringJS): $Node
set "namedItem"(value: $Node$$Type)
set "namedItemNS"(value: $Node$$Type)
get "length"(): integer
}

export namespace $NamedNodeMap {
const probejs$$marker: never
}
export class $NamedNodeMap$$Static implements $NamedNodeMap {


 "getNamedItem"(arg0: StringJS): $Node
 "setNamedItem"(arg0: $Node$$Type): $Node
 "setNamedItemNS"(arg0: $Node$$Type): $Node
 "getNamedItemNS"(arg0: StringJS, arg1: StringJS): $Node
 "removeNamedItemNS"(arg0: StringJS, arg1: StringJS): $Node
 "item"(arg0: integer): $Node
 "getLength"(): integer
 "removeNamedItem"(arg0: StringJS): $Node
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

 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "getAttributes"(): $NamedNodeMap
 "getLocalName"(): StringJS
 "normalize"(): void
 "hasAttributes"(): boolean
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getPrefix"(): StringJS
 "getChildNodes"(): $NodeList
get "nodeType"(): short
get "lastChild"(): $Node
get "nodeName"(): StringJS
set "nodeValue"(value: StringJS)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): StringJS
get "baseURI"(): StringJS
get "attributes"(): $NamedNodeMap
get "localName"(): StringJS
get "ownerDocument"(): $Document
get "namespaceURI"(): StringJS
set "prefix"(value: StringJS)
get "textContent"(): StringJS
set "textContent"(value: StringJS)
get "prefix"(): StringJS
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


 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "getAttributes"(): $NamedNodeMap
 "getLocalName"(): StringJS
 "normalize"(): void
 "hasAttributes"(): boolean
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getPrefix"(): StringJS
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

 "handle"(arg0: short, arg1: StringJS, arg2: any, arg3: $Node$$Type, arg4: $Node$$Type): void

(arg0: short, arg1: StringJS, arg2: any, arg3: $Node, arg4: $Node): void
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


 "handle"(arg0: short, arg1: StringJS, arg2: any, arg3: $Node$$Type, arg4: $Node$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserDataHandler$$Type = ((arg0: short, arg1: StringJS, arg2: any, arg3: $Node, arg4: $Node) => void);
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

 "item"(arg0: integer): $Node
 "getLength"(): integer
get "length"(): integer
}

export namespace $NodeList {
const probejs$$marker: never
}
export class $NodeList$$Static implements $NodeList {


 "item"(arg0: integer): $Node
 "getLength"(): integer
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

 "setAttributeNodeNS"(arg0: $Attr$$Type): $Attr
 "setAttributeNode"(arg0: $Attr$$Type): $Attr
 "setIdAttributeNode"(arg0: $Attr$$Type, arg1: boolean): void
 "getAttributeNodeNS"(arg0: StringJS, arg1: StringJS): $Attr
 "getAttributeNode"(arg0: StringJS): $Attr
 "setAttributeNS"(arg0: StringJS, arg1: StringJS, arg2: StringJS): void
 "setIdAttribute"(arg0: StringJS, arg1: boolean): void
 "getAttributeNS"(arg0: StringJS, arg1: StringJS): StringJS
 "removeAttributeNS"(arg0: StringJS, arg1: StringJS): void
 "hasAttribute"(arg0: StringJS): boolean
 "hasAttributeNS"(arg0: StringJS, arg1: StringJS): boolean
 "setIdAttributeNS"(arg0: StringJS, arg1: StringJS, arg2: boolean): void
 "getSchemaTypeInfo"(): $TypeInfo
 "setAttribute"(arg0: StringJS, arg1: StringJS): void
 "getAttribute"(arg0: StringJS): StringJS
 "removeAttribute"(arg0: StringJS): void
 "removeAttributeNode"(arg0: $Attr$$Type): $Attr
 "getElementsByTagName"(arg0: StringJS): $NodeList
 "getElementsByTagNameNS"(arg0: StringJS, arg1: StringJS): $NodeList
 "getTagName"(): StringJS
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "getAttributes"(): $NamedNodeMap
 "getLocalName"(): StringJS
 "normalize"(): void
 "hasAttributes"(): boolean
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getPrefix"(): StringJS
 "getChildNodes"(): $NodeList
set "attributeNodeNS"(value: $Attr$$Type)
set "attributeNode"(value: $Attr$$Type)
get "schemaTypeInfo"(): $TypeInfo
get "tagName"(): StringJS
get "nodeType"(): short
get "lastChild"(): $Node
get "nodeName"(): StringJS
set "nodeValue"(value: StringJS)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): StringJS
get "baseURI"(): StringJS
get "attributes"(): $NamedNodeMap
get "localName"(): StringJS
get "ownerDocument"(): $Document
get "namespaceURI"(): StringJS
set "prefix"(value: StringJS)
get "textContent"(): StringJS
set "textContent"(value: StringJS)
get "prefix"(): StringJS
get "childNodes"(): $NodeList
}

export namespace $Element {
const probejs$$marker: never
}
export class $Element$$Static implements $Element {


 "setAttributeNodeNS"(arg0: $Attr$$Type): $Attr
 "setAttributeNode"(arg0: $Attr$$Type): $Attr
 "setIdAttributeNode"(arg0: $Attr$$Type, arg1: boolean): void
 "getAttributeNodeNS"(arg0: StringJS, arg1: StringJS): $Attr
 "getAttributeNode"(arg0: StringJS): $Attr
 "setAttributeNS"(arg0: StringJS, arg1: StringJS, arg2: StringJS): void
 "setIdAttribute"(arg0: StringJS, arg1: boolean): void
 "getAttributeNS"(arg0: StringJS, arg1: StringJS): StringJS
 "removeAttributeNS"(arg0: StringJS, arg1: StringJS): void
 "hasAttribute"(arg0: StringJS): boolean
 "hasAttributeNS"(arg0: StringJS, arg1: StringJS): boolean
 "setIdAttributeNS"(arg0: StringJS, arg1: StringJS, arg2: boolean): void
 "getSchemaTypeInfo"(): $TypeInfo
 "setAttribute"(arg0: StringJS, arg1: StringJS): void
 "getAttribute"(arg0: StringJS): StringJS
 "removeAttribute"(arg0: StringJS): void
 "removeAttributeNode"(arg0: $Attr$$Type): $Attr
 "getElementsByTagName"(arg0: StringJS): $NodeList
 "getElementsByTagNameNS"(arg0: StringJS, arg1: StringJS): $NodeList
 "getTagName"(): StringJS
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "getAttributes"(): $NamedNodeMap
 "getLocalName"(): StringJS
 "normalize"(): void
 "hasAttributes"(): boolean
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getPrefix"(): StringJS
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
