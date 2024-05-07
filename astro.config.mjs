import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import wwwrap from "./astro-wwwrap/wwwrap"

export default defineConfig({
  output: "server",
  integrations: [tailwind(), wwwrap()],
  adapter: vercel()
});