function $(id) {
	return document.getElementById(id);
}
window.onload = function(){
	$('white').style.display = 'none';
	$('dropdown1').onmouseover = function(){
		$('dropdown-content1').style.display = 'block';
			$('white').style.display = 'block';
	}
	$('dropdown1').onmouseout = function(){
		$('dropdown-content1').style.display = 'none';
		$('white').style.display = 'none';
	}

	$('dropdown2').onmouseover = function(){
		$('dropdown-content2').style.display = 'block';
			$('white').style.display = 'block';
	}
	$('dropdown2').onmouseout = function(){
		$('dropdown-content2').style.display = 'none';
			$('white').style.display = 'none';
	}

	$('dropdown3').onmouseover = function(){
		$('dropdown-content3').style.display = 'block';
			$('white').style.display = 'block';
	}
	$('dropdown3').onmouseout = function(){
		$('dropdown-content3').style.display = 'none';
		$('white').style.display = 'none';
	}

	$('dropdown4').onmouseover = function(){
		$('dropdown-content4').style.display = 'block';
			$('white').style.display = 'block';
	}
	$('dropdown4').onmouseout = function(){
		$('dropdown-content4').style.display = 'none';
			$('white').style.display = 'none';
	}

	$('dropdown5').onmouseover = function(){
		$('dropdown-content5').style.display = 'block';
			$('white').style.display = 'block';
	}
	$('dropdown5').onmouseout = function(){
		$('dropdown-content5').style.display = 'none';
		$('white').style.display = 'none';
	}
}