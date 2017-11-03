import child from './common/child.vue'

export default {
  name: 'hello',
  data () {
    // console.log(new Date());
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
