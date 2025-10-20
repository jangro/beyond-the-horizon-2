// priority: 10

/**
 * @file Recipe additions for PneumaticCraft's crafting methods.
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('pneumaticcraft')) {
    return;
  }
  const ID_PREFIX = 'bth:pneumaticcraft/';
  const pc = event.recipes.pneumaticcraft;

  //
  // Explosion crafting
  // explosion_crafting(input [ingredient], loss_rate [int], results [list of result_with_count])
  //
  pc.explosion_crafting('minecraft:obsidian', 20, [{ id: 'minecraft:crying_obsidian', count: 1 }]).id(ID_PREFIX + 'explosion_crafting/crying_obsidian');

  //
  // Pressure chamber
  // pressure_chamber(inputs [list of ingredients], pressure [double], results [list of result_with_count])
  //
  pc.pressure_chamber(['minecraft:obsidian'], 2.5, [{ id: 'minecraft:crying_obsidian', count: 1 }]).id(ID_PREFIX + 'pressure_chamber/crying_obsidian');

  //
  // Thermopneumatic Processing Plant
  // thermo_plant(inputs [object: {item?, fluid?}], outputs [object: {item_output?, fluid_output?}], pressure [double], speed [double], exothermic [boolean], temperature? [object: {min_temp?, max_temp?}])
  //
  pc.thermo_plant({ item: 'minecraft:sugar', fluid: { tag: 'minecraft:water', amount: 1000 } }, { fluid_output: { id: 'bth:sugar_water', amount: 1000 } }, 2.0, 0.5, false).id(`${ID_PREFIX}thermo_plant/sugar_water`);
  pc.thermo_plant({ item: 'minecraft:soul_sand', fluid: { tag: 'minecraft:water', amount: 1000 } }, { fluid_output: { id: 'bth:soul_mixture', amount: 1000 } }, 2.0, 0.5, false, { min_temp: 373 }).id(`${ID_PREFIX}thermo_plant/soul_mixture`);

  //
  // Fluid Mixer
  // fluid_mixer(input1 [fluid_input], input2 [fluid_input], pressure [double], time [int], fluid_output [fluid_output], item_output [optional_item_stack])
  //
  pc.fluid_mixer({ fluid: 'integrateddynamics:liquid_chorus', amount: 500 }, { fluid: 'bth:soul_mixture', amount: 500 }, 3.0, 100, { id: 'bth:ender_fuel', amount: 1000 }, 'minecraft:air').id(`${ID_PREFIX}fluid_mixer/ender_fuel`);

  //
  // Mod specific recipes
  //
  if (Platform.isLoaded('integrateddynamics')) {
    pc.thermo_plant({ item: 'minecraft:popped_chorus_fruit' }, { fluid_output: { id: 'integrateddynamics:liquid_chorus', amount: 125 } }, 2.0, 0.5, false).id(`${ID_PREFIX}thermo_plant/liquid_chorus`);
  }

  if (Platform.isLoaded('starbunclemania')) {
    pc.thermo_plant({ item: 'ars_nouveau:sourceberry_bush' }, { fluid_output: { id: 'starbunclemania:source_fluid', amount: 100 } }, 2.0, 0.5, false).id(`${ID_PREFIX}thermo_plant/source_fluid`);
  }

});
