function responsive_menu(){
	var e = document.getElementById('menu_small');
	if(e.className === 'menu_list'){
		e.className += " responsive";
	}else{
		e.className = 'menu_list';
	}
}
		
		