// import { mount } from '@vue/test-utils'
import component from '../../components/FormSchemaElementUI.vue'

/* global describe it expect */

describe('component', () => {
  it('should not be a functional component', () => {
    expect(component.props.action).toEqual({ type: String })
  })
})
