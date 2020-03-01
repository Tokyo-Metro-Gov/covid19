import Vue from 'vue'
import moment from 'moment'

Vue.filter('datetimeFormatter', function(value) {
  const date = moment(value)
  return date.format('YYYY/MM/DD(ddd) HH:MM')
})
