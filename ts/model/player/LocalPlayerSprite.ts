import PlayerSprite from 'model/player/PlayerSprite';
import { Layer } from 'graphics/Layer';
import Timer from 'time/Timer';
import ResourceManager from 'ResourceManager';
import Game from 'ui/Game';
import LocalPlayer from 'model/player/LocalPlayer';
import Font from 'Font';
import Palette from 'Palette';
import Viewport from 'Viewport';
import Listener from 'Listener';
import Player from 'model/player/Player';
import Prize from 'model/Prize';
import Flag from 'model/Flag';

export default class LocalPlayerSprite extends PlayerSprite {
  private resourceManager_ : ResourceManager;
  private localPlayer_ : LocalPlayer;

  constructor(game : Game, localPlayer : LocalPlayer) {
    super(game, localPlayer, Layer.LOCAL_PLAYER);

    this.resourceManager_ = game.getResourceManager();
    this.localPlayer_ = localPlayer;

    Listener.add(localPlayer, 'collect_prize', this.collectPrize_.bind(this));
    Listener.add(localPlayer, 'bounce', this.bounce_.bind(this));
    Listener.add(localPlayer, 'multifire', this.toggleMultifire_.bind(this));
    Listener.add(localPlayer, 'capture_flag', this.captureFlag_.bind(this));
  }

  public render(viewport : Viewport) {
    if (!this.player_.isValid()) {
      this.game_.getPainter().unregisterDrawable(this.layer_, this);
      return;
    }

    let context = viewport.getContext();
    let dimensions = viewport.getDimensions();

    if (!this.player_.isAlive()) {
      let millis = Timer.ticksToMillis(this.localPlayer_.getRespawnTimer());
      let seconds = Math.floor(millis / 1000);
      let tenths = Math.floor((millis % 1000) / 100);
      let time = seconds + '.' + tenths;
      context.save();
      context.font = Font.playerFont().toString();
      context.fillStyle = Palette.friendColor();
      context.fillText(time, dimensions.width / 2, dimensions.height / 2);
      context.restore();
      return;
    }

    this.localPlayer_.getExhaust().forEach(function (e) {
      e.render(viewport);
    });

    super.render(viewport);

    let x = Math.floor(dimensions.width / 2);
    let y = Math.floor(dimensions.height / 2);
    if (this.localPlayer_.isSafe()) {
      context.save();
      context.font = Font.playerFont().toString();
      context.fillStyle = Palette.friendColor();
      context.textAlign = 'center';
      context.textBaseline = 'top';
      context.fillText('Safety - weapons disabled.', x, y - 50);
      context.restore();
    }
  }

  /** Called when the local player captures a flag for the team. */
  private captureFlag_(flag : Flag) {
    this.resourceManager_.playSound('flag');
  }

  /** Called when the local player collects a prize. */
  private collectPrize_(player : Player, prize : Prize | null) {
    this.resourceManager_.playSound('prize');
  }

  /** Called when the local player bounces off a wall. */
  private bounce_(player : Player) {
    // If the player was speeding, play a sound on the bounce.
    if (player.getVelocity().magnitude() > 1) {
      this.resourceManager_.playSound('bounce');
    }
  }

  /** Called when the local player toggles multifire. */
  private toggleMultifire_(player : LocalPlayer, enabled : boolean) {
    let resource = enabled ? 'multion' : 'multioff';
    this.resourceManager_.playSound(resource);
  }
}