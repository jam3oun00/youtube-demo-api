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
      <DataList v-else :data="data" />
    </v-main>
  </v-app>
</template>

<script>
// note we can use vuex store as well
import DataList from "./components/HelloWorld";
import { mapState } from "vuex";
import { get } from "lodash";
// import Vue from "vue";
export default {
  name: "App",
  components: {
    DataList,
  },
  data: () => ({
    search: "",
    loading: false,
  }),
  computed: {
    ...mapState({
      data: (state) => get(state, "data", {}),
    }),
  },
  methods: {
    getResults() {
      // this.loading = true;
      this.$store
        .dispatch("fetchData", this.search)
        // .finaly(() => (this.loading = false));
    },
  },
};
</script>
