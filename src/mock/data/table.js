var Mock = require('mockjs')
const List = []

for (let i = 0; i < 5; i++) {
  List.push(Mock.mock({
    key: '@increment',
    address: '@city',
    name: '@first',
    age: '@natural(1, 100)'
  }))
}

module.exports = [{
  url: '/table/list',
  type: 'get',
  response: function() {
    return {
      code: 200,
      data: {
        total: List.length,
        list: List
      }
    }
  }
}, {
  url: '/table/list2',
  type: 'get',
  response: function() {
    return {
      code: 200,
      data: {
        total: List.length,
        list: List
      }
    }
  }
}]

