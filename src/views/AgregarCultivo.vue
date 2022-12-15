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
                    <div class="combo3">
                        <br>
                        <div >
                            <div  class="Sfoto" >
                                <div>
                                <button class="Subir" @click="Agregar()">Agregar Cultivos</button>
                                </div>
                                <P>Armando Casas Trochez</P>
                                <img class="logito" src="@/assets/Component 2.png" alt="">
                                <b-form-file v-model="file2" class="mt-3" plain></b-form-file>

                                <div>
                                <button class="Publicar" @click="Publicar()">Publicar</button>
                                </div>
                           </div>
                       
                        </div>
                    </div>
                </b-col>

            </b-row>

    </div>
</template>
<script scoped>

export default {
    data() {
        return {

        }
    },
    components: {},
    methods: {
        Publicar(){
            this.$router.push("/GuardarView");
            
         },
         Preguntas(){
            this.$router.push("/PreguntasSinR");
            
         },
         Preguntar(){
            this.$router.push("/PreguntarView");
            
         },
         Agregar(){
            this.$router.push("/AgregarCultivo");
            
         },
         Estadisticas(){
            this.$router.push("/RespuestaS2View");
            
         },
         Cultivos(){
            this.$router.push("/CultivosView");
            
         }
    },

    computed: {},
    mounted: {}
}
</script>

<style lang="scss">
@import "@/assets/sass/botones/botonesGenerales.scss";
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
.Sfoto{
    margin-left: 20%;
    margin-right: 20%;
    height: 20em;
    border: 1px solid;
    background-color:azure;
}
.Agregar{
    width: 80%;
    height: 6%;
    margin-top: 8%;
}
.Publicar{
    width: 40%;
    margin-top: 10%;
    background-color:#6BC921;
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


.nav1 {
    background-color: rgb(209, 228, 209);
    
}

.perfil {
    border: 1px solid;
    background-color: rgb(67, 133, 67);
    padding: 1%;
    border-radius: 1%;
}

.combo3{
      margin-top: 7%;
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
   text-align: center;
}
.primera{
    border: 1px solid;
}
.comentario{
    border: 1px solid;
    height: 7em;
    border-radius: 40px;
}
.Subir{
margin-top: 5%;
background-color:#6BC921;
}
.logito{
    height: 30%;
    width: 30%;
}

</style>