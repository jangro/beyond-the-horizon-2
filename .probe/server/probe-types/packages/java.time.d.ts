declare module "java.time.temporal.ValueRange" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $ValueRange implements $Serializable {


public "isValidIntValue"(arg0: long): boolean
public "isFixed"(): boolean
public "getLargestMinimum"(): long
public "getSmallestMaximum"(): long
public "getMaximum"(): long
public "checkValidValue"(arg0: long, arg1: $TemporalField$$Type): long
public "isIntValue"(): boolean
public "isValidValue"(arg0: long): boolean
public "checkValidIntValue"(arg0: long, arg1: $TemporalField$$Type): integer
public "getMinimum"(): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: long, arg1: long): $ValueRange
public static "of"(arg0: long, arg1: long, arg2: long): $ValueRange
public static "of"(arg0: long, arg1: long, arg2: long, arg3: long): $ValueRange
get "fixed"(): boolean
get "largestMinimum"(): long
get "smallestMaximum"(): long
get "maximum"(): long
get "intValue"(): boolean
get "minimum"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueRange$$Type = ($ValueRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueRange_ = $ValueRange$$Type;
}}
declare module "java.time.temporal.TemporalAdjuster" {
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalAdjuster {

 "adjustInto"(arg0: $Temporal$$Type): $Temporal

(arg0: $Temporal): $Temporal$$Type
}

export namespace $TemporalAdjuster {
const probejs$$marker: never
}
export class $TemporalAdjuster$$Static implements $TemporalAdjuster {


 "adjustInto"(arg0: $Temporal$$Type): $Temporal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAdjuster$$Type = ((arg0: $Temporal) => $Temporal$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalAdjuster_ = $TemporalAdjuster$$Type;
}}
declare module "java.time.chrono.Era" {
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $Era extends $TemporalAccessor, $TemporalAdjuster {

 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "getValue"(): integer
 "isSupported"(arg0: $TemporalField$$Type): boolean

(): integer
get "value"(): integer
}

export namespace $Era {
const probejs$$marker: never
}
export class $Era$$Static implements $Era {


 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "getValue"(): integer
 "isSupported"(arg0: $TemporalField$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Era$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Era_ = $Era$$Type;
}}
declare module "java.time.temporal.TemporalAmount" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$List, $List$$Type} from "java.util.List"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalAmount {

 "getUnits"(): $List<($TemporalUnit)>
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
 "get"(arg0: $TemporalUnit$$Type): long
get "units"(): $List<($TemporalUnit)>
}

export namespace $TemporalAmount {
const probejs$$marker: never
}
export class $TemporalAmount$$Static implements $TemporalAmount {


