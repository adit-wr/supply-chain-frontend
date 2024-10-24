<template>
  <div id="app">
    <Navbar @navigate-to="handleNavigation" />
    <div class="main-content">
      <div v-if="currentPage === 'user'">
        <UserComponent />
      </div>
      <div v-else-if="currentPage === 'item'">
        <ItemComponent 
          @add-item="handleAddItem"
          @edit-item="handleEditItem"
          @delete-item="handleDeleteItem"
        />
      </div>
      <div v-else-if="currentPage === 'transaction'">
        <TransactionComponent />
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import UserComponent from "./components/user/UserList.vue";
  import ItemComponent from "./components/item/ItemList.vue";
  import TransactionComponent from "./components/transaction/TransactionList.vue";
  export default {
    components: {
      Navbar,
      UserComponent,
      ItemComponent,
      TransactionComponent,
    },

    data() {
      return {
        currentPage: "user",
        items: []
      }
    },
    methods: {
      handleNavigation(page) {
        this.currentPage = page;
      },
      handleAddItem(item) {
        this.items.push = 'item';
      },
      handleEditItem(updatedItem) {
        const index = this.items.findIndex(item => item.kode === updatedItem.kode);
        if (index !== -1) {
          this.items.splice(index, 1, updatedItem);
        }
      },
      handleDeleteItem(itemKode) {
        this.items = this.items.filter((item) => item.kode !== itemKode);
      }
    },
  };
</script>

<style scoped>
  #app {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .main-content {
    flex: 1;
    padding: 20px;
    background-color: #ffffff;
  }
</style>
