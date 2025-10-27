// priority: 5

/**
 * @file Block Events Script - Handles block-related events in the game.
 *
 * This includes things like right-clicking blocks, using blocks, and any other interactions
 * that involve blocks.
 */

// BlockEvents.rightClicked('supplementaries:pancake', event => {
//   const heldItem = event.player.getMainHandItem().id;
//   if (heldItem === 'supplementaries:pancake' || heldItem === 'minecraft:honey_bottle') {
//     return;
//   }
//   let fd = event.player.sol_valheim$getFoodData();
//   if (fd.canEat('bth:pancake')) {
//     fd.eatItem('bth:pancake');
//   } else {
//     // The 'eat' sound is played regardless here. Not a big deal though.
//     event.cancel();
//   }
// });
