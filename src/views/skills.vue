<template>
  <v-container class="section1 pa-5 mx-0 grey lighten-3" id="skills">
    <v-col cols="12">
      <v-row justify="space-between">
        <h2 class="display-3 font-weight-thin grey--text text--darken-2 mb-4">
          Skills
        </h2>
      </v-row>
    </v-col>
    <v-row cols="12">
      <v-row justify="space-around">
        <v-col id="education" cols="12" md="4" tag="section">
          <h3 class="headline font-weight-medium mb-4 primary--text">
            Education
          </h3>

          <education-card
            v-for="(degree, i) in schema.education"
            :key="i"
            :value="degree"
          />
          <h3 class="headline font-weight-medium mb-4 primary--text">
            Certifications
          </h3>

          <certification-card
            v-for="(cert, j) in schema.certification"
            :key="j"
            :value="cert"
          />
          <h3
            v-text="schema.misc.descr"
            class="body-2 font-weight-small mb-4 black--text"
          />
        </v-col>

        <v-col id="skills" cols="12" md="4" tag="section">
          <h3 class="headline font-weight-medium mb-4 primary--text">
            Skills
          </h3>

          <skill v-for="(skill, i) in schema.skills" :key="i" :value="skill" />
          <skill1
            v-for="(skill1, j) in schema.skills1"
            :key="j"
            :value="skill1"
          />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Skills",

  components: {
    EducationCard: () => import("@/components/educard"),
    Skill: () => import("@/components/skillcard"),
    CertificationCard: () => import("@/components/certcard"),
    Skill1: () => import("@/components/skillcard1"),
  },

  computed: {
    ...mapState("app", ["schema"]),
  },
};
</script>
