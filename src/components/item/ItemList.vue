<template>
  <div class="item-list">
    <div class="header">
      <h2>Daftar Barang</h2>

      <button class="add-btn" @click="$emit('add-item')">Tambah Item</button>
    </div>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Kode Barang</th>
            <th>Nama Barang</th>
            <th>Deskripsi</th>
            <th>Stok</th>
            <th class="action-column">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.kode">
            <td>{{ item.kode }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ item.deskripsi }}</td>
            <td>{{ item.stok }}</td>
            <td class="action-buttons">
              <button class="edit-btn" @click="$emit('edit-item', item)">
                Edit
              </button>
              <button class="delete-btn" @click="deleteItem(item.kode)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          kode: "2024001",
          nama: "Acer Nitro 15 AN515-58",
          deskripsi: "Intel Core i5 12500H, RTX 3050, RAM 8GB DDR4, LAYAR 15.6",
          stok: 80,
        },

        {
          kode: "2024002",
          nama: "Lenovo LOQ 15 15IRH8",
          deskripsi: "Intel Core i5 13450H, RTX 3050, RAM 8GB DDR4, LAYAR 15.6",
          stok: 80,
        },
      ],
    };
  },

  methods: {
    deleteItem(kode) {
      this.items = this.items.filter((item) => item.kode !== kode);
      this.$emit("delete-item", kode);
    },
  },
};
</script>
<style scoped>
.item-list {
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

h2 {
  color: #4b3f6b;
  font-size: 24px;
}

.add-btn {
  background-color: #754bc5;
  color: white;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.add-btn:hover {
  background-color: #5a37a0;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: center;
  vertical-align: middle;
}

th {
  background-color: #4b3f6b;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
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
  margin-right: 5px;
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

@media (max-width: 600px) {
  th,
  td {
    padding: 8px 10px;
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .action-buttons button {
    margin: 5px 0;
  }
}
</style>
