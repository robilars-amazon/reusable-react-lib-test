import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist-rollup/cjs/my-library.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist-rollup/esm/my-library.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist-rollup/umd/my-library.js',
      format: 'umd',
      name: 'myLibrary',
      sourcemap: true,
      globals:{
        react: 'React'
      }
    },
    {
      file: 'dist-rollup/system/my-library.js',
      format: 'system',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    peerDepsExternal(),
  ],
};
