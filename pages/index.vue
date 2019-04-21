<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="post in posts" v-bind:key="post.fields.slug">
        <v-card
          height="100%"
          width="100%"
          ripple
          elevation="0"
          nuxt
          v-bind:to="/posts/ + post.fields.slug"
        >
          <v-img v-bind:src="'https://' + post.fields.image.fields.file.url" aspect-ratio="1.5"></v-img>
          <v-card-title class="pb-0">
            <span class="grey-text">{{post.fields.release_date}}</span>
          </v-card-title>
          <v-flex justify-center>
            <v-card-text
              justify-center
              class="title font-weight-bold mb-0 px-3 pb-0"
            >{{post.fields.title}}</v-card-text>
          </v-flex>
          <v-container>
            <v-layout wrap justify-space-start row fill-height class="pt-0">
              <v-flex
                xs3
                sm2
                class="mx-2"
                v-for="tag in post.fields.tags"
                v-bind:key="tag.fields.name"
              >
                <v-btn
                  class="text-none ma-0"
                  color="info"
                  depressed
                  flat
                  small
                  round
                  ripple
                  nuxt
                  v-bind:to="/tags/ + tag.fields.name"
                >{{tag.fields.name}}</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import createClient from "~/plugins/contentful";

const client = createClient();

export default {
  asyncData() {
    return client
      .getEntries({
        content_type: "posts",
        order: "-fields.release_date"
      })
      .then(entries => {
        return { posts: entries.items };
      })
      .catch(console.error);
  }
};
</script>

<style scoped>
/*.rounded-card {
  border-radius: 10px;
}*/
</style>