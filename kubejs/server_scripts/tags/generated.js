// priority: 110

/**
 * @file Structure Tag Modifications for Beyond the Horizon.
 *
 * Documentation: https://kubejs.com/wiki/tutorials/tags
 */

/**
 * Structure Tag Event Handler
 */
ServerEvents.tags('worldgen/structure', event => {

  event.add('bth:aether_common', [
    "aether:bronze_dungeon",
    "aether:silver_dungeon",
    "aether:gold_dungeon",
    "bth_structures:aether_portal_floating_aether",
  ]);

  event.add('bth:aether_rare', [
    "aether_villages:olympic_citadel",
    "deep_aether:brass_dungeon",
  ]);

  event.add('bth:common', [
    "ae2:meteorite",
    "alshanex_familiars:hunter_campsite",
    "ars_nouveau:hunter_wilden_den",
    "ars_nouveau:guardian_wilden_den",
    "ars_nouveau:stalker_wilden_den",
    "autumnity:maple_hut",
    "biomeswevegone:aspen_manor_1",
    "biomeswevegone:aspen_manor_2",
    "biomeswevegone:bog_trial",
    "biomeswevegone:prairie_house",
    "bth_structures:battle_grounds",
    "bth_structures:dw20",
    "bth_structures:wagon",
    "eidolon_repraised:stray_tower",
    "eidolon_repraised:lab",
    "graveyard:dead_tree",
    "graveyard:haunted_house",
    "graveyard:large_graveyard",
    "graveyard:medium_graveyard",
    "graveyard:memorial_tree",
    "graveyard:mushroom_grave",
    "graveyard:ruins",
    "hauntedharvest:abandoned_farm",
    "hexerei:baba_yaga_hut",
    "hexerei:owl_post_office",
    "hexerei:witch_hut",
    "irons_spellbooks:evoker_fort",
    "irons_spellbooks:ice_spider_den",
    "irons_spellbooks:impaled_icebreaker",
    "irons_spellbooks:mangrove_hut",
    "irons_spellbooks:mountain_tower",
    "irons_spellbooks:pyromancer_tower",
    "minecolonies:amazon_camp",
    "minecolonies:barbarian_camp",
    "minecolonies:desert_camp",
    "minecraft:jungle_pyramid",
    "minecraft:swamp_hut",
    "minecraft:trail_ruins",
    "spanish_fort:spanishfort",
    "terralith:mage_tower",
    "terralith:mage_complex",
    "terralith:witch_hut",
    "terralith:desert_outpost",
    "terralith:valley_lodge",
    "terralith:glacial_hut",
    "towns_and_towers:mimic_desert",
    "valhelsia_structures:big_tree",
    "valhelsia_structures:castle_ruin",
    "valhelsia_structures:castle",
    "valhelsia_structures:desert_house",
    "valhelsia_structures:forge",
    "valhelsia_structures:player_house",
    "valhelsia_structures:tower_ruin",
    "valhelsia_structures:witch_hut",
  ]);

  event.add('bth:end_common', [
    "alshanex_familiars:end_laboratory",
    "enderscape:center_gateway",
  ]);

  event.add('bth:end_rare', [
    "enderscape:large_center_gateway",
    "enderscape:mirestone_ruins",
    "minecraft:end_city",
    "phantasm:obsidian_tower",
  ]);

  event.add('bth:nether_common', [
    "alshanex_familiars:graveyard",
    "incendium:quartz_kitchen",
    "incendium:abandoned_tower",
    "incendium:pipeline",
    "incendium:piglin_village",
    "incendium:infernal_altar",
    "incendium:ruined_lab",
    "irons_spellbooks:ancient_battleground",
    "betterfortresses:fortress",
    "minecraft:bastion_remnant",
  ]);

  event.add('bth:nether_rare', [
    "incendium:sanctum",
    "incendium:forbidden_castle",
    "incendium:nether_reactor",
    "irons_spellbooks:citadel",
  ]);

  event.add('bth:ocean', [
    "minecolonies:ship",
  ]);

  event.add('bth:outposts', [
    "minecraft:pillager_outpost",
    "ctov:pillager_outpost_beach",
    "ctov:pillager_outpost_dark_forest",
    "ctov:pillager_outpost_desert",
    "ctov:pillager_outpost_jungle",
    "ctov:pillager_outpost_badlands",
    "ctov:pillager_outpost_mountain",
    "ctov:pillager_outpost_plains",
    "ctov:pillager_outpost_savanna",
    "ctov:pillager_outpost_snowy",
    "ctov:pillager_outpost_swamp",
    "ctov:pillager_outpost_taiga",
    "towns_and_towers:pillager_outpost_badlands",
    "towns_and_towers:pillager_outpost_beach",
    "towns_and_towers:pillager_outpost_birch_forest",
    "towns_and_towers:pillager_outpost_desert",
    "towns_and_towers:pillager_outpost_flower_forest",
    "towns_and_towers:pillager_outpost_forest",
    "towns_and_towers:pillager_outpost_grove",
    "towns_and_towers:pillager_outpost_jungle",
    "towns_and_towers:pillager_outpost_meadow",
    "towns_and_towers:pillager_outpost_mushroom_fields",
    "towns_and_towers:pillager_outpost_ocean",
    "towns_and_towers:pillager_outpost_old_growth_taiga",
    "towns_and_towers:pillager_outpost_savanna",
    "towns_and_towers:pillager_outpost_savanna_plateau",
    "towns_and_towers:pillager_outpost_snowy_beach",
    "towns_and_towers:pillager_outpost_snowy_plains",
    "towns_and_towers:pillager_outpost_snowy_slopes",
    "towns_and_towers:pillager_outpost_sparse_jungle",
    "towns_and_towers:pillager_outpost_sunflower_plains",
    "towns_and_towers:pillager_outpost_swamp",
    "towns_and_towers:pillager_outpost_taiga",
    "towns_and_towers:pillager_outpost_snowy_taiga",
    "towns_and_towers:pillager_outpost_wooded_badlands",
    "towns_and_towers:exclusives/pillager_outpost_mediterranean",
    "towns_and_towers:exclusives/pillager_outpost_tudor",
    "towns_and_towers:exclusives/pillager_outpost_classic",
    "towns_and_towers:exclusives/pillager_outpost_oriental",
    "towns_and_towers:exclusives/pillager_outpost_swedish",
    "towns_and_towers:exclusives/pillager_outpost_iberian",
    "towns_and_towers:exclusives/pillager_outpost_rustic",
    "towns_and_towers:exclusives/pillager_outpost_nilotic",
  ]);

  event.add('bth:rare', [
    "illager_fortress:illager_fortress",
    "illager_manor:illager_manor",
    "minecraft:desert_pyramid",
    "minecraft:mansion",
    "nebulus_giant_jungle_tree:giantjungletree",
    "terralith:spire",
  ]);

  event.add('bth:small', [
    "bth_structures:aether_portal_floating",
    "bth_structures:aether_portal_framed",
    "graveyard:small_desert_grave",
    "graveyard:small_desert_graveyard",
    "graveyard:small_grave",
    "graveyard:small_graveyard",
    "graveyard:small_mountain_grave",
    "graveyard:small_savanna_grave",
    "minecraft:igloo",
    "minecraft:ruined_portal",
    "minecraft:ruined_portal_desert",
    "minecraft:ruined_portal_jungle",
    "minecraft:ruined_portal_swamp",
    "minecraft:ruined_portal_mountain",
    "minecraft:ruined_portal_ocean",
    "minecraft:ruined_portal_nether",
    "minecraft:shipwreck",
    "minecraft:shipwreck_beached",
    "terralith:igloo",
  ]);

  event.add('bth:submerged_common', [
    "towns_and_towers:wreckage_ocean",
    "underwater_village:cold_big_gate",
    "underwater_village:cold_broken_house",
    "underwater_village:cold_fountain",
    "underwater_village:cold_gate",
    "underwater_village:dungeon",
    "underwater_village:library",
    "underwater_village:ruins",
    "underwater_village:shrine",
    "underwater_village:small_gate",
    "underwater_village:temple_broken",
    "underwater_village:temple_ruins",
    "underwater_village:temple",
    "underwater_village:tower",
    "underwater_village:warm_big_gate",
    "underwater_village:warm_broken_house",
    "underwater_village:warm_fountain",
    "underwater_village:warm_gate",
  ]);

  event.add('bth:submerged_rare', [
    "betteroceanmonuments:ocean_monument",
  ]);

  event.add('bth:towers', [
    "bth_structures:tower_forest",
    "bth_structures:tower_frozen",
    "bth_structures:tower_scarlet",
  ]);

  event.add('bth:underground_common', [
    "terralith:underground/frosted_dungeon",
    "terralith:underground/oak_cabin",
    "terralith:underground/giant_bee_hive",
    "terralith:underground/mining_outpost",
    "terralith:underground/old_refinery",
    "terralith:underground/sunken_tower",
    "valhelsia_structures:deep_spawner_room",
    "valhelsia_structures:spawner_dungeon",
    "valhelsia_structures:spawner_room",
  ]);

  event.add('bth:underground_rare', [
    "eidolon_repraised:catacomb",
    "graveyard:crypt",
    "irons_spellbooks:catacombs",
  ]);

  event.add('bth:villages', [
    "biomeswevegone:village/forgotten",
    "biomeswevegone:village/skyris",
    "biomeswevegone:village/salem",
    "biomeswevegone:village/red_rock",
    "biomeswevegone:village/pumpkin_patch",
    "biomeswevegone:village/swamp",
    "ctov:medium/village_beach",
    "ctov:medium/village_christmas",
    "ctov:medium/village_desert",
    "ctov:medium/village_desert_oasis",
    "ctov:medium/village_dark_forest",
    "ctov:medium/village_jungle",
    "ctov:medium/village_jungle_tree",
    "ctov:medium/village_mesa",
    "ctov:medium/village_mesa_fortified",
    "ctov:medium/village_mountain",
    "ctov:medium/village_mountain_alpine",
    "ctov:medium/village_mushroom",
    "ctov:medium/village_plains",
    "ctov:medium/village_plains_fortified",
    "ctov:medium/village_savanna",
    "ctov:medium/village_savanna_na",
    "ctov:medium/village_snowy_igloo",
    "ctov:medium/village_swamp",
    "ctov:medium/village_swamp_fortified",
    "ctov:medium/village_taiga",
    "ctov:medium/village_taiga_fortified",
    "ctov:small/village_beach",
    "ctov:small/village_christmas",
    "ctov:small/village_desert",
    "ctov:small/village_desert_oasis",
    "ctov:small/village_dark_forest",
    "ctov:small/village_jungle",
    "ctov:small/village_jungle_tree",
    "ctov:small/village_mesa",
    "ctov:small/village_mesa_fortified",
    "ctov:small/village_mountain",
    "ctov:small/village_mountain_alpine",
    "ctov:small/village_mushroom",
    "ctov:small/village_plains",
    "ctov:small/village_plains_fortified",
    "ctov:small/village_savanna",
    "ctov:small/village_savanna_na",
    "ctov:small/village_snowy_igloo",
    "ctov:small/village_swamp",
    "ctov:small/village_swamp_fortified",
    "ctov:small/village_taiga",
    "ctov:small/village_taiga_fortified",
    "hexerei:dark_coven",
    "hexerei:nature_coven",
    "ribbits:ribbit_village",
    "terralith:fortified_village",
    "terralith:fortified_desert_village",
    "villagesandpillages:village_witch",
    "towns_and_towers:village_badlands",
    "towns_and_towers:village_beach",
    "towns_and_towers:village_birch_forest",
    "towns_and_towers:village_flower_forest",
    "towns_and_towers:village_forest",
    "towns_and_towers:village_snowy_slopes",
    "towns_and_towers:village_jungle",
    "towns_and_towers:village_meadow",
    "towns_and_towers:village_mushroom_fields",
    "towns_and_towers:village_ocean",
    "towns_and_towers:village_old_growth_taiga",
    "towns_and_towers:village_grove",
    "towns_and_towers:village_savanna_plateau",
    "towns_and_towers:village_sunflower_plains",
    "towns_and_towers:village_snowy_taiga",
    "towns_and_towers:village_sparse_jungle",
    "towns_and_towers:village_swamp",
    "towns_and_towers:village_wooded_badlands",
    "towns_and_towers:exclusives/village_mediterranean",
    "towns_and_towers:exclusives/village_swedish",
    "towns_and_towers:exclusives/village_tudor",
    "towns_and_towers:exclusives/village_wandering_trader_camp",
    "towns_and_towers:exclusives/village_classic",
    "towns_and_towers:exclusives/village_rustic",
    "towns_and_towers:exclusives/village_iberian",
    "towns_and_towers:exclusives/village_nilotic",
    "towns_and_towers:exclusives/village_piglin",
  ]);


});
