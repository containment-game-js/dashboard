<template lang="html">
  <table class="list-list">
    <thead class="list-thead">
      <list-head :class="columnsClass" :columns="columns" />
    </thead>
    <tbody class="list-tbody">
      <list-rows
        :class="columnsClass"
        v-for="(row, idx) in computeRows()"
        :key="idx"
        :value="row"
        :index="idx"
      />
    </tbody>
  </table>
</template>

<script>
import ListHead from '@/components/List/Head.vue'
import ListRows from '@/components/List/Rows.vue'
import * as list from '@/helpers/list'

export default {
  components: {
    ListHead,
    ListRows,
  },
  props: {
    columns: Array,
    rows: [Array],
    action: Function,
    sortBy: Function,
  },
  data() {
    return {
      ruleIndex: null,
    }
  },
  mounted() {
    list.createCorrectCssRule(this.ruleIndex, this.columns)
  },
  methods: {
    computeRows() {
      return this.rows.map(async row => {
        const columns = this.columns.map(this.computeRowColumns(row))
        return Promise.all(columns)
      })
    },
    computeRowColumns(row) {
      return async function ({ field, format, ...others }) {
        const fil = row[field]
        const klasses = others.classes || []
        const toObject = (acc, val) => ({ ...acc, [val]: true })
        const classes = klasses.reduce(toObject, {})
        if (format) {
          return { value: format(fil), classes }
        } else {
          return { value: fil, classes }
        }
      }
    },
  },
  computed: {
    columnsClass() {
      return list.generateColumnsClassName(this.columns)
    },
  },
  watch: {
    columns(newValue, oldValue) {
      if (newValue.length !== oldValue.length) {
        list.createCorrectCssRule(this.ruleIndex, newValue, oldValue)
      }
    },
  },
}
</script>

<style lang="css">
.list-list {
  display: grid;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 1px var(--primary);
  grid-template-rows: auto 1fr;
  max-height: 100%;
  overflow: hidden;
  background: var(--contrast-background);
}

.list-thead {
  display: block;
}

.list-tbody {
  display: block;
  overflow: auto;
}

.list-tr {
  display: grid;
  align-items: center;
  justify-items: center;
}

.list-th {
  display: grid;
  height: 100%;
  padding: 0;
}

.list-td {
  display: block;
}

.list-cell {
  text-overflow: ellipsis;
  overflow: hidden;
}

.list-header.list-cell {
  font-weight: 500;
  background: var(--contrast-background);
}

.list-value.list-cell {
}
</style>
