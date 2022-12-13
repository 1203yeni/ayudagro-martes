<template>
  <div>
    
      <nav class="encabezado">
          <img  src="../assets/logo1.png" alt="Logo" width="50" height="26"  >
          <b-icon icon="reply-fill"></b-icon>
      </nav>
    <!--terminacion de encabezado-->

      <div class="padding">
    <div class="row container d-flex justify-content-center">
      <div class="col-xl-9 col-md-12">
        <div class="card user-card-full">
        <!--columna principal, donde va todo-->

          <div class="row m-l-0 m-r-0">
            <div class="col-sm-4 bg-c-lite-green user-profile">
              <div class="card-block text-center text-white">
                <div class="m-b-25">
                  <img class="foto" src="../assets/perfil.webp" alt="Perfil"  >
                  
                  <b-button class="subir btn btn-light">Subir Foto</b-button>
                </div>
              </div>
            </div>
            <!--columa de la foto-->
            <div class="col-sm-8">
              <div class="card-block">
                  <h6 class="m-b-20 p-b-5 b-b-default f-w-600">INFORMACION</h6>
             <!--terminacion de titulo informacion-->     
             
              
                  <p class="m-b-6 f-w-200">Nombre:
                    <input type="text"  name="Direccion" id="Direccion" v-model="form.Nombre">
                    <b-button size="sm" variant="success" class="mb-2 ">
                    <b-icon icon="pencil-fill" aria-idem="true"></b-icon>
                   </b-button>
                  </p>
                  
                  
      
                 
                    <p class="m-b-10 f-w-800">Apellido:
                      <input type="text"  name="Direccion" id="Direccion" v-model="form.Apellido">
                      <b-button size="sm" variant="success" class="mb-2 ">
                    <b-icon icon="pencil-fill" aria-idem="true"></b-icon>
                   </b-button>
                    </p>
                 

                  
                    <p class="m-b-10 f-w-800">Nick-name:
                      <input type="text"  name="Direccion" id="Direccion" v-model="form.Nick_name">
                      <b-button size="sm" variant="success" class="mb-2 ">
                    <b-icon icon="pencil-fill" aria-idem="true"></b-icon>
                   </b-button>
                    </p>
                    


                  <p class="m-b-10 f-w-800">Direccion:
                   
                    <input type="text"  name="Direccion" id="Direccion" v-model="form.Direccion">
                                      
                    <b-button size="sm" variant="success" class="mb-2 ">
                    <b-icon icon="pencil-fill" aria-idem="true"></b-icon>
                   </b-button>
                    
                  </p>
                
                  <br>
                  
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>

  </div>
</template>

<script>
export default {
name:"PerfilUsuarioView",
data(){
  return{
    form:{
      "Nombre":"",
      "Apellido":"",
      "Nick_name":"",
      "Direccion":""
    }
  }
}
}
</script>


<style scoped> 
.encabezado{
  background-color: green;
}
.padding{
  padding: 3rem !important;
margin-top: 30px;

}

.m-b-20 {
margin-bottom: 20px;
}
.row
{
border: 3px;
}
.mb-2{
height: 2 px;
}
.foto{
width: 80%;
}
.subir{
margin-top: 2%;
background-color: green;
}
</style>