<template>
  <v-container grid-list-xs>
    <v-layout justify-center row wrap>
      <v-flex xs9 md8 text-xs-center>
        <span class="headline font-weight-bold">{{$store.state.post.fields.title}}</span>
      </v-flex>
      <v-flex xs9 md8 text-xs-right>
        <span class="font-weight-thin font-italic">{{$store.state.post.fields.release_date}}</span>
      </v-flex>
      <v-flex xs12 sm11 md9 class="mt-4">
        <hr />
      </v-flex>
      <v-flex xs12 sm10 md8 class="mt-2 mb-5">
        <div class="mystyle">
          <div v-html="$md.render($store.state.post.fields.body)"></div>
        </div>
      </v-flex>
      <v-container>
        <v-layout align-end>
          <v-flex xs12 text-xs-center>
            <a :href="$store.state.snslink.twitter" target="_blank">
              <i class="fab fa-twitter-square faa-shake animated-hover my-link-twitter mx-1"></i>
            </a>
            <a :href="$store.state.snslink.facebook" target="_blank">
              <i class="fab fa-facebook-square faa-shake animated-hover my-link-facebook mx-1"></i>
            </a>
            <a :href="$store.state.snslink.line" target="_blank">
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
  code {
    background-color: #f5f5f5;
    color: #000000;
    box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
  }
}
.mystyle /deep/ h2 {
  line-height: 1.8;
  border-bottom: solid 1.3px black;
  margin: 40px 0px 20px 10px;
  code {
    background-color: #f5f5f5;
    color: #000000;
    box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
  }
}
.mystyle /deep/ h3 {
  line-height: 1.8;
  border-bottom: solid 1.3px black;
  margin: 40px 0px 20px 10px;
  code {
    background-color: #f5f5f5;
    color: #000000;
    box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
  }
}
.mystyle /deep/ hr {
  margin: 40px 0px 40px 0px;
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
  code {
    background-color: #f5f5f5;
    color: #000000;
    box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
  }
}
.mystyle /deep/ a {
  color: #000000;
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
.mystyle /deep/ p {
  line-height: 1.8;
  img {
    max-width: 100%;
    height: auto;
    margin: 20px 0px 20px 0px;
  }
  code {
    background-color: #f5f5f5;
    color: #000000;
    box-shadow: 0px 1px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
  }
}
</style>

<script lang="ts">
export default {
  head() {
    const title = this["$store"].state.post.fields.title;
    const body = this["$store"].state.post.fields.body;
    const url =
      "https://blog.youyo.io/posts/" +
      this["$store"].state.post.fields.slug +
      "/";

    return {
      title: title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: body
        },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:title",
          property: "og:title",
          content: title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: body
        },
        {
          hid: "og:url",
          property: "og:url",
          content: url
        }
      ]
    };
  }
};
</script>