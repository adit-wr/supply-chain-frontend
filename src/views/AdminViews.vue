<template>
    <div class="admin-view">
      <div class="scrollable-content">
        <ItemList v-if="currentComponent === 'items'" />
        <UserList v-if="currentComponent === 'users'" />
        <TransactionList v-if="currentComponent === 'transactions'" />
      </div>
    </div>
  </template>
  
  <script>
  import ItemList from "@/components/admin/item/ItemList.vue";
  import UserList from "@/components/admin/user/UserList.vue";
  import TransactionList from "@/components/admin/transaction/TransactionList.vue";
  
  export default {
    components: {
      ItemList,
      UserList,
      TransactionList,
    },
    props: {
      component: {
        type: String,
        default: "items",
      },
    },
    computed: {
      currentComponent() {
        return this.component;
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-view {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
  
  .scrollable-content {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background-color: #ffffff;
    max-height: calc(100vh - 60px);
  }
  </style>
  