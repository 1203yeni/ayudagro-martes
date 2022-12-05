<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/loginusuarioView">Inicio usuario</router-link>|
      <router-link to="/RecuperarclaveView">Recuperar clave</router-link>|
      <router-link to="/RecuperarCodigoView">Recuperar Codigo</router-link>|
      <router-link to="/RegistroView">Registro Usuario</router-link>|
      <router-link to="/NuevaContraseñaView">Nueva Contraseña</router-link>|
      <router-link to="/LoginAdministradorView">Inicio</router-link>|
      <router-link to="/PerfilUsuarioView">Perfil Usuario</router-link>|
      <router-link to="/InicioAdministradorView">Inicio Administrador</router-link>|
      <router-link to="/CultivosAdministradorView">Cultivos Administrador</router-link>|


    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
