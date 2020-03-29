$(document).ready(function(){
    
});



function InfoProducts(){
    $('#File_position').html($(`
        <input type="button" value="Productos" onclick="location.reload()" class="File_accion">
    `));
    $('#File_position').append($(`
        <span>/</span>
        <input type="button" value="información Productos" onclick="InfoProducts()" class="File_accion">
    `));
    $('#Contenido').html($(`
    <div class="color-contenido margin-cero ">
    <div><h1 style=" text-align: center; ">Información Producto </h1></div>
    <div class="margin-cero row" style=" margin-left: 0px; margin-right: 0px; ">
        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-12">
            <div class="col-12" id="foto-Productos">
                <h1>Producto: <span>NameProducts</span></h1>
                <img src="../../src/img/products.png" width="100%" alt="">
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-12 ">
            <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Nombre Producto</p><input value="Tubo PVC"  class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" type="text" name="" id="">
            </div>
            <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Proveedor</p><input value="Amanco"  class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" type="text" name="" id="">
            </div>
            <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                <p class="OrieTextInfoProduct col-sm-4 col-md-4 col-lg-6 col-xl-6 col-4">Impuesto</p><input type="checkbox" checked name="" id="TamaniCheckbox">
            </div>
            <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row" style="margin-bottom: 5px;">
                <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Categoria</p><select style="font-size: 20px;" class="TamanioImput form-control col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" name="" id="" value="1"><option value="0">Eléctricidad</option><option value="1">Fontaneria</option><option selected value="2">Tubería</option></select>
            </div>
            <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Presentación</p><input  class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" type="text" name="" id="">
            </div>
            <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Tamaño</p><input  class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" type="text" value="4 pulg" name="" id="">
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