// 保持发布使用相对路径
// fis.hook('relative');

//域
// 测试环境
fis.set('domain_test', ''); //开发环境静态资源
// 预发布环境
fis.set('domain_pre', 'http://preuc.fdc.com.cn');
// 线上环境
// fis.set('domain_build', 'http://img3.fdc.com.cn/usercenter');
fis.set('domain_build', 'http://test.uc.fdc.com.cn');
// 定义版本号
fis.set('version', '1.0.0');

// // 排除指定目录和文件
// fis.set('project.ignore', [
//     '.git/**',
//     '.svn/**',
//     'node_modules/**',
//     '*.bat',
//     '*.cmd',
//     '*.log',
//     'fis-conf.js',
//     "package.json",
//     "**/___*.png", //过滤三下划线开头的预览图片
//     '**/*.less'
// ]);

var urlConfig = {
  test:{
    _index: "http://www.fdc.com.cn",                        //首页
    _news: "http://news.fdc.com.cn/",                       //资讯
    _jzzn: "http://dec.fdc.com.cn/jzzn/",                   //家居指南
    _nh: "http://house.wh.test.fdc.com.cn",                 //新房  
    _oh: "http://oldhouse.wh.test.fdc.com.cn/",             //二手房
    _zf: "http://zufang.fdc.com.cn",                        //租房
    _sp: "http://sp.fdc.com.cn/",                           //商业
    _zxgs: "http://dec.fdc.com.cn/zxgs/",                   //家居装修
    _life: "http://life.fdc.com.cn/",                       //生活
    _bbs: "http://test.sns.fdc.com.cn/",                    //论坛
    _ds: "http://ds.fdc.com.cn/",                           //电商
    _ucurl: "http://test.uc.fdc.com.cn/router/rest"
  },
  pre:{
    _index: "http://www.fdc.com.cn",                        //首页
    _news: "http://news.fdc.com.cn/",                       //资讯
    _jzzn: "http://dec.fdc.com.cn/jzzn/",                   //家居指南
    _nh: "http://house.wh.fdc.com.cn",                      //新房  
    _oh: "http://oldhouse.wh.fdc.com.cn/",                  //二手房
    _zf: "http://zufang.fdc.com.cn",                        //租房
    _sp: "http://sp.fdc.com.cn/",                           //商业
    _zxgs: "http://dec.fdc.com.cn/zxgs/",                   //家居装修
    _life: "http://life.fdc.com.cn/",                       //生活
    _bbs: "http://presns.fdc.com.cn/",                      //论坛
    _ds: "http://ds.fdc.com.cn/",                           //电商
    _ucurl: "http://test.uc.fdc.com.cn/router/rest"
  },
  build:{
    _index: "http://www.fdc.com.cn",                        //首页
    _news: "http://news.fdc.com.cn/",                       //资讯
    _jzzn: "http://dec.fdc.com.cn/jzzn/",                   //家居指南
    _nh: "http://house.wh.test.fdc.com.cn",                 //新房  
    _oh: "http://oldhouse.wh.test.fdc.com.cn/",             //二手房
    _zf: "http://zufang.fdc.com.cn",                        //租房
    _sp: "http://sp.fdc.com.cn/",                           //商业
    _zxgs: "http://dec.fdc.com.cn/zxgs/",                   //家居装修
    _life: "http://life.fdc.com.cn/",                       //生活
    _bbs: "http://test.sns.fdc.com.cn/",                    //论坛
    _ds: "http://ds.fdc.com.cn/",                           //电商
    _ucurl: "http://test.uc.fdc.com.cn/router/rest"
  }
}

// 过滤指定的文件类型
fis.set('project.files', [
  '*.css',
  'js/**',
  'images/**',
  '*.html',
  '*.swf'
]);
fis.set('project.ignore', [
    // "tpl/**" 
]);

fis.match("*", {
        // domain: "${domain_pre}",
        relative: true
    })
    .match('::package', {
      spriter: fis.plugin('csssprites', {
        htmlUseSprite: true, //开启模板内联css处理,默认关闭
        styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig,
        margin: 5 //图之间的边距
      })
    })
    // js进行压缩，并使用hash值
    // .match("/js/*.js", {
    //     // useHash: true,
    //     optimizer: fis.plugin('uglify-js', {
    //         mangle: {
    //           except: 'exports, module, require, define' //不需要混淆的关键字
    //         },
    //         compress: {
    //           drop_console: true //自动删除console
    //         }
    //     })
    // })
    // 将less文件编译成css
    .match('/css/*.less', {
        parser: fis.plugin('less'),
        rExt: '.css'
    })
    // 对css进行压缩，使用hash值，并合成雪碧图
    .match('/css/*.{less,css}', {
        // useHash: true,
        useSprite: true,
        optimizer: fis.plugin('clean-css')
    })
    // 给图片添加hash值
    .match("::image", {
        // useHash: true
    })
    // 压缩图片
    .match('images/*.png', {
        optimizer: fis.plugin('png-compressor', {
            type: 'pngquant'
        })
    })
    // 将合成的雪碧图直接放在images/sprite文件中
    .match('/css/(*.{png,gif})', {
      //发布到/images/sprite/xxx目录下
      release: '/images/sprite/$1$2'
    })
    .match('/tpl/**', {
      release: false
    });
    

// 测试开发
fis.media('test')
    .match("*", {
        domain: "${domain_test}",
    })
    .match('*.html,*.js', {
      parser: fis.plugin('html-replaceurl', {
        newWords: urlConfig.test
      })
    });

// 预发布
fis.media('pre')
    .match("*", {
      domain: "${domain_pre}",
      // deploy: [
      //   fis.plugin('skip-packed', {
      //     // 配置项
      //     skipPackedToCssSprite:true
      //   }),
      //   fis.plugin('http-push', {
      //     // receiver: 'http://192.168.1.9:8999/receiver',
      //     // //远端目录
      //     // to: '/root/fis_test/test/'
      //   })
      // ]
    });

// 线上
fis.media('build')
    .match('*', {
      domain: "${domain_build}"
    })
    // .match('*.html', {
    //   deploy: fis.plugin('http-push', {
    //     receiver: 'http://192.168.1.9:8999/receiver',
    //     //远端目录
    //     to: '/root/fis_test/html/'
    //   })
    // })
    // .match('/{js,css,images}/**', {
    //   deploy: [
    //     fis.plugin('skip-packed', {
    //       // 配置项
    //       skipPackedToCssSprite:true
    //     }),
    //     fis.plugin('http-push', {
    //       receiver: 'http://192.168.1.9:8999/receiver',
    //       //远端目录
    //       to: '/root/fis_test/other/'
    //     })
    //   ]
    // })
