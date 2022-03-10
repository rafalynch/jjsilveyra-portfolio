import * as contentful from "contentful";
import resolveResponse from "contentful-resolve-response";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export async function getHomeImage() {
  return await client.getAsset("3FPIiTtNfLKjvYwzP99Cc1").catch(console.error);
}

export async function getAllPaintings() {
  const data = await client.getEntries({
    content_type: "pintura",
  });
  return data.stringifySafe();
}
