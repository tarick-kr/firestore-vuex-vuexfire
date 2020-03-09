<template>
  <div class="hello">
    <h1>Список автомобилей</h1>
    <ul>
      <li v-for="(car, index) in getCarsSortByYear" :key="car.name + index">
        <h3>{{car.name}}</h3>
        <span>{{car.year}}</span><br>
        <span>{{car.color}}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(car, index) in getCarsReversYear" :key="car.name + index">
        <h3>{{car.name}}</h3>
        <span>{{car.year}}</span><br>
        <span>{{car.color}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'ListCars',
  mounted () {
    this.getCarsList()
  },
  computed: {
    ...mapGetters([
      'getCarsSortByYear',
      'getCarsReversYear'
    ])
  },
  methods: {
    getCarsList () {
      this.$store.dispatch('loadCarsList')
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
