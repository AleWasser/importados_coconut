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
          <v-col cols="3">
            <v-img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.icfHFCwIkJ8q5c0orGwaKAHaHa%26pid%3DApi&f=1"
            ></v-img>

            <div class="body-1 mt-2 mb-0 text-center">
              <p class="pa-0 ma-0">PRODUCTO</p>
              <p class="pa-0 ma-0 font-weight-bold">$20</p>
              <p class="subtitle-1 ma-0">3 cuotas sin interes</p>
            </div>
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
    }
  }
};
</script>