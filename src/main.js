var Vue = require('vue');
var Sync = require('./sync')
var demo = new Vue({
  el: '#demo',
  data: {
    new_tag: '',
    tags: []
  },
  methods: {
    submit:function(e) {
      var send_data = {name:this.new_tag}
      $.post('http://localhost:3000/tags',send_data)
      this.new_tag = ''
    }
  }
});

demo.tags = new Sync('/tags')
