// Simple Sol Valheim Reforged KubeJS Integration

console.log('Loading Simple Sol Valheim Integration...');

// Load the Sol Valheim classes
const SolValheimModVariables = Java.loadClass('sol_valheim_reforged.network.SolValheimReforgedModVariables');
const CanEatCheckProcedure = Java.loadClass('sol_valheim_reforged.procedures.CanEatCheckProcedure');
const FoodConsumedProcedure = Java.loadClass('sol_valheim_reforged.procedures.FoodConsumedProcedure');
const PlayerVarsType = SolValheimModVariables.PLAYER_VARIABLES.get();

/**
 * Check if a player can eat a specific food item based on Sol Valheim cooldown rules
 * @param {Player} player - The player trying to eat
 * @param {ItemStack} foodItem - The food item to check
 * @returns {boolean} - true if player can eat, false if blocked by cooldowns
 */
function canEat(player, foodItem) {
  try {
    let playerData = player.getData(PlayerVarsType);

    if (!playerData) {
      console.log('No Sol Valheim player data found, allowing eating');
      return true;
    }

    let slot1Cooldown = playerData.last_consumed_1_duration || 0;
    let slot2Cooldown = playerData.last_consumed_2_duration || 0;
    let slot3Cooldown = playerData.last_consumed_3_duration || 0;

    console.log(`Sol Valheim cooldowns - Slot 1: ${slot1Cooldown}, Slot 2: ${slot2Cooldown}, Slot 3: ${slot3Cooldown}`);

    // Check if this food type is already in any active slot (same food type on cooldown)
    let slot1Item = playerData.last_consumed_1;
    let slot2Item = playerData.last_consumed_2;
    let slot3Item = playerData.last_consumed_3;

    let hasFoodInSlot = (slot1Item && slot1Item.getId() === foodItem && slot1Cooldown > 0) ||
      (slot2Item && slot2Item.getId() === foodItem && slot2Cooldown > 0) ||
      (slot3Item && slot3Item.getId() === foodItem && slot3Cooldown > 0);

    if (hasFoodInSlot) {
      console.log('Food blocked - already in cooldown slot');
      return false;
    } else if (slot1Cooldown > 0 && slot2Cooldown > 0 && slot3Cooldown > 0) {
      console.log('Food blocked - all slots full');
      return false;
    }

    return true;

  } catch (error) {
    console.log('Error checking Sol Valheim cooldowns:', error);
    // Default to allowing eating if check fails
    return true;
  }
}

function tryEat(event, foodItem) {
  const { player, level, block } = event;

  // Check if player can eat cake based on Sol Valheim cooldowns
  if (!canEat(player, foodItem)) {
    player.tell(`§cYou cannot eat ${foodItem} right now - food slots are full or on cooldown!`);
    console.log(`Eating blocked for ${player.name.string} due to Sol Valheim cooldown`);
    return false;
  }

  try {
    // Call Sol Valheim's food consumption procedure
    FoodConsumedProcedure.execute(level, player, foodItem);
    event.server.runCommandSilent(`execute in ${event.level.dimension} run playsound minecraft:entity.generic.eat master @p ${event.block.x} ${event.block.y} ${event.block.z}`);
    player.tell(`§aYou enjoyed a delicious slice of ${foodItem}!`);
    console.log(`Sol Valheim food consumption triggered for ${player.name.string}`);
  } catch (error) {
    console.log(`Error triggering Sol Valheim food consumption: ${error}`);
  }
  return true;
}

[ { cake: 'createaddition:honey_cake', slice: 'bth:honey_cake_slice' },
  { cake: 'dungeonsdelight:monster_cake', slice: 'dungeonsdelight:monster_cake_slice' },
  { cake: 'minecraft:cake', slice: 'farmersdelight:cake_slice' },
  { cake: 'mynethersdelight:magma_cake_block', slice: 'mynethersdelight:magma_cake_slice' },
  { cake: 'neapolitan:adzuki_cake', slice: 'abnormals_delight:adzuki_cake_slice' },
  { cake: 'neapolitan:banana_cake', slice: 'abnormals_delight:banana_cake_slice' },
  { cake: 'neapolitan:chocolate_cake', slice: 'abnormals_delight:chocolate_cake_slice' },
  { cake: 'neapolitan:mint_cake', slice: 'abnormals_delight:mint_cake_slice' },
  { cake: 'neapolitan:strawberry_cake', slice: 'abnormals_delight:strawberry_cake_slice' },
  { cake: 'neapolitan:vanilla_cake', slice: 'abnormals_delight:vanilla_cake_slice' },
].forEach((cakeData) => {
  const { cake, slice } = cakeData;
  BlockEvents.rightClicked(cake, event => {
    // If the player is holding a knife, just return and don't cancel event allowing the player to get a cake slice item.
    if (event.player.getMainHandItem().hasTag('c:tools/knife')) {
      // The honey cake is missing the drop item on knife interaction mechanic so add it here.
      if (cake === 'createaddition:honey_cake') {
        event.server.runCommandSilent(`execute in ${event.level.dimension} run playsound minecraft:block.wool.break master @p ${event.block.x} ${event.block.y} ${event.block.z}`);
        event.block.popItem('bth:honey_cake_slice');
      }
      return;
    }
    if (!tryEat(event, slice)) {
      event.cancel();
    }
  });
});

BlockEvents.rightClicked('supplementaries:pancake', event => {
  const pancake = 'bth:pancake';
  let heldItem = event.player.getMainHandItem().id;
  if (heldItem === 'supplementaries:pancake' || heldItem === 'minecraft:honey_bottle') {
    return;
  }
  console.log('Trying to eat pancake');
  if (!tryEat(event, pancake)) {
    console.log(`Cannot eat, canceling event for ${event.player.name.string}`);
    event.cancel();
  }
  console.log('Done');
});
