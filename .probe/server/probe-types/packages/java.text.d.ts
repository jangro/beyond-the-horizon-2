declare module "java.text.CharacterIterator" {
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"

export interface $CharacterIterator extends $Cloneable {

 "previous"(): character
 "getIndex"(): integer
 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "setIndex"(arg0: integer): character
 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
get "index"(): integer
get "beginIndex"(): integer
get "endIndex"(): integer
set "index"(value: integer)
}

export namespace $CharacterIterator {
const DONE: character
const probejs$$marker: never
}
export class $CharacterIterator$$Static implements $CharacterIterator {
static readonly "DONE": character


 "previous"(): character
 "getIndex"(): integer
 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "setIndex"(arg0: integer): character
 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharacterIterator$$Type = ($CharacterIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharacterIterator_ = $CharacterIterator$$Type;
}}
declare module "java.text.ParsePosition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ParsePosition {

constructor(arg0: integer)

public "getIndex"(): integer
public "setIndex"(arg0: integer): void
public "setErrorIndex"(arg0: integer): void
public "getErrorIndex"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
get "index"(): integer
set "index"(value: integer)
set "errorIndex"(value: integer)
get "errorIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsePosition$$Type = ($ParsePosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParsePosition_ = $ParsePosition$$Type;
}}
declare module "java.text.DecimalFormat" {
import {$AttributedCharacterIterator, $AttributedCharacterIterator$$Type} from "java.text.AttributedCharacterIterator"
import {$ParsePosition, $ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$NumberFormat, $NumberFormat$$Type} from "java.text.NumberFormat"
import {$FieldPosition, $FieldPosition$$Type} from "java.text.FieldPosition"
import {$Currency, $Currency$$Type} from "java.util.Currency"
import {$DecimalFormatSymbols, $DecimalFormatSymbols$$Type} from "java.text.DecimalFormatSymbols"
import {$RoundingMode, $RoundingMode$$Type} from "java.math.RoundingMode"

export class $DecimalFormat extends $NumberFormat {
static readonly "FRACTION_FIELD": integer
static readonly "INTEGER_FIELD": integer

constructor(arg0: StringJS)
constructor()
constructor(arg0: StringJS, arg1: $DecimalFormatSymbols$$Type)

public "isParseBigDecimal"(): boolean
public "setDecimalFormatSymbols"(arg0: $DecimalFormatSymbols$$Type): void
public "getPositivePrefix"(): StringJS
public "setPositivePrefix"(arg0: StringJS): void
public "getNegativePrefix"(): StringJS
public "setNegativePrefix"(arg0: StringJS): void
public "getPositiveSuffix"(): StringJS
public "setPositiveSuffix"(arg0: StringJS): void
public "getNegativeSuffix"(): StringJS
public "setNegativeSuffix"(arg0: StringJS): void
public "getMultiplier"(): integer
public "setMultiplier"(arg0: integer): void
public "setGroupingSize"(arg0: integer): void
public "isDecimalSeparatorAlwaysShown"(): boolean
public "setParseBigDecimal"(arg0: boolean): void
public "getGroupingSize"(): integer
public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "setGroupingUsed"(arg0: boolean): void
public "getDecimalFormatSymbols"(): $DecimalFormatSymbols
public "setMinimumIntegerDigits"(arg0: integer): void
public "setMaximumIntegerDigits"(arg0: integer): void
public "toLocalizedPattern"(): StringJS
public "applyPattern"(arg0: StringJS): void
public "applyLocalizedPattern"(arg0: StringJS): void
public "getRoundingMode"(): $RoundingMode
public "getMaximumIntegerDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public "getMaximumFractionDigits"(): integer
public "setMaximumFractionDigits"(arg0: integer): void
public "getMinimumFractionDigits"(): integer
public "setMinimumFractionDigits"(arg0: integer): void
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$$Type): void
public "setRoundingMode"(arg0: $RoundingMode$$Type): void
public "setDecimalSeparatorAlwaysShown"(arg0: boolean): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: long, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: double, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): number
public "toPattern"(): StringJS
get "parseBigDecimal"(): boolean
set "decimalFormatSymbols"(value: $DecimalFormatSymbols$$Type)
get "positivePrefix"(): StringJS
set "positivePrefix"(value: StringJS)
get "negativePrefix"(): StringJS
set "negativePrefix"(value: StringJS)
get "positiveSuffix"(): StringJS
set "positiveSuffix"(value: StringJS)
get "negativeSuffix"(): StringJS
set "negativeSuffix"(value: StringJS)
get "multiplier"(): integer
set "multiplier"(value: integer)
set "groupingSize"(value: integer)
get "decimalSeparatorAlwaysShown"(): boolean
set "parseBigDecimal"(value: boolean)
get "groupingSize"(): integer
set "groupingUsed"(value: boolean)
get "decimalFormatSymbols"(): $DecimalFormatSymbols
set "minimumIntegerDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
get "roundingMode"(): $RoundingMode
get "maximumIntegerDigits"(): integer
get "minimumIntegerDigits"(): integer
get "maximumFractionDigits"(): integer
set "maximumFractionDigits"(value: integer)
get "minimumFractionDigits"(): integer
set "minimumFractionDigits"(value: integer)
get "currency"(): $Currency
set "currency"(value: $Currency$$Type)
set "roundingMode"(value: $RoundingMode$$Type)
set "decimalSeparatorAlwaysShown"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalFormat$$Type = ($DecimalFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecimalFormat_ = $DecimalFormat$$Type;
}}
declare module "java.text.AttributedCharacterIterator" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$CharacterIterator, $CharacterIterator$$Type} from "java.text.CharacterIterator"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$$Type} from "java.text.AttributedCharacterIterator$Attribute"

