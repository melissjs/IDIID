<template>
  <div id="app">
    <Header :fillSearchResults="fillSearchResults" />
    <Body :searchResults="searchResults" />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Body from './components/Body.vue'

  export default {
    name: 'App',
    components: {
      Footer,
      Header,
      Body,
    },
    methods: {
      fillSearchResults(term) {
        if (term.length > 0) {
        this.searchResults = this.startingData.filter(d => d.img.includes(term))
        } else this.searchResults = []
      }
    },
    data() {
      return {
        startingData: [
          {
            img: 'silvana0.jpg'
          },
          {
            img: 'silvana1.jpg'
          },
          {
            img: 'silvana2.jpg'
          },
          {
            img: 'deanna.jpg'
          },
        ],
        searchResults: [],
      };
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 8px;
  color: #2c3e50;
}
</style>
