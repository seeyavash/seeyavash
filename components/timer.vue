<template>
  <span>
    <b v-if="secs > 0 || mins > 0" :class="`text-${color}`" class="sans-light">
      {{ secs }} : {{ mins }}
    </b>
    <b v-else :class="`text-${color}`" class="sans-light">
      00:00
    </b>
  </span>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    seconds: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  data () {
    return {
      secs: null,
      mins: null,
      duration: null
    }
  },
  watch: {
    seconds () {
      this.timer()
    },
    secs () {
      if (Number(this.secs) === 0 && Number(this.mins) === 0) {
        this.onFinish()
      }
    }
  },
  mounted () {
    if (this.seconds > 0) {
      this.timer()
    }
  },
  methods: {
    timer () {
      let minutes, seconds
      let duration = this.seconds
      if (duration > (60 * 15)) {
        duration = 60 * 15
      }

      const vm = this
      const timer = setInterval(() => {
        minutes = parseInt(duration / 60, 10)
        seconds = parseInt(duration % 60, 10)

        vm.mins = minutes < 10 ? '0' + minutes : minutes
        vm.secs = seconds < 10 ? '0' + seconds : seconds

        if (--duration < 0) {
          clearInterval(timer)
        }

        this.$emit('input', duration)
      }, 1000)
    },

    onFinish () {
      this.$emit('onFinish')
    }
  }
}
</script>
