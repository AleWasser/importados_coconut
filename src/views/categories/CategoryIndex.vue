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
        <v-row>
          <v-col sm="12" md="3" v-for="item in products" :key="item.id">
            <router-link :to="'/productos/' + item.id" class="linkless">
              <v-img :src="item.imageUrl" lazy-src="@/assets/importados_coconut_placeholder.png">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <div class="body-1 mt-2 mb-0 text-center">
                <p class="pa-0 ma-0">{{item.name}}</p>
                <p class="pa-0 ma-0 font-weight-bold">${{item.price}}</p>
                <p class="subtitle-1 ma-0">3 cuotas sin interes</p>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
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