 "getUnits"(): $List<($TemporalUnit)>
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
 "get"(arg0: $TemporalUnit$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAmount$$Type = ($TemporalAmount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalAmount_ = $TemporalAmount$$Type;
}}
declare module "java.time.chrono.ChronoZonedDateTime" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export interface $ChronoZonedDateTime<D extends $ChronoLocalDate> extends $Temporal, $Comparable<($ChronoZonedDateTime<(any)>)> {

 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "getOffset"(): $ZoneOffset
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoZonedDateTime<(D)>
 "minus"(arg0: $TemporalAmount$$Type): $ChronoZonedDateTime<(D)>
 "toInstant"(): $Instant
 "isEqual"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "toEpochSecond"(): long
 "getZone"(): $ZoneId
 "isAfter"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "getChronology"(): $Chronology
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoZonedDateTime<(D)>
 "withZoneSameInstant"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "get"(arg0: $TemporalField$$Type): integer
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: any): integer
 "compareTo"(arg0: $ChronoZonedDateTime$$Type<(any)>): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "toLocalDate"(): D
 "toLocalTime"(): $LocalTime
 "toLocalDateTime"(): $ChronoLocalDateTime<(D)>
 "withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
get "offset"(): $ZoneOffset
get "zone"(): $ZoneId
get "chronology"(): $Chronology
}

export namespace $ChronoZonedDateTime {
function timeLineOrder(): $Comparator<($ChronoZonedDateTime<(any)>)>
function from(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<(any)>
const probejs$$marker: never
}
export class $ChronoZonedDateTime$$Static<D extends $ChronoLocalDate> implements $ChronoZonedDateTime {


 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "getOffset"(): $ZoneOffset
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoZonedDateTime<(D)>
 "minus"(arg0: $TemporalAmount$$Type): $ChronoZonedDateTime<(D)>
 "toInstant"(): $Instant
 "isEqual"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "toEpochSecond"(): long
 "getZone"(): $ZoneId
 "isAfter"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
 "getChronology"(): $Chronology
static "timeLineOrder"(): $Comparator<($ChronoZonedDateTime<(any)>)>
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoZonedDateTime<(D)>
 "withZoneSameInstant"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "get"(arg0: $TemporalField$$Type): integer
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: any): integer
 "compareTo"(arg0: $ChronoZonedDateTime$$Type<(any)>): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
static "from"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<(any)>
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "toLocalDate"(): D
 "toLocalTime"(): $LocalTime
 "toLocalDateTime"(): $ChronoLocalDateTime<(D)>
 "withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoZonedDateTime$$Type<D> = ($ChronoZonedDateTime<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoZonedDateTime_<D> = $ChronoZonedDateTime$$Type<(D)>;
}}
declare module "java.time.temporal.ChronoUnit" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export class $ChronoUnit extends $Enum<($ChronoUnit)> implements $TemporalUnit {
static readonly "FOREVER": $ChronoUnit
static readonly "MICROS": $ChronoUnit
static readonly "SECONDS": $ChronoUnit
static readonly "DECADES": $ChronoUnit
static readonly "MILLENNIA": $ChronoUnit
static readonly "DAYS": $ChronoUnit
static readonly "MILLIS": $ChronoUnit
static readonly "HALF_DAYS": $ChronoUnit
static readonly "MONTHS": $ChronoUnit
static readonly "YEARS": $ChronoUnit
static readonly "HOURS": $ChronoUnit
static readonly "WEEKS": $ChronoUnit
static readonly "NANOS": $ChronoUnit
static readonly "CENTURIES": $ChronoUnit
static readonly "MINUTES": $ChronoUnit
static readonly "ERAS": $ChronoUnit


public "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): long
public "getDuration"(): $Duration
public "isDurationEstimated"(): boolean
public "isDateBased"(): boolean
public "isTimeBased"(): boolean
public "isSupportedBy"(arg0: $Temporal$$Type): boolean
public "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
public "toString"(): StringJS
public static "values"(): ($ChronoUnit)[]
public static "valueOf"(arg0: StringJS): $ChronoUnit
get "duration"(): $Duration
get "durationEstimated"(): boolean
get "dateBased"(): boolean
get "timeBased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoUnit$$Type = (("nanos") | ("micros") | ("millis") | ("seconds") | ("minutes") | ("hours") | ("half_days") | ("days") | ("weeks") | ("months") | ("years") | ("decades") | ("centuries") | ("millennia") | ("eras") | ("forever"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoUnit_ = $ChronoUnit$$Type;
}}
declare module "java.time.Month" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $Month extends $Enum<($Month)> implements $TemporalAccessor, $TemporalAdjuster {
static readonly "JANUARY": $Month
static readonly "JUNE": $Month
static readonly "MAY": $Month
static readonly "OCTOBER": $Month
static readonly "DECEMBER": $Month
static readonly "MARCH": $Month
static readonly "FEBRUARY": $Month
static readonly "AUGUST": $Month
static readonly "JULY": $Month
static readonly "SEPTEMBER": $Month
static readonly "NOVEMBER": $Month
static readonly "APRIL": $Month


public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "minus"(arg0: long): $Month
public "maxLength"(): integer
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public "firstMonthOfQuarter"(): $Month
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "firstDayOfYear"(arg0: boolean): integer
public "minLength"(): integer
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long): $Month
public "get"(arg0: $TemporalField$$Type): integer
public "length"(arg0: boolean): integer
public static "values"(): ($Month)[]
public "getLong"(arg0: $TemporalField$$Type): long
public static "valueOf"(arg0: StringJS): $Month
public "getValue"(): integer
public static "of"(arg0: integer): $Month
public static "from"(arg0: $TemporalAccessor$$Type): $Month
public "isSupported"(arg0: $TemporalField$$Type): boolean
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Month$$Type = (("january") | ("february") | ("march") | ("april") | ("may") | ("june") | ("july") | ("august") | ("september") | ("october") | ("november") | ("december"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Month_ = $Month$$Type;
}}
declare module "java.time.Duration" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export class $Duration implements $TemporalAmount, $Comparable<($Duration)>, $Serializable {
static readonly "ZERO": $Duration


public static "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): $Duration
public "toSeconds"(): long
public "getSeconds"(): long
public "getNano"(): integer
public "toMinutes"(): long
public "toHours"(): long
public "toDays"(): long
public "isNegative"(): boolean
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public "minus"(arg0: $Duration$$Type): $Duration
public "isPositive"(): boolean
public static "ofNanos"(arg0: long): $Duration
public static "ofSeconds"(arg0: long): $Duration
public static "ofSeconds"(arg0: long, arg1: long): $Duration
public "getUnits"(): $List<($TemporalUnit)>
public "negated"(): $Duration
public "plusMillis"(arg0: long): $Duration
public "multipliedBy"(arg0: long): $Duration
public static "ofDays"(arg0: long): $Duration
public static "ofHours"(arg0: long): $Duration
public static "ofMinutes"(arg0: long): $Duration
public static "ofMillis"(arg0: long): $Duration
public "withSeconds"(arg0: long): $Duration
public "withNanos"(arg0: integer): $Duration
public "minusMillis"(arg0: long): $Duration
public "dividedBy"(arg0: long): $Duration
public "dividedBy"(arg0: $Duration$$Type): long
public "toDaysPart"(): long
public "toHoursPart"(): integer
public "toMinutesPart"(): integer
public "toSecondsPart"(): integer
public "toMillisPart"(): integer
public "toNanosPart"(): integer
public "plusSeconds"(arg0: long): $Duration
public "truncatedTo"(arg0: $TemporalUnit$$Type): $Duration
public "addTo"(arg0: $Temporal$$Type): $Temporal
public "plusNanos"(arg0: long): $Duration
public "plusDays"(arg0: long): $Duration
public "plusMinutes"(arg0: long): $Duration
public "plusHours"(arg0: long): $Duration
public "subtractFrom"(arg0: $Temporal$$Type): $Temporal
public "minusDays"(arg0: long): $Duration
public "minusHours"(arg0: long): $Duration
public "minusMinutes"(arg0: long): $Duration
public "minusSeconds"(arg0: long): $Duration
public "minusNanos"(arg0: long): $Duration
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public "plus"(arg0: $Duration$$Type): $Duration
public "isZero"(): boolean
public "get"(arg0: $TemporalUnit$$Type): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "abs"(): $Duration
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Duration$$Type): integer
public static "of"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public static "from"(arg0: $TemporalAmount$$Type): $Duration
public "toNanos"(): long
public "toMillis"(): long
public static "parse"(arg0: charseq): $Duration
get "seconds"(): long
get "nano"(): integer
get "negative"(): boolean
get "positive"(): boolean
get "units"(): $List<($TemporalUnit)>
get "zero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Duration$$Type = ($Duration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Duration_ = $Duration$$Type;
}}
declare module "java.time.format.DecimalStyle" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export class $DecimalStyle {
static readonly "STANDARD": $DecimalStyle


public static "getAvailableLocales"(): $Set<($Locale)>
public "getDecimalSeparator"(): character
public "getZeroDigit"(): character
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $Locale$$Type): $DecimalStyle
public "getPositiveSign"(): character
public "getNegativeSign"(): character
public static "ofDefaultLocale"(): $DecimalStyle
public "withZeroDigit"(arg0: character): $DecimalStyle
public "withPositiveSign"(arg0: character): $DecimalStyle
public "withNegativeSign"(arg0: character): $DecimalStyle
public "withDecimalSeparator"(arg0: character): $DecimalStyle
get "decimalSeparator"(): character
get "zeroDigit"(): character
get "positiveSign"(): character
get "negativeSign"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalStyle$$Type = ($DecimalStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecimalStyle_ = $DecimalStyle$$Type;
}}
declare module "java.time.InstantSource" {
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export interface $InstantSource {

 "instant"(): $Instant
 "millis"(): long
 "withZone"(arg0: $ZoneId$$Type): $Clock

(): $Instant$$Type
}

export namespace $InstantSource {
function tick(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
function fixed(arg0: $Instant$$Type): $InstantSource
function offset(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
function system(): $InstantSource
const probejs$$marker: never
}
export class $InstantSource$$Static implements $InstantSource {


static "tick"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
static "fixed"(arg0: $Instant$$Type): $InstantSource
 "instant"(): $Instant
static "offset"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
 "millis"(): long
static "system"(): $InstantSource
 "withZone"(arg0: $ZoneId$$Type): $Clock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantSource$$Type = (() => $Instant$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstantSource_ = $InstantSource$$Type;
}}
declare module "java.time.ZonedDateTime" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $ZonedDateTime implements $Temporal, $ChronoZonedDateTime<($LocalDate)>, $Serializable {


public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "getNano"(): integer
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoZonedDateTime<(any)>
public "minus"(arg0: $TemporalAmount$$Type): $ZonedDateTime
public static "now"(arg0: $ZoneId$$Type): $ZonedDateTime
public static "now"(): $ZonedDateTime
public static "now"(arg0: $Clock$$Type): $ZonedDateTime
public "plusSeconds"(arg0: long): $ZonedDateTime
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ZonedDateTime
public static "ofInstant"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public "getDayOfWeek"(): $DayOfWeek
public "getZone"(): $ZoneId
public "getDayOfYear"(): integer
public "withYear"(arg0: integer): $ZonedDateTime
public "withMonth"(arg0: integer): $ZonedDateTime
public "withDayOfMonth"(arg0: integer): $ZonedDateTime
public "withDayOfYear"(arg0: integer): $ZonedDateTime
public "withHour"(arg0: integer): $ZonedDateTime
public "withMinute"(arg0: integer): $ZonedDateTime
public "withSecond"(arg0: integer): $ZonedDateTime
public "withNano"(arg0: integer): $ZonedDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $ZonedDateTime
public "plusNanos"(arg0: long): $ZonedDateTime
public "plusDays"(arg0: long): $ZonedDateTime
public "plusMinutes"(arg0: long): $ZonedDateTime
public "plusHours"(arg0: long): $ZonedDateTime
public "plusYears"(arg0: long): $ZonedDateTime
public "plusMonths"(arg0: long): $ZonedDateTime
public "plusWeeks"(arg0: long): $ZonedDateTime
public "minusDays"(arg0: long): $ZonedDateTime
public "minusYears"(arg0: long): $ZonedDateTime
public "minusMonths"(arg0: long): $ZonedDateTime
public "minusWeeks"(arg0: long): $ZonedDateTime
public "minusHours"(arg0: long): $ZonedDateTime
public "minusMinutes"(arg0: long): $ZonedDateTime
public "minusSeconds"(arg0: long): $ZonedDateTime
public "minusNanos"(arg0: long): $ZonedDateTime
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: $TemporalAmount$$Type): $ZonedDateTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public static "ofLocal"(arg0: $LocalDateTime$$Type, arg1: $ZoneId$$Type, arg2: $ZoneOffset$$Type): $ZonedDateTime
public "withZoneSameInstant"(arg0: $ZoneId$$Type): $ZonedDateTime
public "toOffsetDateTime"(): $OffsetDateTime
public "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(any)>
public "withLaterOffsetAtOverlap"(): $ZonedDateTime
public static "ofStrict"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public "withFixedOffsetZone"(): $ZonedDateTime
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneId$$Type): $ZonedDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneId$$Type): $ZonedDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $ZonedDateTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $ZonedDateTime
public static "parse"(arg0: charseq): $ZonedDateTime
public "with"(arg0: $TemporalAdjuster$$Type): $ZonedDateTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $ChronoZonedDateTime<(any)>
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "getMonth"(): $Month
public "toLocalDate"(): $ChronoLocalDate
public "toLocalTime"(): $LocalTime
public "toLocalDateTime"(): $ChronoLocalDateTime<(any)>
public "withEarlierOffsetAtOverlap"(): $ZonedDateTime
public "toInstant"(): $Instant
public "isEqual"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
public "toEpochSecond"(): long
public "isAfter"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
public "isBefore"(arg0: $ChronoZonedDateTime$$Type<(any)>): boolean
public "getChronology"(): $Chronology
public static "timeLineOrder"(): $Comparator<($ChronoZonedDateTime<(any)>)>
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ChronoZonedDateTime$$Type<(any)>): integer
get "offset"(): $ZoneOffset
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "dayOfWeek"(): $DayOfWeek
get "zone"(): $ZoneId
get "dayOfYear"(): integer
get "month"(): $Month
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZonedDateTime$$Type = ($ZonedDateTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZonedDateTime_ = $ZonedDateTime$$Type;
}}
declare module "java.time.LocalDateTime" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"

