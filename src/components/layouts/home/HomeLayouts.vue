<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>
      <v-btn text to="/dashboard">
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
      <v-btn text to="/login">
        <v-icon>mdi-lock</v-icon>
      </v-btn>
    </v-system-bar>

    <v-app-bar app>
      <v-toolbar-title>BaddaU</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text> Home </v-btn>

      <v-btn to="/nlog" text>Blog</v-btn>
      <v-btn to="/about" text>About</v-btn>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer color=" lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="lighten-2 py-4 text-center dark--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Roby</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>