


$(init)
function init() { 

  // setInterval(function() {
  //   var keeperPos = parseInt($('#keeper').css('left'));
  //   console.log(keeperPos);
  // }, 500);


 
  
 

  function getSliderX() {
        // $("#slide").change(function() {
        //   updateSlider(this.value);
        //   console.log(this.value);
        // })
        // console.log($("#slide").val());
        return $("#slide_x").val()
  }
  function getSliderY() {
        // $("#slide").change(function() {
        //   updateSlider(this.value);
        //   console.log(this.value);
        // })
        // console.log($("#slide").val());
        return $("#slide_y").val()
  }

  
  

  $("#btLeftBottom").click(function() {
      // $('.ball').css("transform","translate(-130px,-245px)");
      // console.log("button test");
      // console.log($('#txBox1').val());
 
      // $('.ball').css("transform","translate("+getSliderX()+"px," + getSliderY() + "px)");

      positionBall("-20","0","0","210");
      
      // ballInside();
  })


  $("#btRestart").click(function() {
       
      // console.log($('#txBox1').val());
      
      positionBall("150","0","0","345");

 
      // X358
      // Y373

  })

 var positionBall = function(top,right,bottom,left) {

    $(".ball").css({"margin-top":top+"px","margin-right":right+"px","margin-bottom":bottom+"px","margin-left":left+"px"});
 }

  


  $("#field").click(function(e) {
      var offset = $(this).offset();
      console.log("X" + (e.pageX - offset.left));
      console.log("Y" + (e.pageY - offset.top));
    })
  

  
  var ballInside = function(pos) {
 
      
      $('.ball').animate({
          margin: "190px 0 0 345px"
      }, 500);
  }
  

              

}

    