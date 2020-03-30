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
        <div class="color-contenido margin-cero ">
            <div><h1 style=" text-align: center; ">Información Cliente </h1></div>
            <div class="margin-cero row" style=" margin-left: 0px; margin-right: 0px; ">
                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-12">
                    <div class="col-12" id="foto-Productos">
                        <h1>Cliente: <span>NameClient</span></h1>
                        <img src="../../src/img/User-Proveedor.jpg" width="100%" alt="">
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-12 ">
                    <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                        <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Nombre Cliente</p><input value="Juan Perez"  class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" type="text" name="" id="">
                    </div>
                    <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                        <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Correo</p><input value="juan.perez@gmail.com"  class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" type="text" name="" id="">
                    </div>
                    <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                        <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Teléfono</p><input type="tel" class="TamanioImput col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12" id="phone" name="phone" placeholder="1235-4678" pattern="[0-9]{4}-[0-9]{4}" required>
                    </div>
                    <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                        <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Dirreción 1</p>
                        <div class="col-6" style="height: 80px; padding-left: 0px;padding-right: 0px;">
                            <textarea class="col-sm-12 col-md-12 col-lg-6 col-xl-12 col-12" name="" id="" style="font-size: 15px; width: -webkit-fill-available; height: -webkit-fill-available; "></textarea>
                        </div>
                    </div>
                    <div class="marginProductsTextInfo col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 row">
                        <p class="OrieTextInfoProduct col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12">Dirreción 2</p>
                        <div class="col-6" style="height: 80px; padding-left: 0px;padding-right: 0px;">
                            <textarea class="col-sm-12 col-md-12 col-lg-6 col-xl-12 col-12" name="" id="" style="font-size: 15px; width: -webkit-fill-available; height: -webkit-fill-available; "></textarea>
                        </div>
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
}