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
        document.getElementById("Foto1").style.marginLeft = "0px";
        document.getElementById("Foto3").style.marginLeft = "0px";
        document.getElementById("Foto1").style.boxShadow = "0px 0px 0px";
        document.getElementById("Foto2visxl").style.boxShadow = "0px 0px 0px";
        document.getElementById("Foto3").style.boxShadow = "0px 0px 0px";
      }
});
//als je het scherm aanpast in grootte dan bij een bepaalde afstand de css
//aanpassen.
$( window ).resize(function(){
    if($(window).width() < 767 || $(window).width === 767){
        document.getElementById("navbar").style.paddingLeft = "0px";
        document.getElementById("Foto1").style.marginLeft = "0px";
        document.getElementById("Foto3").style.marginLeft = "0px";
        document.getElementById("Foto1").style.boxShadow = "0px 0px 0px";
        document.getElementById("Foto2visxl").style.boxShadow = "0px 0px 0px";
        document.getElementById("Foto3").style.boxShadow = "0px 0px 0px";
    }
    else{
        document.getElementById("navbar").style.paddingLeft = "140px";
        document.getElementById("Foto1").style.marginLeft = "75px";
        document.getElementById("Foto3").style.marginLeft = "75px";
        document.getElementById("Foto1").style.boxShadow = "10px 10px 5px grey";
        document.getElementById("Foto2visxl").style.boxShadow = "-10px 10px 5px grey";
        document.getElementById("Foto3").style.boxShadow = "10px 10px 5px grey";
    }
});

//if($(window).width() <1300 && $(window).width() >1100){
//    document.getElementById("tekst1").style.marginTop = "140px";
//    document.getElementById("tekst2").style.marginTop = "140px";
//    document.getElementById("tekst3").style.marginTop = "140px";
//}else if($(window).width() <1100 && $(window).width() >950){
//    document.getElementById("tekst1").style.marginTop = "100px";
//    document.getElementById("tekst2").style.marginTop = "100px";
//    document.getElementById("tekst3").style.marginTop = "100px";
//}else if($(window).width() <950 && $(window).width() >767){
//    document.getElementById("tekst1").style.marginTop = "30px";
//    document.getElementById("tekst2").style.marginTop = "30px";
//    document.getElementById("tekst3").style.marginTop = "30px";
//}


//voor de afstand te verkijgen op het starten van de site.
//$(document).ready(function(){
//  var tekst = document.getElementsByClassName('teksten');
//
//    for(var tekstHoogte of tekst){
//
//      var hoogte = tekstHoogte.clientHeight;
//
//      var element = document.getElementsByClassName('projectTekst');
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
