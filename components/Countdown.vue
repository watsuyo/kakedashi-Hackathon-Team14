<template>
  <div>
    <div class="cowntdownPage">
      <div>
        <h2 class="box">
          <p class="is-size-6	dethTweet">悪魔ツイートまで</p>
          <div class="button is-danger is-rounded is-large remaining">残り</div>
          <div class="timer">
            <p class="is-size-1">{{ cowntdown }}</p>
          </div>
        </h2>
      </div>
      <div>
        <nuxt-link to="success">
          <h2 @click="stopTimer" class="button is-danger is-large stop">
              STOP!!
          </h2>
        </nuxt-link>
      </div>
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
      isMission: true,
    }
  },
  created() {

  },
  methods: {
    updateCowntdown () {
      if(this.isTimer){
        const diff = moment( '2019-03-24 10:46' ).diff( moment() );
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
    }
  },
  mounted () {
    const interval = setInterval(this.updateCowntdown, 1000);
  }
}
</script>

<style>
.cowntdownPage{
  z-index: 5;
}
.stop {
  top: 300px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
.box {
  width: 320px;
  height: 200px;
}
.timer {
  /* bottom: 50px; */
}
.remaining {
  /* top: 30px; */
}
/* .dethTweet {
  top: 40px;
} */
</style>
