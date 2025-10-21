// priority: 10

/**
 * @file Recipe additions for Oritech's crafting methods.
 *
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('oritech')) {
    return;
  }
  const ID_PREFIX = 'bth:oritech/';
  const ot = event.recipes.oritech;


});
