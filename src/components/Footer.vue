<template>
  <v-footer dark class="mt-5">
    <v-card class="flex text-xs-center" flat tile>
      <v-card-text class="pb-0 pt-1">
        <links />
      </v-card-text>
      <v-card-text class="py-0">
        <p class="heading">&copy; {{year}} {{name}}</p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
import Links from "@/components/Links.vue";

export default {
  name: "Footer",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  components: {
    Links
  }
};
</script>