export class $LocalDateTime implements $Temporal, $TemporalAdjuster, $ChronoLocalDateTime<($LocalDate)>, $Serializable {
static readonly "MIN": $LocalDateTime
static readonly "MAX": $LocalDateTime


public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getNano"(): integer
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public static "now"(): $LocalDateTime
public static "now"(arg0: $ZoneId$$Type): $LocalDateTime
public static "now"(arg0: $Clock$$Type): $LocalDateTime
public static "ofEpochSecond"(arg0: long, arg1: integer, arg2: $ZoneOffset$$Type): $LocalDateTime
public "isEqual"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
public "plusSeconds"(arg0: long): $LocalDateTime
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalDateTime
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withYear"(arg0: integer): $LocalDateTime
public "withMonth"(arg0: integer): $LocalDateTime
public "withDayOfMonth"(arg0: integer): $LocalDateTime
public "withDayOfYear"(arg0: integer): $LocalDateTime
public "withHour"(arg0: integer): $LocalDateTime
public "withMinute"(arg0: integer): $LocalDateTime
public "withSecond"(arg0: integer): $LocalDateTime
public "withNano"(arg0: integer): $LocalDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $LocalDateTime
public "plusNanos"(arg0: long): $LocalDateTime
public "plusDays"(arg0: long): $LocalDateTime
public "plusMinutes"(arg0: long): $LocalDateTime
public "plusHours"(arg0: long): $LocalDateTime
public "plusYears"(arg0: long): $LocalDateTime
public "plusMonths"(arg0: long): $LocalDateTime
public "plusWeeks"(arg0: long): $LocalDateTime
public "isAfter"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
public "isBefore"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
public "minusDays"(arg0: long): $LocalDateTime
public "atZone"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(any)>
public "minusYears"(arg0: long): $LocalDateTime
public "minusMonths"(arg0: long): $LocalDateTime
public "minusWeeks"(arg0: long): $LocalDateTime
public "minusHours"(arg0: long): $LocalDateTime
public "minusMinutes"(arg0: long): $LocalDateTime
public "minusSeconds"(arg0: long): $LocalDateTime
public "minusNanos"(arg0: long): $LocalDateTime
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(any)>
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $LocalDateTime
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ChronoLocalDateTime$$Type<(any)>): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $LocalDateTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalDateTime
public static "parse"(arg0: charseq): $LocalDateTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $ChronoLocalDateTime<(any)>
public "with"(arg0: $TemporalAdjuster$$Type): $ChronoLocalDateTime<(any)>
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "getMonth"(): $Month
public "toLocalDate"(): $LocalDate
public "toLocalTime"(): $LocalTime
public "toInstant"(arg0: $ZoneOffset$$Type): $Instant
public "toEpochSecond"(arg0: $ZoneOffset$$Type): long
public "getChronology"(): $Chronology
public static "timeLineOrder"(): $Comparator<($ChronoLocalDateTime<(any)>)>
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "month"(): $Month
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDateTime$$Type = ($LocalDateTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalDateTime_ = $LocalDateTime$$Type;
}}
declare module "java.time.LocalDate" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$OffsetTime, $OffsetTime$$Type} from "java.time.OffsetTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ZonedDateTime, $ZonedDateTime$$Type} from "java.time.ZonedDateTime"
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$IsoChronology, $IsoChronology$$Type} from "java.time.chrono.IsoChronology"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Period, $Period$$Type} from "java.time.Period"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $LocalDate implements $Temporal, $TemporalAdjuster, $ChronoLocalDate, $Serializable {
static readonly "MIN": $LocalDate
static readonly "MAX": $LocalDate
static readonly "EPOCH": $LocalDate


public "lengthOfMonth"(): integer
public "toEpochDay"(): long
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
public "minus"(arg0: $TemporalAmount$$Type): $LocalDate
public static "now"(): $LocalDate
public static "now"(arg0: $Clock$$Type): $LocalDate
public static "now"(arg0: $ZoneId$$Type): $LocalDate
public "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
public "toEpochSecond"(arg0: $LocalTime$$Type, arg1: $ZoneOffset$$Type): long
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalDate
public "getDayOfWeek"(): $DayOfWeek
public "getEra"(): $Era
public "isLeapYear"(): boolean
public "getDayOfYear"(): integer
public static "ofEpochDay"(arg0: long): $LocalDate
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withYear"(arg0: integer): $LocalDate
public "withMonth"(arg0: integer): $LocalDate
public "withDayOfMonth"(arg0: integer): $LocalDate
public "withDayOfYear"(arg0: integer): $LocalDate
public "plusDays"(arg0: long): $LocalDate
public "plusYears"(arg0: long): $LocalDate
public "plusMonths"(arg0: long): $LocalDate
public "plusWeeks"(arg0: long): $LocalDate
public "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
public "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
public "minusDays"(arg0: long): $LocalDate
public "minusYears"(arg0: long): $LocalDate
public "minusMonths"(arg0: long): $LocalDate
public "minusWeeks"(arg0: long): $LocalDate
public "getChronology"(): $IsoChronology
public "lengthOfYear"(): integer
public static "ofYearDay"(arg0: integer, arg1: integer): $LocalDate
public "atTime"(arg0: $LocalTime$$Type): $LocalDateTime
public "atTime"(arg0: integer, arg1: integer): $LocalDateTime
public "atTime"(arg0: $OffsetTime$$Type): $OffsetDateTime
public "atTime"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalDateTime
public "atTime"(arg0: integer, arg1: integer, arg2: integer): $LocalDateTime
public "datesUntil"(arg0: $LocalDate$$Type): $Stream<($LocalDate)>
public "datesUntil"(arg0: $LocalDate$$Type, arg1: $Period$$Type): $Stream<($LocalDate)>
public "atStartOfDay"(arg0: $ZoneId$$Type): $ZonedDateTime
public "atStartOfDay"(): $LocalDateTime
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: $TemporalAmount$$Type): $Temporal
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ChronoLocalDate$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer): $LocalDate
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalDate
public static "from"(arg0: $TemporalAccessor$$Type): $LocalDate
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $LocalDate
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalDate
public "with"(arg0: $TemporalAdjuster$$Type): $LocalDate
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalDate
public "until"(arg0: $ChronoLocalDate$$Type): $Period
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "getMonth"(): $Month
public static "timeLineOrder"(): $Comparator<($ChronoLocalDate)>
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "dayOfWeek"(): $DayOfWeek
get "era"(): $Era
get "leapYear"(): boolean
get "dayOfYear"(): integer
get "chronology"(): $IsoChronology
get "month"(): $Month
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDate$$Type = ($LocalDate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalDate_ = $LocalDate$$Type;
}}
declare module "java.time.chrono.AbstractChronology" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$ChronoField, $ChronoField$$Type} from "java.time.temporal.ChronoField"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$List, $List$$Type} from "java.util.List"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type} from "java.time.chrono.ChronoZonedDateTime"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$ChronoPeriod, $ChronoPeriod$$Type} from "java.time.chrono.ChronoPeriod"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $AbstractChronology implements $Chronology {


public "resolveDate"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $ResolverStyle$$Type): $ChronoLocalDate
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $Chronology$$Type): integer
public "compareTo"(arg0: any): integer
public "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$$Type): long
public "epochSecond"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): long
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public "date"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
public "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
public "date"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
public "eras"(): $List<($Era)>
public "prolepticYear"(arg0: $Era$$Type, arg1: integer): integer
public "dateYearDay"(arg0: $Era$$Type, arg1: integer, arg2: integer): $ChronoLocalDate
public "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
public "dateNow"(arg0: $ZoneId$$Type): $ChronoLocalDate
public "dateNow"(arg0: $Clock$$Type): $ChronoLocalDate
public "dateNow"(): $ChronoLocalDate
public "zonedDateTime"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
public "zonedDateTime"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
public "dateEpochDay"(arg0: long): $ChronoLocalDate
public "isIsoBased"(): boolean
public static "ofLocale"(arg0: $Locale$$Type): $Chronology
public static "getAvailableChronologies"(): $Set<($Chronology)>
public "isLeapYear"(arg0: long): boolean
public "localDateTime"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<($ChronoLocalDate)>
public "eraOf"(arg0: integer): $Era
public "range"(arg0: $ChronoField$$Type): $ValueRange
public "getCalendarType"(): StringJS
public static "of"(arg0: StringJS): $Chronology
public static "from"(arg0: $TemporalAccessor$$Type): $Chronology
public "getId"(): StringJS
public "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
get "isoBased"(): boolean
get "calendarType"(): StringJS
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChronology$$Type = ($AbstractChronology);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractChronology_ = $AbstractChronology$$Type;
}}
declare module "java.time.temporal.TemporalField" {
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export interface $TemporalField {

 "getBaseUnit"(): $TemporalUnit
 "getRangeUnit"(): $TemporalUnit
 "getDisplayName"(arg0: $Locale$$Type): StringJS
 "isDateBased"(): boolean
 "isTimeBased"(): boolean
 "isSupportedBy"(arg0: $TemporalAccessor$$Type): boolean
 "rangeRefinedBy"(arg0: $TemporalAccessor$$Type): $ValueRange
 "getFrom"(arg0: $TemporalAccessor$$Type): long
 "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
 "range"(): $ValueRange
 "toString"(): StringJS
 "resolve"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $TemporalAccessor$$Type, arg2: $ResolverStyle$$Type): $TemporalAccessor
get "baseUnit"(): $TemporalUnit
get "rangeUnit"(): $TemporalUnit
get "dateBased"(): boolean
get "timeBased"(): boolean
}

export namespace $TemporalField {
const probejs$$marker: never
}
export class $TemporalField$$Static implements $TemporalField {


 "getBaseUnit"(): $TemporalUnit
 "getRangeUnit"(): $TemporalUnit
 "getDisplayName"(arg0: $Locale$$Type): StringJS
 "isDateBased"(): boolean
 "isTimeBased"(): boolean
 "isSupportedBy"(arg0: $TemporalAccessor$$Type): boolean
 "rangeRefinedBy"(arg0: $TemporalAccessor$$Type): $ValueRange
 "getFrom"(arg0: $TemporalAccessor$$Type): long
 "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
 "range"(): $ValueRange
 "toString"(): StringJS
 "resolve"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $TemporalAccessor$$Type, arg2: $ResolverStyle$$Type): $TemporalAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalField$$Type = ($TemporalField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalField_ = $TemporalField$$Type;
}}
declare module "java.time.temporal.TemporalAccessor" {
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $TemporalAccessor {

 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
}

export namespace $TemporalAccessor {
const probejs$$marker: never
}
export class $TemporalAccessor$$Static implements $TemporalAccessor {


 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAccessor$$Type = ($TemporalAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalAccessor_ = $TemporalAccessor$$Type;
}}
declare module "java.time.chrono.ChronoLocalDate" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ChronoPeriod, $ChronoPeriod$$Type} from "java.time.chrono.ChronoPeriod"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"

export interface $ChronoLocalDate extends $Temporal, $TemporalAdjuster, $Comparable<($ChronoLocalDate)> {

