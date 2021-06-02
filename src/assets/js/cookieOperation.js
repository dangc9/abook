function setCookie(name,value){
      if(!name||!value) return;
      var Days = 5;//默认10天
      var exp  = new Date();
      exp.setTime(exp.getTime() + Days*24*60*60*1000);
      document.cookie = name + "="+ encodeURIComponent(value) +";expires="+ exp.toUTCString();
  }
// const getCookie =
function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return decodeURIComponent(arr[2]);
    return null;
}
function delCookie(name)
{
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval=getCookie(name);
if(cval!=null)
document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};
export {setCookie,getCookie,delCookie}