<template>
  <div id="content">
    <div id="title">
        Employee List
    </div>
    <div id="btn">
        <a href="#" @click.prevent="addEmployee">Add Employee</a>
    </div>
    <div id="tabs">
        <table>
            <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
            </tr>
            
            <tr v-for="(employee,i) in employeeList" :key="i">
              <td>{{ employee.firstName }}</td>
              <td>{{ employee.lastName }}</td>
              <td>{{ employee.email }}</td>
              <td>
                <ul>
                    <li><a href="#" @click.prevent="updateEmployee(employee.id)">Update</a></li>
                    <li><a href="#" @click.prevent="deleteEmployee(employee.id)">Delete</a></li>
                    <li><a href="#" @click.prevent="detailEmployee(employee.id)">View</a></li>
                </ul>
              </td>
            </tr>
        </table>
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
    this.fetchData();
  },
  methods: {
    addEmployee() {
      this.$router.push({ path: '/addEmployee' });
    },
    updateEmployee(employeeId) {
      this.$router.push({ path: '/updateEmployee' , query: { id: employeeId }});
    },
    detailEmployee(employeeId) {
      this.$router.push({ path: '/detailEmployee' , query: { id: employeeId }});
    },
    deleteEmployee(employeeId) {
      if(confirm("삭제하시겠습니까?")) {
        const url = EMPLOYEE_API_BASE_URL+"/delete"
        axios.get(url, {
                  params : { id: employeeId }
              })
              .then(response => {
                  // 서버에서 받은 데이터를 employee 배열에 할당
                  console.log(response);
                  //this.$router.push({ path: '/' });
                  window.location.reload();
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      }
    },
    async fetchData() {
      try {
        // Axios를 사용하여 데이터를 가져옵니다.
        const response = await axios.get(EMPLOYEE_API_BASE_URL);

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
    }
    #content #title {
        text-align: center;
        font-weight: bold;
        font-size:1.6em;
        padding-top:50px;
    }
    #content #tabs {
        width:800px;
        margin:10 auto;
    }

    #btn {text-align:left; margin-top:25px;  margin-bottom:5px;}

    #btn a {
        display: inline-block;
        width: 120px; height:25px;
        font-size: 12px;
        text-align: center;
        line-height: 25px;
        color:white;
        border-radius: 5px;
        background-color: rgb(57, 51, 117);
    }

    table { border:1px solid gray; border-collapse: collapse; border-spacing: 0}
    table th, td { border: 1px solid #cccccc; height: 30px; line-height: 30px;  }
    table th { width: 200px; font-size:0.9em; }
    table td { text-align: left; padding-left:10px;  }

    #tabs ul { overflow: hidden;  }
    #tabs ul li{ list-style: none; float: left; }
    #tabs ul li a {
        padding: 2px; margin:3px;
        font-size: 11px;
        width:45px; height:20px;
        text-align: center;
        line-height: 20px;
        border-radius: 5px;
        color: white;
        display: inline-block;
    }

    #tabs ul li:nth-child(1) a {
        background-color: #21768b;
    }
    #tabs ul li:nth-child(2) a {
        background-color: #a829a8;
    }
    #tabs ul li:nth-child(3) a {
        background-color: #222222e0;
    }
</style>
