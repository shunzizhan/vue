import Vue from 'vue';
import app from '../../src/app.vue'

describe('test app.vue',()=>{
	it('组件加载后，title应该是Hello world',()=>{
		let vm = new Vue(app).$mount();
		expect(vm.title).toEqual('Hello world')
	})
})