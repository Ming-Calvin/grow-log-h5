import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvI5UjEws3TTM5crDwOGe\n' +
  '5VG5StcigXL3v9CgdMweXYFz5S9VaZIK2MxcStlWpIwW9SEuF1WmHRxTrG0mFHpg\n' +
  'fHDeBPu50fL5pMAV4DDViJOoEif7SA5knbVc5jtdFJ2paKE5NXm066LQfMR8YlqT\n' +
  '/EQUAgk69MuJKoDnO3y95z72/BDkxQcZvidLWYDhbVdRzVNxDzOAzUm8kvbfvTuz\n' +
  'ZqSaskaisxUnnzwl61/2PmQ/35AmFyYJD2sAXV0f3GA17SvoTjNMja75BjogtnNe\n' +
  'IbsyaHLeXvfxKda0CzHFMT+VSsGKafVQIPaXqq5UX7wOAxRkznq/we+gzT9o73x1\n' +
  '9wIDAQAB'

const privateKey = 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8jlSMTCzdNMzl\n' +
  'ysPA4Z7lUblK1yKBcve/0KB0zB5dgXPlL1VpkgrYzFxK2VakjBb1IS4XVaYdHFOs\n' +
  'bSYUemB8cN4E+7nR8vmkwBXgMNWIk6gSJ/tIDmSdtVzmO10UnalooTk1ebTrotB8\n' +
  'xHxiWpP8RBQCCTr0y4kqgOc7fL3nPvb8EOTFBxm+J0tZgOFtV1HNU3EPM4DNSbyS\n' +
  '9t+9O7NmpJqyRqKzFSefPCXrX/Y+ZD/fkCYXJgkPawBdXR/cYDXtK+hOM0yNrvkG\n' +
  'OiC2c14huzJoct5e9/Ep1rQLMcUxP5VKwYpp9VAg9peqrlRfvA4DFGTOer/B76DN\n' +
  'P2jvfHX3AgMBAAECggEAKMbrF/A9X5VUnnlsPiFM+LDkzn+aEb6oP45BtSCTjIs7\n' +
  'YhwLb6pKuDnx16oK58j4Cgkj6531L6R5n/d23cTdauwJx7Acrn/KZ0u3L2XAOCoe\n' +
  'ldaZrCqYrdaUAaJi7dtu0JbVRXBNpQvv5JulfquyB0M9xHb0jg4aWtvHpgDDHOgM\n' +
  'twbdq+xyqYBGRDAQnDxeETbQXkPmxGniymvBaSBlUn1mK/mUk4qgKStXpTKpogLj\n' +
  'qQ+aH6KsM30WbSbv53BAEf3exjsFMAu2ml/K6UuQThGS0LF8mwdi1bKZFyTDg/gO\n' +
  'AqKqkgjbeCYiU8QLn0QY2NCieTDvMI7u07Tch9LQMQKBgQDteX2bU0QS0+aOlUZ3\n' +
  'E2oK9Id1HePDAamUBgN4G9iVgCDAuXD0PWCpL9gMGETRCCClbXzkmH7OXRxoLSA5\n' +
  'e4OBw3OO5zRTBFIdtFqUYm5HGlM4ZaiUQD+1CxAUasOmj2EDr6ljqTSJL+sgBXVF\n' +
  'wvLYE93tuAvh7RZGhRC9yyutCQKBgQDLQ+fu6zrlt5ITuqrJNc1fdJ/Pj8TgTqOo\n' +
  'qZaMaGdH+FkIBlBVhIx9pOISe0MxaPlj7xAlUBwdYM3BkLilKnkdrgdy/r4tTXN+\n' +
  '0fKG1eq51T+uZXpypJli8/77f05fNerjRaV8oKXx92RTik2Rr70WtLe3H1SdZMA4\n' +
  'gvadw2LK/wKBgBGPQDhyCcCSpqO4agN4DglNV47TbPoIb2+gmjURagxz8vgNPkrx\n' +
  'FuqrvP/38265eSCCXg/RLt83h1g0rgNSHMFFoI/ajMXutdu4cFI0jQ745VpwOezs\n' +
  'a0mJzeCUnG7+fx/0p0PVSSszveEaRjeoWKidn3VqfIZyL4l7YWeHVG1xAoGARRMD\n' +
  'e0aG0k+qnXe+1/ennfuk30UtE0jGBufymC5WgrebkcWLgTQ1BfGFPeCTefQBY/t2\n' +
  'kieCFl2yLkg+5yni1LoyH9r/x6ddS0iPUVDanmIgbORhUxoqYd0m1lJx0JsjAi7F\n' +
  'yO9S1UJL3rPOHmcJK/EnyVwlRgNZ6xpeMkiWhwMCgYEAvO34CzjKerHT3VLtT8JT\n' +
  '9WwON9stA5r5c6VNesJfnclJxOZukhFODJjwtdfiaTcoad3PS9pX6O2V8LPgHaPv\n' +
  'fUP8SD3mo+j0NmxJWjRQXugJFrLIVexkdiv8D5qRDgFzPIu32r8J2XqEtNMBxXIi\n' +
  'zi5OqITlS/r+qpOu/cbljx0='

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}

