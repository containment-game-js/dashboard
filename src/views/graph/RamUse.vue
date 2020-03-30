<template lang="html">
  <apexchart width="100%" type="line" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'ram',
        },

      },
      series: [{
          name: 'ram',
          data: [0, 1, 5, 10, 11, 12, 22, 27, ]
        },
      ]
    }
  },
}
</script>

<style lang="css" scoped>
</style>
