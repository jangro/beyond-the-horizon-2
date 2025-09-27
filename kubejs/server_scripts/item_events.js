// priority: 5

/**
 * @file Item Events Script - Handles item-related events in the game.
 *
 * This includes things like right-clicking items, using items, and any other interactions
 * that involve items.
 */

//
// Improve lunch basket functionality. By default you have to close the basket to cycle food with sneak-right click.
// This code allows you to cycle food with sneak-right click while the basket is open as well.
//
ItemEvents.rightClicked('supplementaries:lunch_basket', event => {
  console.log('Lunch Basket right-clicked');
  let stack = event.player.getMainHandItem();
  if (event.player.crouching == false) {
    // console.log('Player is not crouching, ignoring');
    // event.cancel();
    return;
  }

  let data = stack.get('supplementaries:lunch_basket_content')
  if (data == null) {
    console.log('No lunch basket data found');
    return;
  }

  if (!data.canEatFrom) {
    console.log('Lunch basket data has no canEatFrom method');
    return;
  }

  const open = data.canEatFrom();
  if (!open) {
    console.log('Lunch basket is not open, ignoring');
    return;
  }

  data = data.toMutable();
  if (!data.cycle) {
    console.log('Lunch basket data has no cycle method');
    return;
  }

  // console.log('Cycling lunch basket food');
  data.cycle(1);

  // Restore the modified data back to the item stack
  data = data.toImmutable();
  stack.set('supplementaries:lunch_basket_content', data);
});
