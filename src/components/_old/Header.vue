<template>
  <div id="header">
    <Logo />
    <TopMenu :fillSearchResults="fillSearchResults" />
  </div>
</template>

<script>
  import Logo from '../components/Logo.vue'
  import TopMenu from '../components/TopMenu.vue'
  export default {
    name: 'Header',
    components: {
      Logo,
      TopMenu,
    },
    props: {
      fillSearchResults: Function,
    },
    methods: {
    }
  }
</script>

<style scoped>
  #header {
    display: block;
  }
</style>
