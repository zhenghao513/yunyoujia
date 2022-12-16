import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ healthReportCount: 0 }),
  getters: {
    getHealthReportCount: state => state.healthReportCount
  },
  actions: {
    healthReportCountIncrement() {
      this.healthReportCount++
    }
  }
})
