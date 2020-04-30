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
          name: 'ram',
          data: this.$store.getters.ram.map(_ => _),
        },
      ]
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'ram',
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
