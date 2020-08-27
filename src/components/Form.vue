<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Your Name"
        label-for="input-1"
        description="We'll never share your personal information with anyone else."
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
          v-model="form.name"
          required
          placeholder="Enter your surname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="email:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.email"
          :options="email"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Sex" label-for="checkboxes-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Male</b-form-checkbox>
          <b-form-checkbox value="that">Femalet</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
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
                checked: []
            },
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
        this.form.checked = []
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