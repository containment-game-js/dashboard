<template lang="html">
  <div class="now">
    <div class="val">
      Sockets : {{socket.length}}
    </div>
    <div class="val">
      Rooms : {{rooms.length}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    socket() {
      return Object.values(this.$store.getters.occupation).reduce((acc, val) => acc.concat(val), [])
    },
    rooms() {
      return this.$store.getters.roomInformation
    }
  }
}
</script>

<style lang="css" scoped>
.val {
  font-size: 26px;
  font-weight: bold;
}
.now {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
</style>
