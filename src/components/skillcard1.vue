<template>
  <div class="mb-4">
    <h4 class="text-uppercase mb-3 primary--text" v-text="value.name" />

    <div class="pl-md-4">
      <v-row
        v-for="(skill1, i) in value.keywords"
        :key="i"
        align="center"
        class="mb-2 mx-2"
      >
        <v-col cols="10">
          <li class="primary--text">
            <h5
              class="subtitle-2 font-weight-bold black--text"
              v-text="skill1"
            />
          </li>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        category: "",
        skills1: [],
      }),
    },
  },
};
</script>
