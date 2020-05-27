<template>
  <v-row>
    <v-col sm="12" md="3" v-for="item in products" :key="item.id">
      <router-link :to="'/productos/' + item.id" class="linkless">
        <v-img :src="item.imageUrl" height="200">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>

        <div class="body-1 mt-2 mb-0 text-center">
          <p class="pa-0 ma-0">{{item.name}}</p>
          <p class="pa-0 ma-0 font-weight-bold">${{item.price}}</p>
        </div>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["products"]
};
</script>