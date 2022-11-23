<template >

    <div class="container" >
        
            <b-row class="my1">
                <b-col class="primera" sm="3">
                    <div class="perfil">
                        <b-row>
                            <b-col>
                               
                            </b-col>

                            <b-col>
                                <h5>Nombre <br> Apellido</h5>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="combo">
                        
                        <div class="preguntas1">
                            <b-button @click="Agricultor()" variant="btn btn-light ">Preguntar</b-button>
                            <br>
                            <br>

                            <div class="preguntas">
                                <b-button class="button1" @click="guardar()" variant="btn btn-success">Perfil
                                </b-button>
                                <br>
                                <br>
                                <b-button class="button1  " sm="4" @click="guardar()" variant="btn btn-success">
                                    Preguntas
                                    sin responder</b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="btn btn-success">Cultivos
                                </b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="btn btn-success">
                                    Respuestas</b-button>
                                <br>
                                <br>
                                <b-button class="button1" @click="guardar()" variant="btn btn-success">
                                    Estadiscas</b-button>
                                <br>
                                <br>
                            </div>
                            <b-button @click="guardar()" variant="btn btn-light">Agricultor</b-button>
                        </div>
                    </div>
                </b-col>
                <b-col sm="1">
                </b-col>

                <b-col class="segunda" sm="8">
                    <div class="combo2">
                        <div>
                            <p>Bienvenidos a AyudAgro, esperamos que sea la solucion que tanto buscas a los problemas
                                del
                                campo</p>
                            <br>
                            <p class="ayudagro1"> ¿Que sucede o en que te podemos ayudarte?</p>
                        </div>
                        <div class="tarjeta1">
                            <b-row>
                                <b-col sm="3">
                                    
                                </b-col>

                                <b-col sm="9">
                                    <h5 class="problemas">Armando Casas Trochez</h5>
                                    <br>
                                    <h5 class="problemas"> Problema con la broca en el cultivo de cafe</h5>
                                </b-col>
                               
                            </b-row>
                            <div class="responder">
                              <b-button class="botoncancelar" @click="guardar()" variant="">Responder</b-button>
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

        }
    },
    components: {},
    methods: {
        // Agricultor(){
        //     this.$router.push("/Agricultor");
        // }
    },

    computed: {},
    mounted: {}
}
</script>

<style lang="scss">

.preguntas {

    text-align: center;


}
// utilizar bh o % o em para ser responsing
.button1 {

    width: 90%;
    height: 40%;
    text-align:left;
}
.combo{
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
    background-color: white;
    border: 1px solid;
    width: 100%;
    height: 10%;
}

.tarjeta1 {
    background-color: white;
    border: 1px solid;
    height: 7em;
  
}

.img5 {
    border-radius: 90%;
    border: 1px solid;
    width: 65%;
    height: 65%;
    margin-top: 10%;
    
}

.row {
    padding: 1px;
}

.problemas {
    text-align: center;
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
    padding-top: 2%;
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
</style>