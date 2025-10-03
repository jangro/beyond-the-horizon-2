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
  const snowy_biomes = event.get('c:is_snowy').getObjectIds();
  const forest_and_snowy_tower_biomes = event.get('bth:is_forest_tower_biome').getObjectIds();
  snowy_biomes.forEach(snowyBiomeID => {
    forest_and_snowy_tower_biomes.forEach(mountainBiomeID => {
      if (snowyBiomeID == mountainBiomeID) {
        event.add('bth:is_frozen_tower_biome', mountainBiomeID);
        event.get('bth:is_forest_tower_biome').remove(mountainBiomeID);
      }
    });
  });

  // event.get('c:is_dark_forest').getObjectIds().forEach(biomeID => {
  //   console.log(`c:is_dark_forest biome: ${biomeID}`);
  // });

  // Create biome tag with biomes suitable for player houses
  event.add('bth:house_biomes', [
    'biomeswevegone:amaranth_grassland',
    'biomeswevegone:allium_shrubland',
    'biomeswevegone:enchanted_tangle',
    'biomeswevegone:orchard',
    'biomeswevegone:skyrise_vale',
    'integrateddynamics:meneglin',
    'terralith:blooming_valley',
    'terralith:arid_highlands',
    'terralith:brushland',
    'minecraft:flower_forest',
    'minecraft:forest',
    'minecraft:taiga',
    'minecraft:cherry_grove',
    'terralith:sakura_grove',
    'terralith:sakura_valley',
  ]);

  // For Terralith mage tower and complex (and maybe more)
  event.add('bth:mage_biomes', [
    'biomeswevegone:amaranth_grassland',
    'biomeswevegone:enchanted_tangle',
    'biomeswevegone:skyrise_vale',
    'terralith:lavender_valley',
    'terralith:moonlight_grove',
    'terralith:moonlight_valley',
  ]);

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
    'terralith:savanna_slopes',
  ]);

  // Create biome tag with meadow like biomes
  event.add('bth:meadow_biomes', [
    'minecraft:meadow',
    'biomeswevegone:coconino_meadow',
  ]);


  // Remove these structures from all biomes to disable generation (structure can also be disabled through structure sets)
  [
    'terralith:has_structure/desert_outpost',
    'terralith:has_structure/witch_hut',
  ].forEach((tag) => event.removeAll(tag));


  // Remove these structures from all biomes to be re-added below
  [
    'ae2:has_meteorites',

    'aether_villages:has_structure/olympic_citadel_biomes',

    "alshanex_familiars:has_structure/hunter_campsite",

    // Towers are not converted to BTH 2 yet
    // 'bth_structures:has_structure/tower_forest',
    // 'bth_structures:has_structure/tower_frozen',
    // 'bth_structures:has_structure/tower_scarlet',

    'bth_structures:has_structure/aether_portal_floating',
    'bth_structures:has_structure/aether_portal_framed',
    'bth_structures:has_structure/battle_grounds',
    'bth_structures:has_structure/dw20',
    'bth_structures:has_structure/wagon',

    'deep_aether:has_brass_dungeon',

    'eidolon_repraised:has_structure/stray_tower_biomes',

    "graveyard:has_structure/dead_tree",
    "graveyard:has_structure/haunted_house",
    "graveyard:has_structure/large_graveyard",
    "graveyard:has_structure/medium_graveyard",
    "graveyard:has_structure/memorial_tree",
    "graveyard:has_structure/mushroom_grave",
    "graveyard:has_structure/ruins",

    'hauntedharvest:has_abandoned_farm',

    'irons_spellbooks:has_structure/evoker_fort',
    'irons_spellbooks:has_structure/mountain_tower',
    'irons_spellbooks:has_structure/pyromancer_tower',

    'minecolonies:has_structure/barbarian_camp',

    'ribbits:has_structure/ribbit_village',

    'terralith:has_structure/mage_complex',
    'terralith:has_structure/mage_tower',

    'valhelsia_structures:has_structure/big_tree',
    'valhelsia_structures:has_structure/castle',
    'valhelsia_structures:has_structure/castle_ruin',
    'valhelsia_structures:has_structure/has_forge',
    'valhelsia_structures:has_structure/player_house',
    'valhelsia_structures:has_structure/spawner_dungeon',
    'valhelsia_structures:has_structure/tower_ruin',

  ].forEach((tag) => event.removeAll(tag));


  //
  // BTH: Set biomes for each structure set in bth:worldgen/structure_set/*
  //

  // BTH: Forests
  [
    "alshanex_familiars:hunter_campsite",
  ].forEach((tag) => event.add(tag, ['#c:is_forest']));

  // BTH: Birch forest
  [
    'valhelsia_structures:has_structure/tower_ruin',
  ].forEach((tag) => event.add(tag, ['#c:is_birch_forest']));

  // BTH: Forested highlands
  [
    'valhelsia_structures:has_structure/castle',
    'valhelsia_structures:has_structure/castle_ruin',
    'valhelsia_structures:has_structure/tower_ruin',
  ].forEach((tag) => event.add(tag, ['biomeswevegone:temperate_grove', 'terralith:temperate_highlands', 'terralith:forested_highlands']));

  // BTH: Meadow
  [
    'bth_structures:has_structure/ruined_hangar',
    'valhelsia_structures:has_structure/spawner_dungeon',
    'valhelsia_structures:has_structure/tower_ruin',
  ].forEach((tag) => event.add(tag, ['biomeswevegone:coconino_meadow', 'minecraft:meadow']));

  // BTH: Plains
  [
    'valhelsia_structures:has_structure/big_tree',
    'valhelsia_structures:has_structure/spawner_dungeon',
    'valhelsia_structures:has_structure/tower_ruin',
  ].forEach((tag) => event.add(tag, ['minecraft:plains']));

  // BTH: Savanna type biomes
  [
  ].forEach((tag) => event.add(tag, ['#c:is_savanna']));

  // BTH: Sparse jungle
  [
  ].forEach((tag) => event.add(tag, ['minecraft:sparse_jungle']));

  // BTH: Spooky
  [
    'bth_structures:has_structure/magician_house',
    'graveyard:has_structure/mushroom_grave',
    'graveyard:has_structure/dead_tree',
    'graveyard:has_structure/haunted_house',
    'graveyard:has_structure/medium_graveyard',
    'graveyard:has_structure/ruins',
  ].forEach((tag) => event.add(tag, ['#c:is_dark_forest', 'biomeswevegone:ebony_woods', 'biomeswevegone:coniferous_forest']));

  // BTH: Taiga
  [
    'graveyard:has_structure/haunted_house',
    'graveyard:has_structure/large_graveyard',
  ].forEach((tag) => event.add(tag, ['#c:is_taiga']));

  // BTH: House biomes
  [
    'valhelsia_structures:has_structure/has_forge',
    'valhelsia_structures:has_structure/player_house',
  ].forEach((tag) => event.add(tag, ['#bth:house_biomes']));

  // BTH Structures
  event.add('bth_structures:has_structure/aether_portal_framed', ['terralith:lavender_forest', 'terralith:lavender_valley', 'terralith:moonlight_grove', 'terralith:moonlight_valley']);
  event.add('bth_structures:has_structure/battle_grounds', ['minecraft:plains', 'minecraft:old_growth_birch_forest', 'minecraft:savanna']);
  event.add('bth_structures:has_structure/dw20', ['minecraft:plains', 'minecraft:jungle']);
  // Towers are not converted to BTH 2 yet
  // event.add('bth_structures:has_structure/tower_forest', '#bth:is_forest_tower_biome');
  // event.add('bth_structures:has_structure/tower_frozen', '#bth:is_frozen_tower_biome');
  // event.add('bth_structures:has_structure/tower_scarlet', '#bth:is_scarlet_tower_biome');
  event.add('bth_structures:has_structure/wagon', ['#c:is_plains', 'biomeswevegone:orchard', 'minecraft:savanna']);

  // AE2 (reduce from 'all overworld biomes')
  event.add('ae2:has_meteorites', ['#c:is_badlands', '#c:is_forest', '#c:is_plains']);

  // Aether and add-ons
  // Allow structures to generate in any biome so we can control distribution better
  event.add('aether_villages:has_structure/olympic_citadel_biomes', ['#aether:is_aether']);
  event.add('deep_aether:has_brass_dungeon', ['#aether:is_aether']);

  // Eidolon - Stray Towers spawn only in snowy mountains.
  event.add('eidolon_repraised:has_structure/stray_tower_biomes', '#bth:is_frozen_tower_biome');

  // Graveyard
  event.add('graveyard:has_structure/ruins', ['terralith:shrubland']);
  event.add('graveyard:has_structure/dead_tree', ['#c:is_dead', 'terralith:ice_marsh']);

  // Iron's Spellbooks
  event.add('irons_spellbooks:has_structure/evoker_fort', ['#c:is_snowy_plains', 'biomeswevegone:frosted_coniferous_forest', 'biomeswevegone:frosted_taiga', 'minecraft:snowy_taiga', 'terralith:cold_shrubland', 'terralith:siberian_taiga', 'terralith:siberian_grove']);
  event.add('irons_spellbooks:has_structure/mountain_tower', ['minecraft:stony_peaks', 'minecraft:jagged_peaks', 'minecraft:frozen_peaks', 'terralith:rocky_mountains', 'terralith:wintry_forest', 'terralith:wintry_lowlands']);
  event.add('irons_spellbooks:has_structure/pyromancer_tower', ['#c:is_badlands', 'terralith:volcanic_peaks', 'terralith:scarlet_mountains', 'terralith:yellowstone']);

  // Haunted Harvest
  event.add('hauntedharvest:has_abandoned_farm', ['autumnity:maple_forest', 'autumnity:pumpkin_fields', 'biomeswevegone:pumpkin_valley']);

  // Ribbit village
  event.add('ribbits:has_structure/ribbit_village', ['#c:is_swamp']);

  // Terralith
  // TODO: add more biomes here
  event.add('terralith:has_structure/mage_complex', ['#bth:mage_biomes']);
  event.add('terralith:has_structure/mage_tower', ['#bth:mage_biomes']);

  // MineColonies barbarian camp spawns too frequent and in inappropriate biomes by default
  event.add('minecolonies:has_structure/barbarian_camp', ['minecraft:plains', 'minecraft:forest']);

});


