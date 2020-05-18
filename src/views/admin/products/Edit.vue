<template>
  <v-container grid-list-xs>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-card :loading="!product">
          <div v-if="!product" class="text-center pa-4">
            <v-progress-circular indeterminate color="black" size="90" width="5"></v-progress-circular>
          </div>
          <div v-else class="pa-2">
            <v-card-title primary-title class="justify-center">Editar Producto</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                name="name"
                label="Nombre del Producto"
                id="name"
                v-model="product.name"
              ></v-text-field>
              <v-file-input label="Imagen del Producto" id="file"></v-file-input>
              <v-textarea
                rows="2"
                auto-grow
                label="Descripcion del Producto"
                id="description"
                v-model="product.description"
              ></v-textarea>
              <v-select
                :items="categories"
                item-value="id"
                item-text="name"
                v-model="product.category"
                :value="product.category.id"
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
                    v-model="product.stock"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    type="number"
                    name="price"
                    label="Precio del Producto"
                    id="price"
                    v-model="product.price"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="error" to="/admin/productos">Cancelar</v-btn>
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
        .dispatch("products/update", {
          id: this.product.id,
          name: this.product.name,
          image: document.getElementById("file").files[0],
          description: this.product.description,
          category: this.product.category,
          stock: this.product.stock,
          price: this.product.price
        })
        .then(() => this.$router.push("/admin/productos"));
    }
  },
  computed: {
    categories() {
      return this.$store.getters["categories/getCategories"];
    },
    product() {
      return this.$store.getters["products/getProduct"](this.$route.params.id);
    }
  }
};
</script>