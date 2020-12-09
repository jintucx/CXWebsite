$(function () {
    $('.topbar li a').on('click', function () {
      var elems = document.querySelectorAll(".topbar .active");
      [].forEach.call(elems, function (el) {
        el.classList.remove("active");
      });
      $(this).addClass('active');
    });
 
   
    var body = document.getElementsByTagName("body")[0],
      burger = document.querySelector('#burger'),
      header = document.querySelector('#main_nav');

    burger.onclick = function () {
      header.classList.toggle('collapse');
      if (header.getAttribute("class").indexOf("show") > -1) {
        body.classList.remove("overflow_hidden");
      }
      else
        body.classList.add("overflow_hidden");
    }

    

  });
  if ($(window).width() > 292) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass("fixed-top");
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      } else {
        $('#navbar_top').removeClass("fixed-top");
        $('body').css('padding-top', '0');
      }
    });
  }


function meetusbtn() {
  location.href="meetus.html"
}

  function mainaccordion(a) {
    document.getElementById('accordion').style.display = "none";
    document.getElementById(a).style.display = "block";
  }
  function goback(a) {
 
    document.getElementById('accordion').style.display = "block";
    document.getElementById(a).style.display = "none";
    
  }
  function subscribe(){
    $("#myModal").modal('show');
  }