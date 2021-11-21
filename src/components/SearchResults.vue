<template>
  <ul class="search-results">
    <SearchResultsItem
      v-for="searchResult in searchResults"
      :searchResult="searchResult"
      :key="searchResult.img"
      />
  </ul>
</template>

<script>
  import SearchResultsItem from '../components/SearchResultsItem.vue'
  export default {
    name: 'SearchResults',
    components: {
      SearchResultsItem,
    },
    props: {
      searchResults: Array,
    },
    methods: {
    }
  }
</script>

<style>
  .search-results {
    display: block;
  }
</style>
