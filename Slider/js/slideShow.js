(function(){
    var actual = 0;
    var ancho = 600;

    var $slideshow = $(".slideShow ul");
    var slide = $slideshow.find("li").length;
    
    var intervalo = setInterval(function(){

        mover("sig");

    },1500);

    function mover(dir, click){

        if (click)
            clearInterval(intervalo);
        
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

        var margen = actual*ancho;

        // $slideshow.animate({
        //     marginLeft: margen
        // },400);
        var tl = new TimelineMax();
        tl.to($slideshow,1,{ marginLeft:margen, ease: Elastic.easeOut.config(1, 0.8)});
    }

    $(".botSlide").on("click",function(){
        var dir = $(this).data("mov");
        mover(dir,true);
    })
})();