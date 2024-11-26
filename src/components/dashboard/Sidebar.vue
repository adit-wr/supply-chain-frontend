<template>
    <div :class="['sidebar', { hidden: !isSidebarVisible }]">
      <a class="logo">E-Gudang</a>
      <ul>
        <li v-if="currentRole === 'admin'">
          <a href="#" @click="showComponent('users')" class="nav-link">
            <i class="bi bi-house-door"></i> Users
          </a>
        </li>
        <li>
          <a href="#" @click="showComponent('items')" class="nav-link">
            <i class="bi bi-box"></i> Items
          </a>
        </li>
        <li>
          <a href="#" @click="showComponent('transactions')" class="nav-link">
            <i class="bi bi-cash"></i> Transactions
          </a>
        </li>
        <li v-if="currentRole === 'user'">
          <a href="#" @click="showComponent('history')" class="nav-link">
            <i class="bi bi-clock-history"></i> History
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentRole: {
        type: String,
        required: true,
      },
      isSidebarVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      showComponent(component) {
        this.$router.push({ name: this.currentRole, params: { component } });
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background: #004915;
    color: white;
    padding: 14px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    font-size: 18px;
    font-family: sans-serif;
    transition: transform 0.3s ease;
  }
  
  .sidebar.hidden {
    transform: translateX(-100%);
  }
  
  .logo {
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: bold;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    transition: background color 0.3s ease;

    &:hover {
      text-decoration: underline;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  </style>
  