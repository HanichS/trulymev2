<template>
  <v-container>
    <v-row class="fill-height" align="center" justify="center">
      <v-col class="col-12">
        <h3 class="text-center">Recomendações para Você</h3>
      </v-col>

    </v-row>

    <v-row>
      <template v-if="products.length > 0">
        <v-col class="col-lg-3 col-md-4 col-sm-12" v-for="product in products" v-bind:key="product.name">
          <ProductCard :product="product"></ProductCard>
        </v-col>
      </template>
      <template v-else>
        <v-col class="col-lg-3 col-md-4 col-sm-12">
          <h3>Ops! Parece que não há recomendações de produtos para exibir...</h3>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api";
import ProductCard from "@/components/ProductCard";
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    let promises = [];
    promises.push(api.products.getAll());
    Promise.all(promises).then(results => {
      this.products = results[0];
    });
  },
  methods: {
  },

  components: {
    ProductCard
  }
};
</script>

<style>
.event {
  border: solid 2px;
}
</style>