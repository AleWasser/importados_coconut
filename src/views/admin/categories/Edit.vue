<template>
  <v-container grid-list-xs>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-card :loading="!category">
          <div v-if="!category" class="text-center pa-4">
            <v-progress-circular indeterminate color="black" size="90" width="5"></v-progress-circular>
          </div>
          <div v-else class="pa-2">
            <v-card-title primary-title class="justify-center">Editar Categoria</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                name="name"
                label="Nombre de la categoria"
                id="name"
                v-model="category.name"
              ></v-text-field>
              <v-file-input label="Imagen de la categoria" id="file"></v-file-input>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="error" to="/admin/categorias">Cancelar</v-btn>
              <v-btn color="success" @click="submitHandler">Editar</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    submitHandler() {
      return this.$store
        .dispatch("categories/update", {
          id: this.$route.params.id,
          name: this.category.name,
          image: document.getElementById("file").files[0]
        })
        .then(() => this.$router.push("/admin/categorias"));
    }
  },
  computed: {
    category() {
      return this.$store.getters["categories/getCategory"](
        this.$route.params.id
      );
    }
  }
};
</script>