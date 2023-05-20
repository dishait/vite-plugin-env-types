# vite-plugin-env-types

Automatically generate env type

<br />


## Motivation

Want to automatically get prompted for `import.meta.env` instead of managing it manually 👉 [vitejs.dev/guide/env-and-mode](https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript)

<br />

## Usage

### install

```shell
npm i vite-plugin-env-types -D
```

<br />

### config

```ts
// vite.config.ts
import { defineConfig } from "vite";
import EnvTypes from "vite-plugin-env-types";

export default defineConfig({
  plugins: [
    EnvTypes({
        dts: './types/.env.d.ts' // Write file location, default to "env.d.ts"
    }),
  ],
});
```

```json5
// tsconfig.json
{
    "include": ["./env.d.ts"] // Ensure that files are scanned
}
```

<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).
