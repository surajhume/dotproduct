export default class Image {
  private node_ : HTMLImageElement;
  private readonly tilesPerRow_ : number;
  private readonly tilesPerCol_ : number;

  constructor(tilesPerRow? : number, tilesPerCol? : number) {
    this.node_ = <HTMLImageElement> document.createElement('img');
    this.tilesPerRow_ = tilesPerRow || 1;
    this.tilesPerCol_ = tilesPerCol || 1;
  }

  public isLoaded() : boolean {
    return !!this.node_.src && this.node_.complete;
  }

  public load(resourceName : string, loadCb? : (string) => void) {
    this.node_.src = resourceName;
    if (loadCb) {
      this.node_.addEventListener('load', loadCb.bind(new String(resourceName)));
    }
  }

  public render(context : CanvasRenderingContext2D, x : number, y : number, tileNum? : number) {
    if (!this.isLoaded()) {
      return;
    }

    if (tileNum === undefined) {
      context.save();
      context.drawImage(this.node_, x, y, this.node_.width, this.node_.height);
      context.restore();
    } else {
      if (tileNum < 0 || tileNum >= this.numTiles || !this.isLoaded()) {
        return;
      }

      let tileWidth = this.tileWidth;
      let tileHeight = this.tileHeight;

      let row = Math.floor(tileNum / this.tilesPerRow_);
      let column = tileNum % this.tilesPerRow_;

      context.save();
      context.drawImage(this.node_,
        column * tileWidth,
        row * tileHeight,
        tileWidth,
        tileHeight,
        x, y,
        tileWidth,
        tileHeight);
      context.restore();
    }
  }

  public get numTiles() : number {
    return this.tilesPerRow_ * this.tilesPerCol_;
  }

  public get tileWidth() : number {
    return Math.floor(this.node_.width / this.tilesPerRow_);
  }

  public get tileHeight() : number {
    return Math.floor(this.node_.height / this.tilesPerCol_);
  }
}
