import moment from 'moment';

// 格式化时间
export function formatDate(cellValue) {
  if (cellValue == null || cellValue === "") return "";

  return moment(cellValue).format('YYYY-MM-DD HH:mm:ss');
}

// 获取请求参数
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const params = new URLSearchParams(search);
  const obj = {};

  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }

  return obj;
}

// 清理数字中的空值
export function cleanArray(actual) {
  return actual.filter(Boolean);
}

// 转换json对象为query查询参数
export function param(json) {
  if (!json) return '';
  return Object.keys(json)
    .map(key => {
      if (json[key] === undefined) return '';
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    })
    .filter(Boolean)  // 过滤掉空字符串
    .join('&');
}

// 将query查询参数转换为 Obj对象
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1] || '').replace(/\+/g, ' ');
  if (!search) {
    return {};
  }
  const obj = {};
  const searchArr = search.split('&');
  searchArr.forEach(v => {
    const [name, val] = v.split('=');
    if (name) {
      obj[name] = val !== undefined ? val : '';
    }
  });
  return obj;
}

// 移除HTML的标签变为Text
export function html2Text(val) {
  const div = document.createElement('div');
  div.innerHTML = val;
  return div.textContent || div.innerText || '';
}

// 对象深度拷贝
export function objectMerge(target, source) {
  if (typeof target !== 'object' || target === null) {
    target = {};
  }

  if (Array.isArray(source)) {
    return source.slice();
  }

  Object.keys(source).forEach(property => {
    const sourceProperty = source[property];
    if (sourceProperty && typeof sourceProperty === 'object' && !Array.isArray(sourceProperty)) {
      target[property] = objectMerge(target[property], sourceProperty);
    } else {
      target[property] = sourceProperty;
    }
  });

  return target;
}

//切换类名
export function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  element.classList.toggle(className);
}

// 防抖
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

// 深度拷贝
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

// 数组去重
export function uniqueArr(arr) {
  return Array.from(new Set(arr));
}

// 类名处理
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

// 首字母大小
export function titleCase(str) {
  return str.replace(/( |^)[a-z]/g, L => L.toUpperCase())
}

// 下划转驼峰
export function camelCase(str) {
  return str.replace(/_[a-z]/g, str1 => str1.substr(-1).toUpperCase())
}

