

 $(document).ready(function(){

   $('.counter').counterUp({
    delay: 10,
    time: 1000
});

   var mixer = mixitup('#hello', {
    animation: {
        duration: 300
    }
});
   
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
   
  })

   wow = new WOW(
     {
     boxClass:     'wow',      // default
     animateClass: 'animated', // default
     offset:       10,          // default
     mobile:       true,       // default
     live:         true        // default
   }
   )
   wow.init();


   AOS.init({
     offset: 100,
     delay: 50,
     duration: 500,
     easing: 'linear',
   });