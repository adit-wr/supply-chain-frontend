<template>
    <div class="user-card">
      <div class="user-info">
        <h3>{{ user.username }}</h3>
        <p>{{ user.email }}</p>
        <p><strong>Role:</strong> {{ user.role }}</p>
      </div>
      <div class="user-actions">
        <button class="edit-btn" @click="$emit('edit-user', user)">Edit</button>
        <button class="delete-btn" @click="$emit('delete-user', user.id)">
          Delete
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .user-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .user-info {
    flex-grow: 1;
  }
  
  .user-info h3 {
    margin: 0 0 5px;
  }
  
  .user-actions {
    display: flex;
    gap: 10px;
  }
  
  button {
    padding: 6px 12px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .edit-btn {
    background-color: #4caf50;
    color: white;
  }
  
  .edit-btn:hover {
    background-color: #45a049;
  }
  
  .delete-btn {
    background-color: #f44336;
    color: white;
  }
  
  .delete-btn:hover {
    background-color: #d32f2f;
  }
  </style>
  