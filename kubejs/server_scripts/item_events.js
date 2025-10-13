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

//
// Add bounty proof to the player's inventory when interacting with a mob using spectre snare
//
ItemEvents.entityInteracted('bth:spectre_snare', event => {
  const { player, player: { x, y, z }, target } = event;

  let entity_id = target.entityType.toString();
  if (entity_id.startsWith("entity.")) {
    entity_id = entity_id.replace("entity.", "").replace(".", ":");
  }
  //console.log(`Entity ID: ${entity_id}`);
  //const mod = entity_id.split(":")[0];
  const mob = entity_id.split(":")[1];

  // Iterate through player's inventory to find a bounty item
  let has_bounty = false;
  for (let item of player.inventory.items) {
    if (!item || item.id !== 'bountiful:bounty') {
      continue;
    }
    let nbt = item.nbt.toString();
    if (nbt.contains(`bth:bounty_proof_${mob}`) && !nbt.contains('pingComplete')) {
      has_bounty = true;
      break;
    }
  }

  if (!has_bounty) {
    player.tell(Text.translate('bth.chat.no_bounty'));
    event.cancel();
    return;
  }

  let item = player.mainHandItem; // Get item in the main hand
  if (!item.isEmpty()) { // Check if player is holding an item
    let currentDamage = item.nbt["Damage"] || 0; // Get current damage of the item
    let maxDamage = item.maxDamage; // Get max durability of the item
    let newDamage = currentDamage + 1; // Increase damage by 1
    if (newDamage >= maxDamage) {
      item.count = 0; // Break the item
    } else {
      item.nbt["Damage"] = newDamage; // Set new damage
    }
  }

  let proof = Item.of(`bth:bounty_proof_${mob}`);
  player.give(proof);
  target.discard();
  event.cancel();
});
