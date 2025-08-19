import svelte from "rollup-plugin-svelte"
import resolve from "@rollup/plugin-node-resolve"
import postcss from "rollup-plugin-postcss"
// import alias from "@rollup/plugin-alias"
import sveltePreprocess from "svelte-preprocess"
import path from "path"

// const __dirname = path.resolve()

export default {
  input: "src/index.js",
  output: {
    file: "../static/widgets.js",
    format: "iife",
  },
  plugins: [
    // alias({
    //   entries: [
    //     {
    //       find: "san-webkit-next",
    //       replacement: path.resolve(
    //         __dirname,
    //         "node_modules/san-webkit-next/dist"
    //       ),
    //     },
    //   ],
    // }),
    svelte({
      preprocess: sveltePreprocess({
        postcss: true,
        typescript: true,
        tsconfigFile: "./tsconfig.json",
      }),
      compilerOptions: {
        customElement: true,
      },
    }),
    postcss({
      minimize: true,
    }),

    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
  ],
}
