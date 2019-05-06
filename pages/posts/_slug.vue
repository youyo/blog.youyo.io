<template>
  <v-container grid-list-xs>
    <v-layout justify-center row wrap>
      <v-flex xs10 class="ma-4">
        <span class="display-1 font-weight-bold">{{post.fields.title}}</span>
      </v-flex>
      <v-flex xs12 class="ma-4">
        <hr>
      </v-flex>
      <v-flex xs9 class="ma-3" subheading>
        <div subheading v-html="$md.render(post.fields.body)"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Prism from "~/plugins/prism";
import createClient from "~/plugins/contentful";

const client = createClient();

export default {
  mounted() {
    Prism.highlightAll();
  },
  async asyncData({ params }) {
    return {
      post: await client
        .getEntries({
          content_type: "posts",
          "fields.slug": params.slug,
          limit: 1
        })
        .then(entries => {
          return entries.items[0];
        })
    };
  }
};
</script>