import axios from "axios";
import store from "@/store";
import errorCode from "@/utils/errorCode";
import { getToken } from '@/utils/auth'

axios.defaults.headers["Content-Type"] = "application/json";

const service = axios.create({
  timeout: 1000000,
});

let loadingCount = 0;

const showLoading = () => {
  loadingCount++;
  store.commit("SET_LOADING", true);
};

const hideLoading = () => {
  loadingCount--;
  if (loadingCount == 0) store.commit("SET_LOADING", false);
};

service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    // 是否需要防止数据重复提交
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
    if (getToken() && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    showLoading();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (res) => {
    const code = res.data.code || 200;
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    hideLoading();

    if (code !== 200) console.log(msg);
    return res.data;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);

export default service;
