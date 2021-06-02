<template>
  <div>
      <div class="profile">
        <ul>
          <li @click="jumppage('/home')">首页</li>
          <li @click="jumppage('/home/addabook')">添加账单</li>
          <li @click="jumppage('/home')">查看留言</li>
          <li @click="gologin">退出登录</li>
        </ul>
      </div>
  </div>
</template>

<script>
import {delCookie,getCookie} from "../assets/js/cookieOperation";
export default {
  name:"profile",
  methods: {
    jumppage(page){
      this.$store.commit("changeProfileShow");
      this.$router.push(page);
    },
    gologin(){
      // console.log(getCookie("name"));
      delCookie("name");   
      delCookie("account");
      // console.log(getCookie("name"));
      this.$store.commit("changeProfileShow");
      this.$router.push("/login");   
    }
  }
}

</script>

<style scoped>
.profile{
  width: 200px;
  height: 100%;
  position: absolute;
  background-color: rgb(255, 255, 255);
  
}
.profile ul {
  margin-top:20px;
  border-top: 1px solid rgb(114, 107, 107,0.1)
}
.profile ul li{
  height: 20px;
  padding: 10px 20px;
  font-size:13px;
  border-bottom: 1px solid rgb(114, 107, 107,0.1)
}
</style>