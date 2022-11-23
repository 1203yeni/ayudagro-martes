
<template>
    <div>
        <div class="medio">
            <section class="centro">
                <section class="container col-10 col-sm-10 col-lg-10 col-xxl-10"></section>
                <section class="
                d-flex
                justify-content-center
                container-fluid
                contenedor-inicio">
            <!--parte de encabezado-->

            <section class="inicio col-10 col-sm-8 col-lg-4 col-xxl-7">
                <b-card-group deck>
                <b-card header-bg-variant="success" text-variant="black" header="Nueva Contraseña" class="text-cente">
                    <b-card-text>
                        <form class="formulario">
                            <!--termina el encabezado-->

                         
                    <div class="mb-3">
                      <label class="form-label">Nueva Contraseña</label>
                      <b-input-group class="mb-3 icono">
                        <!-- iconono de correo -->
                        <div class="input-group-text" id="btnGroupAddon">
                          <b-icon icon="lock-fill"></b-icon>
                        </div>
                        <!-- termina iconono de correo -->
                        <input required class="form-control borde" :type="showPassword ? 'password' : 'text'"
                          :class="{ 'error': validaclave }" placeholder="Ingrese su nueva contraseña"
                          aria-describedby="btnGroupAddon" v-model="form.clave" />
                      </b-input-group>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label" placeholder="Correo">Confirmar
                        contraseña</label>
                      <b-input-group class="mb-3 icono">
                        <!-- iconono de correo -->
                        <div class="input-group-text" id="btnGroupAddon">
                          <b-icon icon="lock-fill"></b-icon>
                        </div>
                        <!-- termina iconono de correo -->
                        <input required :type="showPassword ? 'password' : 'text'" class="form-control borde"
                          :class="{ 'error': validaRepetirclave }" placeholder="Confirmar contraseña"
                          aria-describedby="btnGroupAddon" v-model="clavedos" />
                        <div class="contraseña">
                          
                        </div>
                      </b-input-group>
                    </div>
                    <b-button pill variant type="submit" class="boton  d-grid gap-2 mx-auto">Confirmar
                    </b-button>
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
    name:"NuevaContraseñaView",
    components: {

    },
    data() {
        return {
            showPassword: true,
            message: "",
            form: {
                clave: "",
            },
            clavedos:"",
        };
    },
    mounted() {

    },
    methods:{
        nuevoregistro(id){
            alert("estoy en nuevo  : " + id);
        this.$router.push("nuevopost/" + id);
        }

    },
};
</script>

<style scoped>
.boton{
    background-color: green;
}

.medio{
  margin: 5%;
}

</style>