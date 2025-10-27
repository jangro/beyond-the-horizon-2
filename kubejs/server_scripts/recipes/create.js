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

  // Whipped Cream automated crafting
  c.mixing('bth:whipped_cream', [Fluid.of('minecraft:milk', 250)]).id(`${ID_PREFIX}mixing/whipped_cream`);

  // Honey cake doesn't have whipped cream, instead we just pour honey on the cake base
  c.filling('createaddition:honey_cake', ['createaddition:cake_base_baked', Fluid.of('create:honey', 250)]).id(`${ID_PREFIX}filling/honey_cake`);

  // Minecraft cake with whipped cream
  c.deploying('minecraft:cake', ['createaddition:cake_base_baked', 'bth:whipped_cream']).id(`${ID_PREFIX}deploying/cake`);

  // All other cakes are Minecraft cake + flavoring
  c.deploying('neapolitan:adzuki_cake', ['minecraft:cake', 'neapolitan:roasted_adzuki_beans']).id(`${ID_PREFIX}deploying/adzuki_cake`);
  c.deploying('neapolitan:banana_cake', ['minecraft:cake', 'neapolitan:banana']).id(`${ID_PREFIX}deploying/banana_cake`);
  c.deploying('neapolitan:mint_cake', ['minecraft:cake', 'neapolitan:mint_leaves']).id(`${ID_PREFIX}deploying/mint_cake`);
  c.deploying('neapolitan:strawberry_cake', ['minecraft:cake', 'neapolitan:strawberries']).id(`${ID_PREFIX}deploying/strawberry_cake`);
  c.deploying('neapolitan:vanilla_cake', ['minecraft:cake', 'neapolitan:dried_vanilla_pods']).id(`${ID_PREFIX}deploying/vanilla_cake`);
  c.deploying('neapolitan:chocolate_cake', ['minecraft:cake', 'neapolitan:chocolate_bar']).id(`${ID_PREFIX}deploying/chocolate_cake_neapolitan`);
  c.deploying('neapolitan:chocolate_cake', ['minecraft:cake', 'create:bar_of_chocolate']).id(`${ID_PREFIX}deploying/chocolate_cake_create`);

});
