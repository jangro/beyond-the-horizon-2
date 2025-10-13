// priority: 120

/**
 * @file Custom fluid additions for Beyond the Horizon.
 */

StartupEvents.registry("fluid", event => {

  // For Ender IO Soul Engine
  event.create('bth:sugar_water', 'thin')
    .tint(0xEADDCA)
    .displayName(Text.translate('fluid.bth.sugar_water'));

  event.create('bth:soul_mixture', 'thin')
    .tint(0x6F4E37)
    .displayName(Text.translate('fluid.bth.soul_mixture'));

  event.create('bth:ender_fuel', 'thin')
    .tint(0xA95C68)
    .displayName(Text.translate('fluid.bth.ender_fuel'));

  event.create('bth:hyper_nutritious_goo', 'thick')
    .tint(0xCD78FF)
    .displayName(Text.translate('fluid.bth.hyper_nutritious_goo'));

  event.create('bth:nanobot_soda', 'thick')
    .tint(0x4DD7FF)
    .displayName(Text.translate('fluid.bth.nanobot_soda'));

});
