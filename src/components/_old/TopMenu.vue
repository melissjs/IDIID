<template>
  <div id="top-menu">
    <div class="top-menu-left">
      <span class='menu-item'>
        EXCHANGE
      </span>
      <span class='menu-item'>
        CONNECT
      </span>
      <span class='menu-item'>
        NETWORK
      </span>
    </div>
    <div class="top-menu-right">
      <span>
        <Search @termChange="onTermChange"/>
      </span>
    </div>
  </div>
</template>

<script>
  import Search from '../components/Search.vue'
  export default {
    name: 'TopMenu',
    components: {
      Search,
    },
    props: {
      fillSearchResults: Function,
    },
    methods: {
      onTermChange(searchTerm) {
        this.fillSearchResults(searchTerm)
      }
    }
  }
</script>

<style>
  #top-menu {
    font-family: forma-djr-deck, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    letter-spacing: 2px;
    font-style: normal;
    margin-left: 20px;
    font-weight: 100;
    font-size: 12px;
    color: #2c3e50;
  }

  .top-menu-left {
    text-align: left;
  }

  .top-menu-right {
    position: absolute;
    right: 20px;
    top:  15px;
  }

  .menu-item {
    border-left: 1px solid black;
    background-color: white;
    padding: 3px 10px 0 15px;
    color: black;
  }

  .menu-item:first-child {
    border: none;
    padding-left: 0;
  }

  .menu-item:last-child {
    text-align: right;
  }
</style>
