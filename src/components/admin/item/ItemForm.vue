<template>
  <form @submit.prevent="submitForm" class="item-form">
    <div class="mb-3">
      <label for="kode" class="form-label">Kode</label>
      <input
        type="text"
        v-model="form.kode"
        id="kode"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <label for="nama" class="form-label">Nama</label>
      <input
        type="text"
        v-model="form.nama"
        id="nama"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <label for="deskripsi" class="form-label">Deskripsi</label>
      <textarea
        v-model="form.deskripsi"
        id="deskripsi"
        class="form-control"
        required
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="stok" class="form-label">Stok</label>
      <input
        type="number"
        v-model.number="form.stok"
        id="stok"
        class="form-control"
        required
      />
    </div>
    <div v-if="form.error" class="alert alert-danger">{{ form.error }}</div>
    <button type="submit" class="btn btn-success w-100">
      {{ isEdit ? "Simpan Perubahan" : "Tambah Item" }}
    </button>
  </form>
</template>

<script>
import axios from "@/plugins/axios";

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
        error: "",
      },
    };
  },
  watch: {
    item: {
      immediate: true,
      handler(newItem) {
        if (this.isEdit) {
          this.form = {
            kode: newItem.kode,
            nama: newItem.nama,
            deskripsi: newItem.deskripsi,
            stok: newItem.stok,
            error: "",
          };
        } else {
          this.resetForm();
        }
      },
    },
  },
  methods: {
    resetForm() {
      this.form = {
        kode: "",
        nama: "",
        deskripsi: "",
        stok: 0,
        error: "",
      };
    },
    async submitForm() {
      try {
        this.form.error = "";

        const payload = {
          kode: this.form.kode,
          nama: this.form.nama,
          deskripsi: this.form.deskripsi,
          stok: this.form.stok,
        };

        console.log("Sending data to server:", payload);

        let response;
        if (this.isEdit) {
          response = await axios.put(`/api/items/${this.item.id}`, payload);
          console.log("Item updated successfully");
        } else {
          response = await axios.post("/api/items", payload);
          console.log("Item created:", response.data);
        }

        this.$emit("submit", this.form);
        this.resetForm();
      } catch (error) {
        console.error("Failed to submit form:", error);
        if (error.response) {
          console.error("Response Status:", error.response.status);
          console.error("Response Data:", error.response.data);
          this.form.error = error.response.data.message || "Unknown error";
        } else if (error.request) {
          console.error("Request made but no response received:", error.request);
          this.form.error = "Request made but no response received";
        } else {
          console.error("Error details:", error.message);
          this.form.error = error.message || "Failed to submit form";
        }
      }
    },
  },
};
</script>

<style scoped>
.item-form .form-label {
  margin-top: 1rem;
}
.alert {
  margin-top: 1rem;
}
</style>
xx