<template>
    <div>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Letter type information"
      label-size=" font-bold"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
    
    <b-form-group
    placeholder="Letter Type"
        label="Letter Type:"
        label-for="nested-type"
        label-cols-sm="3"
        label-align-sm="right"
      >

      <b-form-select
      id="inline-form-custom-select-pref"
      placeholder="Letter Type"
      class="mb-2 mr-sm-3 mb-sm-0"
      :options="[{ text: 'Letter Type', value: null }, 'Surat Keterangan', 'Surat Permohonan', 'Surat Pernyataan']"
      :value="null"></b-form-select>
      
    </b-form-group>
    </b-form-group>
  </b-card>
</div>
  
<b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Letter Information"
        label-size="text-2xl font-bold"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
      <b-form-group
        label="Letter description:"
        label-for="nested-description"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-description" placeholder="Please enter letter description"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Date:"
        label-for="nested-date"
        label-cols-sm="3"
        label-align-sm="right"
      >
      <b-form-input id="nested-description" placeholder="dd/mm/yyyy"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Project/hal:"
        label-for="nested-project"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-project"  placeholder="Project/hal"></b-form-input>
    </b-form-group>
</b-form-group>

    </b-card>

    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Contact Information"
        label-size="text-2xl font-bold"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
  
      <b-form-group
        label="Receiver Name:"
        label-for="nested-name"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-project"  placeholder="Please enter receiver full name"></b-form-input>
    </b-form-group>
      </b-form-group>
    </b-card>

    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Letter Number Information"
        label-size="text-2xl font-bold"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
  
        <b-form-group
        label="Letter Number:"
        label-for="nested-name"
        label-cols-sm="3"
        label-align-sm="right"
        description="*Letter Number/LetterType/BTJ/Month Created/Year Created"
      >        <div class="flex items-right">

        <b-form-input id="nested-project"  placeholder="xxx/S.Pk/BKJ/mm/yyy"></b-form-input>
<button type="button" class="btn btn-warning m-2" right text="Right align">Generate </button> </div>
      </b-form-group>
  
        
      </b-form-group>
    </b-card>


    
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