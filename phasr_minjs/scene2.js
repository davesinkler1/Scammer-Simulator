var coin = 200;
var police = 0;
var opsec = 0;
var compCount = 0;
var emailCount = 0;
var cardCount = 0;
var giftScam = false;
var EmailScam = false;
var cardScam = false;
var VPNSec = false;
var RDPServ = false;

class scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }


    create() {
    
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0, 0);

      this.coinLabel = this.add.bitmapText(10, 5, "pixelFont", "COINS: 0", 50);
      this.secLabel = this.add.bitmapText(300, 5, "pixelFont", "SECURITY: 0/100", 50);
      this.poLabel = this.add.bitmapText(800, 5, "pixelFont", "POLICE: 0/100", 50);
      this.computer = this.add.sprite(340, 100, "computer").setInteractive();
      
      const button = new Button(165, 100, 'Buy more giftcard scammers (50)', this, () => this.AddScammers());
      const button2 = new Button(135, 150, 'Buy email scamming (100)', this, () => this.AddEmailScammers());
      const button3 = new Button(155, 200, 'Buy card swiping scheme(200)', this, () => this.AddCardScammers());
      const button4 = new Button(119, 250, 'Buy VPN Provider (20)', this, () => this.getSecurity(), VPNSec = true);
      const button5 = new Button(109, 300, 'Buy RDP Server (30)', this, () => this.getSecurity(), RDPServ  = true);

      this.computer.on('pointerdown', () => giftScam = true);
      this.computer.on('pointerdown', () => this.AddCoin());
    
  }

  getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getSecurity() {
    if(VPNSec) {
      coin -= 20;
      opsec += 10;
      this.coinLabel.text = "COINS: " + coin;
      this.secLabel.text = "SECURITY: " + opsec + "/100";
    } else if(RDPServ) {
      coin -= 30;
      opsec += 20;
      this.coinLabel.text = "COINS: " + coin;
      this.secLabel.text = "SECURITY: " + opsec + "/100";
    }

  }

  checkSecurity() {
    if (opsec >= 10) {
      police -= 10;
      opsec -= 2;
      this.secLabel.text = "SECURITY: " + opsec + "/100";
    } else if (opsec >= 20) {
      police -= 20;
      opsec -= 4;
      this.secLabel.text = "SECURITY: " + opsec + "/100";
    }
  }
  

  checkCount() {
      if (giftScam) {
          for (var i = 0; i < compCount; i++) {
              coin += 5;
          }
      } else if(EmailScam) {
          for(var i = 0; i < emailCount; i++) {
              coin += 7;
          }
      } else if(cardScam) {
        for(var i = 0; i < cardCount; i++) {
          coin += 9;
        }
      }
    }

    AddScammers() {
      if (coin >= 50) {
            this.computer = this.add.sprite(this.getRandomIntInclusive(400, 700), this.getRandomIntInclusive(200, 324), "computer");
            compCount += 1;
            coin -= 50
            this.coinLabel.text = "COINS: " + coin;
          } else {
              console.log("Not enough coins!")
          }
    }

    AddEmailScammers() {
      if (coin >= 100 && emailCount == 0) {
        emailCount += 1;
        coin -= 100
        this.email = this.add.image(280, 150, "email").setInteractive();
        this.email.on('pointerdown', () => EmailScam = true);
        this.email.on('pointerdown', () => this.AddCoin());
        this.coinLabel.text = "COINS: " + coin;
      } else if(coin >= 100 && emailCount >= 1 && emailCount < 5) {
        emailCount += 1;
        coin -= 100
        this.email.destroy();
        this.email = this.add.image(280, 150, "email2").setInteractive();
        this.email.on('pointerdown', () => EmailScam = true);
        this.email.on('pointerdown', () => this.AddCoin());
        this.coinLabel.text = "COINS: " + coin;
      } else if(coin >= 100 && emailCount >= 5 && emailCount < 10) {
        emailCount += 1;
        coin -= 100
        this.email.destroy();
        this.email = this.add.image(280, 150, "email3").setInteractive();
        this.email.on('pointerdown', () => EmailScam = true);
        this.email.on('pointerdown', () => this.AddCoin());
        this.coinLabel.text = "COINS: " + coin;
      }
  }

  AddCardScammers() {
    if (coin >= 200 && cardCount == 0) {
      cardCount += 1;
      coin -= 200
      this.card = this.add.image(325, 200, "ccard").setInteractive();
      this.card.on('pointerdown', () => cardScam = true);
      this.card.on('pointerdown', () => this.AddCoin());
      this.coinLabel.text = "COINS: " + coin;
    } else if(coin >= 200 && cardCount >= 1 && cardCount < 5) {
      cardCount += 1;
      coin -= 200
      this.email.destroy();
      this.email = this.add.image(325, 200, "ccard2").setInteractive();
      this.email.on('pointerdown', () => cardScam = true);
      this.email.on('pointerdown', () => this.AddCoin());
      this.coinLabel.text = "COINS: " + coin;
    } else if(coin >= 200 && cardCount >= 5 && cardCount < 10) {
      cardCount += 1;
      coin -= 200
      this.email.destroy();
      this.email = this.add.image(325, 200, "ccard3").setInteractive();
      this.email.on('pointerdown', () => cardScam = true);
      this.email.on('pointerdown', () => this.AddCoin());
      this.coinLabel.text = "COINS: " + coin;
    }
}

 AddCoin() {
  if (giftScam) {
      coin += 5;
      police += 5;
      this.checkSecurity();
      this.checkCount();
      this.coinLabel.text = "COINS: " + coin;
      this.poLabel.text = "POLICE: " + police + "/100";
      giftScam = false;
    } else if(EmailScam) {
      if ( emailCount >= 2 && emailCount < 5) {
        console.log("email money2");
        coin += 10;
        police += 5;
        this.checkSecurity();
        this.checkCount();
        this.coinLabel.text = "COINS: " + coin;
        this.poLabel.text = "POLICE: " + police + "/100";
        EmailScam = false;
        return
      } else if ( emailCount >= 6 && emailCount < 10) {
        console.log("email money3");
        coin += 15;
        police += 5;
        this.checkSecurity();
        this.checkCount();
        this.coinLabel.text = "COINS: " + coin;
        this.poLabel.text = "POLICE: " + police + "/100";
        EmailScam = false;
        return
      }
      console.log("email money");
      coin += 7;
      police += 5;
      this.checkSecurity();
      this.checkCount();
      this.coinLabel.text = "COINS: " + coin;
      this.poLabel.text = "POLICE: " + police + "/100";
      EmailScam = false;
    } else if(cardScam) {
      if ( cardCount >= 2 && cardCount < 5) {
        console.log("card money2");
        coin += 20;
        police += 10;
        this.checkSecurity();
        this.checkCount();
        this.coinLabel.text = "COINS: " + coin;
        this.poLabel.text = "POLICE: " + police + "/100";
        cardScam = false;
        return
      } else if ( cardCount >= 6 && cardCount < 10) {
        console.log("card money3");
        coin += 25;
        police += 10;
        this.checkSecurity();
        this.checkCount();
        this.coinLabel.text = "COINS: " + coin;
        this.poLabel.text = "POLICE: " + police + "/100";
        cardScam = false;
        return
      }
      console.log("card money");
      coin += 9;
      police += 10;
      this.checkSecurity();
      this.checkCount();
      this.coinLabel.text = "COINS: " + coin;
      this.poLabel.text = "POLICE: " + police + "/100";
      cardScam = false;
    }
}

update() {

}

}