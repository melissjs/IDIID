<template>
  <div id="body">
    <SearchResults :searchResults="searchResults" />
    <img class='silvana' alt="Silvana" src="../assets/logo.png">
  </div>
</template>

<script>
  import SearchResults from '../components/SearchResults.vue'
  export default {
    name: 'Body',
    components: {
      SearchResults,
    },
    props: {
      searchResults: Array,
    },
    methods: {},
  }
</script>

<style>
  #body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    margin-top: 8px;
    color: #2c3e50;
  }

  .silvana {
    height: 100%;
    width: 100%;
  }
</style>
