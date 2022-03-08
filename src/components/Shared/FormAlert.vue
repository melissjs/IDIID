<template>
  <v-alert type="error" :value="true" transition="scale-transition" dismissible>
    <h6>{{message}}</h6>
  </v-alert>
</template>

<script>
  export default {
    props: ['message']
  }
</script>
