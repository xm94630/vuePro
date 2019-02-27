const state={
  count:10
}

const mutations = {
  add(state,num){
    state.count += num
  },
  reduce(state){
    state.count--
  }
}

const actions = {
  add({commit},num){
    commit('add',num)
  },
  reduce({commit}){
    commit('reduce')
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}