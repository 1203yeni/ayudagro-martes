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
                                            <label for="" class="control-label col-sm-5">Nick-name</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Nick-name" id="Nick-name" v-model="form.correoElectronico">
                                            </div>
                                            <label for="" class="control-label col-sm-7">Password</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Password" id="Password" v-model="form.crearContraseña">
                                            </div>
                                            <label for="" class="control-label col-sm-10">Email</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Email" id="Email" v-model="form.confirmarContraseña">
                                            </div>
                                            <label for="" class="control-label col-sm-5">Direccion</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Direccion" id="Direccion" v-model="form.Telefono">
                                            </div>
                                            <label for="" class="control-label col-sm-5">Puntos_Estudios</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Puntos_Estudios" id="Puntos_Estudios" v-model="form.Telefono">
                                            </div>
                                            <label for="" class="control-label col-sm-5">Puntos_Participacion</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Puntos_Participacion" id="Puntos_Participacion" v-model="form.Telefono">
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
             "Nick-name":"",
             "Password":"",
             "Email":"",
             "Direccion":"",
             "Puntos_Estudios":"",
             "Puntos_Participacion":""
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