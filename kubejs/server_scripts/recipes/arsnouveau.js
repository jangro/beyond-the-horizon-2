// priority: 10

/**
 * @file Recipe additions for Ars Nouveau's crafting methods.
 *
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('ars_nouveau')) {
    return;
  }
  const ID_PREFIX = 'bth:ars_nouveau/';
  const ars = event.recipes.ars_nouveau;


  //
  // Enchanting Apparatus
  // enchanting_apparatus(reagent [string], output [string], input items [list], source cost [int], keep nbt of reagent? [boolean])
  //
  ars.enchanting_apparatus('ars_nouveau:drygmy_shard', 'ars_nouveau:drygmy_charm', [
    'ars_nouveau:source_gem',
    'ars_nouveau:source_gem',
    'ars_nouveau:source_gem',
    'minecraft:diamond',
    'farmersdelight:vegetable_soup',
    'farmersdelight:cabbage_rolls',
    'farmersdelight:fish_stew',
    'ends_delight:chorus_fruit_pie_slice'
  ], 5000, false).id(`${ID_PREFIX}enchanting_apparatus/drygmy_charm`);

  event.recipes.ars_nouveau.enchanting_apparatus('ars_nouveau:whirlisprig_shards', 'ars_nouveau:whirlisprig_charm', [
    'ars_nouveau:source_gem',
    'ars_nouveau:magebloom_crop',
    'ars_nouveau:magebloom',
    'minecraft:diamond',
    'minecraft:oak_sapling',
    'forbidden_arcanus:aurum_sapling',
    'minecraft:nether_wart',
    'minecraft:chorus_flower'
  ], 5000, false).id(`${ID_PREFIX}enchanting_apparatus/whirlisprig_charm`);

  event.recipes.ars_nouveau.enchanting_apparatus('bth:hyper_nutritious_goo_bucket', 'bth:nanobot_soda_bucket', [
    'pneumaticcraft:drone',
    // 'botania:spawner_claw',
    // 'rats:vial_of_sentience',
    'enderio:zombie_electrode',
  ], 10000, false).id(`${ID_PREFIX}enchanting_apparatus/nanobot_soda_bucket`);

  //
  // Mod specific recipes
  //

});
