/*
* @Author: zhangzhiyan
* @Date:   2018-12-19 20:22:05
* @Last Modified by:   Administrator
* @Last Modified time: 2018-12-19 21:19:42
*/
function $(id){
	return document.getElementById(id);
}
window.addEventListener('load', function(){
	
	//获取banner图的宽和高
	var bannerImgWidth = $('banner1').getElementsByTagName('img')[0].offsetWidth;
	var bannerImgHeight =$('banner1').getElementsByTagName('img')[0].offsetHeight;
	
	//设置bannerContainer的宽度,实现在网页上居中显示
	$('bannerContainer1').style.width = bannerImgWidth + 'px';
	//因为banner设置了position:absolute脱离了文档流，所以需设置bannerContainer的高度
	$('bannerContainer1').style.height = bannerImgHeight + 'px';

	//克隆第一张banner图所在的li，为实现无缝轮播做准备
	var bannerFirstLi = $('banner1').getElementsByTagName('li')[0];
	var newBannerLi = bannerFirstLi.cloneNode(true);
	$('banner1').appendChild(newBannerLi);
	
	//设置banner宽度，使得banner图能够排成一行
	var bannerImgNum = $('banner1').getElementsByTagName('img').length;
	$('banner1').style.width = bannerImgWidth * bannerImgNum + 'px';


	//根据banner图的数量生成span圆点,并居中显示
	for (var i = 0; i < bannerImgNum - 1; i++) {
		var newSpan = document.createElement('span');
		newSpan.setAttribute('index', i);
		$('bannerBtn1').appendChild(newSpan);
	}
	$('bannerBtn1').style.marginLeft = -$('bannerBtn1').offsetWidth / 2 + 'px';

	//给第一个span圆点用上current样式
	$('bannerBtn1').getElementsByTagName('span')[0].classList.add('current1');
	
	
	//下面实现轮播功能
	var timerId = null;
	var index = 0;
	function animate(target){
		clearInterval(timerId);
		timerId = setInterval(function(){
			var leader = $('banner1').offsetLeft;
			var step = (target - leader) / 5;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			leader = leader + step;
			$('banner1').style.left = leader + 'px';
		}, 10);
	}
	var bannerBtns = $('bannerBtn1').getElementsByTagName('span');
	for (var i = 0; i < bannerBtns.length; i++) {
		bannerBtns[i].onclick = function(){
			index = this.getAttribute('index');
			var target = -index * bannerImgWidth;
			animate(target);
			for (var j = 0; j < bannerBtns.length; j++) {
				bannerBtns[j].classList.remove('current1');
			}
			this.classList.add('current1');
		}
	}
	$('bannerNext1').onclick = function(){
		if (index == bannerImgNum - 1) {
			$('banner1').style.left = 0 + 'px';
			index = 0;
		}
		index++;
		var target = -index * bannerImgWidth;
		animate(target);
		for (var i = 0; i < bannerBtns.length; i++) {
			bannerBtns[i].classList.remove('current1');
		}
		if (index == bannerImgNum - 1) {
			bannerBtns[0].classList.add('current1');
		} else {
			bannerBtns[index].classList.add('current1');
		}
	}
	$('bannerPrev1').onclick = function(){
		if (index == 0) {
			$('banner1').style.left = -((bannerImgNum - 1) * bannerImgWidth) + 'px';
			index = bannerImgNum - 1;
		}
		index--;
		var target = -index * bannerImgWidth;
		animate(target);
		for (var i = 0; i < bannerBtns.length; i++) {
			bannerBtns[i].classList.remove('current1');
		}
		bannerBtns[index].classList.add('current1');
	}
	timerAuto = setInterval(function(){
		$('bannerNext1').onclick();
	}, 3000);
	$('bannerContainer1').onmouseover = function(){
		clearInterval(timerAuto);
	}
	$('bannerContainer1').onmouseout = function(){
		timerAuto = setInterval(function(){
			$('bannerNext1').onclick();
		}, 3000);
	}
});

//下面是Tab栏的轮播图
window.addEventListener('load',function(){
	function $(id){
		return document.getElementById(id);
	}
	
})