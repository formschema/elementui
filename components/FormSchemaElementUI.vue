<template>
  <form-schema ref="formSchema" v-bind="$props" v-model="model">
    <slot>
      <el-button type="primary" @click="submit">Submit</el-button>
      <el-button @click="reset">Reset</el-button>
    </slot>
  </form-schema>
</template>

<script>
// import FormSchema from '@vue-json-schema/form-schema'
import FormSchema from 'vue-json-schema'
/*
import { Option } from 'element-ui'
*/

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

// http://element.eleme.io/#/en-US/component/form#validation
FormSchema.setComponent('label', 'el-form-item', ({ field }) => ({
  prop: field.attrs.name
}))

FormSchema.setComponent('email', 'el-input')
FormSchema.setComponent('password', 'el-input', { type: 'password' })
FormSchema.setComponent('text', 'el-input')
FormSchema.setComponent('textarea', 'el-input')
FormSchema.setComponent('checkbox', 'el-checkbox')
FormSchema.setComponent('switch', 'el-switch')
FormSchema.setComponent('radio', 'el-radio')
FormSchema.setComponent('button', 'el-button')
FormSchema.setComponent('arraybutton', 'el-button', () => ({
  type: 'text'
}))
FormSchema.setComponent('select', 'el-select')

// You can also use the component object
FormSchema.setComponent('option', 'el-option')

// By default `<div/>` is used to render the message error.
// To override this, use the `error` type:
FormSchema.setComponent('error', 'el-alert', ({ vm }) => ({
  type: 'error',
  title: vm.error
}))

FormSchema.setComponent('arraybutton', 'el-button', {
  type: 'text',
  label: 'Add more item'
})

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
