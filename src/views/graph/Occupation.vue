<template lang="html">
  <apex-chart
    v-if="occupation.idle && occupation.preparation && occupation.inGame"
    width="100%"
    type="pie"
    :options="chartOptions"
    :series="series"
  />
  <div v-else></div>
</template>

<script>
export default {
  computed: {
    occupation() {
      return this.$store.getters.occupation
    },
    series() {
      const { idle, preparation, inGame } = this.occupation
      return [
        Object.keys(idle).length,
        Object.keys(preparation).length,
        Object.keys(inGame).length,
      ]
    },
  },
  data() {
    return {
      chartOptions: {
        labels: ['Idle', 'Preparation', 'Code name'],
        animations: {
          enabled: false,
        },
      },
    }
  },
}
</script>
