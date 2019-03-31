<template>
  <div>
    <div class="cowntdownPage">
      <div>
        <h2 class="box">
          <p class="is-size-6	deathTweet">悪魔ツイートまで</p>
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
import axios from 'axios'

export default {
  head: () => ({
    script: [
      { src: 'https://apis.google.com/js/client.js' }
    ]
  }),
  data() {
    return {
      isTimer: true,
      cowntdown: null,
      isMission: true,
      base: '2019-03-31 12:30',
      SCOPES: [
        'https://www.googleapis.com/auth/script.external_request',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    }
  },
  created() {

  },
  methods: {
    updateCowntdown () {
      if(this.isTimer){
        const diff = moment( this.base ).diff( moment() );
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
    },
    async deathTweet () {
      console.log(process.env.CLIENT_ID);
      console.log(process.env.SCRIPT_ID);
      gapi.client.init({
      clientId: process.env.CLIENT_ID,
      scope: this.SCOPES.join(' ')
      }).then(async () => {
        if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
          await gapi.auth2.getAuthInstance().signIn()
        }
        console.log('before');
        await gapi.client.load('script', 'v1')
        console.log('after')
        const result = await gapi.client.script.scripts.run({
          scriptId: process.env.SCRIPT_ID,
          resource: {
            function: 'doGet',
            parameters: []
          }
        }).catch((e) => { console.error(e) })
      }, (e) => { console.error(e) })
    }
  },
  mounted () {
    const interval = setInterval(this.updateCowntdown, 1000);
      console.log(process.env.CLIENT_ID);
      console.log(process.env.SCRIPT_ID);
  },
  watch: {
    cowntdown: {
      handler () {
        if(this.cowntdown === '0分0秒') {
          console.log('deathTweet準備');
          this.deathTweet();
        }
      },
      deep: true
    }
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
/* .deathTweet {
  top: 40px;
} */
</style>
