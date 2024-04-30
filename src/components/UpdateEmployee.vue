<template>
  <div id="content">
    <div id="innner_content">
        <div id="title">
            Update Employee
        </div>
        <div id="add">
            <input type="hidden" name="id" id="id" v-model="employee.id">
            <p>First Name</p>
            <input type="text" name="firstName" id="firstName" v-model="employee.firstName">
            <p>Last Name</p>
            <input type="text" name="lastName" id="lastName" v-model="employee.lastName">
            <p>Email</p>
            <input type="text" name="email" id="email" v-model="employee.email">
        </div>
        <div id="btns">
            <a href="#" @click.prevent="updateEmployee">Update</a>
            <a href="#" @click.prevent="goBackward">Cancel</a>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

//const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employee";
const EMPLOYEE_API_BASE_URL = "https://api.oshyun.com/api/employee";

export default {
  data() {
    return {
      employee: {}, // 데이터를 저장 객체
      employeeId: ""
    };
  },
  mounted() {
    // 페이지가 마운트될 때 데이터를 가져오는 함수를 호출합니다.
    this.employeeId = this.$route.query.id;
    this.fetchData();
  },
  methods: {
    goBackward() {
        this.$router.go(-1);
    },
    updateEmployee() {
    //   this.$router.push({ path: '/api/employee/update' });
      var data = {
            id: this.employee.id,
            firstName: this.employee.firstName,
            lastName: this.employee.lastName,
            email: this.employee.email
        }
        var url = EMPLOYEE_API_BASE_URL + '/update';

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
    },
    async fetchData() {
      const url = EMPLOYEE_API_BASE_URL + "/view"
      axios.get(url, {
                params : { id: this.employeeId }
            })
            .then(response => {
            // 서버에서 받은 데이터를 employee 배열에 할당
                this.employee = response.data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
  }
}
</script>

<style>
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
    }

    #btns a:nth-child(1) {
        background-color: #21768b;
    }
    #btns a:nth-child(2) {
        background-color: #a829a8;
    }
</style>
