(function(){

	var Latitude = 39.859345;
	var Longitude = -4.004639;


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'jsonp'
	})
	.done(function( data ){
		
		console.log("Correcto!");
		var tiempo=data;
		var html='';
		html+='	<tr>';
		html+='		<th>'+tiempo.main.temp+'ºC'+'</th>';
		html+='		<th>'+tiempo.main.humidity+'</th>';
		html+='		<th>'+tiempo.wind.speed+'m/s dirección '+tiempo.wind.deg+'</th>';
		html+='<th>'
		for(var j=0;j<tiempo.weather.length;j++){
			html+='		<span class="label label-primary">'+tiempo.weather[j].description+'</span>';
		}
		html+='</th>';
		html+='	</tr>';
		$(".table").append(html);
		console.log( data ); // Se imprime en consola la api


	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();