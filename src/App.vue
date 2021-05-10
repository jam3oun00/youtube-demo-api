<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <div class="d-flex align-center">
        youtube api demo
      </div>

      <v-spacer />
      <v-text-field class="mt-5" filled v-model="search" @input="getResults" />
      <!-- <v-btn @click="getResults">search</v-btn> -->
    </v-app-bar>

    <v-main>
      <v-row justify="center" align="center" v-if="loading">
        <v-progress-circular indeterminate color="red" />
      </v-row>
      <HelloWorld v-else :data="data" />
    </v-main>
  </v-app>
</template>

<script>
// note we can use vuex store as well
import HelloWorld from "./components/HelloWorld";
import Vue from "vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: () => ({
    search: "",
    data: [],
    loading: false,
  }),
  methods: {
    getResults() {
      console.log("loading..");
      this.loading = true;
      Vue.axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAksBwXDiRDX1IXVcuZKAWqysy1v_iR_VQ&part=snippet,id&order=date&maxResults=20&q=${this.search}`
        )
        .then(({ data }) => {
          console.log(data);
          this.data = data;
          this.loading = false;
        });
    },
  },
};
</script>
