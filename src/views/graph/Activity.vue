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
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'activity',
        },
      },
      series: [
        {
          name: 'socket',
          data: [0, 1, 5, 10, 11, 12, 22, 27],
        },
        {
          name: 'room',
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped></style>
