<template>
  <div id="app">
    <layout>
      <template #sidebar>
        <Sidebar />
      </template>
      <router-view />
    </layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar,
    Layout,
  },
}
</script>

<style lang="css">
:root {
  --monospace-fonts: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
    Courier, monospace;
  --fonts: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

:root {
  --white: #fff;
  --ternary: #112d4e;
  --secondary: #3f72af;
  --primary: #dbe2ef;
  --background: #f9f7f7;
  --contrast-background: #fafdff;
  --contraster-background: #f1faff;
  --background: 249, 246, 246;
  --primary-rgb: 218, 225, 238;
  --secondary-rgb: 63, 114, 175;
  --ternary-rgb: 17, 45, 78;
}

@media (prefers-color-scheme: dark) {
  :root {
    --ternary: #bbe1fa;
    --secondary: #3282b8;
    --primary: #0f4c75;
    --background: #1b262c;
    --contrast-background: #2b3d47;
    --contraster-background: #3c5462;
    --background-rgb: 27, 39, 45;
    --primary-rgb: 15, 76, 117;
    --secondary-rgb: 50, 130, 184;
    --ternary-rgb: 187, 225, 250;
  }
}

#app {
  height: 100vh;
  overflow: hidden;
  font-family: var(--fonts);
}

body {
  margin: 0;
  background: var(--background);
  color: var(--ternary);
}

p {
  margin: 0;
}

* {
  box-sizing: border-box;
}

input {
  color: inherit;
  background: inherit;
  border: none;
  font-size: inherit;
  width: 100%;
  outline: none;
}

input[type='checkbox'] {
  width: auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.pad {
  padding: 12px;
}

.xl-pad {
  padding: 48px;
}

.s-pad {
  padding: 6px;
}

.l-pad {
  padding: 24px;
}

.xs-mar-top {
  margin-top: 3px;
}

.pad-bottom {
  padding-bottom: 6px;
}

.pad-y {
  padding-top: 12px;
  padding-bottom: 12px;
}

.pad-x {
  padding-right: 12px;
  padding-left: 12px;
}

.s-pad-y {
  padding-top: 6px;
  padding-bottom: 6px;
}

.s-pad-x {
  padding-right: 6px;
  padding-left: 6px;
}

.l-pad-x {
  padding-right: 24px;
  padding-left: 24px;
}

.l-pad-y {
  padding-right: 24px;
  padding-left: 24px;
}

.s-mar-y {
  margin-top: 6px;
  margin-bottom: 6px;
}

.s-mar-x {
  margin-right: 6px;
  margin-left: 6px;
}

.mar {
  margin: 12px;
}

.mar-bottom {
  margin-bottom: 6px;
}

.mar-y {
  margin-top: 12px;
  margin-bottom: 12px;
}

.mar-x {
  margin-right: 12px;
  margin-left: 12px;
}

.code-inline {
  background: var(--primary);
  color: inherit;
  border-radius: 5px;
  padding: 3px 6px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
}

.border-radius {
  border-radius: 5px;
}

.grow {
  flex: 1;
}

.visible-s {
  display: none;
}

@media (max-width: 900px) {
  .visible-s {
    display: block;
  }
}

@keyframes pulse {
  from {
    box-shadow: 0px 0px 0px 0px rgba(var(--secondary-rgb), 0.2);
  }

  to {
    box-shadow: 0px 0px 5px 5px rgba(var(--secondary-rgb), 0.2);
  }
}

.pulse {
  animation: pulse 2s infinite running;
}

.capitalize {
  text-transform: capitalize;
}
</style>
