<template>
  <FormSchema ref="formSchema" v-bind="$props" v-model="model" @submit="submit">
    <slot></slot>
  </FormSchema>
</template>

<script>
import  FormSchema from '@formschema/native'

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
    const label = isArray || enableLabel && !field.isArrayField ? field.label : ''
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

FormSchema.setComponent('form', {
  render (createElement, { props, slots }) {
    const labelWidth = '120px'
    const model = {}

    return createElement('el-form', {
      props: { labelWidth, model }
    }, slots().default)
  }
})

FormSchema.setComponent('inputwrapper', {
  render: (h, { slots }) => slots().default
})

FormSchema.setComponent('email', input('el-input'))
FormSchema.setComponent('password', input('el-input'))
FormSchema.setComponent('text', input('el-input'))
FormSchema.setComponent('textarea', input('el-input'))
FormSchema.setComponent('checkbox', choice('el-checkbox'))
FormSchema.setComponent('switch', input('el-switch'))
FormSchema.setComponent('radio', choice('el-radio'))
FormSchema.setComponent('select', input('el-select'))
FormSchema.setComponent('option', {
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

FormSchema.setComponent('checkboxgroup', group('el-checkbox-group'))
FormSchema.setComponent('radiogroup', group('el-radio-group'))

FormSchema.setComponent('buttonswrapper', {
  render: (h, { slots }) => h('el-form-item', slots().default)
})

FormSchema.setComponent('inputswrapper', formItem((h, { slots }) => {
  return h('el-form-item', slots().default)
}, true, true))

FormSchema.setComponent('arraybutton', {
  render: (h, { props, listeners }) => h('el-button', {
    props: {
      type: 'text',
      disabled: props.disabled
    },
    on: listeners
  }, 'Add more item')
})

FormSchema.setComponent('error', {
  render: (h, { slots }) => h('el-alert', {
    props: { type: 'error' }
  }, slots().default)
})

FormSchema.setComponent('submitbutton', {
  render: (h, { props }) => h('el-button', {
    props: {
      type: 'primary',
      nativeType: props.type,
      disabled: props.disabled
    }
  }, 'Submit')
})

export default {
  props: {
    /**
     * The JSON Schema object.
     * @type Object
     */
    schema: { type: Object, required: true },

    /**
     * Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type.
     * @model
     * @default {}
     */
    value: { type: Object, default: () => ({}) },

    /**
     * @private
     */
    action: { type: String },

    /**
     * @private
     */
    autocomplete: { type: String },

    /**
     * @private
     */
    enctype: { type: String, default: 'application/x-www-form-urlencoded' },

    /**
     * @private
     */
    method: { type: String, default: 'post' },

    /**
     * @private
     */
    novalidate: { type: Boolean },

    /**
     * @private
     */
    inputWrappingClass: { type: String }
  },
  methods: {
    formSchema () {
      return this.$refs.formSchema
    },
    submit (e) {
      this.formSchema().form().validate((valid) => {
        if (valid) {
          console.log(JSON.stringify(this.model))
          this.$refs.formSchema.clearErrorMessage()
          this.$emit('submit', this.model)
        } else {
          this.$refs.formSchema.setErrorMessage('Please fill out the required fields')
          this.$emit('invalid')
          return false
        }
      })
    },
    reset () {
      this.formSchema().form().resetFields()
    }
  },
  components: { FormSchema }
}
</script>
