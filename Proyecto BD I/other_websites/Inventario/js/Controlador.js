$(document).ready(function(){
    
});


function Productos(){
    $('#File_position').html($(`
        <input type="button" value="Productos" onclick="Productos()" class="File_accion">
    `));
    $('#Contenido').html($(`
        <div class="row" id="C´-Prducts" style=" margin-left: auto; margin-right: auto; width: 98%; "style=" margin-left: auto; margin-right: auto; width: 98%; ">
            <div class=" col-12" id="C-Products">
                <div class="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-12 Div-Products" onclick="InfoProducts()">
                    <img class="col-12" src="../../src/img/products.png" style="width: 100%;" alt="">
                    <p class="TxtNameProducts">Nombre Producto</p>
                    <p class="TxtinfoProducts">Casa Distribuidora</p>
                    <p class="TxtinfoProducts">Precio Producto</p>
                </div>
            </div>
        </div>
    `))
}
function InfoProducts(){
    Productos();
    $('#File_position').append($(`
        <span>/</span>
        <input type="button" value="información Productos" onclick="InfoProducts()" class="File_accion">
    `));
    $('#Contenido').html($(`
        <div class="color-contenido margin-cero ">
            <div><h1 style=" text-align: center; ">Informacion Producto </h1></div>
            <div class="margin-cero row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 col-12">
                    <div class="col-12" id="foto-Productos">
                        <h1>Producto: <span>NameProducts</span></h1>
                        <img src="../../src/img/products.png" width="100%" alt="">
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7 col-12">
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                        <h1 class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Nombre Producto</h1><input  class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" type="text" name="" id="">
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                        <h1 class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Proveedor</h1><input  class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" type="text" name="" id="">
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                        <h1 class="OrieTextInfoProduct col-sm-4 col-md-4 col-lg-6 col-xl-6 col-4">Impuesto</h1><input type="checkbox" name="" id="TamaniCheckbox">
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12" style="margin-bottom: 5px;">
                        <h1 class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Categoria</h1><select style="font-size: 20px;" class="TamanioImput form-control col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" name="" id=""><option value="0">Eléctricidad</option><option value="0">Fontaneria</option></select>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                        <h1 class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Presentación</h1><input  class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" type="text" name="" id="">
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
    `));
}