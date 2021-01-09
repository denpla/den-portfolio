<template>
  <v-container class="work pa-5 mx-0 black" id="work">
    <h2
      :class="`display-${$vuetify.breakpoint.mdAndUp ? '3' : '2'}`"
      class="display-3 font-weight-thin grey--text text--lighten-1 mb-4"
    >
      My Work
    </h2>
    <v-parallax dark src="../assets/Background1a.jpg" height="780">
      <v-col cols="12">
        <v-carousel
          :cycle="false"
          :height="690"
          :show-arrows-on-hover="true"
          class="elevation-0"
          hide-delimiter-background
        >
          <v-carousel-item v-for="(project, i) in projects" :key="i">
            <project :value="project" />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  name: "work",

  components: {
    Project: () => import("@/components/projects"),
  },

  data: () => ({
    projects: [
      {
        name: "Waylay",
        category: "Kubernetes Engineer",
        src: "Waylaya.png",
        descr:
          "As a Kubernetes Engineer, I'm working on the administration and design of Kubernetes clusters in GKE, creating resources using Terraform, applications deployment, and all kinds of troubleshooting actions. Our product is the modular IoT platform providing best-of-breed OEM technology for back-end development and operations, enabling accelerated IoT solution delivery at scale.",
        info: "Waylay IoT PAAS",
        date: "2020",
        cat: "DevOps",
        web: "https://www.waylay.io",
      },
      {
        name: "Penta Consulting",
        category: "Technical Support",
        src: "Pentaa.png",
        descr:
          "As Penta Consulting's task force member, I was involved in several huge technical support projects. First was a full-time job on Level 2 troubleshooting of the Alcatel S12 fixed exchanges in Belgium for Proximus company group. Also, I did troubleshooting for OLO interconnect project (Other Local Operators). The second project was Level 3 Alcatel S12 fixed exchanges troubleshooting for the same operator. The third and fourth contracts I've participated in were about Sri Lanka and Equatorial Guinea GSM OMCR and BSC MX equipment technical support.",
        info: "Proximus, Etisalat, Getesa",
        date: "2012-2017, 2018, 2019",
        cat: "Technical support",
        web: "https://www.pentaconsulting.com/",
      },
      {
        name: "Alcatel-Lucent",
        category: "Technical Support",
        src: "Alu.jpg",
        descr:
          "As Alcatel-Lucent engineer I was involved in vendor Level2/3 support of MSC Alcatel S12, SMC, CMC product lines from NSS part, and BSC equipment like BSC 9120, BSC 9130 MX, MFS 9130 MX, TC 9125, 9100 BTS and 9153 OMCR&NPO from BSS part.In general, my main tasks were anomaly reports (trouble tickets) solving, remote support of customer actions, new features introduction, patches implementation, hot-line duty and additionally I took part in building and configuration lab environment for hardware and software tests. I also used to work as a supervisor for SMC/CMC projects.",
        info: "Alcatel-Lucent",
        date: "2003-2012",
        cat: "Technical support",
        web: "https://www.al-enterprise.com/",
      },
      {
        name: "Intec Brussels",
        category: "Front-End Developing projects",
        src: "Certificate2.jpg",
        descr:
          "The full-time intense course of HTML, CSS, Javascript, and modern applications for Front-End Developing using also such popular Javascript frameworks as VUE and React. School can be recommended for beginners because of a friendly atmosphere and well-skilled staff. They also supporting job seekers with making CV and recommendations. This portfolio project for example was a part of a graduation assignment.",
        info: "Various Front-End projects",
        date: "2020",
        cat: "Front-End Developing",
        web: "http://www.intecbrussel.be/",
      },
    ],
  }),
};
</script>
