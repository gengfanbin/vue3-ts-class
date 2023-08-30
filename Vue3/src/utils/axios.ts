import axios from "axios";

// 发请求添加处理中加载提示
//1. 创建新的axios实例，
const service = axios.create({
  // 公共接口
  baseURL: process.env.VUE_APP_API,
  // 超时时间 单位是ms
  timeout: 120 * 1000
});

// 2.请求拦截器
service.interceptors.request.use(
  config => {
    // 预请求处理
    return config;
  },
  error => {
    // 预请求错误处理
    Promise.reject(error);
  }
);
  
// 3.响应拦截器
service.interceptors.response.use(
  response => {
    // 返回成功时处理
    return response;
  },
  error => {
    //如果不需要错误处理过程都可省略
    return Promise.resolve(error.response);
  });
//4.导入文件
export default service;
