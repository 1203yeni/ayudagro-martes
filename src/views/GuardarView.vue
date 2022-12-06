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
                                <button class="button1" @click="guardar()" >Perfil</button>
                                <br>
                                <br>
                                <button class="button1" @click="Preguntas()">Preguntas sin responder</button>
                                <br>
                                <br>
                                <button class="button1" @click="guardar()" >Cultivos</button>
                                <br>
                                <br>
                                <button class="button1" @click="guardar()"> Respuestas</button>
                                <br>
                                <br>
                                <button class="button1" @click="guardar()">Estadiscas</button>
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
                    <img class="chulito" src="@/assets/OIP.jpeg" alt="">
                    <h6>Guardado Exitosamente </h6>
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
         Preguntas(){
            this.$router.push("/PreguntasSinR");
            
         },
         Preguntar(){
            this.$router.push("/PreguntarView");
            
         },
         Agregar(){
            this.$router.push("/AgregarCultivo");
            
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
.ayudagro{
    margin-left: 20%;
    margin-right: 20%;
    height: 20em;
    border: 1px solid;
    background-color:azure;
}
.Agregar1{
    width: 40%;
    margin-top: 2%;
    background-color:#6BC921;
}
.Publicar3{
    width: 40%;
    margin-top: 45%;
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
.chulito{
    padding-top: 20%;
}

</style>