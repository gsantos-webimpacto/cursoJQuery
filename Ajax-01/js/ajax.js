(function(){

    $.ajax({
        type: 'GET',
        url: 'http://www.json-generator.com/api/json/get/ckDJxMNkLC?indent=2',
        dataType: 'json'
    })
    .done(function(data){
        $("#picFoto").attr("src",data.picture);
        $("#txtNombre").val(data.name);
        $("#txtDireccion").val(data.address);
        $("#txtGenero").val(data.gender);
        $("#txtTelefono").val(data.phone);
    })
    .fail(function(){
        console.log("Fallo!");
    })
    .always(function(){
        console.log("Completo!");
    });







})();