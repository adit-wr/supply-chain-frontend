<template>
    <form @submit.prevent="submitForm">
      <h2>Verifikasi Transaksi</h2>
      <div>
        <label for="kode">Kode Transaksi:</label>
        <input type="text" v-model="form.kode" id="kode" disabled />
      </div>
      <div>
        <label for="namaKaryawan">Nama Karyawan:</label>
        <input
          type="text"
          v-model="form.namaKaryawan"
          id="namaKaryawan"
          disabled
        />
      </div>
      <div>
        <label for="namaBarang">Nama Barang:</label>
        <input type="text" v-model="form.namaBarang" id="namaBarang" disabled />
      </div>
      <div>
        <label for="tanggalPinjam">Tanggal Pinjam:</label>
        <input
          type="date"
          v-model="form.tanggalPinjam"
          id="tanggalPinjam"
          disabled
        />
      </div>
      <div>
        <label for="tanggalKembali">Tanggal Kembali:</label>
        <input
          type="date"
          v-model="form.tanggalKembali"
          id="tanggalKembali"
          disabled
        />
      </div>
      <div>
        <label for="jumlahPinjam">Jumlah Pinjam:</label>
        <input
          type="number"
          v-model="form.jumlahPinjam"
          id="jumlahPinjam"
          disabled
        />
      </div>
      <div>
        <label for="status">Status:</label>
        <select v-model="form.status" id="status">
          <option value="Borrowed">Borrowed</option>
          <option value="Returned">Returned</option>
        </select>
      </div>
      <div class="button-container">
        <button type="button" @click="cancelForm">Batal</button>
        <button type="submit">Verifikasi</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      transaction: Object,
    },
    data() {
      return {
        form: { ...this.transaction },
      };
    },
    methods: {
      submitForm() {
        this.$emit("submit", { ...this.form });
      },
      cancelForm() {
        this.$emit("cancel");
      },
    },
    watch: {
      transaction(newTransaction) {
        this.form = { ...newTransaction };
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: auto;
    background: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  label {
    margin-top: 10px;
  }
  
  input,
  select {
    padding: 5px;
    margin-top: 5px;
  }
  
  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  button[type="button"] {
    background-color: #f44336;
  }
  
  button[type="button"]:hover {
    background-color: #e31b0c;
  }
  </style>
  