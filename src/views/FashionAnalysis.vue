<template>
  <v-container>
  <v-row>
    <v-col class="col-sm-12 text-center">
      <h3>Analisar Meu Estilo</h3>
    </v-col>
  </v-row>
  <v-row v-if="!analisando" class="fill-width">
    <v-col class="col-sm-12 text-center">
      <v-file-input accept="images/*" capture="camera" @change="previewPhoto" v-model='photo' label="Carregar/Bater Foto"></v-file-input>
    </v-col>

  </v-row>
  <v-row v-else  class="fill-width">
      <v-col class="col-sm-12">
        <p>{{resultado}}</p>
       <v-img :src="myPhoto" alt=""/>
       
    </v-col>
  </v-row>
    
  </v-container>

</template>

<script>
import api from "@/api"
export default {

  data() {
    return {
      photo: [],
      myPhoto: "",
      resultado: "Analisando ...",
      analisando: false,
      refazerButton: false,

    };
  },
  components: {

  },
  methods: {
    previewPhoto() {
      let that = this;
      if(that.photo) {
        that.analisando = true;
        that.resultado = "Analisando ...";
        var reader = new FileReader();
        reader.onload = function(e) {
          that.myPhoto = e.target.result;
          api.ai.imageAnalysis(that.photo).then(estilo => {
            that.resultado = "Seu estilo é " + estilo 
            that.refazerButton = true;
          });
        }
        reader.readAsDataURL(this.photo); 
      }
    }
  }
}
</script>