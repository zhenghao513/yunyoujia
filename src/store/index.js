import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ healthReportCount: 0, isFill: false, isLeaveApply: false }),
  getters: {
    getHealthReportCount: state => state.healthReportCount
  },
  actions: {
    healthReportCountIncrement() {
      this.healthReportCount++
    }
  }
})
