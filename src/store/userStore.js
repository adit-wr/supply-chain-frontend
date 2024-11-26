import { defineStore } from 'pinia';
import apiClient from '@/plugins/axios';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await apiClient.get('/user');
        this.user = response.data;
      } catch (error) {
        console.log(error);
        console.error('Failed to fetch users:', error);
      }
    },
    async addUser(user) {
      try {
        const response = await apiClient.post('/user', user);
        this.user.push(response.data);
      } catch (error) {
        console.error('Failed to add user:', error.message);
      }
    },
    async updateUser(user) {
      console.log('Updating user with ID:', user.id);
      try {
        const response = await apiClient.patch(`/user/${user.id}`, user);
        console.log('Update response:', response.data);
        const index = this.user.findIndex(u => u.id === user.id);
        if (index !== -1) {
          this.user.splice(index, 1, response.data.data);
        }
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    },    
    async deleteUser(id) {
      try {
        await apiClient.delete(`/user/${id}`);
        this.user = this.user.filter(user => user.id !== id);
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
    }
  },
});
