import { mount } from '@vue/test-utils'
import Component from '../CWidget06'
const ComponentName = 'CWidget06'

const defaultWrapper = mount(Component)
const customWrapper = mount(Component,{
  context:{
    props: {
      header: 'header',
      text: 'text',
      cardClasses: 'card-xl',
    }
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is functional component', () => {
    expect(defaultWrapper.isFunctionalComponent).toBe(true)
  })
  it('correctly render component with default props', () => {
    expect(defaultWrapper.find('h4').text()).toMatch('header:string')
    expect(defaultWrapper.find('p').text()).toMatch('text:string')
    expect(defaultWrapper.find('div').attributes().class).toMatch('card')
  })
  it('matches default props snapshot', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('correctly render component with custom props', () => {
    expect(customWrapper.find('h4').text()).toMatch('header')
    expect(customWrapper.find('p').text()).toMatch('text')
    expect(customWrapper.find('div').attributes().class).toMatch('card card-xl')
  })
  it('matches custom props snapshot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
