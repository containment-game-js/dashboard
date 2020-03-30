<template lang="html">
  <apexchart width="100%" type="pie" :options="chartOptions" :series="series"></apexchart>

</template>

<script>
export default {
  data() {
    return {
      series: [20, 12, 68],
      chartOptions: {
        labels: ['Idle', 'Preparation', 'Code name']
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
