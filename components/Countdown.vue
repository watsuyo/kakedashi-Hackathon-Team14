<template>
  <div>
    <h2 class="is-size-4">
        タイムリミット: {{ cowntdown }}
    </h2>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      cowntdown: ''
    }
  },
  components: {

  },
  created() {
    // this.cowntdown();
  },
  methods: {
    updateCowntdown () {
      const diff = moment( '2019-03-24' ).diff( moment() );
      const duration = moment.duration( diff );
      const days    = Math.floor( duration.asDays() );
      const hours   = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      
      this.cowntdown = `${minutes}分${seconds}秒`;
    }
  },
  mounted () {
    this.cowntdown = setInterval(this.updateCowntdown, 1000)
  },
  destroyed () {
    clearInterval(this.cowntdown)
  }
}
</script>


<style>
</style>
