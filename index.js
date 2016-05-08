$(init)
function init() { 


  $("#btLeftBottom").click(function() {
      var move = Math.floor(Math.random() * 3) + 1;
      checkMoves("1",move);
      keeperInstruct(move);
      MoveBall(-20, 210);
  })

  $("#btRestart").click(function() {
      MoveBall("150", "345");
  })
  var ballInside = function(goal) {

      if(goal) {
          setTimeout(function() {
              $(".ball").css({"margin-top": "-40px","margin-right": "0px","margin-bottom": "0px","margin-left": "250px"});
          }, 900);
          setTimeout(function() {
              $(".ball").css({"margin-top": "-25px","margin-right": "0px","margin-bottom": "0px","margin-left": "260px"});
          }, 1500);
      }

  }

  var MoveBall = function(top, left) {
    $(".ball").css({"margin-top": top,"margin-right": "0px","margin-bottom": "0px","margin-left": left});
    
    
  }

  
  $("#btLeftCentre").click(function() {

      console.log(Math.floor(Math.random() * 9) + 1);
  })


  var keeperInstruct = function(move) {

      switch(move) {
          case 1: //keeperMoveLeftBottom
            keeperMove("-90","185","160");
            console.log(move)
              break;
          case 2: //keeperMoveLeftCentre
            keeperMove("-90","185","120");
            console.log(move)
            break;          
          case 3: //keeperMoveLeftTop
            keeperMove("-90","185","90");
            console.log(move)
            break;         
          case 4: // keeperMoveCenter
            keeperMove("-90","185","160");
            console.log(move)
            break;          
          case 5: // keeperMoveTop
            keeperMove("-90","185","160");
            console.log(move)
            break;          
          case 6: // keeperMoveRigthBottom
            keeperMove("-90","185","160");
            console.log(move)
            break;          
          case 7: //keeperMoveRigthCentre
            keeperMove("-90","185","160");
            console.log(move)
            break;          
          case 8: //keeperMoveRigthTop
            keeperMove("-90","185","160");
            console.log(move)
            break; 
          default:
              console.log(move);
      }
  }
  
  var keeperMove = function(rotate,margLeft,margRigth) {
    console.log(margRigth);
      $("#keeper").css({
      
        "transform": "rotate("+rotate+"deg)", 
        "margin-left": +margLeft+"px",
        "margin-top": +margRigth+"px"

      });
  }

  var checkMoves = function(playerMove, computerMove) {
      if (playerMove==computerMove) {
          console.log("defense");
      } else {
          console.log("goal");
          ballInside(true);
      }
  }
  // $("#field").click(function(e) {
  //     var offset = $(this).offset();
  //     console.log("X" + (e.pageX - offset.left));
  //     console.log("Y" + (e.pageY - offset.top));
  //   })
  


}

    