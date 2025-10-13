// priority: 10

/**
 * @file Recipe additions for Exposure's crafting methods.
 *
 */

/**
 * Exposure Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:exposure/';

  // Simplified developed color film recipe
  event.custom({
    "type": "exposure:film_developing",
    "film": {
      "tag": "exposure:color_film_rolls"
    },
    "ingredients": [
      [
        {
          "type": "neoforge:components",
          "items": "minecraft:potion",
          "components": {
            "minecraft:potion_contents": {
              "potion": "minecraft:mundane"
            }
          }
        }
      ],
    ],
    "result": {
      "id": "exposure:developed_color_film"
    }
  }).id(`${ID_PREFIX}developed_color_film`);

});
