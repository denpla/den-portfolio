<template>
  <v-container class="section2 pa-5 mx-0 blue darken" id="experience">
    <h2
      :class="`display-${$vuetify.breakpoint.mdAndUp ? '3' : '2'}`"
      class="display-3 font-weight-thin grey--text text--lighten-1 mb-4"
    >
      Experience
    </h2>

    <v-col cols="12" md="9" class="mx-auto px-0">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown" :light="light">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          v-bind="getAttrs()"
        >
          <span
            class="black--text"
            slot="opposite"
            v-text="item.startDate.slice(0, 4)"
          />

          <v-card class="pa-3">
            <h3 class="subheading font-weight-bold" v-text="item.company" />
            <div v-text="item.summary" />
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "experience",

  data: (vm) => ({
    light: vm,
  }),

  computed: {
    ...mapState("app", ["schema"]),
    items() {
      return this.schema.work;
    },
  },

  methods: {
    getAttrs() {
      const attrs = {};
      attrs.largeDot = true;
      return attrs;
    },
  },
};
</script>
