<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App2',
  data () {
    return {
      msg: 'This is App #2'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
