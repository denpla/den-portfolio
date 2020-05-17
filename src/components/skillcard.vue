<template>
  <div class="mb-4">
    <h4 class="text-uppercase mb-3 primary--text" v-text="value.name" />

    <div class="pl-md-4">
      <v-row>
        <v-col cols="4">
          <h5 class="subtitle-2 font-weight-bold" v-text="value.keywords[0]" />
        </v-col>
        <v-col cols="8">
          <v-rating
            length="6"
            dense
            empty-icon="mdi-record"
            full-icon="mdi-record"
            :value="value.level"
            background-color="grey darken-4"
            readonly
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <h5 class="subtitle-2 font-weight-bold" v-text="value.keywords[1]" />
        </v-col>
        <v-col cols="8">
          <v-rating
            length="6"
            dense
            empty-icon="mdi-record"
            full-icon="mdi-record"
            npm
            run
            serve
            :value="value.level1"
            background-color="grey darken-4"
            readonly
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <h5 class="subtitle-2 font-weight-bold" v-text="value.keywords[2]" />
        </v-col>
        <v-col cols="8">
          <v-rating
            length="6"
            dense
            empty-icon="mdi-record"
            full-icon="mdi-record"
            :value="value.level2"
            background-color="grey darken-4"
            readonly
          />
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
        skills: [],
      }),
    },
  },
};
</script>
