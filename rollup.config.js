import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import html from "rollup-plugin-html";

export default [
  {
    input: "./src/index.ts",
    plugins: [
      nodeResolve(),
      typescript(),
      html({
        include: "**/*.html",
      }),
    ],
    onwarn: (warning, next) => {
      if (warning.code === "THIS_IS_UNDEFINED") return;
      next(warning);
    },
    output: {
      file: "./dist/fesm2015/index.js",
      format: "esm",
      sourcemap: true,
    },
  },
  {
    input: "./src/index.ts",
    plugins: [
      nodeResolve(),
      typescript(),
      html({
        include: "**/*.html",
      }),
    ],
    onwarn: (warning, next) => {
      if (warning.code === "THIS_IS_UNDEFINED") return;
      next(warning);
    },
    output: {
      file: "./dist/bundles/index.js",
      format: "cjs",
      sourcemap: true,
    },
  },
];
