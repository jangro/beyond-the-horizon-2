// priority: 10

/**
 * @file Recipe additions for Ars Nouveau's crafting methods.
 *
 */

ServerEvents.recipes(event => {
  if (Platform.isLoaded('ars_nouveau')) {
    const ID_PREFIX = 'bth:ars_nouveau/';
    const ars = event.recipes.ars_nouveau;

    // Make drygmy charm recipe harder
    ars.enchanting_apparatus(
      'ars_nouveau:drygmy_shard', // reagent
      'ars_nouveau:drygmy_charm', // output
      [
        'ars_nouveau:source_gem',
        'ars_nouveau:source_gem',
        'ars_nouveau:source_gem',
        'minecraft:diamond',
        'farmersdelight:vegetable_soup',
        'farmersdelight:cabbage_rolls',
        'farmersdelight:fish_stew',
        'ends_delight:chorus_fruit_pie_slice'
      ], // input items
      5000, // source cost
      false // keep nbt of reagent, think like a smithing recipe
    ).id(`${ID_PREFIX}enchanting_apparatus/drygmy_charm`);

    // Make whirlisprig charm recipe harder
    event.recipes.ars_nouveau.enchanting_apparatus(
      'ars_nouveau:whirlisprig_shards', // reagent
      'ars_nouveau:whirlisprig_charm', // output
      [
        'ars_nouveau:source_gem',
        'ars_nouveau:magebloom_crop',
        'ars_nouveau:magebloom',
        'minecraft:diamond',
        'minecraft:oak_sapling',
        'forbidden_arcanus:aurum_sapling',
        'minecraft:nether_wart',
        'minecraft:chorus_flower'
      ], // input items
      5000, // source cost
      false // keep nbt of reagent, think like a smithing recipe
    ).id(`${ID_PREFIX}enchanting_apparatus/whirlisprig_charm`);

    event.recipes.ars_nouveau.enchanting_apparatus(
      'bth:hyper_nutritious_goo_bucket', // reagent
      'bth:nanobot_soda_bucket', // output
      [
        'pneumaticcraft:drone',
        // 'botania:spawner_claw',
        // 'rats:vial_of_sentience',
        'enderio:zombie_electrode',
      ], // input items
      10000, // source cost
      false // keep nbt of reagent, think like a smithing recipe
    ).id(`${ID_PREFIX}enchanting_apparatus/nanobot_soda_bucket`);

  }
});
