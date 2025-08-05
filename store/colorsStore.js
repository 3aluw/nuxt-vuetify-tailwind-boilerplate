import { defineStore, acceptHMRUpdate } from "pinia";


export const useFirstStore = defineStore("FirstStore", () => {
const count = 0;




  return {
   count
  };
},

);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFirstStore, import.meta.hot));
}
