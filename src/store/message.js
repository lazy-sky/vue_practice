export default {
  namespaced: true,
  
  // data
  state: () => ({
    count: 0,
    message: 'this is a message'
  }),
  
  // computed
  getters: {
    reversedMessage(state) {
      return state.message.split('').reverse().join('')
    }
  },

  // 변이 메소드, 데이터 수정 권한 O
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },

  // 액션 메소드, 데이터 수정 권한 X, 비동기
  actions: {
    updateMessage({commit}) {
      commit('assignState', {
        message: 'Good Morning~'
      })
    }
  }
}