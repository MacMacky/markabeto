<template>
  <div id="projects" class="pt-5 mt-3">
    <h4 class="display-1 text-xs-center mt-4">Projects</h4>
    <v-container>
      <v-layout wrap row justify-center>
        <v-flex xs12 md5 lg4>
          <card-project
            :projectName="'ML Shop Merchant'"
            :role="'Full Stack'"
            :frontTechnologies="mlshopmerchantFront"
            :backTechnologies="walletuploadweb"
            :imagePath="require('../assets/merchant.gif')"
          ></card-project>
        </v-flex>
        <v-flex xs12 md5 lg4>
          <card-project
            :role="'Back-End'"
            :projectName="'ML Shop Admin'"
            :backTechnologies="mlshopadmin"
            :imagePath="require('../assets/admin.png')"
          ></card-project>
        </v-flex>
        <v-flex xs12 md5 lg4>
          <card-project
            :role="'Back-End'"
            :projectName="'Wallet Batch Upload Partners'"
            :backTechnologies="walletuploadweb"
            :imagePath="require('../assets/partners.png')"
          ></card-project>
        </v-flex>
        <v-flex xs12 md5 lg4>
          <card-project
            :role="'Back-End'"
            :projectName="'Wallet Batch Upload Web'"
            :backTechnologies="walletuploadweb"
            :imagePath="require('../assets/web.png')"
          ></card-project>
        </v-flex>
        <v-flex xs12 md5 lg4>
          <card-project
            :role="'Back-End'"
            :projectName="'Backups'"
            :backTechnologies="backups"
            :imagePath="require('../assets/backups.png')"
          ></card-project>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import CardProject from '@/components/CardProject.vue';

import Chai from '@/components/svgs/Chai.vue';
import Jest from '@/components/svgs/Jest.vue';
import Sass from '@/components/svgs/Sass.vue';
import React from '@/components/svgs/React.vue';
import MySQL from '@/components/svgs/Mysql.vue';
import Mocha from '@/components/svgs/Mocha.vue';
import Redux from '@/components/svgs/Redux.vue';
import Nodejs from '@/components/svgs/NodeJS.vue';
import Express from '@/components/svgs/Express.vue';
import TypeScript from '@/components/svgs/Typescript.vue';
import Javascript from '@/components/svgs/Javascript.vue';
import MaterialUI from '@/components/svgs/MaterialUI.vue';
import Restify from '@/components/svgs/Restify.vue';
import RethinkDB from '@/components/svgs/RethinkDB.vue';
import AWSS3 from '@/components/svgs/AWSS3.vue';

export default {
  name: 'Projects',
  data: () => {
    return {
      mlshopadmin: [
        [Nodejs, Express, MySQL],
        [Mocha, Chai, TypeScript],
      ],
      walletuploadweb: [
        [Nodejs, Express, MySQL],
        [TypeScript, Jest],
      ],
      mlshopmerchantFront: [
        [React, MaterialUI, Redux, Sass],
        [Jest, TypeScript, Javascript],
      ],
      backups: [
        [Restify, RethinkDB, Nodejs],
        [AWSS3, Javascript],
      ],
    };
  },
  components: {
    CardProject,
  },
};
</script>

