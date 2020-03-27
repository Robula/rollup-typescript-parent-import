import typescript from '@rollup/plugin-typescript'

module.exports = {
  input: 'index.ts',
  output: {
    dir: 'lib',
    format: 'commonjs',
  },
  plugins: [
    typescript(),
  ]
}
