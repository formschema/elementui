<template>
  <el-card class="form">
    <form-schema ref="formSchema" :schema="schema" v-model="model">
      <el-button type="primary" @click="submit">Subscribe</el-button>
    </form-schema>
  </el-card>
</template>

<script>
  import FormSchema from 'vue-json-schema'
  import {
    Form,
    FormItem,
    Input,
    Radio,
    Switch,
    Select,
    Option,
    Button
  } from 'element-ui'

  FormSchema.setComponent('form', Form, (vm) => {
    // vm is the FormSchema VM

    const labelWidth = '120px'
    const model = vm.data
    const rules = {}

    vm.fields.forEach((field) => {
      rules[field.name] = {
        required: field.required,
        message: field.title,
        trigger: ['radio', 'checkbox', 'select'].includes(field.type)
          ? 'change' : 'blur'
      }
    })

    // returning the form props
    return { labelWidth, rules, model }
  })

  FormSchema.setComponent('label', FormItem)
  FormSchema.setComponent('email', Input)
  FormSchema.setComponent('text', Input)
  FormSchema.setComponent('textarea', Input)
  FormSchema.setComponent('checkbox', Switch)
  FormSchema.setComponent('radio', Radio)
  FormSchema.setComponent('select', Select)
  FormSchema.setComponent('option', Option)

  export default {
    data: () => ({
      schema: require('@/schema/newsletter'),
      model: {}
    }),
    methods: {
      submit (e) {
        // this.model contains the valid data according your JSON Schema.
        // You can submit your model to the server here
        console.log(JSON.stringify(this.model))
      }
    },
    components: { FormSchema }
  }
</script>

<style>
  .form {
    text-align: left;
    width: 600px;
    margin: auto;
  }

  h1 {
    font-size: 2em;
    text-align: center;
    margin-top: 0
  }

  p {
    text-align: center;
  }

  small {
    line-height: 20px;
    display: block;
  }
</style>
