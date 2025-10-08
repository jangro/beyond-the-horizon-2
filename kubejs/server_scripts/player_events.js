// priority: 5

/**
 * @file First Start Script - Handles the first time a player joins a world (whether single- or multiplayer).
 *
 * This includes things like introductory chat messages + links, starting items, and anything else that needs
 * to be set just once the first time a player connects.
 */

/**
 * Player Login Event Handler
 */
PlayerEvents.loggedIn(event => {
  console.log('Player logged in:', event.player.name);
  if (!event.player.stages.has('first_start')) {
    event.player.tell(Text.translate('bth.chat.first_start_message'));

    // Create tome using string format with dynamic UUID
    const UUIDClass = Java.loadClass('java.util.UUID');
    const tome_id = UUIDClass.randomUUID().toString();
    const tome = `eccentrictome:tome[eccentrictome:tome_data={\
      books:{\
        ae2:[{count:1,id:"ae2:guide"}],\
        ars_nouveau:[{count:1,id:"ars_nouveau:worn_notebook"}],\
        buildinggadgets2:[{components:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"},count:1,id:"patchouli:guide_book"}],\
        justdirethings:[{components:{"patchouli:book":"justdirethings:justdirethingsbook"},count:1,id:"patchouli:guide_book"}],\
        lightmanscurrency:[{components:{"patchouli:book":"lightmanscurrency:trader_guide"},count:1,id:"patchouli:guide_book"}],\
        modularrouters:[{components:{"patchouli:book":"modularrouters:book"},count:1,id:"patchouli:guide_book"}],\
        pneumaticcraft:[{components:{"patchouli:book":"pneumaticcraft:book"},count:1,id:"patchouli:guide_book"}],\
        productivebees:[{components:{"patchouli:book":"productivebees:guide"},count:1,id:"patchouli:guide_book"}],\
        simplyswords:[{components:{"patchouli:book":"simplyswords:runic_grimoire"},count:1,id:"patchouli:guide_book"}]\
      },\
      tome_id:"${tome_id}"\
    }]`;
    event.player.give(tome);

    // Give player some random starter food
    let index = Math.floor(FIRST_START_FOODS.length * Math.random());
    event.player.give(Item.of(FIRST_START_FOODS[index], 8));

    // Give player a wallet with slightly random amount of coins
    let count = 3 + Math.floor(7 * Math.random());
    const wallet = Item.of('lightmanscurrency:wallet_leather[\
      lightmanscurrency:wallet_data={\
        AutoExchange:1b,\
        BonusSlots:0,\
        Items:[{count:' + count + ',id:"lightmanscurrency:coin_copper"},{},{},{},{},{}]\
      }\
    ]');
    event.player.give(wallet);

    // Give player 3 ancient cookies for random teleportation
    // event.player.give('3x bth:ancient_cookie');

    // Set stage last so if something errors above we can try again
    event.player.stages.add('first_start');
  }

  // Note: If added to in the future, creating multiple stages would allow players updating the pack to receive any new
  // "first start" items / settings / whatever.
  // eg. instead of 'first_start', use 'first_start_v2', 'first_start_v3' to allow versioning the first start script.
});


// CommonAddedEvents.playerChangeDimension(event => {
//   const newLevel = event.getNewLevel(); // LevelJS object
//   const newDim = newLevel.dimension.toString();

//   if (newDim === 'aether:the_aether') {
//     if (!event.player.stages.has('entered_aether')) {
//       event.player.stages.add('entered_aether');
//       event.player.give(Item.of('paraglider:paraglider'));
//       event.player.give(Item.of('aether:book_of_lore'));
//     }
//   }
// });