export interface $AttributedCharacterIterator extends $CharacterIterator {

 "getAttributes"(): $Map<($AttributedCharacterIterator$Attribute), (any)>
 "getAttribute"(arg0: $AttributedCharacterIterator$Attribute$$Type): any
 "getAllAttributeKeys"(): $Set<($AttributedCharacterIterator$Attribute)>
 "getRunStart"(): integer
 "getRunStart"(arg0: $Set$$Type<($AttributedCharacterIterator$Attribute$$Type)>): integer
 "getRunStart"(arg0: $AttributedCharacterIterator$Attribute$$Type): integer
 "getRunLimit"(arg0: $AttributedCharacterIterator$Attribute$$Type): integer
 "getRunLimit"(): integer
 "getRunLimit"(arg0: $Set$$Type<($AttributedCharacterIterator$Attribute$$Type)>): integer
 "previous"(): character
 "getIndex"(): integer
 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "setIndex"(arg0: integer): character
 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
get "attributes"(): $Map<($AttributedCharacterIterator$Attribute), (any)>
get "allAttributeKeys"(): $Set<($AttributedCharacterIterator$Attribute)>
get "runStart"(): integer
get "runLimit"(): integer
get "index"(): integer
get "beginIndex"(): integer
get "endIndex"(): integer
set "index"(value: integer)
}

export namespace $AttributedCharacterIterator {
const probejs$$marker: never
}
export class $AttributedCharacterIterator$$Static implements $AttributedCharacterIterator {


