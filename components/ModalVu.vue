<template>
  <div class="modal-component">
    <transition name="fade" @click="close">
      <div v-if="isOpen" class="modal-bg" @click="close" />
    </transition>
    <transition name="bounce">
      <div v-if="isOpen" class="modal">
        <div class="modal-container">
          <div class="modal-head">
            <slot name="head" class="pull-right display-inline-block" />
          </div>
          <div class="body">
            <slot name="body" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    isOpen () {
      if (this.isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    $route () {
      // eslint-disable-next-line vue/no-mutating-props
      this.isOpen = false
      document.body.style.overflow = 'auto'
      this.close()
    }
  },
  mounted () {
    const vm = this
    window.addEventListener('keyup', (ev) => {
      if (ev.key === 'Escape') {
        vm.close()
      }
    })
  },
  beforeDestroy () {
    document.body.style.overflow = 'auto'
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
