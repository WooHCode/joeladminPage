import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      account: {
        id: 0,
      },
      code: {
        c: 3,
      },
    };
  },
  mutations: {
    setAccount(state, payload) {
      state.account.id = payload;
    },
    setMemberCode(state, payload) {
      state.code.c = payload;
    },
  },
});

export default store;
