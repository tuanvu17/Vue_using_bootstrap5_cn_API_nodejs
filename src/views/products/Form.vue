<template lang="">
   <div>
      <router-link to='/product' class="back">Back</router-link>
      <form @submit.prevent="save()">
         <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Product name</label>
            <input type="text" class="form-control " placeholder="type name" @blur="validate()" 
               v-model="product.name"
               v-bind:class="{'is-invalid': errors.name}" />
            <div class="invalid-feedback" v-if="errors.name">{{errors.name}}</div>
         </div>
         <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">Product price</label>
            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="type price"
               @blur="validate()" 
               v-model="product.price" 
               v-bind:class="{'is-invalid': errors.price}">
            <div class="invalid-feedback" v-if="errors.price">{{errors.price}}</div>
         </div>
         <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Product description</label>
            <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="type price"
               @blur="validate()" 
               v-model="product.descripton" 
               v-bind:class="{'is-invalid': errors.descripton}"></textarea>
            <div class="invalid-feedback" v-if="errors.descripton">{{errors.descripton}}</div>
         </div>
         
         <div class="d-grid gap-2 d-md-flex justify-content-md-end buttons ">
            <button class="btn btn-primary me-md-2" type="submit">Save</button>
            <button class="btn btn-danger" type="reset" @click="cancel()">Cancle</button>
         </div>
      </form>
   </div>
</template>
<script>
   export default {
      name: 'Product Form',
      data() {
         return {
            product: {
               name: '',
               price: '',
               descripton: ''
            },
            errors: {
               name: '',
               price: '',
               descripton: ''
            }
         }
      },
      created(){
         // console.log("abc");
         let productId = this.$route.params.id;
         if(productId) {
            this.getProduct(productId);
         }
      },
      methods: {
         validate() {
            let isValid = true
            this.errors = {
               name: '',
               price: '',
               descripton: ''
            }
            if (!this.product.name) {
               this.errors.name = 'Product name is requied';
               isValid = false
            }
            if (!this.product.price) {
               this.errors.price = 'Product price is requied';
               isValid = false

            }else if(!this.isNumber(this.product.price)){
               this.errors.price = 'Product price is Number';
               isValid = false
            }
            
            if (!this.product.descripton) {
               this.errors.descripton = 'Product descripton is requied';
               isValid = false
            }
            return isValid;
         },
         isNumber(value){
            return /^\d*$/.test(value)
         },
         save() {
            if(this.product.id){
               // neu dang thucj hien edit
               this.$request.put(`http://localhost:8000/api/products/${this.product.id}`, this.product).then(res =>{
                  if(res.data.success){
                     this.$router.push({name:'product.list'});
                     return
                  }
               })
               return
            }

            if(this.validate()){
               this.$request.post('http://localhost:8000/api/products', this.product).then(res =>{
                  if(res.data.success){
                     this.$router.push({name:'product.list'});
                     return
                  }
                  
               })
            }
         },
         getProduct(productId){
            this.$request.get(`http://localhost:8000/api/products/${productId}`).then(res =>{
               this.product = res.data
            })
         },
         cancel() {
            // vẫn là trang đó, khi hủy thì vẫn là product đó, ko được thêm mới.
            // nếu như gán bằng 1 cái mới là '' thì coi như là productId bị mất, mà id bị mất thì coi như là thêm mới rồi
            // this.product.name ='';
            // this.product.price ='';
            // this.product.descripton ='';
            console.log(this.product);
               this.product = {
                  name:'',
                  price:'',
                  descripton:''
               }
            console.log(this.product);
         }
      }
   };

</script>
<style scoped>
   .invalid-feedback {
      text-align: start;
   }

   .back {
      text-decoration: none;
      font-size: 30px;
   }

   .buttons {
      align-self: flex-start;
   }

   .form-label {
      text-align: start;
      width: 100%;
   }
</style>