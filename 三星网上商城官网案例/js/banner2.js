window.addEventListener('load',function(){
	function $(id){
		return document.getElementById(id);
	}
	var index = 0;
	var recommendation_top_li = $('recommendation1').getElementsByClassName('top')[0].getElementsByTagName('li');
	var recommendation_bottom_li = $('recommendation1').getElementsByClassName('bottom')[0].getElementsByTagName('li');
	for (var i = 0; i < recommendation_top_li.length; i++) {
		recommendation_top_li[i].onclick = function(){
			index = this.getAttribute('index');
			changeTab(index);
		}
	};
	var recommendation_next = $('recommendation1').getElementsByClassName('next')[0];
	var recommendation_prev = $('recommendation1').getElementsByClassName('prev')[0];
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
	$('recommendation1').onmouseover = function(){
		clearTimeout(timer);
	}
	$('recommendation1').onmouseout = function(){
		timer = setInterval(function(){
			recommendation_next.onclick();
		}, 3000);
	}
	function changeTab(index){
		for (var i = 0; i < recommendation_top_li.length; i++) {
			recommendation_top_li[i].classList.remove('current1');
		};
		recommendation_top_li[index].classList.add('current1');
		for (var i = 0; i < recommendation_bottom_li.length; i++) {
			recommendation_bottom_li[i].classList.remove('current1');
		};
		recommendation_bottom_li[index].classList.add('current1');
	}
	timer = setInterval(function(){
		recommendation_next.onclick();
	}, 3000);
});