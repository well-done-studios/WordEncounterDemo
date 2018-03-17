//=============================================================================
// ModBattleWindows.js
//=============================================================================
 
/*:
 * @plugindesc Modifies the battle window.
 * @author Hugh Bagan
 *
 * @help
 * 
 */
 
BattleManager.displayStartMessages = function() { 
    $gameTroop.enemyNames().forEach(function(name) {
        // Execute this function on each enemy name in the troop
        if (name == "Richard") {
            $gameMessage.add("TA Richard is haranguing you for homework!");
        }
        else {
            $gameMessage.add(TextManager.emerge.format(name));
        }
    }); 
    if (this._preemptive) { 
        $gameMessage.add(TextManager.preemptive.format($gameParty.name())); 
    } else if (this._surprise) { 
        $gameMessage.add(TextManager.surprise.format($gameParty.name())); 
    }
};