// ===============================> Snowy biomes
// minecraft:snowy_beach
// minecraft:snowy_plains
// minecraft:ice_spikes
// minecraft:snowy_taiga
// minecraft:grove
// minecraft:snowy_slopes
// minecraft:jagged_peaks
// minecraft:frozen_peaks
// biomeswevegone:eroded_borealis
// biomeswevegone:howling_peaks
// terralith:alpine_grove
// terralith:cold_shrubland
// terralith:emerald_peaks
// terralith:rocky_shrubland
// terralith:scarlet_mountains
// terralith:siberian_grove
// terralith:siberian_taiga
// terralith:skylands_winter
// terralith:snowy_badlands
// terralith:snowy_cherry_grove
// terralith:snowy_maple_forest
// terralith:snowy_shield
// terralith:wintry_forest
// terralith:wintry_lowlands
// terralith:frozen_cliffs
// terralith:glacial_chasm
// terralith:gravel_desert
// terralith:ice_marsh
// terralith:rocky_mountains

// ===============================> Plains biomes
// minecraft:plains
// minecraft:sunflower_plains
// biomeswevegone:allium_shrubland
// biomeswevegone:amaranth_grassland
// biomeswevegone:coconino_meadow
// biomeswevegone:crimson_tundra
// biomeswevegone:firecracker_chaparral
// biomeswevegone:prairie
// biomeswevegone:pumpkin_valley
// biomeswevegone:rose_fields
// biomeswevegone:temperate_grove
// terralith:alpine_highlands
// terralith:arid_highlands
// terralith:brushland
// terralith:highlands
// terralith:steppe
// neapolitan:strawberry_fields

