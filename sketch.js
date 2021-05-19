var STARWARS,starwarsimage;
var start,startimage;
var set,setimage;
var mainbg,mainbgimage;
var main,mainimage
var surv,survimage;
var load,loadimage;
var l1,l1image;
var tat,tatimage;
var ne;
var next,nextimage;
var rnext,rnextimage;
var sp,spimage;
var backtomain,backtomainimage;
var spacebattle,spacebattleimage;
var gamestate="mainmenu";
var texttu,texttuimage;
var backtut;
var sptutpo,sptutpoimage;
var backsptut;
var playsptut,playimage;
var falcontut,falconimage;
var spaceimage,spacetutspb;
var spbtutb;
var spbtutb2;
var spbtutb3;
var tanktut,tankimage;
var groundbattletut,groundbattleimage;
function preload(){
starwarsimage=loadImage("STAR WARS.png");
mainbgimage=loadImage("SF Background.png");
  setimage=loadImage("set ui.png");
  startimage=loadImage("start ui.png");
mainimage=loadImage("main.png");
  groundbattleimage=loadImage("ground battle.png")
  survimage=loadImage("SURV.png");
  loadimage=loadImage("LOAD.png");
  l1image=loadImage("1st.png");
  tatimage=loadImage("tattione.png")
  nextimage=loadImage("next.png")
  rnextimage=loadImage("next-1.png")
  spimage=loadImage("near.png");
  backtomainimage=loadImage("back.png");
  spacebattleimage=loadImage("space battle.png")
  texttuimage=loadImage("tut.png")
  sptutpoimage=loadImage("sp power speed.png")
  playimage=loadImage("play.png");
  falconimage=loadImage("falcon.png")
  spaceimage=loadImage("spa.jpg");
  tankimage=loadImage("Tank.png")
}

function setup() {
  createCanvas(1200,700);
  STARWARS=createSprite(600,100);
  STARWARS.addImage(starwarsimage);
  
  mainbg=createSprite(600,350);
  mainbg.addImage(mainbgimage);
  mainbg.depth=1/100;
  
  start=createSprite(600,350);
  start.addImage(startimage);
  start.scale=0.5;
  
  set=createSprite(1100,80);
  set.addImage(setimage);
  set.scale=0.5;
  
    main=createSprite(950,500);
  main.scale=0.6;
  main.addImage(mainimage);
  
      surv=createSprite(250,500);
  surv.scale=0.6;
 surv.addImage(survimage);
  
  l1=createSprite(200,500);
  l1.addImage(l1image);
  l1.scale=0.2
  
  tat=createSprite(670,350);
  tat.depth=0.1
  tat.scale=0.9
  tat.addImage(tatimage);
  
  ne=createSprite(600,350);
  ne.depth=100
  
next=createSprite(1100,350);
  next.addImage(nextimage);
  
 rnext=createSprite(100,350);
 rnext.addImage(rnextimage);
  
  next.scale=0.2
  rnext.scale=0.2
  
  sp=createSprite(2000,350);
  sp.scale=0.9;
  sp.depth=0.1
  sp.addImage(spimage)
  
  backtomain=createSprite(100,100);
  backtomain.scale=0.4
  backtomain.addImage(backtomainimage);
  
  spacebattle=createSprite(250,200);
  spacebattle.addImage(spacebattleimage);
  spacebattle.scale=0.5;
  
  texttu=createSprite(600,60);
  texttu.addImage(texttuimage);
  texttu.scale=0.6;
  
  backtut=createSprite(100,50);
  backtut.addImage(backtomainimage);
  backtut.scale=0.4
  
  sptutpo=createSprite(700,500);
  sptutpo.scale=0.5
  sptutpo.addImage(sptutpoimage);
  
  backsptut=createSprite(100,650);
  backsptut.scale=0.4;
  backsptut.addImage(backtomainimage);
  
  playsptut=createSprite(1100,650);
  playsptut.addImage(playimage);
  playsptut.scale=0.4;
  
  falcon=createSprite(600,500);
  falcon.scale=0.3
  falcon.addImage(falconimage);
  
  spacetutspb=createSprite(600,350);
  spacetutspb.scale=2.8
  spacetutspb.depth=0.1/2
  spacetutspb.addImage(spaceimage);
  
  spbtutb=createSprite(0,350,5,1000)
    spbtutb2=createSprite(700,700,1500,5)
  spbtutb3=createSprite(1200,350,5,1000);
  
  groundbattletut=createSprite(900,200);
  groundbattletut.addImage(groundbattleimage);
  groundbattletut.scale=0.5;
  
  tanktut=createSprite(600,350);
  tanktut.visible=false;
  tanktut.addImage(tankimage);
  
}

