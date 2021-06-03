class Form{
    constructor(){
        this.input1= createInput("Name"); 
        this.input2= createInput("Answer"); 
        this.title = createElement('h2');
        this.button = createButton("Submit");
        this.greeting = createElement('h2');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
        

    }    
    
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
       
        this.title.html('quiz game');
        this.title.position(displayWidth/2 - 50, 50);
        this.input1.position(displayWidth/2 - 90 ,320);
        this.input2.position(displayWidth/2 - 90 ,390);
        this.button.position(displayWidth/2 - 50, 350); 
        this.question.position(displayWidth/2 - 100, 150 );
        this.option1.position(displayWidth/2 - 100, 200 );
        this.option2.position(displayWidth/2 - 100, 220 );
        this.option3.position(displayWidth/2 - 100, 240 );
        this.option4.position(displayWidth/2 - 100, 260 );
        this.question.html('what is the capital of india?');
        this.option1.html('1.gujarat');
        this.option2.html('2.tibet');
        this.option3.html('3.new delhi');
        this.option4.html('4.vadodara');
      

        this.button.mousePressed(()=>{
            console.log("Pressed!");
           this.input1.hide();
           this.input2.hide();
           this.button.hide();
           this.option1.hide();
           this.option2.hide();
           this.option3.hide();
           this.option4.hide();

            player.name = this.input1.value();
            player.answer = this.input2.value();

            playerCount +=1;
            player.index = playerCount;
            
            console.log("PC  "+playerCount);
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("waiting for answer..");
            this.greeting.position(displayWidth/2 - 100 ,300);
            
        });

        



    }

}