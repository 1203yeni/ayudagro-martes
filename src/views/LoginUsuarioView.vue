<template>
  <div>
    <div class="contenedor ">
      <section class="centro">
        <section class="container "></section>
        <section class="
            d-flex
            justify-content-center
            container-fluid
            contenedor-inicio
          ">
          <!-- parde de la targeta de iniciar sesion -->
          <section class="inicio col-8 col-sm-6 col-lg-4 col-xxl-3">
            <b-card-group deck>
              <b-card header-bg-variant="success" text-variant="black" header="Iniciar Sesion" class="text-cente">
              <b-card-text>
                <form class="formulario">
                  <img  alt="logo" src="../assets/logo1.png" width="90" height="90" >
                  <div class="mb-3">
                    <label for="ExampleInputEmail1" class="form-label" placeholder="Correo Electronico">Correo Electronico</label>
                    <b-input-group class="mb-3 icono">

                    <input required type="text" class="form-control" placeholder="example@gmail.com"
                    aria-label="input group example" aria-describedby="btnGroupAddon">
                  </b-input-group>
                  </div>

                  <!--contraseña-->
                  
                  <div class="mb-3">
                    <label for="ExampleInputPassword1" class="form-label" >Contraseña</label>
                    <b-input-group class="mb-3 icono">
                      <input required :type="showPassword ? 'password' : 'text'" class="form-control borde"
                          placeholder="Contraseña" aria-label="Input group example"
                          aria-describedby="btnGroupAddon"  
                          />
                          
                          
                            
                        <div class="contraseña">
                          
                        </div>
                   </b-input-group>
                  </div>

                  <!--boton ingrisar-->

                  <b-button pill variant type="submit" class="boton d-grid gap-2 mx-auto" to="/InicioPantallaView">Ingresar
                      </b-button>
                  <br />
                      <a class="text-center form-text" href="/RecuperarclaveView">
                        ¿Olvidaste Tu Contraseña?
                      </a>
  
                      <div id="passwordHelpBlock" class="text-center form-text">
                        ¿ Aún no tienes cuenta? 
                      </div>
  
                      <b-button pill variant type="submit" class="boton d-grid gap-2 mx-auto" to="/RegistroView"
                      v-b-tooltip.hover
       >
                        Registrate</b-button>
                        



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
  name:"LoginUsuarioView",
  components: {

  },
  data(){
    return {
      showPassword: true,
    }
  },
  mounted(){

  },
  methods: {
    RegistroView(){
            
        }
  }

}
</script>

<style scoped>
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

</style>