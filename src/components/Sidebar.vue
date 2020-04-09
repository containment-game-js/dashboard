<template>
  <div class="sidebar-main">
    <router-link
      v-for="link in links"
      :key="link.link"
      class="section l-pad-x pad-y"
      :to="link.link"
    >
      <row align="center" justify="center" class="link-icon">
        <font-awesome-icon :icon="link.icon" />
      </row>
      <div class="link-title">
        {{ link.title }}
      </div>
    </router-link>
  </div>
</template>

<script>
import Row from '@/components/Row.vue'

const link = (title, link, icon) => ({ title, link, icon })

export default {
  components: {
    Row,
  },
  data() {
    return {
      links: [
        link('Activity', '/', 'home'),
        link('Rooms', '/rooms', 'users'),
        link('Parameters', '/parameters', 'user'),
      ],
    }
  },
}
</script>

<style>
.sidebar-main {
  background: white;
  height: 100%;
}

.section {
  text-decoration: none;
  color: var(--ternary);
  font-weight: 500;
  border-right: 5px solid var(--white);
  display: flex;
  align-items: center;
}

.link-icon {
  width: 25px;
  height: 25px;
  margin-right: 12px;
  color: var(--secondary);
}

.section:hover {
  cursor: pointer;
  border-right-color: rgba(var(--secondary-rgb), 0.2);
  background: rgba(var(--secondary-rgb), 0.05);
}

.section.router-link-exact-active {
  border-right-color: rgba(var(--secondary-rgb), 0.8);
  background: rgba(var(--secondary-rgb), 0.1);
}
</style>
