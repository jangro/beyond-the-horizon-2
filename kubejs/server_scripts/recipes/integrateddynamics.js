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
 *
 * Note 2: The squeezers sometimes use tags for output items so can't be replaced with the regular
 * replaceOutput function. Options are to remove and recreate the recipe, or remove the tags from the
 * unwanted items.
 *
 */
ServerEvents.recipes(event => {
  if (!Platform.isLoaded('integrateddynamics')) {
    return;
  }
  const ID_PREFIX = 'bth:integrateddynamics/';
  const id = event.recipes.integrateddynamics;

  //
  // Squeezer
  // mechanical_squeezer(input [ingredient], duration [int], output items [list], output fluid [optional fluid stack])
  // squeezer(input [ingredient], output items [list], output fluid [optional fluid stack])
  //

  // XXX: replaceOutput is now working but let's redo the recipes anyways to balance the outputs with other mods
  ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'platinum', 'silver', 'uranium', 'zinc'].forEach((material) => {
    event.remove({ id: `integrateddynamics:mechanical_squeezer/ore/raw_${material}` });
    event.remove({ id: `integrateddynamics:squeezer/ore/raw_${material}` });
    id.mechanical_squeezer(`#c:ores/${material}`, 40, [{ item: `create:crushed_raw_${material}`, chance: 1.0 }, { item: `create:crushed_raw_${material}`, chance: 0.5 }, { item: `create:crushed_raw_${material}`, chance: 0.5 }, { item: 'minecraft:cobblestone', chance: 0.10 }]).id(`${ID_PREFIX}mechanical_squeezer/ore_${material}`);
    id.squeezer(`#c:ores/${material}`, [{ item: `create:crushed_raw_${material}`, chance: 1.0 }, { item: `create:crushed_raw_${material}`, chance: 0.75 }, { item: 'minecraft:cobblestone', chance: 0.10 }]).id(`${ID_PREFIX}squeezer/ore_${material}`);
  });

  //
  // Mod specific recipes
  //
  if (Platform.isLoaded('forbidden_arcanus')) {
    id.mechanical_squeezer('forbidden_arcanus:stella_arcanum', 40, [{ item: 'forbidden_arcanus:stellarite_piece' }, { item: 'forbidden_arcanus:stellarite_piece', chance: 0.5 }]).id(`${ID_PREFIX}mechanical_squeezer/stella_arcanum`);
    id.squeezer('forbidden_arcanus:stella_arcanum', [{ item: 'forbidden_arcanus:stellarite_piece' }, { item: 'forbidden_arcanus:stellarite_piece', chance: 0.5 }]).id(`${ID_PREFIX}squeezer/stella_arcanum`);
  }

  if (Platform.isLoaded('immersiveengineering')) {
    // SV: Looks like the squeezers can't take more than 1 of the input item...
    // id.mechanical_squeezer(Ingredient.of('#c:dusts/coal_coke', 8), 40, [{ item: 'immersiveengineering:dust_hop_graphite' }]).id(`${ID_PREFIX}mechanical_squeezer/dust_hop_graphite_from_coal_coke`);
    // id.squeezer(Ingredient.of('#c:dusts/coal_coke', 8), [{ item: 'immersiveengineering:dust_hop_graphite' }]).id(`${ID_PREFIX}squeezer/dust_hop_graphite_from_coal_coke`);
  }

  if (Platform.isLoaded('starbunclemania')) {
    id.mechanical_squeezer('ars_nouveau:sourceberry_bush', 20, [], Fluid.of('starbunclemania:source_fluid', 100)).id(`${ID_PREFIX}mechanical_squeezer/sourceberries`);
    id.squeezer('ars_nouveau:sourceberry_bush', [], Fluid.of('starbunclemania:source_fluid', 100)).id(`${ID_PREFIX}squeezer/sourceberries`);
  }

});
