


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

  
  

  $("#btShoot").click(function() {
      // $('.ball').css("transform","translate(-130px,-245px)");
      // console.log("button test");
      // console.log($('#txBox1').val());
 
      $('.ball').css("transform","translate("+getSliderX()+"px," + getSliderY() + "px)");
      
      ballInside();
  })


  $("#btRestart").click(function() {
      // console.log("button test");
      // console.log($('#txBox1').val());
 
      
      $('ball').css("margin", "150px");
 

  })


  $("#field").click(function(e) {
      var offset = $(this).offset();
      console.log("X" + (e.pageX - offset.left));
      console.log("Y" + (e.pageY - offset.top));
    })
  

  
  var ballInside = function() {
 
      $('.ball').animate({
          margin: "190px 0 0 345px"
      }, 500);
  }
  

              

}

    