 "lengthOfMonth"(): integer
 "toEpochDay"(): long
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
 "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
 "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
 "getEra"(): $Era
 "isLeapYear"(): boolean
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
 "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
 "getChronology"(): $Chronology
 "lengthOfYear"(): integer
 "atTime"(arg0: $LocalTime$$Type): $ChronoLocalDateTime<(any)>
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDate$$Type): integer
 "compareTo"(arg0: any): integer
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "until"(arg0: $ChronoLocalDate$$Type): $ChronoPeriod
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
get "era"(): $Era
get "leapYear"(): boolean
get "chronology"(): $Chronology
}

export namespace $ChronoLocalDate {
function timeLineOrder(): $Comparator<($ChronoLocalDate)>
function from(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
const probejs$$marker: never
}
export class $ChronoLocalDate$$Static implements $ChronoLocalDate {


 "lengthOfMonth"(): integer
 "toEpochDay"(): long
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
 "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
 "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
 "getEra"(): $Era
 "isLeapYear"(): boolean
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
 "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
 "getChronology"(): $Chronology
static "timeLineOrder"(): $Comparator<($ChronoLocalDate)>
 "lengthOfYear"(): integer
 "atTime"(arg0: $LocalTime$$Type): $ChronoLocalDateTime<(any)>
 "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDate$$Type): integer
 "compareTo"(arg0: any): integer
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
static "from"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "until"(arg0: $ChronoLocalDate$$Type): $ChronoPeriod
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDate$$Type = ($ChronoLocalDate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoLocalDate_ = $ChronoLocalDate$$Type;
}}
declare module "java.time.temporal.TemporalQuery" {
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"

export interface $TemporalQuery<R> {

 "queryFrom"(arg0: $TemporalAccessor$$Type): R

(arg0: $TemporalAccessor): R
}

export namespace $TemporalQuery {
const probejs$$marker: never
}
export class $TemporalQuery$$Static<R> implements $TemporalQuery {


 "queryFrom"(arg0: $TemporalAccessor$$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalQuery$$Type<R> = ((arg0: $TemporalAccessor) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalQuery_<R> = $TemporalQuery$$Type<(R)>;
}}
declare module "java.time.zone.ZoneOffsetTransition" {
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $ZoneOffsetTransition implements $Comparable<($ZoneOffsetTransition)>, $Serializable {


public "getDuration"(): $Duration
public "getOffsetAfter"(): $ZoneOffset
public "getDateTimeBefore"(): $LocalDateTime
public "getOffsetBefore"(): $ZoneOffset
public "isValidOffset"(arg0: $ZoneOffset$$Type): boolean
public "getInstant"(): $Instant
public "isOverlap"(): boolean
public "toEpochSecond"(): long
public "isGap"(): boolean
public "getDateTimeAfter"(): $LocalDateTime
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ZoneOffsetTransition$$Type): integer
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneOffset$$Type): $ZoneOffsetTransition
get "duration"(): $Duration
get "offsetAfter"(): $ZoneOffset
get "dateTimeBefore"(): $LocalDateTime
get "offsetBefore"(): $ZoneOffset
get "instant"(): $Instant
get "overlap"(): boolean
get "gap"(): boolean
get "dateTimeAfter"(): $LocalDateTime
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffsetTransition$$Type = ($ZoneOffsetTransition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffsetTransition_ = $ZoneOffsetTransition$$Type;
}}
declare module "java.time.temporal.Temporal" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export interface $Temporal extends $TemporalAccessor {

 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
}

export namespace $Temporal {
const probejs$$marker: never
}
export class $Temporal$$Static implements $Temporal {


 "minus"(arg0: $TemporalAmount$$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
 "isSupported"(arg0: $TemporalField$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Temporal$$Type = ($Temporal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Temporal_ = $Temporal$$Type;
}}
declare module "java.time.format.ResolverStyle" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ResolverStyle extends $Enum<($ResolverStyle)> {
static readonly "STRICT": $ResolverStyle
static readonly "LENIENT": $ResolverStyle
static readonly "SMART": $ResolverStyle


public static "values"(): ($ResolverStyle)[]
public static "valueOf"(arg0: StringJS): $ResolverStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolverStyle$$Type = (("strict") | ("smart") | ("lenient"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResolverStyle_ = $ResolverStyle$$Type;
}}
declare module "java.time.OffsetTime" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $OffsetTime implements $Temporal, $TemporalAdjuster, $Comparable<($OffsetTime)>, $Serializable {
static readonly "MIN": $OffsetTime
static readonly "MAX": $OffsetTime


public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "getNano"(): integer
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetTime
public "minus"(arg0: $TemporalAmount$$Type): $OffsetTime
public static "now"(arg0: $Clock$$Type): $OffsetTime
public static "now"(): $OffsetTime
public static "now"(arg0: $ZoneId$$Type): $OffsetTime
public "atDate"(arg0: $LocalDate$$Type): $OffsetDateTime
public "isEqual"(arg0: $OffsetTime$$Type): boolean
public "plusSeconds"(arg0: long): $OffsetTime
public "withOffsetSameInstant"(arg0: $ZoneOffset$$Type): $OffsetTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$$Type): $OffsetTime
public "toEpochSecond"(arg0: $LocalDate$$Type): long
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $OffsetTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withHour"(arg0: integer): $OffsetTime
public "withMinute"(arg0: integer): $OffsetTime
public "withSecond"(arg0: integer): $OffsetTime
public "withNano"(arg0: integer): $OffsetTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $OffsetTime
public "plusNanos"(arg0: long): $OffsetTime
public "plusMinutes"(arg0: long): $OffsetTime
public "plusHours"(arg0: long): $OffsetTime
public "isAfter"(arg0: $OffsetTime$$Type): boolean
public "isBefore"(arg0: $OffsetTime$$Type): boolean
public "minusHours"(arg0: long): $OffsetTime
public "minusMinutes"(arg0: long): $OffsetTime
public "minusSeconds"(arg0: long): $OffsetTime
public "minusNanos"(arg0: long): $OffsetTime
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: $TemporalAmount$$Type): $OffsetTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetTime
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $OffsetTime$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ZoneOffset$$Type): $OffsetTime
public static "of"(arg0: $LocalTime$$Type, arg1: $ZoneOffset$$Type): $OffsetTime
public static "from"(arg0: $TemporalAccessor$$Type): $OffsetTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq): $OffsetTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $OffsetTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "toLocalTime"(): $LocalTime
get "offset"(): $ZoneOffset
get "nano"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetTime$$Type = ($OffsetTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetTime_ = $OffsetTime$$Type;
}}
declare module "java.time.chrono.IsoChronology" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$ChronoField, $ChronoField$$Type} from "java.time.temporal.ChronoField"
import {$AbstractChronology, $AbstractChronology$$Type} from "java.time.chrono.AbstractChronology"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$List, $List$$Type} from "java.util.List"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$ZonedDateTime, $ZonedDateTime$$Type} from "java.time.ZonedDateTime"
import {$ChronoPeriod, $ChronoPeriod$$Type} from "java.time.chrono.ChronoPeriod"
import {$IsoEra, $IsoEra$$Type} from "java.time.chrono.IsoEra"
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $IsoChronology extends $AbstractChronology implements $Serializable {
static readonly "INSTANCE": $IsoChronology


public "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$$Type): long
public "date"(arg0: integer, arg1: integer, arg2: integer): $LocalDate
public "date"(arg0: $TemporalAccessor$$Type): $LocalDate
public "date"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
public "eras"(): $List<($Era)>
public "prolepticYear"(arg0: $Era$$Type, arg1: integer): integer
public "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
public "dateYearDay"(arg0: $Era$$Type, arg1: integer, arg2: integer): $ChronoLocalDate
public "dateNow"(arg0: $Clock$$Type): $LocalDate
public "dateNow"(arg0: $ZoneId$$Type): $LocalDate
public "dateNow"(): $ChronoLocalDate
public "resolveDate"(arg0: $Map$$Type<(any), (any)>, arg1: $ResolverStyle$$Type): $ChronoLocalDate
public "zonedDateTime"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ZonedDateTime
public "zonedDateTime"(arg0: $TemporalAccessor$$Type): $ZonedDateTime
public "dateEpochDay"(arg0: long): $LocalDate
public "isIsoBased"(): boolean
public "isLeapYear"(arg0: long): boolean
public "localDateTime"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<(any)>
public "eraOf"(arg0: integer): $IsoEra
public "range"(arg0: $ChronoField$$Type): $ValueRange
public "getCalendarType"(): StringJS
public "getId"(): StringJS
public "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
public static "ofLocale"(arg0: $Locale$$Type): $Chronology
public static "getAvailableChronologies"(): $Set<($Chronology)>
public static "of"(arg0: StringJS): $Chronology
public static "from"(arg0: $TemporalAccessor$$Type): $Chronology
get "isoBased"(): boolean
get "calendarType"(): StringJS
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsoChronology$$Type = ($IsoChronology);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsoChronology_ = $IsoChronology$$Type;
}}
declare module "java.time.format.DateTimeFormatter" {
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$DecimalStyle, $DecimalStyle$$Type} from "java.time.format.DecimalStyle"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$Format, $Format$$Type} from "java.text.Format"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$ParsePosition, $ParsePosition$$Type} from "java.text.ParsePosition"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Period, $Period$$Type} from "java.time.Period"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$FormatStyle, $FormatStyle$$Type} from "java.time.format.FormatStyle"

