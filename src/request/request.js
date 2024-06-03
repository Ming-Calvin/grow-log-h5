import axios from 'axios';
import store from '@/store';
import errorCode from '@/utils/errorCode';
import { getToken } from '@/utils/auth';
import { mToast } from '@/utils/toast';

axios.defaults.headers['Content-Type'] = 'application/json';

const service = axios.create({
  timeout: 1000000
});

let loadingCount = 0;

const showLoading = () => {
  loadingCount++;
  store.commit('SET_LOADING', true);
};

const hideLoading = () => {
  loadingCount--;
  if (loadingCount == 0) store.commit('SET_LOADING', false);
};

service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken();
    }

    showLoading();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(res => {
  const code = res.data.code || 200;
  const msg = errorCode[code] || res.data.msg || errorCode['default'];
  hideLoading();
  if (code === 401) {
    mToast.fail('登录状态已过期');
  } else if (code === 404) {
    mToast.fail('请求不存在');
    return Promise.reject(new Error(msg));
  } else if (code === 500) {
    mToast.fail(res.data.message);
    return Promise.reject(new Error(msg));
  } else if (code !== 200) {
    mToast.fail(msg);
    return Promise.reject('error');
  } else {
    return res.data;
  }
},
error => {
  let { message } = error;
  if (message == 'Network Error') {
    message = '后端接口连接异常';
  }
  else if (message.includes('timeout')) {
    message = '系统接口请求超时';
  }
  else if (message.includes('Request failed with status code')) {
    message = '系统接口' + message.substr(message.length - 3) + '异常';
  }
  hideLoading();
  mToast.fail(message);
  return Promise.reject(error);
});

export default service;
