(function(){

    $.bigBox = function(opciones, callback){
        opciones = $.extend({
            fa:"far fa-thumbs-up",
            titulo: undefined,
            contenido: undefined,
            boton:"Aceptar"
        },opciones);

        if(opciones.titulo === undefined){
            alert('El título es necesario');
            return;
        }
        if(opciones.contenido=== undefined){
            alert('El contenido es necesario');
            return;
        }

        var contenido = '<div class="bigBox-fondo"></div>'
        contenido += '<div class="bigBox-contenedor" align="center">';
        contenido += '<div class="bigBox-cerrar"><i class="fas fa-times"></i></div>';
        contenido += '<div class="bigBox-circulo"><i class="'+opciones.fa+'"></i></div>';
        contenido += '<div class="bigBox-contenido">';
        contenido += '<span class="bigBox-titulo">'+opciones.titulo+'</span>';
        contenido += '<span class="bigBox-texto">'+opciones.contenido+'</span>';
        contenido += '</div>';
        contenido += '<button class="bigBox-boton">'+opciones.boton+'</button>';
        contenido += '</div>';
        $("body").append(contenido);

        animar_entrada();

        //Funcion del boton Cerrar
        $(".bigBox-cerrar").on("click",function(){
            animar_salida();
            if(typeof callback == 'function'){
                callback('boton-cerrar');
            }
        });

        //Funcion del boton principal
        $(".bigBox-boton").on("click",function(){
            animar_salida();
            if(typeof callback == 'function'){
                callback('boton-principal');
            }
        });

        //Animar la entrada
        function animar_entrada(){
            var $fondo = $(".bigBox-fondo");
            var $contenedor= $(".bigBox-contenedor");

            var anchoP = $(window).width();
            var altoP = $(window).height();

            var anchoC=$contenedor.width();
            var altoC=$contenedor.height();

            $contenedor.css({
                top:(altoP/2) - (altoC/2),
                left:(anchoP/2) - (anchoC/2)
            })

            //$fondo.fadeIn(300);
            $fondo.show();
            $contenedor.show();
            var tl =new TimelineMax();
            tl.to($fondo,0.5,{opacity:0.3})
                .to($contenedor,0.5,{opacity:1}, "-=0.5" )
                .from($contenedor, 0.8,{y:"-=20",ease: Bounce.easeOut}, "-=0.5" );
        }
        //Animar la salida
        function animar_salida(){
            var $fondo = $(".bigBox-fondo");
            var $contenedor= $(".bigBox-contenedor");
            // $fondo.show();
            // $contenedor.show();
            var tl =new TimelineMax();
            tl.to($fondo,0.3,{opacity:0})
                .to($contenedor,0.3,{opacity:0,onComplete:remover_bigBox}, "-=0.3");
        }
        function remover_bigBox(){
            var $fondo = $(".bigBox-fondo");
            var $contenedor= $(".bigBox-contenedor");
            $fondo.remove();
            $contenedor.remove();
        }
    };
})();