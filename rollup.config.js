import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: [
      // resolve(), // This plugin resolves third-party dependencies in node_modules
      resolve({ extensions: ['.js', '.jsx'] }), // This line tells Rollup to include '.jsx' files
      commonjs(), // This plugin converts CommonJS modules to ES6, so they can be included in a Rollup bundle
      url({ 
        include: ['**/*.woff', '**/*.woff2', '**/*.ttf'], 
        limit: 0, 
      }),
      postcss({
        extensions: ['.css'],
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        // extensions: [".js", ".jsx"],
      }),
      external(),
      
      terser(),
    ]
  }
];