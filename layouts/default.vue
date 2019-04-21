<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" clipped fixed right app temporary width="150%">
      <v-list dense>
        <v-list-tile>
          <v-card flat ripple width="100%" nuxt to="/">
            <v-card-title class="text-uppercase font-weight-thin">top</v-card-title>
          </v-card>
        </v-list-tile>
        <v-list-tile>
          <v-card flat ripple width="100%" nuxt to="/tags">
            <v-card-title class="text-uppercase font-weight-thin">tags</v-card-title>
          </v-card>
        </v-list-tile>
        <v-list-tile>
          <v-card flat ripple width="100%" nuxt to="/about">
            <v-card-title class="text-uppercase font-weight-thin">about</v-card-title>
          </v-card>
        </v-list-tile>
        <v-list-tile>
          <v-card flat ripple width="100%" href="https://blog.youyo.info/">
            <v-card-title class="text-uppercase font-weight-thin">old blog</v-card-title>
          </v-card>
        </v-list-tile>
        <v-list-tile>
          <v-card flat ripple width="100%" href="/sitemap.xml">
            <v-card-title class="text-uppercase font-weight-thin">sitemap</v-card-title>
          </v-card>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="white" light fixed app card hover>
      <v-card flat ripple nuxt to="/">
        <v-card-title class="font-weight-medium title">blog.youyo.io</v-card-title>
      </v-card>
      <v-spacer/>
      <v-card flat width="40%">
        <v-text-field
          label="Search"
          clearable
          fixed
          flat
          single-line
          color="black"
          hint="'Search' is not working"
        ></v-text-field>
      </v-card>
      <v-spacer/>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>
