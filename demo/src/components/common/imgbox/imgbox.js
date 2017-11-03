export default {
  props: [],
  data() {
    return {
      containerImg: null,
      bodyImg: null,
      xRatio: '',
      yRatio: ''
    }
  },
  mounted() {
    // 获取大图元素
    this.containerImg = document.getElementById("myimage");
    // 获取大图元素的真实宽高
    this.bodyImg = this.getRealWH(this.containerImg);
    // 计算width的缩放比例 375
    // this.xRatio = this.bodyImg.x / this.containerImg.offsetWidth;
    this.xRatio = this.bodyImg.x / 375;
    // 计算height的缩放比例 211
    // this.yRatio = this.bodyImg.y / this.containerImg.offsetHeight;
    this.yRatio = this.bodyImg.y / 211;
    this.resetStyle('list-a_1', 'card-a');
    this.resetStyle('list-b_1', 'card-b');
  },
  updated() {
    this.$nextTick(() => {

    })
  },
  methods: {
    /**
     * 获取img的真实宽高
     * @Author   shunzizhan
     * @Email    shunzizhan@163.com
     * @DateTime 2017-10-24T10:42:03+0800
     * @param    {[type]}                 myimage [description]
     * @return   {[type]}                         [description]
     */
    getRealWH(myimage) {
      var rw, rh;
      if (typeof myimage.naturalWidth == "undefined") {　　 // IE 6/7/8　
        var i = new Image();　　
        i.src = myimage.src;　　
        rw = i.width;　　
        rh = i.height;
      } else {　　 // HTML5 browsers
        rw = myimage.naturalWidth;　　
        rh = myimage.naturalHeight;
      }
      return { x: rw, y: rh }
    },
    /**
     * 重新设置元素的样式
     * @Author   shunzizhan
     * @Email    shunzizhan@163.com
     * @DateTime 2017-10-24T10:39:46+0800
     * @param    {[type]}                 ele    [当前点击的元素]
     * @param    {[type]}                 eleTag [目标元素]
     * @param    {[type]}                 xRatio [宽度缩放比例]
     * @param    {[type]}                 yRatio [高度缩放比例]
     * @return   {[type]}                        [description]
     */
    resetStyle(ele, eleTag) {
      var xRatio=this.xRatio;
      var yRatio=this.yRatio;
      var _dom = document.getElementById(ele);

      var partAImg = this.getRealWH(_dom);
      var x = _dom.getAttribute('data-x');
      var y = _dom.getAttribute('data-y');

      var tempX = x / xRatio;
      var tempW = partAImg.x / xRatio;


      var tempY = y / yRatio;
      var tempH = partAImg.y / yRatio;

      var _tagDom = document.getElementById(eleTag);
      _tagDom.src = _dom.src;
      _tagDom.style.left = tempX + 'px';
      _tagDom.style.top = tempY + 'px';
      _tagDom.style.width = tempW + 'px';
      _tagDom.style.height = tempH + 'px';
    },

  }
}
