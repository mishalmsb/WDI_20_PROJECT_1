


$(init)
function init() { 





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
      // console.log("button test");
      // console.log($('#txBox1').val());
      var posX = parseInt($('#txBoxX').val());
      // var posY = parseInt($('#txBoxY').val());
      $('.ball').css("transform","translate("+getSliderX()+"px," + getSliderY() + "px)");
      

  })

  // $("#btRestart").click(function() {
  //     // console.log("button test");
  //     // console.log($('#txBox1').val());
 
  //     $('.ball').css({ 'left': '320px','bottom':'50px' });

  // })


  // $("#baliza").click(function(e) {
  //     var offset = $(this).offset();
  //     console.log("X" + (e.pageX - offset.left));
  //     console.log("Y" + (e.pageX - offset.top));
  // })



}

    