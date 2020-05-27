<template>
  <div>
    <v-container grid-list-xs>
      <v-row class="justify-center">
        <v-col cols="8">
          <h3 class="display-3">Categorias</h3>
          <v-btn
            rounded
            color="success"
            class="mt-2 mb-3"
            to="/admin/categorias/crear"
            :loading="loading"
          >
            <v-icon left>mdi-plus-circle</v-icon>Crear
          </v-btn>
          <v-data-table
            :headers="headers"
            :items="categories"
            :loading="loading"
            item-key="id"
            class="elevation-1"
          >
            <template v-slot:item.action="{ item }">
              <v-btn icon small :to="'categorias/editar/' + item.id" :disabled="loading">
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
        <v-card-title class="headline text-center justify-center">Eliminar Categoria</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-3">¿Eliminar la categoria {{deleteableCategory.name}}?</v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="error" text @click="dialog = false">Cancelar</v-btn>
          <v-btn color="success" text @click="deleteCategory">Aceptar</v-btn>
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
        { text: "Nombre", value: "name", align: "center" },
        { text: "Acciones", value: "action", sortable: false, align: "center" }
      ],
      dialog: false,
      deleteableCategory: {}
    };
  },
  methods: {
    deleteDialog(id, name, imagePath) {
      this.dialog = true;
      this.deleteableCategory = {
        id: id,
        name: name,
        imagePath: imagePath
      };
    },
    deleteCategory() {
      this.$store.dispatch("categories/delete", this.deleteableCategory);
      this.deleteableCategory = {};
      this.dialog = false;
    }
  },
  computed: {
    categories() {
      return this.$store.getters["categories/getCategories"];
    },
    loading() {
      return this.$store.getters["categories/getLoading"];
    }
  }
};
</script>