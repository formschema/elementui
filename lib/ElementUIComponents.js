const defaultOptions = {
  labelWidth: '120px',
  arrayButtonLabel: 'Add more item'
}

const Form = {
  functional: true,
  render (h, { props, listeners, slots }) {
    return h('el-form', {
      props: {
        model: props.value,
        labelWidth: defaultOptions.labelWidth
      },
      on: listeners
    }, slots().default)
  }
}

const FormItem = {
  functional: true,
  props: {
    label: { type: String },
    enableWrapper: { type: Boolean, default: false }
  },
  render (h, { data, props, slots }) {
    if (data.field.isArrayField && props.enableWrapper !== true) {
      return slots().default
    }

    return h('el-form-item', {
      props: {
        prop: data.field.attrs.name,
        label: props.label,
        required: data.field.attrs.required
      }
    }, slots().default)
  }
}

const Element = (component) => ({
  functional: true,
  props: ['type', 'label', 'value'],
  render (h, { data, props, listeners, slots }) {
    const nodes = [
      h(component, {
        field: data.field,
        props: {
          ...data.attrs,
          ...props
        },
        on: {
          ...listeners,
          input (value) {
            const target = nodes[0].elm

            target.value = value
            props.value = value

            listeners.input({ target })
          },
          change (value, event) {
            const target = nodes[0].elm

            target.value = value
            props.value = value

            listeners.change({ target })
          }
        }
      }, slots().default)
    ]

    return h(FormItem, {
      field: data.field,
      props: props,
      on: listeners
    }, nodes)
  }
})

const ElCheckbox = (component) => ({
  functional: true,
  render (h, { data, props }) {
    const node = h(component, {
      props: {
        name: data.attrs.name,
        label: data.fieldParent ? props.value : props.label
      }
    }, data.fieldParent && !data.fieldParent.isArrayField ? '' : props.label)

    if (data.fieldParent) {
      return h(FormItem, {
        field: data.fieldParent || data.field,
        props: props
      }, [ node ])
    }

    return node
  }
})

const Radio = {
  functional: true,
  render (h, { data, props, listeners }) {
    return h('el-radio', {
      props: {
        name: data.attrs.name,
        label: props.label,
        value: props.value
      }
    }, props.label)
  }
}

const ElSelect = {
  functional: true,
  render (h, { data, props, listeners, slots }) {
    const field = data.field
    const vnode = h('el-select', {
      props: props,
      on: {
        change: [
          listeners.change,
          (value) => {
            const { label } = field.items.find((item) => item.value === value)

            vnode.componentInstance.selected.value = value
            vnode.componentInstance.selected.currentLabel = label
          }
        ]
      }
    }, slots().default)

    return vnode
  }
}

const Option = {
  functional: true,
  render (h, { data, props, listeners }) {
    return h('el-option', {
      props: {
        label: props.label,
        value: props.value
      },
      on: listeners
    })
  }
}

const Input = (type) => ({
  functional: true,
  render (h, { data, props, listeners }) {
    return h('el-input', {
      props: {
        ...data.attrs,
        type: type,
        value: props.value,
        label: props.label
      },
      on: listeners
    })
  }
})

const FieldsetCheckbox = {
  functional: true,
  render (h, { data, listeners, slots }) {
    return h(FormItem, {
      field: data.field,
      attrs: data.attrs,
      props: {
        label: data.field.label,
        enableWrapper: true
      },
      on: listeners
    }, slots().default)
  }
}

const FieldsetRadio = {
  functional: true,
  render (h, { data, props, listeners, slots }) {
    const nodes = slots().default
    const fieldset = h('el-radio-group', {
      props: props,
      on: {
        input (value) {
          /**
            * Related to http://element.eleme.io/#/en-US/component/radio#radio-events
            * ElementUI send the label value of the chosen radio instead of
            * the radio value. So we need to make an hack to emit the selected
            * element value to the FormSchema instance
            * :-/
            */
          const item = data.field.items.find((item) => item.label === value)

          if (!item) {
            return
          }

          const target = {
            value: item.value
          }

          listeners.input({ target })
        }
      }
    }, nodes)

    return h(FormItem, {
      field: data.field,
      attrs: data.attrs,
      props: {
        label: props.label,
        value: props.value,
        enableWrapper: true
      }
    }, [ fieldset ])
  }
}

const FieldsetDefault = {
  functional: true,
  render (h, { data, props, listeners, slots }) {
    const fieldset = h('fieldset', {
      props: props,
      on: {
        change (value) {
          console.log('èèèèèèèèè>', value)
        },
        input (value) {
          /**
            * Related to http://element.eleme.io/#/en-US/component/radio#radio-events
            * ElementUI send the label value of the chosen radio instead of
            * the radio value. So we need to make an hack to emit the selected
            * element value to the FormSchema instance
            * :-/
            */
          const item = field.items.find(({ label }) => label === value)

          const target = {
            value: item.value
          }

          props.value = item.value

          listeners.input({ target })
        }
      }
    }, slots().default)

    return h(FormItem, {
      field: data.field,
      attrs: data.attrs,
      props: {
        label: data.field.label,
        enableWrapper: true
      },
      on: listeners
    }, [ fieldset ])
  }
}

const FieldsetInput = {
  functional: true,
  render (h, { data, listeners, slots }) {
    const nodes = slots().default || []

    nodes.push(h('div', [
      h(ArrayButton, data.newItemButton)
    ]))

    return h(FormItem, {
      field: data.field,
      attrs: data.attrs,
      props: {
        label: data.field.label,
        enableWrapper: true
      },
      on: listeners
    }, nodes)
  }
}

const Fieldset = {
  functional: true,
  render (h, { data, props, listeners, slots }) {
    switch (data.field.attrs.type) {
      case 'radio':
        return h(FieldsetRadio, data, slots().default)

      case 'checkbox':
        return h(FieldsetCheckbox, data, slots().default)
    }

    if (data.newItemButton) {
      return h(FieldsetInput, data, slots().default)
    }

    return h(FieldsetDefault, data, slots().default)
  }
}

const ArrayButton = {
  functional: true,
  render (h, { listeners }) {
    return h('el-button', {
      on: listeners,
      attrs: {
        type: 'text'
      }
    }, defaultOptions.arrayButtonLabel)
  }
}

const Error = {
  functional: true,
  render (h, { slots }) {
    return h('el-alert', {
      props: {
        type: 'error'
      }
    }, slots().default)
  }
}

const Text = Element('el-input')
const Textarea = Element(Input('textarea'))
const Checkbox = ElCheckbox('el-checkbox')
const File = Element(Input('file'))
const Select = Element(ElSelect)

export default (Components, options = defaultOptions) => {
  const components = new Components()

  components.set('form', Form)
  components.set('text', Text)
  components.set('checkbox', Checkbox)
  components.set('radio', Radio)
  components.set('file', File)
  components.set('select', Select)
  components.set('option', Option)
  components.set('hidden', 'input')
  components.set('textarea', Textarea)
  components.set('fieldset', Fieldset)
  components.set('error', Error)

  return components
}