export class $DateTimeFormatter {
static readonly "ISO_OFFSET_TIME": $DateTimeFormatter
static readonly "ISO_LOCAL_DATE_TIME": $DateTimeFormatter
static readonly "RFC_1123_DATE_TIME": $DateTimeFormatter
static readonly "ISO_INSTANT": $DateTimeFormatter
static readonly "ISO_ZONED_DATE_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE_TIME": $DateTimeFormatter
static readonly "ISO_DATE_TIME": $DateTimeFormatter
static readonly "ISO_DATE": $DateTimeFormatter
static readonly "ISO_TIME": $DateTimeFormatter
static readonly "ISO_LOCAL_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE": $DateTimeFormatter
static readonly "ISO_ORDINAL_DATE": $DateTimeFormatter
static readonly "ISO_LOCAL_DATE": $DateTimeFormatter
static readonly "BASIC_ISO_DATE": $DateTimeFormatter
static readonly "ISO_WEEK_DATE": $DateTimeFormatter


public "getLocale"(): $Locale
public "formatTo"(arg0: $TemporalAccessor$$Type, arg1: $Appendable$$Type): void
public "getZone"(): $ZoneId
public "getChronology"(): $Chronology
public static "ofLocalizedDate"(arg0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedTime"(arg0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(arg0: $FormatStyle$$Type, arg1: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(arg0: $FormatStyle$$Type): $DateTimeFormatter
public static "ofLocalizedPattern"(arg0: StringJS): $DateTimeFormatter
public static "parsedExcessDays"(): $TemporalQuery<($Period)>
public static "parsedLeapSecond"(): $TemporalQuery<(boolean)>
public "withLocale"(arg0: $Locale$$Type): $DateTimeFormatter
public "localizedBy"(arg0: $Locale$$Type): $DateTimeFormatter
public "getDecimalStyle"(): $DecimalStyle
public "withDecimalStyle"(arg0: $DecimalStyle$$Type): $DateTimeFormatter
public "withChronology"(arg0: $Chronology$$Type): $DateTimeFormatter
public "getResolverStyle"(): $ResolverStyle
public "withResolverStyle"(arg0: $ResolverStyle$$Type): $DateTimeFormatter
public "getResolverFields"(): $Set<($TemporalField)>
public "withResolverFields"(...arg0: ($TemporalField$$Type)[]): $DateTimeFormatter
public "withResolverFields"(arg0: $Set$$Type<($TemporalField$$Type)>): $DateTimeFormatter
public "parseBest"(arg0: charseq, ...arg1: ($TemporalQuery$$Type<(any)>)[]): $TemporalAccessor
public "parseUnresolved"(arg0: charseq, arg1: $ParsePosition$$Type): $TemporalAccessor
public "toFormat"(): $Format
public "toFormat"(arg0: $TemporalQuery$$Type<(any)>): $Format
public "toString"(): StringJS
public "format"(arg0: $TemporalAccessor$$Type): StringJS
public "parse"(arg0: charseq): $TemporalAccessor
public "parse"(arg0: charseq, arg1: $ParsePosition$$Type): $TemporalAccessor
public "parse"<T>(arg0: charseq, arg1: $TemporalQuery$$Type<(T)>): T
public "withZone"(arg0: $ZoneId$$Type): $DateTimeFormatter
public static "ofPattern"(arg0: StringJS): $DateTimeFormatter
public static "ofPattern"(arg0: StringJS, arg1: $Locale$$Type): $DateTimeFormatter
get "locale"(): $Locale
get "zone"(): $ZoneId
get "chronology"(): $Chronology
get "decimalStyle"(): $DecimalStyle
get "resolverStyle"(): $ResolverStyle
get "resolverFields"(): $Set<($TemporalField)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateTimeFormatter$$Type = ($DateTimeFormatter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DateTimeFormatter_ = $DateTimeFormatter$$Type;
}}
declare module "java.time.temporal.ChronoField" {
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $ChronoField extends $Enum<($ChronoField)> implements $TemporalField {
static readonly "CLOCK_HOUR_OF_AMPM": $ChronoField
static readonly "DAY_OF_YEAR": $ChronoField
static readonly "MICRO_OF_DAY": $ChronoField
static readonly "ALIGNED_DAY_OF_WEEK_IN_MONTH": $ChronoField
static readonly "DAY_OF_MONTH": $ChronoField
static readonly "SECOND_OF_MINUTE": $ChronoField
static readonly "PROLEPTIC_MONTH": $ChronoField
static readonly "MILLI_OF_SECOND": $ChronoField
static readonly "NANO_OF_DAY": $ChronoField
static readonly "CLOCK_HOUR_OF_DAY": $ChronoField
static readonly "MINUTE_OF_DAY": $ChronoField
static readonly "ALIGNED_WEEK_OF_MONTH": $ChronoField
static readonly "YEAR": $ChronoField
static readonly "HOUR_OF_DAY": $ChronoField
static readonly "MILLI_OF_DAY": $ChronoField
static readonly "ALIGNED_DAY_OF_WEEK_IN_YEAR": $ChronoField
static readonly "YEAR_OF_ERA": $ChronoField
static readonly "AMPM_OF_DAY": $ChronoField
static readonly "NANO_OF_SECOND": $ChronoField
static readonly "SECOND_OF_DAY": $ChronoField
static readonly "MICRO_OF_SECOND": $ChronoField
static readonly "MONTH_OF_YEAR": $ChronoField
static readonly "EPOCH_DAY": $ChronoField
static readonly "ERA": $ChronoField
static readonly "OFFSET_SECONDS": $ChronoField
static readonly "HOUR_OF_AMPM": $ChronoField
static readonly "MINUTE_OF_HOUR": $ChronoField
static readonly "INSTANT_SECONDS": $ChronoField
static readonly "ALIGNED_WEEK_OF_YEAR": $ChronoField
static readonly "DAY_OF_WEEK": $ChronoField


public "getBaseUnit"(): $TemporalUnit
public "getRangeUnit"(): $TemporalUnit
public "getDisplayName"(arg0: $Locale$$Type): StringJS
public "checkValidValue"(arg0: long): long
public "isDateBased"(): boolean
public "isTimeBased"(): boolean
public "isSupportedBy"(arg0: $TemporalAccessor$$Type): boolean
public "rangeRefinedBy"(arg0: $TemporalAccessor$$Type): $ValueRange
public "getFrom"(arg0: $TemporalAccessor$$Type): long
public "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
public "checkValidIntValue"(arg0: long): integer
public "range"(): $ValueRange
public "toString"(): StringJS
public static "values"(): ($ChronoField)[]
public static "valueOf"(arg0: StringJS): $ChronoField
public "resolve"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $TemporalAccessor$$Type, arg2: $ResolverStyle$$Type): $TemporalAccessor
get "baseUnit"(): $TemporalUnit
get "rangeUnit"(): $TemporalUnit
get "dateBased"(): boolean
get "timeBased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoField$$Type = (("nano_of_second") | ("nano_of_day") | ("micro_of_second") | ("micro_of_day") | ("milli_of_second") | ("milli_of_day") | ("second_of_minute") | ("second_of_day") | ("minute_of_hour") | ("minute_of_day") | ("hour_of_ampm") | ("clock_hour_of_ampm") | ("hour_of_day") | ("clock_hour_of_day") | ("ampm_of_day") | ("day_of_week") | ("aligned_day_of_week_in_month") | ("aligned_day_of_week_in_year") | ("day_of_month") | ("day_of_year") | ("epoch_day") | ("aligned_week_of_month") | ("aligned_week_of_year") | ("month_of_year") | ("proleptic_month") | ("year_of_era") | ("year") | ("era") | ("instant_seconds") | ("offset_seconds"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoField_ = $ChronoField$$Type;
}}
declare module "java.time.zone.ZoneOffsetTransitionRule" {
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$Month, $Month$$Type} from "java.time.Month"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$ZoneOffsetTransition, $ZoneOffsetTransition$$Type} from "java.time.zone.ZoneOffsetTransition"
import {$ZoneOffsetTransitionRule$TimeDefinition, $ZoneOffsetTransitionRule$TimeDefinition$$Type} from "java.time.zone.ZoneOffsetTransitionRule$TimeDefinition"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"

export class $ZoneOffsetTransitionRule implements $Serializable {


public "getOffsetAfter"(): $ZoneOffset
public "getOffsetBefore"(): $ZoneOffset
public "createTransition"(arg0: integer): $ZoneOffsetTransition
public "getStandardOffset"(): $ZoneOffset
public "getDayOfMonthIndicator"(): integer
public "getLocalTime"(): $LocalTime
public "isMidnightEndOfDay"(): boolean
public "getTimeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
public "getDayOfWeek"(): $DayOfWeek
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $Month$$Type, arg1: integer, arg2: $DayOfWeek$$Type, arg3: $LocalTime$$Type, arg4: boolean, arg5: $ZoneOffsetTransitionRule$TimeDefinition$$Type, arg6: $ZoneOffset$$Type, arg7: $ZoneOffset$$Type, arg8: $ZoneOffset$$Type): $ZoneOffsetTransitionRule
public "getMonth"(): $Month
get "offsetAfter"(): $ZoneOffset
get "offsetBefore"(): $ZoneOffset
get "standardOffset"(): $ZoneOffset
get "dayOfMonthIndicator"(): integer
get "localTime"(): $LocalTime
get "midnightEndOfDay"(): boolean
get "timeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
get "dayOfWeek"(): $DayOfWeek
get "month"(): $Month
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffsetTransitionRule$$Type = ($ZoneOffsetTransitionRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffsetTransitionRule_ = $ZoneOffsetTransitionRule$$Type;
}}
declare module "java.time.OffsetDateTime" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ZonedDateTime, $ZonedDateTime$$Type} from "java.time.ZonedDateTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$OffsetTime, $OffsetTime$$Type} from "java.time.OffsetTime"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$DayOfWeek, $DayOfWeek$$Type} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $OffsetDateTime implements $Temporal, $TemporalAdjuster, $Comparable<($OffsetDateTime)>, $Serializable {
static readonly "MIN": $OffsetDateTime
static readonly "MAX": $OffsetDateTime