 "getAttributes"(): $Map<($AttributedCharacterIterator$Attribute), (any)>
 "getAttribute"(arg0: $AttributedCharacterIterator$Attribute$$Type): any
 "getAllAttributeKeys"(): $Set<($AttributedCharacterIterator$Attribute)>
 "getRunStart"(): integer
 "getRunStart"(arg0: $Set$$Type<($AttributedCharacterIterator$Attribute$$Type)>): integer
 "getRunStart"(arg0: $AttributedCharacterIterator$Attribute$$Type): integer
 "getRunLimit"(arg0: $AttributedCharacterIterator$Attribute$$Type): integer
 "getRunLimit"(): integer
 "getRunLimit"(arg0: $Set$$Type<($AttributedCharacterIterator$Attribute$$Type)>): integer
 "previous"(): character
 "getIndex"(): integer
 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "setIndex"(arg0: integer): character
 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributedCharacterIterator$$Type = ($AttributedCharacterIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributedCharacterIterator_ = $AttributedCharacterIterator$$Type;
}}
declare module "java.text.DateFormatSymbols" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export class $DateFormatSymbols implements $Serializable, $Cloneable {

constructor(arg0: $Locale$$Type)
constructor()

public static "getAvailableLocales"(): ($Locale)[]
public "setEras"(arg0: (StringJS)[]): void
public "getMonths"(): (StringJS)[]
public "getShortMonths"(): (StringJS)[]
public "getWeekdays"(): (StringJS)[]
public "getShortWeekdays"(): (StringJS)[]
public "getAmPmStrings"(): (StringJS)[]
public "getLocalPatternChars"(): StringJS
public "getEras"(): (StringJS)[]
public "getZoneStrings"(): ((StringJS)[])[]
public "setMonths"(arg0: (StringJS)[]): void
public "setShortMonths"(arg0: (StringJS)[]): void
public "setWeekdays"(arg0: (StringJS)[]): void
public "setShortWeekdays"(arg0: (StringJS)[]): void
public "setAmPmStrings"(arg0: (StringJS)[]): void
public "setZoneStrings"(arg0: ((StringJS)[])[]): void
public "setLocalPatternChars"(arg0: StringJS): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "getInstance"(): $DateFormatSymbols
public static "getInstance"(arg0: $Locale$$Type): $DateFormatSymbols
set "eras"(value: (StringJS)[])
get "months"(): (StringJS)[]
get "shortMonths"(): (StringJS)[]
get "weekdays"(): (StringJS)[]
get "shortWeekdays"(): (StringJS)[]
get "amPmStrings"(): (StringJS)[]
get "localPatternChars"(): StringJS
get "eras"(): (StringJS)[]
get "zoneStrings"(): ((StringJS)[])[]
set "months"(value: (StringJS)[])
set "shortMonths"(value: (StringJS)[])
set "weekdays"(value: (StringJS)[])
set "shortWeekdays"(value: (StringJS)[])
set "amPmStrings"(value: (StringJS)[])
set "zoneStrings"(value: ((StringJS)[])[])
set "localPatternChars"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateFormatSymbols$$Type = ($DateFormatSymbols);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DateFormatSymbols_ = $DateFormatSymbols$$Type;
}}
declare module "java.text.Format$Field" {
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$$Type} from "java.text.AttributedCharacterIterator$Attribute"

