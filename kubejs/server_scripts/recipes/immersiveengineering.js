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
  // Mixer
  //
  ie.mixer({ id: 'bth:soul_mixture', amount: 1000 }, [{ item: 'minecraft:soul_sand' }], { tag: 'minecraft:water', amount: 1000 }, 200).id(`${ID_PREFIX}mixer/soul_mixture`);
  ie.mixer({ id: 'bth:sugar_water', amount: 1000 }, [{ item: 'minecraft:sugar' }], { tag: 'minecraft:water', amount: 1000 }, 200).id(`${ID_PREFIX}mixer/sugar_water`);

  //
  // Refinery
  //
  ie.refinery({ id: 'bth:ender_fuel', amount: 1000 }, 4000, { tag: 'bth:liquid_chorus', amount: 500 }, { tag: 'bth:soul_mixture', amount: 500 }).id(`${ID_PREFIX}refinery/ender_fuel`);

  //
  // Mod specific recipes
  //
  if (Platform.isLoaded('blazingbamboo')) {
    ie.cloche(['blazingbamboo:blazing_bamboo_item'], 'blazingbamboo:blazing_bamboo_item', 'minecraft:netherrack', 560, { type: 'immersiveengineering:generic', block: 'blazingbamboo:blazing_bamboo' }, 'bth:soul_mixture').id(`${ID_PREFIX}garden_cloche/blazing_bamboo`);
  }

});
