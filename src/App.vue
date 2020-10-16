<template>
  <div id="app">
    <detail></detail>
    
  </div>
</template>

<script>
import detail from "./components/detail"

export default {
  name: 'App',
  components: {
    detail,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
