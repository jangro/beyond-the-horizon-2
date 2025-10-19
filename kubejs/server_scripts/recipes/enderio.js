// priority: 10

/**
 * @file Recipe additions for EnderIO's crafting methods.
 *
 */

/**
 * EnderIO Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:enderio/';

  // Cake Base (changed to accept tag as input)
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 2000,
    "experience": 0.3,
    "inputs": [
      {
        "count": 3,
        "tag": "c:flours/wheat"
      },
      {
        "count": 1,
        "tag": "c:eggs"
      }
    ],
    "output": {
      "count": 2,
      "id": "enderio:cake_base"
    }
  }).id(`${ID_PREFIX}alloy_smelting/cake_base`);

  // Replace incubation fried egg output with farmer's delight fried egg
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 2000,
    "experience": 0.1,
    "inputs": [
      {
        "count": 1,
        "tag": "c:eggs"
      }
    ],
    "output": {
      "id": "farmersdelight:fried_egg"
    }
  }).id(`${ID_PREFIX}alloy_smelting/fried_egg`);

  // The output replacement doesn't work for alloy furnace so remove and re-add uranium smelting recipes
  // TODO: schema for alloy furnace and sagmill
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 1500,
    "experience": 1.0,
    "inputs": [
      {
        "count": 1,
        "tag": "c:ores/uranium"
      }
    ],
    "output": {
      "id": "immersiveengineering:raw_uranium"
    }
  }).id(`${ID_PREFIX}alloy_smelting/uranium`);

  // Electrum
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 1500,
    "experience": 1.0,
    "inputs": [
      {
        "count": 1,
        "tag": "c:dusts/electrum"
      }
    ],
    "output": {
      "id": "immersiveengineering:ingot_electrum"
    }
  }).id(`${ID_PREFIX}alloy_smelting/electrum_ingot_from_dust`);

  // Alloy smelting recipe for fluix crystal
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {
        "count": 1,
        "item": "ae2:charged_certus_quartz_crystal"
      },
      {
        "count": 1,
        "tag": "c:dusts/redstone"
      },
      {
        "count": 1,
        "tag": "c:gems/quartz"
      }
    ],
    "output": {
      "count": 2,
      "id": "ae2:fluix_crystal"
    }
  }).id(`${ID_PREFIX}alloy_smelting/fluix_crystal`);

  // Alloy smelting recipe for brass ingot
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {
        "count": 1,
        "tag": "c:ingots/copper"
      },
      {
        "count": 1,
        "tag": "c:ingots/zinc"
      }
    ],
    "output": {
      "count": 2,
      "id": "create:brass_ingot"
    }
  }).id(`${ID_PREFIX}alloy_smelting/brass_ingot`);

  // Alloy smelting recipe for constantan ingot
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {
        "count": 1,
        "tag": "c:ingots/copper"
      },
      {
        "count": 1,
        "tag": "c:ingots/nickel"
      }
    ],
    "output": {
      "count": 2,
      "id": "immersiveengineering:ingot_constantan"
    }
  }).id(`${ID_PREFIX}alloy_smelting/constantan_ingot`);

  // Alloy smelting recipe for electrum ingot
  event.custom({
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {
        "count": 1,
        "tag": "c:ingots/gold"
      },
      {
        "count": 1,
        "tag": "c:ingots/silver"
      }
    ],
    "output": {
      "count": 2,
      "id": "immersiveengineering:ingot_electrum"
    }
  }).id(`${ID_PREFIX}alloy_smelting/electrum_ingot`);


  //
  // SAG MILLING
  //

  // Sag mill recipe for aluminum
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:ores/aluminum"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_aluminum"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_aluminum"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/aluminum`);

  // Sag mill recipe for copper
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:ores/copper"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 5,
          "id": "create:crushed_raw_copper"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_copper"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/copper`);

  // Sag mill recipe for iron
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:ores/iron"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_iron"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_iron"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/iron`);

  // Sag mill recipe for gold
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:ores/gold"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_gold"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_gold"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/gold`);

  // Sag mill recipe for lead
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:ores/lead"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_lead"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_lead"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/lead`);

  // Sag mill recipe for obsidian
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:obsidians"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "create:powdered_obsidian"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "create:powdered_obsidian"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:obsidian"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/obsidian`);

  // Sag mill recipe for silver
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:ores/silver"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_silver"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_silver"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/silver`);

  // Sag mill recipe for uranium
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:ores/uranium"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "immersiveengineering:raw_uranium"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "immersiveengineering:raw_uranium"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/uranium`);

  // Sag mill recipe for zinc
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:ores/zinc"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_zinc"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_zinc"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/zinc`);

  // Sag mill recipe for nickel
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:ores/nickel"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_nickel"
        },
        "optional": false
      },
      {
        "chance": 0.33,
        "item": {
          "count": 1,
          "id": "create:crushed_raw_nickel"
        },
        "optional": false
      },
      {
        "chance": 0.15,
        "item": {
          "count": 1,
          "id": "minecraft:cobblestone"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/nickel`);

  // Sag mill recipe for certus quartz
  event.custom({
    "type": "enderio:sag_milling",
    "bonus": "none",
    "energy": 2400,
    "input": {
      "tag": "c:gems/certus_quartz"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "ae2:certus_quartz_dust"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/certus_quartz`);

  // Sag mill recipe for fluix
  event.custom({
    "type": "enderio:sag_milling",
    "bonus": "none",
    "energy": 2400,
    "input": {
      "tag": "c:gems/fluix"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "ae2:fluix_dust"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/fluix_crystal`);

  // Sag mill recipe for ancient debris
  // Base multiplier 1.75x
  // End steel grinding ball 2.4x
  // Vibrant grinding ball 3.6x
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 3600,
    "input": {
      "item": "minecraft:ancient_debris"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "minecraft:netherite_scrap"
        },
        "optional": false
      },
      {
        "chance": 0.75,
        "item": {
          "count": 1,
          "id": "minecraft:netherite_scrap"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/ancient_debris`);

  // XXX: Not in 1.21.1??
  // Sag mill recipe for arcance debris
  // Base multiplier 1.75x
  // End steel grinding ball 2.4x
  // Vibrant grinding ball 3.6x
  // event.custom({
  //   "type": "enderio:sag_milling",
  //   "energy": 3600,
  //   "input": {
  //     "item": "irons_spellbooks:arcane_debris"
  //   },
  //   "outputs": [
  //     {
  //       "chance": 1.0,
  //       "item": {
  //         "count": 1,
  //         "id": "irons_spellbooks:arcane_salvage"
  //       },
  //       "optional": false
  //     },
  //     {
  //       "chance": 0.75,
  //       "item": {
  //         "count": 1,
  //         "id": "irons_spellbooks:arcane_salvage"
  //       },
  //       "optional": false
  //     }
  //   ]
  // }).id(`${ID_PREFIX}sag_milling/arcane_debris`);

  // Sag mill recipe for stella arcanum
  // Base multiplier 1.3x
  // End steel grinding ball 2.2x
  // Vibrant grinding ball 3x
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 3600,
    "input": {
      "item": "forbidden_arcanus:stella_arcanum"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "forbidden_arcanus:stellarite_piece"
        },
        "optional": false
      },
      {
        "chance": 0.5,
        "item": {
          "count": 1,
          "id": "forbidden_arcanus:stellarite_piece"
        },
        "optional": false
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/stella_arcanum`);

  // Sag mill recipe for wheat (output create flour instead of enderio flour)
  event.custom({
    "type": "enderio:sag_milling",
    "energy": 2400,
    "input": {
      "tag": "c:crops/wheat"
    },
    "outputs": [
      {
        "chance": 1.0,
        "item": {
          "count": 1,
          "id": "create:wheat_flour"
        },
        "optional": false
      },
      {
        "chance": 0.25,
        "item": {
          "count": 1,
          "id": "create:wheat_flour"
        },
        "optional": true
      },
      {
        "chance": 0.2,
        "item": {
          "count": 1,
          "tag": "c:seeds/wheat"
        },
        "optional": true
      }
    ]
  }).id(`${ID_PREFIX}sag_milling/wheat`);

  // Sag mill recipe for rats garbage
  // event.custom({
  //   "type": "enderio:sag_milling",
  //   "energy": 1500,
  //   "input": {
  //     "item": "rats:garbage_pile"
  //   },
  //   "outputs": [
  //     {
  //       "chance": 0.5,
  //       "item": {
  //         "item": "rats:plastic_waste"
  //       },
  //       "optional": true
  //     }
  //   ]
  // }).id(`${ID_PREFIX}sag_milling/garbage_pile`);
});
