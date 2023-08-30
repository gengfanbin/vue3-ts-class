import axios from "@/utils/axios";
// 测试接口
export default (url:string,data:any) => {
  if(url=="index"){
    url = '/index'
  }
  
  return axios({
    method: "post",
    url,
    data,
  });
}
