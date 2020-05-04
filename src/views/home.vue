<template>
  <div class="home" id="home">
    <start />
    <v-container class="py-5 px-0" fluid>
      <about />
      <experience />
      <skills />
      <!-- <add-certifications /> -->
      <!-- <add-education /> -->
      <work />
      <contact />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import Start from "@/components/start.vue";
//import About from "@/components/about.vue";
//import Experience from "@/components/experience.vue";
//import Skills from "@/components/skills.vue";
//import Contact from "@/components/contact.vue";
//import Work from "@/components/work.vue";

export default {
  name: "Home",
  components: {
    start: () => import("@/views/start"),
    about: () => import("@/views/about"),
    experience: () => import("@/views/experience"),
    skills: () => import("@/views/skills"),
    work: () => import("@/views/work"),
    contact: () => import("@/views/contact"),

    //"add-start": start,
    // "add-about": About,
    // "add-experience": Experience,
    // "add-skills": Skills,
    // "add-work": Work,
    // "add-contact": Contact,
  },

  data: () => ({
    //
  }),
};
</script>
