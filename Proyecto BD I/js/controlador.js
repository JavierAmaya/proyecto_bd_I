$("#enviar-compra").click(function(){
    console.log("entro");


    $.ajax({
        url:"../ajax/usuario.php?accion=almacenarCompraUsuario",
        dataType: "json",
        method:"POST",
        
        
        success: function(respuesta){
            
            console.log(respuesta);
            
            
            
        },
        error:function(error){
            console.log("valio");
        }
    })
});

$( "#btn-inicio-sesion" ).click(function() {
    //alert( "Handler for .click() called." );
    window.location.href = "index.html";
  });