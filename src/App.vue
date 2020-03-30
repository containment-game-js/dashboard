<template>
<div id="app">
  <div>
    <Sidebar />
  </div>
  <router-view />
</div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>
<style>
* {
  font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  margin: 0;
}

#app {
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  background: #f8f8f8;
}
</style>
