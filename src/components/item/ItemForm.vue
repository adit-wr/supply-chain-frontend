<template>
  <div>
    <form @submit.prevent="submitForm">
      <table>
        <tr>
          <td>Kode Barang</td>
          <td>
            <input
              type="text"
              v-model="form.kode"
              id="kode"
              :disabled="isEdit"
              required
            />
          </td>
        </tr>

        <tr>
          <td>Nama Barang</td>
          <td>
            <input type="text" v-model="form.nama" id="nama" required />
          </td>
        </tr>

        <tr>
          <td>Deskripsi</td>
          <td>
            <input
              type="text"
              v-model="form.deskripsi"
              id="deskripsi"
              required
            />
          </td>
        </tr>

        <tr>
          <td>Stok</td>
          <td>
            <input type="number" v-model="form.stok" id="stok" required />
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <button type="submit">
              {{ isEdit ? "Simpan Perubahan" : "Tambah Barang" }}
            </button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },

    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        kode: "",
        nama: "",
        deskripsi: "",
        stok: 0,
      },
    };
  },
  watch: {
    item: {
      immediate: true,
      handler(newItem) {
        if (this.isEdit) {
          this.form = { ...newItem };
        } else {
          this.form = {
            kode: "",
            nama: "",
            deskripsi: "",
            stok: 0,
          };
        }
      },
    },
  },
  methods: {
    submitForm() {
      if (
        this.form.kode &&
        this.form.nama &&
        this.form.deskripsi &&
        this.form.stok !== null &&
        this.form.stok !== undefined
      ) {
        this.$emit("submit", this.form);
      }
    },
  },
  emits: ["submit"],
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 10px;
  border: 1px solid #ddd;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
