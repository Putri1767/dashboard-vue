<template>
   <div>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Create Team"
      label-size="lg"
      label-class="font-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label="Employee ID:"
        label-for="nested-employee id"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-employee id"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Name:"
        label-for="nested-Name"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-Name"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Position:"
        label-for="nested-Position"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-Position"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Contact:"
        label-for="nested-Contact"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-Contact"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Email:"
        label-for="nested-Email"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-Email"></b-form-input>
      </b-form-group>

      <button type="button" class="btn btn-warning m-2" right text="Right align">Submit </button>

      </b-form-group>
  </b-card>
</div>
      </template>
      
      <script>
       export default {
        data() {
              return {
                  text: "",
                  form: {
                      lowongan: null,
                      deskripsi: null,
                  },
              };
          },
        }
      </script>