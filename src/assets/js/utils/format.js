/** ***************************************************************
 ** Copyright (C), 2019-2020, Luoxiaobin
 ** File Name: format.js
 ** Description: 各种格式验证函数
 ** Function List: telPhone, password, validateCode, parseTime toTimeStamp, getCurrentDate
 ** History:
 **   1. Created by Luoxiaobin
 *****************************************************************/

import Vue from 'vue'

const Format = function() {}
Format.prototype = {
  /** ***************************************************************
   ** Function Name: telPhone
   ** Description: 手机号码验证
   ** Params:
   **   @param str {string}
   ** Return:
   **   @param result {string}
   ** Usage:
   **  let result = this.format.telPhone(str)
   *****************************************************************/
  telPhone: function(str) {
    /* 11位数字,以1开头 */
    const reg = /^1\d{10}$/
    if (reg.test(str)) {
      return ''
    } else if (str === '') {
      return '请输入手机号'
    } else {
      return '您输入的手机号有误'
    }
  },
  /** ***************************************************************
   ** Function Name: password
   ** Description: 密码验证
   ** Params:
   **   @param str {string}
   ** Return:
   **   @param result {string}
   ** Usage:
   **  let result = this.format.password(str)
   *****************************************************************/
  password: function(str) {
    /* 6位数字 */
    if (str !== '') {
      return ''
    } else if (str === '') {
      return '请输入密码'
    } else {
      return '您输入的密码有误'
    }
  },
  /** ***************************************************************
   ** Function Name: validateCode
   ** Description: 验证码验证
   ** Params:
   **   @param str {string}
   ** Return:
   **   @param result {string}
   ** Usage:
   **  let result = this.format.validateCode(str)
   *****************************************************************/
  validateCode: function(str) {
    /* 6位数字 */
    const reg = /^\d{6}$/
    if (reg.test(str)) {
      return ''
    } else if (str === '') {
      return '请输入验证码'
    } else {
      return '您输入的验证码有误'
    }
  },
  /** ***************************************************************
   ** Function Name: parseTime
   ** Description: 解析时间戳
   ** Params:
   **   @param timeStampStr {string}
   ** Return:
   **   @param result {string}
   ** Usage:
   **  let result = this.format.parseTime(timeStampStr)
   *****************************************************************/
  parseTime: function(time) {
    if (time === undefined || time === null) {
      return ''
    }
    time = new Date(parseInt(time))
    var year = '0' + time.getFullYear()
    var month = '0' + (time.getMonth() + 1)
    var date = '0' + time.getDate()
    return (
      year.substring(year.length - 4, year.length) +
      '年' +
      month.substring(month.length - 2, month.length) +
      '月' +
      date.substring(date.length - 2, date.length) +
      '日'
    )
  },
  /** ***************************************************************
   ** Function Name: toTimeStamp
   ** Description: 将时间字符串转换为时间戳
   ** Params:
   **   @param timeStr {string}
   ** Return:
   **   @param result {string}
   ** Usage:
   **  let result = this.format.toTimeStamp(timeStr)
   *****************************************************************/
  toTimeStamp: function(dataString) {
    return Date.parse(dataString)
  },
  /** ***************************************************************
   ** Function Name: getCurrentDate
   ** Description: 获取当前日期
   ** Return: (2018/3/5)
   **   @param result {string}
   ** Usage:
   **  let result = this.format.getCurrentDate()
   *****************************************************************/
  getCurrentDate() {
    var date, yearStr, monthStr, dateStr

    date = new Date()
    yearStr = date.getFullYear()
    monthStr = date.getMonth() + 1
    dateStr = date.getDate()

    if (monthStr >= 1 && monthStr <= 9) {
      monthStr = '0' + monthStr
    }
    if (dateStr >= 0 && dateStr <= 9) {
      dateStr = '0' + dateStr
    }

    return yearStr + '-' + monthStr + '-' + dateStr
  },
  checkRequired(data, msg) {
    if (data === '' || data === null) {
      return msg
    } else {
      return ''
    }
  },
  parseDate(time) {
    if (time === '') {
      return ''
    }
    time = new Date(time)
    const year = time.getFullYear()
    const month = this.checkAddZone(time.getMonth() + 1)
    const date = this.checkAddZone(time.getDate())
    const hour = this.checkAddZone(time.getHours())
    const min = this.checkAddZone(time.getMinutes())
    const second = this.checkAddZone(time.getSeconds())

    return `${year}-${month}-${date} ${hour}:${min}:${second}`
  },
  checkAddZone(num) {
    return num < 10 ? '0' + num.toString() : num
  }
}
Vue.prototype.format = new Format()
export const format = new Format()
