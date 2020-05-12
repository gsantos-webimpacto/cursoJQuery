(function(){
	
	$(document).ready(function(){

        $.ajax({
			type: 'POST',
			url : 'php/servicios/get.alumnos.php',
			dataType: 'json',
		})
		.done(function( data ){
			
			console.log("Correcto!");

			console.log( data ); // Se imprime en consola la api

            if(data.error){
                alert("Algo raro pasó");
                return;
            }
            data.alumnos.forEach(function(alumno,index){
                var content="";
                content+='   <tr id="fila'+alumno.id+'">';
                content+='   <td>'+alumno.id+'</td>';
                content+='   <td>'+alumno.nombre+'</td>';
                content+='   <td>';
                content+='   <a href="actualizar.html?id='+alumno.id+'" class="btn btn-primary"><i class="fa fa-edit"></i></a>';
                content+='   </td>';
                content+='   <td>';
                content+='       <a href="" data-nombre="'+alumno.nombre+'" data-id="'+alumno.id+'" class="btn btn-danger btnEliminar"><i class="fa fa-trash-o"></i></a>';
                content+='   </td>';
                content+='   </tr>';
                $("#tblRegistros").append(content);
            })
		})
		.fail(function(){
			console.log("Fallo!");
        });
        
    });

    $("body").on("click",".btnEliminar",function( e ){
        e.preventDefault();
        var nombre = $(this).data('nombre');
        var id= $(this).data('id');
        swal({
            title: "¿Estás seguro?",
            text: "De querer borrar a:"+nombre,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                borrarRegistro(id);
            } else {
              swal("Cancelado");
            }
          });

        //Cuando estamos seguros que lo deseamos borrar
       
    
    });

    function borrarRegistro(id){
        // var id= $(this).data('id');
        // console.log(id);

        $.ajax({
			type: 'POST',
			url : 'php/servicios/post.eliminaralumno.php?id='+id,
			dataType: 'json',
        })
        .done(function( data ){
            console.log("Correcto!");
            console.log( data ); // Se imprime en consola la api
            $("#fila"+id).remove();
            swal("Borrado! El regiistro ha sido eliminado correctamente!", {icon: "success"});
        });
    }

})();