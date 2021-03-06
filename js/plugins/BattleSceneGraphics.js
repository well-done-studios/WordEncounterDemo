//=============================================================================
// BattleSceneGraphics.js
//=============================================================================

/*:
 * @plugindesc Draws custom animations to the screen.
 * @author Hugh Bagan
 *
 * @help There are no plugin commands.
 * 
 */

Scene_Battle.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createDisplayObjects();

    var rich = PIXI.Sprite.fromImage('')
};

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage('required/assets/basics/bunny.png')

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
});
