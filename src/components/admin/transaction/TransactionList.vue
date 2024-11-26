<template>
  <div class="transaction-list">
    <div class="header">
      <h2>Daftar Transaksi</h2>
    </div>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Karyawan</th>
            <th>Nama Barang</th>
            <th>Jumlah Pinjam</th>
            <th>Tanggal Pinjam</th>
            <th>Tanggal Kembali</th>
            <th>Status</th>
            <th class="action-column">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in filteredTransactions" :key="transaction.kode">
            <td>{{ transaction.kode }}</td>
            <td>{{ transaction.namaKaryawan }}</td>
            <td>{{ transaction.namaBarang }}</td>
            <td>{{ transaction.jumlahPinjam }}</td>
            <td>{{ transaction.tanggalPinjam }}</td>
            <td>{{ transaction.tanggalKembali }}</td>
            <td>{{ transaction.status }}</td>
            <td class="action-buttons">
              <button
                class="verif-btn"
                @click="openVerificationForm(transaction)"
                :disabled="transaction.status === 'Returned'"
              >
                {{
                  transaction.status === "Returned" ? "Returned" : "Verifikasi"
                }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal :visible="showForm" @close="cancelVerificationForm">
      <TransactionForm
        :transaction="selectedTransaction"
        @submit="handleVerification"
        @cancel="cancelVerificationForm"
      />
    </Modal>
  </div>
</template>

<script>
import { EventBus } from '@/utils/eventBus';
import Modal from "@/components/Modal.vue";
import TransactionForm from "@/components/admin/transaction/TransactionForm.vue";

export default {
  name: "transactions",
  components: {
    Modal,
    TransactionForm,
  },
  data() {
    return {
      transactions: [
        {
          kode: "2024001",
          namaKaryawan: "Budiono",
          namaBarang: "Acer Nitro 15 AN515-58",
          jumlahPinjam: 1,
          tanggalPinjam: "2024-08-10",
          tanggalKembali: "2024-08-17",
          status: "Borrowed",
        },
        {
          kode: "2024002",
          namaKaryawan: "Sisil",
          namaBarang: "Lenovo LOQ 15 15IRH8",
          jumlahPinjam: 1,
          tanggalPinjam: "2024-08-10",
          tanggalKembali: "2024-08-17",
          status: "Borrowed",
        },
      ],
      showForm: false,
      selectedTransaction: null,
      searchQuery: '',
    };
  },
  computed: {
    filteredTransactions() {
      return this.transactions.filter(transaction =>
        transaction.namaKaryawan.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        transaction.namaBarang.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        transaction.kode.includes(this.searchQuery)
      );
    },
  },
  methods: {
    openVerificationForm(transaction) {
      this.selectedTransaction = { ...transaction };
      this.showForm = true;
    },
    handleVerification(updatedTransaction) {
      const index = this.transactions.findIndex((t) => t.kode === updatedTransaction.kode);
      if (index !== -1) {
        this.transactions[index] = { ...updatedTransaction, status: "Returned" };
      }
      this.cancelVerificationForm();
    },
    cancelVerificationForm() {
      this.showForm = false;
      this.selectedTransaction = null;
    },
    handleSearch(query) {
      this.searchQuery = query;
    },
  },
  mounted() {
    EventBus.on('search', this.handleSearch);
  },
  beforeUnmount() {
    EventBus.off('search', this.handleSearch);
  },
};
</script>

<style scoped>
.transaction-list {
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
  color: #004915;
  font-size: 24px;
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
  background-color: #004915;
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

.verif-btn {
  background-color: #00651d;
  color: white;
}

.return-btn:hover {
  background-color: #005719;
}

.verif-btn[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
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
