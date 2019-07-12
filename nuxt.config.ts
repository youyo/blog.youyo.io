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
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.2.1/font-awesome-animation.min.css"
      }
    ]
  },

  loading: { color: "#fff" },
  css: [
    "~/assets/style/app.styl",
    {
      src: "~/node_modules/highlight.js/styles/railscasts.css",
      lang: "css"
    }
  ],
  plugins: ["@/plugins/vuetify", "~/plugins/contentful"],
  modules: ["@nuxtjs/axios", "@nuxtjs/markdownit", "@nuxtjs/sitemap"],

  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    use: ["markdown-it-footnote", "markdown-it-highlightjs"]
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
