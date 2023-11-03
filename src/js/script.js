var merchandising = document.querySelector('.merchandising');

var position = -27;
var speed = 0.05;

function updatePosition() {
  position += speed;

  if (position > 27) {
    position = -26;
  }
  
  merchandising.style.transform = 'translateX(' + position + 'vw)';
  requestAnimationFrame(updatePosition);
}
requestAnimationFrame(updatePosition);

document.addEventListener( 'DOMContentLoaded', function () {
  var splide = new Splide( '#thumbnail-slider', {
    fixedWidth : 480,
    fixedHeight: 530,
    type: 'loop',
    gap        : 5,
    rewind     : true,
    pagination : false,
    cover      : true,
    focus      : 'center',
    isNavigation: true,
    autoplay: 'playing',
    pauseOnHover: false,
    lazyload: 'loaded'
  } 
  ).mount();

  splide.on( 'autoplay:playing', function ( rate ) {
    console.log( rate ); // 0-1
  } );

  document.querySelector('.splide__arrow--next').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>';

  document.querySelector('.splide__arrow--prev').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>';
})


