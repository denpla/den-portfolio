<template>
  <nav>
  <!--  <v-app-bar flat dense app color="blue lighten-2">
           <v-toolbar-title class="blue--text">
        <span class="font-weight-light"></span>
        <span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small text class="blue darken-3 white--text font-weight-light mx-1" href="/" >
        Home
      </v-btn>
            <v-btn small text class=" blue darken-3 white--text font-weight-light mx-1" href="#work">
       My work
      </v-btn>
       <v-btn small text class=" blue darken-3 white--text font-weight-light mx-1" href="#contact">
        Contacts
      </v-btn>
    </v-app-bar> -->
    <v-navigation-drawer app class="blue darken-3" v-if="$vuetify.breakpoint.mdAndUp">
      <v-layout column class="align-center">
        <v-flex class="mt-5 fill-height">
          <v-avatar size="150" class="align-center">
            <img src="../assets/Denis4a.jpg" alt="Me" />
          </v-avatar>
        </v-flex>

        <p class="name1 yellow--text text--darken-1 font-weight-thin mt-1">
          Denis
        </p>
        <hr/>
        <v-layout class="white--text font-weight-medium caption d-flex mt-n5 justify-center">
          Telecom Technical Support 
           </v-layout>
       <v-layout class="white--text font-weight-medium caption d-flex justify-center">
          & Kubernetes Engineer
        </v-layout>
      </v-layout>
      <v-list class="menu mt-6"> 
       <v-list-item class="justify-center"
        v-for="(link, i) in links"
        :key="i"
      >
        <v-btn 
          class="text-capitalize subheading font-weight-light mb-3"
          text
          @click="$vuetify.goTo(link.to)"
        >
          <v-list-item-title class="white--text" v-text="link.text" />
        </v-btn>
      </v-list-item>
      </v-list>
     
        <v-container class="mt-6">   
      <v-container class="mt-12">
        <v-container class="mt-12">
        <v-flex class="d-flex justify-center">
          <v-btn icon href=https://www.linkedin.com/in/denis-plaksiychuk-6b26327/>
            <v-icon >mdi-linkedin</v-icon>
         </v-btn>
         <v-btn icon href=https://www.facebook.com/denis.plaksiychuk>
          <v-icon>mdi-facebook</v-icon>
          </v-btn>
           <v-btn icon href=https://github.com/denpla>
          <v-icon>mdi-github</v-icon>
          </v-btn>
        </v-flex>
      </v-container>
      </v-container>
   </v-container>
    </v-navigation-drawer>
    </nav>
</template>

<script>


export default {
  
  data: () => ({
         links: [
           {
          text: 'Home',
          to: '#home',
        },
        {
          text: 'About Me',
          to: '#about',
        },
        {
          text: 'Experience',
          to: '#experience',
        },
        {
          text: 'Skills & Certifications',
          to: '#skills',
        },
        {
          text: 'Work',
          to: '#work',
        },
        {
          text: 'Contact',
          to: '#contact',
        },
       
      ],
     }),
}

 

</script>

<style scoped>
.name1
{
  font-size: 80px;
}
hr
{
  width: 210px;   margin: -30px 0px 30px 0px;
}
</style>
