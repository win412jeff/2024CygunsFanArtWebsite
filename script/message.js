$(function () {
  //Overlay
TweenMax.to('.overlay', 2, {
  delay:1,
  top:"-100%",
  ease:Expo.easeInOut
})
//背景
TweenMax.from('.backgr', 1, {
  delay:3,
  opacity:0,
  x:-100,
  ease:Expo.easeInOut
})
TweenMax.from('.balloon_back', 4, {
  delay:3.5,
  opacity:0,
  x:-100,
  y:100,
  ease:Expo.easeInOut
})
//熙歌封面
TweenMax.from('.cyg', 1, {
  delay:4,
  opacity:0,
  x:-50,
  ease:Expo.easeInOut
})

TweenMax.from('.balloon_front', 1, {
  delay:4.5,
  opacity:0,
  x:-50,
  ease:Expo.easeInOut
})

TweenMax.from('.flower', 1, {
  delay:4.5,
  opacity:0,
  x:-50,
  ease:Expo.easeInOut
})

TweenMax.from('.pigeon', 1, {
  delay:4.5,
  opacity:0,
  x:-50,
  ease:Expo.easeInOut
})
//王熙歌字
TweenMax.from('.hby', 1, {
  delay:5,
  opacity:0,
  x:100,
  ease:Expo.easeInOut
}, 0.08)

//首頁選單
TweenMax.from('#home', 1, {
  delay:5,
  opacity:0,
  x:-100,
  ease:Expo.easeInOut
})
})
//////

$('.block').smoove({offset:'10%'});

// 歌歌歌歌歌
let count = 0;
$("body").on("click", function (event) {
  var elements = new Array("歌");
  var target = $("<span/>").text(elements[count]);
  if (count === 20) {
    $("row:hidden").show("normal");
  }
  var x = event.pageX,
    y = event.pageY;
  target.css({
    "z-index": 999,
    "top": y - 42,
    "left": x + (Math.floor(Math.random() * 60 - 30)),
    "position": "absolute",
    "font-weight": "bold",
    "color": "red",
    "font-size": "22pt"
  });
  $("body").append(target);
  target.animate({
    "top": y - 380,
    "opacity": 0
  },
    1500,
    function () {
      target.remove();
    });
}); 