// priority: 10

/**
 * @file Recipe additions for EnderIO's crafting methods.
 *
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('enderio')) {
    return;
  }
  const ID_PREFIX = 'bth:enderio/';
  const eio = event.recipes.enderio;

  //
  // Sag Milling
  // sag_milling(input [ingredient], output items [list], energy [int], bonus ['none', 'chance_only', 'multiply_output' (default)])
  //
  eio.sag_milling('minecraft:ancient_debris', [{ item: 'minecraft:netherite_scrap', chance: 1.0 }, { item: 'minecraft:netherite_scrap', chance: 0.75 }], 3600).id(`${ID_PREFIX}sag_milling/ancient_debris`);

  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'platinum', 'silver', 'uranium', 'zinc'].forEach((material) => {
    event.remove({ id: `enderio:sag_milling/${material}_ore` });
    eio.sag_milling(`#c:ores/${material}`, [{ item: `create:crushed_raw_${material}`, chance: 1.0 }, { item: `create:crushed_raw_${material}`, chance: 0.10 }, { item: 'minecraft:cobblestone', chance: 0.10 }], 2400).id(`${ID_PREFIX}sag_milling/ore_${material}`);
    event.remove({ id: `enderio:sag_milling/raw_${material}` });
    eio.sag_milling(`#c:raw_materials/${material}`, [{ item: `create:crushed_raw_${material}`, chance: 1.0 }, { item: `create:crushed_raw_${material}`, chance: 0.10 }], 2400).id(`${ID_PREFIX}sag_milling/raw_${material}`);
  });

  ['copper', 'gold', 'iron'].forEach((material) => {
    event.remove({ id: `enderio:sag_milling/${material}` });
    eio.sag_milling(`#c:ingots/${material}`, [{ item: `immersiveengineering:dust_${material}`, chance: 1.0 }], 2400).id(`${ID_PREFIX}sag_milling/${material}`);
  });


  //
  // Alloy smelting
  // alloy_smelting(inputs [list of input_with_count], output [alloy_output], energy [int], experience [double])
  //
  eio.alloy_smelting([{ tag: 'c:flours/wheat', count: 3 }, { tag: 'c:eggs', count: 1 }], { id: 'enderio:cake_base', count: 2 }, 2000, 0.3).id(`${ID_PREFIX}alloy_smelting/cake_base`);

  //
  // Mod specific recipes
  //
  if (Platform.isLoaded('ae2')) {
    eio.alloy_smelting([{ item: 'ae2:charged_certus_quartz_crystal', count: 1 }, { tag: 'c:dusts/redstone', count: 1 }, { tag: 'c:gems/quartz', count: 1 }], { id: 'ae2:fluix_crystal', count: 2 }, 3200, 0.3).id(`${ID_PREFIX}alloy_smelting/fluix_crystal`);
    eio.sag_milling('#c:gems/certus_quartz', [{ item: 'ae2:certus_quartz_dust', chance: 1.0 }], 2400, 'none').id(`${ID_PREFIX}sag_milling/certus_quartz`);
    eio.sag_milling('#c:gems/fluix', [{ item: 'ae2:fluix_dust', chance: 1.0 }], 2400, 'none').id(`${ID_PREFIX}sag_milling/fluix_crystal`);
  }
  if (Platform.isLoaded('create')) {
    eio.alloy_smelting([{ tag: 'c:ingots/copper', count: 1 }, { tag: 'c:ingots/zinc', count: 1 }], { id: 'create:brass_ingot', count: 2 }, 3200, 0.3).id(`${ID_PREFIX}alloy_smelting/brass_ingot`);
    eio.sag_milling('#c:crops/wheat', [{ item: 'create:wheat_flour', chance: 1.0 }, { item: '2x create:wheat_flour', chance: 0.25 }, { item: 'minecraft:wheat_seeds', chance: 0.25 }], 2400, 'none').id(`${ID_PREFIX}sag_milling/wheat`);
  }
  if (Platform.isLoaded('forbidden_arcanus')) {
    eio.sag_milling('forbidden_arcanus:stella_arcanum', [{ item: 'forbidden_arcanus:stellarite_piece', chance: 1.0 }, { item: 'forbidden_arcanus:stellarite_piece', chance: 0.5 }], 3600).id(`${ID_PREFIX}sag_milling/stella_arcanum`);
  }
  if (Platform.isLoaded('immersiveengineering')) {
    eio.alloy_smelting([{ tag: 'c:dusts/electrum', count: 1 }], { id: 'immersiveengineering:ingot_electrum' }, 1500, 1.0).id(`${ID_PREFIX}alloy_smelting/electrum_ingot_from_dust`);
    eio.alloy_smelting([{ tag: 'c:ingots/copper', count: 1 }, { tag: 'c:ingots/nickel', count: 1 }], { id: 'immersiveengineering:ingot_constantan', count: 2 }, 3200, 0.3).id(`${ID_PREFIX}alloy_smelting/constantan_ingot`);
    eio.alloy_smelting([{ tag: 'c:ingots/gold', count: 1 }, { tag: 'c:ingots/silver', count: 1 }], { id: 'immersiveengineering:ingot_electrum', count: 2 }, 3200, 0.3).id(`${ID_PREFIX}alloy_smelting/electrum_ingot`);
  }

});
