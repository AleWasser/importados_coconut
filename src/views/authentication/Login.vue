<template>
  <v-container grid-list-xs>
    <v-row class="justify-center">
      <v-col cols="5">
        <v-form @submit.prevent="submitHandler">
          <v-card>
            <div v-if="loading" class="pa-5 text-center">
              <v-progress-circular indeterminate color="black"></v-progress-circular>
            </div>
            <div v-else>
              <v-card-title primary-title class="justify-center">Ingresar</v-card-title>
              <v-card-text class="px-4">
                <v-text-field
                  v-model="email"
                  name="email"
                  label="E-mail"
                  id="email"
                  type="email"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  name="password"
                  label="Contraseña"
                  id="password"
                  type="password"
                  :rules="passwordRules"
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="black" dark type="submit">Ingresar</v-btn>
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
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail requerido",
        v => /.+@.+/.test(v) || "E-mail no valido"
      ],
      passwordRules: [v => !!v || "Contraseña requerida"]
    };
  },
  methods: {
    submitHandler() {
      return this.$store.dispatch("user/login", {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    user() {
      return this.$store.getters["user/getUser"];
    },
    loading() {
      return this.$store.getters["user/getLoading"];
    }
  },
  watch: {
    user(value) {
      if (value != null && value != undefined) {
        this.$router.push("/admin");
      }
    }
  }
};
</script>