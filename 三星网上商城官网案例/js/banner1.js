window.addEventListener('load',function(){
	function $(id){
		return document.getElementById(id);
	}
	var index = 0;
	var recommendation_top_li = $('recommendation').getElementsByClassName('top')[0].getElementsByTagName('li');
	var recommendation_bottom_li = $('recommendation').getElementsByClassName('bottom')[0].getElementsByTagName('li');
	for (var i = 0; i < recommendation_top_li.length; i++) {
		recommendation_top_li[i].onclick = function(){
			index = this.getAttribute('index');
			changeTab(index);
		}
	};
	var recommendation_next = $('recommendation').getElementsByClassName('next')[0];
	var recommendation_prev = $('recommendation').getElementsByClassName('prev')[0];
	recommendation_next.onclick = function(){
		index++;
		if (index == recommendation_top_li.length) {
			index = 0;
		};
		changeTab(index);
	}
	recommendation_prev.onclick = function(){
		index--;
		if (index == -1) {
			index = recommendation_top_li.length - 1;
		};
		changeTab(index);
	}
	$('recommendation').onmouseover = function(){
		clearTimeout(timer);
	}
	$('recommendation').onmouseout = function(){
		timer = setInterval(function(){
			recommendation_next.onclick();
		}, 3000);
	}
	function changeTab(index){
		for (var i = 0; i < recommendation_top_li.length; i++) {
			recommendation_top_li[i].classList.remove('current');
		};
		recommendation_top_li[index].classList.add('current');
		for (var i = 0; i < recommendation_bottom_li.length; i++) {
			recommendation_bottom_li[i].classList.remove('current');
		};
		recommendation_bottom_li[index].classList.add('current');
	}
	timer = setInterval(function(){
		recommendation_next.onclick();
	}, 3000);
});