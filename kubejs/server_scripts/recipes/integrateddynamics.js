// priority: 10

/**
 * @file Recipe additions for Integrated Dynamics' crafting methods.
 *
 */

/**
 * Integrated Dynamics Recipe Event Handler
 *
 * Note: When adding recipes, the convention is for the mechanical drying basin
 * to be 10x faster than the manual version (ie. duration set to one tenth the value).
 */
ServerEvents.recipes(event => {
  if (Platform.isLoaded('integrateddynamics')) {
    const ID_PREFIX = 'bth:integrateddynamics/';
    const id = event.recipes.integrateddynamics;

    // Function signatures
    // squeezer(input [ingredient], output items [list], output fluid [optional fluid stack])
    // mechanical_squeezer(input [ingredient], duration [int], output items [list], output fluid [optional fluid stack])

    // Squeezer
    id.squeezer('forbidden_arcanus:stella_arcanum', [{ item: 'forbidden_arcanus:stellarite_piece' }, { item: 'forbidden_arcanus:stellarite_piece', chance: 0.5 }]).id(`${ID_PREFIX}squeezer/stella_arcanum`);

    // Mechanical Squeezer
    id.mechanical_squeezer('forbidden_arcanus:stella_arcanum', 40, [{ item: 'forbidden_arcanus:stellarite_piece' }, { item: 'forbidden_arcanus:stellarite_piece', chance: 0.5 }]).id(`${ID_PREFIX}mechanical_squeezer/stella_arcanum`);


    // Starbunclemania
    if (Platform.isLoaded('starbunclemania')) {
      id.squeezer('ars_nouveau:sourceberry_bush', [], Fluid.of('starbunclemania:source_fluid', 100)).id(`${ID_PREFIX}squeezer/sourceberries`);
      id.mechanical_squeezer('ars_nouveau:sourceberry_bush', 20, [], Fluid.of('starbunclemania:source_fluid', 100)).id(`${ID_PREFIX}mechanical_squeezer/sourceberries`);
    }

    if (Platform.isLoaded('immersiveengineering')) {
      // SV: Looks like the squeezers can't take more than 1 of the input item...
      // id.squeezer(Ingredient.of('#c:dusts/coal_coke', 8), [{ item: 'immersiveengineering:dust_hop_graphite' }]).id(`${ID_PREFIX}squeezer/dust_hop_graphite_from_coal_coke`);
      // id.mechanical_squeezer(Ingredient.of('#c:dusts/coal_coke', 8), 40, [{ item: 'immersiveengineering:dust_hop_graphite' }]).id(`${ID_PREFIX}mechanical_squeezer/dust_hop_graphite_from_coal_coke`);
    }

  }
});
