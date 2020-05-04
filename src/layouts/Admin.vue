<template>
  <div>
    <navigation></navigation>
    <v-content>
      <slot></slot>
    </v-content>
  </div>
</template>

<script>
import AdminNavigation from "../components/navigation/AdminNavigation";

export default {
  components: {
    navigation: AdminNavigation
  }
};
</script>