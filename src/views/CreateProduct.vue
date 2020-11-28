<template>
  <div>
    <h3>Cadastrar Produto</h3>
    <v-form @submit.prevent="onSubmit" @reset="onReset">
      <v-text-field v-model="form.name" label="Nome do Produto"></v-text-field>
      <v-textarea
          label="Descrição"
          v-model='form.description'
        ></v-textarea>
      <v-text-field v-model="form.price" label="Preço"></v-text-field>
      <v-text-field v-model="form.store" label="Nome da Loja"></v-text-field>
      <v-file-input v-model='images' clearable multiple chips label="Imagens"></v-file-input>
       <p class="text-right">
            <v-btn color="blue" type="submit" large>Criar</v-btn>
       </p>

    </v-form>
  </div>
</template>

<script>

import api from "@/api";
export default {
  data: () => ({
    descriptionLimit: 60,
    isLoading: true,
    form: {},
    images: [],
  }),


  methods: {
    onSubmit() {
        api.products.save(this.form)
            .then((doc) => {
                api.products.uploadPhotos(doc, this.images).then(() => {
                    alert('Produto Cadastrado!')
                })
                this.onReset();
            }); 
    },
    onReset() {
      this.form = {};
      this.images = [];
    },
        
  },
  created() {
  }
};
</script>

<style>
</style>