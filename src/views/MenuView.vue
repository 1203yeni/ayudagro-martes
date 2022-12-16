<template >

    <div class="container" >
        <nav class="encabezado">
            <img class="nav1" src="@/assets/Group 1.png" alt="">
            <b-button @click="Salir()" class="salir btn btn-success">Salir
                <b-icon icon="reply-fill"></b-icon>
            </b-button>
        </nav>
        
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
                                <button class="button1" @click="guardar()"> Respuestas</button>
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

                <b-col class="segunda"  fluid ="sm" sm="8">
                    <div class="combo2" >
                        <div>
                            <p>Bienvenidos a AyudAgro, esperamos que sea la solucion que tanto buscas a los probl del campo</p>
                            <br>
                            <label for="" class="control-label col-sm-7" >¿Que sucede o en que podemos ayudarte?</label>
                            <div >
                            <b-form-textarea  v-model="form.contenido" placeholder="Digita tu pregunta.." rows="3" max-rows="6">
                           </b-form-textarea>
                            <b-button class="boton" @click="GuardarPregunta()" >Guardar Pregunta
                            <b-icon icon=""> </b-icon>
                           </b-button>
                          </div>
                        </div>
                         <br>
                        <div class="tarjeta1" v-for="pregunta in pregunta" :key="pregunta.id">
                            <b-row>
                                <b-col sm="3">
                                    <img class="img5" src="@/assets/icon.jpg">
                                </b-col>
                                <b-col sm="9" v-for="agricultor in agricultor" :key="agricultor.id">
                                    <h6 class="problemas">{{agricultor.nombre}}</h6>
                                    <br>
                                    <h6>{{pregunta.contenido}}</h6>
                                    <!-- <h6 class="problemas"> Problema con la broca en el cultivo de cafe</h6> -->
                                
                                 </b-col>
                               
                              </b-row>
                              <b-button class="responder2" to="/Respuestas2View" @click="guardar()" variant="outline-primary">Responder</b-button>
                                    <br>
                                    <br>        
                             </div>
                     </div>
                </b-col>
            </b-row>
        </div> 
</template>
<script >
import axios from "axios"
export default {
    data() {
        return {
            form:{
                "contenido":"",
                "idCategoria":1,
                "idAgricultor":1,
            },     
            pregunta:null,
            agricultor:null,

        }
    },

    components: {},
    methods: {
        GuardarPregunta() {  alert("pregunta guardada exitosamente")
            axios.post("http://localhost:3000/CreatePregunta",this.form).then(response=>{
                console.log(response);
            
            })
         },
         Salir(){
            this.$router.push("/");
            
         },
         Perfil(){
            this.$router.push("/PerfilUsuarioView");
            
         },
         Estadisticas(){
            this.$router.push("/Respuestas2View");
            
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
         Pregunta(){
            axios.post("",this.form).then(response =>{
                console.log(response)
            })
         }
       
         
         
    },

    computed: {},

    mounted(){
        axios.get("http://localhost:3000/preguntadetalle").then(response=>{
      this.pregunta=response.data
    });
    axios.get("http://localhost:3000/3r420listarAgricultor").then(response=>{
      this.agricultor=response.data
    });
    
   }
}

</script>

<style lang="scss">
@import "@/assets/sass/botones/botonesGenerales.scss";
.encabezado{
    background-color: #028436;
    height: 10px;
    margin-top: 10%;
}
.nav1{
    height: 70%;
    margin-left: 90%;
    }
    .nav2{
        margin-right: 90%;
    }
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
    background-color:rgb(67, 133, 67);
    border: 1px solid;
    height: 7em;

}

.img5 {
    border-radius: 90%;
    border: 1px solid;
    width: 90x;
    height: 90px;
    margin-top: 6%;  
}

.row {
    padding: 1px;
}

.problemas {
    
    text-align:left;
}
.perfil {
    border: 1px solid;
    background-color: rgb(67, 133, 67);
    padding: 1%;
    border-radius: 1%;
}

.combo2{

    height: 40em;
    
}
.responder2{
    margin-top: -6%;
    
    height:30%
}
.butons2{
    width: 100%;
}
.segunda{
    border: 1px solid;
   
}
.primera{
    border: 1px solid;
}
.comentario{
    border: 1px solid;
    height: 7em;
    border-radius: 40px;
}
.salir{
    margin-top: -2%;
}
*{
    padding: 0%;
}

</style>