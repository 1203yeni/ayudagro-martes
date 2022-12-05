<template>
    <div>
        <nav class="encabezado">
            <img  src="../assets/logo1.png" alt="Logo" width="50" height="26"  >
            <b-icon icon="reply-fill"></b-icon>
        </nav>
        <div class="padding">
      <div class="row container d-flex justify-content-center">
        <div class="col-xl-9 col-md-12">
          <div class="card user-card-full">
            <div class="row m-l-0 m-r-0">
              <div class="col-sm-4 bg-c-lite-green user-profile">
                <div class="card-block text-center text-white">
                  <div class="m-b-25">
                    <img class="foto" src="../assets/perfil.webp" alt="Perfil"  width="300px">
                  </div>
                    <!--foto-->
                  <div class="col-sm-9 text-secondary">
                    <h6 class="mb-0"></h6>
                 </div>
                </div>
              </div>
              <!---->
              <div class="col-sm-8">
                <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Información</h6>
                <div class="row">
                 <div class="col-sm-6">
                    <p class="m-b-10 f-w-800">Nombre</p>
                    <h6 class="text-muted f-w-400"></h6>
                 </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

    </div>
</template>

<style>
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
</style>