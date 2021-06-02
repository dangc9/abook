import Vue from "vue"
import Vuex from "vuex"
import {getCookie} from "../assets/js/cookieOperation"

Vue.use(Vuex)

const store =new Vuex.Store({
  state: {
    isShowProfile:false,
    account:{
      name: getCookie("name"),
      account: getCookie("account"),
      img :getCookie("img")
    },
    paymentDays:[
      { name:"一月",value : "202101" },
      { name:"二月",value : "202102" },
      { name:"三月",value : "202103" },
      { name:"四月",value : "202104" },
      { name:"五月",value : "202105" },
      { name:"六月",value : "202106" },
      { name:"七月",value : "202107" },
      { name:"八月",value : "202108" },
      { name:"九月",value : "202109" },
      { name:"十月",value : "202110" },
      { name:"十一月",value : "202111" },
      { name:"十二月",value : "202112" },
    ],
  },
  mutations: {
    changeProfileShow(){
      this.state.isShowProfile =! this.state.isShowProfile
    },
    setAccount(state,a){
      this.state.account.name = a.name
      this.state.account.account = a.account
      this.state.account.img = a.img
    },
  },
  actions: {
    
  },
  getters: {
    
  },
  modules: {
    
  }
})

export default store