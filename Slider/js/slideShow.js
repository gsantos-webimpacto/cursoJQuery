(function(){
    var actual = 0;
    var ancho = 600;

    var $slideshow = $(".slideShow ul");
    var slide = $slideshow.find("li").length;
    var $puntos = $(".slideShowButtons");
    
    var intervalo = setInterval(function(){
        mover("sig");
    },1500);

    function mover(dir, click){
        
        (dir === "sig") ? actual--:actual++;
        // if(dir==="sig"){
        //     actual++;
        // }else{
        //     actual--;
        // }

        if( actual >0){
            actual=(slide -1 )* -1;
        }else{
            if(actual<-slide+1){
                actual=0;
            }
        }

        mover_por_punto(actual)
       
    }

    function mover_por_punto (actual,click){

        if (click)
            clearInterval(intervalo);

        var margen = actual*ancho;

        var idx = actual*-1;
        var $puntoActual = $puntos.find("div").eq( idx );
        var $demasPuntos = $puntos.find("div").not($puntoActual);
        // $slideshow.animate({
        //     marginLeft: margen
        // },400);
        var tl = new TimelineMax();
        tl.to($slideshow,1,{ marginLeft:margen, ease: Elastic.easeOut.config(1, 0.8)})
            .to($puntoActual,0.5,{backgroundColor:"#58167d"},"-=1.2")
            .to($demasPuntos,0.5,{backgroundColor:"#a1a1a1"},"-=1.2");

    }
    $(".slideButton").on("click",function(){
        var idx = $(this).data("idx");
        idx=idx * -1;
        console.log(idx);
        mover_por_punto(idx,true);
    });
    $(".botSlide").on("click",function(){
        var dir = $(this).data("mov");
        mover(dir,true);
    })
})();