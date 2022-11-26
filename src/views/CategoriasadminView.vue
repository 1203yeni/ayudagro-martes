<template>
    
    <div class="categorias">
        <h1 class="inicio">Registro</h1>
     <section class="inicio col-12 col-sm-6 col-lg-4 col-xxl-12">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Nombre:"
          label-for="input-1"
          description="Nunca compartiremos tu correo electrónico con nadie más.."
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="name"
            placeholder="Ingrese su Nombre"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-2" label="Apellidos:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.apellido"
            placeholder="Ingres sus Apellidos"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Apodo:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.nick"
            placeholder="Ingrese su apodo"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            placeholder="Ingres su contraseña "
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Email:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.email"
            placeholder="Ingres su correo electronico"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Direccion:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.direction"
            placeholder="Ingres su ubicacion"
            required
          ></b-form-input>
        </b-form-group>

        



        
        
        <br>
        <br>
  
        <b-form-group id="input-group-3" label="Estudios:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>
  
        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
  
        <b-button type="submit" variant="dark">Enviar</b-button>
        <b-button type="reset" variant="primary">borrar</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
</section>
</div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          form: {
            
            name: '',
            apellido: '',
            
            apodo: '',
            contraseña: '',
            email: '',
            direccion: '',
            food: null,
            checked: []
          },
          foods: [{ text: 'seleccione su nivel de estudios', value: null }, 'basica', 'media', 'bachiller', 'profesional'],
          show: true
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values

          this.form.name = ''
          this.form.apellido = ''
          this.form.apodo = ''
          this.form.contraseña = ''
          this.form.direccion = ''
          this.form.food = null
          this.form.checked = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
  </script>
  <style>
  .inicio{
    background:url("@/assets/Rectangle\ 165.jpg");
    color:black;
  }
.categorias{
background-color:#52a017;
position:absolute;
width: 30%;
    
    
   top: 5%;
   left: 35%;
    text-align: center;

}

</style>
  