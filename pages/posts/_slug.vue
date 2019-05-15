<template>
  <v-container grid-list-xs>
    <v-layout justify-center row wrap>
      <v-flex xs11 md10 text-xs-center>
        <span class="headline font-weight-bold">{{post.fields.title}}</span>
      </v-flex>
      <v-flex xs12 class="my-4">
        <hr>
      </v-flex>
      <v-flex xs12 sm11 md9 class="mt-2 mb-5" subheading>
        <div v-html="$md.render(post.fields.body)"></div>
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