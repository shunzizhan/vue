Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义属性
  // 这个属性名为 todo。
  props: ['todo','mytext'],
  // template: '<li v-bind="id = todo.id">{{mytext}}</li>'
  template: '<li v-bind:id= "todo.id">{{mytext}}</li>'
})
Vue.component('silde-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义属性
  // 这个属性名为 todo。
  props: ['mydata'],
  // template: '<li v-bind="id = todo.id">{{mytext}}</li>'
  template: '<p v-bind:id= "mydata.id">{{mydata.text}}</p>'
})

var MyComponent = Vue.extend({
  // 扩展选项
  filters: {
    capitalize: function (item) {
      if (!item) {
        return ''
      }else{
        // value = value.toString()
        // return value.charAt(0).toUpperCase() + value.slice(2)
        // item.text += "哈哈哈" ;
        return item + "哈哈哈" ;
      }
    }
  }
})