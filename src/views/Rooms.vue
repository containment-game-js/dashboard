<template lang="html">
  <div class="rooms-display pad">
    <List
      :rows="$store.getters.roomInformation"
      :columns="col"
      :action="click"
    />
  </div>
</template>

<script>
import faker from 'faker'
import List from '@/components/List.vue'

export default {
  components: {
    List,
  },
  computed: {},
  data() {
    return {
      col: [
        { name: 'ID', field: 'id' },
        { name: 'Name', field: 'name' },
        {
          name: 'Players',
          field: 'players',
          format: players => players.map(({ name }) => name).join('\n'),
        },
        { name: 'Created At', field: 'createdAt' },
        { name: 'Updated At', field: 'updatedAt' },
      ],
    }
  },
  methods: {
    click(row, i) {
      this.$router.push('room/' + row[0])
    },
  },
}
</script>

<style lang="css" scoped>
.rooms-display {
  overflow: hidden;
  height: 100%;
}
</style>
