<template>
  <div class="home">
    <list-cars msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import ListCars from '@/components/ListCars.vue'

export default {
  name: 'Home',
  components: {
    ListCars
  }
}
</script>
