import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://scombz-utilities.com",
  // site: "https://scombz-utilities.github.io",
  // base: "/",
});
