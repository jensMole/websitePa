// Slideshow
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,8000);

function nextSlide() {
    if(!($(window).width() < 767 || $(window).width === 767)){
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }
}
//Slideshow

//nav
//Voor de padding in te stellen als je de pagina start.
$(document).ready(function(){
    if($(window).width() < 767 || $(window).width === 767){
        document.getElementById("navbar").style.paddingLeft = "0px";
      }
});
//als je het scherm aanpast in grootte dan bij een bepaalde afstand de css
//aanpassen.
$( window ).resize(function(){
    if($(window).width() < 767 || $(window).width === 767){
        document.getElementById("navbar").style.paddingLeft = "0px";
    }
    else{
        document.getElementById("navbar").style.paddingLeft = "140px";
    }
});

//nav


////voor de afstand te verkijgen op het starten van de site.
//$(document).ready(function(){
//  var img = document.getElementsByClassName('test');
//
//    for(var foto of img){
//
//      var hoogte = foto.clientHeight;
//
//      var element = document.getElementsByClassName('slideheight');
//      element.style.height = hoogte + "px";
//      console.log(element.style.height);
//    }
//});
//
//// Krijg grootte van de fotos eenmaal als het scherm verkleind.
//$( window ).resize(function(){
//  var img = document.getElementsByClassName('test');
//
//  for(var foto of img){
//
//    var hoogte = foto.clientHeight;
//
//    var element = document.getElementsByClassName('slideheight');
//    element.style.height = hoogte + 10 + "px";
//    console.log(element.style.height);
//  }
//});
