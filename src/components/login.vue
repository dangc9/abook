<template>
  <div class="bgimg">
    <h2 class="title first">欢迎来到</h2>
    <h2 class="title sname">5-1生活账单系统</h2>
    <div class="description">请选择登录角色：</div>

    <div class="layui-bg-gray" style="padding: 30px;">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md12">
          <div class="layui-panel">
            <div class="layui-panel content" @click="loginclick('dgc')">
              <div class="layui-inline">
                <img src="../assets/img/dangc.jpg" class="layui-circle head">
              </div>
              <div class="text">
                <h2>我是但广川</h2>
              </div>
            </div> 
          </div>   
        </div>
        <div class="layui-col-md12">
          <div class="layui-panel">
            <div class="layui-panel content" @click="loginclick('zwc')">
              <div class="layui-inline">
                <img src="../assets/img/zwc.webp" class="layui-circle head">
              </div>
              <div class="text">
                <h2>我是张文成</h2>
              </div>
            </div> 
          </div>   
        </div>
    </div> 
  </div>

  </div>
  
</template>

<script>
import {setCookie,getCookie} from "../assets/js/cookieOperation";
import {loginlog} from "../network/requst"

export default {
  name : "login",
  methods :{
    loginclick(item){
      let name = item =="dgc" ? "但广川" : "张文成";
      let img = item == "dgc" ? "dangc.jpg" : "zwc.webp";
      setCookie("account",item);
      setCookie("name",name);
      setCookie("img",img);
      let account={
        name:name,
        account:item,
        img:img
      }
      this.$store.commit("setAccount",account);
      document.body.style.backgroundImage="url()";
      this.$router.push("/home");
      // console.log(getCookie("name"));
    }
  },
  created () {
    loginlog({
      url:"/dan/public/index/loginlog",
      params:{
        type:"login"
      }
    })
    if(!getCookie("name")){
      document.body.style.backgroundImage="url(../static/img/gs-q.jpg)"; 
    }
    else{
      document.body.style.backgroundImage="url(../static/img/gs-q.jpg)"; 
      this.$router.push("/home");
    }
  }
}



</script>

<style scoped>
.bgimg {
    background-color: rgba(204, 197, 197, 0.5);
}
.head{
  height: 50px;
  width: 50px;
  padding: 30px 0px;
}
.content{
  text-align: center;
}
.text{
  margin-bottom:  30px  
}
.text h2{
  color: #171515;
}
.title{
  font-weight: 300;
  text-align: center;
  font-size: 28px;
  line-height: 30px;
  margin: 15px auto;
  color: #FFF;
}
.first {
  padding-top:50px;
  margin-top:0px
}
.sname{
  color:rgb(red, green, blue)
}
.description{
  color:#190707;
  margin: 30px auto auto 30px;
  font-size: 20px;

}
.layui-panel{
  background-color:transparent;
}
.layui-bg-gray{
  background-color:transparent  !important;
}
</style>