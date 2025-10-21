// priority: 90

/**
 * @file Recipe input / output replacements for Beyond the Horizon.
 *
 * Contains several convenience functions for frequently used replacement approaches.
 * The majority of the recipe changes in this script are to convert recipe inputs to
 * use tags instead of specific items, or adjusting the output where we have a preferred mod to use.
 */

/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {

  // ----- Convenience Functions -----

  /**
   * Replaces a given input ingredient in all KubeJS-compatible recipes.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInput = (from, to) => {
    event.replaceInput({}, from, to);
  };

  /**
   * Replaces a given output item in all KubeJS-compatible recipes.
   * @param {*} from Original output item.
   * @param {*} to New output item.
   */
  const replaceOutput = (from, to) => {
    event.replaceOutput({}, from, to);
  };

  /**
   * Replaces input ingredients in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace ingredients in.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceInput({ id: recipeID }, from, to));
    } else {
      event.replaceInput({ id: recipes }, from, to);
    }
  };

  /**
   * Replaces output items in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace items in.
   * @param {*} from Original item.
   * @param {*} to New item.
   */
  const replaceOutputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceOutput({ id: recipeID }, from, to));
    } else {
      event.replaceOutput({ id: recipes }, from, to);
    }
  };

  // Replace inputs / outputs by recipe type.
  const replaceInputType = (recipeType, from, to) => {
    event.replaceInput({ type: recipeType }, from, to);
  };

  const replaceOutputType = (recipeType, from, to) => {
    event.replaceOutput({ type: recipeType }, from, to);
  };


  // ----- Compatibility -----
  // Use tags instead of items for all dye colours.
  COLORS.forEach((color) => replaceInput(`minecraft:${color}_dye`, `#c:dyes/${color}`));

  // EnderIO
  replaceInputID('enderio:energy_conduit', 'enderio:conductive_alloy_ingot', 'enderio:conductive_alloy_nugget');
  replaceInputID('enderio:enhanced_energy_conduit', 'enderio:energetic_alloy_ingot', 'enderio:energetic_alloy_nugget');
  replaceInputID('enderio:ender_energy_conduit', 'enderio:vibrant_alloy_ingot', 'enderio:vibrant_alloy_nugget');
  replaceInputID('enderio:redstone_conduit', 'enderio:redstone_alloy_ingot', 'enderio:redstone_alloy_nugget');

  // Candles
  replaceInputID('minecraft:candle', 'minecraft:honeycomb', '#bth:candle_material');
  replaceInputID('eidolon_repraised:candle', 'eidolon_repraised:tallow', '#bth:candle_material');
  replaceInputID('eidolon_repraised:candle', '#c:string', '#c:strings'); // Fix bug in mod
  replaceInputID('supplementaries:soap', 'minecraft:porkchop', ['#bth:candle_material', 'minecraft:porkchop']);

  // Dough Compatibility
  replaceInput('create:dough', '#c:dough/wheat');
  replaceInput('farmersdelight:wheat_dough', '#c:dough/wheat');
  replaceInput('minecolonies:bread_dough', '#c:dough/wheat');

  // Dust Compatibility
  replaceInput('eidolon_repraised:sulfur', '#c:dusts/sulfur');
  replaceInput('immersiveengineering:dust_sulfur', '#c:dusts/sulfur');


  // Feather Compatibility
  replaceInputID([
    'minecraft:brush',
    'minecraft:writable_book',
    'ars_elemental:flight_alt',
    'ars_nouveau:orange_sbed',
    'ars_nouveau:ritual_cloudshaping',
    'ars_nouveau:ritual_gravity',
    'ars_nouveau:spike_to_arrow',
    'botania:flighttiara_0',
    'botania:tornado_rod',
    'botania:runic_altar/air',
    'hexerei:notebook',
    'irons_spellbooks:speed_boots',
    'justdirethings:upgrade_flight',
    'minecolonies:blockhutschool',
    'pneumaticcraft:jet_boots_upgrade_2',
    'redstonepen:pen',
    'redstonepen:quill',
    'xercamusic:music_sheet',
  ], 'minecraft:feather', '#c:feathers');
  event.replaceInput({ output: '#minecraft:arrows' }, 'minecraft:feather', '#c:feathers');

  // Fibre Compatibility
  replaceInputID('immersiveengineering:crafting/hemp_fabric', 'immersiveengineering:hemp_fiber', ['immersiveengineering:hemp_fiber', 'supplementaries:flax']);

  // Flour Compatibility
  replaceInput('create:wheat_flour', '#c:flour/wheat');
  replaceInput('pneumaticcraft:wheat_flour', '#c:flour/wheat');

  // Glass Compatibility
  replaceInputID([
    'minecraft:beacon',
    'minecraft:end_crystal',
    'botania:glass_pickaxe',
    'botania:lens_normal',
    'botania:prism',
    'minecolonies:blockhutglassblower',
    'quark:building/crafting/stone_brick_lamp',
    'starbunclemania:fluid_jar',
    'supplementaries:hourglass',
    'supplementaries:jar',
  ], 'minecraft:glass', '#c:glass_blocks/colorless');

  // Ingot Compatibility
  replaceInput('eidolon_repraised:arcane_gold_ingot', '#c:ingots/arcane_gold');
  replaceInput('forbidden_arcanus:deorum_ingot', '#c:ingots/arcane_gold');
  // replaceInput('forbidden_arcanus:obsidian_ingot', '#c:ingots/obsidiansteel');

  // Leather Compatibility
  replaceInputID([
    'minecraft:book',
    'ars_nouveau:annotated_codex',
    'botania:bellows',
    'botania:drum_canopy',
    'botania:drum_gathering',
    'botania:drum_wild',
    'botania:ender_hand',
    'botania:knockback_belt',
    'botania:travel_belt',
    'irons_spellbooks:pumpkin_chestplate',
    'irons_spellbooks:pumpkin_leggings',
    'minecolonies:blockhutfield',
    'minecolonies:build_goggles',
    'minecolonies:clipboard',
    'minecolonies:questlog',
    'minecolonies:resourcescroll',
    'quark:tools/crafting/seed_pouch',
    'supplementaries:bellows',
    'xercamusic:drum',
  ], 'minecraft:leather', '#c:leathers');

  // Nugget Compatibility

  // Ore Compatibility
  replaceInput('eidolon_repraised:silver_ore', '#c:ores/silver');
  replaceInput('eidolon_repraised:deep_silver_ore', '#c:ores/silver');
  replaceInput('immersiveengineering:ore_silver', '#c:ores/silver');
  replaceInput('immersiveengineering:deepslate_ore_silver', '#c:ores/silver');

  // Plate Compatibility
  replaceInput('create:iron_sheet', '#c:plates/iron');
  replaceInput('create:golden_sheet', '#c:plates/gold');
  replaceInput('createaddition:zinc_sheet', '#c:plates/zinc');
  // replaceInput('createdeco:zinc_sheet', '#c:plates/zinc');

  // Propeller Compatibility
  replaceInput('immersive_aircraft:propeller', 'create:propeller');

  // Raw Material Compatibility
  replaceInput('immersiveengineering:raw_silver', '#c:raw_materials/silver');

  // Slime Compatibility
  replaceInputID([
    'minecraft:lead',
    'minecraft:sticky_piston',
    'alexsmobs:pupfish_locator',
    'botania:dynamic/composite_lens',
    'botania:green_pavement',
    'botania:runic_altar/summer',
    'forbidden_arcanus:slimec_pickaxe',
    'forbidden_arcanus:wax',
    'immersive_aircraft:eco_engine',
    'packingtape:tape',
    'supplementaries:item_lore_display',
    'supplementaries:slingshot',
  ], 'minecraft:slime_ball', '#c:slimeballs');

  // Steel compatibility (IE/EnderIO) for selected items
  replaceInputID([
    'immersiveengineering:crafting/steel_wallmount',
    'immersiveengineering:crafting/steel_scaffolding_standard',
    'immersiveengineering:crafting/plate_steel_hammering',
    'immersiveengineering:crafting/steel_fence',
    'immersiveengineering:metalpress/rod_steel',
    'createaddition:rolling/steel_ingot',
  ], 'immersiveengineering:ingot_steel', '#bth:ingots/steel');

  // Stick / Rod Compatibility
  event.replaceInput({ output: '#minecraft:arrows' }, 'minecraft:stick', '#c:rods/wooden');

  // Storage Block Compatibility
  replaceInput('immersiveengineering:raw_block_silver', '#c:storage_blocks/raw_silver');
  replaceInput('immersiveengineering:storage_silver', '#c:storage_blocks/silver');
  replaceInput('immersiveengineering:storage_uranium', '#c:storage_blocks/uranium');

  // Wire Compatibility
  replaceInput('immersiveengineering:wire_copper', '#c:wires/copper');

  // Misc Compatibility
  // replaceInput('minecraft:blast_furnace', ['minecraft:blast_furnace', 'nethersdelight:blackstone_blast_furnace']);
  // replaceInput('minecraft:furnace', ['minecraft:furnace', 'quark:blackstone_furnace', 'quark:deepslate_furnace']);
  // replaceInput('minecraft:smoker', ['minecraft:smoker', 'nethersdelight:nether_brick_smoker']);
  // replaceInput('nethersdelight:blackstone_furnace', ['minecraft:furnace', 'quark:blackstone_furnace', 'quark:deepslate_furnace']);

  // Make the alchemist cauldron more accessible
  replaceInputID('irons_spellbooks:alchemist_cauldron', 'irons_spellbooks:cinder_essence', 'minecraft:blaze_powder');

  // ----- Output Unification -----

  // Dusts

  // Crushed Raw Ores

  // Machines should always output Create crushed raw ores for raw materials
  replaceOutput('create:raw_zinc', 'create:crushed_raw_zinc');
  replaceOutput('immersiveengineering:raw_aluminum', 'create:crushed_raw_aluminum');
  replaceOutput('immersiveengineering:raw_lead', 'create:crushed_raw_lead');
  replaceOutput('immersiveengineering:raw_silver', 'create:crushed_raw_silver');
  replaceOutput('minecraft:raw_copper', 'create:crushed_raw_copper');
  replaceOutput('minecraft:raw_gold', 'create:crushed_raw_gold');
  replaceOutput('minecraft:raw_iron', 'create:crushed_raw_iron');
  replaceOutput('oritech:raw_uranium', 'create:crushed_raw_uranium');



  // TODO: productive bees output replacement

  // Ingots should crush to dust, not crushed raw ore.
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver', 'uranium'].forEach((material) => {
    replaceOutputID(`immersiveengineering:crusher/ingot_${material}`, `create:crushed_raw_${material}`, `immersiveengineering:dust_${material}`);
  });

  // IE doesn't have a platinum dust, so we convert to oritech dust.
  replaceOutputID('immersiveengineering:crusher/ingot_platinum', 'create:crushed_raw_platinum', 'oritech:platinum_dust');

  // Replace Oritech clumps with Create crushed raw ores.
  ['copper', 'gold', 'iron', 'nickel', 'platinum'].forEach((material) => {
    replaceOutput(`oritech:${material}_clump`, `create:crushed_raw_${material}`);
  });


  // Ingots
  replaceOutput('createaddition:electrum_ingot', 'immersiveengineering:ingot_electrum');
  replaceOutput('eidolon_repraised:lead_ingot', 'immersiveengineering:ingot_lead');
  replaceOutput('eidolon_repraised:silver_ingot', 'immersiveengineering:ingot_silver');
  replaceOutput('oritech:electrum_ingot', 'immersiveengineering:ingot_electrum');
  replaceOutput('oritech:steel_ingot', 'immersiveengineering:ingot_steel');

  // Nuggets
  replaceOutput('create:copper_nugget', 'immersiveengineering:nugget_copper');
  replaceOutput('createaddition:electrum_nugget', 'immersiveengineering:nugget_electrum');
  replaceOutput('eidolon_repraised:lead_nugget', 'immersiveengineering:nugget_lead');
  replaceOutput('eidolon_repraised:silver_nugget', 'immersiveengineering:nugget_silver');
  replaceOutput('oritech:copper_nugget', 'immersiveengineering:nugget_copper');
  // replaceOutput('oritech:electrum_nugget', 'immersiveengineering:nugget_electrum');
  replaceOutput('pneumaticcraft:copper_nugget', 'immersiveengineering:nugget_copper');

  // Plates
  replaceOutput('create:copper_sheet', 'immersiveengineering:plate_copper');
  replaceOutput('create:golden_sheet', 'immersiveengineering:plate_gold');
  replaceOutput('create:iron_sheet', 'immersiveengineering:plate_iron');
  replaceOutput('createaddition:electrum_sheet', 'immersiveengineering:plate_electrum');

  // Rods
  replaceOutput('createaddition:iron_rod', 'immersiveengineering:stick_iron');

  // Ore
  replaceOutput('eidolon_repraised:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver');
  replaceOutput('eidolon_repraised:silver_ore', 'immersiveengineering:ore_silver');

  // Raw Materials
  replaceOutput('eidolon_repraised:raw_lead', 'immersiveengineering:raw_lead');
  replaceOutput('eidolon_repraised:raw_silver', 'immersiveengineering:raw_silver');
  // replaceOutput('immersiveengineering:raw_uranium', 'create:crushed_raw_uranium');

  // Storage Blocks
  replaceOutput('eidolon_repraised:raw_silver_block', 'immersiveengineering:raw_block_silver');
  replaceOutput('eidolon_repraised:silver_block', 'immersiveengineering:storage_silver');

  // Wires
  replaceOutput('createaddition:copper_wire', 'immersiveengineering:wire_copper');
  replaceOutput('createaddition:electrum_wire', 'immersiveengineering:wire_electrum');

  // Misc
  replaceInput('farmersdelight:rope', 'supplementaries:rope');
  // replaceOutput('bbb:rope', 'supplementaries:rope');
  replaceOutput('farmersdelight:rope', 'supplementaries:rope');
  replaceOutput('createaddition:chocolate_cake', 'neapolitan:chocolate_cake');
  replaceOutput('incubation:fried_egg', 'farmersdelight:fried_egg');

  // Changes in specific recipes.
  replaceInputID('minecraft:copper_ingot', 'minecraft:copper_block', ['minecraft:copper_block', 'minecraft:waxed_copper_block']);
  // replaceInputID('nethersdelight:blackstone_blast_furnace', 'nethersdelight:blackstone_furnace', 'quark:blackstone_furnace');

  // // Quark tuff changes for the addition of copper and tuff backport mod.
  // replaceInputID('quark:building/crafting/stonevariants/chiseled_tuff_bricks', 'quark:tuff_bricks_slab', 'copperandtuffbackport:tuff_brick_slab');
  // replaceInputID('quark:building/crafting/stonevariants/tuff_pillar', 'quark:polished_tuff_slab', 'copperandtuffbackport:polished_tuff_slab');
  // replaceInputID('quark:building/crafting/vertslabs/polished_tuff_vertical_slab', 'quark:polished_tuff_slab', 'copperandtuffbackport:polished_tuff_slab');
  // replaceInputID('quark:building/crafting/vertslabs/tuff_vertical_slab', 'quark:tuff_slab', 'copperandtuffbackport:tuff_slab');


});
