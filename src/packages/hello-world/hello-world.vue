<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'PlHelloWorld',
    props: {
      msg: String,
    },
  }
</script>

<style scoped>

</style>