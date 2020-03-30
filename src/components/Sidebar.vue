<template>
<div class="sidebar">
  <router-link v-for="link in links" :key="link.link" class="section" :to="link.link">
    {{link.title}}
  </router-link>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      links: [{
          title: 'Activity',
          link: '/'
        },
        {
          title: 'Rooms',
          link: '/rooms'
        },
        {
          title: 'Parameter',
          link: '/parameter'
        },
      ]
    }
  }
}
</script>

<style>
.sidebar {
  background: white;
  height: 100%;
}

.section:hover {
  cursor: pointer;
  background: #f1f1f1;
}

.section {
  display: flex;
  text-decoration: none;
  color: #202020;
  padding: 2rem;
  font-size: 18px;
  align-items: center;
}
</style>
