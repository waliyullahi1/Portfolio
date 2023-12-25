import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import products from '@/data/data.json'

export const useProductStore = defineStore({
  id: "myStore",
  state: () => ({
    items: [
      {
        id: 1,
        seria: "WRN2648368123",
        name: "waec",
        pin: "12242325234534",
      },

      {
        id: 2,
        seria: "WRN2648368123",
        name: "waec",
        pin: "34242325234534",
      },

      {
        id: 3,
        seria: "WRN2648368123",
        name: "waec",
        pin: "74242325234534",
      },

      {
        id: 4,
        seria: "WRN2648468123",
        name: "Waec",
        pin: "56245325234534",
      },

      {
        id: 5,
        seria: "WRN2648368123",
        name: "Waec",
        pin: "34242325234534",
      },

      {
        id: 6,
        seria: "WRN2648368123",
        name: "Waec",
        pin: "12242325234554",
      },

      {
        id: 7,
        seria: "WRN2648368123",
        name: "Waec",
        pin: "12242325234534",
      },

      {
        id: 8,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },

      {
        id: 9,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },

      {
        id: 7,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },
      {
        id: 8,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },

      {
        id: 9,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },
    ],
  }),

  actions: {
    setUser(user) {
      this.user = user
    },
   async logout() {
      try {
        const response = await fetch('http://localhost:3500/logout',{
          method : "GET",
          headers: {'Content-Type':'application/json'},
          credentials:'include',
          body:JSON.stringify({
          })
          
        })
      
      if (!response.ok) {
        const errorData = await response.json();
       this.erromessage = errorData.message;
       this.loadingState = false;
        throw new Error(errorData.message);
        
      }
       this.loadingState = true
      const data = await response.json();
      this.erromessage = ''
      this.message = data.success
      console.log('Success:', data);
      setTimeout(() => {
            this.$router.push({name: 'login'})
            this.loadingState = false
          }, 7000);
      } catch (error) {
        console.log(error)
      }
    }}
});