function draw() {
 background("black");
      falcon.collide(spbtutb);
    falcon.collide(spbtutb2);
    falcon.collide(spbtutb3);
   
  if(gamestate==="mainmenu"){
        camera.x=600
    playsptut.visible=false;
    tanktut.visible=false;
    groundbattletut.visible=false;
    spacetutspb.visible=false;
    falcon.visible=false;
    surv.visible=true;
    backsptut.visible=false;
    texttu.visible=false;
    main.visible=true;
    sptutpo.visible=false;
    ne.visible=false;
    spacebattle.visible=false;
    next.visible=false;
    mainbg.visible=true;
    STARWARS.visible=true;
    set.visible=true;
    l1.visible=false;
    start.visible=true;
      spbtutb3.visible=false;
    spbtutb.visible=false;
    spbtutb2.visible=false;
    backtut.visible=false;
    tat.visible=false;
    rnext.visible=false;
    sp.visible=false;
    backtomain.visible=false;
    if(mousePressedOver(main)&&gamestate==="mainmenu"){
      gamestate="mainstory"
    }
        if(mousePressedOver(start)&&gamestate==="mainmenu"){
gamestate="tut"
    }
    if(mousePressedOver(surv)&&gamestate==="mainmenu"){
gamestate="surv";
    }
  }
  if(gamestate==="mainstory"){

surv.visible=false;
    main.visible=false;
    surv.visivle=false;
    tat.visible=true;
camera.x=ne.x;
    next.visible=true;
    l1.visible=true;
    STARWARS.visible=false;
    set.visible=false;
    start.visible=false;
    backtomain.visible=true;
    sp.visible=true;
    mainbg.visible=false;
    rnext.visible=true;
        if(mousePressedOver(next)){
      ne.x=ne.x+5
          next.x=next.x+5
       rnext.x=rnext.x+5
          backtomain.x=backtomain.x+5
    }
            if(mousePressedOver(rnext)){
      ne.x=ne.x-5
          rnext.x=rnext.x-5
              next.x=next.x-5
              backtomain.x=backtomain.x-5
    }
    if(mousePressedOver(backtomain)&&gamestate==="mainstory"){
      gamestate="mainmenu"
    }
  }
  if(gamestate==="surv"){
start.visible=false;
          spbtutb3.visible=false;
    spbtutb.visible=false;
    spbtutb2.visible=false;
    STARWARS.visible=false;
    surv.visible=false;
    main.visible=false;
    set.visible=false;
  }
  if(gamestate==="tut"){
    falcon.visible=false;
        mainbg.visible=true;
    tanktut.visible=false;
    sptutpo.visible=false
       groundbattletut.visible=true;
          spbtutb3.visible=false;
    spbtutb.visible=false;
    spbtutb2.visible=false;
   backtut.visible=true;
    start.visible=false;
    playsptut.visible=false;
    STARWARS.visible=false;
   surv.visible=false;
    texttu.visible=true;
    main.visible=false;
    set.visible=false;
    spacebattle.visible=true;
    backsptut.visible=false;
    if(mousePressedOver(backtut)&&gamestate==="tut"){
gamestate="mainmenu"
    }
    if(mousePressedOver(spacebattle)&&gamestate==="tut"){
gamestate="spacebattletut";
    }
        if(mousePressedOver(groundbattletut)&&gamestate==="tut"){
gamestate="groundbattletutplay"
    }
}
  if(gamestate==="spacebattletut"){
spacebattle.visible=false;
    groundbattletut.visible=false;
    backtut.visible=false;
    spacetutspb.visible=false;
    falcon.visible=false;
    texttu.visible=false;
    playsptut.visible=true;
    mainbg.visible=false;
    sptutpo.visible=true;
    backsptut.visible=true;
    falcon.collide(spbtutb);
    falcon.collide(spbtutb2);
    falcon.collide(spbtutb3);
    if(mousePressedOver(backsptut)&&gamestate==="spacebattletut"){
gamestate="tut";
    }
    if(mousePressedOver(playsptut)&&gamestate==="spacebattletut"){
      gamestate="spacebattleplay";
    }
    if(mousePressedOver(groundbattletut)&&gamestate==="spacebattletut"){
gamestate="groundbattletutplay"
    }
    fill("orange");
    textFont("IMPACT");
    textSize(80)
    text("SPACE WAE TUTORIAL",300,100);
    textSize(30)
    textFont("calbri");
    fill("yellow")
    text("This is tutorial of Space Battle",20,130)
    text("This is for only practise",20,170)
     textFont("IMPACT");
    fill("cyan")
    text("How to play",20,260)
        textSize(30)
    textFont("calbri");
    fill("yellow")
    text("Press RIGHT and Left to move your SpaceShip",20,310)
    text("Press Space to shoot enemy",20, 360)
    text("Take speed power ups and lazer powerups to shoot",20,410)
  }
  if(gamestate==="spacebattleplay"){
falcon.visible=true;
    sptutpo.visible=false;
    playsptut.visible=false;
    spacetutspb.visible=true;
    backsptut.visible=false;

    if(keyDown("left")){
     falcon.rotation=-10;
falcon.x=falcon.x-5
    }
        if(keyDown("right")){
             falcon.rotation=10;
falcon.x=falcon.x+5
    }
    if(keyDown("up")){
falcon.y=falcon.y-5
    }
    if(keyDown("down")){
falcon.y=falcon.y+5
    }
    spacetutspb.velocityY=30
    if(spacetutspb.y>=700){
spacetutspb.y=350
    }
    
  }
  if(gamestate==="groundbattletutplay"){
groundbattletut.visible=false;
     texttu.visible=false;
     spacebattle.visible=false;
    mainbg.visible=false;
     backtut.visible=false;
    tanktut.visible=true;
  }
  drawSprites();
}
