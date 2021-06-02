class Game {
    constructor(){

    }
   
    getState(){
        var gameStateRef = database.ref('gameState');   
        gameStateRef.on("value",function(data){
            gameState = data.val();   // gameState is the variable - use a "="
        });
    }

    update(state){
        database.ref('/').update({
            gameState: state        // gameState is the node in the DB - use a ':'
        });
    }

    start(){ 
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
            console.log("start " +playerCount);
        }
        
        }    

    play(){
        form.hide();
        textSize(30);
        text("Results",300,100);

        

        Player.getPlayerInfo();
        
        // megh : 0 // index =1
        // abcd : 0  //index = 2
        // eeee : 0 // index = 3
        // ffsdfsdf : 0

        // cars = [car1,car2,car3,car4];
        // cars[0]
        // index=1 ----> player1-->cars[0]---cars[index-1]

        if(allPlayers != undefined){
           
            var display_position = 130;
            for(var plr in allPlayers ){
                //display_position +=20;
                
                
                
                if(allPlayers[plr].answer==="3"){
                    fill("green")
                   
                }
                else {
                    fill("red")
                }
                display_position +=20 ;
                textSize(18);
                 text(allPlayers[plr].name + " : " + allPlayers[plr].answer,220,display_position);
            }
        }

      

    }

    end(){
       console.log ("game End");
    }
}