export class $Format$Field extends $AttributedCharacterIterator$Attribute {
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Format$Field$$Type = ($Format$Field);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Format$Field_ = $Format$Field$$Type;
}}
declare module "java.text.NumberFormat$Style" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $NumberFormat$Style extends $Enum<($NumberFormat$Style)> {
static readonly "SHORT": $NumberFormat$Style
static readonly "LONG": $NumberFormat$Style


public static "values"(): ($NumberFormat$Style)[]
public static "valueOf"(arg0: StringJS): $NumberFormat$Style
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormat$Style$$Type = (("short") | ("long"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberFormat$Style_ = $NumberFormat$Style$$Type;
}}
declare module "java.text.FieldPosition" {
import {$Format$Field, $Format$Field$$Type} from "java.text.Format$Field"

export class $FieldPosition {

constructor(arg0: $Format$Field$$Type)
constructor(arg0: integer)
constructor(arg0: $Format$Field$$Type, arg1: integer)

public "setBeginIndex"(arg0: integer): void
public "setEndIndex"(arg0: integer): void
public "getFieldAttribute"(): $Format$Field
public "getBeginIndex"(): integer
public "getEndIndex"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getField"(): integer
set "beginIndex"(value: integer)
set "endIndex"(value: integer)
get "fieldAttribute"(): $Format$Field
get "beginIndex"(): integer
get "endIndex"(): integer
get "field"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldPosition$$Type = ($FieldPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldPosition_ = $FieldPosition$$Type;
}}
declare module "java.text.NumberFormat" {
import {$ParsePosition, $ParsePosition$$Type} from "java.text.ParsePosition"
import {$FieldPosition, $FieldPosition$$Type} from "java.text.FieldPosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$NumberFormat$Style, $NumberFormat$Style$$Type} from "java.text.NumberFormat$Style"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Format, $Format$$Type} from "java.text.Format"
import {$Currency, $Currency$$Type} from "java.util.Currency"
import {$RoundingMode, $RoundingMode$$Type} from "java.math.RoundingMode"

export class $NumberFormat extends $Format {
static readonly "FRACTION_FIELD": integer
static readonly "INTEGER_FIELD": integer


public static "getAvailableLocales"(): ($Locale)[]
public static "getNumberInstance"(): $NumberFormat
public static "getNumberInstance"(arg0: $Locale$$Type): $NumberFormat
public "isGroupingUsed"(): boolean
public "parseObject"(arg0: StringJS, arg1: $ParsePosition$$Type): any
public static "getIntegerInstance"(): $NumberFormat
public static "getIntegerInstance"(arg0: $Locale$$Type): $NumberFormat
public "setGroupingUsed"(arg0: boolean): void
public "setMinimumIntegerDigits"(arg0: integer): void
public "setMaximumIntegerDigits"(arg0: integer): void
public "getRoundingMode"(): $RoundingMode
public "isParseIntegerOnly"(): boolean
public "setParseIntegerOnly"(arg0: boolean): void
public "getMaximumIntegerDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public "getMaximumFractionDigits"(): integer
public "setMaximumFractionDigits"(arg0: integer): void
public "getMinimumFractionDigits"(): integer
public "setMinimumFractionDigits"(arg0: integer): void
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$$Type): void
public "setRoundingMode"(arg0: $RoundingMode$$Type): void
public static "getCurrencyInstance"(): $NumberFormat
public static "getCurrencyInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getPercentInstance"(): $NumberFormat
public static "getPercentInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getCompactNumberInstance"(): $NumberFormat
public static "getCompactNumberInstance"(arg0: $Locale$$Type, arg1: $NumberFormat$Style$$Type): $NumberFormat
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: long, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: double, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: long): StringJS
public "format"(arg0: double): StringJS
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public static "getInstance"(arg0: $Locale$$Type): $NumberFormat
public static "getInstance"(): $NumberFormat
public "parse"(arg0: StringJS): number
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): number
get "groupingUsed"(): boolean
set "groupingUsed"(value: boolean)
set "minimumIntegerDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
get "roundingMode"(): $RoundingMode
get "parseIntegerOnly"(): boolean
set "parseIntegerOnly"(value: boolean)
get "maximumIntegerDigits"(): integer
get "minimumIntegerDigits"(): integer
get "maximumFractionDigits"(): integer
set "maximumFractionDigits"(value: integer)
get "minimumFractionDigits"(): integer
set "minimumFractionDigits"(value: integer)
get "currency"(): $Currency
set "currency"(value: $Currency$$Type)
set "roundingMode"(value: $RoundingMode$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormat$$Type = ($NumberFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberFormat_ = $NumberFormat$$Type;
}}
declare module "java.text.DecimalFormatSymbols" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Currency, $Currency$$Type} from "java.util.Currency"

