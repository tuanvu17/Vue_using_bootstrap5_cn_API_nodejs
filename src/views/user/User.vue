<template lang="">
   <div>
      <h1>User Management</h1>
      <router-link to='/user/create' class="back">Add New</router-link>
      <table class="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">User name</th>
             <th scope="col">Age</th>
             <th scope="col">Handle</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th scope="row">1</th>
             <td>Mark</td>
             <td>Otto</td>
             <td>@mdo</td>
           </tr>
           <tr>
             <th scope="row">2</th>
             <td>Jacob</td>
             <td>Thornton</td>
             <td>@fat</td>
           </tr>
           
         </tbody>
       </table>
   </div>
</template>
<script>
   export default {};
</script>
<style scoped>
   .back {
      text-decoration: none;
      font-size: 16px;
   }
   .buttons{
      align-self: flex-start;
   }
   .form-label{
      text-align: start;
      width: 100%;
   }
</style>