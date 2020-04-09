<template lang="html">
  <div class="aeraz">
    <List :rows="rows" :columns="col" :action="click"/>
  </div>
</template>

<script>
import faker from 'faker'
import List from '@/components/List.vue'
export default {
  components: {
    List
  },
  computed: {
    rows() {
      return Array(50).fill(1).map(_ => ([
        faker.random.uuid(),
        faker.date.past(),
        faker.date.recent(),
        faker.hacker.noun() + faker.random.number(),
        Array(4).fill(1).map(_ => faker.internet.userName())
      ]))
    }
  },
  data() {
    return {
      col: [
        'roomID',
        'createdAt',
        'updatedAt',
        'name',
        'players',
      ],
    }
  },
  methods: {
    click(row, i) {
      this.$router.push('room/' + row[0])
    }
  }
}
</script>

<style lang="css" scoped>
</style>
