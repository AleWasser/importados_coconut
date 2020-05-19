<template>
  <v-navigation-drawer mini-variant absolute expand-on-hover @transitionend="mini = !mini">
    <v-list nav dense>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{item.name}}</v-list-item-title>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn text v-if="mini">
          <v-icon left>mdi-logout</v-icon>
        </v-btn>
        <v-btn block text v-if="!mini" to="/">
          <v-icon left>mdi-logout</v-icon>Volver al sitio
        </v-btn>
      </div>
    </template>
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
      ],
      mini: true
    };
  },
  methods: {
    handler() {
      console.log("handler");
    }
  }
};
</script>