// ===============================> Forest biomes
// minecraft:forest
// minecraft:flower_forest
// minecraft:birch_forest
// minecraft:old_growth_birch_forest
// minecraft:dark_forest
// minecraft:grove
// ars_nouveau:archwood_forest
// ars_elemental:flashing_forest
// ars_elemental:blazing_forest
// ars_elemental:cascading_forest
// ars_elemental:flourishing_forest
// biomeswevegone:aspen_boreal
// biomeswevegone:black_forest
// biomeswevegone:canadian_shield
// biomeswevegone:cika_woods
// biomeswevegone:coniferous_forest
// biomeswevegone:dacite_ridges
// biomeswevegone:ebony_woods
// biomeswevegone:enchanted_tangle
// biomeswevegone:eroded_borealis
// biomeswevegone:forgotten_forest
// biomeswevegone:frosted_coniferous_forest
// biomeswevegone:howling_peaks
// biomeswevegone:orchard
// biomeswevegone:overgrowth_woodlands
// biomeswevegone:redwood_thicket
// biomeswevegone:sakura_grove
// biomeswevegone:skyrise_vale
// biomeswevegone:weeping_witch_forest
// biomeswevegone:zelkova_forest
// terralith:birch_taiga
// terralith:blooming_valley
// terralith:cloud_forest
// terralith:lavender_forest
// terralith:lavender_valley
// terralith:moonlight_grove
// terralith:moonlight_valley
// terralith:sakura_grove
// terralith:sakura_valley
// terralith:snowy_cherry_grove
// terralith:temperate_highlands
// terralith:yosemite_lowlands
// autumnity:maple_forest

