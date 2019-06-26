const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')

const mockDir = path.join(process.cwd(), 'src/mock')

const Mock = require('mockjs')

function _getRouters() {
  const routerList = []
  const apiList = require('./index.js')

  apiList.forEach(function(item) {
    const obj = {
      url: new RegExp(`/mock${item.url}`),
      type: item.type || 'get',
      response(req, res) {
        res.json(
          Mock.mock(
            typeof item.respond === 'function'
              ? item.response(req, res)
              : item.response
          )
        )
      }
    }
    routerList.push(obj)
  })
  return routerList
}

function register(app) {
  const router = _getRouters()
  let lastIndex

  router.forEach(function(item) {
    app[item.type](item.url, item.response)
    lastIndex = app._router.stack.length
  })
  const routeLength = Object.keys(router).length
  return {
    routeLength: routeLength,
    startIndex: lastIndex - routeLength
  }
}

function unregister() {
  Object.keys(require.cache).forEach(item => {
    if (item.includes(mockDir)) {
      delete require.cache[require.resolve(item)]
    }
  })
}

module.exports = function(app) {
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  const route = register(app)
  var routeLength = route.routeLength
  var startIndex = route.startIndex
  // watch files, hot reload mock server
  chokidar
    .watch(mockDir, {
      ignored: /mock-server/,
      ignoreInitial: true
    })
    .on('all', function(event, path) {
      if (event === 'change' || event === 'add') {
        try {
          // remove mock routes stack
          app._router.stack.splice(startIndex, routeLength)

          // clear routes cache
          unregister()

          const route = register(app)
          routeLength = route.routeLength
          startIndex = route.startIndex

          console.log(
            chalk.magentaBright(
              `\n > Mock Server hot reload success! changed  ${path}`
            )
          )
        } catch (error) {
          console.log(chalk.redBright(error))
        }
      }
    })
}
