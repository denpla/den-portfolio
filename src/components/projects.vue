<template>
  <v-sheet class="py-md-5" height="100%" color="transparent">
    <div class="text-center mb-1">
      <h2
        class="font-weight-bold blue--text text--lighten-4 mb-1"
        v-text="value.name"
      />
      <span class="subheading" v-text="value.category" />
    </div>
    <v-row>
      <v-col cols="auto">
        <div class="mb-1" style="max-width: 500px;">
          <h2 class="font-weight-bold blue--text text--lighten-4 mb-3">
            Project Details
          </h2>
          <div v-if="value.descr">
            <p v-text="value.descr"></p>
          </div>
          <h2 class="font-weight-bold blue--text text--lighten-4 mb-2">
            Project Info
          </h2>
          <v-list class="transparent">
            <v-list-item>
              <v-list-item-action>
                <v-icon color="blue lighten-4">
                  mdi-account
                </v-icon>
              </v-list-item-action>
              <v-list-item-title v-if="value.info" class="mr-2">
                <div v-text="value.info"></div>
              </v-list-item-title>
              <v-list-item-title
                class="caption white--text  hidden-sm-and-down"
              >
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="blue lighten-4">
                  mdi-calendar
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Project Dates
              </v-list-item-title>
              <v-list-item-title
                v-if="value.date"
                class="caption white--text hidden-sm-and-down"
              >
                <div v-text="value.date"></div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="blue lighten-4">
                  mdi-tag
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Project Category
              </v-list-item-title>
              <v-list-item-title
                v-if="value.cat"
                class="caption white--text text--lighten-1 hidden-sm-and-down"
              >
                <div v-text="value.cat"></div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="blue lighten-4">
                  mdi-web
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Web
              </v-list-item-title>
              <v-list-item-title
                v-if="value.web"
                class="caption white--text text--lighten-1 hidden-sm-and-down"
              >
                <div v-text="value.web"></div>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col v-if="value.src" class="hidden-sm-and-down">
        <v-img
          :src="require(`@/assets/projects/${value.src}`)"
          height="490"
          width="750"
          contain
          class="mx-auto"
        />
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
        name: "",
        category: "",
        src: undefined,
        descr: "",
        info: "",
        date: "",
        cat: "",
      }),
    },
  },
};
</script>
