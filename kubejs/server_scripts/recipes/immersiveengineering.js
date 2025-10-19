// priority: 10

/**
 * @file Recipe additions for Immersive Engineering's crafting methods.
 *
 */

/**
 * Immersive Engineering Recipe Event Handler
 */
ServerEvents.recipes(event => {
  if (!Platform.isLoaded('immersiveengineering')) {
    return;
  }
  const ID_PREFIX = 'bth:immersiveengineering/';
  const ie = event.recipes.immersiveengineering;

  //
  // Garden Cloche
  // cloche(output items [list], input item [ingredient], soil block [string], time [int], render [render], fluid [optional string])
  //

  //
  // Mod specific recipes
  //
  if (Platform.isLoaded('blazingbamboo')) {
    ie.cloche(['blazingbamboo:blazing_bamboo_item'], 'blazingbamboo:blazing_bamboo_item', 'minecraft:netherrack', 560, { type: 'immersiveengineering:generic', block: 'blazingbamboo:blazing_bamboo' }, 'bth:soul_mixture').id(`${ID_PREFIX}garden_cloche/blazing_bamboo`);
  }

});
