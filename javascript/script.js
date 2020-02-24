var imagecount = 1;
var total = 9;


function slide(x){
	var Image = document.getElementById('sliderimg');
	imagecount = imagecount + x;
	if(imagecount > total){ imagecount = 1;}
	if(imagecount < 1){ imagecount =total;}
	Image.src = "images/homesliderimage/img"+ imagecount +".jpg"
	}
	
window.setInterval (function slideA(){
	var Image = document.getElementById('sliderimg');
	imagecount = imagecount + 1;
	if(imagecount > total){ imagecount = 1;}
	if(imagecount < 1){ imagecount =total;}
	Image.src = "images/homesliderimage/img"+ imagecount +".jpg"
	},2000);
	
		