app.filter('price',function(){
	return function(number){
		return number/100 + '元';
	}
})