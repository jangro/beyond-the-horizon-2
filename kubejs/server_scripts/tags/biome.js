// priority: 110

/**
 * @file Biome Tag Modifications for Beyond the Horizon.
 *
 * Documentation: https://kubejs.com/wiki/tutorials/tags
 */

/**
 * Biome Tag Event Handler
 */
ServerEvents.tags('worldgen/biome', event => {

  // Create biome tag for scarlet tower
  event.add('bth:is_scarlet_tower_biome', 'terralith:scarlet_mountains');
  event.add('bth:is_scarlet_tower_biome', 'terralith:volcanic_peaks');

  // Create biome tag for forest towers (snowy biomes removed below)
  event.add('bth:is_forest_tower_biome', event.get('minecraft:is_mountain').getObjectIds());
  event.get('bth:is_forest_tower_biome').remove('minecraft:meadow');

  // Fill Snowy Mountain Biome tag and remove snowy biomes from forest tower tag.
  const snowy_biomes = event.get('forge:is_snowy').getObjectIds();
  const forest_and_snowy_tower_biomes = event.get('bth:is_forest_tower_biome').getObjectIds();
  snowy_biomes.forEach(snowyBiomeID => {
    forest_and_snowy_tower_biomes.forEach(mountainBiomeID => {
      if (snowyBiomeID == mountainBiomeID) {
        event.add('bth:is_frozen_tower_biome', mountainBiomeID);
        event.get('bth:is_forest_tower_biome').remove(mountainBiomeID);
      }
    });
  });

  // Create biome tag with biomes suitable for player houses
  event.add('bth:house_biomes', [
    'terralith:blooming_valley',
    'terralith:arid_highlands',
    'terralith:brushland',
    'minecraft:flower_forest',
    'minecraft:forest',
    'minecraft:cherry_grove',
    'terralith:sakura_grove',
    'terralith:sakura_valley']);

  // Create biome tag with savanna like biomes
  event.add('bth:savanna_biomes', [
    'minecraft:savanna',
    'minecraft:savanna_plateau',
    'minecraft:windswept_savanna',
    'biomeswevegone:araucaria_savanna',
    'biomeswevegone:baobab_savanna',
    'terralith:ashen_savanna',
    'terralith:fractured_savanna',
    'terralith:savanna_badlands',
    'terralith:savanna_slopes']);


  // Remove these structures from all biomes to be re-added below
  [
    "alshanex_familiars:has_structure/hunter_campsite",

    // 'bth_structures:has_structure/tower_forest',
    // 'bth_structures:has_structure/tower_frozen',
    // 'bth_structures:has_structure/tower_scarlet',

    'bth_structures:has_structure/aether_portal_floating',
    'bth_structures:has_structure/aether_portal_framed',
    'bth_structures:has_structure/battle_grounds',
    'bth_structures:has_structure/dw20',
    'bth_structures:has_structure/wagon',

    'aether_villages:has_structure/olympic_citadel_biomes',
    'deep_aether:has_brass_dungeon',

    "graveyard:dead_tree",
    "graveyard:haunted_house",
    "graveyard:large_graveyard",
    "graveyard:medium_graveyard",
    "graveyard:memorial_tree",
    "graveyard:mushroom_grave",
    "graveyard:ruins",
    'hauntedharvest:has_abandoned_farm',

    'irons_spellbooks:has_structure/evoker_fort',
    'irons_spellbooks:has_structure/mountain_tower',
    'irons_spellbooks:has_structure/pyromancer_tower',

    // adjust biomes for barbarian camps
    'minecolonies:has_structure/barbarian_camp',

    'ribbits:has_structure/ribbit_village',

    'terralith:has_structure/desert_outpost',
    'terralith:has_structure/mage_complex',
    'terralith:has_structure/mage_tower',
    'terralith:has_structure/witch_hut',

    'valhelsia_structures:has_structure/big_tree',
    'valhelsia_structures:has_structure/castle',
    'valhelsia_structures:has_structure/has_forge',
    'valhelsia_structures:has_structure/player_house',
    'valhelsia_structures:has_structure/spawner_dungeon',

  ].forEach((tag) => event.removeAll(tag));


  //
  // BTH: Set biomes for each structure set in bth:worldgen/structure_set/*
  //

  // BTH: Forests
  [
    "alshanex_familiars:hunter_campsite",
  ].forEach((tag) => event.add(tag, ['#minecraft:forest']));

  // BTH: Birch forest
  [
  ].forEach((tag) => event.add(tag, ['minecraft:birch_forest', 'minecraft:old_growth_birch_forest']));

  // BTH: Forested highlands
  [
    'valhelsia_structures:has_structure/castle',
  ].forEach((tag) => event.add(tag, ['terralith:forested_highlands']));

  // BTH: Meadow
  [
    'bth_structures:ruined_hangar',
    'valhelsia_structures:has_structure/spawner_dungeon',
  ].forEach((tag) => event.add(tag, ['minecraft:meadow']));

  // BTH: Plains
  [
    'bth_structures:dw20',
  ].forEach((tag) => event.add(tag, ['minecraft:plains']));

  // BTH: Savanna type biomes
  [
  ].forEach((tag) => event.add(tag, ['minecraft:savanna', 'minecraft:savanna_plateau', 'minecraft:windswept_savanna', 'minecraft:shattered_savanna_plateau']));

  // BTH: Sparse jungle
  [
  ].forEach((tag) => event.add(tag, ['minecraft:sparse_jungle']));

  // BTH: Spooky
  [
    'bth_structures:magician_house',
    'graveyard:has_structure/mushroom_grave',
    'graveyard:has_structure/dead_tree',
    'graveyard:has_structure/haunted_house',
    'graveyard:has_structure/medium_graveyard',
    'graveyard:has_structure/small_graveyard',
    'graveyard:has_structure/ruins',
  ].forEach((tag) => event.add(tag, ['minecraft:dark_forest']));

  // BTH: Taiga
  [
    'valhelsia_structures:has_structure/has_forge',
  ].forEach((tag) => event.add(tag, ['minecraft:taiga', 'minecraft:old_growth_spruce_taiga', 'minecraft:old_growth_pine_taiga']));

  // BTH Structures
  event.add('bth_structures:has_structure/aether_portal_framed', ['terralith:lavender_forest', 'terralith:lavender_valley', 'terralith:moonlight_grove', 'terralith:moonlight_valley']);
  event.add('bth_structures:has_structure/battle_grounds', ['minecraft:plains', 'minecraft:old_growth_birch_forest', 'minecraft:savanna']);
  event.add('bth_structures:has_structure/dw20', ['minecraft:plains', 'minecraft:jungle']);
  // event.add('bth_structures:has_structure/tower_forest', '#bth:is_forest_tower_biome');
  // event.add('bth_structures:has_structure/tower_frozen', '#bth:is_frozen_tower_biome');
  // event.add('bth_structures:has_structure/tower_scarlet', '#bth:is_scarlet_tower_biome');
  event.add('bth_structures:has_structure/wagon', ['minecraft:plains']);

  // Aether and add-ons
  // Allow structures to generate in any biome so we can control distribution better
  event.add('aether_villages:has_structure/olympic_citadel_biomes', ['#aether:is_aether']);
  event.add('deep_aether:has_brass_dungeon', ['#aether:is_aether']);

  // Eidolon - Stray Towers spawn only in snowy mountains.
  // event.add('eidolon:has_structure/stray_tower_biomes', '#bth:is_frozen_tower_biome');

  // Graveyard
  event.add('graveyard:has_structure/ruins', ['terralith:shrubland']);
  event.add('graveyard:has_structure/dead_tree', ['terralith:ice_marsh']);

  // Iron's Spellbooks
  event.add('irons_spellbooks:has_structure/evoker_fort', ['minecraft:snowy_plains']);
  event.add('irons_spellbooks:has_structure/mountain_tower', ['minecraft:stony_peaks', 'terralith:rocky_mountains']);
  event.add('irons_spellbooks:has_structure/pyromancer_tower', ['terralith:volcanic_peaks', 'terralith:scarlet_mountains', 'terralith:yellowstone']);

  // Haunted Harvest
  event.add('hauntedharvest:has_abandoned_farm', ['minecraft:forest']);

  // Ribbit village
  event.add('ribbits:has_structure/ribbit_village', ['minecraft:swamp']);

  // Terralith
  event.add('terralith:has_structure/mage_complex', ['terralith:moonlight_grove', 'terralith:moonlight_valley']);
  event.add('terralith:has_structure/mage_tower', ['terralith:moonlight_grove', 'terralith:moonlight_valley']);

  // Valhelsia Structures
  event.add('valhelsia_structures:has_structure/player_house', ['#bth:house_biomes']);

  // MineColonies barbarian camp (snowy biomes removed)
  event.add('minecolonies:has_structure/barbarian_camp', [
    'minecraft:plains',
    '#forge:is_plains',
    'minecraft:sunflower_plains',
    'minecraft:forest',
    '#minecraft:is_forest',
    'minecraft:flower_forest',
    'minecraft:birch_forest',
    'minecraft:old_growth_birch_forest',
    'minecraft:windswept_hills',
    'minecraft:windswept_forest',
    'minecraft:meadow'
  ]);

});
