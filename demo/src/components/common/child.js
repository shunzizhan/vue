export default {
  props: ['message'],
  methods: {
    changeMsg () {
      this.$emit('changeMsg', 'hhahahahhaha')
    }
  }
}
