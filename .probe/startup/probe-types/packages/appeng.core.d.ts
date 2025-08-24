declare module "appeng.core.settings.TickRates" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TickRates extends $Enum<($TickRates)> {
static readonly "ExportBus": $TickRates
static readonly "METunnel": $TickRates
static readonly "IOPort": $TickRates
static readonly "ItemTunnel": $TickRates
static readonly "ImportBus": $TickRates
static readonly "Inscriber": $TickRates
static readonly "Charger": $TickRates
static readonly "LightTunnel": $TickRates
static readonly "VibrationChamber": $TickRates
static readonly "Interface": $TickRates
static readonly "StorageBus": $TickRates
static readonly "AnnihilationPlane": $TickRates


public static "values"(): ($TickRates)[]
public static "valueOf"(arg0: string): $TickRates
public "getMin"(): integer
public "getMax"(): integer
public "setMin"(arg0: integer): void
public "setMax"(arg0: integer): void
public "getDefaultMin"(): integer
public "getDefaultMax"(): integer
get "min"(): integer
get "max"(): integer
set "min"(value: integer)
set "max"(value: integer)
get "defaultMin"(): integer
get "defaultMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRates$$Type = (("interface") | ("importbus") | ("exportbus") | ("annihilationplane") | ("metunnel") | ("inscriber") | ("charger") | ("ioport") | ("vibrationchamber") | ("storagebus") | ("itemtunnel") | ("lighttunnel"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickRates_ = $TickRates$$Type;
}}