// ===============================> Badlands biomes
// minecraft:badlands
// minecraft:eroded_badlands
// minecraft:wooded_badlands
// biomeswevegone:red_rock_peaks
// biomeswevegone:red_rock_valley
// biomeswevegone:rugged_badlands
// biomeswevegone:sierra_badlands
// terralith:bryce_canyon
// terralith:painted_mountains
// terralith:red_oasis
// terralith:savanna_badlands
// terralith:white_mesa
// terralith:snowy_badlands

// ===============================> Dead biomes
// biomeswevegone:dead_sea
// terralith:ashen_savanna
// terralith:gravel_desert

// ===============================> Dry biomes
// minecraft:desert
// minecraft:badlands
// minecraft:wooded_badlands
// minecraft:eroded_badlands
// minecraft:savanna
// minecraft:savanna_plateau
// minecraft:windswept_savanna
// biomeswevegone:atacama_outback
// biomeswevegone:mojave_desert
// biomeswevegone:windswept_desert
// biomeswevegone:red_rock_peaks
// biomeswevegone:red_rock_valley
// biomeswevegone:rugged_badlands
// terralith:bryce_canyon
// terralith:painted_mountains
// terralith:red_oasis
// terralith:savanna_badlands
// terralith:white_mesa
// terralith:snowy_badlands
// terralith:desert_oasis
// terralith:desert_spires
// terralith:lush_desert
// terralith:sandstone_valley
// terralith:ancient_sands
// terralith:desert_canyon
// terralith:arid_highlands
// terralith:ashen_savanna
// terralith:fractured_savanna
// terralith:savanna_slopes
// minecraft:nether_wastes
// minecraft:crimson_forest
// minecraft:warped_forest
// minecraft:soul_sand_valley
// minecraft:basalt_deltas
// incendium:infernal_dunes
// incendium:quartz_flats
// incendium:volcanic_deltas
// incendium:withered_forest
// minecraft:the_end
// minecraft:small_end_islands
// minecraft:end_midlands
// minecraft:end_highlands
// minecraft:end_barrens

// ===============================> Savanna biomes
// minecraft:savanna
// minecraft:savanna_plateau
// minecraft:windswept_savanna
// biomeswevegone:araucaria_savanna
// biomeswevegone:baobab_savanna
// biomeswevegone:ironwood_gour
// terralith:arid_highlands
// terralith:ashen_savanna
// terralith:fractured_savanna
// terralith:savanna_badlands
// terralith:savanna_slopes

// ===============================> Wet biomes
// minecraft:swamp
// minecraft:mangrove_swamp
// minecraft:jungle
// minecraft:bamboo_jungle
// minecraft:sparse_jungle
// minecraft:beach
// minecraft:lush_caves
// minecraft:dripstone_caves
// biomeswevegone:basalt_barrera
// biomeswevegone:dacite_shore
// biomeswevegone:rainbow_beach
// biomeswevegone:bayou
// biomeswevegone:cypress_swamplands
// biomeswevegone:cypress_wetlands
// biomeswevegone:pale_bog
// biomeswevegone:white_mangrove_marshes
// terralith:amethyst_canyon
// terralith:amethyst_rainforest
// terralith:jungle_mountains
// terralith:rocky_jungle
// terralith:tropical_jungle
// terralith:ice_marsh
// terralith:orchid_swamp
// terralith:desert_oasis
// terralith:red_oasis
// terralith:cave/underground_jungle
// integrateddynamics:meneglin

