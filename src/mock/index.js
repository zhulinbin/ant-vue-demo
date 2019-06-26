const path = require('path')
const fs = require('fs')
const mockDir = path.join(__dirname, 'data')
const mockList = []
const files = fs.readdirSync(mockDir)
files.forEach(file => {
  mockList.push(require(path.resolve(mockDir, file)))
})

mockList.forEach(function(item, index) {
  if (item instanceof Array) {
    item.forEach(function(subItem) {
      mockList.push(subItem)
    })
    mockList.splice(1, index)
  }
})
module.exports = mockList
