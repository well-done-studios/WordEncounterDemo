//=============================================================================
// CustomMenuScene.js
//=============================================================================

/*:
 * @plugindesc eyy bb lemme slide right into ur dms
 * @author Hugh Bagan
 *
 * @help There are no plugin commands.
 * 
 */

(function() {

    Scene_MenuBase.prototype.createBackground = function() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = ImageManager.loadPicture("Phone2");
        this.addChild(this._backgroundSprite);
    };

    Scene_Menu.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createCommandWindow();
        this.createGoldWindow();
        this.createStatusWindow();
        
        /*
        this._commandWindow
        this._goldWindow
        this._statusWindow
        */
        this._goldWindow.hide();
        this._statusWindow.hide();
        this._commandWindow.x = 280;
        this._commandWindow.y = 190;
        this._commandWindow.opacity = 0;
    };

    /*
    Window_MenuStatus.prototype.windowWidth = function() {
        return Graphics.boxWidth - 240;
    };
    
    Window_MenuStatus.prototype.windowHeight = function() {
        return Graphics.boxHeight / 2;
    };

    Window_MenuStatus.prototype.numVisibleRows = function() {
        return 2;
    };

    Window_MenuStatus.prototype.maxCols = function() {
        // Rewritten from the inherited Window_Selectable (parent of MenuStatus)
        return 1;
    };*/

    Window_MenuCommand.prototype.windowWidth = function() {
        return 240;
    };
    
    Window_MenuCommand.prototype.numVisibleRows = function() {
        return this.maxItems();
    };

})();