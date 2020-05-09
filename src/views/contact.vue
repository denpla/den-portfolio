<template>
<v-container class="section1 pa-5 mx-0" id="contact">
  <!-- <back3 /> -->
      <h2
      :class="`display-${$vuetify.breakpoint.mdAndUp ? '3' : '2'}`"
       class="display-3 font-weight-thin grey--text mb-4">Contact Me</h2>
      <v-col cols="12">
  <v-row justify="center">
    <v-col
      cols="12"
      md="5"
      class="mb-4 pr-md-5"
    >
      
     <h2 class="primary--text title ">
        Send me a Message
      </h2>
          <br>
          <br>
      <v-form @submit.prevent="sendEmail">
        <v-text-field type="text" name="user_name"
          solo-inverted
          flat
          label="Name"
        />

        <v-text-field type="email" name="user_email"
          solo-inverted
          flat
          label="Email"
        />

        <v-text-field name="user_subject"
          solo-inverted
          flat
          label="Subject"
        />

        <v-textarea name="user_message"
          solo-inverted
          flat
          label="Message"
        />

        <v-btn type="submit" value="Send"
          class="ma-0"
          color="primary"
        >
          Submit
        </v-btn>
      </v-form>
    </v-col>

    <v-col
      cols="12"
      md="4"
      class="text-left"
    >
      <h2 class="primary--text title ">
        Social Contacts
      </h2>
     
      <v-layout>
        <v-flex class="d-flex justify-left">
          <v-btn  icon href=https://www.linkedin.com/in/denis-plaksiychuk-6b26327/>
            <v-icon class="primary--text" >mdi-linkedin</v-icon>
         </v-btn>
         <v-btn  icon href=https://www.facebook.com/denis.plaksiychuk>
          <v-icon class="primary--text">mdi-facebook</v-icon>
          </v-btn>
           <v-btn icon href=https://github.com/denpla>
          <v-icon class="primary--text">mdi-github</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      

      <v-list
        class="transparent"
        three-line
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              class="mr-5"
              color="primary"
              size="48"
            >
              mdi-map-marker
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Address
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ schema.basics.location.address }}<br>
              {{ schema.basics.location.city }}, {{ schema.basics.location.postalCode }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              size="48"
              color="primary"
              class="mr-5"
            >
              mdi-email
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Email
            </v-list-item-title>
            <v-list-item-subtitle v-text="schema.basics.email" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              size="48"
              color="primary"
              class="mr-5"
            >
              mdi-phone
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Phone
            </v-list-item-title>
            <v-list-item-subtitle v-text="schema.basics.phone" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
   </v-row>
   </v-col>
  <!-- <v-img 
        src="@/assets/back3c.png"
        style="bottom: -20px; right: 0; position: absolute;"
      />-->
    </v-container>


 
</template>

<script>
import emailjs from 'emailjs-com';
 
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'Contact',data() {
    return {};
  },
     components: {
    // back3: () => import("@/components/back3"),
  },
   
    computed: {
      ...mapState('app', ['schema']),
    },
    methods: {
    sendEmail: (e) => {
      emailjs.sendForm('gmail', 'template_D8LZSPcC', e.target, 'user_DoHt0fZco80Hoq7nB8hQb')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
  }
</script>
<style >
 </style>
