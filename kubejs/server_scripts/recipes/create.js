// priority: 10

/**
 * @file Recipe additions for EnderIO's crafting methods.
 *
 */

/**
 * Create Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:create/';

  // Only Create uses the crushed ores, they don't fit with the rest of the processing / mods so switch to dusts/grits
  // XXX: replaceInput/replaceOutput doesn't work with Create crushing recipes

  // event.custom({
  // "type": "create:crushing",
  // "ingredients": [
  //   {
  //     "tag": "c:storage_blocks/raw_iron"
  //   }
  // ],
  // "processing_time": 400,
  // "results": [
  //   {
  //     "count": 9,
  //     "id": "create:crushed_raw_iron"
  //   },
  //   {
  //     "chance": 0.75,
  //     "count": 9,
  //     "id": "create:experience_nugget"
  //   }
  // ]
  // }).id(`${ID_PREFIX}crushing/crushed_raw_iron_from_raw_iron_block`);

  // event.custom({
  // "type": "create:crushing",
  // "ingredients": [
  //   {
  //     "tag": "c:raw_materials/iron"
  //   }
  // ],
  // "processing_time": 400,
  // "results": [
  //   {
  //     "id": "create:crushed_raw_iron"
  //   },
  //   {
  //     "chance": 0.75,
  //     "id": "create:experience_nugget"
  //   }
  // ]
  // }).id(`${ID_PREFIX}crushing/crushed_raw_iron_from_raw_iron`);


  // event.custom({
  // "type": "create:crushing",
  // "ingredients": [
  //   {
  //     "item": "minecraft:iron_ore"
  //   }
  // ],
  // "processing_time": 250,
  // "results": [
  //   {
  //     "id": "create:crushed_raw_iron"
  //   },
  //   {
  //     "chance": 0.75,
  //     "id": "create:crushed_raw_iron"
  //   },
  //   {
  //     "chance": 0.75,
  //     "id": "create:experience_nugget"
  //   },
  //   {
  //     "chance": 0.125,
  //     "id": "minecraft:cobblestone"
  //   }
  // ]
  // }).id(`${ID_PREFIX}crushing/crushed_raw_iron_from_iron_ore`


});
