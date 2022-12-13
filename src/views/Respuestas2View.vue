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
                    <div class="combo2">
                        <div class="tarjeta1">
                            <b-row>
                                <b-col sm="3">
                                    <img class="img5" src="@/assets/icon.jpg">
                                </b-col>

                                <b-col sm="9">
                                    <h6 class="problemas">Armando Casas Trochez</h6>
                                    <br>
                                    <h6 class="problemas"> Problema con la broca en el cultivo de cafe</h6>
                                </b-col>
                               
                            </b-row>
                            <br>
                            <div>
                            <b-form-textarea
                             id="textarea"
                             v-model="form.contenido"
                            placeholder="Digita tu respuesta.."
                            
                              rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                            <b-button class="enviarR btn btn-success">Responder
                            <b-icon icon="symmetry-horizontal"> </b-icon>
                           </b-button>
                           <pre class="mt-3 mb-0">{{ text }}</pre>
                           <div class="tarjeta1">
                            <b-row>
                                <b-col sm="3">
                                    <img class="img5" src="@/assets/icon.jpg">
                                </b-col>

                                <b-col sm="9">
                                    <h6 class="problemas">Armando Casas Trochez</h6>
                                    <br>
                                    <h6 class="problemas"> Problema con la broca en el cultivo de cafe</h6>
                                </b-col>
                               
                            </b-row>
                            <br>
                            <div>
                            <b-form-textarea
                             id="textarea"
                             v-model="form.contenido"
                            placeholder="Digita tu respuesta.."
                            
                              rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                            <b-button class="enviarR btn btn-success">Responder
                            <b-icon icon="symmetry-horizontal"> </b-icon>
                           </b-button>
                           <pre class="mt-3 mb-0">{{ text }}</pre>
                          </div>
                          <div class="tarjeta1">
                            <b-row>
                                <b-col sm="3">
                                    <img class="img5" src="@/assets/icon.jpg">
                                </b-col>

                                <b-col sm="9">
                                    <h6 class="problemas">Armando Casas Trochez</h6>
                                    <br>
                                    <h6 class="problemas"> Problema con la broca en el cultivo de cafe</h6>
                                </b-col>
                               
                            </b-row>
                            <br>
                            <div>
                            <b-form-textarea
                             id="textarea"
                             v-model="form.contenido"
                            placeholder="Digita tu respuesta.."
                            
                              rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                            <b-button class="enviarR btn btn-success">Responder
                            <b-icon icon="symmetry-horizontal"> </b-icon>
                           </b-button>
                           <pre class="mt-3 mb-0">{{ text }}</pre>
                          </div>
                        </div>
                        </div>
                        
                          </div>
                        </div> 
                    </div>
                  
                </b-col>

            </b-row>

    </div>
</template>

<style >

</style>
<script>

export default {
    data() {
        return {
            form:{
               
               "text":""
           }
        
        }
    },
    components: {},
    methods: {
         
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
    mounted: {
    
        Preguntas(){
            this.$router.push("/PreguntasSinR");
            
         },
         Preguntar(){
            this.$router.push("/PreguntarView");
            
         },
         Cultivos(){
            this.$router.push("/CultivosView");
            
         },
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