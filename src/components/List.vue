<template lang="html">
  <table class="list">
    <thead class="list-thead">
      <tr :class="generateColumnsClassName()" class="list-th">
        <th
          v-for="col in columns"
          :key="col.field"
          class="header cell event pad list-td"
        >
          {{ col.name }}
        </th>
      </tr>
    </thead>
    <tbody class="list-tbody">
      <tr
        v-for="(row, idx) in computedRows"
        :key="idx"
        :class="generateColumnsClassName()"
        class="list-tr"
      >
        <td
          class="value cell pad list-td"
          :class="{ even: idx % 2 === 0, odd: idx % 2 !== 0, ...val.classes }"
          v-for="(val, index) in row"
          :key="`${index}${idx}`"
        >
          {{ val.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: Array,
    rows: [Array],
    action: Function,
    sortBy: Function,
  },
  data() {
    return {
      computedRows: [],
      ruleIndex: null,
    }
  },
  mounted() {
    this.createCorrectCssRule(this.columns)
  },
  methods: {
    generateColumnsClassName() {
      const length = this.columns.length
      return `list-columns-template-${length}`
    },
    createCorrectCssRule(newValue, oldValue) {
      const stylesheet = document.getElementById('injected-styles').sheet
      if (this.ruleIndex) {
        const oldLength = (oldValue || []).length
        stylesheet.deleteRule(this.ruleIndex)
      }
      const newLength = newValue.length
      const className = `.${this.generateColumnsClassName()}`
      const classContent = `grid-template-columns: repeat(${newLength}, 1fr);`
      const finalClass = `${className} { ${classContent} }`
      const index = stylesheet.insertRule(finalClass)
      this.ruleIndex = index
    },
    sort(col) {
      if (this.sortBy) {
        this.rows = this.sortBy(col, this.rows)
      }
    },
  },
  computed: {
    columnsTemplate() {
      return this.columns.length
    },
    columnsClass() {
      return this.generateColumnsClassName()
    },
  },
  watch: {
    columns(newValue, oldValue) {
      this.createCorrectCssRule(newValue, oldValue)
    },
    rows: async function (newRows) {
      const lines = await Promise.all(
        newRows.map(async row => {
          return Promise.all(
            this.columns.map(async ({ field, format, ...others }) => {
              const fil = row[field]
              const klasses = others.classes || []
              const classes = klasses.reduce(
                (acc, val) => ({ ...acc, [val]: true }),
                {}
              )
              if (format) {
                return { value: format(fil), classes }
              } else {
                return { value: fil, classes }
              }
            })
          )
        })
      )
      this.computedRows = lines
    },
  },
}
</script>

<style lang="css" scoped>
.list {
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
}

.list-th {
  display: grid;
  height: 100%;
  padding: 0;
}

.list-td {
  display: block;
  height: 100%;
}

.even {
  background: var(--contraster-background);
}

.odd {
  background: var(--contrast-background);
}

.cell {
  flex-shrink: 0;
  text-overflow: ellipsis;
  overflow: hidden;
}

.header.cell {
  font-weight: 500;
  background: var(--contrast-background);
}

.value.cell {
}
</style>
