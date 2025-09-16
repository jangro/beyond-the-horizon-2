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

});

