<template lang="html">
  <div class="layout" :class="{ full }">
    <nav class="navbar l-pad-x pad-y">
      <h1>Dashboard</h1>
      <div class="visible-s break mar" />
      <slot name="navbar" />
    </nav>
    <aside class="sidebar">
      <slot name="sidebar" />
    </aside>
    <main :class="full ? 'full-height' : 'main pad'">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  props: {
    full: Boolean,
  },
}
</script>

<style lang="css" scoped>
.layout {
  display: grid;
  grid-template-areas:
    'navbar navbar'
    'sidebar main';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
}

@media (max-width: 900px) {
  .break {
    flex-basis: 100%;
    height: 0;
    border-bottom: 1px solid var(--primary);
  }
}

.full {
  height: 100vh;
}

.full-height {
  height: 100%;
}

.navbar {
  grid-area: navbar;
  border-bottom: 1px solid var(--secondary);
  display: flex;
  position: sticky;
  top: 0;
  background: var(--primary);
  align-items: center;
  z-index: 1;
  flex-wrap: wrap;
}

.main {
  position: relative;
  overflow: hidden;
}

.sidebar {
  overflow-y: scroll;
  border-right: 1px solid var(--secondary);
}
</style>
