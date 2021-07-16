
<template>
  <button :class="buttonClass" @click="onClick" :disabled="disable">
    {{ buttonTitle }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: ['buttonClass', 'buttonTitle', 'disable'],
  methods: {
    onClick () {
      this.$emit('on-click')
    }
  }
}
</script>

