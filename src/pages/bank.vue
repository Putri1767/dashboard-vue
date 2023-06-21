<template>
    <div>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Utility Bank"
      label-size="text-2xl font-bold"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
    
    <b-form-group
    placeholder="Bank Name"
        label="Bank Name:"
        label-for="nested-type"
        label-cols-sm="3"
        label-align-sm="right"
      >

      <b-form-select
      id="inline-form-custom-select-pref"
      placeholder="Bank Name"
      class="mb-2 mr-sm-3 mb-sm-0"
      :options="[{ text: 'Bank Name', value: null }, 'BCA', 'BRI', 'Mandiri']"
      :value="null"></b-form-select>
      
    </b-form-group>
    <b-form-group
        label="Kantor Cabang:"
        label-for="nested-cabang"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-cabang" placeholder="Please enter Kantor Cabang"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Bank Number:"
        label-for="nested-Number"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-Number" placeholder="Please enter Bank Number"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Account Name:"
        label-for="nested-name"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-name" placeholder="Please enter Account Name"></b-form-input>
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