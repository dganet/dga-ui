import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import analyser from 'rollup-plugin-analyzer'
import { terser } from 'rollup-plugin-terser'
const packageJson = require('./package.json')

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        analyser({
            summaryOnly: true
        }),
        terser(),
        resolve({preferBuiltins: false}),
        commonjs(),
        typescript({  useTsconfigDeclarationDir: true })
    ]
}
