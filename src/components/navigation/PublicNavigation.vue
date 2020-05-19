<template>
  <div>
    <v-app-bar color="transparent" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-toolbar-title class="amatic-font">
        <v-img
          class="d-none d-sm-inline-block mr-4"
          :src="require('../../assets/importados_coconut_logo_transparent.png')"
        ></v-img>
        <v-img
          class="d-none d-sm-inline-block mr-4"
          :src="require('../../assets/importados_coconut_logo_transparent.png')"
        ></v-img>
        <router-link to="/" tag="span" style="cursor: pointer">ImportadosCoconut</router-link>
        <v-img
          class="d-none d-sm-inline-block mr-4"
          :src="require('../../assets/importados_coconut_logo_transparent.png')"
        ></v-img>
        <v-img
          class="d-none d-sm-inline-block"
          :src="require('../../assets/importados_coconut_logo_transparent.png')"
        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item
            v-for="item in items"
            :key="item.id"
            @click="false"
            :to="'/categorias/' + item.id"
          >
            <v-list-item-icon>
              <v-icon>mdi-shape</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  computed: {
    items() {
      return this.$store.getters["categories/getCategories"];
    }
  }
};
</script>

<style scoped>
.amatic-font {
  font-family: "Amatic SC", cursive !important;
  font-size: 30px;
  letter-spacing: 5px;
}
</style>