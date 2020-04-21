<template lang="html">
  <tr class="list-tr" :class="{ even: index % 2 === 0, odd: index % 2 !== 0 }">
    <td
      v-for="(value, key) in content"
      :key="`${key}${index}`"
      class="list-cell pad list-td"
      :class="value.classes"
    >
      {{ value.value }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    value: Promise,
    index: Number,
  },
  data() {
    return {
      content: [],
    }
  },
  methods: {
    unwrapPromise: async function (val) {
      const value = await val
      this.content = value
    },
  },
  mounted() {
    this.unwrapPromise(this.value)
  },
  watch: {
    value(newValue) {
      this.unwrapPromise(newValue)
    },
  },
}
</script>

<style lang="css" scoped>
.even {
  background: var(--contraster-background);
}

.odd {
  background: var(--contrast-background);
}
</style>
