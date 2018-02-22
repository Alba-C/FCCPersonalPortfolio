var menuClick = document.getElementsByClassName("nav-link");
var burgerButton = document.getElementById("burgerButton");

function menuClose() {
  burgerButton.click();
}

for (var i = 0; i < menuClick.length; i++) {
  menuClick[i].addEventListener("click", menuClose);
}

document.getElementById("appVid1").addEventListener("click", playVideo);
document.getElementById("appVid2").addEventListener("click", playVideo);
document.getElementById("appVid3").addEventListener("click", playVideo);
document.getElementById("appVid4").addEventListener("click", playVideo);
var icon4 = document.querySelector("#icon4");

function playVideo(event) {
  var x = event.target.id;

  if (x === "appVid1") {
    var video = document.getElementById("play1");

    if (video.paused) {
      $("#icon1").hide();
      video.play();
    } else {
      $("#icon1").show();
      video.pause();
    }
    var reload = document.getElementById("play1");
    reload.onended = function() {
      reload.load();
      $("#icon1").show();
    };
    console.log("playing video 1");
  } else if (x === "appVid2") {
    var video = document.getElementById("play2");

    if (video.paused) {
      $("#icon2").hide();
      video.play();
    } else {
      $("#icon2").show();
      video.pause();
    }
    var reload = document.getElementById("play2");
    reload.onended = function() {
      reload.load();
      $("#icon2").show();
    };
    console.log("playing video 2");
  } else if (x === "appVid3") {
    var video = document.getElementById("play3");

    if (video.paused) {
      $("#icon3").hide();
      video.play();
    } else {
      $("#icon3").show();
      video.pause();
    }
    var reload = document.getElementById("play3");
    reload.onended = function() {
      reload.load();
      $("#icon3").show();
    };
    console.log("playing video 3");
  } else if (x === "appVid4") {
    var video = document.getElementById("play4");

    if (video.paused) {
      $("#icon4").hide();
      video.play();
    } else {
      $("#icon4").show();
      video.pause();
    }
    var reload = document.getElementById("play4");
    reload.onended = function() {
      reload.load();
      $("#icon4").show();
    };
    console.log("playing video 4");
  }
}

// Carousel JS

$("#carouselExample").on("slide.bs.carousel", function(e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 6;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item")
          .eq(i)
          .appendTo(".carousel-inner");
      } else {
        $(".carousel-item")
          .eq(0)
          .appendTo(".carousel-inner");
      }
    }
  }
});
