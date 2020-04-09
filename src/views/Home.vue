<template>
<div class="home">
  <div class="grid">
    <div class="element">
      <label for="activity">Activity</label>
      <Activity id="activity"/>
    </div>
    <div class="element">
      <ActivityNow/>
    </div>
    <div class="element">
      <label for="occupation">Occupation</label>
      <Occupation id="occupation"/>
    </div>
    <div class="element">
      <label for="ramuse">Ram utilization</label>
      <RamUse id="ramuse"/>
    </div>
    <div class="element">
      <label for="ramuse">Cpu utilization</label>
      <CpuUse id="ramuse"/>
    </div>
  </div>
</div>
</template>

<script>
import Activity from '@/views/graph/Activity.vue'
import ActivityNow from '@/views/graph/ActivityNow.vue'
import Occupation from '@/views/graph/Occupation.vue'
import RamUse from '@/views/graph/RamUse.vue'
import CpuUse from '@/views/graph/CpuUse.vue'
export default {
  name: 'Home',
  components: {
    Activity,
    ActivityNow,
    RamUse,
    Occupation,
    CpuUse,
  }
}
</script>

<style media="screen">
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 10px;
}
.element {
  background: white;
}
.element label {
  padding: 10px;
  font-style: italic;
}
</style>
