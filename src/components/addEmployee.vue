<template>
  <div id="content">
    <div id="innner_content">
        <div id="title">
            Add Employee
        </div>
        <div id="add">
            <p>First Name</p>
            <input type="text" name="first_name" id="first">
            <p>Last Name</p>
            <input type="text" name="last_name" id="last">
            <p>Email</p>
            <input type="text" name="email" id="email">
        </div>
        <div id="btns">
            <a href="#">Save</a>
            <a href="#">Cancel</a>
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
      employeeList: [] // 데이터를 저장할 배열
    };
  },
  mounted() {
    // 페이지가 마운트될 때 데이터를 가져오는 함수를 호출합니다.
    //this.fetchData();
  },
  methods: {
    addEmployee() {
      this.$router.push({ path: '/addEmployee' });
    },
    async fetchData() {
      try {
        // Axios를 사용하여 데이터를 가져옵니다.
        const response = await axios.get('http://localhost:8080/api/employee');

        // 가져온 데이터를 itemList에 할당합니다.
        this.employeeList = response.data;
        console.log(response.data)
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
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
