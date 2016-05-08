$(init)
function init() { 

  // setInterval(function() {
  //   var keeperPos = parseInt($('#keeper').css('left'));
  //   console.log(keeperPos);
  // }, 500);


 

  $("#btLeftBottom").click(function() {
    // $(".ball").animate({margin: "-20px 0 0 210px"}, 1500);
    // $(".ball").animate({margin: "-40px 0 0 250px"}, 1000);

    // $('.panel:nth-child(2)').delay(2000).css('background-position','0px top');
       // positionBall("-20","0","0","210");
      var move = Math.floor(Math.random() * 3) + 1;
      
      // ballInside("-40", "0", "0", "250");
      keeperInstruct(move);
      MoveBall(-20, 210);
  })

  $("#btRestart").click(function() {
      MoveBall("150", "345");
  })
  var ballInside = function(top,left) {
      
      //LeftBottom
      //margin: -40px 0 0 250px;
      //margin: -25px 0 0 260px;

      setTimeout(function() {
          $(".ball").css({"margin-top": "-40px","margin-right": "0px","margin-bottom": "0px","margin-left": "250px"});
      }, 900);
      setTimeout(function() {
          $(".ball").css({"margin-top": "-25px","margin-right": "0px","margin-bottom": "0px","margin-left": "260px"});
      }, 1500);
  }

  var MoveBall = function(top, left) {
    $(".ball").css({"margin-top": top,"margin-right": "0px","margin-bottom": "0px","margin-left": left});
    
    ballInside();
  }

  // $("#field").click(function(e) {
  //     var offset = $(this).offset();
  //     console.log("X" + (e.pageX - offset.left));
  //     console.log("Y" + (e.pageY - offset.top));
  //   })
  
  
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

}

    