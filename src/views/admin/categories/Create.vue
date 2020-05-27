<template>
  <v-container grid-list-xs>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-form @submit.prevent="submitHandler" v-model="valid">
          <v-card class="pa-2">
            <v-card-title primary-title class="justify-center">Crear Categoria</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                name="name"
                label="Nombre de la categoria"
                id="name"
                v-model="name"
                :rules="nameRules"
              ></v-text-field>
              <v-file-input label="Imagen de la categoria" v-model="image" :rules="imageRules"></v-file-input>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="error" to="/admin/categorias">Cancelar</v-btn>
              <v-btn color="success" type="submitHandler" :disabled="!valid">Crear</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      name: "",
      image: null,
      nameRules: [v => !!v || "Nombre requerido"],
      imageRules: [v => !!v || "Imagen requerida"]
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