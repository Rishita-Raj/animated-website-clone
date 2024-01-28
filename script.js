// used dom manipulation and gsap , scroll trigger, smooth scrolling locomotive js,swiper js, loader set timeout

function cursorEffect(){
    var page1Content =  document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
//    cursor.style.left = dets.x+"px"
//    cursor.style.top = dets.y+"px"
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter",function(){    
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(){    
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}

cursorEffect()

function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}
sliderAnimation()

var tl =  gsap.timeline()

tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3",{
    opacity:0,
    x:-20,
    duration:1,
    stagger:0.1
})
tl.to("#loader",{
    opacity:0
})
tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration:0.1,
    delay:-0.5
})
tl.to("#loader",{
    display:"none"
})