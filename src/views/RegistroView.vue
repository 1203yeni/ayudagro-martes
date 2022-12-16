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
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-card-group deck>
                                <b-card header-bg-variant="success" text-variant="black" header="REGISTRO"
                                    class="text-center">
                                    <b-card-text>
                                        <form class="formulario">
                                            <div class="container">
                                                <div class="form-group left">
                                                    <label for="" class="control-label col-sm-7">Nombre</label>
                                                    <div class="col-sm-15">

                                                        <input type="text" class="form-control" name="nombre"
                                                            id="nombre" v-model="form.nombre">
                                                    </div>
                                                    <label for="" class="control-label col-sm-7">Apellido</label>
                                                    <div class="col-sm-15">
                                                        <input type="text" class="form-control" name="Apellido"
                                                            id="Apellido" v-model="form.apellido">
                                                    </div>

                                                    <label for="" class="control-label col-sm-7">Nick_name</label>
                                                    <div class="col-sm-15">
                                                        <input type="text" class="form-control" name="Nick-name"
                                                            id="Nick-name" v-model="form.nickName">
                                                    </div>
                                                    <label for="" class="control-label col-sm-7">PassWorld</label>
                                                    <div class="col-sm-15">
                                                        <input type="password" class="form-control" name="PassWorld"
                                                            id="Password" v-model="form.PassWorld">
                                                    </div>

                                                    <div>

                                                        <b-form-group id="input-group-1" label="Email address:"
                                                            label-for="input-1" description="">
                                                            <b-form-input id="input-1" class="form-control" name="Email"
                                                                v-model="form.Email" type="email"
                                                                placeholder="Enter email" required></b-form-input>
                                                        </b-form-group>



                                                    </div>
                                                    <label for="" class="control-label col-sm-7">Direccion</label>
                                                    <div class="col-sm-15">
                                                        <input type="text" class="form-control" name="Direccion"
                                                            id="Direccion" v-model="form.direccion">
                                                    </div>
                                                    <br>

                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <b-button type="submit" class="boton" @click="GuardarUsuario()">Crear
                                                    Usuario</b-button>
                                            </div>

                                        </form>

                                    </b-card-text>
                                </b-card>
                            </b-card-group>
                        </b-form>
                    </section>

                </section>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "RegistroView",
    data() {
        return {
            form: {
                "idRol": 1,
                "nombre": '',
                "apellido": "",
                "nickName": "",
                "PassWorld": "",
                "Email": "",
                "direccion": ""

            },
            foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true,
            listar: null,
        }
    },
    components: {
    },
    methods: {
        onReset(event) {
            event.preventDefault()
            this.form.email = ''

        },

        GuardarUsuario() {
            alert("registro exitoso")
            axios.post("http://localhost:3000/nuevoAgricultor", this.form).then(response => {
                console.log(response)
            })
            this.$router.push("/");
        }
    },
    mounted(){
    axios.get("http://localhost:3000/pregunta").then(response=>{
      this.listar=response.data
    })  
  },
}
</script>

<style scoped>
.contenedor {
    margin: 10px;
}

.boton {
    background-color: rgb(27, 87, 27);
}

.formulario {
    margin: 11px;
}
</style>
