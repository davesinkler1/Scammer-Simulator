class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "10.png")
        this.load.spritesheet("computer", "assets/spritesheets/computers2.png", {frameWidth: 16, frameHeight: 21});
        this.load.bitmapFont("pixelFont", "assets/fonts/font.png", "assets/fonts/font.xml");
        this.load.image("email", "assets/images/envelope_closed.png");
    }

    create() {
        this.anims.create({
          key: "computers",
          frames: this.anims.generateFrameNumbers("comp"),
          frameRate: 50,
          repeat: -1
        });
        
        this.scene.start("playGame")
    }
}