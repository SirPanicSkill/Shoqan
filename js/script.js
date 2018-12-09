/*globals jQuery, document */
$(function() {
    "use strict";
    $(".button-collapse").sideNav();
    //scrollFire
    var options = [
        {selector: '.fade1', offset: 200, callback: function(el) { Materialize.fadeInImage($(el)); } },
        {selector: '.fade2', offset: 200, callback: function(el) { Materialize.fadeInImage($(el)); } },
        {selector: '.fade3', offset: 200, callback: function(el) { Materialize.fadeInImage($(el)); } },
    ];
    Materialize.scrollFire(options);
    //левое меню для телефонов
    $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
    //yandex maps
    /*$('.map-open').bind('click touchstart', function(){
        if ($('#map').is(':hidden')) {
            $('#map').show('slow');
          } else {
            $('#map').slideUp();
          };
    });*/
    $('.map-open').bind('click touchend', function(){
        if(event.handled === false) return
        event.stopPropagation();
        event.preventDefault();
        event.handled = true;
        $('#map').fadeToggle('slow');
    });
    ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [55.708791, 37.885457],
                zoom: 16
            }); 
            
            myPlacemark = new ymaps.Placemark([55.708791, 37.885457], {
                hintContent: 'LEGENDARIO',
                balloonContent: 'Это все, что тебе нужно!'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }
    
});

/* после загрузки страницы */
$(document).ready(function(){
    //прелоадер
    $('.progress').delay(250).fadeOut(1500);
    //social net
    $('#soc-net').bind('click touchend', function(){
        if(event.handled === false) return
        event.stopPropagation();
        event.preventDefault();
        event.handled = true;
        $('.soc-net-items').addClass('scale-in');
        $('.soc-net-bck').addClass('disp-block').bind('click touchend', function(){
            if(event.handled === false) return
            event.stopPropagation();
            event.preventDefault();
            event.handled = true;
            $('.soc-net-items').removeClass('scale-in');
            $('.soc-net-bck').removeClass('disp-block');
        });
    });
    //слайдер
    $('.barCarousel').slick({
        arrows: false,
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
