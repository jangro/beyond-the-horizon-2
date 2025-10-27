// priority: 120

/**
 * @file Custom item additions for Beyond the Horizon.
 */

StartupEvents.registry("item", event => {

  // Adventurer's Spellbook
  // A spellbook for Iron's Spells and Spellbooks that comes filled with utility spells useful for explorers, such as recall.
  // event.create('bth:adventurers_spell_book', 'spellbook')
  //   .setMaxSpellSlots(8)
  //   .addAttribute('minecraft:generic.movement_speed', 0.2, 'add_multiplied_total')
  //   .addAttribute('irons_spellbooks:max_mana', 100, 'add_value')
  //   // .addSpell('irons_spellbooks:summon_horse', 1)
  //   // .addSpell('irons_spellbooks:recall', 1)
  //   .translationKey('item.bth.adventurers_spell_book');

  // Coconut Maul
  // An easter egg weapon that hits harder but slower than a sword, but not to the same extreme as an axe.
  // TODO: Figure out how to apply custom damage type on hit. Maybe find the right callback to add a call to /damage?
  event.create('bth:coconut_maul', 'sword')
    .attackDamageBaseline(5.0)
    .maxDamage(59)
    .speedBaseline(-2.8)
    .texture('bth:item/coconut_maul')
    .tier('wood')
    .tooltip(Text.translate('tooltip.bth.coconut_maul'))
    .translationKey('item.bth.coconut_maul')
    .unstackable();

  // Terminus, Blade of the Dimensional Master
  // event.create('bth:terminus', 'magic_sword')
  //   .attackDamageBaseline(13.0)
  //   .speedBaseline(-2)
  //   .fireResistant(true)
  //   .rarity('EPIC')
  //   .texture('bth:item/terminus')
  //   .tier('netherite')
  //   .tooltip(Text.translate('tooltip.bth.terminus'))
  //   .translationKey('item.bth.terminus')
  //   .addSpell('bth:terminus_singularity', 1)
  //   .addSpell('bth:terminus_space_fold', 1)
  //   .unstackable();

  // Mob catcher for bounties
  event.create('bth:spectre_snare')
    .maxDamage(16)
    .texture('bth:item/spectre_snare')
    .tooltip(Text.translate('tooltip.bth.spectre_snare'))
    .translationKey('item.bth.spectre_snare');

  // Hand whisk to make whipped cream
  event.create('bth:hand_whisk')
    .maxDamage(64)
    .texture('bth:item/hand_whisk')
    .tooltip(Text.translate('tooltip.bth.hand_whisk'))
    .translationKey('item.bth.hand_whisk');

  // Whipped cream used for cakes instead of milk
  event.create('bth:whipped_cream')
    .food(food => {
      food.nutrition(2).saturation(1.0)
    })
    .texture('bth:item/whipped_cream')
    .tooltip(Text.translate('tooltip.bth.whipped_cream'))
    .translationKey('item.bth.whipped_cream');

  // Honey cookie dough
  event.create('bth:honey_cookie_dough')
    .texture('minecolonies:item/cookie_dough');

  // Sweet berry cookie dough
  event.create('bth:sweet_berry_cookie_dough')
    .texture('minecolonies:item/cookie_dough');

  // Chorus cookie dough
  event.create('bth:chorus_cookie_dough')
    .texture('minecolonies:item/cookie_dough');

  // Mulberry cookie dough
  event.create('bth:mulberry_cookie_dough')
    .texture('minecolonies:item/cookie_dough');

  // Maple cookie dough
  event.create('bth:maple_cookie_dough')
    .texture('minecolonies:item/cookie_dough');

  // Edible version of supplementary's pancake
  event.create('bth:pancake')
    .food(food => {
      food.nutrition(6).saturation(1.0)
    })
    .texture('supplementaries:item/pancake');

  // A slice of Create Addition's honey cake
  event.create('bth:honey_cake_slice')
    .food(food => {
      food.nutrition(6).saturation(1.0)
    })
    .texture('bth:item/honey_cake_slice')
    .translationKey('item.bth.honey_cake_slice');

});

// Make Terminus unbreakable here since we can't do it in the item creation event.
// SV: I suspect setting the tier to netherite gives is netherite level durability rather than -1.
// ItemEvents.modification(event => {
//   event.modify('bth:terminus', item => {
//     item.maxDamage = -1;
//   });
// });

ItemEvents.modification(event => {

  [
    'bth:honey_cake_slice',
    'farmersdelight:cake_slice',
    'abnormals_delight:chocolate_cake_slice',
  ].forEach(slice => {
    event.modify(slice, item => {
      item.food = {
        nutrition: 6,
        saturation: 1.0
      };
    });
  });


});
