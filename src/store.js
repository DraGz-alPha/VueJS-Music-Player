import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [],
    currentSong: null
  },
  mutations: {
    SET_SONGS(state, payload) {
      state.songs = payload;
    },
    CHANGE_CURRENT_SONG(state, payload) {
      state.currentSong = payload;
    }
  },
  actions: {
    changeSong({ commit }, payload) {
      commit("CHANGE_CURRENT_SONG", payload);
    },
    // Commit : Sort of like payload
    fetchSongs({ commit }) {
      axios({
        method: "GET",
        url: "http://orangevalleycaa.org/api/music/order/name",
        params: {
          order: "name"
        }
      })
        .then(response => commit("SET_SONGS", response.data))
        .catch(error => console.log(error));
    }
  },
  deleteSong({ commit }, payload) {
    let songs = _.without(this.state.songs, payload);
    commit("SET_SONGS", songs);
  }
});
