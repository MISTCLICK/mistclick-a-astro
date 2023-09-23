import type { GetStaticPaths, APIRoute } from "astro";
import { promises as fs } from "fs";

export const getStaticPaths = (async () => {
  const files: string[] = await fs.readdir("./src/assets/cdn");

  return files.map((fn) => {
    return {
      params: {
        slug: fn,
      },
    };
  });
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const file = await fs.readFile(`./src/assets/cdn/${params.slug}`);
  return new Response(file);
};
