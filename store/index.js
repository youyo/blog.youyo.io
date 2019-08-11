import createClient from "~/plugins/contentful";

export const state = () => ({
  posts: null,
  post: null,
  snslink: null
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setPost(state, post) {
    state.post = post;
  },
  setSnslink(state, snslink) {
    state.snslink = snslink;
  }
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { params, route }) {
    if (params.slug) {
      await dispatch("fetchPost", params.slug);
    } else if (route.path == "/posts/" || route.path == "/posts") {
      await dispatch("fetchListPosts");
    } else {
      await dispatch("fetchPosts");
    }
  },

  async fetchPosts({ commit }) {
    const client = createClient();
    const posts = await client
      .getEntries({
        content_type: "posts",
        order: "-fields.release_date",
        limit: 9
      })
      .then(entries => {
        return entries.items;
      })
      .catch(console.error);
    commit("setPosts", posts);
  },

  async fetchListPosts({ commit }) {
    const client = createClient();
    const posts = await client
      .getEntries({
        content_type: "posts",
        order: "-fields.release_date"
      })
      .then(entries => {
        return entries.items;
      })
      .catch(console.error);
    commit("setPosts", posts);
  },

  async fetchPost({ commit }, slug) {
    const client = createClient();
    const post = await client
      .getEntries({
        content_type: "posts",
        "fields.slug": slug,
        limit: 1
      })
      .then(entries => {
        return entries.items[0];
      });
    commit("setPost", post);
    commit("setSnslink", {
      twitter: `https://twitter.com/intent/tweet?url=https://blog.youyo.io/posts/${
        post.fields.slug
      }&text=${post.fields.title}`,
      facebook: `https://www.facebook.com/share.php?u=https://blog.youyo.io/posts/${
        post.fields.slug
      }`,
      line: `https://social-plugins.line.me/lineit/share?url=https://blog.youyo.io/posts/${
        post.fields.slug
      }&text=${post.fields.title}`
    });
  }
};
