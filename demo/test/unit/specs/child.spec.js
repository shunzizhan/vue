import Vue from 'vue'
import child from '@/components/common/child.vue'

describe('child.vue', () => {
  var Constructor = Vue.extend(child)
  var vm = new Constructor().$mount()

  it('should render correct contents', () => {
    // console.log(vm.$el.querySelector('.child'))
    expect(vm.$el.querySelector('.child').textContent)
      .to.equal('shunzizhan')
  })

  describe('测试点击更新文本', () => {
    const Constructor = Vue.extend(child)
    const vm = new Constructor().$mount()
    beforeEach((done) => {
      console.log(vm.$el.querySelector('#myclick'))
      vm.$el.querySelector('#myclick').click()
      console.log(11111111111111)
      done()
    })
    it('fuck MB', () => {
      setTimeout(done => {
        const newTxt = vm.$el.querySelector('.child2').textContent
        console.log(newTxt)
        expect(newTxt).to.equal('hhahahahhaha')
        done()
      }, 100)
    })
  })
})
