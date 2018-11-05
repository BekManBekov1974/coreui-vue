/*eslint import/namespace: [2, { allowComputed: true }]*/
import * as Components from './components'

const CoreuiVue = {

  install(Vue) {
    for (let plugin in Components) {
      let comp = Components[plugin]
      if(comp.name)
        Vue.component(comp.name, comp)
    }
  }
};
// Export library
export default CoreuiVue

// Export components
export * from './components';
