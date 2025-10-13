// priority: 9002

/**
 * @file Global Constants for use in other scripts.
 */

/**
 * Minecraft's default colors, as used in vanilla item IDs and by most mods.
 * Note: Some mods use abnormal names for colors, such as Absent By Design (which uses 'silver' in some places
 * instead of 'light_gray'), so this shouldn't be used blindly without verifying that the mod uses standard
 * color names.
 */
const COLORS = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
];

const VANILLA_WOOD_LOG_TYPES = [
  'acacia',
  'bamboo',
  'birch',
  'cherry',
  'dark_oak',
  'jungle',
  'mangrove',
  'oak',
  'spruce',
];

const VANILLA_WOOD_STEM_TYPES = [
  'crimson',
  'warped'
];

const VANILLA_WOOD_TYPES_ALL = VANILLA_WOOD_LOG_TYPES.concat(VANILLA_WOOD_STEM_TYPES);

const FIRST_START_FOODS = [
  // 'buzzier_bees:honey_bread',
  'farmersdelight:cabbage_rolls',
  'hauntedharvest:corn_on_the_cob',
  'hauntedharvest:cornbread',
  'minersdelight:vegetable_soup_cup',
  'neapolitan:banana_bread',
  // 'rats:assorted_vegetables',
  'upgrade_aquatic:mulberry_bread',
];
