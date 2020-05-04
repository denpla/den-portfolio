<template>
  <v-sheet class="mb-5" color="transparent">
    <v-row class="mx-0">
      <v-sheet class="mr-3" color="blue" width="1" height="100" tile />

      <v-col>
        <div class="text-right">
          <span class="title primary--text" v-text="value.courses" />

          <footer>
            <div v-text="value.date" />
          </footer>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        date: "",
        courses: "",
      }),
    },
  },
};
</script>
