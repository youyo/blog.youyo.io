const contentful = require("contentful");

export default function createClient() {
  return contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_DELIVERY_ACCESS_TOKEN
  });
}
