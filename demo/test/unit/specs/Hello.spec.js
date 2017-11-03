import Vue from 'vue'
import app from '@/App.vue'
import HelloWorld from '@/components/HelloWorld.vue'

// // var dom_p;
describe('app.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(app)
    const vm = new Constructor().$mount()

    // dom_p = vm.$el.querySelector('#app .hh p')
    // console.log('app.vue',dom_p)
    expect(vm.$el.querySelector('#app h1').textContent)
      .to.equal('标题')
    // console.log(vm.$el.querySelector('#app .hh .child2').textContent)
    expect(vm.$el.querySelector('#app .hh .child2').textContent)
      .to.equal('这是子组件')
  })
})

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
