# vue学习
  [参考示例](http://www.cnblogs.com/rik28/p/6024425.html)
  
> Vue.js是当下很火的一个JavaScript MVVM库，它是以数据驱动和组件化的思想构建的。相比于Angular.js，Vue.js提供了更加简洁、更易于理解的API，使得我们能够快速地上手并使用Vue.js。

## 步骤
- 定义View
- 定义Model
- 创建一个Vue实例或"ViewModel"，它用于连接View和Model

## 基本语法
> [可下载](https://github.com/vuejs/vue-devtools),压缩版已集成，直接在控制台中可以修改数据模型，改变视图

### v-model指令
> input框的双向绑定
> v-if="expression"

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
```html
    <div id="app-7">
      <ol>
        <!-- 现在我们为每个todo-item提供待办项对象    -->
        <!-- 待办项对象是变量，即其内容可以是动态的 -->
        <todo-item v-for="item in groceryList" v-bind:todo="item" :mytext="item.text | capitalize(item.text)"></todo-item>
      </ol>
      <div>
        <silde-item  v-for="item in groceryList" :mydata="item"></silde-item>
      </div>
    </div>
    <script src="libs/dist/vue.min.js"></script>
    <script src="component/component.js"></script>
    <script>
      // var exampleData = {
      //   message:'hello World',
      //   yes:true
      // }
      // new Vue({
      //     el:'.app',
      //     data: exampleData
      //   });
      var app7 = new MyComponent({
        el: '#app-7',
        data: {
          groceryList: [
            { id:1,text: '蔬菜' },
            { id:2,text: '奶酪' },
            { id:3,text: '随便其他什么人吃的东西' }
          ]
        }
      })
    </script>
```
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

### 基础例子

  计算属性是基于它们的依赖进行缓存的 
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

### Methods
  只要发生重新渲染，method 调用总会执行该函数
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
      methods:{
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
### Watched
  建议用computed取代
```html
    <div id="example">
      <p>firstName: <input type="text" v-model="firstName" ></p>
      <p>lastName: <input type="text" v-model="lastName"></p>
      <p>fullName: {{ fullName }}</p>
    </div>
    <script src="/libs/dist/vue.min.js"></script>
    <script>
      var vm = new Vue({
        el:'#example',
        data:{
          'firstName':'张三',
          'lastName':'李四',
          'fullName':'张三李四'
        },
        watch: {
          firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
          },
          lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
          }
        },
        // computed: {
        //   fullName: function () {
        //     return this.firstName + ' ' + this.lastName
        //   }
        // }
      })
    </script>
```

### setter
```html
    <div id="example">
      <p>firstName: <input type="text" v-model="firstName" ></p>
      <p>lastName: <input type="text" v-model="lastName"></p>
      <p>fullName: <input type="text" v-model="fullName"></p>
    </div>
    <script src="/libs/dist/vue.min.js"></script>
    <script>
      var vm = new Vue({
        el:'#example',
        data:{
          'firstName':'张三',
          'lastName':'李四',
          'fullName':''
        },
        computed: {
          fullName: {
            // getter
            get: function () {
              return this.firstName + '-' + this.lastName
            },
            // setter
            set: function (newValue) {
              var names = newValue.split('-')
              this.firstName = names[0]
              this.lastName = names[names.length - 1]
            }
          }
        }
      })
    </script>
```

### Watchers


## [Style](https://cn.vuejs.org/v2/guide/class-and-style.html)

### class
```html
    <style>
      .active{
        color:#007dd4;
      }
      .text-danger{
        color:#f00;
      }
    </style>
    <div id="example">
      <div v-bind:class="{ active: isActive }">我是高亮</div>
      <div class="static"
           v-bind:class="{ active: isActive, 'text-danger': hasError }">我是警告
      </div>
      <div v-bind:class="classObject">我是computed计算出来的</div>
    </div>
    <script src="/libs/dist/vue.min.js"></script>
    <script>
      var vm = new Vue({
        el:"#example",
        data: {
          isActive: true,
          hasError: true,
          error: null
        },
        computed: {
          classObject: function () {
            return {
              active: this.isActive && !this.error,
              'text-danger': this.error && this.error.type === 'fatal',
            }
          }
        }
      })
    </script>
```

### 数组语法
以把一个数组传给 v-bind:class ，以应用一个 class 列表
```html
  <div :class="[activeClass, errorClass]">我是样式数组demo</div>
  <div v-bind:class="[isActive ? activeClass : '', errorClass]"> //当条件判断太多 比较混乱 改进为3
  <div v-bind:class="[{ active: isActive }, errorClass]"> //推荐

  <style>
    .active{
      color:#007dd4;
    }
    .text-danger{
      color:#f00;
    }
  </style>
  <div id="example">
    <div :class="[activeClass, errorClass]">我是样式数组demo</div>
    <div :class="[isActive ? activeClass : '', errorClass]">我是条件判断的数组样式</div>
    <div :class="[{ active: isActive }, errorClass]">我是条件判断的数组样式2</div>
  </div>
  <script src="/libs/dist/vue.min.js"></script>
  <script>
    var vm = new Vue({
      el:"#example",
      data: {
        activeClass: 'active',
        errorClass: 'text-danger',
        isActive:true,
        
      }
    })
  </script>
  
  <div id="example">
    <div class="active text-danger">我是样式数组demo</div> 
    <div class="active text-danger">我是条件判断的数组样式</div> 
    <div class="active text-danger">我是条件判断的数组样式2</div>
  </div>
```

### 组件上使用
```html
    <div id="example">
      <my-component class="baz boo"></my-component>
      <my-component :class="{active:isActive}"></my-component>
    </div>
    <script src="/libs/dist/vue.min.js"></script>
    <script>
      Vue.component('my-component', {
        template: '<p class="foo bar">Hi</p>'
      })
      var vm = new Vue({
        el:"#example",
        data:{
          isActive:true
        }
      })
    </script>


    <div id="example"><p class="foo bar baz boo">Hi</p> <p class="foo bar active">Hi</p></div>
```

## [列表](https://cn.vuejs.org/v2/guide/list.html)
### 基础
  在 v-for 块中，我们拥有对父作用域属性的完全访问权限。 v-for 还支持一个可选的`第二个参数为当前项的索引`。
```html
  <ul id="example-2">
    <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
  </ul>
```
### 对象迭代-v-for
  你也可以提供第二个的参数为键名
  第三个参数为索引
```html
  <div v-for="(value, key, index) in object">
    {{ index }}. {{ key }} : {{ value }}
  </div>
```
### 整数迭代-v-for
```html
  <div>
    <span v-for="n in 10">{{ n }}</span>
  </div>
```
### 数组更新检测
Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse() 
```html
    <div id="example">
      <span v-for="n in myArr">{{ n }}</span>
    </div>
    <script src="/libs/dist/vue.min.js"></script>
    <script>
      var vm = new Vue({
        el:"#example",
        data:{
          myArr:[1,2,3,4,5,6,7,8,9,10]
        }
      })
      setTimeout(function(){
        vm.myArr.push(11);
      },2000)
    </script>
```
### 重塑数组
非变异(non-mutating method)方法，例如： filter(), concat(), slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用`新数组替换旧数组`：
```html
  <div id="example">
    <span v-for="n in myArr">{{ n }}</span>
  </div>
  <script src="/libs/dist/vue.min.js"></script>
  <script>
    var vm = new Vue({
      el:"#example",
      data:{
        myArr:[1,2,3,4,5,6,7,8,9,10]
      }
    })
    // setTimeout(function(){
    //   vm.myArr.push(11);
    // },2000)
    vm.myArr = vm.myArr.filter(function(item) {
      return item>5;
    });
  </script>
```
**注意事项**
由于 JavaScript 的限制， Vue 不能检测以下变动的数组
  - 当你利用索引直接设置一个项时，例如： vm.items[indexOfItem] = newValue
  - 当你修改数组的长度时，例如： vm.items.length = newLength
为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果， 同时也将触发状态更新：
```javaScript
  // Vue.set
  Vue.set(example1.items, indexOfItem, newValue)
```
```javaScript
  // Vue.set
  example1.items.splice(indexOfItem, 1, newValue)
```
为了解决第二类问题，你也同样可以使用 splice：
```javaScript
  // Vue.set
  example1.items.splice(newLength)
```

## 事件处理器
### 内联处理器方法
```html
  <div id="example-3">
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
  </div>
  var example2 = new Vue({
    el: '#example-3',
    methods: {
      say: function (message) {
        alert(message)
      }
    }
  })
```
有时也需要在内联语句处理器中访问原生 DOM 事件。可以用特殊变量 `$event`把它传入方法
```html
  <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
  methods: {
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault()
      alert(message)
    }
  }
```

### 事件修饰符
在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在 methods 中轻松实现这点，但更好的方式是：methods 只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
为了解决这个问题， Vue.js 为 v-on 提供了 事件修饰符。通过由点(.)表示的指令后缀来调用修饰符。
- .stop
- .prevent
- .capture
- .self
- .once
```html
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

### 按键修饰符
```html
<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">

<!-- 同上 -->
<input v-on:keyup.enter="submit">
<!-- 缩写语法 -->
<input @keyup.enter="submit">
```
- .enter
- .tab
- .delete (捕获 “删除” 和 “退格” 键)
- .esc
- .space
- .up
- .down
- .left
- .right
- .ctrl
- .alt
- .shift
- .meta

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
```javaScript
// 可以使用 v-on:keyup.f1
Vue.config.keyCodes.f1 = 112
```

## [forms](https://cn.vuejs.org/v2/guide/forms.html)
### 单选

### 多选

### 下拉列表

### 修饰符
- lazy
>在默认情况下， v-model 在 input 事件中同步输入框的值与数据 (除了 上述 IME 部分)，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：
```html
<!-- 在 "change" 而不是 "input" 事件中更新 -->
<input v-model.lazy="msg" >
```

- number
> 如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值：
```html
<input v-model.number="age" type="number">
```
- trim
> 如果要自动过滤用户输入的`首尾空格`，可以添加 trim 修饰符到 v-model 上过滤输入：
```html
<input v-model.trim="msg">
```
