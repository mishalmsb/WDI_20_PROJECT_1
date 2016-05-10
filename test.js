$(init)
function init() { 


  $("#btRest").hide();
  $("#goalDiv").hide();
  $("#missedDiv").hide();
  $("#plScored").hide();
  $('#plMove').text("Player 1 Turn");
  var goal = "Goal";
  $( "#plMove" ).css('margin-left','0px');
  $('#plMove').css('width','100px');
  $('#plMove').css('text-align','left');

  for (var i = 10; i < 100; i+=10) {
    setTimeout(function() {
        console.log(i);
     },1000);
    console.log($( "#plMove" ).css('margin-left'));
    $( "#plMove" ).css('margin-left',i);
    $('#plMove').text(goal);
 
     
  }

//   var numbGames = 10;

//   //background sound and play goal and missed
//   var goalSound = function (goal) {
//       var gAudio = document.getElementById("audioGoal");
//       if (goal=="in") {
//           gAudio.src = "sounds/goal2.mp3";
//       } else if (goal=="out"){
//           gAudio.src = "sounds/missed.mp3";
//       } 
//       gAudio.play();
//       var bgAudio = document.getElementById("audioCrowd");
//       bgAudio.src = "sounds/crowd2.mp3";
//       bgAudio.loop = true;
//       bgAudio.play();
//   }
//   goalSound();

//   var startKickOff = function(ballPosX, ballPosY, plMove) {
//       var comMove = computerMove(plMove);
//       var counter = parseInt($('#counterDiv').text()) + 1;

//       animePlayer();

//       checkMoves(plMove,comMove);
    
//   };
//   //hide and shows divs depending on ocasion
//   var hideAndShow = function(game) {
// // send this to css
//       if (game == "new") {
//           $("#btRest").hide();
//           $("#btWrap").show();
//       }

//       $("#btRest").hide();
//       $("#goalDiv").hide();
//       $("#missedDiv").hide();
//       $("#plScored").hide();

//   }

//   //used with the button restart game
//   var restartGame = function() {
//       $('#plScored').text("");
//       $('#p1ResultDiv').text(0);
//       $('#p2ResultDiv').text(0);
//       $('#counterDiv').text(0);
//       $('#plMove').text("Player 1 Turn");

//       hideAndShow("new");
//   }

//   //buttons events
//   $("button").click(function() {
//     if (this.id=="btLeftBottom"){startKickOff(-25,210,1)}
//     else if (this.id=="btLeftCentre"){startKickOff(-55,213,2)}
//     else if (this.id=="btLeftTop"){startKickOff(-90,213,3)}
//     else if (this.id=="btCentreCentre"){startKickOff(-40,345,4)}
//     else if (this.id=="btCentreTop"){startKickOff(-90,345,5)}
//     else if (this.id=="btRigthBottom"){startKickOff(-30,475,6)}
//     else if (this.id=="btRigthCentre"){startKickOff(-55,475,7)}
//     else if (this.id=="btRigthTop"){startKickOff(-90,475,8)}
//     else if (this.id=="btRestart"){restartGame()}
//   });

//   var animePlayer = function() {
//       $('#plImg1').fadeOut("80");
//       $('#plImg2').fadeIn("90");
//       $('#plImg2').fadeOut("350");
//       $('#plImg3').fadeIn("300");
//       $('#plImg3').fadeOut("500");
//       $('#plImg1').fadeIn("90");
//   }


}