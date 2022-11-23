<template>
    <div>
        <HeaderComponent  class="header"/>
        <div class="medio">
            <div class="centro">
                <section class="container col-10 col-sm-10 col-lg-10- col-xxl-10"></section>
                <section class="
                d-flex
                justify-content-center
                container-fluid
                contenedor-inicio
                ">

                <section class="inicio col-8 col-sm-6 col-lg-4 col-xxl-6">
                    <b-card-group deck>
                        <b-card header-bg-variant="success" text-variant="black" header="Recuperar Contraseña" class="text-center">
                            <b-card-text>
                                <form class="formulario">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label" placeholder="Correo">Correo Electronico</label>
                                        <b-input-group class="mb-3 icono">
                                        <!--icono del correo-->
                                        <div class="input-group-text" id="btnGroupAddon">
                                            <b-icon icon="person-fill"></b-icon>
                                        </div>
                                        <!--terminacion de icono de correo-->
                                        <input type="text" class="form-control" placeholder="Ingrese su correo"
                                        aria-describedby="btnGroupAddon" v-model="form.email"/>
                                    </b-input-group>
                                    </div>
                                    <b-button 
                                    pill 
                                    variant 
                                    type="submit"
                                    class="boton d-grid gap-2 mx-auto"
                                    to="/RecuperarCodigoView" 
                                    >Enviar 
                                </b-button>
                                </form>
                            </b-card-text>
                        </b-card>
                    </b-card-group>
                </section>
            </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"RecuperarclaveView",
    components: {
        
    },
    data(){
        return {
            id:"",
            message: "",
            form: {
                email:""
            },
        };
    },
    mounted() {

    },
}
</script>

<style scoped>
.boton {
    background-color: green;
}
.medio{
    margin: 5%;
}
</style>