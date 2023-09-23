import { defineStore } from 'pinia'

export const useLeaveStore = defineStore('leave', {
  state: () => ({
    leaveRecord: [
      {
        name: '李小花',
        grade: '2201',
        teacher: '林婷婷',
        isHalf: false,
        leaveDates: '3/1 - 3/2',
        leaveType: '公假',
        leaveReason: '参加歌唱比赛',
        submitTime: '1678221156662',
      },
      {
        name: '李小花',
        grade: '2201',
        teacher: '林婷婷',
        isHalf: false,
        leaveDates: '3/2 - 3/3',
        leaveType: '病假',
        leaveReason: '生病了',
        submitTime: '1671235656662',
      },
      {
        name: '李小花',
        grade: '2201',
        teacher: '林婷婷',
        isHalf: false,
        leaveDates: '3/3 - 3/4',
        leaveType: '事假',
        leaveReason: '去办理业务',
        submitTime: '1678551122662',
      },
    ],
  }),
  getters: {
    getLeaveRecord: (state) => state.leaveRecord,
  },
  actions: {
    addLeaveRecord(record) {
      this.leaveRecord.push(record)
    },
    deleteLeaveRecord(index) {
      this.leaveRecord.splice(index, 1)
    },
  },
})
