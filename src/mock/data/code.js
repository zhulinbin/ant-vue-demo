const Mock = require('mockjs')
const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    platforms: ['a-platform']
  }))
}

module.exports = [
  {
    url: '/code/error',
    type: 'get',
    response: (req, res) => {
      return {
        code: 500,
        data: {
          items: List
        },
        message: '服务器凉了(mock)'
      }
    }
  },
  {
    url: '/code/normal',
    type: 'get',
    response: function(req, res) {
      return {
        code: 200,
        data: List[0],
        message: 'success(mock)'
      }
    }
  }
]

