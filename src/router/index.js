import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
 
import home from "../components/home"
import login from "../components/login"
import abook from "../view/abook"
import addAbook from "../view/addAbook"

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const baseurl = "";
export default new Router({
  routes: [
    {
      path:"",
      redirect: baseurl + "/login"
    },
    {
      path: baseurl + "/login",
      meta:{
        title:"登录"
      },
      component:login
    },
    {
      path: baseurl + "/home",
      component:home,
      children:[
        {
          path:"",
          redirect: "abook"
        },
        {
          path: "abook",
          component:abook
        },
        {
          path: "addabook",
          component:addAbook
        },
      ]
    }
  ],
  // mode:"history"
})


