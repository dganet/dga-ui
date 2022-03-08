import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2'
import analyser from 'rollup-plugin-analyzer'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'


const config = {
  input: 'src/index.ts',
  output: {
    dir: 'build',
    format: 'esm'
  },
  plugins: [        
    analyser({
      summaryOnly: true
    }),
    commonjs(),
    terser(),
    resolve({preferBuiltins: false}),
    typescript({  useTsconfigDeclarationDir: true }),
    babel({ babelHelpers: 'bundled' })]
};

export default config;