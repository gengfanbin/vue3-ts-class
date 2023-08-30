import API from '@/api'

export default {
  namespaced: true,
  state: {
    userInfo:{
      name: "test",
    },
    test:"testtt",
  },
  mutations: {
    save: (state:object, data:object ) => {
      state = Object.assign( state, data) ;
    },
  },
  actions: {
    index( state:any , params:any) {
      return new Promise((resolve, reject) => {
        API("index", params).then((response:any) => {
          const { data } = response
          state.commit("save",{userInfo:data})
          resolve(data)
        }).catch((error:any) => {
          reject(error)
        })
      })
    },
  },
}
