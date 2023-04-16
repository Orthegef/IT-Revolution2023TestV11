let offset=0;
const sliderLine=document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click',function(){
	offset=offset+120;
	if(offset>700){
		offset=0;
	}
	sliderLine.style.left=-offset+'px';
});