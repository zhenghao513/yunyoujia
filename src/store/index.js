import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    healthReportCount: 0,
    isFill: false,
    isLeaveApply: false,
    leaveCount: 0,
    mailboxCount: 0
  }),
  getters: {
    getHealthReportCount: (state) => state.healthReportCount,
    getLeaveCount: (state) => state.leaveCount,
    getmailboxCount: (state) => state.mailboxCount,
  },
  actions: {
    healthReportCountIncrement() {
      this.healthReportCount++
    },
    leaveCountIncrement() {
      this.leaveCount++
    },
    mailboxCountIncrement() {
      this.mailboxCount++
    },
  },
})
