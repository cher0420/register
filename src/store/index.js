import Vue from 'vue'
import Vuex from 'vuex'
import { REPLACE} from '../store/mutations'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {

    app: {

    },
  },
  mutations: {
    [REPLACE] (state, payload) {
      state.app = {
        ...state.app,
        ...payload
      }
    }
  },
  actions: {
    [REPLACE] (context, payload) {  // replace
      context.commit(REPLACE, payload)
    },
  }
})

 export default store
