gsap.to(".nav",{
    backgroundColor:"#000",
    duration:2,
    height:"120px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }
})
gsap.to(".main1",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main1",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
})
let curs=document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
      curs.style.left=dets.x+"px"
      curs.style.top=dets.y+"px"
      blur.style.left=dets.x-30+"px"
      blur.style.top=dets.y-30+"px"
      
})
let blur=document.querySelector("#blur");
let mosue=document.querySelectorAll(".nav1 h1");
mosue.forEach((eme) => {
     eme.addEventListener("mouseenter",function(){
          curs.style.scale=3
          curs.style.border="1px solid #fff"
          curs.style.backgroundColor="#485890"
     })
     eme.addEventListener("mouseleave",function(){
        curs.style.scale=1
          curs.style.border="0px solid #fff"
          curs.style.backgroundColor="#7fffd459"
     })

});
gsap.to(".imgsec img,#about",{
    y:50,
    // opacity:0,
    duration:1,
    // stagger:3,
    scrollTrigger:{
        trigger:".imgsec",
        scroller:"body",
        start:"top 30%",
        end:" top 58%",
        scrub:3
    }
    

})
let clickbutton=document.querySelectorAll("#cont2 .inside h4");
clickbutton.forEach(function(eme){
       eme.addEventListener("onclick",function(){
             let b=document.querySelector(".cont2 img #new");
             b.src='https://i.pinimg.com/564x/60/0e/4d/600e4d05b76440348114ada5f86fe217.jpg';
             
            
       })
})
