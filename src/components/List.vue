<template lang="html">
  <div class="list">
    <table>
      <thead>
        <th v-for="col in columns" :key="col" @click="sort(col)"> {{col}} </th>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i" @click="action(row, i)">
          <td v-for="(val, j) in row" :key="j"> {{val}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: Array,
    rows: [Array],
    action: Function,
    sortBy: Function,
  },
  methods: {
    sort(col) {
      if (this.sortBy)
        this.rows = this.sortBy(col, this.rows)
    }
  }
}
</script>

<style lang="css" scoped>
.list {
  cursor: pointer;
  border-spacing: 0px;
  border-collapse: collapse;
  width: 100%;
}

.list tbody {
  overflow: scroll;
  background: white;
  border-radius: 8px;
}

.list td {
  border-color: white;
  padding: 2rem;
}

.list tr:hover {
  background: #f1f1f1;
}
.list tr {
  border-bottom: 2px solid #f2f2f2;
  cursor: pointer;
}

.list thead {
  text-transform: uppercase;
  color: #72768a;
  text-align: left;
}

.list th {
  font-weight: normal;
  padding: 12px;
}
</style>
