<template>
  <v-app>
    <add-navbar />
    <v-content class="white">
      <router-view />
    </v-content>
    <add-footer />
  </v-app>
</template>

<script>
import navbar from "./components/navbar";
import footer from "./components/footer";

export default {
  name: "App",
  components: {
    "add-navbar": navbar,
    "add-footer": footer,

    //  "add-back": back
  },

  data: () => ({
    //
  }),
};
</script>
