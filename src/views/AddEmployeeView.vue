<template>
    <div id="content">
        <div id="innner_content">
            <div id="title">
                Add Employee
            </div>
            <div id="add">
                <p>First Name</p>
                <input type="text" name="firstName" id="firstName" v-model="firstName">
                <p>Last Name</p>
                <input type="text" name="lastName" id="lastName" v-model="lastName">
                <p>Email</p>
                <input type="text" name="email" id="email" v-model="email">
            </div>
            <div id="btns">
                <a href="#" @click.prevent="addEmployee">Save</a>
                <a href="#" @click.prevent="goBackward">Cancel</a>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
 import axios from "axios";

export default {
  name: 'HomeView',
  data: function(){
    return {
      firstName: '',
      lastName: '',
      email: '',
    }
  },
  methods: {
    goBackward() {
        this.$router.go(-1);
    },
    async addEmployee() {

        var data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        }
        var url = 'http://localhost:8080/api/employee/add';

        axios.post(url, data)
                .then( (response) => {
                if(response.status==200){
                    // SUCCESS                    
                    console.log(response);
                    this.$router.push({ path: '/' });
                }
                })
                .catch(function(error){
                    console.log(error);
                });
    }
  }
}
</script>

<style scoped>
    #content {
        width: 800px;
        margin: 0 auto;
        height: 100%;
        padding:50px 0;
    }

    #innner_content {
        width: 500px;
        border: 1px solid #cccccc;
        margin: 0 auto;
        padding: 20px;
    }

    #title {
        text-align: center;
        font-size: 1.6em;
        font-weight: bold;
        margin: 0 auto;
    }

    input[type=text] {
        height: 20px; width: 100%;
        border: 1px solid #bbbbbb
        
    }

    #btns {margin-top:10px;}

    #btns a {
        display: inline-block;
        width: 120px; height:25px;
        font-size: 12px;
        text-align: center;
        line-height: 25px;
        color:white;
        border-radius: 5px;
        margin-right:5px;
    }

    #btns a:nth-child(1) {
        background-color: #21768b;
    }
    #btns a:nth-child(2) {
        background-color: #a829a8;
    }
</style>