<template>
    <div>
        <div class="contenedor">
            <section class="centro">
                <section class="container col-10 col-sm-10 col-lg-10 col-xxl-10"></section>
                <section class="
                d-flex
                justify-content-center
                container-fluid
                contenedor-registro">

                <section class="registro col-8 col-sm-4 col-lg-4 col-xxl-">
                    <b-card-group deck>
                        <b-card header-bg-variant="success" text-variant="black" header="REGISTRO" class="text-center" >
                            <b-card-text>
                                <form class="formulario">
                                    <div class="container">
                                        <div class="form-group left">
                                            <label for="" class="control-label col-sm-2">Nombre</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                                            </div>
                                            <label for="" class="control-label col-sm-2">Apellido</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Apellido" id="Apellido" v-model="form.Apellido">
                                            </div>
                                            <label for="" class="control-label col-sm-5">Correo Electronico</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Correo electronico" id="correo electronico" v-model="form.correoElectronico">
                                            </div>
                                            <label for="" class="control-label col-sm-7">Crear Contraseña</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Crear contraseña" id="Crear contraseña" v-model="form.crearContraseña">
                                            </div>
                                            <label for="" class="control-label col-sm-10">Confirmar Contraseña</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Confirmar contraseña" id="Confirmar contraseña" v-model="form.confirmarContraseña">
                                            </div>
                                            <label for="" class="control-label col-sm-5">Telefono</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Telefono" id="Telefono" v-model="form.Telefono">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <b-button class="boton" to="/InicioPantallaView" >Crear Usuario</b-button>
                                    </div>
                                </form>
                            </b-card-text>
                        </b-card>
                    </b-card-group>
                </section>

                </section>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name:"RegistroView",
    data(){
        return{
            form:{
             "nombre":"",
             "Apellido":"",
             "correoElectronico":"",
             "crearContraseña":"",
             "confirmarContraseña":"",
             "Telefono":""
            }
        }
    },
    components:{
    },
    methods:{
    }
}
</script>

<style scoped>
.contenedor{
    margin: 5%;
}

.boton{
    background-color: rgb(27, 87, 27);
}
</style>