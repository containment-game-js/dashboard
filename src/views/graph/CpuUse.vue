<template lang="html">
  <apex-chart
    width="100%"
    type="line"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
export default {
  computed: {
    series() {
      return [
        {
          name: 'cpu',
          data: this.$store.getters.cpu.map(_ => _),
        },
      ]
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'cpu',
        },
        xaxis: {
          labels: {
            formatter: function (value, timestamp) {
              const date = new Date(timestamp)
              return `${date.getHours()}:${date.getMinutes()}`
            },
          },
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return Number.parseFloat(value).toFixed(2)
            },
          },
        },
      },
    }
  },
}
</script>

<style lang="css" scoped></style>
