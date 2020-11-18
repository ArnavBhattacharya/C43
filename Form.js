class Form {

    constructor(){
        this.button = createButton('Online');
        this.message = createElement('h1');
        this.enterGame = createButton('Enter Game');
        this.code = createElement('h1');
        this.input = null;
    }

    display(){
        this.message.html("Multiplayer Parkour Game");
        
        this.message.position(displayWidth/2 - 180, displayHeight/2 - 240);
        this.button.position(displayWidth/2 - 50, displayHeight/2 - 100);
        this.enterGame.hide();

        this.button.mousePressed(()=>{
            this.button.hide();
            this.message.hide();
            this.enterGame.show();
            this.code.html("Create a Secret code to share with your friends! ");
            this.code.position(displayWidth/2 - 320, displayHeight/2 - 240);
            this.input = createInput('Enter Secret Code!');
            this.input.position(displayWidth/2 - 100, displayHeight/2 - 100);
        })

        
    }

   
}