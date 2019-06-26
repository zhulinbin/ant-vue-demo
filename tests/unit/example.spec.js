import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Hello from '@/views/Hello.vue'

describe('Hello.vue', () => {
  it('renders props.testMessage when passed', () => {
    const testMessage = 'new test message'
    const wrapper = shallowMount(Hello, {
      propsData: { testMessage }
    })
    expect(wrapper.text()).to.include(testMessage)
  })
})
