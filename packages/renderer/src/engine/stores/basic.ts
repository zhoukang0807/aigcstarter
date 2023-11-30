import { defineStore } from 'pinia';

interface BasicState {
  userId: string,
}

export const useBasicStore = defineStore('basic', {
  state: (): BasicState => ({
    userId: '1234',
  }),
  getters: {
  },
  actions: {
    serId(userId: string) {
      this.userId = userId;
    },
  },
});
