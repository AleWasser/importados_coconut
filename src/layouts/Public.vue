<template>
  <div>
    <navigation></navigation>
    <v-content>
      <slot></slot>
    </v-content>
  </div>
</template>

<script>
import Navigation from "@/components/navigation/PublicNavigation.vue";

export default {
  components: {
    navigation: Navigation
  }
};
</script>