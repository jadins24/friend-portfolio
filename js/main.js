$('.work-content').owlCarousel({
    center:true,
	autoplay:true,
    items:1,
    loop:true,
    margin:20,
    responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
        1000:{
            items:3
        }
    }
});

var menuBar=document.querySelector(".menu-bar")
var menuButton=document.getElementById("menu")
var menu=document.querySelector(".nav-list")
var close=document.getElementById("close");
var button=document.querySelector(".close");
var link1=document.querySelector(".link1");
var link2=document.querySelector(".link2");
var link3=document.querySelector(".link3");
var link4=document.querySelector(".link4");
var link5=document.querySelector(".link5");

function clear(){
    menu.style.display="none";
    button.style.display="none"
}



link1.addEventListener("click",function(){
    clear();
})

link2.addEventListener("click",function(){
    clear();
})

link3.addEventListener("click",function(){
    clear();
})

link4.addEventListener("click",function(){
    clear();
})

link5.addEventListener("click",function(){
    clear();
})

close.addEventListener("click",function(){
    clear();
})

menuButton.addEventListener("click",function(){
    menu.style.display="flex";
    button.style.display="flex"
})

