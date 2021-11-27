<template>
  <div class="logo">
    <h3>
      INTERFACE
      <span class='logo-black'>
        DISTRICT
      </span>
    </h3>
  </div>
</template>

<script>
  export default {
    name: 'Logo',
    components: {
    }
  }
</script>

<style>
  .logo {
    display: inline-block;
  }

  .logo h3 {
    font-family: forma-djr-deck, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 2px;
    font-style: normal;
    margin-left: 20px;
    text-align: left;
    font-weight: 900;
    color: #2c3e50;
  }

  .logo-black {
    background-color: #2c3e50;
    padding: 20px 5px 0 5px;
    color: white;
  }
</style>
