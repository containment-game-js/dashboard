<template lang="html">
  <tr class="list-th">
    <th
      v-for="col in columns"
      :key="col.field"
      class="list-header list-cell pad list-td"
    >
      {{ col.name }}
    </th>
  </tr>
</template>

<script>
export default {
  props: {
    columns: Array,
  },
}
</script>
