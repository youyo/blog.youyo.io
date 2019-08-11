<template>
  <v-container grid-list-xs>
    <v-layout justify-center row wrap>
      <v-flex xs9 md8 text-xs-center class="mt-2 mb-4">
        <span class="headline font-weight-bold">Posts</span>
      </v-flex>
    </v-layout>
    <v-layout justify-space-around wrap row>
      <v-list>
        <v-list-tile
          v-for="post in $store.state.posts"
          v-bind:key="post.fields.slug"
          :href="'/posts/' + post.fields.slug + '/'"
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="post.fields.title"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title>&nbsp;&nbsp;</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-sub-title class="text-xs-right" v-text="post.fields.release_date"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
export default {
  head() {
    return {
      titleTemplate: null,
      title: "blog.youyo.io",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "List posts"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "List posts"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://blog.youyo.io/posts/"
        }
      ]
    };
  }
};
</script>
