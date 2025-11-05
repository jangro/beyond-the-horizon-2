// priority: 10

/**
 * @file Smelting recipe additions for Beyond the Horizon.
 */

/**
 * Smelting Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:smelting/';

  event.smelting('createaddition:cake_base_baked', 'createaddition:cake_base').id(`${ID_PREFIX}cake_base`);

  event.smelting('oritech:platinum_ingot', '#c:dusts/platinum').id(`${ID_PREFIX}platinum_ingot_from_dust`);

});
