/* 自定义提示框 */
import { Toast } from 'vant'

const mToast = {
  tips: (message, duration = 1500, callback) => {
    Toast({
      message: message,
      icon: 'comment-o',
      duration: duration,
      onClose: () => callback && callback()
    })
  },
  success: (message, duration = 1500, callback) => {
    Toast({
      message: message,
      icon: 'passed',
      duration: duration,
      onClose: () => callback && callback()
    })
  },
  fail: (message, duration = 1500, callback) => {
    Toast({
      message: message,
      icon: 'close',
      duration: duration,
      onClose: () => callback && callback()
    })
  }
}

export default mToast