export class $DecimalFormatSymbols implements $Cloneable, $Serializable {

constructor(arg0: $Locale$$Type)
constructor()

public static "getAvailableLocales"(): ($Locale)[]
public "getLocale"(): $Locale
public "getDecimalSeparator"(): character
public "getGroupingSeparator"(): character
public "getZeroDigit"(): character
public "getMinusSign"(): character
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$$Type): void
public "getInternationalCurrencySymbol"(): StringJS
public "getCurrencySymbol"(): StringJS
public "setZeroDigit"(arg0: character): void
public "setGroupingSeparator"(arg0: character): void
public "setDecimalSeparator"(arg0: character): void
public "getPerMill"(): character
public "setPerMill"(arg0: character): void
public "getPercent"(): character
public "setPercent"(arg0: character): void
public "getDigit"(): character
public "setDigit"(arg0: character): void
public "getPatternSeparator"(): character
public "setPatternSeparator"(arg0: character): void
public "getInfinity"(): StringJS
public "setInfinity"(arg0: StringJS): void
public "getNaN"(): StringJS
public "setNaN"(arg0: StringJS): void
public "setMinusSign"(arg0: character): void
public "setCurrencySymbol"(arg0: StringJS): void
public "setInternationalCurrencySymbol"(arg0: StringJS): void
public "getMonetaryDecimalSeparator"(): character
public "setMonetaryDecimalSeparator"(arg0: character): void
public "getExponentSeparator"(): StringJS
public "setExponentSeparator"(arg0: StringJS): void
public "getMonetaryGroupingSeparator"(): character
public "setMonetaryGroupingSeparator"(arg0: character): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "getInstance"(arg0: $Locale$$Type): $DecimalFormatSymbols
public static "getInstance"(): $DecimalFormatSymbols
get "locale"(): $Locale
get "decimalSeparator"(): character
get "groupingSeparator"(): character
get "zeroDigit"(): character
get "minusSign"(): character
get "currency"(): $Currency
set "currency"(value: $Currency$$Type)
get "internationalCurrencySymbol"(): StringJS
get "currencySymbol"(): StringJS
set "zeroDigit"(value: character)
set "groupingSeparator"(value: character)
set "decimalSeparator"(value: character)
get "perMill"(): character
set "perMill"(value: character)
get "percent"(): character
set "percent"(value: character)
get "digit"(): character
set "digit"(value: character)
get "patternSeparator"(): character
set "patternSeparator"(value: character)
get "infinity"(): StringJS
set "infinity"(value: StringJS)
get "naN"(): StringJS
set "naN"(value: StringJS)
set "minusSign"(value: character)
set "currencySymbol"(value: StringJS)
set "internationalCurrencySymbol"(value: StringJS)
get "monetaryDecimalSeparator"(): character
set "monetaryDecimalSeparator"(value: character)
get "exponentSeparator"(): StringJS
set "exponentSeparator"(value: StringJS)
get "monetaryGroupingSeparator"(): character
set "monetaryGroupingSeparator"(value: character)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalFormatSymbols$$Type = ($DecimalFormatSymbols);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecimalFormatSymbols_ = $DecimalFormatSymbols$$Type;
}}
declare module "java.text.Format" {
import {$AttributedCharacterIterator, $AttributedCharacterIterator$$Type} from "java.text.AttributedCharacterIterator"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ParsePosition, $ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$FieldPosition, $FieldPosition$$Type} from "java.text.FieldPosition"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"

export class $Format implements $Serializable, $Cloneable {


public "parseObject"(arg0: StringJS, arg1: $ParsePosition$$Type): any
public "parseObject"(arg0: StringJS): any
public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "clone"(): any
public "format"(arg0: any): StringJS
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Format$$Type = ($Format);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Format_ = $Format$$Type;
}}
declare module "java.text.DateFormat" {
import {$ParsePosition, $ParsePosition$$Type} from "java.text.ParsePosition"
import {$FieldPosition, $FieldPosition$$Type} from "java.text.FieldPosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$NumberFormat, $NumberFormat$$Type} from "java.text.NumberFormat"
import {$Date, $Date$$Type} from "java.util.Date"
import {$TimeZone, $TimeZone$$Type} from "java.util.TimeZone"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Format, $Format$$Type} from "java.text.Format"
import {$Calendar, $Calendar$$Type} from "java.util.Calendar"

