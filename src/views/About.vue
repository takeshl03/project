<template>
  <form>
    <div>
      <h1>Product List</h1>
      <!--date-->
      <label for="item">รายการ</label> :
      <input type="text" v-model="item" name="item" required class="btn btn-dark" placeholder="รายการสินค้า"/> <br />
      <label for="total">จำนวน</label> :
      <input type="text" v-model="total" name="total" required class="btn btn-dark" placeholder="จำนวนสินค้า"/> <br />
      <button @click="addData()" class="btn btn-primary">Save Data</button>
      <button @click="Delete()" class="btn btn-danger">Delete Data</button>
      <table class="table">
        <thead>
          <tr class="table-dark">
            <th scope="col">รายการ</th>
            <th scope="col">จำนวน</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr v-for="(data, index) in dataList" :key="index">
            <td>{{ data.item }}</td>
            <td>{{ data.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</template>

<script>
import db from "../firebase/index";
import { collection, addDoc, getDocs,deleteDoc,doc } from "firebase/firestore";

export default {
  mounted() {
    this.ReadData();
  },

  data: () => ({
    total: "",
    item: "",
    dataList: [],
  }),
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "products"), {
          item: this.item,
          total: this.total,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async ReadData() {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.dataList.push(doc.data());
      });
    },
    async Delete(id) {
      await deleteDoc(doc(db, "products", id));
      this.overlay = !this.overlay;
      console.log("delete" + id);
    },
  },
};
</script>
