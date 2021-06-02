
var database;
var form,game, player;
var gameState= 0;
var playerCount=0;
var allPlayers;
var player1, player2 ; 





function setup(){

    // create the connection with your database
    database = firebase.database();
    createCanvas(displayWidth - 20, displayHeight - 30);
    game = new Game ();
    game.getState (); 
    game.start(); 
    
     

}

function draw(){
    background("white");
    if(playerCount=== 2){
        game.update(1);
    }
    if(gameState === 1 ){
        clear();
        game.play();
    }

    if(gameState === 2){
         game.end();
    }
    //drawSprites();
}