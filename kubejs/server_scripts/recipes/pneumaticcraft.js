// priority: 10

/**
 * @file Recipe additions for PneumaticCraft's crafting methods.
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('pneumaticcraft')) {
    return;
  }

  const ID_PREFIX = 'bth:pneumaticcraft/';

  event.custom({
    "type": "pneumaticcraft:explosion_crafting",
    "input": {
      "count": 1,
      "item": "minecraft:obsidian"
    },
    "loss_rate": 20,
    "results": [
      {
        "count": 1,
        "id": "minecraft:crying_obsidian"
      }
    ]
  }).id(ID_PREFIX + 'explosion_crafting/crying_obsidian');

  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "count": 1,
        "item": "minecraft:obsidian"
      }
    ],
    "pressure": 2.5,
    "results": [
      {
        "count": 1,
        "id": "minecraft:crying_obsidian"
      }
    ]
  }).id(ID_PREFIX + 'pressure_chamber/crying_obsidian');



  //
  // Thermopneumatic Processing Plant
  //

  // Liquid Source
  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "exothermic": false,
    "pressure": 2.0,
    "speed": 0.5,
    "inputs": {
      "item": {
        "item": "ars_nouveau:sourceberry_bush"
      }
    },
    "outputs": {
      "fluid_output": {
        "amount": 100,
        "id": "starbunclemania:source_fluid"
      }
    }
  }).id(`${ID_PREFIX}thermo_plant/source_fluid`);

  // Liquid Chorus
  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "exothermic": false,
    "pressure": 2.0,
    "speed": 0.5,
    "inputs": {
      "item": {
        "item": "minecraft:popped_chorus_fruit"
      },
    },
    "outputs": {
      "fluid_output": {
        "amount": 125,
        "id": "integrateddynamics:liquid_chorus"
      },
    }
  }).id(`${ID_PREFIX}thermo_plant/liquid_chorus`);

  // BTH sugar water
  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "exothermic": false,
    "pressure": 2.0,
    "speed": 0.5,
    "inputs": {
      "item": {
        "item": "minecraft:sugar"
      },
      "fluid": {
        "amount": 1000,
        "tag": "minecraft:water"
      },
    },
    "outputs": {
      "fluid_output": {
        "amount": 1000,
        "id": "bth:sugar_water"
      },
    }
  }).id(`${ID_PREFIX}thermo_plant/sugar_water`);

  // BTH soul mixture
  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "exothermic": false,
    "pressure": 2.0,
    "speed": 0.5,
    "temperature": {
      "min_temp": 373
    },
    "inputs": {
      "item": {
        "item": "minecraft:soul_sand"
      },
      "fluid": {
        "amount": 1000,
        "tag": "minecraft:water"
      },
    },
    "outputs": {
      "fluid_output": {
        "amount": 1000,
        "id": "bth:soul_mixture"
      },
    }
  }).id(`${ID_PREFIX}thermo_plant/soul_mixture`);

  // BTH ender fuel
  event.custom({
    "type": "pneumaticcraft:fluid_mixer",
    "pressure": 3.0,
    "time": 100,
    "input1": {
      "amount": 500,
      "fluid": "integrateddynamics:liquid_chorus"
    },
    "input2": {
      "amount": 500,
      "fluid": "bth:soul_mixture"
    },
    "fluid_output": {
      "amount": 1000,
      "id": "bth:ender_fuel"
    },
    "item_output": {}
  }).id(`${ID_PREFIX}fluid_mixer/ender_fuel`);

});
