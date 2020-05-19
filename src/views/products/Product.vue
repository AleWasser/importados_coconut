<template>
  <div>
    <div class="d-none d-sm-flex">
      <v-container grid-list-xs>
        <v-row justify="center">
          <v-col cols="10">
            <v-card>
              <v-container fluid class="pa-0">
                <v-row>
                  <v-col cols="5" class="py-0">
                    <v-img
                      height="100%"
                      :src="product.imageUrl"
                      lazy-src="@/assets/importados_coconut_placeholder.png"
                    >
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-col>
                  <v-col cols="7" class="text-center">
                    <div class="display-1 px-4 pt-4 mb-1">{{product.name}}</div>
                    <div class="headline">${{product.price}}</div>
                    <p class="mt2 pa-4">{{product.description}}</p>
                    <div class="text-center">
                      <v-btn text color="black" dark large>
                        <v-icon left>mdi-cart</v-icon>Agregar al carrito
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="d-flex d-sm-none">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="justify-center">
              <v-img
                height="100%"
                :src="product.imageUrl"
                lazy-src="@/assets/importados_coconut_placeholder.png"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <div class="display-1 px-4 pt-4 mb-1 text-center">{{product.name}}</div>
              <div class="headline text-center">${{product.price}}</div>
              <p class="mt2 pa-4 text-center">{{product.description}}</p>
              <div class="text-center">
                <v-btn block text color="black" dark large>
                  <v-icon left>mdi-cart</v-icon>Agregar al carrito
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.getters["products/getProduct"](this.$route.params.id);
    }
  }
};
</script>