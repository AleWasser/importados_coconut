<template>
  <div>
    <v-app-bar color="transparent" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-menu open-on-hover bottom offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Shop</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" @click="false">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>
      <v-toolbar-title class="amatic-font">
        <router-link to="/" tag="span" style="cursor: pointer">ImportadosCoconut</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="(item, index) in items" :key="index" @click="false">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
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
    drawer: false,
    items: [
      { name: "Category", icon: "mdi-shape" },
      { name: "Category", icon: "mdi-shape" },
      { name: "Category", icon: "mdi-shape" },
      { name: "Category", icon: "mdi-shape" },
      { name: "Category", icon: "mdi-shape" }
    ]
  })
};
</script>

<style scoped>
.amatic-font {
  font-family: "Amatic SC", cursive !important;
  font-size: 30px;
  letter-spacing: 5px;
}
</style>