export class $DateFormat extends $Format {
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DATE_FIELD": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "MEDIUM": integer
static readonly "YEAR_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "MINUTE_FIELD": integer
static readonly "FULL": integer
static readonly "ERA_FIELD": integer
static readonly "AM_PM_FIELD": integer
static readonly "SHORT": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
static readonly "MONTH_FIELD": integer
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "HOUR0_FIELD": integer
static readonly "DEFAULT": integer
static readonly "SECOND_FIELD": integer
static readonly "LONG": integer


public static "getAvailableLocales"(): ($Locale)[]
public "setLenient"(arg0: boolean): void
public static "getDateInstance"(arg0: integer): $DateFormat
public static "getDateInstance"(): $DateFormat
public static "getDateInstance"(arg0: integer, arg1: $Locale$$Type): $DateFormat
public static "getTimeInstance"(arg0: integer, arg1: $Locale$$Type): $DateFormat
public static "getTimeInstance"(arg0: integer): $DateFormat
public static "getTimeInstance"(): $DateFormat
public "parseObject"(arg0: StringJS, arg1: $ParsePosition$$Type): any
public "setCalendar"(arg0: $Calendar$$Type): void
public "getCalendar"(): $Calendar
public "setNumberFormat"(arg0: $NumberFormat$$Type): void
public "getNumberFormat"(): $NumberFormat
public static "getDateTimeInstance"(arg0: integer, arg1: integer, arg2: $Locale$$Type): $DateFormat
public static "getDateTimeInstance"(): $DateFormat
public static "getDateTimeInstance"(arg0: integer, arg1: integer): $DateFormat
public "getTimeZone"(): $TimeZone
public "setTimeZone"(arg0: $TimeZone$$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: $Date$$Type): StringJS
public "format"(arg0: any, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "format"(arg0: $Date$$Type, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public static "getInstance"(): $DateFormat
public "parse"(arg0: StringJS): $Date
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): $Date
public "isLenient"(): boolean
set "lenient"(value: boolean)
set "calendar"(value: $Calendar$$Type)
get "calendar"(): $Calendar
set "numberFormat"(value: $NumberFormat$$Type)
get "numberFormat"(): $NumberFormat
get "timeZone"(): $TimeZone
set "timeZone"(value: $TimeZone$$Type)
get "lenient"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateFormat$$Type = ($DateFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DateFormat_ = $DateFormat$$Type;
}}
declare module "java.text.SimpleDateFormat" {
import {$AttributedCharacterIterator, $AttributedCharacterIterator$$Type} from "java.text.AttributedCharacterIterator"
import {$DateFormatSymbols, $DateFormatSymbols$$Type} from "java.text.DateFormatSymbols"
import {$ParsePosition, $ParsePosition$$Type} from "java.text.ParsePosition"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$FieldPosition, $FieldPosition$$Type} from "java.text.FieldPosition"
import {$Date, $Date$$Type} from "java.util.Date"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$DateFormat, $DateFormat$$Type} from "java.text.DateFormat"

export class $SimpleDateFormat extends $DateFormat {
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DATE_FIELD": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "MEDIUM": integer
static readonly "YEAR_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "MINUTE_FIELD": integer
static readonly "FULL": integer
static readonly "ERA_FIELD": integer
static readonly "AM_PM_FIELD": integer
static readonly "SHORT": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
static readonly "MONTH_FIELD": integer
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "HOUR0_FIELD": integer
static readonly "DEFAULT": integer
static readonly "SECOND_FIELD": integer
static readonly "LONG": integer

constructor(arg0: StringJS, arg1: $Locale$$Type)
constructor(arg0: StringJS)
constructor()
constructor(arg0: StringJS, arg1: $DateFormatSymbols$$Type)

public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "set2DigitYearStart"(arg0: $Date$$Type): void
public "get2DigitYearStart"(): $Date
public "toLocalizedPattern"(): StringJS
public "applyPattern"(arg0: StringJS): void
public "applyLocalizedPattern"(arg0: StringJS): void
public "getDateFormatSymbols"(): $DateFormatSymbols
public "setDateFormatSymbols"(arg0: $DateFormatSymbols$$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: $Date$$Type, arg1: $StringBuffer$$Type, arg2: $FieldPosition$$Type): $StringBuffer
public "parse"(arg0: StringJS, arg1: $ParsePosition$$Type): $Date
public "toPattern"(): StringJS
set "2DigitYearStart"(value: $Date$$Type)
get "2DigitYearStart"(): $Date
get "dateFormatSymbols"(): $DateFormatSymbols
set "dateFormatSymbols"(value: $DateFormatSymbols$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDateFormat$$Type = ($SimpleDateFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleDateFormat_ = $SimpleDateFormat$$Type;
}}
declare module "java.text.AttributedCharacterIterator$Attribute" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export class $AttributedCharacterIterator$Attribute implements $Serializable {
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute


public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributedCharacterIterator$Attribute$$Type = ($AttributedCharacterIterator$Attribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributedCharacterIterator$Attribute_ = $AttributedCharacterIterator$Attribute$$Type;
}}
