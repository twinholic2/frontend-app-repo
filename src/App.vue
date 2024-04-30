<template>
  <div id="wrap">
      <div id="header"><p>Hello ECS</p></div>
  </div>
  <router-view/>
</template>


<style>
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin:0; padding:0;
}

#header {
    height: 35px;
    background-color: #2828287d;
    line-height: 35px;
    color: white;
    text-align: left;
}
#header p {
    padding-left: 30px;
}
</style>
