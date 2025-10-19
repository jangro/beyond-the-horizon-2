// priority: 10

/**
 * @file Recipe additions for AE2's crafting methods.
 *
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('ae2')) {
    return;
  }
  const ID_PREFIX = 'bth:ae2/';
  const ae2 = event.recipes.ae2;

  //
  // Inscriber
  // inscriber(output item [string], inputs [object: {bottom?, top?, middle?}], mode [string: "press"|"cutting"|"engraving"])
  //
  // example from kubejstweaks
  ae2.inscriber("acacia_boat", { bottom: "#ae2:all_quartz_dust", top: "#ae2:all_quartz", middle: "#ae2:all_fluix" }, "press").id(`${ID_PREFIX}inscriber/acacia_boat`);

  //
  // Mod specific recipes
  //

});
