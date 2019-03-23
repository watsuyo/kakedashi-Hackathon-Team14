<template>
  <div>
    <h2 class="is-size-4">
        タイムリミット: {{ cowntdown }}
    </h2>
    <div>
      <nuxt-link to="success">
        <h2 @click="stopTimer" class="button is-success">
            STOP!!
        </h2>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      isTimer: true,
      cowntdown: null,
      isMission: true
    }
  },
  created() {

  },
  methods: {
    updateCowntdown () {
      if(this.isTimer){
        const diff = moment( '2019-03-24' ).diff( moment() );
        const duration = moment.duration( diff );
        const days    = Math.floor( duration.asDays() );
        const hours   = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        
        this.cowntdown = `${minutes}分${seconds}秒`;
      } else {
        clearInterval(this.interval)
      }
    },
    stopTimer () {
      this.isTimer = false;
      this.route = 'success';
      console.log(this.route);
    }
  },
  mounted () {
    const interval = setInterval(this.updateCowntdown, 1000);
  }
}
</script>


<style>
</style>
