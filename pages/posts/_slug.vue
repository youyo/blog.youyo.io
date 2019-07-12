<template>
  <v-container grid-list-xs>
    <v-layout justify-center row wrap>
      <v-flex xs9 md8 text-xs-center>
        <span class="headline font-weight-bold">{{post.fields.title}}</span>
      </v-flex>
      <v-flex xs9 md8 text-xs-right>
        <span class="font-weight-thin font-italic">{{post.fields.release_date}}</span>
      </v-flex>
      <v-flex xs12 sm11 md9 class="mt-4">
        <hr />
      </v-flex>
      <v-flex xs12 sm10 md8 class="mt-2 mb-5">
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
.mystyle /deep/ h1 {
  line-height: 1.8;
  border-bottom: solid 1.3px black;
  margin: 40px 0px 20px 10px;
}
.mystyle /deep/ h2 {
  line-height: 1.8;
  border-bottom: solid 1.3px black;
  margin: 40px 0px 20px 10px;
}
.mystyle /deep/ h3 {
  line-height: 1.8;
  border-bottom: solid 1.3px black;
  margin: 40px 0px 20px 10px;
}
.mystyle /deep/ ol {
  line-height: 1.8;
  margin: 0px 0px 20px 0px;
}
.mystyle /deep/ ul {
  line-height: 1.8;
  margin: 0px 0px 20px 0px;
}
.mystyle /deep/ li {
  line-height: 1.8;
}
.mystyle /deep/ p {
  line-height: 1.8;
}
.mystyle /deep/ pre {
  margin: 0px 0px 20px 0px;
}
.mystyle /deep/ blockquote {
  padding: 1px 0px 0px 5px;
  border-left: 4px solid #555555;
  background-color: #f3f2f2;
  font-style: italic;
}
.mystyle /deep/ p /deep/ code {
  background-color: #f5f5f5;
  color: #c4370d;
  box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
}
</style>

<script lang="ts">
import createClient from "~/plugins/contentful";

const client = createClient();

export default {
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