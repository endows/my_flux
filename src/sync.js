window.$ = require('jquery')
var se = new EventSource("http://localhost:3000/tags");
se.onmessage = function(e){
  data = JSON.parse(e.data)
  console.log(data)
}

module.exports = function(){
  data = {
    '1':{name:'Node.js'},
    '2':{name:'Ruby'}
  }
  return data
}
