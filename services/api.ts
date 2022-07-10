import * as contentful from "contentful";
import safeJsonStringify from "safe-json-stringify";

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

  return JSON.parse(data.stringifySafe());
}

export async function getAllCollections() {
  const data = await client.getEntries({
    content_type: "collection",
  });

  return JSON.parse(data.stringifySafe());
}

export async function getCollectionByEntryId(entryId: string) {
  const data: any = await client.getEntry(entryId);

  return JSON.parse(safeJsonStringify(data));
}
