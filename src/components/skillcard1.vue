<template>
  <div class="mb-4">
    <h4 class="text-uppercase mb-3 primary--text" v-text="value.name" />

    <div col="12" md="9" class="pl-md-4">
      <v-row
        v-for="(skill1, j) in value.keywords"
        :key="j"
        align="center"
        class="mx-0"
      >
        <v-col cols="12">
          <li class="primary--text">
            <span
              class="subtitle-1 font-weight-regular black--text"
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
