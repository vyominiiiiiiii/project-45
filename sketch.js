var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player, form, game;
var player1, player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score = 0;
var player2score = 0;

var obstacleGroup, obstacle, obstacleImage;

function preload() {
  back_img = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  fruitGroup = new Group();

  obstacleImage = loadImage("mushroom.png");
}
function setup() {
  createCanvas(950, 470);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(back_img);

  if (playerCount === 2 && gameState === 0) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }

  //Write a condition to check 
  //if gameState is 2 then call game.end()
    //Write your code after this line



    //Write your code before this line

   
}
