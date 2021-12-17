import { createStore } from 'vuex';
export interface State {
  title: string;
}

export const state: State = {
  title: 'Vue(v3) 与 tsx 的结合~',
};

export default createStore({
  state,
  mutations: {},
  actions: {},
  modules: {},
});
