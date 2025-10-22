// priority: 10

/**
 * @file Recipe additions for Create's crafting methods.
 *
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('createaddition')) {
    return;
  }
  const ID_PREFIX = 'bth:createaddition/';
  const ca = event.recipes.createaddition;


  ca.rolling('minecraft:netherite_ingot', 'immersiveengineering:stick_netherite').id(`${ID_PREFIX}rolling/netherite_ingot_from_netherite_rod`);

});
