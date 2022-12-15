<template>
    <div>
    <!--<div>
        <nav class="encabezado">
            <img class="logo" src="../assets/logo1.png" alt="logo">
            
          
        </nav>
    </div>-->
    <br>
    <div class="contenedor">
        <section class="centro">
            <section class="container"></section>
            <section class="
            d-flex
            justify-content-center
            container-fluid
            contenedor-inicio">
            <!--parte de targeta de iniciar sesion-->
            <section class="inicio col-8 col-sm-6 col-lg-4 col-xxl-6">
                <b-card-group deck>
                    <b-card header-bg-variant="success" text-variant="black" header="Iniciar Sesion" class="text-cente">
                      <b-card-text>
                        <form class="formulario">
                            <img src="@/assets/logo1.png" alt="logo" width="90" height="90">
                            <br>
                            <br>
                            <div class="mb-3">
                                <label for="ExampleInputAdministrador" class="form-label" placeholder="Administrador">Administrador</label>
                                <b-input-group class="mb-3 icono">
                                <input requerid type="text" class="form-control" placeholder="user.name"
                                aria-label="input group example" aria-describedby="btnGroupAddon">
                                </b-input-group>
                            </div>

                            <!--contraseña-->

                            <div class="mb-3">
                            <label for="ExampleInputPassword1" class="form-label">Contraseña</label>
                            <b-input-group class="mb-3 icono">
                                
                                <input required :type="showPassword ? 'password' :'text'" class="form-control borde"
                                placeholder="Contraseña" aria-label="Input group example"
                                aria-describedby="btnGroupAddon" />
                                <img src="@/assets/mostrar.png" alt="oculto" @click="showPassword = !showPassword"
                            class="oculto" />
                                
                                
                                <div class="contraseña" >
                                   
                                
                                </div>

                            </b-input-group>
                            </div>

                            <b-button pill variant type="submit" class="boton d-grid gap-2 mx-auto" to="/InicioAdministradorView">Ingresar</b-button>
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
    export default{
        name:"LoginAdministradorView",
        components:{

        },
        data(){
            return{
                showPassword: true,
            }
        },
        mounted(){

        },
        methods: {
            RegitroView(){
            }
        }
    }
   </script>

    <style scoped>
 .encabezado{
    background-color: green;
    margin: 0%;
}
.logo{
    width: 50px;
    margin-right: 1330px;
}
.boton {
background-color: rgb(27, 87, 27);
border-radius: 3px  ;
}

.inicio{
  background-color: green;
}

.contenedor{
  margin: 5%;
}
.oculto{
    width: 20px;
    height: 20px;
    margin-top: 8px;
    margin-right: 10px;
    cursor: pointer;
}


</style>