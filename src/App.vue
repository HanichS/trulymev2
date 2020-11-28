<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
    >
      <v-list dense>
        <v-list-item link to='/'>
          <v-list-item-action>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Minhas Recomendações</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to='analisar-estilo'>
          <v-list-item-action>
            <v-icon>mdi-camera</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Analisar Meu Estilo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to='cadastrar-produto'>
          <v-list-item-action>
            <v-icon>mdi-home-map-marker</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Cadastrar Produto</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <v-list-item @click='logout'>
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="pink"
      dark
    >
      <v-spacer />

      <v-toolbar-title class='app-title'>truly me </v-toolbar-title> 

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      
    </v-content>

  </v-app>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'LayoutsDemosBaselineFlipped',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    methods: {
      logout() {
        firebase.auth().signOut();
      }
    }
  }
</script>
<style>
.app-title {
  font-family: 'Gochi Hand', cursive;
  font-size: 2em;
}
</style>