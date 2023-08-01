import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: 'zhangsan'
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    }
  }
})