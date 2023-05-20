# vite-plugin-env-types

Automatically generate env type

## Usage

### install

```shell
npm i vite-plugin-env-types -D
```

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

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).
