import { defineConfig } from 'umi';
import Routes from './routes'


export default defineConfig({
  hash: true,
  routes: Routes,
  dynamicImport: {
    loading: '@/components/Loading'
  },
  nodeModulesTransform: {
    type: 'none',
  },
  sass: {
    implementation: require('node-sass'),
  },
  cssModulesTypescriptLoader: {}
});
