// priority: 0

/**
 * @file JEI Blacklist for Beyond the Horizon
 *
 * For consistency, Item / Fluid IDs should be in the order of Minecraft entries first, then by mod in alphabetical order.
 *
 */

/**
 * JEI Item Hiding Event Handler
 */
RecipeViewerEvents.removeEntries('item', event => {
  // VZ: Why is event.hide(...) marked as deprecated by KubeJS?
  event.remove([
    'ae2:facade',
    'ae2:silicon',                                      // replaced by oritech silicon
    'aether:aether_portal_frame',
    'autumnity:pancake',                                // replaced by Supplementaries pancake
    // 'alexscaves:sulfur_dust',
    // 'bbb:rope',
    // 'bountiful:decree',
    // 'bth:pancake',
    // 'buzzier_bees:honey_apple',
    // /clayworks:.*terracotta_brick.*/,
    // 'cofh_core:experience',
    // 'cofh_core:honey',
    // 'cofh_core:potion',
    'create:copper_sheet',                              // replaced by IE plate
    'create:iron_sheet',                                // replaced by IE plate
    'create:golden_sheet',                              // replaced by IE plate
    'create:copper_nugget',                             // replaced by IE nuggets
    'createaddition:copper_wire',                       // replaced by IE wire
    'createaddition:chocolate_cake',                    // replaced by Neapolitan chocolate cake
    'createaddition:electrum_wire',                     // replaced by IE wire
    'createaddition:electrum_sheet',                    // replaced by IE plate
    'createaddition:iron_rod',                          // replaced by IE rod
    'createaddition:electrum_ingot',                    // replaced by IE ingots
    'createaddition:electrum_nugget',                   // replaced by IE nuggets
    // 'createdeco:brass_coin',
    // 'createdeco:brass_coinstack',
    // 'createdeco:industrial_iron_coin',
    // 'createdeco:industrial_iron_coinstack',
    // 'createdeco:zinc_coin',
    // 'createdeco:zinc_coinstack',
    // 'createdeco:zinc_sheet',
    'eidolon_repraised:lead_ingot',                     // replaced by IE ingots
    'eidolon_repraised:silver_ingot',                   // replaced by IE ingots
    'eidolon_repraised:lead_nugget',                    // replaced by IE nuggets
    'eidolon_repraised:silver_nugget',                  // replaced by IE nuggets
    'enderio:flour',                                    // replaced by Create wheat flour
    'enderio:cake_base',                                // replaced by Create Addition's cake base
    // 'enderio:powdered_copper',
    // 'enderio:powdered_gold',
    // 'enderio:powdered_iron',
    'enderio:powdered_coal',                            // replaced by Oritech coal dust
    'enderio:powdered_quartz',                          // replaced by Oritech quartz dust
    'enderio:powdered_obsidian',                        // replaced by Create obsidian dust
    'enderio:silicon',                                  // replaced by Oritech silicon
    // /everycomp:bbb.*trim$/,
    'farmersdelight:wheat_dough',                       // replaced by Create dough
    'farmersdelight:rope',                              // replaced by Supplementaries rope
    /ftbquests:.*/,
    // 'galosphere:deepslate_silver_ore',
    // 'galosphere:raw_silver',
    // 'galosphere:raw_silver_block',
    // 'galosphere:silver_block',
    // 'galosphere:silver_ingot',
    // 'galosphere:silver_nugget',
    // 'galosphere:silver_ore',
    'immersive_aircraft:propeller',                     // replaced by Create propeller
    // 'immersiveengineering:deepslate_ore_lead',
    // 'immersiveengineering:deepslate_ore_silver',
    // 'immersiveengineering:dust_sulfur',
    // 'immersiveengineering:dust_uranium',
    // 'immersiveengineering:ingot_electrum',
    // 'immersiveengineering:ingot_lead',
    // 'immersiveengineering:ingot_silver',
    // 'immersiveengineering:ingot_uranium',
    // 'immersiveengineering:nugget_copper',
    // 'immersiveengineering:nugget_lead',
    // 'immersiveengineering:nugget_silver',
    // 'immersiveengineering:nugget_uranium',
    // 'immersiveengineering:ore_lead',
    // 'immersiveengineering:ore_silver',
    // 'immersiveengineering:plate_copper',
    // 'immersiveengineering:plate_electrum',
    // 'immersiveengineering:plate_gold',
    // 'immersiveengineering:plate_iron',
    // 'immersiveengineering:raw_block_lead',
    // 'immersiveengineering:raw_block_silver',
    // 'immersiveengineering:raw_block_uranium',
    // 'immersiveengineering:raw_lead',
    // 'immersiveengineering:raw_silver',
    // 'immersiveengineering:raw_uranium',
    // 'immersiveengineering:slab_storage_uranium',
    // 'immersiveengineering:storage_lead',
    // 'immersiveengineering:storage_silver',
    // 'immersiveengineering:storage_uranium',
    'incubation:fried_egg',                             // replaced by Farmers Delight fried egg
    'lightmanscurrency:coinmint',                       // creation of coins is disabled
    'lightmanscurrency:portable_atm',
    'lightmanscurrency:portable_terminal',
    // 'moreminecarts:chunk_loader',
    // 'moreminecarts:chunkrodite',
    // 'moreminecarts:chunkrodite_block',
    // 'moreminecarts:minecart_with_chunk_loader',
    'mynethersdelight:slices_of_bread',                 // replaced by refurbished_furniture (MrCrayfish) bread slices
    'neapolitan:milk_bottle',                           // replaced by Farmer's Delight milk bottle
    // 'nethersdelight:blackstone_furnace',
    'oritech:raw_uranium',                              // replaced by IE raw uranium
    'oritech:copper_clump',                             // replaced by Create crushed raw ores
    'oritech:gold_clump',                               // replaced by Create crushed raw ores
    'oritech:iron_clump',                               // replaced by Create crushed raw ores
    'oritech:nickel_clump',                             // replaced by Create crushed raw ores
    'oritech:platinum_clump',                           // replaced by Create crushed raw ores
    'oritech:copper_dust',                              // replaced by IE dusts
    'oritech:electrum_dust',                            // replaced by IE dusts
    'oritech:gold_dust',                                // replaced by IE dusts
    'oritech:iron_dust',                                // replaced by IE dusts
    'oritech:nickel_dust',                              // replaced by IE dusts
    'oritech:steel_dust',                               // replaced by IE dusts
    'oritech:uranium_dust',                             // replaced by IE dusts
    'oritech:steel_ingot',                              // replaced by IE ingots
    'oritech:nickel_ingot',                             // replaced by IE ingots
    'oritech:electrum_ingot',                           // replaced by IE ingots
    'oritech:copper_nugget',                            // replaced by IE nuggets
    'oritech:nickel_nugget',                            // replaced by IE nuggets
    // 'paraglider:spirit_orb',
    // 'paraglider:anti_vessel',
    // 'paraglider:essence',
    'pneumaticcraft:copper_nugget',                     // replaced by IE nuggets
    'pneumaticcraft:wheat_flour',                       // replaced by Create wheat flour
    // /paraglider:.*statue.*/,
    // /perfectplushies:.*/,
    /plushie_buddies:.*/,
    /plushies:.*/,
    // /quark:.*shingles.*/,
    // 'quark:polished_tuff',
    // 'quark:tuff_bricks',
    // 'quark:tuff_bricks_wall',
    // 'quark:tuff_bricks_slab',
    // 'quark:tuff_bricks_vertical_slab',
    // 'quark:tuff_bricks_stairs',
    // 'quark:tuff_wall',
    // 'quark:tuff_slab',
    // 'quark:tuff_stairs',
    // 'quark:polished_tuff_slab',
    // 'quark:polished_tuff_stairs',
    // 'rats:rat_upgrade_aristocrat',
    // 'rats:token_fragment',
    // 'rats:token_piece',
    // /upgrade_aquatic:.*bedroll/,
    // 'v_slab_compat:immersiveengineering/storage_uranium_vertical_slab',
    // /wardrobe:.*backpack/,
    // /waystones:.*/,
    // /woodworks:.*ladder/,
  ]);

  // ['copper', 'iron', 'gold', 'emerald', 'diamond', 'netherite'].forEach((material) => {
  //   event.hide(`lightmanscurrency:coin_${material}`);
  //   event.hide(`lightmanscurrency:coin_chocolate_${material}`);
  //   event.hide(`lightmanscurrency:coinpile_${material}`);
  //   event.hide(`lightmanscurrency:coinpile_chocolate_${material}`);
  //   event.hide(`lightmanscurrency:coinblock_${material}`);
  //   event.hide(`lightmanscurrency:coinblock_chocolate_${material}`);
  // });

  // Hide IE dusts that are replaced by Create crushed raw ores.
  // ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver', 'uranium'].forEach((material) =>
  //   event.remove(`immersiveengineering:dust_${material}`)
  // );

});
