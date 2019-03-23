<template>
  <section class="container">
    <div>
      <h1 class="is-size-4">
        {{ `起床時間:${wakeUpHour}時${wakeUpTime}分` }}
      </h1>
      <countdown />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >解除!!</a>
      </div>
    </div>
  </section>
</template>

<script>
import Countdown from '~/components/Countdown.vue'

export default {
  data() {
    return {
      wakeUpHour: '08',
      wakeUpTime: '30'
    }
  },
  components: {
    'countdown': Countdown
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
</style>
