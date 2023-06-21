<template>
  <h3 class="text-2xl font-bold text-left py-2">View Letter Type</h3> <br>

<b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Letter Type Information"
        label-size=" font-bold"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
      <b-form-group
        label="Letter Name:"
        label-for="nested-Name"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-Name" placeholder="Surat Keterangan"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Format:"
        label-for="nested-format"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-format"  placeholder="xxx/S.Pk/BKJ/mm/yyyy" ></b-form-input>
    </b-form-group>
    <b-form-group
        label="Restart Num Type :"
        label-for="nested-Restart"
        label-cols-sm="3"
        label-align-sm="right"
        description="*Letter Number/LetterType/BTJ/Month Created/Year Created"
      >
      <b-form-input id="nested-restart" placeholder="Monthly"></b-form-input>
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