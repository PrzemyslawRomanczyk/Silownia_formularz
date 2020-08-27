<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Your Name"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="name"
          required
          placeholder="Enter your name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Surname:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="name"
          v-model="form.surname"
          required
          placeholder="Enter your surname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="email:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter your email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Sex" label-for="checkboxes-4">
        <b-form-select
          id="input-3"
          v-model="form.sex"
          :options="sex"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Form',
    data() {
      return {
            form: {
                name: '',
                surname: '',
                email: '',
                sex: null
            },
            sex: [{ text: 'Select One', value: null }, 'Male', 'Female', 'Dont want to say'],
            show: true
        }
    },
    methods: {
      onSubmit(evt: any) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt: any) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.surname = ''
        this.form.email = ''
        this.form.sex = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
})
</script>

<style lang="sass">

</style>