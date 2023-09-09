var emailScam = 0;
var EmailScam = false;

class options {
    constructor(scene) {
        var y = scene.y;
        super(scene, y, "options");
    }

    AddEmailScams() {
        if (scene2.checkCost()) {
            emailScam += 1;
            scene2.EmailScam = true;
            this.EmailLoop()
            coin -= 100
            this.coinLabel.text = "COINS: " + coin;
            this.email.velocity.y =+ 250;
            this.email.on('pointerdown', () => emailScam = true);
            this.email.on('pointerdown', () => this.AddCoin());

        }
    }

   AddCoin() {
    if (EmailScam) {
        
    }
   }

    EmailLoop() {
        for(var i = 0; i < emailScam; i++) {
            this.email = this.add.image(scene2.getRandomIntInclusive(400, 700), 5, "email").setInteractive();
        }
    }
}