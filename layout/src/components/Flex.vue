<template>
  <div>
      <div class='color one'>
        <div class='item'/>
      </div>
      <div class='color two'>
        <div class='item'/>
        <div class='item'/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Flex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .color {
    background-color: gray;
    width: 90px;
    height: 90px;
    border-radius: 1px;
  }
  .item {
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%
  }
  .one {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .two {
    display: flex;
    justify-content: space-between;
  }
</style>
