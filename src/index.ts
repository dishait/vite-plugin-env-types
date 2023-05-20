import fg from "fast-glob";
import { loadEnv } from "vite";
import type { Plugin } from "vite";
import { writeFile } from "fs/promises";

interface Options {
  /**
   * @default "env.d.ts"
   */
  dts?: string;
}

export default function EnvTypes(options: Options = {}): Plugin {
  const { dts = "env.d.ts" } = options;
  const ignoreKeys = ["BASE_URL", "MODE", "DEV", "PROD"];
  return {
    name: "vite-plugin-env-types",
    apply: "serve",
    enforce: "post",
    async configResolved(config) {
      const { envDir, envPrefix } = config;

      // get all mode keys
      const envFiles = await fg(".env*", {
        cwd: envDir,
        onlyFiles: true,
      });

      let keys = envFiles.map((file) => {
        const mode = file.slice(5);
        const _env = loadEnv(mode, envDir, envPrefix);
        return Object.keys(_env);
      }).flat();

      // filter keys 
      keys = [...new Set(keys)].filter((k) => !ignoreKeys.includes(k));

      await writeFile(
        dts,
        `/// <reference types="vite/client" />

interface ImportMetaEnv {
    ${keys.map((k) => `readonly ${k}: string`).join("\n	")} 
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}`,
      );
    },
  };
}
