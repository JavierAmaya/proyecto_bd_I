$(document).ready(function(){
    
});
function FacturasPorCobrar(){
    $('#File_position').html($(`
        <input type="button" value="Facturas Por Cobrar" class="File_accion">
    `));
    $('#File_position').append($(`
        <span>/</span>
    `));
    $('#Contenido').html($(`
    `))
}
function FacturasPorPagar(){
    $('#File_position').html($(`
        <input type="button" value="Facturas Por Pagar" onclick="FacturasPorPagar()" class="File_accion">
    `));
    $('#Contenido').html($(`
        <div class="col-12 row" id="color-tittle-list-bills-pay">
            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3 col-6 "><h2 class="sizeLetters">Nombre Proveedor</h2></div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-6 "><h2 class="sizeLetters">Facturas</h2></div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-6 "><h2 class="sizeLetters">fecha emitida</h2></div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-6 "><h2 class="sizeLetters">Nombre Limited</h2></div>
            <div class="col-sm-4 col-md-3 col-lg-3 col-xl-1 col-4 "><h2 class="sizeLetters">Estado</h2></div>
            <div class="col-sm-4 col-md-3 col-lg-3 col-xl-1 col-4 "><h2 class="sizeLetters">Monto</h2></div>
            <div class="col-sm-4 col-md-3 col-lg-3 col-xl-1 col-4 "><h2 class="sizeLetters">ISV</h2></div>
        </div>
        <div class="line-contenido"></div>
    `))
    $('#Contenido').append($(`
        <div class="col-12" id="List-style-bills-pay" >
            <div class="col-12 row" id="color-descriptionA-list-bills-pay">
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3 col-6 "><input type="button" onclick="infoBillsPay()" class="sizeLetters Button-bills-provider" Value="Truper"></div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-6 "><input type="button" onclick="infoBillsPay()" class="sizeLetters Button-bills-provider" Value="00000102001"></div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-6 "><h2 class="sizeLetters">11/01/2020</h2></div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-6 "><h2 class="sizeLetters">26/01/2020</h2></div>
                <div class="col-sm-4 col-md-3 col-lg-3 col-xl-1 col-4 "><h2 class="sizeLetters">Pagado</h2></div>
                <div class="col-sm-4 col-md-3 col-lg-3 col-xl-1 col-4 "><h2 class="sizeLetters">10,582.50</h2></div>
                <div class="col-sm-4 col-md-3 col-lg-3 col-xl-1 col-4 "><h2 class="sizeLetters">1,587.37</h2></div>
            </div>
            <div class="col-12 row" id="color-descriptionB-list-bills-pay">
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3 col-6 "><input type="button" onclick="infoBillsPay()" class="sizeLetters Button-bills-provider" Value="CementosX"></div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-6 "><input type="button" onclick="infoBillsPay()" class="sizeLetters Button-bills-provider" Value="00000102002"></div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-6 "><h2 class="sizeLetters">12/03/2020</h2></div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-6 "><h2 class="sizeLetters">12/04/2020</h2></div>
                <div class="col-sm-4 col-md-3 col-lg-3 col-xl-1 col-4 "><h2 class="sizeLetters">Pendiente</h2></div>
                <div class="col-sm-4 col-md-3 col-lg-3 col-xl-1 col-4 "><h2 class="sizeLetters">25,785.30</h2></div>
                <div class="col-sm-4 col-md-3 col-lg-3 col-xl-1 col-4 "><h2 class="sizeLetters">3,867.79</h2></div>
            </div>
        </div>
    `))
}
function Empleados(){
    $('#File_position').html($(`
        <input type="button" value="Empleados" class="File_accion">/
    `));
    $('#Contenido').html($(`
    `))
}
function Proveedores(){
    $('#File_position').html($(`
        <input type="button" value="Proveedores" class="File_accion">/
    `));
    $('#Contenido').html($(`
    `))
}
function Clientes(){
    $('#File_position').html($(`
        <input type="button" value="Clientes" class="File_accion">/
    `));
    $('#Contenido').html($(`
    `))
}
function Productos(){
    $('#File_position').html($(`
        <input type="button" value="Productos" class="File_accion">/
    `));
    $('#Contenido').html($(`
    `))
}
function infoBillsPay(){
    FacturasPorPagar();
    $('#File_position').append($(`
        <span>/</span>
        <input type="button" value="información Factura" onclick="infoBillsPay()" class="File_accion">
    `));
    $('#Contenido').html($(`
    `))
}