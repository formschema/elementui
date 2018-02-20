<template>
  <FormSchema ref="formSchema" v-bind="$props" v-model="model">
    <slot></slot>
  </FormSchema>
</template>

<script>
// import FormSchema from '@vue-json-schema/form-schema'
//import { setComponent, FormSchema } from 'vue-json-schema'
//import FormSchema from 'vue-json-schema'
import FormSchema from '/home/demsking/Workspace/projects/vue-json-schema/dist/FormSchema.js'

FormSchema.setComponent('form', 'el-form', ({ vm }) => {
  // vm is the FormSchema VM

  const labelWidth = '120px'
  const model = vm.data
  const rules = {}

  vm.fields.forEach((field) => {
    const type = field.schemaType === 'array' && field.attrs.type === 'radio'
      ? 'string'
      : field.schemaType
    const required = field.attrs.required
    const message = field.attrs.title
    const trigger = ['radio', 'checkbox', 'select'].includes(field.attrs.type)
      ? 'change' : 'blur'

    // http://element.eleme.io/#/en-US/component/form#validation
    rules[field.attrs.name] = { type, required, message, trigger }
  })

  // returning the form props
  return { labelWidth, rules, model }
})

const formItem = (elementInput, enableLabel = true) => ({
  disableWrappingLabel: true,
  render: (createElement, { props, slots }) => [
    createElement('el-form-item', {
      // http://element.eleme.io/#/en-US/component/form#form-item-attributes
      props: {
        label: enableLabel ? props.field.label : '',
        // http://element.eleme.io/#/en-US/component/form#validation
        prop: props.field.attrs.name
      }
    }, [
      elementInput(createElement, { props, slots }),
      props.field.description
        ? createElement('small', props.field.description)
        : undefined
    ])
  ]
})

const input = (tag) => formItem((h, { props, slots }) => {
  return h(tag, props.input, slots().default)
})

const choice = (tag) => formItem((h, { props, slots }) => h(tag, {
  ...props.input,
  props: {
    ...props.input.props,
    label: props.field.label,
    name: props.field.attrs.name,
    trueLabel: props.field.attrs.value
  }
}, slots().default), false)

const group = (tag) => formItem((h, { props, slots }) => h(tag, {
  ...props.input,
  props: {
    ...props.input.props,
    label: props.field.label,
    name: props.field.attrs.name
  }
}, slots().default))

FormSchema.setComponent('email', input('el-input'))
FormSchema.setComponent('password', input('el-input'))
FormSchema.setComponent('text', input('el-input'))
FormSchema.setComponent('textarea', input('el-input'))
FormSchema.setComponent('checkbox', choice('el-checkbox'))
FormSchema.setComponent('switch', input('el-switch'))
FormSchema.setComponent('radio', choice('el-radio'))
FormSchema.setComponent('checkboxgroup', group('el-checkbox-group'))
FormSchema.setComponent('radiogroup', group('el-radio-group'))
FormSchema.setComponent('select', input('el-select'))
FormSchema.setComponent('option', 'el-option')
FormSchema.setComponent('button', 'el-button')
FormSchema.setComponent('buttonswrapper', 'el-form-item')
FormSchema.setComponent('arraybutton', 'el-button', {
  type: 'text',
  label: 'Add more item'
})

FormSchema.setComponent('error', 'el-alert', ({ vm }) => ({
  type: 'error',
  title: vm.error
}))

export default {
  props: {
    /**
     * The JSON Schema object. Use the `v-if` directive to load asynchronous schema.
     * @type [Object, Promise]
     */
    schema: { type: [Object, Promise], required: true },

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
  created () {
    setTimeout(() => this.reset(), 0)
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
