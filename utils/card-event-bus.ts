import Vue from 'vue'
import events, { EventEmitter } from 'events'
const EventBus = new Vue({
  // https://stackoverflow.com/questions/9768444/possible-eventemitter-memory-leak-detected
  events: () => { events.EventEmitter._maxListeners = 15 },
  $on: () => { return false },
  $off: () => { return false },
  $emit: () => { return Object },
})
export default EventBus
export const TOGGLE_EVENT = 'TOGGLE_DETAILS'
