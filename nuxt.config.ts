import VuetifyLoaderPlugin from "vuetify-loader/lib/plugin";
import pkg from "./package.json";
import createClient from "./plugins/contentful";

const client = createClient();
const generateDynamicRoutes = function() {
  return client
    .getEntries({
      content_type: "posts",
      order: "-fields.release_date"
    })
    .then(entries => {
      return entries.items.map(content => {
        return "/posts/" + content.fields.slug;
      });
    })
    .catch(console.error);
};

export default {
  mode: "spa",

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || "",
    CTF_DELIVERY_ACCESS_TOKEN: process.env.CTF_DELIVERY_ACCESS_TOKEN || ""
  },

  generate: {
    routes: generateDynamicRoutes
  },

  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },

  loading: { color: "#fff" },
  css: ["~/assets/style/app.styl"],
  plugins: ["@/plugins/vuetify", "~/plugins/contentful", "~/plugins/prism"],
  modules: ["@nuxtjs/axios", "@nuxtjs/markdownit", "@nuxtjs/sitemap"],

  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    use: ["markdown-it-footnote"]
  },

  sitemap: {
    path: "sitemap.xml",
    hostname: "https://blog.youyo.io",
    exclude: [],
    routes: generateDynamicRoutes
  },

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    extend(config, ctx) {}
  }
};
