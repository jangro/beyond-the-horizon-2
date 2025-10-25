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
  const c = event.recipes.create;

  // Function signatures:
  // c.crushing(results,ingredients,processing_time)

  // BTH super food ingredient
  c.mixing(Fluid.of('bth:hyper_nutritious_goo', 250), [
    Fluid.of('bth:ender_fuel', 125),
    'farmersdelight:stuffed_pumpkin',
    'mynethersdelight:magma_cake_slice',
    'the_bumblezone:pollen_puff',
    'ends_delight:dragon_leg_with_sauce',
    'aethersdelight:enchanted_berry_muffin']).heated().id(`${ID_PREFIX}mixing/hyper_nutritional_goo`);

});
