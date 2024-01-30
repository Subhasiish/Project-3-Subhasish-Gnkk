// These are code of locomotive js:-
function init () {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
 
init()
// These are the first page revealing animation .

function firstpageAnim() {
  var tl = gsap.timeline();

  tl
  .from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInout
})
  .to(".belem ", {
    y: 0,
    ease: Expo.easeInout,
    Delay: -1,
    duration: 2.5,
    stagger: .5
})
  .from("#herofooter", {
    y: '-10',
    Delay: -1,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInout
})
}
firstpageAnim(); 

// Here is another way you can make cursor/mouse follower:-
//  var cursor = document.querySelector(".cursor")
//  var main = document.querySelector(".main")
//  document.addEventListener("mousemove",function(dets){
//    cursor.style.left = dets.x + 20 + "px"
//    cursor.style.top = dets.y + 20 +"px"
//  })


// These are also the mouse/cursor follower programme that you can implement to get the result.
// It is also consist of the skew feature that helps the to give that skew effect like a water ballon while moving.
var timeout;

function minicircleskew() {

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMousefollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector(".cursor").style.transform = `translate( 
                ${dets.clientX}px , ${dets.clientY}px ) scale(1 , 1)`;
        }, 100);
    });
}

function circleMousefollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".cursor").style.transform = `translate( 
    ${dets.clientX}px , ${dets.clientY}px ) scale(${xscale} , ${yscale})`;
    })
}

circleMousefollower();
minicircleskew();


// This is the sidewise-moving animation of the first page h1.
var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    start:"top 60%",
    end:"top 0",
    scrub:3
  }
})
  

tl2.to (".page1 h1",{
    x:-100,

},"anim")

tl2.to (".page1 h2",{
  x:100,

},"anim")



// This is the code for color change of the page while scrolling.(i tried and it works absolutly fine but not fit for this project.)
// var tl3 = gsap.timeline({
//   scrollTrigger:{
//     trigger:".page1 h1",
//     scroller:".main",
//     start:"top -70%",
//     // markers:true,
//     end:"top -450%",
//     scrub:2
//   }
// })
  

// tl3.to(".main",{
//   backgroundColor:"#fff",
// })

// tl3.to(".main",{
//   backgroundColor:"#0f0d0d"
// })

// var tl4 = gsap.timeline({
//   scrollTrigger:{
//     trigger:".page1 h1",
//     scroller:".main",
//     markers:true,
//     start:"top -10%",
//     end:"top -300%",
//     scrub:3
//   }
// })



// This is the hover effect on the page:-
document.querySelectorAll(".last")
    .forEach(function (elem) {
        var rotate = 0;
        var diffrot = 0;  

        elem.addEventListener("mouseleave", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power3,
                duration:.5,
            });
        });

        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20,20, diffrot*.8),
            });
        });
    });

    var span = document.getElementById('span');


    // This is the realtime watch that is situated on the bottom-left corner of my page.
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);
span();