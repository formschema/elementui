const defaultOptions = {
  labelWidth: '120px',
  arrayButtonLabel: 'Add more item'
}

export default (Components, options = defaultOptions) => {
  const components = new Components()

  components.set('form', {
    render (createElement, { props, slots }) {
      const { labelWidth } = options
      const model = {}

      return createElement('el-form', {
        props: { labelWidth, model }
      }, slots().default)
    }
  })

  components.set('inputwrapper', {
    render: (h, { slots }) => slots().default
  })

  components.set('email', input('el-input'))
  components.set('password', input('el-input'))
  components.set('text', input('el-input'))
  components.set('textarea', input('el-input'))
  components.set('checkbox', choice('el-checkbox'))
  components.set('switch', input('el-switch'))
  components.set('radio', choice('el-radio'))
  components.set('select', input('el-select'))
  components.set('option', {
    render (createElement, { data, props }) {
      // http://element.eleme.io/#/en-US/component/select#option-attributes
      return createElement('el-option', {
        props: {
          value: props.value,
          label: data.field.label,
          disabled: props.disabled
        }
      })
    }
  })

  components.set('checkboxgroup', group('el-checkbox-group'))
  components.set('radiogroup', group('el-radio-group'))

  components.set('buttonswrapper', {
    render: (h, { slots }) => h('el-form-item', slots().default)
  })

  components.set('inputswrapper', formItem((h, { slots }) => {
    return h('el-form-item', slots().default)
  }, true, true))

  components.set('arraybutton', {
    render: (h, { props, listeners }) => h('el-button', {
      props: {
        type: 'text',
        disabled: props.disabled
      },
      on: listeners
    }, options.arrayButtonLabel)
  })

  components.set('error', {
    render: (h, { slots }) => h('el-alert', {
      props: { type: 'error' }
    }, slots().default)
  })

  return components
}

const formItem = (elementInput, enableLabel = true, isArray = false) => ({
  render: (createElement, context) => {
    const field = context.props.field || context.data.field
    const type = field.schemaType === 'array' && field.attrs.type === 'radio'
      ? 'string'
      : field.schemaType
    const required = field.attrs.required || false
    const message = field.attrs.title
    const trigger = ['radio', 'checkbox', 'select'].includes(field.attrs.type)
      ? 'change' : 'blur'
    const label = isArray || (enableLabel && !field.isArrayField) ? field.label : ''
    const prop = context.props.name
    const rules = { type, required, message, trigger }

    return createElement('el-form-item', {
      // http://element.eleme.io/#/en-US/component/form#form-item-attributes
      // http://element.eleme.io/#/en-US/component/form#validation
      props: { label, prop, required, rules }
    }, [
      elementInput(createElement, context),
      field.description
        ? createElement('small', field.description)
        : undefined
    ])
  }
})

const events = (listeners) => ({
  ...listeners,
  input (value) {
    listeners.input({ target: { value } })
  },
  change (value) {
    listeners.change({ target: { value } })
  }
})

const input = (tag) => formItem((h, { data, slots, listeners }) => {
  return h(tag, { ...data, on: events(listeners) }, slots().default)
})

const choice = (tag) => formItem((h, { data, props, slots, listeners }) => h(tag, {
  ...data,
  props: {
    ...props,
    label: data.field.label,
    trueLabel: props.value
  },
  on: events(listeners)
}, slots().default), false)

const group = (tag) => formItem((h, { data, props, slots }) => h(tag, {
  ...data,
  props: {
    ...props,
    label: data.field.label
  }
}, slots().default))
