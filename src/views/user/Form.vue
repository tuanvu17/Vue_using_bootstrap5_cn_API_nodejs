<template lang="">
   <div>
      <router-link to='/product' class="back">Back</router-link>
      <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">USer name</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="type name">
      </div>
      <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">USer price</label>
         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="type price">
      </div>
      <div class="mb-3">
         <label for="exampleFormControlTextarea1" class="form-label">User description</label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="product description"></textarea>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end buttons ">
         <button class="btn btn-primary me-md-2" type="button">Save</button>
         <button class="btn btn-danger" type="button">Cancle</button>
      </div>
   </div>
</template>
<script>
   export default {};
</script>
<style scoped>
   .back {
      text-decoration: none;
      font-size: 30px;
   }
   .buttons{
      align-self: flex-start;
   }
   .form-label{
      text-align: start;
      width: 100%;
   }
</style>