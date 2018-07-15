<template>
  <el-card class="form">
    <FormSchema ref="formSchema" v-model="model" @submit.prevent
      :schema="schema" :components="components">
      <el-form-item>
        <el-button type="primary" @click="submit">Subscribe</el-button>
        <el-button @click="reset">Reset</el-button>
      </el-form-item>
    </FormSchema>
  </el-card>
</template>

<script>
  import {
    Components,
    default as FormSchema
  } from '@formschema/native'

  import ElementUIComponents from '../../..'

  export default {
    data: () => ({
      schema: require('../schema/newsletter'),
      components: ElementUIComponents(Components),
      model: {}
    }),
    methods: {
      submit (data) {
        console.log(data)
      },
      reset () {
        this.$refs.formSchema.reset()
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
    font-size: 1.7em;
    text-align: center;
    margin-top: 0;
    margin-bottom: .2em
  }

  h1 + p {
    display: block;
    text-align: center;
    margin-bottom: 1.2em
  }

  small {
    line-height: 20px;
    display: block;
  }

  .el-alert {
    margin-bottom: 15px
  }
</style>
