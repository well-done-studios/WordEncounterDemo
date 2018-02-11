//=============================================================================
// ModBattleWindows.js
//=============================================================================
 
/*:
 * @plugindesc Hides the battle menu.
 * @author Dawit Thepchatree
 *
 * @help Made for battles that are driven only by messages instead.
 * 
 */
 
(function() {
    Scene_Battle.prototype.update = function() {
        var active = this.isActive();
        $gameTimer.update(active);
        $gameScreen.update();
        //this.updateStatusWindow();
        this.updateWindowPositions();
        if (active && !this.isBusy()) {
            this.updateBattleProcess();
        }
        Scene_Base.prototype.update.call(this);
    };

    Scene_Battle.prototype.createAllWindows = function() {
        this.createLogWindow();
        this.createStatusWindow();
        this.createPartyCommandWindow();
        this.createActorCommandWindow();
        this.createHelpWindow();
        this.createSkillWindow();
        this.createItemWindow();
        this.createActorWindow();
        this.createEnemyWindow();
        this.createMessageWindow();
        this.createScrollTextWindow();

        //this._statusWindow.close();
        //this._partyCommandWindow.close();
        //this._actorCommandWindow.close();


    };
    Scene_Battle.prototype.updateStatusWindow = function() {
        if ($gameMessage.isBusy()) {
            this._statusWindow.close();
            this._partyCommandWindow.close();
            this._actorCommandWindow.close();
        } else if (this.isActive() && !this._messageWindow.isClosing()) {
            this._statusWindow.open();
        }
    };
})();
