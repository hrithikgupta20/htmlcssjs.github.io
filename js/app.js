

$('.food-slider').slick({
  dots:true,
  
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite:true,
  
});

function countdown() {
  var now = new Date();
  var eventDate= new Date(2021,02,22);

  var currentTime = now.getTime();
  var eventTime= eventTime - currentTime;
  var s =math.floor(rem/1000);
  var m =math.floor(s/60);
  var h= math.floor(m/60);
  var d=math.floor(h/24);

  h%=24;
  m%=60;
  s%=60;

  h = (h<10) ? "0" + h:h;
  m = (m<10) ? "0" + m:m;
  s = (s<10) ? "0" + s:s;
  document.getElementById("days").textContent = d;
  document.getElementById("days").innertext = d;

  document.getElementById("hours").textContent = h;
  document.getElementById("minutes").textContent = m;
  document.getElementById("seconds").textContent = s;
setTimeout(countdown,1000);
}
