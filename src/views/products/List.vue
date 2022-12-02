<template lang="">
   <div>
      <h1>Product Management</h1>
      <router-link to='/product/create' class="back">Add New</router-link>
      <table class="table">
         <thead>
            <tr>
               <th scope="col" width="120">STT</th>
               <th scope="col">Product name</th>
               <th scope="col">Price</th>
               <th scope="col">Handle</th>
            </tr>
         </thead>
         <tbody>
            <tr :key="index" v-for="(product, index) in products">
               <th scope="row">{{index+1}}</th>
               <td>{{product.name}}</td>
               <td>{{product.price}}</td>
               <td>
                  <router-link :to="{name:'product.edit', params:{id:product.id}}">
                  <button class="btn btn-primary">Edit</button>
               </router-link>
                  &nbsp;
                  <button class="btn btn-danger" @click="onDelete(product.id)">Delete</button>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<script>
export default {
  name: "ProductList",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$request.get("http://localhost:8000/api/products").then((res) => {
        this.products = res.data;
        console.log(this.products);
      });
    },
    onDelete(productId) {
      this.$swal
        .fire({
          title: "Do you want to Delete?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "OK",
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$request
              .delete(`http://localhost:8000/api/products/${productId}`)
              .then((res) => {
                if (res.data.success) {
                  this.$swal.fire("Deleted!", "", "success");
                  this.getAll();
                } else {
                }
              });
          } else if (result.isDenied) {
            this.$swal.fire("Changes are not saved", "", "info");
          }
        });
    },
  },
};
</script>
<style scoped>
.back {
  text-decoration: none;
  font-size: 16px;
}

.buttons {
  align-self: flex-start;
}

.form-label {
  text-align: start;
  width: 100%;
}
</style>