public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "getNano"(): integer
public "minus"(arg0: $TemporalAmount$$Type): $OffsetDateTime
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public static "now"(arg0: $ZoneId$$Type): $OffsetDateTime
public static "now"(): $OffsetDateTime
public static "now"(arg0: $Clock$$Type): $OffsetDateTime
public "toInstant"(): $Instant
public "isEqual"(arg0: $OffsetDateTime$$Type): boolean
public "plusSeconds"(arg0: long): $OffsetDateTime
public "withOffsetSameInstant"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "atZoneSameInstant"(arg0: $ZoneId$$Type): $ZonedDateTime
public "atZoneSimilarLocal"(arg0: $ZoneId$$Type): $ZonedDateTime
public "toOffsetTime"(): $OffsetTime
public "toEpochSecond"(): long
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $OffsetDateTime
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withYear"(arg0: integer): $OffsetDateTime
public "withMonth"(arg0: integer): $OffsetDateTime
public "withDayOfMonth"(arg0: integer): $OffsetDateTime
public "withDayOfYear"(arg0: integer): $OffsetDateTime
public "withHour"(arg0: integer): $OffsetDateTime
public "withMinute"(arg0: integer): $OffsetDateTime
public "withSecond"(arg0: integer): $OffsetDateTime
public "withNano"(arg0: integer): $OffsetDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $OffsetDateTime
public "plusNanos"(arg0: long): $OffsetDateTime
public "plusDays"(arg0: long): $OffsetDateTime
public "plusMinutes"(arg0: long): $OffsetDateTime
public "plusHours"(arg0: long): $OffsetDateTime
public "plusYears"(arg0: long): $OffsetDateTime
public "plusMonths"(arg0: long): $OffsetDateTime
public "plusWeeks"(arg0: long): $OffsetDateTime
public "isAfter"(arg0: $OffsetDateTime$$Type): boolean
public "isBefore"(arg0: $OffsetDateTime$$Type): boolean
public "minusDays"(arg0: long): $OffsetDateTime
public "minusYears"(arg0: long): $OffsetDateTime
public "minusMonths"(arg0: long): $OffsetDateTime
public "minusWeeks"(arg0: long): $OffsetDateTime
public "minusHours"(arg0: long): $OffsetDateTime
public "minusMinutes"(arg0: long): $OffsetDateTime
public "minusSeconds"(arg0: long): $OffsetDateTime
public "minusNanos"(arg0: long): $OffsetDateTime
public static "timeLineOrder"(): $Comparator<($OffsetDateTime)>
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "toZonedDateTime"(): $ZonedDateTime
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "plus"(arg0: $TemporalAmount$$Type): $Temporal
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $OffsetDateTime$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type, arg2: $ZoneOffset$$Type): $OffsetDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $OffsetDateTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $OffsetDateTime
public static "parse"(arg0: charseq): $OffsetDateTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "getMonth"(): $Month
public "toLocalDate"(): $LocalDate
public "toLocalTime"(): $LocalTime
public "toLocalDateTime"(): $LocalDateTime
get "offset"(): $ZoneOffset
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "month"(): $Month
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetDateTime$$Type = ($OffsetDateTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetDateTime_ = $OffsetDateTime$$Type;
}}
declare module "java.time.format.TextStyle" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TextStyle extends $Enum<($TextStyle)> {
static readonly "SHORT_STANDALONE": $TextStyle
static readonly "NARROW_STANDALONE": $TextStyle
static readonly "FULL_STANDALONE": $TextStyle
static readonly "FULL": $TextStyle
static readonly "SHORT": $TextStyle
static readonly "NARROW": $TextStyle


public "asStandalone"(): $TextStyle
public "asNormal"(): $TextStyle
public static "values"(): ($TextStyle)[]
public static "valueOf"(arg0: StringJS): $TextStyle
public "isStandalone"(): boolean
get "standalone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextStyle$$Type = (("full") | ("full_standalone") | ("short") | ("short_standalone") | ("narrow") | ("narrow_standalone"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextStyle_ = $TextStyle$$Type;
}}
declare module "java.time.Period" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$IsoChronology, $IsoChronology$$Type} from "java.time.chrono.IsoChronology"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$List, $List$$Type} from "java.util.List"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$ChronoPeriod, $ChronoPeriod$$Type} from "java.time.chrono.ChronoPeriod"

export class $Period implements $ChronoPeriod, $Serializable {
static readonly "ZERO": $Period


public static "between"(arg0: $LocalDate$$Type, arg1: $LocalDate$$Type): $Period
public "getYears"(): integer
public static "ofYears"(arg0: integer): $Period
public static "ofMonths"(arg0: integer): $Period
public static "ofWeeks"(arg0: integer): $Period
public "withYears"(arg0: integer): $Period
public "withMonths"(arg0: integer): $Period
public "withDays"(arg0: integer): $Period
public "isNegative"(): boolean
public "minus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
public "getUnits"(): $List<($TemporalUnit)>
public "negated"(): $ChronoPeriod
public "multipliedBy"(arg0: integer): $Period
public static "ofDays"(arg0: integer): $Period
public "getMonths"(): integer
public "addTo"(arg0: $Temporal$$Type): $Temporal
public "plusDays"(arg0: long): $Period
public "plusYears"(arg0: long): $Period
public "plusMonths"(arg0: long): $Period
public "subtractFrom"(arg0: $Temporal$$Type): $Temporal
public "minusDays"(arg0: long): $Period
public "minusYears"(arg0: long): $Period
public "minusMonths"(arg0: long): $Period
public "getChronology"(): $IsoChronology
public "toTotalMonths"(): long
public "getDays"(): integer
public "normalized"(): $ChronoPeriod
public "plus"(arg0: $TemporalAmount$$Type): $Period
public "isZero"(): boolean
public "get"(arg0: $TemporalUnit$$Type): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: integer, arg1: integer, arg2: integer): $Period
public static "from"(arg0: $TemporalAmount$$Type): $Period
public static "parse"(arg0: charseq): $Period
public static "between"(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
get "years"(): integer
get "negative"(): boolean
get "units"(): $List<($TemporalUnit)>
get "months"(): integer
get "chronology"(): $IsoChronology
get "days"(): integer
get "zero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Period$$Type = ($Period);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Period_ = $Period$$Type;
}}
declare module "java.time.chrono.Chronology" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$ChronoField, $ChronoField$$Type} from "java.time.temporal.ChronoField"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type} from "java.time.chrono.ChronoZonedDateTime"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$ChronoPeriod, $ChronoPeriod$$Type} from "java.time.chrono.ChronoPeriod"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ResolverStyle, $ResolverStyle$$Type} from "java.time.format.ResolverStyle"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type} from "java.time.chrono.ChronoLocalDateTime"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export interface $Chronology extends $Comparable<($Chronology)> {

 "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$$Type): long
 "epochSecond"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): long
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
 "date"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
 "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
 "date"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "eras"(): $List<($Era)>
 "prolepticYear"(arg0: $Era$$Type, arg1: integer): integer
 "dateYearDay"(arg0: $Era$$Type, arg1: integer, arg2: integer): $ChronoLocalDate
 "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
 "dateNow"(arg0: $ZoneId$$Type): $ChronoLocalDate
 "dateNow"(arg0: $Clock$$Type): $ChronoLocalDate
 "dateNow"(): $ChronoLocalDate
 "resolveDate"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $ResolverStyle$$Type): $ChronoLocalDate
 "zonedDateTime"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "zonedDateTime"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "dateEpochDay"(arg0: long): $ChronoLocalDate
 "isIsoBased"(): boolean
 "isLeapYear"(arg0: long): boolean
 "localDateTime"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<($ChronoLocalDate)>
 "eraOf"(arg0: integer): $Era
 "range"(arg0: $ChronoField$$Type): $ValueRange
 "getCalendarType"(): StringJS
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $Chronology$$Type): integer
 "compareTo"(arg0: any): integer
 "getId"(): StringJS
 "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
get "isoBased"(): boolean
get "calendarType"(): StringJS
get "id"(): StringJS
}

export namespace $Chronology {
function ofLocale(arg0: $Locale$$Type): $Chronology
function getAvailableChronologies(): $Set<($Chronology)>
function of(arg0: StringJS): $Chronology
function from(arg0: $TemporalAccessor$$Type): $Chronology
const probejs$$marker: never
}
export class $Chronology$$Static implements $Chronology {


