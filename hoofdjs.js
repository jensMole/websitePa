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
        document.getElementById("Foto3").style.boxShadow = "0px 0px 0px";
      }
});

//als je het scherm aanpast in grootte dan bij een bepaalde afstand de css
//aanpassen. Dit is voor de margin van de foto's, de padding van de navigatie
//en ook voor de shadow op de foto's aan en uit te zetten.
$( window ).resize(function(){
    if($(window).width() < 767 || $(window).width === 767){
        document.getElementById("navbar").style.paddingLeft = "0px";
        document.getElementById("Foto1").style.marginLeft = "0px";
        document.getElementById("Foto3").style.marginLeft = "0px";
        document.getElementById("Foto1").style.boxShadow = "0px 0px 0px";
        document.getElementById("Foto3").style.boxShadow = "0px 0px 0px";
    }
    else{
        document.getElementById("navbar").style.paddingLeft = "140px";
        document.getElementById("Foto1").style.marginLeft = "75px";
        document.getElementById("Foto3").style.marginLeft = "75px";
        document.getElementById("Foto1").style.boxShadow = "10px 10px 5px grey";
        document.getElementById("Foto3").style.boxShadow = "10px 10px 5px grey";
    }
});

//als het document klaar is gaan we gaan kijken voor de positie van de tekst.
//Deze wordt auto bepaald. Proberen in het midden te plaatsen.
$(document).ready(function(){
    if($(window).width() <1500 && $(window).width() > 991 || $(window).width() === 991){
    
        var projecten = document.getElementsByClassName('fotoProjecten');

        for(var project of projecten){

          var hoogte = project.clientHeight;

          console.log(hoogte);

          var element = document.getElementById('tekst1');
          element.style.marginTop = hoogte - 300 + "px";
          var element = document.getElementById('tekst2');
          element.style.marginTop = hoogte - 300 + "px";
          var element = document.getElementById('tekst3');
          element.style.marginTop = hoogte - 300 + "px";
        }
    }else if($(window).width() > 1500 || $(window).width() === 1500){
        
          var element = document.getElementById('tekst1');
          element.style.marginTop = 200 + "px";
          var element = document.getElementById('tekst2');
          element.style.marginTop = 200 + "px";
          var element = document.getElementById('tekst3');
          element.style.marginTop = 200 + "px";    
    }else if($(window).width() < 991 && $(window).width() > 767 || $(window).width() === 767){
          var element = document.getElementById('tekst1');
          element.style.marginTop = 20 + "px";
          var element = document.getElementById('tekst2');
          element.style.marginTop = 20 + "px";
          var element = document.getElementById('tekst3');
          element.style.marginTop = 20 + "px";
    }
});

//als je de scherm resolutie aanpast dan gaan we de afstand van de tekst gaan
//beinvloeden (test doeleinde + liggend scherm GSM/tablet).
$( window ).resize(function(){
    
    if($(window).width() <1500 && $(window).width() > 991 || $(window).width() === 991){
    
        var projecten = document.getElementsByClassName('fotoProjecten');

        for(var project of projecten){

          var hoogte = project.clientHeight;

          var element = document.getElementById('tekst1');
          element.style.marginTop = hoogte - 300 + "px";
          var element = document.getElementById('tekst2');
          element.style.marginTop = hoogte - 300 + "px";
          var element = document.getElementById('tekst3');
          element.style.marginTop = hoogte - 300 + "px";
        }
    }
    else if($(window).width() > 1500 || $(window).width() === 1500){
          var element = document.getElementById('tekst1');
          element.style.marginTop = 200 + "px";
          var element = document.getElementById('tekst2');
          element.style.marginTop = 200 + "px";
          var element = document.getElementById('tekst3');
          element.style.marginTop = 200 + "px";
    }
    else if($(window).width() < 991 && $(window).width() > 767 || $(window).width() === 767){
        var element = document.getElementById('tekst1');
          element.style.marginTop = 20 + "px";
          var element = document.getElementById('tekst2');
          element.style.marginTop = 20 + "px";
          var element = document.getElementById('tekst3');
          element.style.marginTop = 20 + "px";
    }
});

//Foto's centreren eenmaal als scherm kleiner is dan 991 pixels.
$(document).ready(function(){
    if($(window).width() < 991){
          var element = document.getElementById('Foto1');
          element.style.margin = "auto";
          var element = document.getElementById('Foto2');
          element.style.margin = "auto";
          var element = document.getElementById('Foto3');
          element.style.margin = "auto";
    }
});

//Foto's centreren eenmaal als scherm kleiner is dan 991 pixels. (Voor tablets + GSM)
//als de resolutie zich aanpast.
$( window ).resize(function(){
    if($(window).width() < 991){
          var element = document.getElementById('Foto1');
          element.style.margin = "auto";
          var element = document.getElementById('Foto2');
          element.style.margin = "auto";
          var element = document.getElementById('Foto3');
          element.style.margin = "auto";
          
    }
});