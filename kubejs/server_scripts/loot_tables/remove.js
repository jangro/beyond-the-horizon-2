// priority: 10

/**
 * @file Loot table removal for Beyond the Horizon.
 */

LootJS.modifiers((event) => {
  // Chalk mod adds a lot of unstackable loot. Remove all and add back sparsely.
  event.removeGlobalModifiers("@chalk");

  // Remove all things waystone from all loot
  event.removeGlobalModifiers("@waystones");

  // Remove all plushies from loot chests
  event.removeGlobalModifiers("@perfectplushieapi");
  event.removeGlobalModifiers("@plushie_buddies");
  event.removeGlobalModifiers("@plushies");

});
