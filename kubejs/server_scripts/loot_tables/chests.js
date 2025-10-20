// priority: 10

/**
 * @file Chest loot table injection / replacement for Beyond the Horizon.
 */

/**
 * Chest Loot Table Event Handler
 */
LootJS.lootTables(event => {

  event.create("bth_structures:chests/wagon/desk_drawer")
    .createPool(pool => {
      pool.addEntry(LootEntry.of("lightmanscurrency:coin_copper").setCount([6, 18]));
    })
    .createPool(pool => {
      pool.addEntry(LootEntry.of("lightmanscurrency:coin_iron").setCount([1, 4]));
    });

  event.create('bth_structures:chests/dw20/large_room')
    .createPool(pool => {
      pool.rolls([3, 6]);
      pool.addEntry(LootEntry.of('rechiseled:cobbled_deepslate_large_tiles_connecting').withWeight(10).setCount([32, 64]));
      pool.addEntry(LootEntry.of('minecraft:stone_bricks').withWeight(10).setCount([32, 64]));
      pool.addEntry(LootEntry.of('minecraft:diamond').withWeight(10).setCount([1, 3]));
      pool.addEntry(LootEntry.of('minecraft:redstone').withWeight(10).setCount([5, 18]));
      pool.addEntry(LootEntry.of('minecraft:lapis_lazuli').withWeight(10).setCount([3, 15]));
    })
    .createPool(pool => {
      pool.addEntry(LootEntry.of('rechiseled:chisel', 1).withWeight(1));
    })
    .createPool(pool => {
      pool.addEntry(LootEntry.of('minecraft:brush', 1).withWeight(1));
    });


  event.create('bth_structures:chests/dw20/hidden')
    // .createPool(pool => {
    //   pool.addEntry(LootEntry.of('bth:adventurers_spell_book', 1));
    // })
    .createPool(pool => {
      pool.addEntry(LootEntry.of("lightmanscurrency:coin_copper").setCount([6, 18]));
    });

});
