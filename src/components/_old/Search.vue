<template>
  <input @input="onInput" />
</template>

<script>
  export default {
    name: 'Search',
    components: {
    },
    methods: {
      onInput(e) {
        this.$emit('termChange', e.target.value)
      }
    }
  }
</script>

<style scoped>
  #search {
    font-family: forma-djr-deck, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    font-style: normal;
    font-weight: 700;
    margin-left: 20px;
    color: #2c3e50;
    text-align: right;
  }
</style>
