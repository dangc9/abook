<template>
  <div>
    <myheader></myheader>  
    <div class="content" :style="isRight">
      <router-view></router-view>
    </div>   
  </div>
</template>

<script>

import myheader from "./header"
import {getCookie} from "../assets/js/cookieOperation"
import {loginlog} from "../network/requst"

export default {
  name: "home",
  computed: {
    isRight(){
      return this.$store.state.isShowProfile?"padding-left: 210px;":''
    }
  },
  created () {
    document.body.style.backgroundImage="url()";
    if(!getCookie("name")){
      alert("请登录");
      this.$router.push("/login")
    }
    loginlog({
      url:"/dan/public/index/loginlog",
      params:{
        name: getCookie("name"),
        account: getCookie("account"),
        type:"home"
      }
    })
  },
  components: {
    myheader,
  }
}
</script>

<style scoped>
.content{
  margin-top: 60px;
}
</style>