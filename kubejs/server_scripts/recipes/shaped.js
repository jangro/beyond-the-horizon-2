// priority: 10

/**
 * @file Shaped recipe additions for Beyond the Horizon.
 *
 * Note: Recipes should be in this order:
 * 1) Beyond the Horizon (pack-specific content)
 * 2) Minecraft (vanilla)
 * 3) Other mods, alphabetically.
 *
 */

/**
 * Shaped Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'bth:crafting/'; // Recipe ID

  // Beyond the Horizon




  // Minecraft
  event.shaped('minecraft:saddle', [
    'LLL',
    'SLS',
    'I I'
  ], {
    S: '#c:strings',
    L: '#c:leathers',
    I: '#c:ingots/iron'
  }).id(`${ID_PREFIX}saddle`);


  COLORS.forEach(color => {
    event.shaped(`8x minecraft:${color}_terracotta`, [
      'TTT',
      'TDT',
      'TTT'
    ], {
      D: `#c:dyes/${color}`,
      T: '#minecraft:terracotta'
    }).id(`${ID_PREFIX}${color}_terracotta`);
  });


});
