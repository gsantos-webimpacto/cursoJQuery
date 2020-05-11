(function(){
    $.smallbox = function(opciones){
        opciones = $.extend({
            color: "green",
            timeout: 3000,
            img:undefined,
            fa:"fa-envelope-o",
            
        },opciones);
    var html="";
    html += '<div class="smallBox-contenedor">';
    if(opciones.img!= undefined){
        html += '<div class="smallBox-foto">';
        html += '	<img src="'+opciones.img+'">';
        html += '</div>';
    }
	html += '<div class="smallBox-contenido" align="center">';
	html += '	<div class="smallBox-cajaColor">';
	html += '	    <div class="smallBox-textoContenedor">';
	html += '		    <span class="smallBox-titulo">Guillermo Santos</span>';
	html += '		    <span class="smallBox-subtitulo">Toledo, ES</span>';
	html += '	    </div>';
	html += '		<div class="smallBox-colorIcon">';
	html += '			<i class="fa '+opciones.fa+' fa-2x"></i>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';
    html += '<div> ';
    
    $("body").append(html);

    animar_entrada();
    
    setTimeout(function(){
            animar_salida();
        },opciones.timeout);
    }

    function animar_salida(){
        var $smallBox = $(".smallBox-contenedor");
        var tl = new TimelineMax();
        tl.to($smallBox,1,{x:"+=100px"})
            .to($smallBox,1,{opacity:0, onComplete: remover_smallbox},"-=1");
    }

    function remover_smallbox(){
        $(".smallBox-contenedor").remove();
    }

    function animar_entrada(){
        var $smallBox = $(".smallBox-contenedor");
        var tl = new TimelineMax();
        tl.from($smallBox,1.6,{x:"+=100px",ease: Bounce.easeOut})
            .from($smallBox,1,{opacity:0},"-=1.6");
    }

})();