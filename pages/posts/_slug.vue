<template>
  <v-container grid-list-xs>
    <v-layout justify-center row wrap>
      <v-flex xs9 md8 text-xs-center>
        <span class="headline font-weight-bold">{{post.fields.title}}</span>
      </v-flex>
      <v-flex xs12 sm11 md9 class="mt-4">
        <hr />
      </v-flex>
      <v-flex xs12 sm10 md8 class="mt-2 mb-5" subheading>
        <div class="mystyle">
          <div v-html="$md.render(post.fields.body)"></div>
        </div>
      </v-flex>
      <v-container>
        <v-layout align-end>
          <v-flex xs12 text-xs-center>
            <a :href="snslink.twitter" target="_blank">
              <i class="fab fa-twitter-square faa-shake animated-hover my-link-twitter mx-1"></i>
            </a>
            <a :href="snslink.facebook" target="_blank">
              <i class="fab fa-facebook-square faa-shake animated-hover my-link-facebook mx-1"></i>
            </a>
            <a :href="snslink.line" target="_blank">
              <i class="fab fa-line faa-shake animated-hover my-link-line mx-1"></i>
            </a>
            <!--<i class="fas fa-link faa-shake animated-hover my-link-general mx-1">
              <a href="#"></a>
            </i>-->
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<style scoped lang="scss">
.my-link-twitter {
  font-size: 2.5em;
  color: #4682b4;
}
.my-link-facebook {
  font-size: 2.5em;
  color: #6495ed;
}
.my-link-line {
  font-size: 2.5em;
  color: #3cb371;
}
.my-link-general {
  font-size: 2.1em;
  color: gray;
}
.mystyle /deep/ h2 {
  line-height: 3;
  margin: 20px 0px 0px 0px;
}
.mystyle /deep/ li {
  line-height: 1.8;
}
.mystyle /deep/ p {
  line-height: 1.8;
}
</style>

<script lang="ts">
import Prism from "~/plugins/prism";
import createClient from "~/plugins/contentful";

const client = createClient();

export default {
  mounted() {
    Prism.highlightAll();
  },
  async asyncData({ params }) {
    const post = await client
      .getEntries({
        content_type: "posts",
        "fields.slug": params.slug,
        limit: 1
      })
      .then(entries => {
        return entries.items[0];
      });
    return {
      post: post,
      snslink: {
        twitter: `https://twitter.com/intent/tweet?url=https://blog.youyo.io/posts/${post.fields.slug}&text=${post.fields.title}`,
        facebook: `https://www.facebook.com/share.php?u=https://blog.youyo.io/posts/${post.fields.slug}`,
        line: `https://social-plugins.line.me/lineit/share?url=https://blog.youyo.io/posts/${post.fields.slug}&text=${post.fields.title}`
      }
    };
  }
};
</script>