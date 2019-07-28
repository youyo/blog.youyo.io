<template>
  <v-container fill-height fluid class="ma-0 pa-0">
    <v-layout row wrap>
      <v-flex
        align-space-around
        xs12
        sm6
        md4
        v-for="post in $store.state.posts"
        v-bind:key="post.fields.slug"
      >
        <v-card
          height="100%"
          width="100%"
          ripple
          tile
          outlined
          align-center
          justify-center
          v-bind:href="'/posts/' + post.fields.slug + '/'"
        >
          <v-container fill-height fluid class="ma-0 pa-5">
            <v-layout text-xs-center align-center justify-center wrap>
              <v-card-text class="subheading my-3 px-3">{{post.fields.title}}</v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
export default {
  head() {
    return {
      titleTemplate: null,
      title: "blog.youyo.io"
    };
  }
};
</script>

<style scoped>
.v-card {
  box-shadow: 0px 0px 0px 1px black;
}
</style>