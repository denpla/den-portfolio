<template>
  <v-img :src="require('@/assets/Background3.png')" height="95vh">
    <div
      cols="12"
      md="6"
      class="start fill-height pa-md-5 pa-3 mx-0 "
      id="start"
    >
      <v-row
        cols="12"
        md="6"
        align="end"
        class="fill-height text-left pa-md-5 pa-3 mx-0"
      >
        <div cols="12" md="6">
          <div
            :class="`display-${$vuetify.breakpoint.mdAndUp ? '4' : '3'}`"
            class="blue darken-3 yellow--text text--darken-1
          font-weight-thin px-2 py-2"
          >
            {{ text1 }}
          </div>

          <h2
            :class="`subtitle-${$vuetify.breakpoint.mdAndUp ? '1' : '2'}`"
            class="subtitle-1 blue darken-2 white--text px-4 py-2"
          >
            {{ text2 }}
          </h2>
        </div>
      </v-row>
    </div>
  </v-img>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "start",
  data() {
    return {
      text1: "Denis Plaksiychuk",
      text2: "Telecom Technical Support Engineer & Junior Front-End Developer",
    };
  },
  computed: {
    ...mapState("app", ["schema"]),
  },
};
</script>
<style scooped>
.name1 {
  font-size: 80px;
}
</style>
