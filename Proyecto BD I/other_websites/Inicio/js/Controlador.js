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
        <div class="color-contenido margin-cero">
        <div><h1 style=" text-align: center; ">Facturas Por Pagar </h1></div>
        <div class="margin-cero row">
            <div class="col-6"><h1>No. Facturas</h1></div>
            <div class="col-6"><h1 style=" text-align: end;">Proveedor</h1><div class="col-sm-8 col-md-8 col-lg-4 col-xl-2 col-12" id="foto-proveedor"><img src="../../src/img/User-Proveedor.jpg" width="100%" alt=""></div></div>
        </div>
        <div class="margin-cero col-12" style=" height: 500px;">
            <div class="col-12"><h1>Productos</h1></div>
            <div class="boder-list-bills-pay col-12 row" id="color-description">
                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-12"><h4>Producto</h4></div>
                <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">Cantidad</h4></div>
                <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">Precio Unitario</h4></div>
                <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">ISV</h4></div>
                <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">total</h4></div>
            </div>
            <div class="col-12 " id="Produts-generate-bills" style="margin-left: 0px; padding-left: 0px; padding-right: 0px;overflow: auto;">
                <div class="boder-list-bills-pay col-12 row Products-list" id="ProductsA">
                    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-12"><h4 style="">cemento</h4></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">20</h4></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">240</h4></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><select class="Select-tax-products text-list-products" style="font-size:15px; background-color: transparent;" name="" id="Impuesto-bills-pay"><option value="0">ISV</option><option value="1">EXECTO</option></select></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">4,800.00</h4></div>
                </div>
                <div class="boder-list-bills-pay col-12 row Products-list" id="ProductsB">
                    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-12"><h4>Bloques</h4></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6" ><h4 class="text-list-products">1000</h4></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6" ><h4 class="text-list-products">40</h4></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6" ><select class="Select-tax-products text-list-products" style="font-size:15px; background-color: transparent;" name="" id="Impuesto-bills-pay"><option value="0">ISV</option><option value="1">EXECTO</option></select></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6" ><h4 class="text-list-products">4,000.00</h4></div>
                </div>
                <div class="boder-list-bills-pay col-12 row Products-list" id="ProductsA">
                    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-12"><h4 style="">Arena</h4></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">300</h4></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">3</h4></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><select class="Select-tax-products text-list-products" style="font-size:15px; background-color: transparent;" name="" id="Impuesto-bills-pay"><option value="0">ISV</option><option value="1">EXECTO</option></select></div>
                    <div class="col-sm-6  col-md-3  col-lg-2 col-xl-2 col-6 "><h4 class="text-list-products">900.00</h4></div>
                </div>
            </div>
        </div>
        <div class="line-contenido"></div>
        <div class="col-12" style=" height: 100px;">
            <textarea style="font-size: 15px; width: -webkit-fill-available; height: -webkit-fill-available; " name="" placeholder="Observaciones" id="observations-bills-pay" ></textarea>
        </div>
        <div class="line-contenido"></div>
        <div class="col-12 row">
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-12 row" style=" height: 27px; ">
                <h2 class="col-6">Anticipo</h2>
                <input class="col-6" type="text" name="" value="2,0000.00" id="Anticipo" style="font-size: 15px;">
            </div>
            <!--div class="line"></div-->
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5 col-12 " style=" margin-left: auto; ">
                <div class="col-12 hide-information">
                    <br>
                    <hr>
                    <br>
                </div>
                <div class="col-12 row">
                    <h2 class="col-6 Amount-Gross-text">Anticipo</h2>
                    <input class="col-6 Amount-Gross" type="text" value="2,0000.00" disabled name="">
                </div>
                <div class="col-12 row">
                    <h2 class="col-6 Amount-Gross-text">SubTotal</h2>
                    <input class="col-6 Amount-Gross" type="text" value="7,700.00" disabled name="">
                </div>
                <div class="col-12 row">
                    <h2 class="col-6 Amount-Gross-text">Impuesto</h2>
                    <input class="col-6 Amount-Gross" type="text" value="1,320.00" disabled name="">
                </div>
                <div class="col-12 row">
                    <h2 class="col-6 Amount-Gross-text">Total</h2>
                    <input class="col-6 Amount-Gross" type="text" value="8,380.00" disabled name="">
                </div>
            </div>
        </div>
        <div class="line-contenido"></div>
        <div class="col-12" style="padding-bottom: 15px;height: 45px;">
            <div class="col-sm-12  col-md-10  col-lg-8 col-xl-4 col-10 row" style=" margin-left: auto;margin-top: 5px;">
                <input style="font-size: 15px;" class="col-6 btn btn-outline-primary" type="button" value="Guardar Cambios">
                <input style="font-size: 15px;" class="col-6 btn btn-outline-secondary" type="button" value="Cancelar">
            </div>
        </div>
    </div>
    `))
    var Impuesto = ["ISV","EXECTO"];
    $('#Impuesto-bills-pay').html($(``))
    for(var i=0; i<Impuesto.length;i++){
        $('#Impuesto-bills-pay').append($(`
            <option value="${i}">${Impuesto[i]}</option>
        `))
    };
}