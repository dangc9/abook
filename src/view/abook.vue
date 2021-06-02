<template>
  <div>
    <div class="statistics">
      <h5>
        <span>{{$store.state.account.name}}: {{getAmountTotal($store.state.account.name)}}</span>
        <span>{{getAnotherName($store.state.account.name)}}: {{getAmountTotal(getAnotherName($store.state.account.name))}}</span>
      </h5>
      <h4>当前账差：<span :style="isred()">{{getAmount()}}</span></h4>
    </div>
    <div class="abook">
      <table>
        <thead>
          <th>月份</th>
          <th>内容</th>
          <th>金额</th>
          <th>结账</th>
          <th>创建者</th>
        </thead>
        <tbody>
          <tr v-for="item in abook" @click="abookclick(item)">
            <td>{{getbooktime(item.abooktime)}}</td>
            <td>{{item.content}}</td>
            <td>{{item.amount}}</td>
            <td :style="getbalancecolor(item.isbalance)">{{getisbalance(item.isbalance)}}</td>
            <td>{{item.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {getabook} from "../network/requst"

export default {
  name:"abook",
  data(){
    return{
      abook:[]
    }
  },
  computed: {
    
  },
  methods: {
    getAnotherName(name){
      return this.$store.state.account.name=="但广川" ?  "张文成" : "但广川"
    },
    abookclick(item){
      console.log(item);   
    },
    getisbalance(isbalance){
      return (isbalance ==0 ? "待结账" : "已结账" )
    },
    getbalancecolor(isbalance){
      return {color:(isbalance ==0 ? "" : "green" )} 
    },
    getAmountTotal(name){
      let result = 0;
      for(let a of this.abook){
         a.name==name & a.isbalance ==0 ? result = result+ a.amount :""
      }
      return result
    },
    getAmount(){
      const name=this.$store.state.account.name
      let result =0;
      let a= this.getAmountTotal('但广川');
      let b= this.getAmountTotal('张文成');
      let c= (a+b)/2;
      if(name=="但广川"){
        result = a -c  
      }
      else{
        result = b-c
      }
      return   result
  
    },
    isred(){
      return {color:(this.getAmount()>0 ? "" : "red" )} 
    },
    getbooktime(booktime){
      let result="";
      // console.log(booktime);
      for(let a of this.$store.state.paymentDays){
        // result= a.value==booktime ? a.name :""
        if(a.value==booktime){
          result=a.name
        }
      }
      return result
    }
  },
  created () {
    console.log();
    getabook({
      url:"/dan/public/index/getabook"
    }).then(res =>{
      this.abook=res.data;
    }).catch(res =>{
      alert("错误信息:"+res);
    })
  },
}
</script>

<style scoped>
.statistics{
  padding-top: 20px;
  text-align: center;
}
.statistics h4{
  padding-top: 5px;
}
.statistics h5 span{
  padding-left: 20px;
}
.abook{
  padding-top: 20px;
  padding-bottom: 30px;
}
table{
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
  margin: auto
}
th, td{
  padding: 10px 12px;
  border: 1px solid #e9e9e9;
  text-align: left;
  max-width: 60px;
  white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
}
th{
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
</style>