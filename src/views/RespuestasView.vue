<template>
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
          <section class="inicio col-8 col-sm-6 col-lg-4 col-xxl-6">
            <b-card-group deck>
    <div>
        <b-form-textarea
                             id="textarea"
                             v-model="form.text"
                            placeholder="Digita tu respuesta.."
                            
                              rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                            <b-button class="enviarR btn btn-success">Responder
                            <b-icon icon="symmetry-horizontal"> </b-icon>
                           </b-button>
    </div>
            </b-card-group>
          </section>
        </section>
      </section>
     </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
               
                "text":""
            }
        }
    },
    components: {},
    methods: {
       
    }
}
</script>