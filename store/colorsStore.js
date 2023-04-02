import { defineStore, acceptHMRUpdate } from "pinia";


export const useFirstStore = defineStore("FirstStore", () => {
const count = 0;




  return {
   count
  };
},
/* Enable this to persist this store : more info : https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
{
  persist: true}
*/
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFirstStore, import.meta.hot));
}
