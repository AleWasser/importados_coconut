<template>
  <v-container grid-list-xs>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-form @submit.prevent="submitHandler" v-model="valid">
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
                  :rules="formRules"
                  :value="product.name"
                ></v-text-field>
                <v-file-input label="Imagen del Producto" id="file" @change="uploadPreviewImage"></v-file-input>

                <v-img
                  :src="previewImage ? previewImage : product.imageUrl"
                  height="300"
                  width="400"
                ></v-img>

                <v-textarea
                  rows="2"
                  auto-grow
                  label="Descripcion del Producto"
                  id="description"
                  :rules="formRules"
                  :value="product.description"
                ></v-textarea>
                <v-select
                  :items="categories"
                  item-value="id"
                  item-text="name"
                  :rules="formRules"
                  v-model="selectHandler"
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
                      :value="product.stock"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      type="number"
                      name="price"
                      label="Precio del Producto"
                      id="price"
                      :rules="formRules"
                      :value="product.price"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <v-switch label="Tonos" v-model="optional"></v-switch>
                    <v-row class="align-center" v-if="optional">
                      <v-col cols="8">
                        <v-color-picker v-model="color" show-swatches hide-inputs></v-color-picker>
                      </v-col>
                      <v-col cols="4">
                        <v-btn small rounded color="primary" @click="selectColorHandler">
                          <v-icon left>mdi-plus-circle</v-icon>Agregar tono
                        </v-btn>
                      </v-col>
                      <v-col cols="12" v-if="tonos.length > 0">
                        <v-list dense subheader>
                          <v-subheader>Tonos seleccionados</v-subheader>
                          <v-list-item v-for="(item, index) in tonos" :key="index">
                            <v-list-item-avatar :color="item.color" size="25"></v-list-item-avatar>
                            <v-list-item-content>
                              <v-text-field
                                name="colorInput"
                                label="Nombre del color"
                                v-model="item.name"
                                append-outer-icon="mdi-close-circle"
                                @click:append-outer="removeColor(index)"
                              ></v-text-field>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="error" to="/admin/productos">Cancelar</v-btn>
                <v-btn color="success" type="submit" :disabled="!valid">Editar</v-btn>
              </v-card-actions>
            </div>
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
      previewImage: null,
      selectHandler: null,
      optional: false,
      color: "",
      tonos: [],
      formRules: [v => !!v || "Campo requerido"]
    };
  },
  methods: {
    submitHandler() {
      return this.$store
        .dispatch("products/update", {
          id: this.product.id,
          name: document.getElementById("name").value,
          image: document.getElementById("file").files[0],
          description: document.getElementById("description").value,
          category: this.selectHandler,
          stock: document.getElementById("stock").value,
          price: document.getElementById("price").value,
          tonos: this.tonos
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
    },
    selectColorHandler() {
      this.tonos.push({ color: this.color, name: "" });
    },
    removeColor(index) {
      this.tonos.splice(index, 1);
    }
  },
  computed: {
    categories() {
      return this.$store.getters["categories/getCategories"];
    },
    product() {
      return this.$store.getters["products/getProduct"](this.$route.params.id);
    }
  },
  mounted() {
    if (this.product.category.id) {
      this.selectHandler = this.product.category;
    }
    if (this.product.tonos) {
      this.optional = true;
      this.tonos = this.product.tonos;
    }
  }
};
</script>