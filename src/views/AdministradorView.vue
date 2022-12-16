
Conversación abierta. 1 mensaje sin leer.

Ir al contenido
Uso de Gmail con lectores de pantalla
1 de 1.601
menu
Recibidos

yenifer nataly
10:23 (hace 2 horas)
para mí

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
                <b-button class="Categorias btn btn-light d-grid gap-2 mx-auto">Usuarios</b-button>
                <br>
                <b-button class="Categorias btn btn-light d-grid gap-2 mx-auto">Cultivos</b-button>
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

            </b-col>
        </b-row>
    </div>
</template>


 <script>
export default {
    
    data() {
        return {}
           
            
    },
    components:{
        
    },
    computed:{
     
    },
    methods:{
    },
    mounted: function(){

    }
}
</script>

<style scoped>

.mg1{
    border-radius: 85%;
    border: 1% solid;
    width: 35%;
    height: 60%;
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
