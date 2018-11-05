import { mount } from '@vue/test-utils'
import Component from "../Footer";

const ComponentName = 'Footer'
const wrapper = mount(Component)
// /* eslint-disable no-console */
// console.log("something")

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  it('has isFixed method', () => {
    expect(typeof Component.methods.isFixed).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.element.textContent).toEqual('Footer')
    expect(wrapper.classes()).toContain('app-footer')
  })
});
