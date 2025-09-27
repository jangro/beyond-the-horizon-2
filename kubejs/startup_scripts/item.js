// priority: 120

/**
 * @file Custom item additions for Beyond the Horizon.
 */

StartupEvents.registry("item", event => {

  // Adventurer's Spellbook
  // A spellbook for Iron's Spells and Spellbooks that comes filled with utility spells useful for explorers, such as recall.
  event.create('bth:adventurers_spell_book', 'spellbook')
    .setMaxSpellSlots(8)
    .addAttribute('minecraft:generic.movement_speed', 0.2, 'add_multiplied_total')
    .addAttribute('irons_spellbooks:max_mana', 100, 'add_value')
    .addSpell('irons_spellbooks:summon_horse', 1)
    .addSpell('irons_spellbooks:recall', 1)
    .translationKey('item.bth.adventurers_spell_book');

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
  // event.create('bth:terminus', 'sword')
  // .attackDamageBaseline(13.0)
  // .speedBaseline(-2)
  // .fireResistant(true)
  // .rarity('EPIC')
  // .texture('bth:item/terminus')
  // .tier('netherite')
  // .tooltip(Text.translate('tooltip.bth.terminus'))
  // .translationKey('item.bth.terminus')
  // .addSpell('bth:terminus_singularity', 1)
  // .addSpell('bth:terminus_space_fold', 1)
  // .unstackable();

});

// Make Terminus unbreakable here since we can't do it in the item creation event.
// SV: I suspect setting the tier to netherite gives is netherite level durability rather than -1.
// ItemEvents.modification(event => {
//   event.modify('bth:terminus', item => {
//     item.maxDamage = -1;
//   });
// });
