import { createStore } from 'vuex';
export interface State {
  title: string;
}

export const state: State = {
  title: 'Vue(v3) δΈ tsx ηη»ε~',
};

export default createStore({
  state,
  mutations: {},
  actions: {},
  modules: {},
});
