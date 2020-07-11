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
	var bannerImgWidth = $('banner').getElementsByTagName('img')[0].offsetWidth;
	var bannerImgHeight =$('banner').getElementsByTagName('img')[0].offsetHeight;
	
	//因为banner设置了position:absolute脱离的文档流，所以需设置bannerBox的高度
	$('bannerBox').style.height = bannerImgHeight + 'px';

	//克隆第一张banner图所在的li，为实现无缝轮播做准备
	var bannerFirstLi = $('banner').getElementsByTagName('li')[0];
	var newBannerLi = bannerFirstLi.cloneNode(true);
	$('banner').appendChild(newBannerLi);
	
	//设置banner宽度，使得banner图能够排成一行
	var bannerImgNum = $('banner').getElementsByTagName('img').length;
	$('banner').style.width = bannerImgWidth * bannerImgNum + 'px';

	//设置bannerContainer在屏幕上居中显示
	$('bannerContainer').style.width = bannerImgWidth + 'px';
	$('bannerContainer').style.marginLeft = -$('bannerContainer').offsetWidth / 2 + 'px';

	//根据banner图的数量生成span圆点,并居中显示
	for (var i = 0; i < bannerImgNum - 1; i++) {
		var newSpan = document.createElement('span');
		newSpan.setAttribute('index', i);
		$('bannerBtn').appendChild(newSpan);
	}
	$('bannerBtn').style.marginLeft = -$('bannerBtn').offsetWidth / 2 + 'px';

	//给第一个span圆点用上current样式
	$('bannerBtn').getElementsByTagName('span')[0].classList.add('current');
	
	
	//下面实现轮播功能
	var timerId = null;
	var index = 0;
	function animate(target){
		clearInterval(timerId);
		timerId = setInterval(function(){
			var leader = $('banner').offsetLeft;
			var step = (target - leader) / 5;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			leader = leader + step;
			$('banner').style.left = leader + 'px';
		}, 10);
	}
	var bannerBtns = $('bannerBtn').getElementsByTagName('span');
	for (var i = 0; i < bannerBtns.length; i++) {
		bannerBtns[i].onclick = function(){
			index = this.getAttribute('index');
			var target = -index * bannerImgWidth;
			animate(target);
			for (var j = 0; j < bannerBtns.length; j++) {
				bannerBtns[j].classList.remove('current');
			}
			this.classList.add('current');
		}
	}
	$('bannerNext').onclick = function(){
		if (index == bannerImgNum - 1) {
			$('banner').style.left = 0 + 'px';
			index = 0;
		}
		index++;
		var target = -index * bannerImgWidth;
		animate(target);
		for (var i = 0; i < bannerBtns.length; i++) {
			bannerBtns[i].classList.remove('current');
		}
		if (index == bannerImgNum - 1) {
			bannerBtns[0].classList.add('current');
		} else {
			bannerBtns[index].classList.add('current');
		}
	}
	$('bannerPrev').onclick = function(){
		if (index == 0) {
			$('banner').style.left = -((bannerImgNum - 1) * bannerImgWidth) + 'px';
			index = bannerImgNum - 1;
		}
		index--;
		var target = -index * bannerImgWidth;
		animate(target);
		for (var i = 0; i < bannerBtns.length; i++) {
			bannerBtns[i].classList.remove('current');
		}
		bannerBtns[index].classList.add('current');
	}
	timerAuto = setInterval(function(){
		$('bannerNext').onclick();
	}, 3000);
	$('bannerBox').onmouseover = function(){
		clearInterval(timerAuto);
	}
	$('bannerBox').onmouseout = function(){
		timerAuto = setInterval(function(){
			$('bannerNext').onclick();
		}, 3000);
	}
});