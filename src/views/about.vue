<template>
  <v-container class="section1 pa-5 mx-0 white" id="about">
    <!-- <back1 /> -->
    <h2
      :class="`display-${$vuetify.breakpoint.mdAndUp ? '3' : '2'}`"
      class="display-3 font-weight-thin grey--text mb-4"
    >
      About Me
    </h2>
    <v-col cols="12" md="9" sm="8">
      <v-row justify="space-between">
        <v-col cols="12" md="7">
          <div class="mb-0">
            <p v-text="schema.basics.summary" />
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <v-row justify="center">
            <v-col
              cols="6"
              class="text-uppercase primary--text font-weight-medium"
            >
              <div class="mb-3" v-text="'Location'" />
              <div class="mb-3" v-text="'Email'" />
              <div class="mb-3" v-text="'Phone'" />
            </v-col>

            <v-col cols="6" class="subheading text-no-wrap">
              <div class="mb-3" v-text="schema.basics.location.region" />
              <div class="mb-3 " v-text="schema.basics.email" />
              <div class="mb-3" v-text="schema.basics.phone" />
            </v-col>
            <v-col cols="6">
              <v-row justify="center">
                <a
                  href="./CV_Denis_Plaksiychuk.pdf"
                  download="CV_Denis_Plaksiychuk.pdf"
                >
                  <v-btn class="primary" small>Download CV</v-btn>
                </a>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <a
        href="https://www.youracclaim.com/badges/f52029ce-ae5e-4876-bfa2-c455df43ff78/linked_in"
      >
        <v-img
          :src="require('@/assets/back1a.png')"
          style="width: calc(100px + 15vw); margin-top: 100vh ; right: 0; position: absolute; top: 0px; z-index:0 "
        />
      </a>
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "about",
  data() {
    return {};
  },

  components: {
    // back1: () => import("@/components/back1"), //
  },
  computed: {
    ...mapState("app", ["schema"]),
  },
};
</script>
<style scooped></style>
