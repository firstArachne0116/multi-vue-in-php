<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App1',
  data () {
    return {
      msg: 'This is App #1'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
