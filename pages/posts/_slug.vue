<template>
  <v-container grid-list-xs>
    <v-layout justify-center row wrap>
      <v-flex xs10 class="ma-4">
        <span class="display-1 font-weight-bold">{{post.fields.title}}</span>
      </v-flex>
      <v-flex xs12 class="ma-4">
        <hr>
      </v-flex>
      <v-flex xs9 class="ma-3">
        アプリケーションの機能を「カプセル化」、「コンポーネント化」しようというのは、フロントエンド/バックエンド問わずに近年のWeb開発におけるトレンドのひとつです。
        Web業界も5年もの、10年ものと呼ばれるシステムが増える中で「最初から完璧なシステムを作ることなんて無理なんじゃないか」と多くの人が気づきはじめました。 その流れを受けて「どうせ改修が必要なら、小さなスコープで新しいものに置き換え可能な仕組みを作ろうぜ！」というのが「カプセル化」、「コンポーネント化」の大きなモチベーションであると、個人的には理解しています。
        <hr>
        <div v-html="$md.render(post.fields.body)"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import createClient from "~/plugins/contentful";

const client = createClient();

export default {
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
