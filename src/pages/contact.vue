<template>
    <h3 class="text-2xl font-bold text-left py-2">Contact</h3><br>
    <b-card bg-variant="light">
    <b-form-group label-cols="4" label-cols-lg="2" label-size="10px" label="Phone" label-for="input-sm">
    <b-form-input id="input-sm" size="sm"></b-form-input>
  </b-form-group>
  <b-form-group label-cols="4" label-cols-lg="2" label-size="10px" label="Email" label-for="input-sm">
    <b-form-input id="input-sm" size="sm"></b-form-input>
  </b-form-group>
  <b-form-group label-cols="4" label-cols-lg="2" label-size="10px" label="Address" label-for="input-sm">
    <b-form-input id="input-sm" size="sm"></b-form-input>
  </b-form-group>
  <b-form-group label-cols="4" label-cols-lg="2" label-size="10px" label="Kelurahan" label-for="input-sm">
    <b-form-input id="input-sm" size="sm"></b-form-input>
  </b-form-group>
  <b-form-group label-cols="4" label-cols-lg="2" label-size="10px" label="Kecamatan" label-for="input-sm">
    <b-form-input id="input-sm" size="sm"></b-form-input>
  </b-form-group>
  <b-form-group label-cols="4" label-cols-lg="2" label-size="10px" label="Kota" label-for="input-sm">
    <b-form-input id="input-sm" size="sm"></b-form-input>
  </b-form-group>
  <b-form-group label-cols="4" label-cols-lg="2" label-size="10px" label="Provinsi" label-for="input-sm">
    <b-form-input id="input-sm" size="sm"></b-form-input>
  </b-form-group>
  <b-form-group label-cols="4" label-cols-lg="2" label-size="10px" label="Kode Pos" label-for="input-sm">
    <b-form-input id="input-sm" size="sm"></b-form-input>
  </b-form-group>
                    <button type="button" class="btn btn-warning m-2" right text="Right align">Submit </button>
                  
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