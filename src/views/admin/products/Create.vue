<template>
  <v-container grid-list-xs>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-form @submit.prevent="submitHandler" v-model="valid">
          <v-card class="pa-2">
            <v-card-title primary-title class="justify-center">Crear Producto</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                name="name"
                label="Nombre del Producto"
                id="name"
                :rules="formRules"
                v-model="name"
              ></v-text-field>
              <v-file-input
                label="Imagen del Producto"
                :rules="formRules"
                v-model="image"
                @change="uploadPreviewImage"
              ></v-file-input>

              <v-img v-if="previewImage" :src="previewImage" height="300" width="400"></v-img>

              <v-textarea
                rows="2"
                auto-grow
                label="Descripcion del Producto"
                :rules="formRules"
                v-model="description"
              ></v-textarea>
              <v-select
                :rules="formRules"
                v-model="category"
                :items="categories"
                item-value="id"
                item-text="name"
                id="category"
                label="Categoria del Producto"
                return-object
              ></v-select>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    type="number"
                    name="stock"
                    label="Stock del Producto"
                    id="stock"
                    :rules="formRules"
                    v-model="stock"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    type="number"
                    name="price"
                    label="Precio del Producto"
                    id="price"
                    :rules="formRules"
                    v-model="price"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="error" to="/admin/productos">Cancelar</v-btn>
              <v-btn color="success" type="submit" :disabled="!valid">Crear</v-btn>
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
      previewImage: null,
      description: "",
      category: null,
      stock: "",
      price: "",
      formRules: [v => !!v || "Campo requerido"]
    };
  },
  methods: {
    submitHandler() {
      return this.$store
        .dispatch("products/create", {
          name: this.name,
          image: this.image,
          description: this.description,
          category: this.category,
          stock: this.stock,
          price: this.price
        })
        .then(() => this.$router.push("/admin/productos"));
    },
    uploadPreviewImage(event) {
      if (event) {
        var reader = new FileReader();
        reader.onload = e => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(event);
      }
    }
  },
  computed: {
    categories() {
      return this.$store.getters["categories/getCategories"];
    }
  }
};
</script>