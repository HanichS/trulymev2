<template>
  <v-card>
    <v-img
      class="white--text align-end align-right"
      height="200px"
      width="100%"
      :src="product.images[0]"
    >
      <v-card-title>{{product.name}}</v-card-title>
    </v-img>

    <v-card-subtitle>{{product.description}}</v-card-subtitle>

    <v-card-text>


      <v-row class="align-center">
        <v-col class="col-7 text-left">
          <v-icon color="blue">mdi-map-marker</v-icon>
          {{product.store}}
        </v-col>
        <v-col xs-6 class="col-5 text-right">
          <v-icon>mdi-currency-usd</v-icon>
          {{product.price}}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["product"],
  filters: {
    tsToString: function(value) {
      return value.toDate().toLocaleDateString();
    }
  }
};
</script>

<style>
</style>