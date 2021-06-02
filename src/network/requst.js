import axios from "axios"

export function login(config)  {
  const loginaccount=axios.create({
    baseURL:"http://localhost/",
    timeout:1000
  }) 
  return loginaccount(config);
}
export function getabook(config)  {
  const abook=axios.create({
    baseURL:"http://192.168.1.100/",
    timeout:1000
  }) 
  return abook(config);
}
export function addAbook(config)  {
  const abook=axios.create({
    baseURL:"http://192.168.1.100/",
    timeout:1000
  }) 
  return abook(config);
}
export function loginlog(config)  {
  const loginaccount=axios.create({
    baseURL:"http://192.168.1.100/",
    timeout:1000
  }) 
  return loginaccount(config);
}