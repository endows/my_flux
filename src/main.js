var Vue = require('vue');
var demo = new Vue({
  el: '#demo',
  data: {
    count: 1
  },
  methods:{
    inc:function(){
      this.count ++
    }
  }
});

setInterval(function(){
  // demo.inc()
  demo.count = demo.count + 1
  console.log('plued')
},1000)
