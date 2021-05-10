import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: {},
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    fetchData({ commit }, keyword) {
      return new Promise((resolve, reject) => {
        Vue.axios
          .get(
            `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAksBwXDiRDX1IXVcuZKAWqysy1v_iR_VQ&part=snippet,id&order=date&maxResults=20&q=${keyword}`
          )
          .then(({ data }) => {
            commit("setData", data);
            resolve(data);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
  },
});
export default store;