 "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$$Type): long
 "epochSecond"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): long
 "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
 "date"(arg0: $Era$$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
 "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
 "date"(arg0: $TemporalAccessor$$Type): $ChronoLocalDate
 "eras"(): $List<($Era)>
 "prolepticYear"(arg0: $Era$$Type, arg1: integer): integer
 "dateYearDay"(arg0: $Era$$Type, arg1: integer, arg2: integer): $ChronoLocalDate
 "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
 "dateNow"(arg0: $ZoneId$$Type): $ChronoLocalDate
 "dateNow"(arg0: $Clock$$Type): $ChronoLocalDate
 "dateNow"(): $ChronoLocalDate
 "resolveDate"(arg0: $Map$$Type<($TemporalField$$Type), (long)>, arg1: $ResolverStyle$$Type): $ChronoLocalDate
 "zonedDateTime"(arg0: $TemporalAccessor$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "zonedDateTime"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ChronoZonedDateTime<($ChronoLocalDate)>
 "dateEpochDay"(arg0: long): $ChronoLocalDate
 "isIsoBased"(): boolean
static "ofLocale"(arg0: $Locale$$Type): $Chronology
static "getAvailableChronologies"(): $Set<($Chronology)>
 "isLeapYear"(arg0: long): boolean
 "localDateTime"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<($ChronoLocalDate)>
 "eraOf"(arg0: integer): $Era
 "range"(arg0: $ChronoField$$Type): $ValueRange
 "getCalendarType"(): StringJS
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $Chronology$$Type): integer
 "compareTo"(arg0: any): integer
static "of"(arg0: StringJS): $Chronology
static "from"(arg0: $TemporalAccessor$$Type): $Chronology
 "getId"(): StringJS
 "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chronology$$Type = ($Chronology);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chronology_ = $Chronology$$Type;
}}
declare module "java.time.format.FormatStyle" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FormatStyle extends $Enum<($FormatStyle)> {
static readonly "MEDIUM": $FormatStyle
static readonly "FULL": $FormatStyle
static readonly "LONG": $FormatStyle
static readonly "SHORT": $FormatStyle


public static "values"(): ($FormatStyle)[]
public static "valueOf"(arg0: StringJS): $FormatStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormatStyle$$Type = (("full") | ("long") | ("medium") | ("short"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FormatStyle_ = $FormatStyle$$Type;
}}
declare module "java.time.LocalTime" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$OffsetTime, $OffsetTime$$Type} from "java.time.OffsetTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $LocalTime implements $Temporal, $TemporalAdjuster, $Comparable<($LocalTime)>, $Serializable {
static readonly "MIN": $LocalTime
static readonly "NOON": $LocalTime
static readonly "MAX": $LocalTime
static readonly "MIDNIGHT": $LocalTime


public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getNano"(): integer
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $LocalTime
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public static "now"(): $LocalTime
public static "now"(arg0: $Clock$$Type): $LocalTime
public static "now"(arg0: $ZoneId$$Type): $LocalTime
public static "ofSecondOfDay"(arg0: long): $LocalTime
public "atDate"(arg0: $LocalDate$$Type): $LocalDateTime
public "plusSeconds"(arg0: long): $LocalTime
public "toSecondOfDay"(): integer
public "toEpochSecond"(arg0: $LocalDate$$Type, arg1: $ZoneOffset$$Type): long
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalTime
public static "ofNanoOfDay"(arg0: long): $LocalTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withHour"(arg0: integer): $LocalTime
public "withMinute"(arg0: integer): $LocalTime
public "withSecond"(arg0: integer): $LocalTime
public "withNano"(arg0: integer): $LocalTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $LocalTime
public "plusNanos"(arg0: long): $LocalTime
public "plusMinutes"(arg0: long): $LocalTime
public "plusHours"(arg0: long): $LocalTime
public "toNanoOfDay"(): long
public "isAfter"(arg0: $LocalTime$$Type): boolean
public "isBefore"(arg0: $LocalTime$$Type): boolean
public "minusHours"(arg0: long): $LocalTime
public "minusMinutes"(arg0: long): $LocalTime
public "minusSeconds"(arg0: long): $LocalTime
public "minusNanos"(arg0: long): $LocalTime
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetTime
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: $TemporalAmount$$Type): $Temporal
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $LocalTime$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalTime
public static "from"(arg0: $TemporalAccessor$$Type): $LocalTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq): $LocalTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
get "nano"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalTime$$Type = ($LocalTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalTime_ = $LocalTime$$Type;
}}
declare module "java.time.chrono.ChronoLocalDateTime" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export interface $ChronoLocalDateTime<D extends $ChronoLocalDate> extends $Temporal, $TemporalAdjuster, $Comparable<($ChronoLocalDateTime<(any)>)> {

 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "toInstant"(arg0: $ZoneOffset$$Type): $Instant
 "isEqual"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "toEpochSecond"(arg0: $ZoneOffset$$Type): long
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "atZone"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "getChronology"(): $Chronology
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDateTime$$Type<(any)>): integer
 "compareTo"(arg0: any): integer
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "toLocalDate"(): D
 "toLocalTime"(): $LocalTime
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
get "chronology"(): $Chronology
}

export namespace $ChronoLocalDateTime {
function timeLineOrder(): $Comparator<($ChronoLocalDateTime<(any)>)>
function from(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<(any)>
const probejs$$marker: never
}
export class $ChronoLocalDateTime$$Static<D extends $ChronoLocalDate> implements $ChronoLocalDateTime {


 "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
 "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime<(D)>
 "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDateTime<(D)>
 "toInstant"(arg0: $ZoneOffset$$Type): $Instant
 "isEqual"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "toEpochSecond"(arg0: $ZoneOffset$$Type): long
 "adjustInto"(arg0: $Temporal$$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoLocalDateTime$$Type<(any)>): boolean
 "atZone"(arg0: $ZoneId$$Type): $ChronoZonedDateTime<(D)>
 "getChronology"(): $Chronology
static "timeLineOrder"(): $Comparator<($ChronoLocalDateTime<(any)>)>
 "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
 "plus"(arg0: $TemporalAmount$$Type): $Temporal
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDateTime$$Type<(any)>): integer
 "compareTo"(arg0: any): integer
 "format"(arg0: $DateTimeFormatter$$Type): StringJS
static "from"(arg0: $TemporalAccessor$$Type): $ChronoLocalDateTime<(any)>
 "isSupported"(arg0: $TemporalUnit$$Type): boolean
 "isSupported"(arg0: $TemporalField$$Type): boolean
 "with"(arg0: $TemporalAdjuster$$Type): $Temporal
 "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
 "toLocalDate"(): D
 "toLocalTime"(): $LocalTime
 "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
 "range"(arg0: $TemporalField$$Type): $ValueRange
 "get"(arg0: $TemporalField$$Type): integer
 "getLong"(arg0: $TemporalField$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDateTime$$Type<D> = ($ChronoLocalDateTime<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoLocalDateTime_<D> = $ChronoLocalDateTime$$Type<(D)>;
}}
declare module "java.time.Clock" {
import {$InstantSource, $InstantSource$$Type} from "java.time.InstantSource"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $Clock implements $InstantSource {


public static "tickMillis"(arg0: $ZoneId$$Type): $Clock
public static "tickSeconds"(arg0: $ZoneId$$Type): $Clock
public static "tickMinutes"(arg0: $ZoneId$$Type): $Clock
public static "tick"(arg0: $Clock$$Type, arg1: $Duration$$Type): $Clock
public static "fixed"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $Clock
public "instant"(): $Instant
public static "systemDefaultZone"(): $Clock
public "getZone"(): $ZoneId
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "offset"(arg0: $Clock$$Type, arg1: $Duration$$Type): $Clock
public "millis"(): long
public static "system"(arg0: $ZoneId$$Type): $Clock
public "withZone"(arg0: $ZoneId$$Type): $Clock
public static "systemUTC"(): $Clock
public static "tick"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
public static "fixed"(arg0: $Instant$$Type): $InstantSource
public static "offset"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
public static "system"(): $InstantSource
get "zone"(): $ZoneId
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clock$$Type = ($Clock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clock_ = $Clock$$Type;
}}
declare module "java.time.temporal.TemporalUnit" {
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export interface $TemporalUnit {

 "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): long
 "getDuration"(): $Duration
 "isDurationEstimated"(): boolean
 "isDateBased"(): boolean
 "isTimeBased"(): boolean
 "isSupportedBy"(arg0: $Temporal$$Type): boolean
 "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
 "toString"(): StringJS
get "duration"(): $Duration
get "durationEstimated"(): boolean
get "dateBased"(): boolean
get "timeBased"(): boolean
}

export namespace $TemporalUnit {
const probejs$$marker: never
}
export class $TemporalUnit$$Static implements $TemporalUnit {


