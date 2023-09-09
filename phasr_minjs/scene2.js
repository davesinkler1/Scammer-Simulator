var coin = 0;
var compCount = 0;
var giftScam = false;
var EmailScam = false;

class scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }


    create() {
    
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0, 0);

      this.coinLabel = this.add.bitmapText(10, 5, "pixelFont", "COINS: 0", 50);
      
      const button = new Button(165, 100, 'Buy more giftcard scammers (50)', this, () => this.AddScammers());
      const button2 = new Button(165, 110, 'Buy email scamming (100)', this, () => this.AddScammers());

      this.computer = this.add.sprite(config.width / 2 - 50, config.height / 2, "computer").setInteractive();

      this.computer.on('pointerdown', () => giftScam = true);
      this.computer.on('pointerdown', () => this.AddCoin());

      console.log(coin);
 
    
    }

    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    checkCost() {
      if (coin >= 100) {
        return this.checkCost();
      }
    }

    checkCount() {
      for (var i = 0; i < compCount; i++) {
        coin += 5;
      }
    }

    AddCoin() {
      if (giftScam) {
        coin += 5;
        this.checkCount();
        this.coinLabel.text = "COINS: " + coin;
        giftScam = false;
      } else if(EmailScam) {

      }
    }

    AddScammers() {
      if (coin >= 50) {
        this.computer = this.add.sprite(this.getRandomIntInclusive(400, 700), this.getRandomIntInclusive(200, 324), "computer")
        compCount += 1;
        coin -= 50
        this.coinLabel.text = "COINS: " + coin;
      } else {
        console.log("Not enough coins!")
      }
    }

    update() {
      
       
    }
}