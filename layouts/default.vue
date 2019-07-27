<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" clipped fixed right app temporary width="150%">
      <v-list dense>
        <v-list-tile>
          <v-card flat ripple width="100%" href="/">
            <v-card-title class="text-uppercase font-weight-thin">top</v-card-title>
          </v-card>
        </v-list-tile>
        <!--
        <v-list-tile>
          <v-card flat ripple width="100%" nuxt to="/posts">
            <v-card-title class="text-uppercase font-weight-thin">posts</v-card-title>
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
        -->
        <v-list-tile>
          <v-card flat ripple width="100%" href="https://blog.youyo.info/">
            <v-card-title class="text-uppercase font-weight-thin">old blog</v-card-title>
          </v-card>
        </v-list-tile>
        <v-list-tile>
          <v-card flat ripple width="100%" href="/privacy-policy">
            <v-card-title class="text-uppercase font-weight-thin">privacy policy</v-card-title>
          </v-card>
        </v-list-tile>
        <v-list-tile>
          <v-card flat ripple width="100%" href="/sitemap.xml">
            <v-card-title class="text-uppercase font-weight-thin">sitemap</v-card-title>
          </v-card>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="white" light fixed app card hover absolute height="70%" class="ma-0 pa-0">
      <v-container fluid ma-0 pa-0>
        <v-layout align-center justify-space-between>
          <v-card flat height="100%" href="/">
            <v-card-title class="font-weight-bold title pa-1 ma-0">blog.youyo.io</v-card-title>
          </v-card>
          <v-spacer />
          <v-card flat width="40%" height="100%">
            <v-text-field
              class="ma-0 pt-3"
              label="Search"
              clearable
              fixed
              flat
              single-line
              color="black"
              hint="'Search' is not working"
            ></v-text-field>
          </v-card>
          <v-spacer />
          <v-toolbar-side-icon class="ma-1" @click="drawer = !drawer" />
        </v-layout>
      </v-container>
    </v-toolbar>
    <v-divider></v-divider>
    <v-content>
      <nuxt />
    </v-content>
    <v-divider></v-divider>
    <v-footer class="grey darken-4" dark fixed app absolute>
      <v-flex text-xs-center>
        <span>
          &copy; 2019
          <strong>youyo</strong>
        </span>
      </v-flex>
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

<style lang="scss">
.application {
  font-family: "Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic Pro",
    "Yu Gothic", "Meiryo", "sans-serif";
  line-height: 1.6;
  text-align: justify;
}
</style>