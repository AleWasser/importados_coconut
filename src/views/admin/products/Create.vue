<template>
  <v-container grid-list-xs>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-card class="pa-2">
          <v-card-title primary-title class="justify-center">Crear Producto</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field name="name" label="Nombre del Producto" id="name" v-model="name"></v-text-field>
            <v-file-input label="Imagen del Producto" v-model="image"></v-file-input>
            <v-textarea rows="2" auto-grow label="Descripcion del Producto" v-model="description"></v-textarea>
            <v-select
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
                  v-model="stock"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  type="number"
                  name="price"
                  label="Precio del Producto"
                  id="price"
                  v-model="price"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="error" to="/admin/productos">Cancelar</v-btn>
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
      image: null,
      description: "",
      category: null,
      stock: "",
      price: ""
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
    }
  },
  computed: {
    categories() {
      return this.$store.getters["categories/getCategories"];
    }
  }
};
</script>