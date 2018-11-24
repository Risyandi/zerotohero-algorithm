// registerListener('load', setLazy);
// registerListener('load', lazyLoad);
// registerListener('scroll', setLazy);
// registerListener('scroll', lazyLoad);

var lazy = [];
var lazyBackground = [];
function setLazy(t){
    lazy = document.getElementsByClassName('lazyload');
    if(t) {a
      console.log(lazy[0].getBoundingClientRect())
      console.log(lazy[1].getBoundingClientRect())
      console.log(lazy[2].getBoundingClientRect())
      console.log(lazy[3].getBoundingClientRect())
    }
}
function setLazyBackground() {
    lazyBackground = document.getElementsByClassName('lazy-background');
}
function lazyLoad(){
    for(var i=0; i<lazy.length; i++){
      // console.log(isInViewport(lazy[i], true))
        if(isInViewport(lazy[i])){
            if (lazy[i].getAttribute('data-src')){
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].removeAttribute('data-src');
            }
        }
    }
    cleanLazy();
}
function lazyLoadBackground() {
    for(var i=0; i<lazyBackground.length; i++){
      // console.log(isInViewport(lazy[i], true))
        if(isInViewport(lazyBackground[i])){
            if (lazyBackground[i].getAttribute('data-src')){
                lazyBackground[i].style.backgroundImage = "url('"+lazyBackground[i].getAttribute('data-src')+"')";
                lazyBackground[i].removeAttribute('data-src');
            }
        }
    }
    cleanLazyBackground();
}
function cleanLazy(){
    lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
}
function cleanLazyBackground() {
    lazyBackground = Array.prototype.filter.call(lazyBackground, function(l){ return l.getAttribute('data-src');});
}
function isInViewport(el, c){
    var rect = el.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        !(rect.bottom == 0 && rect.right == 0 && rect.top == 0 && rect.left == 0)
     );
}
function registerListener(event, func) {
    if (window.addEventListener) {
        window.addEventListener(event, func)
    } else {
        window.attachEvent('on' + event, func)
    }
}
function setLazyCarousel() {
  if(isMobile) {
    $('.carousel-inner .item img').height($(window).width()*600/768)
  } else {
    $('.carousel-inner .item img').height($(window).width()*600/1920)
  }
}
