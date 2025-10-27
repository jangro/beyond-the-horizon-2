// priority: 10

/**
 * @file Merchant / Villager trading table injection / replacement for Beyond the Horizon.
 */

/**
 * Replaces the inputs of a trade with a new item, keeping quantities intact.
 * @param {$OfferExtension} offer The trade offer to modify.
 * @param {string} oldItem The ID of the item to replace from.
 * @param {string} newItem The ID of the item to replace to.
 */
const replaceInputs = (offer, oldItem, newItem) => {
  if (offer.getFirstInput().getId() == oldItem) {
    offer.setFirstInput(Item.of(newItem, offer.getFirstInput().count));
  }

  if (offer.getSecondInput().getId() == oldItem) {
    offer.setSecondInput(Item.of(newItem, offer.getSecondInput().count));
  }
};

/**
* Replaces the output of a trade offer with a new item, keeping quantities intact.
 * @param {$OfferExtension} offer The trade offer to modify.
 * @param {string} oldItem The ID of the item to replace from.
 * @param {string} newItem The ID of the item to replace to.
*/
const replaceOutput = (offer, oldItem, newItem) => {
  if (offer.getOutput().getId() == oldItem) {
    offer.setOutput(Item.of(newItem, offer.getOutput().count));
  }
};

/**
* Replaces the inputs and output of a trade offer with a new item, keeping quantities intact.
 * @param {$OfferExtension} offer The trade offer to modify.
 * @param {string} oldItem The ID of the item to replace from.
 * @param {string} newItem The ID of the item to replace to.
*/
const replaceItem = (offer, oldItem, newItem) => {
  replaceInputs(offer, oldItem, newItem);
  replaceOutput(offer, oldItem, newItem);
};


MoreJS.wandererTrades((event) => {
  // Remove all default trades (some are also removed through datapacks in minecraft/moonlight/villager_trades//wandering_trader/)
  event.removeVanillaTypedTrades(1);
  event.removeVanillaTypedTrades(2);
  event.removeModdedTypedTrades(1);
  event.removeModdedTypedTrades(2);

  // Level 1 trades:
  // Common
  event.addTrade(1, TradeItem.of('lightmanscurrency:coin_copper', 1, 3), 'supplementaries:flax_seeds');
  // Uncommon
  event.addTrade(1, TradeItem.of('lightmanscurrency:coin_copper', 1, 3), 'eidolon_repraised:illwood_sapling');
  // event.addTrade(1, TradeItem.of('lightmanscurrency:coin_copper', 4, 7), 'farmersrespite:tea_seeds');
  event.addTrade(1, TradeItem.of('lightmanscurrency:coin_copper', 5, 9), 'forbidden_arcanus:fungyss');
  // Rare
  event.addTrade(1, TradeItem.of('lightmanscurrency:coin_iron', 1, 2), 'minecraft:slime_ball');
  event.addTrade(1, TradeItem.of('lightmanscurrency:coin_iron', 2, 6), 'supplementaries:globe');
  // event.addTrade(1, TradeItem.of('lightmanscurrency:coin_iron', 2, 6), 'botania:white_mystical_flower');
  event.addTrade(1, TradeItem.of('lightmanscurrency:coin_iron', 2, 6), 'forbidden_arcanus:yellow_orchid');
  // event.addTrade(1, TradeItem.of('lightmanscurrency:coin_iron', 6, 9), 'forbidden_arcanus:nipa');

  // Level 2 trades: (only 1 of these will be selected)
  event.addTrade(2, TradeItem.of('lightmanscurrency:coin_gold', 1, 3), 'minecraft:nether_wart');
  // event.addTrade(2, TradeItem.of('lightmanscurrency:coin_gold', 1, 3), 'farmersrespite:coffee_berries');
  event.addTrade(2, TradeItem.of('lightmanscurrency:coin_gold', 1, 3), 'blazingbamboo:blazing_bamboo_item');
  event.addTrade(2, TradeItem.of('lightmanscurrency:coin_gold', 3, 5), 'minecraft:chorus_fruit');
  event.addTrade(2, TradeItem.of('lightmanscurrency:coin_gold', 4, 7), 'minecraft:chorus_flower');
  // event.addTrade(2, TradeItem.of('lightmanscurrency:coin_emerald', 2, 2), 'rats:chunky_cheese_token');
});

