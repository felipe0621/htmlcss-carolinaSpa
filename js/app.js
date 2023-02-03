/*
window.swiper = new Swiper({             //AGREGANDO la libreria SWIPER a la ventana global
    el: '.slider__contenedor',  //contenenor del slider
    slideClass: 'slider__slide', // el nombre de cada uno de los slids
    createElements: true,  // para qeu genere el resto de codigo html necesario de acuerdo a la lib. swiper
    autoplay: {
        delay: 4000
    },
    loop: true,  //para qe cuando llegue al ultimo me muestre el primero
    //spaceBetween: 20,  //en el caso de que quiera espacio entre los slids
    pagination: true,  //para paginar cada slide
    navigation: true,  //para mostrar las flechas de navegacion a los lados 

}); */
//el siguiente codigo es traido de swiper
var swiper = new Swiper(".swiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });