function openservices (){
    $("#subnav").toggle();
  }
  $(document).mouseup(function (e){
      var container = $("#subnav");
      if (!container.is(e.target) && container.has(e.target).length === 0){
          container.fadeOut();
          
      }
  })


  $(document).ready(function(){
      // invoke the carousel
          $('#myCarousel').carousel({
            interval: false
          });
          $('#topCarousel').carousel({
              interval: false
            });

            $('.topbar li a').on('click', function () {
                var elems = document.querySelectorAll(".topbar .link.active");
                [].forEach.call(elems, function (el) {
                  el.classList.remove("active");
                });
                $(this).addClass('active');
              });

      });
  //scroll slides on swipe for touch enabled devices
  
  $("#myCarousel").on("touchstart", function(event){
  
      var yClick = event.originalEvent.touches[0].pageY;
      $(this).one("touchmove", function(event){
  
          var yMove = event.originalEvent.touches[0].pageY;
          if( Math.floor(yClick - yMove) > 1 ){
              $(".carousel").carousel('next');
          }
          else if( Math.floor(yClick - yMove) < -1 ){
              $(".carousel").carousel('prev');
          }
      });
      $(".carousel").on("touchend", function(){
          $(this).off("touchmove");
      });
  });
  $("#topCarousel").on("touchstart", function(event){
  
      var yClick = event.originalEvent.touches[0].pageY;
      $(this).one("touchmove", function(event){
  
          var yMove = event.originalEvent.touches[0].pageY;
          if( Math.floor(yClick - yMove) > 1 ){
              $(".carousel").carousel('next');
          }
          else if( Math.floor(yClick - yMove) < -1 ){
              $(".carousel").carousel('prev');
          }
      });
      $(".carousel").on("touchend", function(){
          $(this).off("touchmove");
      });
  });