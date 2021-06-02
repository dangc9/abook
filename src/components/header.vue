<template>
  <div>
    <div class="layui-header header">
      <div>
        <img :src="headerimg" class="layui-circle head" @click="openProfile">
      </div>
      <div class="title">
        <h3>5-1生活账单系统</h3> 
      </div>
    </div>
    <div v-if="this.$store.state.isShowProfile"  class="a">
      <profile></profile>
      <div class="test" @click="openProfile">
        
      </div>
    </div>
    
  </div>

  
</template>

<script>
import profile from "./profile"

export default {
  name:"myheader",
  data(){
    return{
      // isShowProfile:false
    }
  },
  computed: {
    headerimg(){
      return require('../assets/img/'+ this.$store.state.account.img)
    }
  },
  created () {
  },
  components: {
    profile:profile 
  },
  methods:{
    openProfile(){
      this.$store.commit("changeProfileShow");
    }
  }
}
</script>

<style scoped>
.header {  
  border-bottom: 1px solid #d6d8dc;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(255, 255, 255);
  z-index: 100;
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  font-weight: 600;
  box-sizing: border-box;
  list-style-type: none;
  position: fixed;
  display: flex;
  z-index:999
}
.head{
  height: 30px;
  width:30px;
  padding:15px 30px;
}
.header div {
  flex: 1px;
}
.title{
  margin: auto auto 10px auto;
  text-align: center;
}
.test{
  position: fixed;
  top: 0;
  left: 200px;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.1);
}
</style> 