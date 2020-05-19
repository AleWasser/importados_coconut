<template>
  <div>
    <v-container fluid class="py-0">
      <v-row>
        <v-col cols="12" class="pa-0">
          <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="py-5">
      <v-row class="text-center">
        <v-col cols="12" class="pb-0">
          <h1 class="title text-center">CATEGORIAS</h1>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-container>
            <v-row class="justify-center">
              <v-col xs="12" sm="12" md="2" v-for="item in categories" :key="item.id">
                <v-btn tile block outlined :to="'/categorias/' + item.id">{{item.name}}</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center" class="text-center">
        <v-col cols="12">
          <h1 class="headline text-center">TODOS LOS PRODUCTOS</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="3" v-for="item in products" :key="item.id">
          <router-link :to="'/productos/' + item.id" class="linkless">
            <v-img
              :src="item.imageUrl"
              height="150"
              lazy-src="@/assets/importados_coconut_placeholder.png"
            >
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
    <v-container fluid class="red">
      <v-row align="center" class="text-center" style="height:400px">
        <v-col cols="12" class="pa-0">
          <h3 class="display-4 white--text">Footer</h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  },
  computed: mapGetters({
    categories: "categories/getCategories",
    products: "products/getProducts"
  })
};
</script>

<style>
.title-background {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>