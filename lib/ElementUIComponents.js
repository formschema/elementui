const defaultOptions = {
  labelWidth: '120px',
  arrayButtonLabel: 'Add more item'
}

const Form = {
  functional: true,
  render (h, { props, listeners, slots }) {
    return h('el-form', {
      props: {
        value: props.value,
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
        label: props.label
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
        attrs: { ...data.attrs },
        props: { ...props },
        on: listeners
      }, slots().default)
    ]

    return h(FormItem, {
      field: data.field,
      props: { ...props }
    }, nodes)
  }
})

const ElCheckbox = (component) => ({
  functional: true,
  render (h, { data, props, listeners }) {
    if (!data.fieldParent.isArrayField && props.type !== 'radio') {
      return h(FormItem, {
        field: data.fieldParent,
        props: { ...props }
      }, [
        h(component, {
          props: {
            value: props.value
          },
          on: listeners
        })
      ])
    }

    return h(component, {
      props: {
        label: props.label,
        name: data.attrs.name
      },
      on: listeners
    })
  }
})

const ElSelect = {
  functional: true,
  render (h, { data, props, listeners, slots }) {
    return h('el-select', {
      props: {
        ...data.attrs,
        value: props.value
      },
      on: listeners
    }, slots().default)
  }
}

const Option = {
  functional: true,
  render (h, { data, props }) {
    return h('el-option', {
      props: {
        label: props.label,
        value: props.value
      }
    })
  }
}

const Input = (type) => ({
  functional: true,
  render (h, { props, listeners }) {
    return h('el-input', {
      props: {
        type: type,
        value: props.value
      },
      on: listeners
    })
  }
})

const Fieldset = {
  functional: true,
  render (h, { data, props, listeners, slots }) {
    const nodes = slots().default || []

    if (data.newItemButton) {
      nodes.push(h('div', [
        h(ArrayButton, data.newItemButton)
      ]))

      return h(FormItem, {
        field: data.field,
        attrs: { ...data.attrs },
        props: {
          label: data.field.label,
          enableWrapper: true
        },
        on: listeners
      }, nodes)
    }

    let component = 'div'

    switch (data.field.attrs.type) {
      case 'radio':
      case 'checkbox':
        component = `el-${data.field.attrs.type}-group`
        break
    }

    return h(FormItem, {
      field: data.field,
      attrs: { ...data.attrs },
      props: {
        label: data.field.label,
        enableWrapper: true
      },
      on: listeners
    }, [
      h(component, {
        props: {
          value: props.value
        },
        on: listeners
      }, nodes)
    ])
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
const Radio = ElCheckbox('el-radio')
const Switch = ElCheckbox('el-switch')
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
  components.set('switch', Switch)
  components.set('hidden', 'input')
  components.set('textarea', Textarea)
  components.set('fieldset', Fieldset)
  components.set('error', Error)

  return components
}
