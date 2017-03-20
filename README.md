# vue学习
  [参考示例](http://www.cnblogs.com/rik28/p/6024425.html)
  
> Vue.js是当下很火的一个JavaScript MVVM库，它是以数据驱动和组件化的思想构建的。相比于Angular.js，Vue.js提供了更加简洁、更易于理解的API，使得我们能够快速地上手并使用Vue.js。

## 步骤
- 定义View
- 定义Model
- 创建一个Vue实例或"ViewModel"，它用于连接View和Model

## 基本语法
> [可下载](https://github.com/vuejs/vue-devtools),压缩版已集成，直接在控制台中可以修改数据模型，改变视图

### v-if指令
> v-if是条件渲染指令，它根据表达式的真假来`删除和插入`元素，它的基本语法如下：
> v-if="expression"

### v-show指令
> v-show也是条件渲染指令，和v-if指令不同的是，使用v-show指令的元素始终会被渲染到HTML，它只是简单地为元素设置CSS的style display属性。

### v-else指令
> 可以用v-else指令为v-if或v-show添加一个“else块”。v-else元素`必须`立即跟在v-if或v-show元素的后面——否则它不能被识别。
> v-else 在亲测，只能与v-if配套使用，与v-show 配套使用无效

### v-for指令
> v-for指令基于一个数组渲染一个列表，它和JavaScript的遍历语法相似：
> v-for="item in items" 
> items是一个数组，item是当前被遍历的数组元素。 

### v-bind指令
> v-bind指令可以在其名称后面带一个参数，中间放一个冒号隔开，这个参数通常是HTML元素的特性（attribute），例如：v-bind:class
> v-bind:argument="expression"

### v-on指令
> v-on指令用于给监听DOM事件，它的用语法和v-bind是类似的，例如监听<a>元素的点击事件：
```html
<a v-on:click="doSomething">
```

## 自定义指令
```javaScript
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
```

## [过滤器](https://cn.vuejs.org/v2/guide/syntax.html#过滤器)
```javaScript
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
```

## [计算属性](https://cn.vuejs.org/v2/guide/computed.html#基础例子)
```html
  <div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>Computed message Add '哈哈哈哈': "{{ addMessage }}"</p>
  </div>
  <script src="libs/dist/vue.min.js"></script>
  <script>
    var vm = new Vue({
      el:'#example',
      data:{
        'message':'hello'
      },
      computed:{
        reversedMessage:function(){
          return this.message.split('').reverse().join('');
        },
        addMessage:function(){
          return this.message+"哈哈哈";
        }
      }
    })
  </script>
```