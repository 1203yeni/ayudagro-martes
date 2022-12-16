<template >

    <div class="container" >
        
            <b-row class="my1">
                <b-col class="primera" sm="3">
                    <div class="perfil">
                        <b-row>
                            <b-col>
                                <img class="img1" src="@/assets/icon.jpg">
                            </b-col>

                            <b-col>
                                <h6>Nombre <br> Apellido</h6>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="combo">
                        <img class="logo" src="@/assets/Component 2.png">
                        <div>
                            <b-button @click="Preguntar()">Preguntar</b-button>
                            <br>
                            <br>

                            <div class="preguntas">
                                <button class="button1" @click="Perfil()" >Perfil</button>
                                <br>
                                <br>
                                <button class="button1" @click="Preguntas()">Preguntas sin responder</button>
                                <br>
                                <br>
                                <button class="button1" @click="Cultivos()" >Cultivos</button>
                                <br>
                                <br>
                                <button class="button1" @click="Respuestas()"> Respuestas</button>
                                <br>
                                <br>
                                <button class="button1" @click="Estadisticas()">Estadiscas</button>
                                <br>
                                <br>
                            </div>
                            <b-button @click="guardar()" >Agricultor</b-button>
                        </div>
                    </div>
                </b-col>
                <b-col sm="1">
                </b-col>

                <b-col class="segunda" sm="8">
                    <div class="combo2"   >
                        <div class="tarjeta1">
                            <b-row >
                                <b-col sm="3">
                                    <img class="img5" src="@/assets/icon.jpg">
                                </b-col>

                                <b-col sm="9">
                                    <h6 class="problemas" ></h6>
                                    <h6 class="problemas" ></h6>
                                    
                                    <br>
                                </b-col>
                               
                            </b-row> 
                        </div> 
                        <div>
                            <b-form-textarea  v-model="form.contenido" placeholder="Digita tu pregunta.." rows="3" max-rows="6">
                                <p></p>
                           </b-form-textarea>
                            <b-button class="boton" @click="guardarRespuesta()" >Guardar respuesta
                            <b-icon icon="symmetry-horizontal"> </b-icon>
                           </b-button>
                          </div>
                    </div>    
                </b-col>

            </b-row>

    </div>
</template>

<style >

</style>
<script>
import axios from 'axios';
//import { response } from 'express';
export default {
    data() {
        return {
            form:{
               "contenido":"",
               },
           pregunta:null,
           agricultor:null,
           respuesta:null,
        
        }
    },
    components: {},
    methods: {
        guardarRespuesta(){
            alert("respueta guardada")
            axios.post("http://localhost:3000/NuevaRespuesta",this.form).then(response=>{
                console.log(response);
 
            })
        },

         PreguntasSR(){
            this.$router.push("/PreguntasSinR");
         },
         Salir(){
            this.$router.push("/"); 
         },
        
        Preguntas(){
            this.$router.push("/PreguntasSinR");
            
         },
         Preguntar(){
            this.$router.push("/PreguntarView");
            
         },
         Cultivos(){
            this.$router.push("/CultivosView");
            
         },
         Perfil(){
            this.$router.push("/PerfilUsuarioView");
            
         },
    },

    computed: {},
    mounted(){
        axios.get("http://localhost:3000/pregunta").then(response=>{
            this.pregunta=response.data
        });
        axios.get("http://localhost:3000/3r420listarAgricultor").then(response=>{
            this.agricultor=response.data
        });
        axios.get("http://localhost:3000/respuesta").then(response=>{
            this.respuesta=response.data
        });
    }
}
</script>

<style lang="scss">

.preguntas {
    text-align: center;
}
// utilizar bh o % o em para ser responsing
.button1 {
    background-color:#6BC921;
    width: 90%;
    height: 40%;
    border-radius: 5px;
}
.combo{
 background:url("");
 text-align:center;
}
.logo{
    width: 50%;
    height: 50%;
}

.img1 {
    border-radius: 90%;
    border: 1% solid;
    width: 65%;
    height: 65%;
}

.img3 {
    margin-left: 30%;
}

.ayudagro1 {
  
    border: 1px solid;
    width: 100%;
    height: 10%;
}

.tarjeta1 {
    background:url("@/assets/imagenfondocomentarios.jpg");
    background-color:rgb(67, 133, 93);
    border: 1px solid;
    height: 7em;

}
.tarjeta2 {
    background:url("@/assets/imagenfondocomentarios.jpg");
    margin-top: 8px;
    background-color:rgb(67, 92, 133);
    border: 1px solid;
    height: 7em;

}

.img5 {
    border-radius: 90%;
    border: 1px solid;
    width: 90px;
    height: 90px;
    margin-top: 6%;  
}

.row {
    padding: 1px;
}

.problemas {
    
    text-align:left;
}

.nav1 {
    background-color: rgb(209, 228, 209);
    
}

.perfil {
    border: 1px solid;
    background-color: #008A37;
    padding: 1%;
    border-radius: 1%;
}

.combo2{

    height: 40em;
    
}
.responder{

    width: 99%;;
}
.butons2{
    width: 100%;
}
.segunda{
    border: 1px solid;
    height:55em;
}
.primera{
    border: 1px solid;
    height:40em;
}

</style>