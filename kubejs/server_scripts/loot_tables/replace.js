// priority: 10

/**
 * @file Replace all loot of a specific type with another.
 */


// Replace loot item globally
LootJS.modifiers((event) => {
  event
    .addTableModifier(/.*/)
    .replaceLoot('farmersdelight:rope', 'supplementaries:rope', true)
});
