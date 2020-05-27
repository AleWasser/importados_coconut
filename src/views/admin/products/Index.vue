<template>
  <div>
    <v-container grid-list-xs>
      <v-row class="justify-center">
        <v-col cols="8">
          <h3 class="display-3">Productos</h3>
          <v-btn
            rounded
            color="success"
            class="mt-2 mb-3"
            to="/admin/productos/crear"
            :loading="loading"
          >
            <v-icon left>mdi-plus-circle</v-icon>Crear
          </v-btn>
          <v-data-table
            :headers="headers"
            :items="products"
            item-key="id"
            :loading="loading"
            class="elevation-1"
          >
            <template v-slot:item.action="{ item }">
              <v-btn icon small :to="'productos/editar/' + item.id" :disabled="loading">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                icon
                small
                @click="deleteDialog(item.id, item.name, item.imagePath)"
                :disabled="loading"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" persistent max-width="300">
      <v-card class="text-center">
        <v-card-title class="headline text-center justify-center">Eliminar Producto</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-3">¿Eliminar el producto {{deleteableProduct.name}}?</v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="error" text @click="dialog = false">Cancelar</v-btn>
          <v-btn color="success" text @click="deleteProduct">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Categoria", value: "category.name" },
        { text: "Stock", value: "stock" },
        { text: "Price", value: "price" },
        { text: "Acciones", value: "action", sortable: false }
      ],
      dialog: false,
      deleteableProduct: {}
    };
  },
  methods: {
    deleteDialog(id, name, imagePath) {
      this.dialog = true;
      this.deleteableProduct = {
        id: id,
        name: name,
        imagePath: imagePath
      };
    },
    deleteProduct() {
      this.$store.dispatch("products/delete", this.deleteableProduct);
      this.deleteableProduct = {};
      this.dialog = false;
    }
  },
  computed: {
    products() {
      return this.$store.getters["products/getProducts"];
    },
    loading() {
      return this.$store.getters["products/getLoading"];
    }
  }
};
</script>