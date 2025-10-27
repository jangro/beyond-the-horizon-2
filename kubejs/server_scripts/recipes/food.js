// priority: 90

/**
 * @file Food recipe adjustments for Beyond the Horizon.
 *
 */

ServerEvents.recipes(event => {

  const remove = (id) => {
    event.remove({ id: id });
  };
  const replaceInput = (from, to) => {
    event.replaceInput({}, from, to);
  };
  const replaceOutput = (from, to) => {
    event.replaceOutput({}, from, to);
  };
  const replaceInputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceInput({ id: recipeID }, from, to));
    } else {
      event.replaceInput({ id: recipes }, from, to);
    }
  };

  const ID_PREFIX = 'bth:foods/';

  // Cookies
  remove('minecraft:cookie');
  event.shapeless('8x minecolonies:cookie_dough', ['minecraft:sugar', '#c:eggs', '#c:flours/wheat', '#c:crops/cocoa_bean']).id(`${ID_PREFIX}cookie_dough`);
  // smelting recipe already exists

  remove('farmersdelight:honey_cookie');
  event.shapeless('8x bth:honey_cookie_dough', ['minecraft:sugar', '#c:eggs', '#c:flours/wheat', 'minecraft:honey_bottle']).id(`${ID_PREFIX}honey_cookie_dough`);
  event.smelting('farmersdelight:honey_cookie', 'bth:honey_cookie_dough').id(`${ID_PREFIX}honey_cookie_from_dough`);
  event.smoking('farmersdelight:honey_cookie', 'bth:honey_cookie_dough').id(`${ID_PREFIX}honey_cookie_from_dough_smoking`);

  remove('farmersdelight:sweet_berry_cookie');
  event.shapeless('8x bth:sweet_berry_cookie_dough', ['minecraft:sugar', '#c:eggs', '#c:flours/wheat', 'minecraft:sweet_berries']).id(`${ID_PREFIX}sweet_berry_cookie_dough`);
  event.smelting('farmersdelight:sweet_berry_cookie', 'bth:sweet_berry_cookie_dough').id(`${ID_PREFIX}sweet_berry_cookie_from_dough`);
  event.smoking('farmersdelight:sweet_berry_cookie', 'bth:sweet_berry_cookie_dough').id(`${ID_PREFIX}sweet_berry_cookie_from_dough_smoking`);

  remove('ends_delight:food/chorus_cookie');
  event.shapeless('8x bth:chorus_cookie_dough', ['minecraft:sugar', '#c:eggs', '#c:flours/wheat', 'ends_delight:chorus_fruit_grain']).id(`${ID_PREFIX}chorus_cookie_dough`);
  event.smelting('ends_delight:chorus_cookie', 'bth:chorus_cookie_dough').id(`${ID_PREFIX}chorus_cookie_from_dough`);
  event.smoking('ends_delight:chorus_cookie', 'bth:chorus_cookie_dough').id(`${ID_PREFIX}chorus_cookie_from_dough_smoking`);

  remove('abnormals_delight:mulberry_cookie');
  event.shapeless('8x bth:mulberry_cookie_dough', ['minecraft:sugar', '#c:eggs', '#c:flours/wheat', 'upgrade_aquatic:mulberry']).id(`${ID_PREFIX}mulberry_cookie_dough`);
  event.smelting('abnormals_delight:mulberry_cookie', 'bth:mulberry_cookie_dough').id(`${ID_PREFIX}mulberry_cookie_from_dough`);
  event.smoking('abnormals_delight:mulberry_cookie', 'bth:mulberry_cookie_dough').id(`${ID_PREFIX}mulberry_cookie_from_dough_smoking`);

  remove('abnormals_delight:maple_cookie');
  event.shapeless('8x bth:maple_cookie_dough', ['minecraft:sugar', '#c:eggs', '#c:flours/wheat', 'autumnity:syrup_bottle']).id(`${ID_PREFIX}maple_cookie_dough`);
  event.smelting('abnormals_delight:maple_cookie', 'bth:maple_cookie_dough').id(`${ID_PREFIX}maple_cookie_from_dough`);
  event.smoking('abnormals_delight:maple_cookie', 'bth:maple_cookie_dough').id(`${ID_PREFIX}maple_cookie_from_dough_smoking`);

  // Dough Compatibility
  remove('farmersdelight:wheat_dough_from_water');
  replaceOutput('farmersdelight:wheat_dough', 'create:dough');
  replaceInput('#c:dough/wheat', '#c:doughs/wheat');
  replaceInput('create:dough', '#c:doughs/wheat');
  replaceInput('farmersdelight:wheat_dough', '#c:doughs/wheat');
  replaceInput('minecolonies:bread_dough', '#c:doughs/wheat');

  // Flour Compatibility
  replaceInput('create:wheat_flour', '#c:flours/wheat');
  replaceInput('pneumaticcraft:wheat_flour', '#c:flours/wheat');
  replaceInputID('aethersdelight:gingerbread_dough', 'minecraft:wheat', '#c:flours/wheat');
  replaceInputID('farmersdelight:pie_crust', 'minecraft:wheat', '#c:flours/wheat');

  // Don't allow crafting from wheat -> bread directly. These items should really have a dough stage
  replaceInputID('abnormals_delight:pumpkin_bread', 'minecraft:wheat', 'minecraft:bread');
  replaceInputID('aethersdelight:blue_berry_muffin', 'minecraft:wheat', 'minecraft:bread');
  replaceInputID('aethersdelight:enchanted_berry_muffin', 'minecraft:wheat', 'minecraft:bread');
  replaceInputID('autumnity:pumpkin_bread', 'minecraft:wheat', 'minecraft:bread');
  replaceInputID('neapolitan:banana_bread', 'minecraft:wheat', 'minecraft:bread');
  replaceInputID('neapolitan:strawberry_scones', 'minecraft:wheat', 'minecraft:bread');
  replaceInputID('neapolitan:adzuki_bun', 'minecraft:wheat', 'minecraft:bread');

  // Remove wheat (doesn't make sense in recipe)
  // replaceInputID('ends_delight:food/chorus_fruit_pie', 'minecraft:wheat', 'minecraft:air'); // XXX how to remove an ingredient?

  // Limit what bread can be used for burgers
  replaceInputID('farmersdelight:hamburger', '#c:foods/bread', '#bth:hamburger_bun');
  replaceInputID('minersdelight:vegan_hamburger', '#c:foods/bread', '#bth:hamburger_bun');
  replaceInputID('minersdelight:cave_hamburger', '#c:foods/bread', '#bth:hamburger_bun');
  replaceInputID('mynethersdelight:crafting/nether_burger', '#c:foods/bread', '#bth:hamburger_bun');

  // Manual flour grinding
  event.shapeless('create:wheat_flour', ['#c:crops/wheat', '#bth:can_grind_flour'])
    .damageIngredient('#bth:can_grind_flour', 1)
    .id(`${ID_PREFIX}manual_flour_from_wheat`);

  // Whipped cream from milk bucket
  event.shapeless('4x bth:whipped_cream', ['#c:buckets/milk', 'bth:hand_whisk'])
    .damageIngredient('bth:hand_whisk', 4)
    .id(`${ID_PREFIX}manual_whipped_cream_from_milk_bucket`);

  // Whipped cream from milk bottle
  event.shapeless('bth:whipped_cream', ['#c:bottles/milk', 'bth:hand_whisk'])
    .damageIngredient('bth:hand_whisk', 1)
    .id(`${ID_PREFIX}manual_whipped_cream_from_milk_bottle`);

  // XXX: not working... schema bug?
  // replaceOutput('pneumaticcraft:wheat_flour', 'create:wheat_flour');
  remove('pneumaticcraft:pressure_chamber/wheat_flour');
  remove('pneumaticcraft:explosion_crafting/wheat_flour');
  event.recipes.pneumaticcraft.pressure_chamber('#c:crops/wheat', 1.5, [{ id: 'create:wheat_flour', count: 3 }]).id(ID_PREFIX + 'pressure_chamber/wheat_flour');
  event.recipes.pneumaticcraft.explosion_crafting('#c:crops/wheat', 50, [{ id: 'create:wheat_flour', count: 1 }]).id(ID_PREFIX + 'explosion_crafting/wheat_flour');


});
