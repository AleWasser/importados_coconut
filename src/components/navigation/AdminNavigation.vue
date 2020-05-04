<template>
  <v-navigation-drawer mini-variant absolute expand-on-hover>
    <v-list nav dense>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{item.name}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-view-dashboard",
          name: "Dashboard",
          link: "/admin/dashboard"
        },
        {
          icon: "mdi-shape",
          name: "Categorias",
          link: "/admin/categorias"
        },
        {
          icon: "mdi-view-list",
          name: "Productos",
          link: "/admin/productos"
        }
      ]
    };
  }
};
</script>