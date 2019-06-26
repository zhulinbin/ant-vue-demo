let server
const url = window.location.protocol + '//' + window.location.host

const evnList = [
  {
    static: 'http://localhost:8087',
    api: '/mock'
  },
  {
    static: 'http://www.jwdai.com.cn',
    api: 'http://rap2api.taobao.org/app/mock/222300'
  }
]
evnList.forEach(item => {
  if (item.static === url) {
    server = item.api
  }
})

export const apiConfig = {
  img: {
    common: {
      logo: require('@/assets/img/logo.png')
    }
  },
  server: {
    getErrorCode: `${server}/code/error`,
    getNormalCode: `${server}/code/normal`
  }
}
