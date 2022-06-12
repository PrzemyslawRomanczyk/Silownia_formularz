import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
          isLoggedIn: false,
          data: null
        },
        fileTransferSuccess: false,
      },
      getters: {
        user(state){
          return state.user
        }
      },
      mutations: {
        SET_LOGGED_IN(state, value) {
          state.user.isLoggedIn = value;
        },
        SET_USER(state, data) {
          state.user.data = data;
        },
        SET_FILE_STATUS_TRUE(state) {
            state.fileTransferSuccess = true
        },
        SET_FILE_STATUS_FALSE(state) {
          state.fileTransferSuccess = false
      },

      },
      actions: {
        fetchUser({ commit }, user) {
          commit("SET_LOGGED_IN", user !== null);
          if (user) {
            commit("SET_USER", {
              displayName: user.displayName,
              email: user.email
            });
          } else {
            commit("SET_USER", null);
          }
        },
        fileState({commit}, fileState) {
          if (fileState) {
            commit("SET_FILE_STATUS_TRUE");
          } else {
            commit("SET_FILE_STATUS_FALSE");
          }
        }
      }
    });