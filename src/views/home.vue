<template>
  <div class="home" id="home">
    <start />
    <v-container class="py-5 px-0" fluid>
      <about />
      <experience />
      <skills />
      <work />
      <contact />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    start: () => import("@/views/start"),
    about: () => import("@/views/about"),
    experience: () => import("@/views/experience"),
    skills: () => import("@/views/skills"),
    work: () => import("@/views/work"),
    contact: () => import("@/views/contact"),
  },

  data: () => ({
    //
  }),
};
</script>