MoreJS.villagerTrades((event) => {
  // Remove all default trades
  event.removeModdedTypedTrades('lightmanscurrency:cashier', [1, 5]);

  // BTH: villager xp is set so that 10 food trades is required to level up for each level, utils trade gives double the xp.

  // <=5 minute foods
  var trade = event.addTrade('lightmanscurrency:cashier', 1, TradeItem.of('lightmanscurrency:coin_copper', 1, 2), 'neapolitan:banana'); // 5 minutes, 2 hearts
  trade.villagerExperience(1);
  // trade = event.addTrade('lightmanscurrency:cashier', 1, TradeItem.of('lightmanscurrency:coin_copper', 1, 2), 'farmersrespite:coffee'); // 5 minutes, 1 heart
  // trade.villagerExperience(1);

  // 6-10 minute foods
  trade = event.addTrade('lightmanscurrency:cashier', 2, TradeItem.of('lightmanscurrency:coin_copper', 2, 4), 'minersdelight:baked_squid'); // 7 minutes, 3 hearts
  trade.villagerExperience(6);
  trade = event.addTrade('lightmanscurrency:cashier', 2, TradeItem.of('lightmanscurrency:coin_copper', 2, 4), 'pneumaticcraft:chips'); // 9 minutes, 2.5 hearts
  trade.villagerExperience(6);

  // 11-15 minute foods
  trade = event.addTrade('lightmanscurrency:cashier', 3, TradeItem.of('lightmanscurrency:coin_copper', 3, 6), 'mynethersdelight:spicy_skewer'); // 11 minutes, 3.5 hearts
  trade.villagerExperience(8);
  trade = event.addTrade('lightmanscurrency:cashier', 3, TradeItem.of('lightmanscurrency:coin_copper', 3, 6), 'neapolitan:vanilla_chocolate_fingers') // 11 minutes, 3 hearts
  trade.villagerExperience(8);

  // 16-25 minute foods
  trade = event.addTrade('lightmanscurrency:cashier', 4, TradeItem.of('lightmanscurrency:coin_copper', 4, 8), 'minersdelight:vegan_wrap'); // 21 minutes, 5 hearts
  trade.villagerExperience(11);
  trade = event.addTrade('lightmanscurrency:cashier', 4, TradeItem.of('lightmanscurrency:coin_copper', 4, 8), 'farmersdelight:milk_bottle'); // 23 minutes, 3.5 hearts
  trade.villagerExperience(11);

  // >26 minute foods
  trade = event.addTrade('lightmanscurrency:cashier', 5, TradeItem.of('lightmanscurrency:coin_copper', 5, 10), 'farmersdelight:hamburger'); // 34 minutes, 6.5 hearts
  trade.villagerExperience(16);
  trade = event.addTrade('lightmanscurrency:cashier', 5, TradeItem.of('lightmanscurrency:coin_copper', 5, 10), 'pneumaticcraft:cod_n_chips'); // 36 minutes, 6 hearts
  trade.villagerExperience(16);

  // Utilities
  // trade = event.addTrade('lightmanscurrency:cashier', 1, TradeItem.of('lightmanscurrency:coin_iron', 1, 2), 'astikorcarts:supply_cart');
  // trade.villagerExperience(2);
  trade = event.addTrade('lightmanscurrency:cashier', 2, TradeItem.of('lightmanscurrency:coin_iron', 2, 4), 'sophisticatedbackpacks:backpack');
  trade.villagerExperience(12);
  // trade = event.addTrade('lightmanscurrency:cashier', 3, TradeItem.of('lightmanscurrency:coin_iron', 3, 6), 'paraglider:paraglider');
  // trade.villagerExperience(16);
  trade = event.addTrade('lightmanscurrency:cashier', 4, TradeItem.of('lightmanscurrency:coin_iron', 4, 8), 'smallships:oak_cog');
  trade.villagerExperience(22);
  trade = event.addTrade('lightmanscurrency:cashier', 5, TradeItem.of('lightmanscurrency:coin_iron', 5, 10), 'immersiveengineering:glider');
  trade.villagerExperience(32);

});

MoreJS.updateOffer((event) => {
  // Replace FD rope with Supplementaries Rope in Chef trades.
  if (event.isProfession('chefsdelight:delightchef')) {
    event.getOffers().forEach((offer) => {
      replaceItem(offer, 'farmersdelight:rope', 'supplementaries:rope');
    });
  }

});
