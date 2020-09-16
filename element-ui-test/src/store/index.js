import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [
      { id: 1, title: "Title1", text: "This is zxczx" },
      { id: 2, title: "Title2", text: "text" },
      { id: 3, title: "Title3", text: "123123" },
      { id: 4, title: "Title4", text: "sdfsdfsd" },
    ],
  },

  mutations: {
    deleteItem(state, payload) {
      const res = state.data.find((item) => item.id == payload.id);
      state.data.pop(res);
      console.log(state.data);
    },

    editItem(state, payload) {
      const res = state.data.find((item) => item.id == payload.id);
      res.text = payload.text;
      res.title = payload.title;
    },
  },

  actions: {},

  modules: {},
});
