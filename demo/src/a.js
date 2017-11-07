import child from '@/components/common/child.vue'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '标题',
      message: '这是子组件',
      curLang: 'en'
    }
  },
  components: {
    'vc-message': child
  },
  mounted() {
    this.title = 'Hello world shunzizhan'
  },
  methods: {
    setMessage(msg) {
      this.message = msg
    },
    changeLang() {
      // console.log(this.curLang)
      // AppLanguage(this.curLang)

      this.$i18n.locale = this.curLang
      // this.$http.get('/static/i18n/' + this.curLang + '.json').then(function(res) {
      //   if (Object.keys(res.data).length === 0) {
      //     console.log('Language Package Error!!')
      //   } else {
      //     // this.locale(lang, res.data)
      //     this.$i18n.messages = res.data;
      //   }
      // }).then(function(err) {
      //   console.log('Server Connect Error!!');
      // })
    }
  }
}
