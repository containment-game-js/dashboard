<template lang="html">
  <div class="now">
    <div class="val">
      Sockets : {{socket}}
    </div>
    <div class="val">
      Rooms : {{rooms}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socket: 123,
      rooms: 51,
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
