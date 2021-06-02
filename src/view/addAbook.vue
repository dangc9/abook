<template>
  <div>
    <form class="my-from">
      <div class="layui-form-item">
        <label class="layui-form-label">月份:</label>
        <div class="layui-input-block">
          <select  v-model="abooktime">
            <option value="" selected>请选择月份</option>
            <option v-for="a in $store.state.paymentDays" :value="a.value">{{a.name}}</option>
          </select>
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label" for="amount">账单金额:</label>
        <div class="layui-input-block">
          <input type="text" id="amount" v-model="amount"  autocomplete="off" placeholder="请输入金额" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item layui-form-text">
        <label class="layui-form-label" for="content">账单内容:</label>
        <div class="layui-input-block">
          <textarea placeholder="请输入内容" id="content" v-model="content" class="layui-textarea"></textarea>
        </div>
      </div>
      <div class="submit">
        <button type="button" class="layui-btn layui-btn-sm layui-btn-normal" @click="goHome">返回</button>
        <button type="button" class="layui-btn layui-btn-sm layui-btn-normal" @click="submit">提交</button>
      </div>
    </form>
  </div>
</template>

<script>
import {addAbook} from "../network/requst"
export default {
  name: "addAbook",
  data () {
    return {
      abooktime:"",
      amount:"",
      content:"",
    }
  },
  methods:{
    submit(){
      const data={
        abooktime: this.abooktime,
        amount: this.amount,
        content: this.content,
        name:this.$store.state.account.name,
        isbalance:0
      }
      addAbook({
        url:"/dan/public/index/addabook",
        params:data
      }).then(res =>{
        alert("添加成功");
        this.$router.push("/home");
      }).catch(res =>{
        alert("系统错误，添加失败")
      })
    },
    goHome(){
      this.$router.push("/home");
    }
  }
}
</script>

<style scoped>
.my-from{
  margin: 120px 50px auto auto;
  min-width: 300px;
}
.my-from select{
   width:100%; 
  height:36px; 
  line-height:36px; 
  z-index:4;
  position:absolute;
  top:0;left:0;
  margin:0;
  padding:0;
  *margin-top:12px; 
  filter:alpha(opacity=0);
  cursor:pointer; 
  font-size: 16px;
  border-radius: 2px;
  border-color:#bbb3b3;
  border-style: solid;
  background-color: #fff;

}
/* .layui-form-select dl dd.layui-this{
  background-color: #4e74e0;
} */
.submit{
  margin-left: 50px;
  text-align: center;
  padding-top: 50px;
}


</style>