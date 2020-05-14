<template>
  <v-container grid-list-xs>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-card class="pa-2">
          <v-card-title primary-title class="justify-center">Crear Categoria</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field name="name" label="Nombre de la categoria" id="name" v-model="name"></v-text-field>
            <v-file-input label="Imagen de la categoria" v-model="image"></v-file-input>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="error" to="/admin/categorias">Cancelar</v-btn>
            <v-btn color="success" @click="submitHandler">Crear</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      image: null
    };
  },
  methods: {
    submitHandler() {
      return this.$store
        .dispatch("categories/create", {
          name: this.name,
          image: this.image
        })
        .then(() => this.$router.push("/admin/categorias"));
    }
  }
};
</script>