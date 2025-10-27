// priority: 10

/**
 * @file Recipe additions for Farmer's Delight's crafting methods.
 *
 */

/**
 * Farmer's Delight Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:farmersdelight/';

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "createaddition:honey_cake"
      }
    ],
    "result": [
      {
        "item": {
          "count": 7,
          "id": "bth:honey_cake_slice"
        }
      }
    ],
    "tool": {
      "tag": "c:tools/knife"
    }
  }).id(`${ID_PREFIX}honey_cake`);

});
