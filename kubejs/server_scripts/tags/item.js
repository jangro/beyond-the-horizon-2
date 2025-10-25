// priority: 110

/**
 * @file Item Tag Additions for Beyond the Horizon.
 */

/**
 * Item Tag Event Handler
 */
ServerEvents.tags('item', event => {

  // Beyond the Horizon Tags
  event.add('bth:nuts', [
    'ecologics:walnut',
  ]);

  event.add('bth:battery', [
    'ae2:dense_energy_cell',
    'ae2:energy_cell',
    'createaddition:modular_accumulator',
    'enderio:advanced_capacitor_bank',
    'enderio:basic_capacitor_bank',
    'enderio:vibrant_capacitor_bank',
    'immersiveengineering:capacitor_hv',
    'immersiveengineering:capacitor_lv',
    'immersiveengineering:capacitor_mv',
    'integrateddynamics:energy_battery',
  ]);

  event.add('bth:candle_material', [
    'eidolon_repraised:tallow',
    'forbidden_arcanus:wax',
    'minecraft:honeycomb',
  ]);

  // event.add('bth:ingots/steel', [
  //   'immersiveengineering:ingot_steel',
  //   'enderio:dark_steel_ingot',
  // ]);

  event.add('c:nuggets/arcane_gold', [
    'eidolon_repraised:arcane_gold_nugget',
    'forbidden_arcanus:deorum_nugget',
  ]);

  event.add('bth:mechanical_soul', [
    'advancedperipherals:weak_automata_core',
    'ars_elemental:anima_essence',
    'botania:spark',
    'forbidden_arcanus:soul',
    'quark:soul_bead',
  ]);

  event.add('bth:processor', [
    'ae2:engineering_processor',
    'create_connected:control_chip',
    'immersiveengineering:circuit_board',
    'oritech:processing_unit',
    'pneumaticcraft:printed_circuit_board',
  ]);

  // Minecraft Tags
  event.add('minecraft:slabs', [
    'eidolon_repraised:illwood_planks_slab',
  ]);

  event.add('minecraft:wooden_slabs', [
    'eidolon_repraised:illwood_planks_slab',
  ]);

  event.add('minecraft:swords', [
    // 'bth:terminus',
  ]);

  event.add('minecraft:tools', [
    // 'bth:terminus',
    'bth:coconut_maul',
  ]);

  event.add('minecraft:weapons', [
    // 'bth:terminus',
    'bth:coconut_maul',
  ]);

  // Create Tags
  event.add('create:chain_rideable', [
    'bth:coconut_maul',
  ]);

  // Forbidden and Arcanus Tags
  event.add('forbidden_arcanus:modifier/eternal_incompatible', [
    'tiered:armorers_hammer',
    'tiered:toolsmiths_hammer',
    'tiered:weaponsmiths_hammer',
  ]);

  // Neoforge Tags
  event.add('c:doughs', [
    'farmersdelight:wheat_dough',
    'minecolonies:bread_dough',
    'pneumaticcraft:sourdough',
  ]);

  event.add('c:doughs/wheat', [
    'farmersdelight:wheat_dough',
    'minecolonies:bread_dough',
  ]);

  event.add('c:tools', [
    // 'bth:terminus',
    'bth:coconut_maul',
  ]);

  // Tag Create crushed raw ores as dusts so they can replace IE dusts in recipes.
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'platinum', 'silver', 'uranium', 'zinc'].forEach((material) => {
    event.add(`c:dusts`, `create:crushed_raw_${material}`);
    event.add(`c:dusts/${material}`, `create:crushed_raw_${material}`);
  });

  // Prefer Oritech silicon over other mod silicons (remove tag so recipes with tags for output don't pick them).
  event.remove('c:silicon', 'ae2:silicon');
  event.remove('c:silicon', 'enderio:silicon');

  // Prefer Oritech and Create dusts over EnderIO powdered materials (remove tag so recipes with tags for output don't pick them).
  event.remove('c:dusts/coal', 'enderio:powdered_coal');
  event.remove('c:dusts/quartz', 'enderio:powdered_quartz');
  event.remove('c:dusts/obsidian', 'enderio:powdered_obsidian');

  // Prefer IE nuggets (remove tags so recipes with tags for output don't pick them).
  event.remove('c:nuggets/copper', 'create:copper_nugget');
  event.remove('c:nuggets/copper', 'oritech:copper_nugget');
  event.remove('c:nuggets/copper', 'pneumaticcraft:copper_nugget');
  event.remove('c:nuggets/lead', 'eidolon_repraised:lead_nugget');
  event.remove('c:nuggets/nickel', 'oritech:nickel_nugget');
  event.remove('c:nuggets/silver', 'eidolon_repraised:silver_nugget');
  event.remove('c:nuggets/electrum', 'createaddition:electrum_nugget');

  event.add('c:flours', [
    'create:cinder_flour',
    'enderio:flour',
    'pneumaticcraft:wheat_flour',
  ]);

  event.add('c:flours/wheat', [
    'enderio:flour',
    'pneumaticcraft:wheat_flour',
  ]);

  event.add('c:ingots', [
    'botania:gaia_ingot',
    'createdeco:industrial_iron_ingot',
    'graveyard:dark_iron_ingot',
    'irons_spellbooks:arcane_ingot',
  ]);

  event.add('c:ingots/dark_iron', [
    'graveyard:dark_iron_ingot',
  ]);

  event.add('c:ingots/gaia_spirit', [
    'botania:gaia_ingot',
  ]);

  event.add('c:plates', [
    'createdeco:andesite_sheet',
    'createdeco:industrial_iron_sheet',
    'createdeco:netherite_sheet',
    'immersiveengineering:plate_duroplast',
  ]);

  event.add('c:plates/andesite', [
    'createdeco:andesite_sheet',
  ]);

  event.add('c:plates/industrial_iron', [
    'createdeco:industrial_iron_sheet',
  ]);

  event.add('c:plates/netherite', [
    'createdeco:netherite_sheet',
  ]);

  event.add('c:storage_blocks', [
    'graveyard:dark_iron_block',
  ]);

  event.add('c:storage_blocks/dark_iron', [
    'graveyard:dark_iron_block',
  ]);

  // Ars Elemental Tags
  event.add('ars_elemental:caster_bag_item', [
    'aether:cloud_staff',

    '#botania:rods',

    'eidolon_repraised:bonechill_wand',
    'eidolon_repraised:soulfire_wand',
    'eidolon_repraised:warlock_hat',
    'eidolon_repraised:warlock_cloak',
    'eidolon_repraised:warlock_boots',

    'irons_spellbooks:artificer_cane',
    'irons_spellbooks:blood_staff',
    'irons_spellbooks:graybeard_staff',
    'irons_spellbooks:hither_thither_wand',
    'irons_spellbooks:ice_staff',
    'irons_spellbooks:scroll',
    /irons_spellbooks:.*_spell_book$/,
    /irons_spellbooks:.*_helmet$/,
    /irons_spellbooks:.*_chestplate$/,
    /irons_spellbooks:.*_leggings$/,
    /irons_spellbooks:.*_boots$/,
  ]);

  // Ars Nouveau Tags
  event.add('ars_nouveau:golem/shard', [
    'eidolon_repraised:sulfur',
    'quark:red_corundum_cluster',
    'quark:orange_corundum_cluster',
    'quark:yellow_corundum_cluster',
    'quark:green_corundum_cluster',
    'quark:blue_corundum_cluster',
    'quark:indigo_corundum_cluster',
    'quark:violet_corundum_cluster',
    'quark:white_corundum_cluster',
    'quark:black_corundum_cluster',
  ]);

  // Fix Aether stripped logs for Create casing
  event.add('c:stripped_logs', [
    'aether:stripped_skyroot_log',
    'deep_aether:stripped_conberry_log',
    'deep_aether:stripped_cruderoot_log',
    'deep_aether:stripped_roseroot_log',
    'deep_aether:stripped_sunroot_log',
    'deep_aether:stripped_yagroot_log',
  ]);
  event.add('c:stripped_wood', [
    'aether:stripped_skyroot_wood',
    'deep_aether:stripped_conberry_wood',
    'deep_aether:stripped_cruderoot_wood',
    'deep_aether:stripped_roseroot_wood',
    'deep_aether:stripped_sunroot_wood',
    'deep_aether:stripped_yagroot_wood',
  ]);

  // Clear block and item tags from plushies ('wool' tag for example)
  event.removeAllTagsFrom(/^perfectplushies:*/);
  event.removeAllTagsFrom(/^plushies:*/);
  event.removeAllTagsFrom(/^plushie_buddies:*/);


  //
  // Add missing tags for Reforged (Tiered)
  //

  // Fix tags for all simply swords items
  event.add('c:tools/melee_weapon', event.get('simplyswords:swords').getObjectIds());
  event.add('minecraft:swords', event.get('simplyswords:swords').getObjectIds());

  //
  // Tools and weapons
  //

  // Axes
  const axes = [
    'eidolon_repraised:silver_axe',
    'forbidden_arcanus:draco_arcanus_axe',
    'forbidden_arcanus:reinforced_deorum_axe',
    'immersiveengineering:axe_steel',
  ];
  event.add('c:tools/melee_weapon', axes);
  event.add('minecraft:axes', axes);

  // Bows
  const bows = [
    'deep_aether:storm_bow',
  ];
  event.add('c:tools/bows', bows);

  // Hoes
  const hoes = [
    'eidolon_repraised:silver_hoe',
    'forbidden_arcanus:draco_arcanus_hoe',
    'forbidden_arcanus:reinforced_deorum_hoe',
    'immersiveengineering:hoe_steel',
  ];
  event.add('minecraft:hoes', hoes);

  // Knifes
  const knives = [
  ];
  event.add('farmersdelight:tools/knives', knives);
  event.add('c:tools/knives', knives);
  event.add('minecraft:swords', knives);

  // Pickaxes
  const pickaxes = [
    'eidolon_repraised:reversal_pick',
    'eidolon_repraised:silver_pickaxe',
    'forbidden_arcanus:diamond_blacksmith_gavel',
    'forbidden_arcanus:draco_arcanus_pickaxe',
    'forbidden_arcanus:golden_blacksmith_gavel',
    'forbidden_arcanus:iron_blacksmith_gavel',
    'forbidden_arcanus:netherite_blacksmith_gavel',
    'forbidden_arcanus:reinforced_deorum_blacksmith_gavel',
    'forbidden_arcanus:reinforced_deorum_pickaxe',
    'forbidden_arcanus:slimec_pickaxe',
    'forbidden_arcanus:stone_blacksmith_gavel',
    'forbidden_arcanus:wooden_blacksmith_gavel',
    'immersiveengineering:pickaxe_steel',
  ];
  event.add('minecraft:pickaxes', pickaxes);


  // Shields
  const shields = [
  ];
  event.add('c:tools/shields', shields);

  // Shovels
  const shovels = [
    'eidolon_repraised:silver_shovel',
    'forbidden_arcanus:draco_arcanus_shovel',
    'forbidden_arcanus:reinforced_deorum_shovel',
    'immersiveengineering:shovel_steel',
  ];
  event.add('c:tools/shovels', shovels);
  event.add('minecraft:shovels', shovels);

  // Spears
  const spears = [
    'simplyswords:diamond_glaive',
    'simplyswords:diamond_spear',
    'simplyswords:gold_glaive',
    'simplyswords:gold_spear',
    'simplyswords:iron_glaive',
    'simplyswords:iron_spear',
    'simplyswords:magispear',
    'simplyswords:netherite_glaive',
    'simplyswords:netherite_spear',
    'simplyswords:runic_glaive',
    'simplyswords:runic_spear',
  ];
  event.add('c:tools/melee_weapon', spears);

  // Swords
  const swords = [
    'deep_aether:blade_of_luck',
    'deep_aether:storm_sword',
    'eidolon_repraised:athame',
    'eidolon_repraised:cleaving_axe',
    'eidolon_repraised:deathbringer_scythe',
    'eidolon_repraised:reaper_scythe',
    'eidolon_repraised:sapping_sword',
    'eidolon_repraised:silver_sword',
    'enderio:dark_steel_sword',
    'forbidden_arcanus:draco_arcanus_sword',
    'forbidden_arcanus:mystical_dagger',
    'forbidden_arcanus:reinforced_deorum_sword',
    'forbidden_arcanus:shiny_zombie_arm',
    'forbidden_arcanus:zombie_arm',
    'graveyard:bone_dagger',
    'immersiveengineering:sword_steel',
    'minecolonies:chiefsword',
    'minecolonies:iron_scimitar',
    'minecolonies:spear',
    'mutantmonsters:endersoul_hand',
    'mutantmonsters:hulk_hammer',
    // Mod removed due to issues. Try again later.
    // 'nethersdelight:diamond_machete',
    // 'nethersdelight:golden_machete',
    // 'nethersdelight:iron_machete',
    // 'nethersdelight:netherite_machete',
  ];
  event.add('c:tools/melee_weapon', swords);
  event.add('minecraft:swords', swords);

  //
  // Armors
  //

  // Helmets
  const helmets = [
    'ars_elemental:air_hat',
    'ars_elemental:aqua_hat',
    'ars_elemental:earth_hat',
    'ars_elemental:fire_hat',
    'ars_technica:technomancer_helmet',
    'create:cardboard_helmet',
    'deep_aether:stormforged_helmet',
    'eidolon_repraised:bonelord_helm',
    'eidolon_repraised:silver_helmet',
    'eidolon_repraised:warlock_hat',
    'forbidden_arcanus:draco_arcanus_helmet',
    'forbidden_arcanus:mortem_helmet',
    'forbidden_arcanus:tyr_helmet',
    'luckyswardrobe:bee_hat',
    'luckyswardrobe:blacksmith_mask',
    'luckyswardrobe:chef_hat',
    'luckyswardrobe:desert_hat',
    'luckyswardrobe:entertainers_hat',
    'luckyswardrobe:explorers_hat',
    'luckyswardrobe:farmer_hat',
    'luckyswardrobe:fox_hat',
    'luckyswardrobe:hat',
    'luckyswardrobe:panda_hat',
    'luckyswardrobe:savanna_floral_crown',
    'luckyswardrobe:snow_fox_hat',
    'luckyswardrobe:snowy_hat',
    'luckyswardrobe:snowy_hood',
    'luckyswardrobe:swampy_hat',
    'luckyswardrobe:taiga_hat',
    'luckyswardrobe:taiga_hood',
    'luckyswardrobe:top_hat',
    'luckyswardrobe:witch_hat',
    'luckyswardrobe:wolf_hat',
    'minecolonies:build_goggles',
    'minecolonies:pirate_cap',
    'minecolonies:pirate_hat',
    'minecolonies:plate_armor_helmet',
    'minecolonies:santa_hat',
  ];
  event.add('minecraft:head_armor', helmets);

  // Chestplates
  const chestplates = [
    'ars_elemental:air_robes',
    'ars_elemental:aqua_robes',
    'ars_elemental:earth_robes',
    'ars_elemental:fire_robes',
    'ars_technica:technomancer_chestplate',
    'create:cardboard_chestplate',
    'deep_aether:stormforged_chestplate',
    'eidolon_repraised:bonelord_chestplate',
    'eidolon_repraised:silver_chestplate',
    'eidolon_repraised:warlock_cloak',
    'forbidden_arcanus:draco_arcanus_chestplate',
    'forbidden_arcanus:mortem_chestplate',
    'forbidden_arcanus:tyr_chestplate',
    'luckyswardrobe:broken_barrel',
    'luckyswardrobe:desert_robe',
    'luckyswardrobe:entertainers_shirt',
    'luckyswardrobe:jungle_robe',
    'luckyswardrobe:savanna_robe',
    'luckyswardrobe:snowy_coat',
    'luckyswardrobe:swampy_robe',
    'luckyswardrobe:taiga_coat',
    'minecolonies:pirate_chest',
    'minecolonies:pirate_top',
    'minecolonies:plate_armor_chest',
  ];
  event.add('minecraft:chest_armor', chestplates);

  // Leggings
  const leggings = [
    'ars_elemental:air_leggings',
    'ars_elemental:aqua_leggings',
    'ars_elemental:earth_leggings',
    'ars_elemental:fire_leggings',
    'ars_technica:technomancer_leggings',
    'deep_aether:stormforged_leggings',
    'eidolon_repraised:bonelord_greaves',
    'eidolon_repraised:silver_leggings',
    'forbidden_arcanus:draco_arcanus_leggings',
    'forbidden_arcanus:mortem_leggings',
    'forbidden_arcanus:tyr_leggings',
    'luckyswardrobe:desert_pants',
    'luckyswardrobe:entertainers_pants',
    'luckyswardrobe:jungle_pants',
    'luckyswardrobe:savanna_pants',
    'luckyswardrobe:snowy_pants',
    'luckyswardrobe:swampy_pants',
    'luckyswardrobe:taiga_pants',
    'minecolonies:pirate_leggings',
    'minecolonies:pirate_legs',
    'minecolonies:plate_armor_legs',
  ];
  event.add('minecraft:leg_armor', leggings);

  // Boots
  const boots = [
    'ars_elemental:air_boots',
    'ars_elemental:aqua_boots',
    'ars_elemental:earth_boots',
    'ars_elemental:fire_boots',
    'ars_technica:technomancer_boots',
    'deep_aether:stormforged_boots',
    'eidolon_repraised:silver_boots',
    'eidolon_repraised:warlock_boots',
    'forbidden_arcanus:draco_arcanus_boots',
    'forbidden_arcanus:mortem_boots',
    'forbidden_arcanus:tyr_boots',
    'luckyswardrobe:desert_sandals',
    'luckyswardrobe:entertainers_shoes',
    'luckyswardrobe:jungle_sandals',
    'luckyswardrobe:savanna_sandals',
    'luckyswardrobe:snowy_boots',
    'luckyswardrobe:swampy_shoes',
    'luckyswardrobe:taiga_boots',
    'minecolonies:pirate_boots',
    'minecolonies:pirate_shoes',
    'minecolonies:plate_armor_boots',
  ];
  event.add('minecraft:foot_armor', boots);

});
