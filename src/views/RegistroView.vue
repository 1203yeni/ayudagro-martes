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

                <section class="registro col-8 col-sm-4 col-lg-4 col-xxl-5">
                    <b-card-group deck>
                        <b-card header-bg-variant="success" text-variant="black" header="REGISTRO" class="text-center" >
                            <b-card-text>
                                <form class="formulario">
                                    <div class="container">
                                        <div class="form-group left">
                                            <label for="" class="control-label col-sm-7">Nombre</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                                            </div>
                                            <label for="" class="control-label col-sm-7">Apellido</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Apellido" id="Apellido" v-model="form.Apellido">
                                            </div>
                                            <label for="" class="control-label col-sm-7">Nick_name</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Nick-name" id="Nick-name" v-model="form.Nick_name">
                                            </div>
                                            <label for="" class="control-label col-sm-7">Password</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Password" id="Password" v-model="form.Password">
                                            </div>
                                            <label for="" class="control-label col-sm-7">Email</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Email" id="Email" v-model="form.Email">
                                            </div>
                                            <label for="" class="control-label col-sm-7">Direccion</label>
                                            <div class="col-sm-15">
                                                <input type="text" class="form-control" name="Direccion" id="Direccion" v-model="form.Direccion">
                                            </div>
                                            <br>
                                            
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <b-button class="boton" @click="GuardarUsuario()">Crear Usuario</b-button>
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
    // import axios from'axios',
    name:"RegistroView",
    data(){
        return{
            form:{
             "nombre":"",
             "Apellido":"",
             "Nick_name":"",
             "Password":"",
             "Email":"",
             "Direccion":""
             
            }
        }
    },
    components:{
    },
    methods:{
       /* GuardarUsuario() {
            axios.post("http://localhost:3000/nuevoAgricultor",this.form).then(response=>{
                console.log(response)
            })
        }*/
    }
}
</script>

<style scoped>
.contenedor{
    margin: 10px;
}

.boton{
    background-color: rgb(27, 87, 27);
}
.formulario{
    margin:10px;
}
</style>