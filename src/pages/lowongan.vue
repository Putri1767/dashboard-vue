<template>
<h3 class="text-2xl font-bold text-left py-2">Form lowongan</h3>
<b-card bg-variant="light">
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-5 is-offset-3">
          <form @submit.prevent="handleSubmit" class="py-3 px-10 text-center">
            <tr>
              <textarea class="bg-white-200 border"
                                    placeholder="    Title"
                                    rows="1"
                                    cols="150"
                                    v-model="form.title"
                                /><br>
              <textarea class="bg-white-200 border"
                                    placeholder="    Summary"
                                    rows="1"
                                    cols="150"
                                    v-model="form.summary"
                                /><br>
              <textarea class= 'bg-white-200 border'
                                  placeholder="    Deskripsi"
                                    rows="4"
                                    cols="150"
                                    v-model="form.deskripsi"
                                />
                      <br>
              <textarea class="bg-white-200 border"
                                    placeholder="    Linkedin"
                                    rows="1"
                                    cols="150"
                                    v-model="form.Linkedin"
                                /><br>
              <textarea class="bg-white-200 border"
                                    placeholder="    Glints link"
                                    rows="1"
                                    cols="150"
                                    v-model="form.Glints"
                                /><br>
            <div class="field is-grouped">
              <div class="control">
                <button type="button" class="btn btn-warning m-2" right text="Right align">Submit </button>
              </div>
            </div>
          </tr>
          </form>
        </div>
        </div>
      </div>
    </div>
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