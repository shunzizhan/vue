import child from '@/components/common/child.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '标题',
      message: '这是子组件'
    }
  },
  components: {
    'vc-message': child
  },
  mounted () {
    this.title = 'Hello world shunzizhan'
  },
  methods: {
    setMessage (msg) {
      this.message = msg
    }
  }
}
