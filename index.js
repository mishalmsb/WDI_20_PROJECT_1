$(init)
function init() { 

  // for (var i = 0; i < 10; i++) {
  //   //console.log(Math.floor(Math.random()*(3-1+1))+1);
  //    console.log(Math.floor(Math.random()*(5-4+1))+4);
  //    //console.log(Math.floor(Math.random()*(8-6+1))+6);
  // }
     
var writeHtml = function(gameNumber, winner) {

}
 
var animePlayer = function() {
    $('#plImg1').fadeOut("80");
    $('#plImg2').fadeIn("90");
    $('#plImg2').fadeOut("350");
    $('#plImg3').fadeIn("300");
    $('#plImg3').fadeOut("500");
    $('#plImg1').fadeIn("90");
}


  $("button").click(function() {
    
      // console.log(this.id; 
    if (this.id=="btLeftBottom"){startKickOff(-30,210,1)}
    else if (this.id=="btLeftCentre"){startKickOff(-55,213,2)}
    else if (this.id=="btLeftTop"){startKickOff(-90,213,3)}
    else if (this.id=="btCentreCentre"){startKickOff(-40,345,4)}
    else if (this.id=="btCentreTop"){startKickOff(-90,345,5)}
    else if (this.id=="btRigthBottom"){startKickOff(-30,475,6)}
    else if (this.id=="btRigthCentre"){startKickOff(-55,475,7)}
    else if (this.id=="btRigthTop"){startKickOff(-90,475,8)}
    else if (this.id=="btRestart"){MoveBall(150, 345); keeperMove(0,310,125)}

  });

  var startKickOff = function(ballPosX, ballPosY, plMove) {
      animePlayer();
      var comMove = computerMove(plMove);
      checkMoves(plMove,comMove);
      console.log(plMove,comMove);
      keeperInstruct(comMove);
      MoveBall(ballPosX, ballPosY);
      keeperFall();
      setTimeout(function() {
          MoveBall(150, 345); 
          keeperMove(0,310,125);
          console.log("timeout");
          writeHtml();
      },3000);
  };

  var computerMove = function(plMove) {
    if (plMove>=1 && plMove<=4) {
        return (Math.floor(Math.random()*(4-1+1))+1);
    } 
    else if (plMove>=5 && plMove<=8) {
        return (Math.floor(Math.random()*(8-5+1))+5);
    }

     
    // return Math.floor((Math.random() * 10) + 1);
  }

  var ballInside = function(inOut) {

      if(inOut=="in") {
          setTimeout(function() {
              $(".ball").css({"margin-top": "-40px","margin-right": "0px","margin-bottom": "0px","margin-left": "250px"});
          }, 900);
          // setTimeout(function() {
          //     $(".ball").css({"margin-top": "-25px","margin-right": "0px","margin-bottom": "0px","margin-left": "260px"});
          // }, 1500);
      } else if (inOut=="out") {
 
          setTimeout(function() {
              $(".ball").css({"margin-top": "30px","margin-right": "0px","margin-bottom": "0px","margin-left": "170px"});
          }, 900);
      }

  }

  var MoveBall = function(top, left) {
    $(".ball").css({"margin-top": top,"margin-right": "0px","margin-bottom": "0px","margin-left": left});
    
  }

  var keeperInstruct = function(move) {

      switch(move) {
          case 1: //keeperMoveLeftBottom
            keeperMove("-90","205","140");
            console.log(move)
              break;
          case 2: //keeperMoveLeftCentre
            keeperMove("-90","205","120");
            console.log(move)
            break;          
          case 3: //keeperMoveLeftTop
            keeperMove("-90","205","90");
            console.log(move)
            break;

          case 4: // keeperMoveCenter
            keeperMove("0","310","135");
            console.log(move)
            break;          
          case 5: // keeperMoveCenterTop
            keeperMove("0","310","105");
            console.log(move)
            break;

          case 6: // keeperMoveRigthBottom
            keeperMove("90","410","140");
            console.log(move)
            break;          
          case 7: //keeperMoveRigthCentre
            keeperMove("90","410","120");
            console.log(move)
            break;          
          case 8: //keeperMoveRigthTop
            keeperMove("90","410","90");
            console.log(move)
            break; 

          default:
              console.log(move);
      }
  }
  
  var keeperMove = function(rotate,margLeft,margTop) {
    console.log(margTop);
      $("#keeper").css({
      
        "transform": "rotate("+rotate+"deg)", 
        "margin-left": +margLeft+"px",
        "margin-top": +margTop+"px"

      });
  }

  var keeperFall = function() {
      setTimeout(function() {
          $("#keeper").css({
            "transition": "1s ease-in-out",
            "margin-top": "140px",
            // "transform": "rotate(0deg)"
          });
      }, 800);
      
      setTimeout(function() {
          $("#keeper").css({
            "transition": "1s ease-in-out",
            "transform": "rotate(0deg)"
          });
      }, 1000);
      
  }

  var playerMove = function() {

  }

  var checkMoves = function(playerMove, computerMove) {
      if (playerMove==computerMove) {
          console.log("defense");
          ballInside("out");
      } else {
          console.log("goal");
          ballInside("in");
      }
  }

  // $("#field").click(function(e) {
  //     var offset = $(this).offset();
  //     console.log("X" + (e.pageX - offset.left));
  //     console.log("Y" + (e.pageY - offset.top));
  //   })
  


}

    