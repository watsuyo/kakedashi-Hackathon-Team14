<template>
  <section class="container">
    <div class="main">
      <h1 class="is-size-5 wakeUpTime">
        {{ `起床時間:${wakeUpHour}時${wakeUpTime}分` }}
      </h1>
      <img :src="bomb" class="bombImg">
      <countdown class="countdown"/>
    </div>
  </section>
</template>

<script>
import Countdown from '~/components/Countdown.vue'
import bomb from '~/assets/bomb.jpg'


export default {
  data() {
    return {
      wakeUpHour: '08',
      wakeUpTime: '30',
      bomb
    }
  },
  components: {
    'countdown': Countdown,
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: -115px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.wakeUpTime {
  z-index: 5;
}
.bombImg {
  z-index: 4;
}

.main {
  position: relative; 
}
.main .countdown {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;/*余計な隙間を除く*/
  padding:0;/*余計な隙間を除く*/
  color: white;/*アイコン色*/
  font-size: 60px;/*サイズ*/
}
</style>
