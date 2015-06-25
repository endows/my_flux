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
      this.tags.push(this.new_tag)
      this.new_tag = ''
    }
  }
});

demo.tags = new Sync('/tags')
