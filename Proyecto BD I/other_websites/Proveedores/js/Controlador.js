$(document).ready(function(){
    
});



function ProviderInformation(){
    $('#File_position').html($(`
        <input type="button" value="Proveedores" onclick="location.reload()" class="File_accion">
    `));
    $('#File_position').append($(`
        <span>/</span>
        <input type="button" value="Información Proveedor" onclick="ProviderInformation()" class="File_accion">
    `));
    $('#Contenido').html($(`
    `))
}