 "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): long
 "getDuration"(): $Duration
 "isDurationEstimated"(): boolean
 "isDateBased"(): boolean
 "isTimeBased"(): boolean
 "isSupportedBy"(arg0: $Temporal$$Type): boolean
 "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
 "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalUnit$$Type = ($TemporalUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalUnit_ = $TemporalUnit$$Type;
}}
declare module "java.time.chrono.IsoEra" {
import {$Era, $Era$$Type} from "java.time.chrono.Era"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $IsoEra extends $Enum<($IsoEra)> implements $Era {
static readonly "CE": $IsoEra
static readonly "BCE": $IsoEra


public static "values"(): ($IsoEra)[]
public static "valueOf"(arg0: StringJS): $IsoEra
public "getValue"(): integer
public static "of"(arg0: integer): $IsoEra
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "get"(arg0: $TemporalField$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "isSupported"(arg0: $TemporalField$$Type): boolean
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsoEra$$Type = (("bce") | ("ce"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsoEra_ = $IsoEra$$Type;
}}
declare module "java.time.DayOfWeek" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $DayOfWeek extends $Enum<($DayOfWeek)> implements $TemporalAccessor, $TemporalAdjuster {
static readonly "WEDNESDAY": $DayOfWeek
static readonly "MONDAY": $DayOfWeek
static readonly "THURSDAY": $DayOfWeek
static readonly "SUNDAY": $DayOfWeek
static readonly "TUESDAY": $DayOfWeek
static readonly "FRIDAY": $DayOfWeek
static readonly "SATURDAY": $DayOfWeek


public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "minus"(arg0: long): $DayOfWeek
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long): $DayOfWeek
public "get"(arg0: $TemporalField$$Type): integer
public static "values"(): ($DayOfWeek)[]
public "getLong"(arg0: $TemporalField$$Type): long
public static "valueOf"(arg0: StringJS): $DayOfWeek
public "getValue"(): integer
public static "of"(arg0: integer): $DayOfWeek
public static "from"(arg0: $TemporalAccessor$$Type): $DayOfWeek
public "isSupported"(arg0: $TemporalField$$Type): boolean
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DayOfWeek$$Type = (("monday") | ("tuesday") | ("wednesday") | ("thursday") | ("friday") | ("saturday") | ("sunday"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DayOfWeek_ = $DayOfWeek$$Type;
}}
declare module "java.time.ZoneId" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ZoneRules, $ZoneRules$$Type} from "java.time.zone.ZoneRules"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Set, $Set$$Type} from "java.util.Set"
import {$TextStyle, $TextStyle$$Type} from "java.time.format.TextStyle"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export class $ZoneId implements $Serializable {
static readonly "SHORT_IDS": $Map<(StringJS), (StringJS)>


public static "getAvailableZoneIds"(): $Set<(StringJS)>
public static "ofOffset"(arg0: StringJS, arg1: $ZoneOffset$$Type): $ZoneId
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public static "systemDefault"(): $ZoneId
public "getRules"(): $ZoneRules
public "normalized"(): $ZoneId
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: StringJS, arg1: $Map$$Type<(StringJS), (StringJS)>): $ZoneId
public static "of"(arg0: StringJS): $ZoneId
public static "from"(arg0: $TemporalAccessor$$Type): $ZoneId
public "getId"(): StringJS
get "rules"(): $ZoneRules
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneId$$Type = ($ZoneId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneId_ = $ZoneId$$Type;
}}
declare module "java.time.zone.ZoneRules" {
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$List, $List$$Type} from "java.util.List"
import {$ZoneOffsetTransition, $ZoneOffsetTransition$$Type} from "java.time.zone.ZoneOffsetTransition"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$ZoneOffsetTransitionRule, $ZoneOffsetTransitionRule$$Type} from "java.time.zone.ZoneOffsetTransitionRule"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $ZoneRules implements $Serializable {


public "getOffset"(arg0: $LocalDateTime$$Type): $ZoneOffset
public "getOffset"(arg0: $Instant$$Type): $ZoneOffset
public "isFixedOffset"(): boolean
public "getValidOffsets"(arg0: $LocalDateTime$$Type): $List<($ZoneOffset)>
public "isDaylightSavings"(arg0: $Instant$$Type): boolean
public "getStandardOffset"(arg0: $Instant$$Type): $ZoneOffset
public "getDaylightSavings"(arg0: $Instant$$Type): $Duration
public "isValidOffset"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type): boolean
public "nextTransition"(arg0: $Instant$$Type): $ZoneOffsetTransition
public "previousTransition"(arg0: $Instant$$Type): $ZoneOffsetTransition
public "getTransitions"(): $List<($ZoneOffsetTransition)>
public "getTransitionRules"(): $List<($ZoneOffsetTransitionRule)>
public "getTransition"(arg0: $LocalDateTime$$Type): $ZoneOffsetTransition
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ZoneOffset$$Type, arg1: $ZoneOffset$$Type, arg2: $List$$Type<($ZoneOffsetTransition$$Type)>, arg3: $List$$Type<($ZoneOffsetTransition$$Type)>, arg4: $List$$Type<($ZoneOffsetTransitionRule$$Type)>): $ZoneRules
public static "of"(arg0: $ZoneOffset$$Type): $ZoneRules
get "fixedOffset"(): boolean
get "transitions"(): $List<($ZoneOffsetTransition)>
get "transitionRules"(): $List<($ZoneOffsetTransitionRule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneRules$$Type = ($ZoneRules);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneRules_ = $ZoneRules$$Type;
}}
declare module "java.time.chrono.ChronoPeriod" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$List, $List$$Type} from "java.util.List"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate, $ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$Chronology, $Chronology$$Type} from "java.time.chrono.Chronology"

export interface $ChronoPeriod extends $TemporalAmount {

 "isNegative"(): boolean
 "minus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "getUnits"(): $List<($TemporalUnit)>
 "negated"(): $ChronoPeriod
 "multipliedBy"(arg0: integer): $ChronoPeriod
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
 "getChronology"(): $Chronology
 "normalized"(): $ChronoPeriod
 "plus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "isZero"(): boolean
 "get"(arg0: $TemporalUnit$$Type): long
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
get "negative"(): boolean
get "units"(): $List<($TemporalUnit)>
get "chronology"(): $Chronology
get "zero"(): boolean
}

export namespace $ChronoPeriod {
function between(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
const probejs$$marker: never
}
export class $ChronoPeriod$$Static implements $ChronoPeriod {


static "between"(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
 "isNegative"(): boolean
 "minus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "getUnits"(): $List<($TemporalUnit)>
 "negated"(): $ChronoPeriod
 "multipliedBy"(arg0: integer): $ChronoPeriod
 "addTo"(arg0: $Temporal$$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$$Type): $Temporal
 "getChronology"(): $Chronology
 "normalized"(): $ChronoPeriod
 "plus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
 "isZero"(): boolean
 "get"(arg0: $TemporalUnit$$Type): long
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoPeriod$$Type = ($ChronoPeriod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoPeriod_ = $ChronoPeriod$$Type;
}}
declare module "java.time.Instant" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock, $Clock$$Type} from "java.time.Clock"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ZonedDateTime, $ZonedDateTime$$Type} from "java.time.ZonedDateTime"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$TemporalAmount, $TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$OffsetDateTime, $OffsetDateTime$$Type} from "java.time.OffsetDateTime"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"

export class $Instant implements $Temporal, $TemporalAdjuster, $Comparable<($Instant)>, $Serializable {
static readonly "MIN": $Instant
static readonly "MAX": $Instant
static readonly "EPOCH": $Instant


public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getNano"(): integer
public "minus"(arg0: $TemporalAmount$$Type): $Instant
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Instant
public static "now"(): $Instant
public static "now"(arg0: $Clock$$Type): $Instant
public "plusMillis"(arg0: long): $Instant
public "minusMillis"(arg0: long): $Instant
public "getEpochSecond"(): long
public static "ofEpochSecond"(arg0: long): $Instant
public static "ofEpochSecond"(arg0: long, arg1: long): $Instant
public "plusSeconds"(arg0: long): $Instant
public static "ofEpochMilli"(arg0: long): $Instant
public "toEpochMilli"(): long
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "truncatedTo"(arg0: $TemporalUnit$$Type): $Instant
public "plusNanos"(arg0: long): $Instant
public "isAfter"(arg0: $Instant$$Type): boolean
public "isBefore"(arg0: $Instant$$Type): boolean
public "atZone"(arg0: $ZoneId$$Type): $ZonedDateTime
public "minusSeconds"(arg0: long): $Instant
public "minusNanos"(arg0: long): $Instant
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "plus"(arg0: $TemporalAmount$$Type): $Temporal
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $Instant$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public static "from"(arg0: $TemporalAccessor$$Type): $Instant
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $Instant
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
get "nano"(): integer
get "epochSecond"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instant$$Type = ($Instant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instant_ = $Instant$$Type;
}}
declare module "java.time.ZoneOffset" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ZoneRules, $ZoneRules$$Type} from "java.time.zone.ZoneRules"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$TemporalAccessor, $TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ValueRange, $ValueRange$$Type} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$TemporalQuery, $TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$TemporalField, $TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $ZoneOffset extends $ZoneId implements $TemporalAccessor, $TemporalAdjuster, $Comparable<($ZoneOffset)>, $Serializable {
static readonly "MIN": $ZoneOffset
static readonly "UTC": $ZoneOffset
static readonly "MAX": $ZoneOffset
static readonly "SHORT_IDS": $Map<(StringJS), (StringJS)>


public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public static "ofHours"(arg0: integer): $ZoneOffset
public "getTotalSeconds"(): integer
public static "ofTotalSeconds"(arg0: integer): $ZoneOffset
public static "ofHoursMinutesSeconds"(arg0: integer, arg1: integer, arg2: integer): $ZoneOffset
public static "ofHoursMinutes"(arg0: integer, arg1: integer): $ZoneOffset
public "getRules"(): $ZoneRules
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "normalized"(): $ZoneId
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ZoneOffset$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public static "of"(arg0: StringJS): $ZoneOffset
public static "from"(arg0: $TemporalAccessor$$Type): $ZoneOffset
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "getId"(): StringJS
get "totalSeconds"(): integer
get "rules"(): $ZoneRules
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffset$$Type = ($ZoneOffset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffset_ = $ZoneOffset$$Type;
}}
