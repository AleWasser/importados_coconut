<template>
  <div>
    <v-container class="pa-5" v-if="!category">
      <v-row class="text-center pa-5">
        <v-col cols="12">
          <v-progress-circular indeterminate size="100" width="10"></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
    <div v-else>
      <v-container fluid class="pa-0 pink">
        <v-img :src="category.imageUrl" style="height:400px"></v-img>
      </v-container>
      <v-container fluid>
        <v-row align="center" class="text-center">
          <v-col cols="12">
            <h3 class="display-4">{{category.name}}</h3>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid class="pb-5 teal">
        <v-row align="center" class="text-center" style="height:100px">
          <v-col cols="12">
            <h3 class="display-4 white--text">Filtros</h3>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <product-item :products="products"></product-item>
      </v-container>
    </div>
  </div>
</template>

<script>
import ProductItem from "../../components/products/ProductItem";

export default {
  components: {
    "product-item": ProductItem
  },
  computed: {
    category() {
      return this.$store.getters["categories/getCategory"](
        this.$route.params.id
      );
    },
    products() {
      return this.$store.getters["products/getProductsByCategory"](
        this.$route.params.id
      );
    }
  }
};
</script>