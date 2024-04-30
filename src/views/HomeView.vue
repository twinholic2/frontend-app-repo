<template>
    <EmployeeList msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import EmployeeList from '@/components/EmployeeList.vue'

export default {
  name: 'HomeView',
  components: {
    EmployeeList
  }
}
</script>
