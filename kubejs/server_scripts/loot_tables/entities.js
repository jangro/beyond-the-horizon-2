// priority: 10

/**
 * @file Mob loot table injection / replacement for Beyond the Horizon.
 */


LootJS.modifiers((event) => {

  //
  // Add loot to entities
  //

  // Increased accessibility of End Remastered eyes:
  event.addEntityModifier('eidolon:wraith')
    .randomChance(0.3) // 30% chance
    .addLoot('endrem:undead_soul');

  event.addEntityModifier('irons_spellbooks:archevoker')
    .addLoot('endrem:magical_eye');

  event.addEntityModifier('minecraft:evoker')
    .removeLoot('endrem:magical_eye');

  event.addEntityModifier('irons_spellbooks:cryomancer')
    .addLoot('endrem:cold_eye');

  event.addEntityModifier('irons_spellbooks:apothecarist')
    .addLoot('endrem:witch_eye');

  event.addEntityModifier('irons_spellbooks:priest')
    .addLoot('endrem:evil_eye');

  event.addEntityModifier('irons_spellbooks:dead_king')
    .addLoot('endrem:undead_eye');

  // event.addEntityModifier('aquamirae:captain_cornelia')
  //      .addLoot('endrem:black_eye')
  //      .addLoot(LootEntry.of(AQUAMIRAE_SHELTER_MAP).when((c) => c.randomChance(0.5)));

  event.addEntityModifier('minecraft:elder_guardian')
    .removeLoot('endrem:guardian_eye')
    .addLoot('endrem:guardian_eye');

  event.addEntityModifier('minecraft:wither')
    .removeLoot('endrem:wither_eye')
    .addLoot('endrem:wither_eye');

  // Make mutant enderman drop more pearls
  // Will drop around 15-20 ender pearls, and a few eye of ender with this change.
  event.addEntityModifier('mutantmonsters:mutant_enderman').pool((pool) => {
    pool.rolls([1, 3]);
    pool.addEntry('minecraft:ender_pearl');
  });

  // Some extra loot for the mutant zombie.
  event.addEntityModifier('mutantmonsters:mutant_zombie').pool((pool) => {
    pool.rolls([10, 30]);
    pool.addEntry('minecraft:rotten_flesh');
  });
  event.addEntityModifier('mutantmonsters:mutant_zombie').pool((pool) => {
    pool.addEntry('eidolon_repraised:zombie_heart');
  });

  //
  // Replace loot from entities
  //

  event.addEntityModifier('eidolon_repraised:zombie_brute')
    .replaceLoot('eidolon_repraised:lead_ingot', 'immersiveengineering:ingot_lead', true);


  //
  // Remove loot from entities
  //

});
