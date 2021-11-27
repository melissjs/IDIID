<template>
  <li class="search-results-item">
    {{ img }}
  </li>
</template>

<script>
  export default {
    name: 'SearchResultsItem',
    components: {
    },
    props: {
      searchResult: Object,
    },
    computed: {
      img() { return this.searchResult.img },
    }
  }
</script>

<style>
  .search-results-item {
    font-family: forma-djr-deck, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    font-style: normal;
    text-align: left;
    font-weight: 700;
    margin-left: 20px;
    color: #2c3e50;
  }
</style>
