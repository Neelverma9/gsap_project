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
let clickbuttn = document.querySelectorAll("#dot h4");
let im = document.querySelector("#cont2 img ");
let count = 0;
clickbuttn[0].addEventListener("click", function () {
    if(count==0){
        im.src = 'https://images.unsplash.com/photo-1522688306378-fbb315c6ba9a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        im.style.height = '300px';
        count = 1;
    }
    else{
        im.src = 'https://i.pinimg.com/564x/16/92/b3/1692b3193ce168983c05e8f42b2997c6.jpg';
        im.style.height = '300px';
        count = 0;

    }
})

let c1=0;


clickbuttn[1].addEventListener("click", function () {
    if(c1==0){
        im.src = 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    im.style.height = '300px';
    c1=1;
    }else{
        im.src = 'https://media.istockphoto.com/id/1096150282/photo/female-hands-holding-red-heart.jpg?s=612x612&w=is&k=20&c=yq9e7RxsKbF1hvLCSs90-BXai70qkXDQNKEWHGE_D8A=';
       im.style.height = '300px';
       c1=0;

    }
   
})
let c2=0;

clickbuttn[2].addEventListener("click", function () {
    if(c2==0){
        im.src = 'https://media.istockphoto.com/id/1096150282/photo/female-hands-holding-red-heart.jpg?s=612x612&w=is&k=20&c=yq9e7RxsKbF1hvLCSs90-BXai70qkXDQNKEWHGE_D8A=';
        im.style.height = '300px';
        c2=1;
    }else{
        im.src = 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        im.style.height = '300px';
        c2=0;
    }
    
})
