// priority: 10

/**
 * @file Recipe additions for Create's crafting methods.
 *
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('create')) {
    return;
  }
  const ID_PREFIX = 'bth:create/';
  const create = event.recipes.create;



});
