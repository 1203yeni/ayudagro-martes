<template>
    <div class="container">
        <b-row class="my1">
            <b-col class="primera" sm="3">
                <div class="perfil">
                    <b-row>
                        <b-col>
                            <img class="mg1" src="@/assets/foto-perfil.png" alt="foto">
                            <h4 class="Administrador">Administrador</h4>

                        </b-col>
                    </b-row>
                </div>
                <div class="combo">
                    <img class="logo" src="@/assets/logo1.png" alt="logo">

                </div>
                <br>
                <b-button class="Categorias btn btn-light d-grid gap-2 mx-auto">Categorias</b-button>
                <br>
                <b-button class="Categorias btn btn-light d-grid gap-2 mx-auto" to="/InicioAdministradorView">Usuarios</b-button>
                <br>
                <b-button class="Categorias btn btn-light d-grid gap-2 mx-auto" to="CultivosAdministradorView">Cultivos</b-button>
                <br>
                <b-button class="Categorias btn btn-light d-grid gap-2 mx-auto">Ver Preguntas</b-button>
                <br>
                <b-button class="Categorias btn btn-light d-grid gap-2 mx-auto">Estadisticas</b-button>
                <br>
                <b-button class="Categorias btn btn-light d-grid gap-2 mx-auto">Ver Respuestas</b-button>
            </b-col>
            <b-col sm="1">
            </b-col>
            

            <b-col class="segunda" sm="8">
                
             <b-table  :filter="filter" id="my-table" :items="items" :fields="fields" class="my-table" :per-page="perPage"
             :current-page="currentPage">
              
             <template #cell(ACCIONES)="row">
                <b-button size="sm" @click="eliminar()" variant="danger" class="mb-2 ">
                <b-icon icon="trash-fill" aria-idem="true"></b-icon>
            </b-button>
            <b-button @click="editar(row.item.id)" size="sm" variant="success" class="mb-2 ">
                       <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
                       </b-button>
             </template>
               
             </b-table>

             <b-pagination  
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table">
                
             </b-pagination>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name:'CultivosAdministradorView',
    data() {
        return {
           
            fields :[{key:'id', label:'Id'},
              {key:'Nombre', label:'Nombre'},
              {key:'Descripcion', label:'Descripcion'},
              "ACCIONES"],
            items:[
                {isActive:true, id: 1,Nombre:'Fresas',Descripcion:'Cultivo de fresa, 6 meses sembrada abonada con idroconplex ', },
                {isActive:true, id: 2,Nombre:'Fresas',Descripcion:'Cultivo de fresa, 6 meses sembrada abonada con idroconplex ', },
                {isActive:true, id: 3,Nombre:'Papa',Descripcion:'El cultivo de mi papi', },
                {isActive:true, id: 4,Nombre:'Mora',Descripcion:'Cultivo de mora de 3meses sembrada abonada ', },
                
              

            ],
            filter:null,
          currentPage:1,
          rows:100,
          perPage:10,
          listap:null,
        }
    },
    components:{
        
    },
    computed:{
     
    },
    methods:{
        eliminar(){
              alert("eliminar")
           
          },
          editar(){
             
          }
    },
    mounted: function(){

    }
}
</script>

<style scoped>
.container{
 
}
.mg1{
    border-radius: 85%;
    border: 1% solid;
    width: 35%;
    height: 60%;
}
.my1{
    
}
.primera{
    border: 1px solid;
}
.perfil{
    border: 1px solid;
    background-color: rgb(67, 133, 67);
    padding: 1%;
    border-radius: 1%;
}
.logo{
    width: 30%;
    height: 30%;
}
.Categorias{
    background-color: rgb(67, 133, 67);
    width: 80%;
}

</style>