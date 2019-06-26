import Vue from 'vue'

const Storage = function() {}
Storage.prototype = {
  cookie: {
    set: function(key, value, time = 60 * 60 * 24) {
      const date = new Date()
      const secondTime = time * 1000

      date.setTime(date.getTime() + secondTime)
      document.cookie = key + '=' + value + ';expires=' + date.toGMTString()
    },
    get: function(key) {
      const rule = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
      const cookieArray = document.cookie.match(rule)

      if (cookieArray) {
        return unescape(cookieArray[2])
      } else {
        return null
      }
    },
    delete: function(key) {
      const value = this.get(key)
      const date = new Date()

      date.setTime(date.getTime() - 1)
      if (value !== null) {
        document.cookie =
          key + '=' + value + ';path=/;expires=' + date.toGMTString()
      }
    }
  },
  localStorage: {
    set: function(key, value) {
      if (typeof value !== 'string') {
        value = JSON.stringify(value)
      }
      return window.localStorage.setItem(key, value)
    },
    get: function(key) {
      const localStorage = window.localStorage

      if (localStorage.key) {
        return localStorage.getItem(key)
      } else {
        return null
      }
    },
    delete: function(key) {
      window.localStorage.removeItem(key)
    },
    clear: function() {
      return window.localStorage.clear()
    }
  }
}
Vue.prototype.storage = new Storage()
export const storage = new Storage()
