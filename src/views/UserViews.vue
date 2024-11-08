<template>
  <div class="user-view">
    <div class="scrollable-content">
      <ItemList v-if="currentComponent === 'items'" />
      <TransactionList v-if="currentComponent === 'transactions'" />
      <HistoryList v-if="currentComponent === 'history'" />
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/user/item/ItemList.vue";
import TransactionList from "@/components/user/transaction/TransactionList.vue";
import HistoryList from "@/components/user/history/HistoryList.vue";

export default {
  components: {
    ItemList,
    TransactionList,
    HistoryList,
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
.user-view {
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
