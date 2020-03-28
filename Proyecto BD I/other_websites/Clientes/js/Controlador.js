$(document).ready(function(){
    
});



function clientsInformation(){
    $('#File_position').html($(`
        <input type="button" value="Clientes" onclick="location.reload()" class="File_accion">
    `));
    $('#File_position').append($(`
        <span>/</span>
        <input type="button" value="Información Cliente" onclick="clientsInformation()" class="File_accion">
    `));
    $('#Contenido').html($(`
    `))
}