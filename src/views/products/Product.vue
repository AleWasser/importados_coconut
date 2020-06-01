<template>
  <div>
    <v-container class="pa-5" v-if="!product">
      <v-row class="text-center pa-5">
        <v-col cols="12">
          <v-progress-circular indeterminate size="100" width="10"></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>

    <section v-else>
      <div class="d-none d-sm-flex">
        <v-container grid-list-xs>
          <v-row justify="center">
            <v-col cols="10">
              <v-card>
                <v-container fluid class="pa-0">
                  <v-row>
                    <v-col cols="5" class="py-0">
                      <v-img height="100%" width="400" :src="product ? product.imageUrl : ''">
                        <template v-slot:placeholder>
                          <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-col>
                    <v-col cols="7" class="text-center">
                      <div class="display-1 px-4 pt-4 mb-1">{{product.name}}</div>
                      <div class="headline mt-2">${{product.price}}</div>
                      <p class="mt-2">{{product.description}}</p>
                      <v-row class="align-center" v-if="product.tonos">
                        <v-col cols="2" class="pa-0 pr-1 text-right">
                          <v-avatar :color="select ? select.color : 'grey'" size="30"></v-avatar>
                        </v-col>
                        <v-col cols="10">
                          <v-select
                            class="pr-5"
                            :items="product.tonos"
                            item-value="color"
                            item-text="name"
                            v-model="select"
                            label="Seleccione un color"
                            return-object
                          ></v-select>
                        </v-col>
                      </v-row>

                      <v-card-actions class="text-center">
                        <v-btn block text color="black" dark large>
                          <v-icon left>mdi-cart</v-icon>Agregar al carrito
                        </v-btn>
                      </v-card-actions>
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
                <v-img height="100%" :src="product.imageUrl ? product.imageUrl : ''">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>

                <div class="display-1 px-4 pt-4 mb-1 text-center">{{product.name}}</div>
                <div class="headline text-center mt-2">${{product.price}}</div>
                <p class="mt-2 text-center">{{product.description}}</p>
                <v-row class="align-center" v-if="product.tonos">
                  <v-col cols="2" class="pa-0 pr-1 text-right">
                    <v-avatar :color="select ? select.color : 'grey'" size="30"></v-avatar>
                  </v-col>
                  <v-col cols="10">
                    <v-select
                      class="pr-5"
                      :items="product.tonos"
                      item-value="color"
                      item-text="name"
                      v-model="select"
                      label="Seleccione un color"
                      return-object
                    ></v-select>
                  </v-col>
                </v-row>
                <v-card-actions class="text-center">
                  <v-btn block text color="black" dark large>
                    <v-icon left>mdi-cart</v-icon>Agregar al carrito
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: null
    };
  },
  computed: {
    product() {
      return this.$store.getters["products/getProduct"](this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.bottom {
  position: absolute;
  bottom: 0;
}
</style>